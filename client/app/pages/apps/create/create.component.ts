import { Component, OnInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  app = {
    appName: ''
  }

  constructor(private appService: AppService) { }

  ngOnInit() {



  }

  createApp() {

    this.appService.createApp(this.app).subscribe((result: any) => {

      if (result.success) {

        alert('App created')

      }

    })

  }

}
