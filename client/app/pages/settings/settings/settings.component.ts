import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  rootDomain = {
    BLAZ_ROOT_DOMAIN: "",
    BLAZ_ROOT_DOMAIN_FORCE_HTTPS: false,
    BLAZ_ROOT_DOMAIN_ENABLE_HTTPS: false
  }

  constructor() { }

  ngOnInit() {
  }


  updateRootDomain() {
    
  }

}
