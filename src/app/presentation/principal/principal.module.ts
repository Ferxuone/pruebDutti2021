import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { ShipsComponent } from './pages/ships/ships.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { ShipsDetailsComponent } from './pages/ships/ships-details/ships-details.component';
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    NgxPaginationModule
  ]
})
export class PrincipalModule { }