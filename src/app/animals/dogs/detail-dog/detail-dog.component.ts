import {Component, Input, OnInit} from '@angular/core';
import {Dog} from '../../../model/Dog';

@Component({
  selector: 'app-detail-dog',
  templateUrl: './detail-dog.component.html',
  styleUrls: ['./detail-dog.component.css']
})
export class DetailDogComponent implements OnInit {

  @Input()
  dog: Dog;

  constructor() { }

  ngOnInit(): void {
  }

}
