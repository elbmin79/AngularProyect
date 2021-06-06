import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductsService } from './Services/products.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductComponent } from './Components/product/product.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ThankyouComponent } from './Components/thankyou/thankyou.component';
import { AccountComponent } from './Components/account/account.component';
import { CardCartComponent } from './Components/card-cart/card-cart.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { SimulationComponent } from './Components/Categories/simulation/simulation.component';
import { ShootersComponent } from './Components/Categories/shooters/shooters.component';
import { StrategyComponent } from './Components/Categories/strategy/strategy.component';
import { StrategypuzzlesComponent } from './Components/Categories/strategypuzzles/strategypuzzles.component';
import { PuzzlesComponent } from './Components/Categories/puzzles/puzzles.component';
import { ActionComponent } from './Components/Categories/action/action.component';
import { AdventureComponent } from './Components/Categories/adventure/adventure.component';
import { MultiplayerComponent } from './Components/Categories/multiplayer/multiplayer.component';
import { HorrorComponent } from './Components/Categories/horror/horror.component';
import { KidsComponent } from './Components/Categories/kids/kids.component';
import { RpgComponent } from './Components/Categories/rpg/rpg.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    NavbarComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ThankyouComponent,
    AccountComponent,
    CardCartComponent,
    ProductPageComponent,
    SimulationComponent,
    ShootersComponent,
    StrategyComponent,
    StrategypuzzlesComponent,
    PuzzlesComponent,
    ActionComponent,
    AdventureComponent,
    MultiplayerComponent,
    HorrorComponent,
    KidsComponent,
    RpgComponent,
    ContactoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
