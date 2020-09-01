import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'app-box-b',
  templateUrl: './box-b.component.html',
  styleUrls: ['./box-b.component.css'],
  animations: [
    trigger('fadeIn', [

      transition(':enter', [
        style({ backgroundColor: 'white',color: 'white', opacity:0}),
        animate('1s 2000ms ease-in', style({backgroundColor:'#15ACEE', opacity: 1 }))
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
    transition('* => void', [animate(4000)]),
    transition('void => *', [animate(7000)])
    

  ])
  ]
})
export class BoxBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
