import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsComponent } from './markets/markets.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';

const routes: Routes = [
  {path: 'markets', component: MarketsComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'detail/:id', component: MarketDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
