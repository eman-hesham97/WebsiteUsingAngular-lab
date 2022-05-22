import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/userLogin';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-tdf-login',
  templateUrl: './tdf-login.component.html',
  styleUrls: ['./tdf-login.component.scss']
})
export class TdfLoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  userLoginModel:UserLogin= new UserLogin("","");

  ngOnInit(): void {
  }
  SaveData()
  {
    //console.log(this.userModel);
    this.loginService.login(this.userLoginModel).subscribe(data=>
      {
        console.log(data)
      },
      error=>
      {
        console.log(error)
      })
  }

}
