import { Satellite } from './satellite';
import { Component } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          for( let i in fetchedSatellites ) {
            let showSatellite = new Satellite(
              fetchedSatellites[i].name,
              fetchedSatellites[i].type,
              fetchedSatellites[i].launchDate,
              fetchedSatellites[i].orbitType,
              fetchedSatellites[i].operational);
            this.sourceList.push(showSatellite);
          }
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: 
 
       }.bind(this));
    }.bind(this));
 
 }
};
