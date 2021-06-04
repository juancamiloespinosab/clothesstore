import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchResultsComponent } from './components/pages/search-results/search-results.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { CoverComponent } from './components/organisms/cover/cover.component';
import { BannersComponent } from './components/organisms/banners/banners.component';
import { TopProductsComponent } from './components/organisms/top-products/top-products.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { MainHeaderComponent } from './components/molecules/main-header/main-header.component';
import { NavHeaderComponent } from './components/molecules/nav-header/nav-header.component';
import { SearchComponent } from './components/molecules/search/search.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { ButtonComponent } from './components/atoms/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    HeaderComponent,
    CoverComponent,
    BannersComponent,
    TopProductsComponent,
    FooterComponent,
    MainHeaderComponent,
    NavHeaderComponent,
    SearchComponent,
    LinkComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
