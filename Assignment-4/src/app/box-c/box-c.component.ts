import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-box-c',
  templateUrl: './box-c.component.html',
  styleUrls: ['./box-c.component.css'],
  animations: [
    trigger('fadeIn', [

      transition(':enter', [
        style({ backgroundColor: 'white',color: 'white', opacity:0}),
        animate('1s 3000ms ease-in', style({backgroundColor:'cornflowerblue', opacity: 1 }))
    ]),
  ]),

  trigger('fadeOut',[
    state("void", style(
     {
       opacity:1
    }
    )),

    state("*", style(
      {
         "display" : "none"
      }
    
    )),
    transition('* => void', [animate(6000)]),
    transition('void => *', [animate(5000)])
    

  ])
  ]
})
export class BoxCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
