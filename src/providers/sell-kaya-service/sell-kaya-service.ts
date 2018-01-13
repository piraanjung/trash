import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from "../api-url";

@Injectable()
export class SellKayaServiceProvider {
 
  constructor(public http: HttpClient) { }
  get_bank_info(id) {
    return this.http.get(API_URL + '/users/get_user_bank/' + id);
  }

  get_point_info(id) {
    return this.http.get(API_URL + '/users/get_user_point/' + id);
  }

  get_sellkaya_history(id, month) {
    return this.http.get(API_URL + '/sell_kaya/history/' + id + '/' + month);
  }

  get_sellkaya_datelists(id, month) {
    return this.http.get(API_URL + '/sell_kaya/sell_date_history/' + id + '/' + month);
  }

}
