import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-handle-dialog',
  templateUrl: './error-handle-dialog.component.html'
})
export class ErrorHandleDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { errorMessage: Observable<string> }) { }


}
