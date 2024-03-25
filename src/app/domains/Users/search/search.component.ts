import { Component, SimpleChanges, inject, signal } from '@angular/core';
import { UserService } from '../user.service';
import { UserComponent } from '../components/user/user.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Shared/models/User';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  userService = inject(UserService);

  usersByFilter = signal<User[]>([]);

  constructor(private route: ActivatedRoute){
    route.queryParams.subscribe(p => {
      if (["Principiante", "Intermedio", "Bueno", "Muy Bueno", "Top"].includes(p["level"]))
        this.usersByFilter.set(this.userService.getUsersByLevel(p["level"]))
      else 
        this.usersByFilter.set(this.userService.getUsersByQuery(p["query"]))
    });
  }

}
