import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreModule } from '@ngrx/store';
import { Pagereducer } from './Store/PageStore/Page.Reducer';

export function localStorageSyncReducer(rootReducer: any) {
  return localStorageSync({
   keys: [{'PrintWebsite': {
     encrypt: state => btoa(state),
     decrypt: state => atob(state)
   }}], rehydrate: true
 })(rootReducer);
 }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,

    StoreModule.forRoot(
      { PrintWebsite: Pagereducer },
      { metaReducers: [localStorageSyncReducer],}
    ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
