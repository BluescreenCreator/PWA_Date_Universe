import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { Date } from '../date';

/*
interface DateCategory {
  value: string;
  viewValue: string;
}
*/

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  dates: Date[] = [];

  /*
  dateCategory: DateCategory[] = [
    {value: 'romatic-0', viewValue: 'Romatic'},
    {value: 'classic-1', viewValue: 'Classic'},
    {value: 'action-2', viewValue: 'Action'},
    {value: 'humor-3', viewValue: 'Humor'},
  ];
  */
 
  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.loadDates();
  }

  async add(title: string, category: string) {
    await this.dateService.add(title, category);
    await this.loadDates();
  }
  
  async sync(){
    await this.dateService.sync();
    await this.loadDates();
  }

  async toggleDone(date: Date){
    await this.dateService.toggleDone(date);
    await this.loadDates();
  }

  async loadDates() {
    this.dates = await this.dateService.getAll();
  }

}
