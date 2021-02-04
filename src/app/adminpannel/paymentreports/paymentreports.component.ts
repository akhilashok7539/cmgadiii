import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paymentreports',
  templateUrl: './paymentreports.component.html',
  styleUrls: ['./paymentreports.component.css']
})
export class PaymentreportsComponent implements OnInit {
  results: any;
  searchString: any;

  displayedColumns = ['transId','uname','unumber', 'dname','dnumber'];
  limit: number = 5;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  message: any = 'data found';
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    console.log(this.dataSource.filteredData.length)
    if(this.dataSource.filteredData.length == 0 )
    {
      this.message = 'No data found';
    }
  }
}
