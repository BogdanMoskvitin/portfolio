import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from '../contact-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactForm: ContactFormService) { }

  ngOnInit(): void { }

  onSubmit(contactForm: NgForm){
    this.contactForm.sendForm(contactForm)
    contactForm.reset();
  }
}