import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editemp',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './editemp.component.html',
  styleUrl: './editemp.component.css'
})
export class EditempComponent {
  // registerForm:FormGroup
 
item:any=""
allemployee:any=[]
editForm:FormGroup

  constructor (private route:ActivatedRoute,private api:ApiserviceService,private fb:FormBuilder , private router:Router){
    this.editForm = this.fb.group({
      username:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:["",[Validators.required,Validators.email]],
      age:["",[Validators.required,Validators.pattern('[0-9]*')]],
      status:[""]

    })
  }

    ngOnInit(){
   this.item=this.route.snapshot.paramMap.get('item')
   console.log(this.item);
   this.getallemploye(this.item)   
    }
    getallemploye(item:any){
      this.api.showoneAPI(item).subscribe((res:any)=>{
        this.allemployee=res
       console.log(this.allemployee);
       
      })
    }





  
    updatemp(){
        const id=this.allemployee.id
        const username =this.editForm.value.username ? this.editForm.value.username : this.allemployee.username
        const email =this.editForm.value.email? this.editForm.value.email : this.allemployee.email
        const age =this.editForm.value.age? this.editForm.value.age : this.allemployee.age
        const status =this.editForm.value.status? this.editForm.value.status : this.allemployee.status
console.log(username,email,age,status);

        
    //   //   // api call
       try {
        this.api.UpdateAPI(id,{username,email,age,status}).subscribe({
          // console.log(username,email,age,status);

          next: (res:any) => {
          alert(`updated sucessfully`)  
       this.router.navigateByUrl("/")
          },
          error:(reason:any)=>{
            alert(reason.error)
    
          }
        })}
        catch(err){
          console.log(err);
          
        }
   

    } 
  
}
