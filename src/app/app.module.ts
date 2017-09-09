import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangelistComponent } from './ChangeModule/changelist/changelist.component';
import { ChangesummaryComponent } from './ChangeModule/changesummary/changesummary.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { ChangeComponent } from './ChangeModule/change/change.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangelistComponent,
    ChangesummaryComponent,
    HeaderComponent,
    FooterComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
