import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { ReplayResponseComponent } from './components/replay-response/replay-response.component';
import { ReplayComponent } from './components/replay/replay.component';
import { WriteComponent } from './components/write/write.component';
import { ConstantsUtils } from './utils/constants.utils';


const ROUTES: Routes = [
  {path: ConstantsUtils.HOME_ROUTE, component: ForumComponent},
  {path: ConstantsUtils.WRITE_ROUTE, component: WriteComponent},
  {path: ConstantsUtils.REPLAY_ROUTE, component: ReplayComponent},
  {path: ConstantsUtils.REPLAY_RESPONSE_ROUTE, component: ReplayResponseComponent},
  {path: '**', pathMatch: 'full', redirectTo: ConstantsUtils.HOME_ROUTE},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
