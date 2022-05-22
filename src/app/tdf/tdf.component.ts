import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private enrollService:EnrollService) { }

  places=["Facebook ","Twitter","Google"];
  userModel:User= new User("","","","","Facebook");

  ngOnInit(): void {
  }
  SaveData()
  {
    //console.log(this.userModel);
    this.enrollService.enroll(this.userModel).subscribe(data=>
      {
        console.log(data)
      },
      error=>
      {
        console.log(error)
      })
  }
}
