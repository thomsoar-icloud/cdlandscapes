import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class JobsPage {

  segment: string;

  constructor(public navCtrl: NavController) {
    this.segment = "all";
  }

  updateSegment() {

  }
}
