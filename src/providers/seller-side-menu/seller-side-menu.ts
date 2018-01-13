import { Injectable } from '@angular/core';

@Injectable()
export class SellerSideMenuProvider {

  constructor() { }

  sideMenu() {
    return  [
      // { title: 'นัดหมายลูกค้า', component: "buy-kaya-appointment" },
      { title: 'ขายขยะ', component: "sell-kaya" },
      { title: 'ธนาคารขยะ', component: "i-banking" },
      // { title: 'ซื้อสินค้าท้องถิ่น', component: "localproducts" },
      // { title: 'ราคากลางขยะ', component: "sell-kaya-estimateprice" },
      // { title: 'ค้นหาผู้รับซื้อขยะ', component: "sell-kaya-buyersearch" },
      // { title: 'ประวัติการขายขยะ', component: "sell-kaya-history" },
      // { title: 'วิธีคัดแยกขยะเพิ่มมูลค่า', component: "sell-kaya-upvalue" },
      { title: 'ออกจากระบบ', component: "login" },
    ];
  }

}
