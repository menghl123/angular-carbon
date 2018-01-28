import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../components/ac-animation/ac-animation';

@Component({
  selector: 'app-ac-select-demo',
  templateUrl: './ac-select-demo.component.html',
  styleUrls: ['./ac-select-demo.component.scss'],
  animations: [flyIn]
})
export class AcSelectDemoComponent implements OnInit {
  value: any;
  value1: any = 'student';
  menuItem = [
    {title: '学生', value: 'student'},
    {title: '教师', value: 'teacher'},
    {title: '工程师', value: 'engineer'},
  ]

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  back() {
    this.router.navigate(['../']);
  }

  ngOnInit() {
  }

}
