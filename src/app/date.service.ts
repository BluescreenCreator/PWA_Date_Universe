import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { v4 } from 'uuid';
import { Date } from './date';

@Injectable({
  providedIn: 'root',
})
export class DateService extends Dexie {
  dates!: Dexie.Table<Date, string>;

  constructor(private httpClient: HttpClient) {
    super('DateDB');

    this.version(1).stores({
      dates: 'id',
    });
  }



  getAll() {
    return this.dates.toArray();
  }

  add(title: string, category: string) {
    this.dates.add({ title, category, id: v4(), done: false });
  }

  deleteDate() {
    
    this.dates.delete("1dd1bf6a-d12a-4c0b-b734-ef0813d6988b");
  }

  toggleDone(date: Date) {
    date.done = !date.done;
    return this.dates.put(date);
  }

  async sync() {
    const allDates = await this.getAll();
    const syncedDates = await this.httpClient
      .post<Date[]>('http://localshost:3030/sync', allDates)
      .toPromise();
    this.dates.bulkPut(syncedDates!);
  }
}
