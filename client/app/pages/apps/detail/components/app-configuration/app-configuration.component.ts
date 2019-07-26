import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-app-configuration',
  templateUrl: './app-configuration.component.html',
  styleUrls: ['./app-configuration.component.css']
})
export class AppConfigurationComponent implements OnInit {

  @Input() activeTab;
  showTab = false

  constructor() { }


  ngOnInit(){
    
  }

  ngOnChanges() {
    this.showTab = this.activeTab == "app-configuration" ? true : false 
  }

}
