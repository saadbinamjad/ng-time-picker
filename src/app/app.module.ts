import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimePickerModule } from './time-picker/time-picker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
