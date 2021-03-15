import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroTargetComponentComponent } from './HeroTargetComponent.component';
import { HeroesServiceService } from '../../pages/heroes-service.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('HeroTargetComponentComponent', () => {
  let component: HeroTargetComponentComponent;
  let fixture: ComponentFixture<HeroTargetComponentComponent>;

  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTargetComponentComponent ],
      providers:[
        HeroesServiceService,
        { provide: MatDialogRef, useValue: dialogMock },
      ],
      imports:[HttpClientTestingModule, MatDialogModule]
    })
    .compileComponents();
  }));

});
