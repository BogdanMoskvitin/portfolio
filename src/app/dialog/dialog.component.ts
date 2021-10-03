import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../contact-form.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private contactFormService: ContactFormService) { }

  ngOnInit(): void { }

  onSubmit(contactForm){
    this.contactFormService.sendForm(contactForm);
    contactForm.reset();
  }
}