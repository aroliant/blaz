import { Component, OnInit } from '@angular/core';


interface Toast {
  type: string;
  title: string;
  message: any;
  okText?: string;
  cancelText?: string;
}

@Component({
  selector: 'app-toaster-container',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  toasts = [];

  constructor() { }

  ngOnInit() {

  }

  showToast(toast: Toast) {

    this.toasts.push(toast);

  }

}
