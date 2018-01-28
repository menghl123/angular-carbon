import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../components/ac-animation/ac-animation';
import {AcToastService} from '../../components/ac-toast/ac-toast';

@Component({
  selector: 'app-ac-toast-demo',
  templateUrl: './ac-toast-demo.component.html',
  styleUrls: ['./ac-toast-demo.component.scss'],
  animations: [flyIn]
})
export class AcToastDemoComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private router: Router,
              private acToastService: AcToastService,
              private route: ActivatedRoute) {
  }

  openToast() {
    this.acToastService.open({
      message: '操作成功！'
    });
  }

  openToastCenter() {
    this.acToastService.open({
      message: '操作成功！',
      position: 'center'
    });
  }

  openToastIcon(){
    this.acToastService.open({
      message: '操作成功！',
      icon: 'fa fa-warning'
    });
  }

  back() {
    this.router.navigate(['../']);
  }


}
