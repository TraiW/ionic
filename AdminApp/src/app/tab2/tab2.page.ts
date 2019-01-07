import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { MovementData } from '../../providers/movement_data';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public items:any;
    constructor(public navCtrl : NavController, public MovementService: MovementData){
      this.getData();
    }

    getData(){
      console.log(this.MovementService.getRemoteData());
    }


}
