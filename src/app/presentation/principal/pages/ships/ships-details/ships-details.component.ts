import { Component, OnInit } from '@angular/core';
import { PaginationModel } from 'src/app/core/models/pagination.models';
import { ShipModel } from 'src/app/core/models/ships.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  ships$: Observable<ShipModel[]>;
  config: PaginationModel;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor(
    private store: Store<{ships: ShipModel[]}>
  ) {
    this.ships$ = this.store.select('ships');
  }
  
  ngOnInit(): void {
    this.ships$.subscribe(
      (ships: ShipModel[]) => {
        if (ships) {
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: ships.length
          };
        }
      }
    );
  }

  getStarshipImage(url: string) {
    this.shipId = url.slice(0, -1);
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${this.shipId.split('/').pop()}.jpg`;
    return urlImage;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
