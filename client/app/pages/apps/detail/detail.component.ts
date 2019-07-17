import { Component, OnInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  app

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      this.app =this.appService.getApp(data.appId)
    })

  }

}
