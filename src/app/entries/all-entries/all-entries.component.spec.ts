import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEntriesComponent } from './all-entries.component';

describe('AllEntriesComponent', () => {
  let component: AllEntriesComponent;
  let fixture: ComponentFixture<AllEntriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllEntriesComponent]
    });
    fixture = TestBed.createComponent(AllEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
