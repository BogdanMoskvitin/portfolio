import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  message: string = "";

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
