import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { Date } from '../date';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  dates: Date[] = [];

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.loadDates();
  }

  async add(title: string) {
    await this.dateService.add(title);
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
