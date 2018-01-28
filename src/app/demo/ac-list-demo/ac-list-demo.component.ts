import {Component, OnInit} from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ac-list-demo',
  templateUrl: './ac-list-demo.component.html',
  styleUrls: ['./ac-list-demo.component.scss'],
  animations: [flyIn]
})
export class AcListDemoComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['../']);
  }

}
