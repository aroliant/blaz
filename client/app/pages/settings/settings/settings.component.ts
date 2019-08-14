import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'client/app/services/settings.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  rootDomain = {
    BLAZ_ROOT_DOMAIN: '',
    BLAZ_ROOT_DOMAIN_FORCE_HTTPS: false,
    BLAZ_ROOT_DOMAIN_ENABLE_HTTPS: false
  };

  constructor(private settingService: SettingsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.settingService.getRootDomain().subscribe((res: any) => {
      if (res.success) {
        this.rootDomain = res.rootDomain;
      }
    });
  }


  updateRootDomain() {
    this.settingService.updateRootDomain(this.rootDomain).subscribe((res: any) => {

      if (res.success) {
        this.toastr.success('Root Domain Updated', 'Success!');
      } else {
        this.toastr.error('Unable to Update Root Domain', 'Try Again!');
      }
    });
  }

}
