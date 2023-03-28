import { Component } from '@angular/core';
import { DataService } from 'src/app/services/config-service/config.service';
import { User } from 'src/app/models/User/user.models';
import { Post } from 'src/app/models/Post/post.models';

const db = "test_comment_db"
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {

  login() {
    alert("FEATURE WILL BE COMMING SOON...")
  }
}

