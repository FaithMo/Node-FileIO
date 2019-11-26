let Visitor = require('../src/visitor.js');

describe("Visitors", () =>{
    it("should show saved details", () =>{
        let charlie = new Visitor(
            "Charlie Madison",
            22,
            "01-09-2019",
            "11h00",
            "application not done",
            "mike"
        );

        let data = charlie.save();
        expect(data).toBe({
            "full_name": "Charlie Madison",
            "age": 22,
            "date_of_visit": "01-09-2019",
            "time_of_visit": "11h00",
            "comments": "application not done",
            "name_of_assistor": "mike"
        });
    })
})