import { Injectable } from '@angular/core';

@Injectable()
export class BuyerSideMenuProvider {

  constructor() { }

  sideMenu() {
    return  [
      { title: 'รับซื้อขยะ', component: "buy-kaya" },
      // { title: 'นัดหมายลูกค้า', component: "buy-kaya-appointment" },
      { title: 'ออกจากระบบ', component: "login" },
    ];
  }
}
