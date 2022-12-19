import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConferenceOverviewComponent} from "./conference-overview/conference-overview.component";
import {ConferenceDetailComponent} from "./conference-detail/conference-detail.component";

const routes: Routes = [
  {path: 'overview', component: ConferenceOverviewComponent},
  {path: 'detail/:id', component: ConferenceDetailComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
