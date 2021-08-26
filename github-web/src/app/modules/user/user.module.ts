import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './pages/list/list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@reducers/index';
import { UserEffects } from './store/effects/user.effect';
import { CoreModule } from '@core/core.module';
//Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { userReducers } from './store/reducers/user.reducer';
import { RepositoryContributorsComponent } from './pages/repository-contributors/repository-contributors.component';
export const MATERIAL_IMPORTS = [
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatCheckboxModule,
  MatCardModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDialogModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatChipsModule,
  MatSnackBarModule,
  MatRippleModule,
  MatTooltipModule,
  MatBadgeModule,
  MatTabsModule,
  MatToolbarModule,
  MatSlideToggleModule
];


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    RepositoryContributorsComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('users', userReducers),
    EffectsModule.forFeature([UserEffects]),
    ...MATERIAL_IMPORTS
  ]
})
export class UserModule { }
