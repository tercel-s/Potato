import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Title]
})
export class HomeComponent implements OnInit {
  readonly pageTitle = 'Potato';

  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {
  }

}
