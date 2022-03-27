import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required,Validators.minLength(2)]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    message: new FormControl('', [Validators.required,Validators.minLength(10)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    alert("Message envoyé par " + this.contactForm.value['email'] 
    +" ("+this.contactForm.value['firstname']+" "+this.contactForm.value['lastname']+ "):\n" 
    + this.contactForm.value['message'])
  }

}
