import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoadingDataService {

  constructor() { }

  loading_data = inject(HttpClient)

  url_api = "https://api.restful-api.dev/objects"

  getAllProducts(){
    return this.loading_data.get(this.url_api);
  }

  getProduct(id:any){
    return this.loading_data.get(`${this.url_api}/${id}`);
  }


}
