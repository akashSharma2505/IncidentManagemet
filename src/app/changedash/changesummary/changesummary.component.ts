import { Component, OnInit } from '@angular/core';
import { ChangeserviceService } from '../../changeservice.service';
import { Observable } from 'rxjs/Rx';
import { Routes, ActivatedRoute } from '@angular/router';
import { Change } from '../../modal/change';

@Component({
  selector: 'app-changesummary',
  templateUrl: './changesummary.component.html',
  styleUrls: ['./changesummary.component.css']
})
export class ChangesummaryComponent implements OnInit {
  Id: string;
  routes: Routes;
  private changedetails: Observable<Change[]>;
  private changedetail: Observable<Change>;

  constructor(private changeservice: ChangeserviceService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .map(params => params['ID'])
      .do(Id => this.Id = Id)
      .subscribe(Id => this.getchangedetails());

  }


  private getchangedetails() {

    this.changeservice.getChangeDetails(this.Id).subscribe((data) => {
      this.changedetails = data[0];
      // this.changedetail = this.changedetails[0];
      console.log("Arjun" + JSON.stringify(this.changedetail));
    });
  }

}




