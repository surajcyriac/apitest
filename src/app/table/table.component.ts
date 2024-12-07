import { Component } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  allemployee:any=[]
  filteredItems: any = []

  constructor(private api:ApiserviceService){}

  ngOnInit(){
    this.getallemploye()
  }

  getallemploye(){
    this.api.showAPI().subscribe((res:any)=>{
      this.allemployee=res
     console.log(this.allemployee);
     
    })
  }

  delemp(id:string){
    console.log("id",id);
this.api.delAPI(id).subscribe()
this.getallemploye()
  }

  filterItems(status: string) {
    this.api.filterAPI(status).subscribe((response) => {
      this.allemployee = response;
      console.log(this.allemployee  );
      
    });}

}
