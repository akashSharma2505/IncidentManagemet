import { Component, OnInit } from '@angular/core';
import { ChangeserviceService } from '../../changeservice.service';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-changesummary',
  templateUrl: './changesummary.component.html',
  styleUrls: ['./changesummary.component.css']
})
export class ChangesummaryComponent implements OnInit {

  private changedetails: Observable<any[]>;
  constructor(private changeservice: ChangeserviceService) { }

  ngOnInit() {
    this.changeservice.getChangeDetails("8080").subscribe((data) => {
      this.changedetails = data;
      console.log("Arjun" + this.changedetails[0].id);
    })
  }
}




