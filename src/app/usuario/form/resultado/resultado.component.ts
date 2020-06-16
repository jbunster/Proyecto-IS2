import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  rut:any;
  ejemplo:any;
  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  
  async ngOnInit() {
    this.rut =parseInt(this.route.snapshot.paramMap.get('id'));
    this.ejemplo =await
    this.http.get('http://localhost:8000/cliente/'+this.rut).toPromise();
 }
}
