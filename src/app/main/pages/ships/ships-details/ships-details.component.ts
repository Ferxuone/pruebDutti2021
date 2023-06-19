import { Component, OnInit } from '@angular/core';
import { PaginationModel } from 'src/app/core/models/pagination.models';
import { ShipModel, ShipResponseModel } from 'src/app/core/models/ships.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { setListInStore } from 'src/app/core/actions/ships.actions';
import { ShipsService } from 'src/app/core/services/ships/ships.service';
declare var $: any;


@Component({
  selector: 'app-ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  shipsPage$: Observable<ShipResponseModel>;
  config: PaginationModel;
  shipId = '';
  url = '';
  // Modal
  titleDetails = '';
  modelDetails = '';
  starshipClass = '';

  constructor(
    private store: Store<{shipsPage: ShipResponseModel}>,
    private shipsService: ShipsService
  ) {
    this.shipsPage$ = this.store.select('shipsPage');
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

  getStarshipImage(url: string): string {
    this.shipId = url.slice(0, -1);
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${this.shipId.split('/').pop()}.jpg`;
    return urlImage;
  }

  pageChanged(event){
    this.shipsService.getShips(event).subscribe(
      (shipsPage: ShipResponseModel) => {
        this.store.dispatch(setListInStore({ shipsPage }));
      }
    );
    this.config.currentPage = event;
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starshipClass = details.starship_class;
  }

  trackByName(index: number, item: ShipModel): string {
    return item.name;
  }

}
