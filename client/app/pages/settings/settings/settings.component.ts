import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'client/app/services/settings.service';

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

  constructor(private settingService: SettingsService, ) { }

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
        alert('Root Domain Updated');
      } else {
        alert('unable to Update Root Domain');
      }
    });
  }

}
