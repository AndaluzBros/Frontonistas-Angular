import { Component, Input } from '@angular/core';

@Component({
  selector: 'landing-form-container',
  standalone: true,
  imports: [],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css'
})
export class FormContainerComponent {
  @Input() title: string = "";
}
