import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRestaurantComponent } from './components/detail-restaurant/detail-restaurant.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: DetailRestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
