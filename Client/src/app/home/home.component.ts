import { SuggestedProduct } from './../models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  SuggestedProducts: SuggestedProduct[]=[
    {
      banerimage: 'Baner/Baner_Laptop.png',
      category:{
        id:1,
        category:'electronics',
        subcategory:'laptops',
      },
    },

    {
      banerimage: 'Baner/Baner_Mobile.png',
      category:{
        id:1,
        category:'electronics',
        subcategory:'mobiles',
      },
    },

    {
      banerimage: 'Baner/Baner_Chair.png',
      category:{
        id:1,
        category:'furniture',
        subcategory:'chairs',
      },
    },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
