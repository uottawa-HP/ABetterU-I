import { Injectable } from '@angular/core';
import smartsheetAPI from './smartsheet';
import { convertToResourceSmartsheet } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() { }
  // Parse through smartsheet
  // private parseSmarsheet = (res, dateNow) => {
  //
  //   // we receive the date in ISO format, in the smartsheet the dates are in format YYYY-MM-DD
  //   // So we have to convert this ISO date into the needed format
  //
  //
  //   const wellnessTipsList = [];
  //
  //   // we check each row of he smartsheet until we find the date of today
  //   res.rows.forEach((row, index) => {
  //
  //     const dateOfTip: string = row.cells[1].value;
  //
  //     // we found today's tip
  //     if (dateNow === dateOfTip) {
  //       // adding the tip to the list
  //       wellnessTipsList.push(convertToWellnessTipSmartsheet(row.cells));
  //
  //     }
  //   });

    // displaying how many tips were retrieved, should be equal to 1 everyday
  //   console.log(wellnessTipsList.length.toString() + " tip retrieved");
  //
  //   return wellnessTipsList;
  // }

  // get list of events (temporary no arguments )
  public getResources = () => {

    // Get sheet using sheet ID
    return smartsheetAPI.getSheet(6377667244124036);
      // let dateNow: string;

      // if (date == null) {
      //   // if the date could not be found, we create a "dummy" date to avoid an error
      //   // dateNow = new Date(0);
      // }
      // else {
      //   dateNow = date;
      // }
      // return this.parseSmarsheet(res, dateNow);

  };
}
