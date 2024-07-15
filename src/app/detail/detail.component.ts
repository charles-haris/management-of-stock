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
  route_id = inject(ActivatedRoute)
  load_data = inject(LoadingDataService)

  ngOnInit(): void {
    this.ID = this.route_id.snapshot.paramMap.get('id')
    this.getProduct(this.ID)
  }

  getProduct(id:any){
    this.load_data.getProduct(id).subscribe({
      next:(data:any)=>{
        console.log(data)
        this.data_of_product = data
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
