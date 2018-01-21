import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { User} from '../../shared/user/user';
import { Router} from '@angular/router'
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user = new User();
   }

  ngOnInit() {
  }

  doLogin() {
    this.userService.login(this.user).subscribe((resp => {
      console.log(resp);
      if (resp.success) {
        this.router.navigate(['pic2']);
      } else {
        alert(resp.message);
      }
    }));
  }

}
