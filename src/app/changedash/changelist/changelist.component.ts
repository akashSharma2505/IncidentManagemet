import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChangeserviceService } from '../../changeservice.service';
import { ChangeCellComponent } from '../customtablecell.component'
@Component({
  selector: 'app-changelist',
  templateUrl: './changelist.component.html',
  styleUrls: ['./changelist.component.css']
})
export class ChangelistComponent implements OnInit {

  settings = { columns: { ChangeNumber: { title: 'ChangeNumber', type: 'custom', renderComponent: ChangeCellComponent }, Status: { title: 'Status' }, Summary: { title: 'Summary' }, Risk: { title: 'Risk' }, Impact: { title: 'Impact' }, OpenDate: { title: 'OpenDate' }, GroupName: { title: 'Group Name' } } };
  data = [];

  constructor(private changeservice: ChangeserviceService) {



  }

  ngOnInit() {

    this.changeservice.getChangeList().subscribe((data)  =>  this.data =  data);

  }

}