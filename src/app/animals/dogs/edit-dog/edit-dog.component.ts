import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Dog} from '../../../model/Dog';
import {DogsDataService} from '../dogs-data.service';
import {Router} from '@angular/router';
import {FormResetService} from '../../../form-reset.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.css']
})
export class EditDogComponent implements OnInit, OnDestroy {

  @Input()
  dog: Dog;

  formDog: Dog;

  dogResetSubscription: Subscription;

  constructor(private dataService: DogsDataService,
              private router: Router,
              private formResetService: FormResetService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.dogResetSubscription = this.formResetService.resetDogFormEvent.subscribe(
      dog => {
        this.dog = dog;
        this.initializeForm();
      }
    );
  }

  ngOnDestroy(): void {
    this.dogResetSubscription.unsubscribe();
  }

  initializeForm(): void {
    this.formDog = Object.assign({}, this.dog);
    console.log(this.dog.race);
  }


  onSubmit(): void {
    if (this.formDog.id == null) {
      ///
    } else {
      this.dataService.updateDog(this.formDog).subscribe(
        (dog) => {
          this.router.navigate(['admin', 'dogs'], {queryParams: {action: 'view', id: dog.id}});
        }
      );
    }
  }


}
