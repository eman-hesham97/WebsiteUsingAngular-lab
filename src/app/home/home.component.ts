import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storeName:string="Eman's store";
  imageSrc = 'assets/store.png'  
  imageAlt = 'image'
  Discount:DiscountOffers=DiscountOffers.offerTwo;
  constructor() { }

  ngOnInit(): void {
  }

}
