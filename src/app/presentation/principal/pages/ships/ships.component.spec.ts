import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsService } from 'src/app/core/services/ships/ships.service';
import { ShipsComponent } from './ships.component';
import { BehaviorSubject } from 'rxjs';
import { ShipModel } from 'src/app/core/models/ships.models';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;
  const serviceMock ={
    getShips:function(){ return  new BehaviorSubject([])}
  }
  let store: MockStore<{ships: ShipModel[]}>;
  const initialState = {ships: []};

  
  @Component({
    selector: 'ships-details',
    template: '<p>Mock Ship Details</p>'
  })
  class MockShipDetails {
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsComponent,MockShipDetails ],
      providers:[
        {provide: ShipsService, useValue: serviceMock},
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
    store = TestBed.get<Store>(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
