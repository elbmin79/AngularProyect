import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ThankyouComponent } from './Components/thankyou/thankyou.component';
import { AccountComponent } from './Components/account/account.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { ActionComponent } from './Components/Categories/action/action.component';
import { AdventureComponent } from './Components/Categories/adventure/adventure.component';
import { HorrorComponent } from './Components/Categories/horror/horror.component';
import { KidsComponent } from './Components/Categories/kids/kids.component';
import { MultiplayerComponent } from './Components/Categories/multiplayer/multiplayer.component';
import { PuzzlesComponent } from './Components/Categories/puzzles/puzzles.component';
import { RpgComponent } from './Components/Categories/rpg/rpg.component';
import { ShootersComponent } from './Components/Categories/shooters/shooters.component';
import { SimulationComponent } from './Components/Categories/simulation/simulation.component';
import { StrategyComponent } from './Components/Categories/strategy/strategy.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'productos', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'thankyou', component: ThankyouComponent},
  {path: 'account', component: AccountComponent},
  {path: 'productpage', component: ProductPageComponent},
  {path: 'simulation', component: SimulationComponent},
  {path: 'action', component: ActionComponent},
  {path: 'adventure', component: AdventureComponent},
  {path: 'strategy', component: StrategyComponent},
  {path: 'shooters', component: ShootersComponent},
  {path: 'rpg', component: RpgComponent},
  {path: 'puzzles', component: PuzzlesComponent},
  {path: 'multiplayer', component: MultiplayerComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'horror', component: HorrorComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: 'about', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
