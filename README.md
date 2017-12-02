# ng-time-picker

**Analog Time Picker based on Angular 2+**

## Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.
It's my tiny attempt to publish my second node package. I may not continue to support this package. But lets see!

## Installation

To install this module to an external project, follow the procedure:

1. __npm install ng-time-picker --save__

2. Add __TimePickerModule__ import to your __@NgModule__ like example below. 
  
    ```ts
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';
    import { TimePickerModule } from 'ng-time-picker';


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
    ```
## Usage

1. You just need to listen to the event emitter of the component.
    
    ```html
    <ng-time-picker (notify)="onNotify($event)"></ng-time-picker>
    ```

2.  Use the function in your component:


    ```ts
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {

    onNotify($event) { 
      console.log($event);
    }

    }
    ```
  
## Demo
Online demo is [here](https://saadbinamjad.github.io/ng-time-picker/).

## Github: 
https://github.com/saadbinamjad/ng-time-picker

## Package: 
https://www.npmjs.com/package/ng-time-picker

## License
* License: MIT

## Author
* Author: saadbinamjad

## Keywords
* Angular
* Angular2
* Angular 2+
* Time Picker

