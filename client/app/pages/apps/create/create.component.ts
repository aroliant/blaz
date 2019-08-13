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
  appValidationErrortext = '';

  constructor(private appService: AppService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {



  }

  validateAppName() {
    if (this.app.appName === null || this.app.appName === '') {
      this.appValidationErrortext = 'App Name cannot be Empty';
      return false;
    }
    let x;
    for (x of this.app.appName) {
      if (!/[a-z-1-9]/g.test(x)) {
        this.appValidationErrortext = 'Not a valid App Name, it should be lowercase alphanumeric and only - is permissible';
        return false;
      }
    }
    this.appValidationErrortext = '';
    return true;
  }

  createApp() {

    if (!this.validateAppName()) {
      return false;
    }

    this.appService.createApp(this.app).subscribe((result: any) => {

      if (result.success) {
        return this.router.navigate(['/apps/' + result.app.appID]);
      }

      this.toastr.error(result.message);

    });

  }

}
