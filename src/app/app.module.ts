import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { InputCurrencyComponent } from './components/inputs/input-currency/input-currency.component';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { SectionComponent } from './components/section/section.component';

import { FormService } from './services/form.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputCurrencyComponent,
    InputTextComponent,
    PlaygroundComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
