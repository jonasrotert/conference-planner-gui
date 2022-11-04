import {Component, OnInit} from '@angular/core';
import {NgbConfig} from "@ng-bootstrap/ng-bootstrap";
import {ConferenceService} from "./conference.service";
import {Observable} from "rxjs";
import {Conference} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'conference-planner-gui';

  isHomeCollapsed = false;
  isConferencesCollapsed = true;

  conferences!: Observable<Conference[]>;

  ngOnInit(): void {
    this.conferences =  this.conferenceService.load();
  }

  constructor(ngbConfig: NgbConfig, private conferenceService: ConferenceService) {
    ngbConfig.animation = true;
  }

}
