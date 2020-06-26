import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  rut:any;
  constructor(private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.rut=parseInt(this.route.snapshot.paramMap.get('rut'));
  }
  onClick(id){
    this.router.navigate(['app-form/'+id+'/'+this.rut]);
  }
  onClickFilas(id){
    this.router.navigate(['app-test2/'+this.rut+'/'+id]);
  }
}
