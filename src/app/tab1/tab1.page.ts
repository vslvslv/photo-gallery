import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { WorkoutDialogPage } from '../workout-dialog/workout-dialog.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab1Page implements OnInit {
  items: string[] = [];
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      if (event.target) {
        event.target.complete();
      }
    }, 500);
  }

  async openWorkoutDialog() {
    const modal = await this.modalController.create({
      component: WorkoutDialogPage,
    });
    await modal.present();
  }
}
