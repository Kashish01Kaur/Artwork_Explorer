import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"viewmore/:id",component:ViewmoreComponent},
  {path:"wishlist",component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
