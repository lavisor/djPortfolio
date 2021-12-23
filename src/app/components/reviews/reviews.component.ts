import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsComponent implements OnInit {

@ViewChild('reviewContainer') private reviewContainer :any; 

  activeTab: number = 0; 
  reviews: any = [
    { 
      name: "Kishore Logu 1" , 
      location: "Chennai" , 
      reivewText: "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.",
      base64: ""
    },
    { name: "Vinod stinson 2" , 
    location: "Chennai" , 
    reivewText: "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.",
    base64:""
    },
    { name: "Kishore Logu 3" , 
    location: "Chennai" , 
    reivewText: "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.", 
    base64: ""
    },
    { name: "Vinod stinson 4" , 
    location: "Chennai" , 
    reivewText: "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.",
    base64: ""
    },
    { name: "Kishore Logu 5" , 
    location: "Chennai" , 
    reivewText: "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.",
    base64: ""
    },
    { name: "Kishore Logu 6" , 
    location: "Chennai" , 
    reivewText: "A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.",
    base64: ""
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }


  scrollLeft() {
    this.reviewContainer.nativeElement.scrollLeft -=355;
    if( this.activeTab!=0){
      this.activeTab--;
    }
    console.log(this.activeTab);
  }

  scrollRight() {
    this.reviewContainer.nativeElement.scrollLeft +=355;
    if(this.reviews.length-1 != this.activeTab){
      this.activeTab++;
    }
    console.log(this.activeTab);
  }

  isActiveCard(index:any){
    if(this.activeTab == index){
      return true;
    }else {
      return false;
    }
  }
}
