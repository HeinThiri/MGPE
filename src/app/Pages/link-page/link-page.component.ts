import { Component } from '@angular/core';
import { Data } from 'src/assets/data/data';
import { MenuItem } from 'src/assets/data/menu';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AfterViewInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.css']
})
export class LinkPageComponent {
  currentId: string = '0'
  title: string = ''
  menuItems: any = MenuItem
  data: any = Data
  currentIndex: number = -1
  constructor(private route: ActivatedRoute, private title_: Title, private elementRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    const element = this.elementRef.nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
