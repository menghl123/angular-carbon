import {Component, OnInit} from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ac-checkbox-demo',
  templateUrl: './ac-checkbox-demo.component.html',
  styleUrls: ['./ac-checkbox-demo.component.scss'],
  animations: [flyIn]
})
export class AcCheckboxDemoComponent implements OnInit {
  value: any;
  value1: any;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }

}
