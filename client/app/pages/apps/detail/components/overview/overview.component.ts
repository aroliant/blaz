import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-detail-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnChanges {

  @Input() activeTab;
  @Input() app;
  showTab = false;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.showTab = this.activeTab === 'overview' ? true : false;
  }

  getStats() {

  }

}
