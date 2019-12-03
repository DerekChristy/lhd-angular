import { Component, OnInit, AfterContentInit } from "@angular/core";
import { ITeam } from "../team";
import { TeamService } from "../team.service";
import * as AOS from "aos";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.css"]
})
export class TeamsComponent implements OnInit, AfterContentInit {
  teams: ITeam[] = [];
  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  ngAfterContentInit() {
    AOS.init();
  }
}
