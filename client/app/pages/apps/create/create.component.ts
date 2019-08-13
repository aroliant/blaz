import { Component, OnInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateAppComponent implements OnInit {


  app = {
    appName: ''
  };

  constructor(private appService: AppService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {



  }

  createApp() {

    this.appService.createApp(this.app).subscribe((result: any) => {

      if (result.success) {
        return this.router.navigate(['/apps/' + result.app.appID]);
      }

      this.toastr.error(result.message);

    });

  }

}
