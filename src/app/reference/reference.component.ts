import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  ngAfterViewInit() {
    window.addEventListener("scroll", this.onWindowScroll, true)
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
    console.log(window.scrollY)
  }

}
