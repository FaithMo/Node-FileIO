class Visitor {
  constructor(full_name,age,date_of_visit,time_of_visit,comments,name_of_assistor) {
    this.full_name = full_name;
    this.age = age;
    this.date_of_visit = date_of_visit;
    this.time_of_visit = time_of_visit;
    this.comments = comments;
    this.name_of_assistor = name_of_assistor;
    this.index;
  }

    save(){
        this.index = 0;
        let myJSON = JSON.stringify(this,null, 4);
        var fs = require('fs');
        var data = fs.exists(`visitor_${this.index}.json`);

        do{
            this.index++;
        }while(data);
        fs.writeFile(`visitor_${this.index}.json`, myJSON, (msg) => {
            if(msg) {
                return msg;
            }else{
                console.log(`Data saved: ${myJSON}`);
                 
            }
        });
    };

    load(){
        
    }

}

var alice = new Visitor();
//alice.save();
var bob = new Visitor("bob", 26, "23-03-2019", "08h00", "application unsuccesful", "faith");
//bob.save();
var charlie = new Visitor("charlie", 22, "01-09-2019", "11h00", "application not done", "mike");
//charlie.save();

//alice.load();