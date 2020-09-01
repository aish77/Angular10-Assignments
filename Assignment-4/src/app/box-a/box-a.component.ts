import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-box-a',
  templateUrl: './box-a.component.html',
  styleUrls: ['./box-a.component.css'],
  animations: [
    trigger('fadeIn', [

      transition(':enter', [
        style({ backgroundColor: 'white',color: 'white', opacity:0}),
        animate(2000, style({backgroundColor: 'teal', opacity: 1 }))
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
    transition('* => void', [animate(2000)]),
    transition('void => *', [animate(8000)])
    

  ])
  ]
})
export class BoxAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
