import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from "../api-url";

@Injectable()
export class BuyersServiceProvider {

  constructor(public http: HttpClient) { }

  get_buyers() {
    return this.http.get(API_URL + '/users')
  }

  // get_buyer_profile(id) {
  //   return this.http.get(API_URL+'/users/' + id)
  // }
  get_buyer_profile_by_category(id, category) {
    return this.http.get(API_URL + '/users_cat/' + id + '/' + category)
  }

}
