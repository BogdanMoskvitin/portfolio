import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFormService } from '../contact-form.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  
  subs = new Subscription();
  isActive: boolean;
  
  constructor(private contactForm: ContactFormService) {}
  
  ngOnInit() {
    const s0 = this.contactForm.getSubject().subscribe(v => this.isActive = v);
    this.subs.add(s0);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}