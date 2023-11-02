import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFavComponent } from './cards-fav.component';

describe('CardsFavComponent', () => {
  let component: CardsFavComponent;
  let fixture: ComponentFixture<CardsFavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsFavComponent]
    });
    fixture = TestBed.createComponent(CardsFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
