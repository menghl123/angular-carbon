import { Component, OnInit } from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ac-radio-demo',
  templateUrl: './ac-radio-demo.component.html',
  styleUrls: ['./ac-radio-demo.component.scss'],
  animations: [flyIn]
})
export class AcRadioDemoComponent implements OnInit {
  value: any;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }
}
