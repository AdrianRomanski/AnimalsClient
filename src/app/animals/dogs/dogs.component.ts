import {Component, Input, OnInit} from '@angular/core';
import {DogsDataService} from './dogs-data.service';
import {Dog} from '../../model/Dog';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit{

  public DisplayedColumns: string[] = ['race', 'color', 'size', 'weight', 'details', 'edit', 'delete'];

  public DogsDataSource: BehaviorSubject<Array<Dog>>;

  dogs: Array<Dog>;
  selectedDog: Dog;
  action: string;

  constructor(private dogsDataService: DogsDataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dogsDataService.getDogs().subscribe(
      (next) => {
        this.dogs = next;
      }
    );

    this.DogsDataSource = new BehaviorSubject<Array<Dog>>(
      this.dogs
    );

    this.route.queryParams.subscribe(
      (params) => {
        const id = params.id;
        this.action = params.action;
        if (id) {
          this.selectedDog = this.dogs.find(dog => dog.id === +id);
        }
      }
    );
  }

  getDog(id: number): void {
    this.router.navigate(['admin', 'dogs'], {queryParams : {id, action : 'view'}});
  }

  addDog(): void {
    this.selectedDog = new Dog();
    this.router.navigate(['admin', 'dogs'], {queryParams : {action : 'add'}});
  }

  editDog(dogID: number): void {
    this.router.navigate(['admin', 'dogs'], {queryParams: {action: 'edit', id : dogID}});
  }

}
