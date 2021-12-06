import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  times: Time[] =[  
    {dayOfWeek:'Monday', time1:'Busy', time2:'Busy', time3:'Busy',time4:'Busy', time5:'Busy', time6:'Busy', time7:'Busy', time8:'Busy', time9:'Busy', time10:'Busy', time11:'Busy', time12:'Busy', time1b:'Busy', time2b:'Busy', time3b:'Busy', time4b:'Busy', time5b:'Busy', time6b:'Busy', time7b:'Busy', time8b:'Busy', time9b:'Busy', time10b:'Busy', time11b:'Busy', time12b:'Busy'},     
    {dayOfWeek:'Tuesday',time1:'Busy', time2:'Busy', time3:'Busy',time4:'Busy', time5:'Busy', time6:'Busy', time7:'Busy', time8:'Busy', time9:'Busy', time10:'Busy', time11:'Busy', time12:'Busy', time1b:'Busy', time2b:'Busy', time3b:'Busy', time4b:'Busy', time5b:'Busy', time6b:'Busy', time7b:'Busy', time8b:'Busy', time9b:'Busy', time10b:'Busy', time11b:'Busy', time12b:'Busy'},     
    {dayOfWeek:'Wednesday', time1:'Busy', time2:'Busy', time3:'Busy',time4:'Busy', time5:'Busy', time6:'Busy', time7:'Busy', time8:'Busy', time9:'Busy', time10:'Busy', time11:'Busy', time12:'Busy', time1b:'Busy', time2b:'Busy', time3b:'Busy', time4b:'Busy', time5b:'Busy', time6b:'Busy', time7b:'Busy', time8b:'Busy', time9b:'Busy', time10b:'Busy', time11b:'Busy', time12b:'Busy'},     
    {dayOfWeek:'Thursday', time1:'Busy', time2:'Busy', time3:'Busy',time4:'Busy', time5:'Busy', time6:'Busy', time7:'Busy', time8:'Busy', time9:'Busy', time10:'Busy', time11:'Busy', time12:'Busy', time1b:'Busy', time2b:'Busy', time3b:'Busy', time4b:'Busy', time5b:'Busy', time6b:'Busy', time7b:'Busy', time8b:'Busy', time9b:'Busy', time10b:'Busy', time11b:'Busy', time12b:'Busy'},     
    {dayOfWeek:'Friday', time1:'Busy', time2:'Busy', time3:'Busy',time4:'Busy', time5:'Busy', time6:'Busy', time7:'Busy', time8:'Busy', time9:'Busy', time10:'Busy', time11:'Busy', time12:'Busy', time1b:'Busy', time2b:'Busy', time3b:'Busy', time4b:'Busy', time5b:'Busy', time6b:'Busy', time7b:'Busy', time8b:'Busy', time9b:'Busy', time10b:'Busy', time11b:'Busy', time12b:'Busy'},     
    {dayOfWeek:'Saturday', time1:'Busy', time2:'Busy', time3:'Busy',time4:'Busy', time5:'Busy', time6:'Busy', time7:'Busy', time8:'Busy', time9:'Busy', time10:'Busy', time11:'Busy', time12:'Busy', time1b:'Busy', time2b:'Busy', time3b:'Busy', time4b:'Busy', time5b:'Busy', time6b:'Busy', time7b:'Busy', time8b:'Busy', time9b:'Busy', time10b:'Busy', time11b:'Busy', time12b:'Busy'},     
    {dayOfWeek:'Sunday', time1:'Busy', time2:'Busy', time3:'Busy',time4:'Busy', time5:'Busy', time6:'Busy', time7:'Busy', time8:'Busy', time9:'Busy', time10:'Busy', time11:'Busy', time12:'Busy', time1b:'Busy', time2b:'Busy', time3b:'Busy', time4b:'Busy', time5b:'Busy', time6b:'Busy', time7b:'Busy', time8b:'Busy', time9b:'Busy', time10b:'Busy', time11b:'Busy', time12b:'Busy'}   

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

class Time {  
  dayOfWeek : string | undefined;
  time1 : string | undefined;
  time2 : string | undefined;
  time3 : string | undefined;
  time4 : string | undefined;
  time5 : string | undefined;
  time6 : string | undefined;
  time7 : string | undefined;
  time8 : string | undefined;
  time9 : string | undefined;
  time10 : string | undefined;
  time11 : string | undefined;
  time12 : string | undefined;
  time1b : string | undefined;
  time2b : string | undefined;
  time3b : string | undefined;
  time4b : string | undefined;
  time5b : string | undefined;
  time6b : string | undefined;
  time7b : string | undefined;
  time8b : string | undefined;
  time9b : string | undefined;
  time10b : string | undefined;
  time11b : string | undefined;
  time12b : string | undefined; 
}  
