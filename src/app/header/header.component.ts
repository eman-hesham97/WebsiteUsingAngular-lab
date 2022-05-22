import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TdfComponent } from '../tdf/tdf.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute , private router:Router) { }
  imageSrc = 'assets/im1.png'  
  imageAlt = 'image'
  ngOnInit(): void {
  }
}
