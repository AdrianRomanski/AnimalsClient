import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDogComponent } from './detail-dog.component';

describe('DetailDogComponent', () => {
  let component: DetailDogComponent;
  let fixture: ComponentFixture<DetailDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
