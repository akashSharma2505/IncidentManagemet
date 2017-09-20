import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
    template: `
    <a [routerLink]="['/changesummary',renderValue]" href="#">{{renderValue}}</a>
  `,
})
export class ChangeCellComponent implements ViewCell, OnInit {

    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }

}