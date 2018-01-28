import {Component, OnInit} from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ac-range-demo',
  templateUrl: './ac-range-demo.component.html',
  styleUrls: ['./ac-range-demo.component.scss'],
  animations: [flyIn]
})
export class AcRangeDemoComponent implements OnInit {
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
