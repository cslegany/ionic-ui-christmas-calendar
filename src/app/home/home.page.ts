import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  doors = [...Array(24).keys()];
  currentDate = new Date();

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  async openDoor(index: number) {
    console.log("door: ", index);
    if (this.isClosed(index)) {
      const toast = await this.toastCtrl.create({
        header: 'Just a few more days..',
        duration: 2000
      });
      toast.present();
    }
    else {
      const alert = await this.alertCtrl.create({
        header: `Day ${index + 1}`,
        message: 'Ho Ho Ho!',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  isClosed(day: number): boolean {
    return this.currentDate.getDate() < day + 1;
  }
}
