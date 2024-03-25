import { Component, ElementRef, ViewChild } from '@angular/core';
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
  levels = [
    "Principiante",
    "Intermedio",
    "Bueno",
    "Muy Bueno",
    "Top"
  ]
  userForm = new FormGroup({
    firstName: new FormControl('',{
      nonNullable: true,
      validators: [
          Validators.required,
          Validators.pattern('^\\S.*$'),
          Validators.minLength(2),
      ]
    }),
    lastName: new FormControl('',{
      nonNullable: true,
      validators: [
          Validators.required,
          Validators.pattern('^\\S.*$'),
          Validators.minLength(2),
      ]
    }),
    nickname: new FormControl('',{
      nonNullable: false
    }),
  // genre
    email: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"),
        Validators.minLength(5),
    ]
    }),
    phone: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(9)
    ]
    }),
    password: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
    confirmPassword: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
    ]
    }),
    level: new FormControl(this.levels[0]),
    city: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
    ]
    }),
    birthday: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
    ]
    }),
    occupation: new FormControl('',{
      nonNullable: false
    }),
    club: new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
    ]
    // foto 1 y 2
    }),
  })

  onSubmit() {
    this.userForm.controls.birthday.setValue((<HTMLInputElement>document.getElementById("user-birthday")).value)
    console.log(this.userForm.status)


    Object.keys(this.userForm.controls).forEach(controlName => {
      const control = this.userForm.get(controlName);
      if (control?.invalid) {
        console.log(`Campo '${controlName}' es inválido.`);
        if (control?.errors?.["required"]) {
          console.log('Mensaje personalizado para campo requerido.');
        }
        if (control?.errors?.["email"]) {
          console.log('Mensaje personalizado para campo de correo electrónico.');
        }
        // Agrega casos para otros tipos de validaciones según sea necesario
      }
    });
  }
}
