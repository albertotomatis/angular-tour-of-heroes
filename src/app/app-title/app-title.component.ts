import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.css']
})
export class AppTitleComponent implements OnInit {
title: string = "Tour of heroes"
@Input() hero: Hero
  constructor() { }

  ngOnInit(): void {
  }

}
