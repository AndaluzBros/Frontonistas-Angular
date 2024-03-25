import { Component, Input } from '@angular/core';
import { User } from '../../../Shared/models/User';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user: User | null = null;
}
