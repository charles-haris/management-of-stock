import { Component, inject , OnInit } from '@angular/core';

import { LoadingDataService } from '../loading-data.service';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : any
  is_loaded : boolean = false

  load_data = inject(LoadingDataService)

  ngOnInit() {
    setTimeout(() => {
      this.getProducts()
    }
      , 700);

  }

  getProducts(){
    this.load_data.getAllProducts().subscribe({
      next:(data:any)=>{
        console.log(data)
        this.products = data;
        this.is_loaded = true;
      },

      error:(error)=>{
        console.log(error)
      }
    });
  }


}
