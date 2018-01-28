import {Component, OnInit} from '@angular/core';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {ActivatedRoute, Router} from '@angular/router';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-ac-search-demo',
  templateUrl: './ac-search-demo.component.html',
  styleUrls: ['./ac-search-demo.component.scss'],
  animations: [flyIn]
})
export class AcSearchDemoComponent implements OnInit {
  value: any;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  back() {
    this.router.navigate(['../']);
  }

  ngOnInit() {
  }

}
