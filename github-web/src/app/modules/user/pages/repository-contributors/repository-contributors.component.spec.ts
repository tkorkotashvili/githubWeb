import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryContributorsComponent } from './repository-contributors.component';

describe('RepositoryContributorsComponent', () => {
  let component: RepositoryContributorsComponent;
  let fixture: ComponentFixture<RepositoryContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryContributorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
