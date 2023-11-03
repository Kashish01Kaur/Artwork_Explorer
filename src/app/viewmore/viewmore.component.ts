import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtWorksService } from '../services/art-works.service';
import { faFacebookF,faTwitter,faGoogle,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter=faTwitter;
  faGoogle=faGoogle;
  faInstagram=faInstagram;
  faLinkedinIn=faLinkedinIn;
  faHeart=faHeart;
  artwork: any; // object to hold fetched artwork
  artId: number;

  constructor(private route: ActivatedRoute, private art: ArtWorksService) {
    this.artId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.art.artWorksById(this.artId).subscribe((data: any) => {
      this.artwork = data?.data;
    });
  }

  // getDataById(id: number) {
    
  // }
}