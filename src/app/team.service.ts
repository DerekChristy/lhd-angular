import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ITeam } from "./team";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TeamService {
  url = "";
  constructor(private http: HttpClient) {}

  uploadTeam(team: ITeam): Observable<any> {
    return this.http.post(this.url + "uploadTeam/", team);
  }

  uploadImage(image: File) {
    const fd = new FormData();
    fd.append("image", image, image.name);
    return this.http.post<any>(this.url + "uploadImage/", fd);
  }

  getTeams(): Observable<ITeam[]> {
    return this.http.get<ITeam[]>(this.url + "teams");
  }
}
