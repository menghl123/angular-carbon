import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../components/ac-animation/ac-animation';

@Component({
  selector: 'app-ac-header-bar-demo',
  templateUrl: './ac-header-bar-demo.component.html',
  styleUrls: ['./ac-header-bar-demo.component.scss'],
  animations: [flyIn]
})
export class AcHeaderBarDemoComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }

}
