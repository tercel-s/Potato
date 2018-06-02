import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Title]
})
export class LoginComponent implements OnInit {
  readonly pageTitle = 'ログイン';
  @ViewChild('userId') refUserId: ElementRef;

  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {
    // 初期フォーカスを設定する
    this.refUserId.nativeElement.focus();
  }

}
