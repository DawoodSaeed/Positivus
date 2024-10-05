import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  contactType: string = 'sayHi';
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted', {
        contactType: this.contactType,
        name: this.name,
        email: this.email,
        message: this.message,
      });
      // Here you would typically send the form data to a server
      // Reset the form after submission
      form.resetForm();
      this.contactType = 'sayHi';
    } else {
      console.log('Form is invalid');
    }
  }
}
