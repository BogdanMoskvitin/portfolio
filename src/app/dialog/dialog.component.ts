import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

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