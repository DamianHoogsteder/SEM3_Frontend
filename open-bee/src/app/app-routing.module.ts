import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsComponent } from './markets/markets.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketdetailsComponent } from './marketdetails/marketdetails.component';

const routes: Routes = [
  {path: 'markets', component: MarketsComponent},
  {path: 'detail/:id', component: MarketdetailsComponent},
  {path: 'home', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
