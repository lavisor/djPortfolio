import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {

  imageCollection: any = [ ];

  constructor() { }

  ngOnInit(): void {
    for(let x=0; x<5;x++){
      
      let imageUrl = this.getStyle(x);
      this.imageCollection.push(imageUrl);
    }

    console.log(this.imageCollection);
  }

  getStyle(index:number){
    let image ="./../../../assets/showcase"+(index+1)+".jpg";
    return "url("+image+")";
  }

  openInstaProfile(){
    window.open('https://www.instagram.com/dj_stinsa/');
  }
}
