interface Iqa {
  q: string;
  a: string;
}

import { Component, OnInit, AfterContentInit } from "@angular/core";
import * as Parallax from "parallax-js";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterContentInit {
  constructor(private route: ActivatedRoute) {}

  qa: Iqa[] = [{
    q: "How do I know what ideas are relevant?",
    a: "No one at KarunyaHacks expects you to be professionals. Bring us your interests and ideas however small they may be and we'll mentor you on how to go about it."
  },
    {
      q: "What is the cost of participation?",
      a:
        "We charge Rs. 250 only, for which you get to build the future and your network while gaining experience and have lots of fun."
    },
    {
      q: "How many people can form a team?",
      a: "Some say 2 is a crowd. We say go up to 4."
    },
    {
      q: "What can we win at the hackathon?",
      a:
        "There are many exciting prizes for you to show off to your friends, not including the 10k worth cash prize. Let's just say you can eat at IFoods for the whole month."
    },
    {
      q: "What about equipment?",
      a:
        "Sorry, but we can not provide equipment for 250 rupees unless it is in dollars. You'll have to bring your own materials to \"Build your Future\"."
    },
    {
      q: "What will be the duration of hackathon?",

      a: "It starts at 9 am on the 12th and will go till midday 13th. We’ll give you a full 24 hours to build, exactly as promised."
    },
    {
      q: "Will we get food during the event?",
      a:
        "They say empty vessels make the most noise. We would like to avoid the same."
    },
    {
      q: "Projects will be evaluated on what basis?",
      a: "The rubrics will be announced on the day of hackathon."
    },
    {
      q: "Will we get attendance?",
      a:
        "On-Duty will be provided for all the participants for 12th and 13th December."
    },
    {
      q: "Will we get any certificates?",
      a: "Don't worry, we don’t plan on sending any of you back empty-handed."
    },
    {
      q: "Who all can participate in this hackathon?",
      a: "As long as you have an ID card of this college and are interested, there is no stopping you."
    },
    {
      q: "Can the registration fee be refunded?",
      a: "Unfortunately, that would be a one-way road."
    }
  ];
  fragment: string;
  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      this.fragment = frag;
    });
  }

  ngAfterContentInit() {
    const logo = document.getElementById("logo");
    const parallaxInstance = new Parallax(logo, {
      hoverOnly: false,
      relativeInput: true
    });
    parallaxInstance.friction(0.1, 0.2);

    const scene = document.getElementById("scene");
    const parallaxScene = new Parallax(scene, {
      hoverOnly: false,
      relativeInput: false
    });
    try {
      if (this.fragment) {
        document.getElementById("#" + this.fragment).scrollIntoView();
        this.fragment = null;
      }
    } catch (e) {}
  }
}
