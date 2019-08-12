import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'client/app/services/app.service';

@Component({
  selector: 'app-detail-app-configuration',
  templateUrl: './app-configuration.component.html',
  styleUrls: ['./app-configuration.component.css']
})
export class AppConfigurationComponent implements OnInit {

  @Input() activeTab;
  @Input() app;
  showTab = false;

  constructor(private appService: AppService) { }


  ngOnInit() {
    if (!this.app.environmentVars) {
      this.app.environmentVars = [{
        key: '', value: ''
      }];
    }

    if (!this.app.portMapping) {
      this.app.portMapping = [
        {
          hostPort: 8080,
          containerPort: 80
        }
      ];
    }

  }

  ngOnChanges() {
    this.showTab = this.activeTab === 'app-configuration' ? true : false;
  }

  saveAndUpdate() {
    this.appService.updateApp(this.app).subscribe((res: any) => {

    });
  }

  enterEnvVars(e, index) {
    if (e.keyCode === 13 && index === this.app.environmentVars.length - 1) {
      this.app.environmentVars.push({
        key: '',
        value: ''
      });
    }
  }

  addNewPortMapping() {
    this.app.portMapping.push({
      hostPort: '',
      containerPort: ''
    });
  }

}
