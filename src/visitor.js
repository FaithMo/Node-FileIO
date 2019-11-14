let fs = require("fs");

class Visitor {
  constructor(
    full_name,
    age,
    date_of_visit,
    time_of_visit,
    comments,
    name_of_assistor
  ) {
    this.full_name = full_name;
    this.age = age;
    this.date_of_visit = date_of_visit;
    this.time_of_visit = time_of_visit;
    this.comments = comments;
    this.name_of_assistor = name_of_assistor;
    //this.visitors = [];
  }

  save() {
    let myJSON = JSON.stringify(this, null, 4);
    //replace all spaces in full name with _
    let remove_spaces = this.full_name.replace(" ", "_");
    //name has to be in lowercase letters
    let correct_name_format = remove_spaces.toLowerCase();
    //create json file named using the correct name format
    fs.writeFile(`visitor_${correct_name_format}.json`, myJSON, msg => {
      if (msg) {
        return 'CANNOT CREATE!';
      } else {
        //after creating file, display data.
        return 'FILE CREATED!';
      }
    });
    return myJSON;
  }

  load(full_name) {
    //ensure correct names for files...
    let remove_spaces = full_name.replace(" ", "_");
    let correct_name_format = remove_spaces.toLowerCase();
    //search file with correct name convention.
    fs.readFile(`visitor_${correct_name_format}.json`, "utf8", (msg, data) => {
      if (msg) {
        console.log("CANNOT FIND FILE!");
      } else {
        //display data found
        console.log(data);
      }
    });
  }
}

module.exports = Visitor;

var bob = new Visitor(
  "Bob Marley",
  26,
  "23-03-2019",
  "08h00",
  "application unsuccesful",
  "faith"
);
//bob.save();
var charlie = new Visitor(
  "Charlie Madison",
  22,
  "01-09-2019",
  "11h00",
  "application not done",
  "mike"
);
//charlie.save();
var elizabeth = new Visitor(
  "Elizabeth Mary",
  30,
  "01-09-2019",
  "13h00",
  "application done",
  "sarah"
);
//elizabeth.save();
//elizabeth.load("Elizabeth Mary");
//console.log(bob.load("Bob Marley"));
