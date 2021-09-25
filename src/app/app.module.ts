import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { AuthenEffect } from './shared/store/authen';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

registerLocaleData(en);

const AKITA_EFFTECT = [
  AkitaNgEffectsModule.forRoot([AuthenEffect])
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AKITA_EFFTECT,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
