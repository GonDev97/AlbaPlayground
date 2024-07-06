import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityGeneralDataComponent } from './entity-general-data.component';

describe('EntityGeneralDataComponent', () => {
  let component: EntityGeneralDataComponent;
  let fixture: ComponentFixture<EntityGeneralDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityGeneralDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
