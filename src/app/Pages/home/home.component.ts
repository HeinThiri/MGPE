import { Component } from '@angular/core';
import { Data } from 'src/assets/data/data';
import { MenuItem } from 'src/assets/data/menu';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
currentId: string = '0'
  title: string = ''
  menuItems: any = MenuItem
  id:number=1;
  data: any = Data
  currentIndex: number = -1
  constructor(private route: ActivatedRoute, private title_: Title) {
  }
  news=[
    {
      id:1,
      imageUrl:'assets/images/doctor-better.png',
      Date:'May 12 2023',
      title:'Release example for event',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id:2,
      imageUrl:'assets/images/mask-group-04.png',
      Date:'May 12 2023',
      title:'Release example for event',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id:3,
      imageUrl:'assets/images/mask-group-05.png',
      Date:'May 12 2023',
      title:'Release example for event',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id:4,
      imageUrl:'assets/images/mask-group.png',
      Date:'May 12 2023',
      title:'Release example for event',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ]
}