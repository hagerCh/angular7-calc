import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  val='';
  number='';
  operation='';

  numberClick(op){
    if(op==''){
      this.operation='';
      this.val='';
    }

    if (op in ['0','1','2','3','4','5','6','7','8','9']){
      this.number=this.number + op;
      this.val=this.number;
      //console.log("number:"+this.number);
    }
    else
      {
       this.number='';
        this.val= op;
      }
    this.operation=this.operation+op;
    //console.log(this.operation);
  }
  result(){
    this.val= eval(this.operation);
    this.operation='';
    this.number='';
  }
}
