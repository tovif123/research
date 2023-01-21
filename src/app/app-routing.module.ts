import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalancesComponent } from './pages/balances/balances.component';
import { TableGrantsComponent } from './shared/components/table-grants/table-grants.component';

const routes: Routes = [
  {
    path: 'balances',
    component: BalancesComponent,
  },
  {
    path: 'grants',
    component: TableGrantsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
