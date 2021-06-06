import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from "@angular/common/http";

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
import { InputComponent } from './components/atoms/input/input.component';
import { ResultsBoxComponent } from './components/molecules/results-box/results-box.component';
import { TextComponent } from './components/atoms/text/text.component';
import { ProductsGridComponent } from './components/molecules/products-grid/products-grid.component';

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
    ButtonComponent,
    InputComponent,
    ResultsBoxComponent,
    TextComponent,
    ProductsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
