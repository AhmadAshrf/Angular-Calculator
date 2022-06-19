import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  result:any = '' ;
  constructor() {}

  ngOnInit(): void {
  }

  getData(data:any){
    this.result += data
  }

  operation(){
    this.result = eval(this.result)
  }
  reset(){
    this.result = '';
  }
}
