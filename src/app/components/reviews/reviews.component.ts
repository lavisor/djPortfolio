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
      name: "Yasmin Fathima" , 
      location: "Chennai" , 
      reivewText: "Was good working with him. Very professional and patient with his work also delivered entertainment as promised.",
      base64: ""
    },
    { name: "Abhishek Dhiman" , 
    location: "Chennai" , 
    reivewText: "Good one with lot of options and enjoyable delicacy. Will definatly refer to my friends too.",
    base64:""
    },
    { name: "Pencil" , 
    location: "Chennai" , 
    reivewText: "Wow Sama dj experience.hire Panna reception Ku expect panatha Vida nalla panaga.nalla decent price.good team. Dj Stinsa rocks 💥", 
    base64: ""
    },
    { name: "TheKish Live" , 
    location: "Chennai" , 
    reivewText: "Best DJ for any events.",
    base64: ""
    },
    { name: "Gowtham Rajagopal" , 
    location: "Chennai" , 
    reivewText: "I booked him for my sister's wedding. He was very professional and very serious about his commitments.",
    base64: ""
    },
    { name: "Rahul Rahul" , 
    location: "Chennai" , 
    reivewText: "Had to choose between three package. I choose the standard package. Satisfied with his service.",
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
