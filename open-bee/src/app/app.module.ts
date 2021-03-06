import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarketsComponent } from './markets/markets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketDetailComponent } from './market-detail/market-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { YourInventoryComponent } from './your-inventory/your-inventory.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpForSalePageComponent } from './up-for-sale-page/up-for-sale-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketsComponent,
    DashboardComponent,
    MarketDetailComponent,
    ItemDetailComponent,
    YourInventoryComponent,
    RegistrationComponent,
    UserComponent,
    LoginComponent,
    NavBarComponent,
    UpForSalePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
