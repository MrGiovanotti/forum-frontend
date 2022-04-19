import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { WriteComponent } from './components/write/write.component';
import { ConstantsUtils } from './utils/constants.utils';


const ROUTES: Routes = [
  {path: ConstantsUtils.HOME_ROUTE, component: ForumComponent},
  {path: ConstantsUtils.WRITE_ROUTE, component: WriteComponent},
  {path: '**', pathMatch: 'full', redirectTo: ConstantsUtils.HOME_ROUTE},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
