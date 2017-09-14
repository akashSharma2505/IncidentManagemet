import { Component, OnInit } from '@angular/core';
import  { Ng2SmartTableModule }  from  'ng2-smart-table';
import{ ChangeserviceService} from '../../changeservice.service';
@Component({
  selector: 'app-changelist',
  templateUrl: './changelist.component.html',
  styleUrls: ['./changelist.component.css']
})
export class ChangelistComponent implements OnInit {

  settings = { columns: { ChangeNumber: { title:  'ChangeNumber'  }, Status: { title:  'Status'  }, Summary: { title:  'Summary'  }, Risk: { title:  'Risk'  }, Impact: { title:  'Impact'  },OpenDate: { title:  'OpenDate'  },GroupName: { title:  'Group Name'  } } };
  data=[];

  constructor(private changeservice:ChangeserviceService) { 



  }

  ngOnInit() {

this.changeservice.getCustomerList().subscribe((data) => this.data= data);

  }

}
