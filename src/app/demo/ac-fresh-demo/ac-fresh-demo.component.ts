import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../components/ac-animation/ac-animation';

@Component({
  selector: 'app-ac-fresh-demo',
  templateUrl: './ac-fresh-demo.component.html',
  styleUrls: ['./ac-fresh-demo.component.scss'],
  animations: [flyIn]
})
export class AcFreshDemoComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }


}
