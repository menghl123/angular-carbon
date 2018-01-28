import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AcMenuItem} from '../../components/ac-model/model';

@Component({
  selector: 'app-ac-bottom-nav-demo',
  templateUrl: './ac-bottom-nav-demo.component.html',
  styleUrls: ['./ac-bottom-nav-demo.component.scss']
})
export class AcBottomNavDemoComponent implements OnInit {
  tabs: AcMenuItem[];
  tab: AcMenuItem;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tabs = [
      {title: '博客', icon: 'fa fa-user'},
      {title: '小说', icon: 'fa fa-user'},
      {title: '小说', icon: 'fa fa-user'},
      {title: '小说', icon: 'fa fa-user'},
      {title: '论文', icon: 'fa fa-user'}
    ];
    this.tab = this.tabs[0];
  }

  back() {
    this.router.navigate(['../']);
  }

}
