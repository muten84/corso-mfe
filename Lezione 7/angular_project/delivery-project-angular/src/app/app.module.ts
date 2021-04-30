import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { HomeCardRowComponent } from './components/home-card-row/home-card-row.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailRestaurantComponent } from './components/detail-restaurant/detail-restaurant.component';
import { DetailCategoryComponent } from './components/detail-category/detail-category.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DetailTitleComponent } from './components/detail-title/detail-title.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    HomeCardComponent,
    HomeCardRowComponent,
    DetailRestaurantComponent,
    DetailCategoryComponent,
    HeroDetailComponent,
    DetailTitleComponent,
    DetailCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
