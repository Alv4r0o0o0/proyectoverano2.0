import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamsungPage } from './samsung.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('SamsungPage', () => {
  let component: SamsungPage;
  let fixture: ComponentFixture<SamsungPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(SamsungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
