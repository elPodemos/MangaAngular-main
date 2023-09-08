import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: 'contact-reactive.component.html',
})
export class ContactReactiveComponent {

  form = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  });

  onSubmit(){
    console.log(this.form.value);
  }

}
