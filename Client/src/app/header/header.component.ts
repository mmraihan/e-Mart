import { NavigationItem } from './../models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationList: NavigationItem[]=[
    {
      category: "Electronics",
      subcategories: ['Mobiles', 'Laptops']
    },
    {
      category: "Furniture",
      subcategories: ['Tables', 'Chairs']
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
