import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isloggedIn = false;
  constructor(private router:Router) { }

  ngOnInit() {
    this.isloggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  }
  logout() {
    this.isloggedIn = false;

    localStorage.clear();
    this.router.navigate(['/Home'])

  }
}
