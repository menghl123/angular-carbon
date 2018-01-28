import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../components/ac-animation/ac-animation';

@Component({
  selector: 'app-ac-float-button',
  templateUrl: './ac-float-button.component.html',
  styleUrls: ['./ac-float-button.component.scss'],
  animations: [flyIn]
})
export class AcFloatButtonDemoComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }

}
