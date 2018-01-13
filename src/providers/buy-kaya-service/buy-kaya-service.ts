import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from "../api-url";

@Injectable()
export class BuyKayaServiceProvider {

  constructor(public http: HttpClient) { }

  set_kaya_profile(param) {
    return this.http.post(API_URL + '/buykaya/create', param)
  }

}
