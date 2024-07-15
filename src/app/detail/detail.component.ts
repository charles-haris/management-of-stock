import { Component, inject , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingDataService } from '../loading-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  ID : any
  data_of_product:any
  data_keys: any
  data_values: any
  count:number = 0
  is_loaded: boolean = false
  route_id = inject(ActivatedRoute)
  load_data = inject(LoadingDataService)

  ngOnInit(): void {
    this.ID = this.route_id.snapshot.paramMap.get('id')
    this.getProduct(this.ID)
  }

  getProduct(id:any){
    this.load_data.getProduct(id).subscribe({
      next:(response:any)=>{
        console.log(response)
        this.data_keys = Object.keys(response.data)
        console.log(this.data_keys)
        this.data_values = Object.values(response.data)
        console.log(this.data_values)

        this.data_of_product = response

        this.is_loaded = true
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
