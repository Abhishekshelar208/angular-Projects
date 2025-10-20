import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class Feedback {
  private userService = inject(UserService);
  userName = this.userService.userName;

  message: string = '';
  showMessageBox:boolean = false;

  showMessage(){
    this.showMessageBox = true;
  }
  
}
