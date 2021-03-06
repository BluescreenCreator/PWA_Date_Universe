import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { Date } from '../date';

interface DateCategory {
  value: string;
  viewValue: string;
}

interface RandomDate {
  r_title: string;
  r_category: string;
}


@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent implements OnInit {
  dates: Date[] = [];

  dateCategory: DateCategory[] = [
    { value: 'romantic', viewValue: 'Romantic' },
    { value: 'classic', viewValue: 'Classic' },
    { value: 'action', viewValue: 'Action' },
    { value: 'humor', viewValue: 'Humor' },
  ];
  
  randomDate: RandomDate[] = [
    { r_title: 'Candle light Dinner', r_category: 'romantic' },
    { r_title: 'Sauna', r_category: 'romantic' },
    { r_title: 'Therme', r_category: 'romantic' },
    { r_title: 'Lagerfeuer', r_category: 'romantic' },
    { r_title: 'Autokino', r_category: 'classic' },
    { r_title: 'Weihnachtsmarkt', r_category: 'classic' },
    { r_title: 'Minigolf', r_category: 'classic' },
    { r_title: 'Picknick', r_category: 'classic' },
    { r_title: 'Wasserski', r_category: 'action' },
    { r_title: 'Fallschirm springen', r_category: 'action' },
    { r_title: 'Kanufahren', r_category: 'action' },
    { r_title: 'Schlittschuhlaufen', r_category: 'action' },
    { r_title: 'Haare schneiden', r_category: 'humor' },
    { r_title: 'Weinverkostung', r_category: 'humor' },
    { r_title: 'Cocktails mixen', r_category: 'humor' },
    { r_title: 'Jahrmarkt', r_category: 'humor' },
  ];


  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.loadDates();
  }

  async add(title: string, category: string) {
    await this.dateService.add(title, category);
    await this.loadDates();
  }

  async deleteDate(id: string) {
    await this.dateService.deleteDate(id);
    await this.loadDates();
  }

  async sync() {
    await this.dateService.sync();
    await this.loadDates();
  }

  async toggleDone(date: Date) {
    await this.dateService.toggleDone(date);
    await this.loadDates();
  }

  async loadDates() {
    this.dates = await this.dateService.getAll();
  }

  async createRandomDate() {
    var randomNumber = Math.floor(Math.random()*this.randomDate.length);
    var randomDate = this.randomDate[randomNumber];
    await this.dateService.add(randomDate.r_title, randomDate.r_category);
    await this.loadDates()
  }
}
