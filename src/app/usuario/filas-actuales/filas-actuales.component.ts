import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-filas-actuales',
  templateUrl: './filas-actuales.component.html',
  styleUrls: ['./filas-actuales.component.css']
})
export class FilasActualesComponent implements OnInit {
  filas:any;
  rut:any;
  mostrarError:boolean;
  constructor(private http:HttpClient, private route:ActivatedRoute) { }

  async ngOnInit() {
    this.rut=parseInt(this.route.snapshot.paramMap.get('rut'));
    this.filas=await
    this.http.get('http://localhost:8000/filas-actuales/'+this.rut).toPromise();
    if(this.filas.data.rowCount==0){
      this.mostrarError=true;
    }else{
      this.mostrarError=false;
    }
  }

}
