import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout-dialog',
  templateUrl: './workout-dialog.page.html',
  styleUrls: ['./workout-dialog.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class WorkoutDialogPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private modalController: ModalController) {}

  workout = {
    name: '',
    time: '',
    exercises: '',
    musclesWorked: ''
    // Add more properties as needed
  };


  saveWorkout() {
    // Perform saving logic here, e.g., send data to the server or store in the database
    console.log('Saving workout:', this.workout);
    this.closeModal();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
