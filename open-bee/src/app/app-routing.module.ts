import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsComponent } from './markets/markets.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { YourInventoryComponent } from './your-inventory/your-inventory.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'markets', component: MarketsComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'detail/:id', component: MarketDetailComponent},
  {path: 'item/:id', component: ItemDetailComponent},
  {path: 'sell', component: YourInventoryComponent},
  {path: 'user', component: UserComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'Login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
