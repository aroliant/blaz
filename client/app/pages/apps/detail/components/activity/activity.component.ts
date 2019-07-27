import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input() activeTab;
  @Input() app;
  showTab = false

  constructor() { }

  ngOnInit(){
    
  }

  ngOnChanges() {
    this.showTab = this.activeTab == "activity" ? true : false     
  }

}
