import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SentencesComponent} from './sentences/sentences.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {SentenceComponent} from './sentences/sentence/sentence.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SentencesComponent,
    SentenceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: SentencesComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
