import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HeroTargetComponentComponent } from 'src/app/heroes/components/HeroTargetComponent/HeroTargetComponent.component';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <HeroTargetComponentComponent>) { }

  ngOnInit() {
  }
  confirm(){
    this.dialogRef.close(true);
  }
  cancel(){
    this.dialogRef.close(false);
  }

}
