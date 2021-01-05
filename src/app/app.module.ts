import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api"; 

/*---------------------Angular Material-------------------------------------*/
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/*--------------Components-----------------*/
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HeaderComponent } from './components/header/header.component';


/*--------------Services-----------------*/
import { DataService } from "./services/data.service";




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthenticationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    //FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
