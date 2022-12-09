import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

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
