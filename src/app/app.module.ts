import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule } from './app.Routing.module';
import { AppComponent } from './app.component';
import { ChangelistComponent } from './ChangeModule/changelist/changelist.component';
import { ChangesummaryComponent } from './ChangeModule/changesummary/changesummary.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { ChangeComponent } from './ChangeModule/change/change.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import{ ChangeserviceService} from './changeservice.service';
@NgModule({
  declarations: [
    AppComponent,
    ChangelistComponent,
    ChangesummaryComponent,
    HeaderComponent,
    FooterComponent,
    ChangeComponent,
    AdmindashComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, Ng2SmartTableModule
  ],
  providers: [ChangeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
