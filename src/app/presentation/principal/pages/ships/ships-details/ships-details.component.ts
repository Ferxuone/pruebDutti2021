import { Component, OnInit } from '@angular/core';
import { PaginationModel } from 'src/app/core/models/pagination.models';
import { ShipResponseModel } from 'src/app/core/models/ships.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { setListInStore } from 'src/app/core/actions/ships.actions';
import { ShipsService } from 'src/app/core/services/ships/ships.service';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  shipsPage$: Observable<ShipResponseModel>;
  config: PaginationModel;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor(
    private store: Store<{ships: ShipResponseModel}>,
    private shipsService: ShipsService
  ) {
    this.shipsPage$ = this.store.select('ships');
  }
  
  ngOnInit(): void {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 0
    };
    this.shipsPage$.subscribe(
      (shipsPage: ShipResponseModel) => {
        if (shipsPage) {
          this.config.totalItems = shipsPage.count;
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
    this.shipsService.getShips(event).subscribe(
      (shipsPage: ShipResponseModel) => {
        this.store.dispatch(setListInStore({shipsPage: shipsPage}));
      }
    );
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
