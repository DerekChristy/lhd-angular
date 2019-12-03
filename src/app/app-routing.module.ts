import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { TeamDetailsComponent } from './team-details/team-details.component';
import { HomeComponent } from "./home/home.component";
import { TeamsComponent } from "./teams/teams.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "teams", component: TeamsComponent }
  // { path: 'team-upload', component: TeamDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
