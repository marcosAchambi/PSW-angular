import {
    Component,
    Inject
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
    MatFormFieldModule
} from "@angular/material/form-field";
import {
    MatInputModule
} from "@angular/material/input";
import {
    FormsModule
} from "@angular/forms";
import {
    MatButtonModule
} from "@angular/material/button";
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
} from "@angular/material/dialog";
export interface DialogData {
    animal: string;
    name: string;
    respuestasCorrectas: number;
    respuestasIncorrectas: number;
}
@Component({
    selector: 'dialog-overview-example-dialog',
    template: `
        <h2 mat-dialog-title>Hi {{data.name}}</h2>
        <p mat-dialog-content>Respuestas Correctas: {{data.respuestasCorrectas}}</p>
        <p mat-dialog-content>Respuestas Incorrectas: {{data.respuestasIncorrectas}}</p>
        <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
        `,
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
    ],
})
export class DialogAnimationsExampleDialog {
    constructor(
        public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}