import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() activeTab;
  showTab = false

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.showTab = this.activeTab == "overview" ? true : false
  }

  getStats() {

  }

}
