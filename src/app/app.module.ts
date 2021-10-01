import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ AngularFireModule} from 'angulafire2/firestore'
import { AngularFireStoreModule} from 'angulafire2/firestore'
import {AngularFireStorageModule} from 'angularfire2/storage'
import {AngularFireAuthModule} from 'angularfire2/auth'

import {environment} from '../environments/environment'

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
