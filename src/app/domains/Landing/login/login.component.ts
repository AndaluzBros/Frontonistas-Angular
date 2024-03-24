import { Component } from '@angular/core';
import { FormContainerComponent } from '../components/form-container/form-container.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormContainerComponent, RouterLinkWithHref],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
