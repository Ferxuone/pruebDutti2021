import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsDetailsComponent } from './ships-details.component';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ShipModel } from 'src/app/core/models/ships.models';

describe('ShipsDetailsComponent', () => {
  let component: ShipsDetailsComponent;
  let fixture: ComponentFixture<ShipsDetailsComponent>;
  let store: MockStore<{ships: ShipModel[]}>;
  const initialState = {ships: []};

  @Component({
    selector: 'pagination-controls',
    template: '<p>Mock Pagination controls Component</p>'
  })
  class MockPaginationControls {}
  @Pipe({name: 'paginate'})
  class MockPipe implements PipeTransform {
      transform(value: number): number {
          //Do stuff here, if you want
          return value;
      }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsDetailsComponent, MockPaginationControls, MockPipe ],
      providers: [
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
