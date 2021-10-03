import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient, private router: Router) { }

  sendForm(contactForm: NgForm) {
    const email = contactForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mwkaalyw',
      { name: email.name, replyto: email.email, message: email.messages },
      { 'headers': headers }).subscribe(
        response => { console.log(response) }
      );
    this.router.navigate(["/"]);
    this.setSubject(true);
    setTimeout( () => this.subject$.next(false), 3000 );
  }

  subject$ = new BehaviorSubject(false);

  setSubject(v: boolean): void {
    this.subject$.next(v);
  }
  getSubject(): Observable<boolean> {
    return this.subject$.asObservable();
  }
}