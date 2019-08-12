import { Component, OnInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AppsListComponent implements OnInit {

  apps = []

  url = {
    protocol: 'http',
    location: ''
  }

  constructor(private appService: AppService) { }

  ngOnInit() {

    this.appService.getApps().subscribe((result: any) => {
      if (result.success) {
        this.apps = result.apps
      }
    })

    this.url.location = String(location.hostname).replace('blaz.', '')

  }

}
