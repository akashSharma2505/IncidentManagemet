import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.Routing.module';
import { AppComponent } from './app.component';
import { ChangelistComponent } from './changedash/changelist/changelist.component';
import { ChangesummaryComponent } from './changedash/changesummary/changesummary.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { ChangeCellComponent } from './changedash/customtablecell.component'
import { AdmindashComponent } from './admindash/admindash.component';
import  { Ng2SmartTableModule }  from  'ng2-smart-table';
import { ChangeserviceService } from './changeservice.service';
@NgModule({
  declarations: [
    AppComponent,
    ChangelistComponent,
    ChangesummaryComponent,
    HeaderComponent,
    FooterComponent,
    AdmindashComponent,
    ChangeCellComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, Ng2SmartTableModule
  ],
  entryComponents: [
    ChangeCellComponent
  ],
  providers: [ChangeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
