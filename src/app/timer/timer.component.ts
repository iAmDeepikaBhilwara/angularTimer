import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {


  constructor() { }

  ngOnInit() {
     for (var i = 1; i <= 100; i++) {

       (function(i){ 
           
          setTimeout(function() {document.writeln(" " +i+"<br>");
           console.log(i) },i* 1000);
          
 
      })(i);
 
 
    
    // for(var i=0;i<=100;i++){
    //   setTimeout(() => {console.log(i);
    //   }, i*5000);
      
    // }
    // // this.time=[2,3,4,5];
    // // for(let tim of this.time){
    // //   console.log(tim);
    // }
  

  }
}
}