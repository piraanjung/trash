import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from "../api-url";

@Injectable()
export class KayaListServiceProvider {

  constructor(public http: HttpClient) { }

  get_kaya_list(param) {
    return this.http.post(API_URL + '/kaya_list', param)
  }
  get_kaya_list_by_category(param) {
    return this.http.post(API_URL + '/kaya_list_by_category', param)
  }
  get_kaya_profile(id) {
    return this.http.get(API_URL + '/kaya_list/' + id)
  }

}
