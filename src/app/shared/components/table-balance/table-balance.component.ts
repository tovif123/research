import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { balance } from '../../const/balance';
import { Balance } from '../../models/balance';

@Component({
  selector: 'app-table-balance',
  templateUrl: './table-balance.component.html',
  styleUrls: ['./table-balance.component.scss']
})

export class TableBalanceComponent implements OnInit{

  displayedColumns: Array<string> = [
    'name_grant',
   /*  'end_date_grant', */
    'grant',
    'salary_balance',
    'scholarship_balance',
    'scholarshipAndSalary_balance',
    'percent_of_balance',
/*     'expenses_balance', */
  ];

  dataSource= new MatTableDataSource<Balance>(); ;
  constructor(){

  }
  ngOnInit(): void {

    this.dataSource.data=balance;
  }
}
