import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-demo',
  imports: [FormsModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo {
  name: string = '';
  private userService = inject(UserService);
  private router = inject(Router);

  navigateToFeedback() {
    this.userService.setUserName(this.name);
    this.router.navigate(['/feedback']);
  }
}
