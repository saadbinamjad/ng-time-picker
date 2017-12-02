import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimePickerComponent],
  exports: [TimePickerComponent]
})
export class TimePickerModule { }
