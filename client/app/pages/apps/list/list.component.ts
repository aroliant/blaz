import { Component, OnInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  apps = []

  constructor(private appService: AppService) { }

  ngOnInit() {

    this.appService.getApps().then((result: any) => {
      if (result.success) {
        this.apps = result.apps
      }
    })

  }

}
