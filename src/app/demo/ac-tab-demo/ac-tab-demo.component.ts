import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {AcMenuItem} from '../../components/ac-model/model';

@Component({
  selector: 'app-ac-tab-demo',
  templateUrl: './ac-tab-demo.component.html',
  styleUrls: ['./ac-tab-demo.component.scss'],
  animations: [flyIn]
})
export class AcTabDemoComponent implements OnInit {
  tabs: AcMenuItem[];
  tab: AcMenuItem;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  back() {
    this.router.navigate(['../']);
  }


  ngOnInit() {
    this.tabs = [
      {title: '博客'},
      {title: '小说'},
      {title: '论文'}
    ];
    this.tab = this.tabs[0];
  }




}
