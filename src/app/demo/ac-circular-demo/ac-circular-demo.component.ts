import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../components/ac-animation/ac-animation';

@Component({
  selector: 'app-ac-circular-demo',
  templateUrl: './ac-circular-demo.component.html',
  styleUrls: ['./ac-circular-demo.component.scss'],
  animations: [flyIn]
})
export class AcCircularDemoComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }

}
