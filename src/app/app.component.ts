import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewChecked, AfterViewInit, OnInit {
  title = 'boilerplateV112';

  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    throw new Error('ERROR');

  }

}
