import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  persons = [];

  constructor(private _home : HomeService,private router : Router) { }

  ngOnInit(): void {
    this._home.getData().subscribe(data => this.persons = data);
  }

  NaviHome(){
    this.router.navigate(['']);
  }

}
