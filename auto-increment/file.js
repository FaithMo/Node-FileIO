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
    this.index;
  }

  save() {
    this.index = 0;
    let myJSON = JSON.stringify(this, null, 4);
    var fs = require("fs");
    var data = fs.existsSync(`visitor_${this.index}.json`);

    do {
      this.index++;
    } while (data);
    fs.writeFile(`visitor_${this.index}.json`, myJSON, msg => {
      if (msg) {
        console.log("CANNOT CREATE FILE!");
        ;
      } else {
        console.log(`Data saved: ${myJSON}`);
      }
    });
  }

  load() {
    let myJSON = JSON.stringify(this, null, 4);
    var fs = require("fs");
    var data = fs.exists(`visitor_${this.index}.json`);

    fs.readFile(`visitor_${this.index}.json`, myJSON, 'utf8', msg => {
      if (msg) {
        console.log(msg); 
      } else {
        console.log(`FILE FOUND: ${myJSON}`);
      }
    });
  }
}

var alice = new Visitor(
  "alice",
  26,
  "05-03-2019",
  "13h00",
  "application done",
  "faith"
);
var bob = new Visitor(
  "Bob Marley",
  26,
  "23-03-2019",
  "08h00",
  "application unsuccesful",
  "faith"
);
//bob.save();
//alice.save();
//alice.load(1);
bob.load(1);