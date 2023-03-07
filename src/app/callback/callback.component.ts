import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private userService: UserServiceService, private router: Router) {
    this.userService.registerUser();
    this.router.navigateByUrl("");
  }

  ngOnInit(): void {
  }

}
