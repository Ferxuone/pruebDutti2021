import { Component, OnInit } from '@angular/core';

import { ShipResponseModel } from 'src/app/core/models/ships.models';
import { ShipsService } from 'src/app/core/services/ships/ships.service';
import { Store } from '@ngrx/store';
import { setListInStore } from 'src/app/core/actions/ships.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  constructor(
    private shipsService: ShipsService,
    private store: Store<{shipsPage: ShipResponseModel}>
  ) { }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((shipsPage: ShipResponseModel) => {
      this.store.dispatch(setListInStore({ shipsPage }));
    });
  }
}
