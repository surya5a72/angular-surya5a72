import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//User defined modules
import { AreaModule } from './Components/Areas/Area.module';

//user defined components
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/Home.component';
import { ErrorComponent } from './Components/Error/Error.component';
import { NavigationComponent } from './Routes/Navigation/Navigation.component';
import { AppRoutes, NavRoutes } from './Routes/AppRoutes';

@NgModule({
  imports:  [ BrowserModule, FormsModule, AreaModule, RouterModule.forRoot(NavRoutes)],
  declarations: [ AppComponent, HomeComponent, NavigationComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
