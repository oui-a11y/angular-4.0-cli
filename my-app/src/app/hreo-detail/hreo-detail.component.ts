import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hreo-detail',
  templateUrl: './hreo-detail.component.html',
  styleUrls: ['./hreo-detail.component.css']
})


export class HreoDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
