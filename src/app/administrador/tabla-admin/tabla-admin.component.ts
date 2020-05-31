import { Component, OnInit } from '@angular/core';
export interface fila{
  nombre:string;
  rut:string;
}
const fila:fila[]=[
  {nombre:'Johannes Bunster',rut:'19808621-5'}
]
@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.css']
})
export class TablaAdminComponent implements OnInit {
  queue=fila;
  columnsToDisplay=['nombre','rut'];
  constructor() { }

  ngOnInit() {
  }

}
