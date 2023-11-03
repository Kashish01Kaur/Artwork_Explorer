import { Component } from '@angular/core';
import { ArtWorksService } from '../services/art-works.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist:Array<any>=[];
  art:any
  constructor(private artWork:ArtWorksService){
    this.wishlist=this.artWork.viewWishlist();
    console.log(this.wishlist);
  }
  removeArt(art: any) {
    const id = this.wishlist.indexOf(art);
    if (id !== -1) {
      this.wishlist.splice(id, 1);
      console.log(this.wishlist);
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist)); // update localStorage
    }
  }
}
