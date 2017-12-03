import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  hours = [];
  minutes = [];

  selectedTime: any = 'AM';
  selectedHour: any = '0';
  selectedMinute: any = '00';
  clicked: boolean = false;
  open: boolean = false;

  ngOnInit() {
    this.initHours();
    this.initMinutes();
  }

  initHours() {
    let array = [];
    let degree = 30;

    this.hours['hour'] = 12;
    this.hours['degree'] = 0 + 'deg';

    for (let i = 1; i < 13; i++) {
      let temp = [];
      temp['hour'] = i;
      temp['degree'] = degree + 'deg';
      degree = degree + 30;
      this.hours.push(temp);
    }
  }

  initMinutes() {
    let array = [];
    let degree = 6;

    this.hours['minute'] = 60;
    this.hours['degree'] = 0 + 'deg';

    for (let i = 1; i < 61; i++) {
      let temp = [];
      temp['minute'] = i;
      if (temp['minute'] % 5) {
        temp['hide'] = i;
      }
      temp['degree'] = degree + 'deg';
      degree = degree + 6;
      this.minutes.push(temp);
    }
  }
  setHour(hour) {
    this.clicked = true;
    this.selectedHour = hour;
    this.emitValues();
  }

  setMinute(min) {
    this.clicked = true;
    this.selectedMinute = this.pad(min, 2);
    this.emitValues();
  }

  setTime(value) {
    if (this.selectedTime == 'AM') {
      this.selectedTime = 'PM';
    } else {
      this.selectedTime = 'AM';
    }

    this.emitValues();
  }

  emitValues() {
    this.notify.emit({
      'hour': this.selectedHour,
      'minute': this.selectedMinute,
      'time': this.selectedTime
    });
  }

  openClock() {
    this.open = !this.open;
  }

  pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }
}
