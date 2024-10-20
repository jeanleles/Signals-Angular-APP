import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent);

@NgModule({
  imports: [
    BrowserModule,
    NgSelectModule,
    AppComponent // Import the AppComponent here
  ],
  providers: [],
})
export class AppModule { }
