import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { PieBalanceComponent } from './components/pie-balance/pie-balance.component';
import { TableGrantsComponent } from './components/table-grants/table-grants.component';



const modules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatRippleModule,
  MatListModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatTooltipModule,
  MatChipsModule,
];

@NgModule({
  imports: modules,
  exports: modules,
/*   declarations: [
    TableGrantsComponent
  ], */
/*   declarations: [
    PieBalanceComponent
  ], */
  /*providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'he',
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS,
    },
  ],*/
})
export class MaterialModule {}
