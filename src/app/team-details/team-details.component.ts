// import { Component, OnInit } from "@angular/core";
// import { ITeam } from "../team";
// import { IMember } from "../member";
// import { TeamService } from "../team.service";

// @Component({
//   selector: "app-team-details",
//   templateUrl: "./team-details.component.html",
//   styleUrls: ["./team-details.component.css"]
// })
// export class TeamDetailsComponent implements OnInit {
//   team: ITeam = {
//     name: "",
//     members: [],
//     project: "",
//     projDesc: ""
//   };
//   members: IMember[] = [];
//   member: IMember = {
//     name: "",
//     reg: "",
//     email: "",
//     phone: "",
//     image: ""
//   };
//   picSelected = false;
//   uploadFailed = false;
//   uploadSuccess = false;
//   addMemberError = false;
//   constructor(private teamService: TeamService) {}

//   ngOnInit() {}

//   onFileSelected(event) {
//     // image
//     const file = event.target.files[0];
//     // upload file
//     if (file != null) {
//       this.picSelected = true;
//       this.teamService.uploadImage(file).subscribe(
//         res => {
//           this.member.image = res.image; // cloudinary url of uploaded image
//           this.picSelected = false;
//         },
//         err => {
//           console.log(err);
//           this.picSelected = false;
//         }
//       );
//     }
//   }

//   addMember() {
//     if (
//       this.member.name.length > 0 &&
//       this.member.reg.length > 0 &&
//       this.member.email.length > 0 &&
//       this.member.phone.length > 0
//     ) {
//       this.members.push(this.member);
//       this.member = {
//         name: "",
//         reg: "",
//         email: "",
//         phone: "",
//         image: ""
//       };
//     } else {
//       this.addMemberError = true;
//       setTimeout(() => {
//         this.addMemberError = false;
//       }, 5000);
//     }
//   }

//   removeMember(index) {
//     this.members.splice(index, 1);
//   }

//   addTeam() {
//     this.team.members = this.members;
//     console.log(this.team.members);
//     if (this.team.members.length > 0) {
//       this.teamService.uploadTeam(this.team).subscribe(
//         res => {
//           this.uploadSuccess = true;
//           this.uploadFailed = false;
//         },
//         err => {
//           console.log(err);
//           this.uploadFailed = true;
//           this.uploadSuccess = false;
//         }
//       );
//     }
//   }
// }
