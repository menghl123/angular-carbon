import {Component, OnInit} from '@angular/core';
import {AcSnackBarService} from '../../components/ac-snack-bar/ac-snack-bar';

@Component({
  selector: 'app-ac-snack-bar-demo',
  templateUrl: './ac-snack-bar-demo.component.html',
  styleUrls: ['./ac-snack-bar-demo.component.scss']
})
export class AcSnackBarDemoComponent implements OnInit {

  constructor(private acSnackBarService: AcSnackBarService) {
  }

  ngOnInit() {
  }

  openSnack() {
    this.acSnackBarService.open({html: `我是snack bar !!!!`});
    this.acSnackBarService.close(2000);
  }

  openDynamicSnack() {
    this.acSnackBarService.open({component: AcSnackBarDemoTestComponent});
    this.acSnackBarService.close(5000);
  }

}

@Component({
  selector: 'app-ac-snack-bar-demo',
  template: `
    <ac-snack-bar>
      <div class="ac-snack-message">
        我是SNACK BAR
      </div>
      <ac-button (click)="look()" color="red">查看</ac-button>
    </ac-snack-bar>
  `,
})
export class AcSnackBarDemoTestComponent implements OnInit {

  constructor(private acSnackBarService: AcSnackBarService) {
  }

  ngOnInit() {
  }

  look() {
    alert('u click snack bar');
  }

}

