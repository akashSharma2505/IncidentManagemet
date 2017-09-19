import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeserviceService } from '../changeservice.service';
import { ChangeComponent } from './change/change.component';
import { ChangesummarycontainerComponent } from './changesummarycontainer/changesummarycontainer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChangeComponent, ChangesummarycontainerComponent,],
  providers: [ChangeserviceService]
})
export class ChangedashModule { }
