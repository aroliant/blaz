import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'client/app/services/app.service';

@Component({
  selector: 'app-detail-http-settings',
  templateUrl: './http-settings.component.html',
  styleUrls: ['./http-settings.component.css']
})
export class HttpSettingsComponent implements OnInit {

  @Input() activeTab;
  @Input() app;
  showTab = false

  url = {
    protocol: 'http',
    location: ''
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
    if (this.app.forceHTTPS) {
      this.url.protocol = 'https'
    }

    this.url.location = String(location.hostname).replace('blaz.', '')
  }

  ngOnChanges() {
    this.showTab = this.activeTab == "http-settings" ? true : false
  }

  saveAndUpdate() {
    this.appService.updateApp(this.app).subscribe((res: any) => {

    })
  }

}
