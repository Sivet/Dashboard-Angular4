import { Component, Input, OnInit } from '@angular/core';
import { WidgetComponent } from '../../../services/widgetLibrary-service/widget.component';

import * as $ from 'jquery';

@Component({
  selector: '[app-template-date-time-picker]',
  templateUrl: './template-date-time-picker.component.html',
  styleUrls: ['./template-date-time-picker.component.css']
})
export class TemplateDateTimePickerComponent  implements WidgetComponent, OnInit {
  @Input() id: number;
  @Input() title: string;

  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  datepickerOpts = {
    autoclose: true,
    todayHighlight: true,
    assumeNearbyYear: true,
    format: 'd MM yyyy'
}

private apiUrl: string;


  constructor() { }

  ngOnInit() {
  }

 //test
  getDate(dt: Date): string {
    return dt.toISOString().slice(0,10) + " " +  dt.getHours() + ":" + (dt.getMinutes()<10?'0':'') + dt.getMinutes();
  }

  getApiData(){
    var dateFrom = this.dateFrom.toISOString().slice(0,10);
    var timeFrom = this.dateFrom.getHours() + ":" + (this.dateFrom.getMinutes()<10?'0':'') + this.dateFrom.getMinutes();
    var dateTo = this.dateTo.toISOString().slice(0,10);
    var timeTo =  this.dateTo.getHours() + ":" + ( this.dateTo.getMinutes()<10?'0':'') +  this.dateTo.getMinutes();


    this.apiUrl = "http://adm-trafik-01.odknet.dk:1000/api/InsertRealController/InsertRealActioName?from="+ dateFrom +"&to="+"test"+"&station="+ "test"+ "";

  }


}
