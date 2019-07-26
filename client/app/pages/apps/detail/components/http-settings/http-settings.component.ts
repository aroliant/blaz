import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-http-settings',
  templateUrl: './http-settings.component.html',
  styleUrls: ['./http-settings.component.css']
})
export class HttpSettingsComponent implements OnInit {

  @Input() activeTab;
  @Input() app;
  showTab = false

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
    this.showTab = this.activeTab == "http-settings" ? true : false 
  }

}
