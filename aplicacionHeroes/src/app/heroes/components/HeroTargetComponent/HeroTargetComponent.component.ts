import { Hero } from './../../interfaces/hero.interface';
import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { HeroesServiceService } from '../../pages/heroes-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-HeroTargetComponent',
  templateUrl: './HeroTargetComponent.component.html',
  styleUrls: ['./HeroTargetComponent.component.css']
})
export class HeroTargetComponentComponent implements OnInit {

  @Input() hero!: Hero;
  @Input() isAdmin!: boolean;
  @Output() public heroToEmit: EventEmitter<Hero> = new EventEmitter<Hero>();
  constructor(private heroesServiceService: HeroesServiceService, public matDialog: MatDialog) { }

  ngOnInit() {
  }
  edit(){
    this.heroToEmit.emit(this.hero);
  }

  deleteHero(){
    const dialogRef = this.matDialog.open(DialogConfirmComponent);
    dialogRef.afterClosed (). subscribe ( result => {
      if(result === true){
        this.heroesServiceService.deleteHero(this.hero.id as string);
      }
    });
  }

}
