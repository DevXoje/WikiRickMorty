import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileID: string;
  character: any;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.profileID = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<any>('https://rickandmortyapi.com/api/character/' + this.profileID).subscribe(res => this.character = res);

  }

}
