import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeserviceService } from '../changeservice.service';
import { ChangeComponent } from './change/change.component';
import { ChangesummarycontainerComponent } from './changesummarycontainer/changesummarycontainer.component';
import { ChangelistComponent } from './changelist/changelist.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChangeComponent, 
    ChangesummarycontainerComponent,
    ChangelistComponent
  ],
  providers: [ChangeserviceService]
})
export class ChangedashModule { }
