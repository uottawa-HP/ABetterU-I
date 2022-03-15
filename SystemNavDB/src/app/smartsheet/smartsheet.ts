import smartsheet from './smartsheet';

class SmartsheetAPI{
  private client;
  private smartsheet;
  constructor(){
    // Initialize the client
    this.client = require('smartsheet');
    this.smartsheet = this.client.createClient({
      accessToken: 'r94JLKQwl4updxY0ePmwxqqMxIboAThDCjcHu',// IF WE MAKE THE CODE PUBLIC THIS NEEDS TO GO SOMEWHERE ELSE
      logLevel: 'info'
    });


    console.log("Created smartsheet client.");
  }

  // Get sheet by an id
  getSheet=(id:number)=>{
    // Set options
    var options = {
      id: 6377667244124036
    };


    // Get sheet
    // console.log(this.smartsheet);
    return this.smartsheet.sheets.getSheet(options)
      .then(function(sheetInfo) {
          console.log(sheetInfo);
      })
      .catch(function(error) {
          console.log(error);
      });



    //   .then((sheetInfo)=> {
    //     return sheetInfo;
    //   })
    //   .catch((error)=> {
    //     console.log(error);
    // });
  };
}
// Create smartsheet api
const smartsheetAPI = new SmartsheetAPI();

export default smartsheetAPI;
