import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLinkWithHref, RouterOutlet, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class AppLayoutComponent {
  searchCtrl = new FormControl('');

  constructor(private router: Router) { }

  handleSearch = () => {
    console.log(this.searchCtrl.value)
    this.router.navigate(['app', 'search'], { queryParams: { query: this.searchCtrl.value } });
    this.searchCtrl.setValue("");
  }
}
