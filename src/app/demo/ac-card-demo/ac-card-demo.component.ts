import {Component, OnInit} from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ac-card-demo',
  templateUrl: './ac-card-demo.component.html',
  styleUrls: ['./ac-card-demo.component.scss'],
  animations: [flyIn]
})
export class AcCardDemoComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }
}
