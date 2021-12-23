import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mailto(){
    window.open('mailto:vinodstinson@gmail.com');
  }

  openphone(){
    window.open('tel:+917010347521');
  }
}
