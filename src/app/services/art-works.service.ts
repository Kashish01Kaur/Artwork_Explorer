import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArtWorksService {
  constructor(private HTTP:HttpClient) { }
  
  artWorks(page:number):Observable<any> {
    return this.HTTP.get<any>(`https://api.artic.edu/api/v1/artworks?page=${page}`);
  }
  artWorksById(id:number): Observable<any>{
    return this.HTTP.get<any>(`https://api.artic.edu/api/v1/artworks/${id}`)
  }

  artWorksBySearch(art:string):Observable<any>{
    return this.HTTP.get<any>(`https://api.artic.edu/api/v1/artworks/search?q=${art}`)
  }
 wishlistArt:Array<any>=[];
 addToWishlist(art:any){
  let storage =JSON.parse(localStorage.getItem('wishlist')||'[]');
  storage.push(art);
  localStorage.setItem('wishlist',JSON.stringify(storage));
  console.log(storage);
 }
 viewWishlist(){
  return JSON.parse(localStorage.getItem('wishlist') || '[]');
 }
}
