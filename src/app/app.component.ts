import { Component,OnInit } from '@angular/core';
import {ArtWorksService} from './services/art-works.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArtExplorer';
  data: any[] = [];
  currPage:number=1;
  constructor(private artWorks:ArtWorksService){
    }
  ngOnInit():void{
  this.getData();
  }
  getData(){
    this.artWorks.artWorks(this.currPage).subscribe((data:any)=>{
      this.data = data?.data;
      console.log("data",this.data);
  }
)}
}
