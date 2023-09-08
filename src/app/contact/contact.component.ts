import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: `contact.component.html`
})
export class ContactComponent {

  emojiName:string = '';
  emojiPwd:string = '';

  onSubmit(contactForm: NgForm){

    let name:string = contactForm.value.name;
    let pwd:string = contactForm.value.pwd;
    let error:number = 0;

    if (name.length < 2) {
      console.log("error");
      this.emojiName = '🚫';
      error++;
    }else{
      this.emojiName = '👍';
    }
    if (pwd.length >= 10) {
      console.log("error");
      this.emojiPwd = '🚫';
      error++;
    }else{
      this.emojiPwd = '👍';
    }

    if(error == 0){
      contactForm.resetForm();
    }
  };
}
