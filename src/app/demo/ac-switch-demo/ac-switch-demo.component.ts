import {Component, OnInit} from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ac-switch-demo',
  templateUrl: './ac-switch-demo.component.html',
  styleUrls: ['./ac-switch-demo.component.scss'],
  animations: [flyIn]
})
export class AcSwitchDemoComponent implements OnInit {
  value: any = true;
  value1: any = 'man';

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  back() {
    this.router.navigate(['../']);
  }


  ngOnInit() {
  }

}
