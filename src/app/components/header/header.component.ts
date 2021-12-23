import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  menuItems: any = [
    {menuName:"Why hire us?", menuUrl:"whyhire" }, 
    {menuName:"Services", menuUrl:"services" },
    {menuName:"Photos", menuUrl:"photos" }, 
    {menuName:"Pricing", menuUrl:"pricing" },
    {menuName:"Contact", menuUrl:"contact" }
  ];
  

  showMobileMenu:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMobileMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }

  changeRoutes(menu: string){
    this.showMobileMenu = false;
    document.getElementById(menu)?.scrollIntoView({behavior: 'smooth'});
  }
}
