import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { UserComponent } from '../components/user/user.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userService = inject(UserService);

  currentUser = this.userService.currentUser;
}
