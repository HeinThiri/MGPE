import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Data } from 'src/assets/data/data';
@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent {
  id:number=1;
  data: any = Data
  currentIndex: number = -1
  currentId: string = '0'
 
  isMobileMenuOpen = false;
  constructor(private router: Router, private route: ActivatedRoute,private title_: Title) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  isDropdownActive = false;

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }
  
  ngOnInit(): void {
    this.title_.setTitle('Link | Myanmar General Practitioners Education');
    // this.id = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe(params => {
      this.currentId = String(Number(params.get('id')) - 1)
    });

    this.route.queryParams.subscribe(params => {
      this.title_ = params['title'];
    });
}
onLinkClick(url: string): void {
  this.router.navigateByUrl(url);
}
}
