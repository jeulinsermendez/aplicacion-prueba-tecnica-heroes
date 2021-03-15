import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddHeroeComponent } from './add-heroe.component';

describe('AddHeroeComponent', () => {
  let component: AddHeroeComponent;
  let fixture: ComponentFixture<AddHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHeroeComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  });
});
