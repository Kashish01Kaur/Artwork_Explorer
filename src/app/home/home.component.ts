import { Component } from '@angular/core';
import { ArtWorksService } from '../services/art-works.service';
import { faFacebookF,faTwitter,faGoogle,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faFacebookF = faFacebookF;
  faTwitter=faTwitter;
  faGoogle=faGoogle;
  faInstagram=faInstagram;
  faLinkedinIn=faLinkedinIn;
  faHeart=faHeart;

  title = 'ArtExplorer';
  data : Array<any> = [];
  currPage:number=1;
  searchArt !: FormGroup;
  
  constructor(private artWorks:ArtWorksService, private fb: FormBuilder){
    this.searchArt = this.fb.group({
      searchTerm: ''
    });
 
    this.searchArt.get('searchTerm')?.valueChanges.subscribe((value) => {
      if (value) {
        this.artWorks.artWorksBySearch(value).subscribe((data: any) => {
          console.log(data);
          this.data = data?.data;
        });
      } else {
        this.getData();
      }
    });
    }
  ngOnInit():void{
  this.getData();

  }

  getData(){
    this.artWorks.artWorks(this.currPage).subscribe((data : any)=>{
      this.data = data.data;
      console.log("data",this.data);
  }
)}
prev(){
 if (this.currPage>1)
 this.currPage--;
this.getData();
}
next(){
  this.currPage++;
  this.getData();
}

addToWishlist(item:any){
  this.artWorks.addToWishlist(item);
  console.log('Artwork added to wishlist');
  alert('Artwork added to wishlist')
}


}
