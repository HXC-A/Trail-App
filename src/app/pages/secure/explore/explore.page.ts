import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  content_loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.content_loaded = true;
    }, 1000);
  }

  // ionViewWillEnter() {
  //   setTimeout(() => {
  //     this.content_loaded = true;
  //   }, 1000);
  // }

  // ionViewWillLeave() {
  //   this.content_loaded = false;
  // }

}
