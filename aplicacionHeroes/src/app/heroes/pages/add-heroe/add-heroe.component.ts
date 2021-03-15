import { switchMap } from 'rxjs/operators';
import { HeroesServiceService } from './../heroes-service.service';
import { ActivatedRoute } from '@angular/router';
import { Hero, Publisher } from './../../interfaces/hero.interface';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css']
})
export class AddHeroeComponent implements OnInit {

  hero!: Hero;

  publisher = [
    {
      id:'DC Comics',
      desc: 'Forma parte de DC Entertainment, una de las empresas que conforman Warner Bros'
    },
    {
      id:'Marvel Comics',
      desc: 'Marvel Worldwide, Inc., conocida como Marvel Comics, es una editorial de historietas estadounidense creada en 1939, inicialmente con el nombre de Timely Publications'
    }
  ];

  heroToFormsForm: Hero ={
    superhero:'',
    alter_ego:'',
    characters: '',
    first_appearance:'',
    publisher: Publisher.MarvelComics,
    image:''
  }
  constructor(private fb: FormBuilder,
              public heroesServiceService: HeroesServiceService,
              public dialogRef: MatDialogRef <AddHeroeComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Hero) { }

  ngOnInit(): void {
      if(this.data){
        this.heroesServiceService.getHeroeById(this.data.id as string).subscribe(hero => {
          this.heroToFormsForm = hero;

        });
      }
  }

  save(): void {
    console.log(this.heroToFormsForm);
    if (this.heroToFormsForm.alter_ego != '' && this.heroToFormsForm.superhero != ''
        && this.heroToFormsForm.first_appearance != '') {

      this.dialogRef.close(this.heroToFormsForm);
    }
}

  processFile(file: any): void {​​​​​
    const reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    reader.onloadend = () => {
      this.heroToFormsForm.image = reader.result as string;
    };
  }

}
