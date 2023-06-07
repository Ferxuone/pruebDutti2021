import { Component, OnInit } from '@angular/core';
import { ShipModel, ShipResponseModel } from 'src/app/core/models/ships.models';
import { ShipsService } from 'src/app/core/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: ShipModel[] = [];

  constructor( private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((ships: ShipResponseModel) => {
      this.dataList = ships.results;
      console.log('SHIPS -->', this.dataList)
    })
  }
}
