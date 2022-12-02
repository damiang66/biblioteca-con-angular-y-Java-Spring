import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ListarEditorialComponent} from './listar.component';

describe('ListarComponent', () => {
  let component: ListarEditorialComponent;
  let fixture: ComponentFixture<ListarEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
