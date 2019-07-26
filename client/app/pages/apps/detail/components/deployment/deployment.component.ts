import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {

  @Input() activeTab;
  showTab = false

  constructor() { }

  ngOnInit(){
    
  }

  ngOnChanges() {
    this.showTab = this.activeTab == "deployment" ? true : false 
  }

}
