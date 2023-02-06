import { NavbarService } from './../../service/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  movieData!: any;
  constructor(
    public navbarService: NavbarService,
  ) {}

  ngOnInit(): void {

  }
}
