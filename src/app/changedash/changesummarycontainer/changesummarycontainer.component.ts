import { Component, OnInit } from '@angular/core';
import {ChangeserviceService} from '../../changeservice.service'
@Component({
  selector: 'app-changesummarycontainer',
  templateUrl: './changesummarycontainer.component.html',
  styleUrls: ['./changesummarycontainer.component.css']
})
export class ChangesummarycontainerComponent implements OnInit {
data:any=[];
  constructor(private changeservice:ChangeserviceService) { }

  ngOnInit() {
    this.changeservice.getChangeDetails("").subscribe((data)  =>  this.data =  data)
  }

}
