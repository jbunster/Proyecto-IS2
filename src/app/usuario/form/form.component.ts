import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formdata;
  rut;
  constructor(private http:HttpClient,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.formdata=new FormGroup({
    nombre_cliente:new FormControl("",this.nombrevalitator),
    rut_cliente:new FormControl("",this.rutvalidation),
    numero_contacto:new FormControl("",this.numvalidation)
    });
  }
  numvalidation(formcontrol){
    if(formcontrol.value.length< 9){
      return {"numero_telefono" : true};
    }
  }
  rutvalidation(formcontrol){
    if(formcontrol.value.length<9){
      return {"rut":true};
    }
  }
  nombrevalitator(formcontrol){
    if(formcontrol.value.length< 1){
      return {"numero_telefono" : true};
    }
  }
  async onClickSubmit(){
    this.http.post('http://localhost:8000/prueba2',this.formdata.value,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (response ) =>{
        this.router.navigate(['/app-resultado/'+response.data.rows[0].rut_cliente]);
      }
    )
  }

}
