import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkPageComponent } from './Pages/link-page/link-page.component';
import { NavBarComponent } from './element/nav-bar/nav-bar.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './element/footer/footer.component';
import { NavbarMenuComponent } from './elements/navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkPageComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
