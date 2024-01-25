import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiocontraPage } from './cambiocontra.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('CambiocontraPage', () => {
  let component: CambiocontraPage;
  let fixture: ComponentFixture<CambiocontraPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(CambiocontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
