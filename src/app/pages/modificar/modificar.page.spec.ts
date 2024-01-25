import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPage } from './modificar.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
