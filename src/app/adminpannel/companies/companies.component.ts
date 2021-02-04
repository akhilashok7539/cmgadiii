import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  results: any;
  searchString: any;

  displayedColumns = ['name','email', 'phonenumber'];
  limit: number = 15;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  message: any = 'data found';
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.getallOwners();
  }
  getallOwners(){
    this.adminservice.getallowners(this.pageIndex).subscribe(
      data =>{
        this.results = data;
        this.dataSource.data = this.results;
      },
      error =>{

      }
    )
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
  changePage(e)
  {
    
      this.adminservice.getallowners(e.pageIndex).subscribe(
        data =>{
          this.results = data;
          this.dataSource.data = this.results;
        },
        error =>{
  
        }
      )
  }
}
