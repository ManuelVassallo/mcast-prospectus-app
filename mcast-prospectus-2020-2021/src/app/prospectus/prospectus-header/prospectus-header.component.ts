import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prospectus-header',
  templateUrl: './prospectus-header.component.html',
  styleUrls: ['./prospectus-header.component.scss'],
})
export class ProspectusHeaderComponent implements OnInit {

  @Input("title") title: string ="";

  constructor() { }

  ngOnInit() {}

}
