import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsDetailsComponent } from './ships-details.component';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ShipResponseModel } from 'src/app/core/models/ships.models';
import { ShipsService } from 'src/app/core/services/ships/ships.service';
import { BehaviorSubject } from 'rxjs';

describe('ShipsDetailsComponent', () => {
  let component: ShipsDetailsComponent;
  let fixture: ComponentFixture<ShipsDetailsComponent>;
  const serviceMock = {
    getShips() { return  new BehaviorSubject({}); }
  };
  let store: MockStore<{shipsPage: ShipResponseModel}>;
  const initialState = {shipsPage: {}};

  @Component({
    selector: 'pagination-controls',
    template: '<p>Mock Pagination controls Component</p>'
  })
  class MockPaginationControls {}
  @Pipe({name: 'paginate'})
  class MockPipe implements PipeTransform {
      transform(value: number): number {
          // Do stuff here, if you want
          return value;
      }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsDetailsComponent, MockPaginationControls, MockPipe ],
      providers: [
        {provide: ShipsService, useValue: serviceMock},
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
    store = TestBed.get<Store>(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
