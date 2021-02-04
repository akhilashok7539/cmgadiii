import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  results: any;
  searchString: any;

  displayedColumns = ['location','Edit'];
  limit: number = 15;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  message: any = 'data found';
  constructor(private adminpannel:AdminService,private router:Router) { }

  ngOnInit() {
    this.getalllocations();
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
  getalllocations(){
    this.adminpannel.getalllocation().subscribe(
      data =>{
        console.log(data)
        this.results =data;
        this.dataSource.data = this.results;
      },
      error =>{

      }
    )
  }
  edit(w)
  {
    this.router.navigate(['/edit-location',w.id,w.name])
  }
  delete(e)
  {
    
  }
}
