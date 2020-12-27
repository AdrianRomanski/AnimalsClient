import { Injectable, EventEmitter } from '@angular/core';
import {Dog} from './model/Dog';

@Injectable({
  providedIn: 'root'
})
export class FormResetService {

  resetDogFormEvent = new EventEmitter<Dog>();

  constructor() { }
}
