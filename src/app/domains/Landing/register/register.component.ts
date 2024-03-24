import { Component } from '@angular/core';
import { FormContainerComponent } from '../components/form-container/form-container.component';
import { RouterLinkWithHref } from '@angular/router';

declare var Datepicker: any;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormContainerComponent, RouterLinkWithHref],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
