import { style } from '@angular/animations';
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
    if (category == "action" || category == "humor" || category == "romantic" || category == "classic"){
      if (title !== "") {
        this.dates.add({ title, category, id: v4(), done: false });
      } else {
        alert("Please enter a title!")
      }
    } else if (title !== ""){
      if(category == "action" || category == "humor" || category == "romantic" || category == "classic"){
        this.dates.add({ title, category, id: v4(), done: false });
      }else {
        alert("Please enter a date category!")}
    } else {alert("Please enter your date idea!")}
  }

  deleteDate(id: string) {
    this.dates.delete(id);
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
