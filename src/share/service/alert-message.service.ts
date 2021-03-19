import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable()
export class AlertMessageService {

  constructor (private snack: MatSnackBar) {
  }

  showOk (message: string): void {
    this.snack.open(message, 'Alert', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
