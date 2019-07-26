import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  @Input() activeTab;
  showTab = false

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    this.showTab = this.activeTab == "access" ? true : false
  }

}
