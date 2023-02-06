import { NavbarService } from './../../service/navbar.service';
import { SearchService } from './../../service/search.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private searchService: SearchService,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {

  }

  changeInput($event: Event) {
    const inputValue = ($event.target as HTMLInputElement).value;
    this.searchService.search(inputValue).subscribe({
      next: (res: any) => {
        this.navbarService.searchData$.next(res.d)
        console.log(res.d)
      }
    })
  }
}
