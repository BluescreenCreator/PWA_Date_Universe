import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { v4 } from 'uuid'; 
import { Date } from './date';

@Injectable({
  providedIn: 'root'
})

export class DateService extends Dexie {
  dates!: Dexie.Table<Date, string>;

  constructor(private httpClient: HttpClient) {
    super('DateDB');

    this.version(1).stores({
      dates: 'id'
    });
   }

   getAll(){
     return this.dates.toArray();
   }

   add(title: string){
    this.dates.add({title, id: v4(), done: false});
  }

  async sync() {
    const allDates = await this.getAll();
    const syncedDates = await this.httpClient.post<Date[]>('http://localshost:3030/sync', allDates).toPromise();
    this.dates.bulkPut(syncedDates!);
  }
}
