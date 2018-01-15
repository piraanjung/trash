import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PurchaseProductService {
  constructor(private http: HttpClient) {}
  get_products() {

  }
}