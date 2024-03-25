import { Component } from '@angular/core';
import { FormContainerComponent } from '../components/form-container/form-container.component';
import { RouterLinkWithHref } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

declare var Datepicker: any;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormContainerComponent, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userForm = new FormGroup({
    firstName: new FormControl('',{
      nonNullable: true,
      validators: [
          Validators.required,
          Validators.pattern('^\\S.*$'),
          Validators.minLength(2),
      ]
    })
  })

  onSubmit() {
    console.log(this.userForm.status)
  }
}
