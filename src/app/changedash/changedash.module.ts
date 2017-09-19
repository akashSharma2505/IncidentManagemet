import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeserviceService } from '../changeservice.service';
import { ChangeComponent } from './change/change.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChangeComponent,],
  providers: [ChangeserviceService]
})
export class ChangedashModule { }
