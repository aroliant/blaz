import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService {

  constructor(private toastr: ToastrService) {

  }

  success(title, message) {
    this.toastr.success(title, message);
  }

  error(title, message) {
    this.toastr.error(title, message);
  }


}