import { Injectable } from '@angular/core';

declare var toastr: any;
@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor() {}

  success(Title: any, Message: any) {
    toastr.success(Title, Message, {
      showMethod: 'slideDown',
      hideMethod: 'slideUp',
      timeOut: 2000,
    });
  }

  warning(Title: any, Message: any) {
    toastr.warning(Title, Message, {
      showMethod: 'slideDown',
      hideMethod: 'slideUp',
      timeOut: 2000,
    });
  }

  error(Title: any, Message: any) {
    toastr.error(Title, Message, {
      showMethod: 'slideDown',
      hideMethod: 'slideUp',
      timeOut: 2000,
    });
  }

  info(Title: any, Message: any) {
    toastr.info(Title, Message, {
      showMethod: 'slideDown',
      hideMethod: 'slideUp',
      timeOut: 2000,
    });
  }
}
