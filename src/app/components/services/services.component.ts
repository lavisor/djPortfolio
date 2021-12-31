import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  events: any = [
    { eventName: 'Birthdays' , coverPicture:'url(../../../assets/birthdayparty.jpg)', isActive: true },
    { eventName: 'Private Parties' , coverPicture:'url(../../../assets/privateparty.jpg)', isActive: false },
    { eventName: 'Weddings' , coverPicture:'url(../../../assets/wedding.jpg)', isActive: false },
    { eventName: 'Corporate Events' , coverPicture:'url(../../../assets/corporateparty.jpg)', isActive: false },
  ];
  activeElement: any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeActiveState(index:number){
    for(let x=0; x<this.events.length; x++){
      if(x == index){
        this.events[x].isActive = true;
      } else {
        this.events[x].isActive = false;
      }
    }
  }

  navigateToContactsPage(){
    document.getElementById("contact")?.scrollIntoView({behavior: 'smooth'});
  }
}
