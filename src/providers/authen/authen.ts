import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from "../api-url";

@Injectable()
export class AuthenProvider {

  constructor(public http: HttpClient) { }

  getAuthen(param) {
    return this.http.post(API_URL + "/user/login", param);
  }

  check_duplicate_mobile(mobile){
    mobile == "" ? 0 : mobile
    return this.http.get(API_URL + "/user/checkmobile/"+ mobile);
  }

}
