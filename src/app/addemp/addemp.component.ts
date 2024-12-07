import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-addemp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {
  registerForm:FormGroup

  constructor(private fb:FormBuilder ,private api:ApiserviceService, private router:Router){
    this.registerForm = this.fb.group({
      username:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:["",[Validators.required,Validators.email]],
      age:["",[Validators.required,Validators.pattern('[0-9]*')]],
      status:[""]

    })

    }
    register(){
      if(this.registerForm.valid){
        const username =this.registerForm.value.username
        const email =this.registerForm.value.email
        const age =this.registerForm.value.age
        const status =this.registerForm.value.status

        console.log(username,email,age,status);
        
      //   // api call
       try {
        this.api.addAPI({username,email,age,status}).subscribe({
          next: (res:any) => {
          alert(`welcome ${username} please login to explore our website`)  
       this.router.navigateByUrl("/")
       this.registerForm.reset()
          },
          error:(reason:any)=>{
            alert(reason.error)
            this.registerForm.reset()
    
          }
        })}
        catch(err){
          console.log(err);
          
        }
      }else{
        alert("invalid form")
      }

    } 
  
}
