import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  ejemplo:any;
  columnsToDisplay=['id','nombre'];
  constructor(private http:HttpClient) { 
  }
  async ngOnInit() {
    this.ejemplo = await
    this.http.get('http://localhost:8000/prueba').toPromise();
    console.log(this.ejemplo.data.rows);
  }
}
