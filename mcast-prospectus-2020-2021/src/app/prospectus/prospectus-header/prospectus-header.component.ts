import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus-header',
  templateUrl: './prospectus-header.component.html',
  styleUrls: ['./prospectus-header.component.scss'],
})
export class ProspectusHeaderComponent implements OnInit {

  @Input("title") title: string ="";

  constructor(public router: Router) { }

  //tool bar home button setup

  home(){
    this.router.navigate(['menu']);
  }

  //backlink setup

  @Input('backlink') backlink: any = ['/'];

  public navigate() {
    this.router.navigateByUrl(this.backlink, { replaceUrl: true });
  }

  ngOnInit() {}

}
