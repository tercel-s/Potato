import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('footerContent') refFooter: ElementRef;
  offset = `0px`;

  constructor() { }

  ngOnInit() {
    this.onResize(null);
  }

  // ウィンドウのリサイズイベント
  onResize(event) {
    const mergin = (this.refFooter.nativeElement.offsetHeight || 0);
    this.offset = `${mergin}px`;
  }
}
