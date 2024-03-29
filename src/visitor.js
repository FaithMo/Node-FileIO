let fs = require("fs");

class Visitor {
  constructor(full_name,age,date_of_visit,time_of_visit,comments,name_of_assistor) {
    this.full_name = full_name;
    this.age = age;
    this.date_of_visit = date_of_visit;
    this.time_of_visit = time_of_visit;
    this.comments = comments;
    this.name_of_assistor = name_of_assistor;
  }

  save() {
    let myJSON = JSON.stringify(this, null, 4);
    
    let remove_spaces = this.full_name.replace(" ", "_"); //replace all spaces in full name with _
    
    let correct_name_format = remove_spaces.toLowerCase(); //name has to be in lowercase letters
    
    fs.writeFile(`visitor_${correct_name_format}.json`, myJSON, msg => { //create json file
      if (msg) {
        return 'CANNOT CREATE FILE!';
      } else {
        return myJSON; //after creating file, display data.
      }
      
    });
    return `visitor_${correct_name_format}.json`;
  }

  load(full_name) {
    
    let remove_spaces = full_name.replace(" ", "_"); //ensure correct names for files...
    let correct_name_format = remove_spaces.toLowerCase();
    
    fs.readFile(`visitor_${correct_name_format}.json`, "utf8", (msg, data) => { //search file with correct name convention.
      if (msg) {
        console.log("CANNOT FIND FILE!");
      } else {
        
        return data; //display data found
      }
    });
    return `visitor_${correct_name_format}.json`;
  }
}

module.exports = Visitor;
