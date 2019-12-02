let Visitor = require('../src/visitor.js');

describe("Visitors", () =>{
    it("should display JSON filename for Charlie", () =>{
        let charlie = new Visitor(
            "Charlie Madison",
            22,
            "01-09-2019",
            "11h00",
            "application not done",
            "mike"
        );

        let data = charlie.save();
        expect(data).toBe("visitor_charlie_madison.json");
    });

    it("should display JSON filename for Bob", () =>{
        let bob = new Visitor(
            "Bob Marley",
            26,
            "23-03-2019",
            "08h00",
            "application unsuccessful",
            "mike"
        );

        let data = bob.save();
        expect(data).toBe("visitor_bob_marley.json");
    });
    it("should display Json filename for Keke", () =>{
        let keke = new Visitor(
            "Keke Makhetha", 
            30, 
            "23-11-2019", 
            "08h00", 
            "completed something", 
            "faith");
            let data = keke.save();
            expect(data).toBe("visitor_keke_makhetha.json");
    });
});

describe("Load", () => {
    it("should load JSON filename for Keke", ()=>{
        let keke = new Visitor(
            "Keke Makhetha", 
            30, 
            "23-11-2019", 
            "08h00", 
            "completed something", 
            "faith");
            let data = keke.load("Keke Makhetha");
            expect(data).toBe("visitor_keke_makhetha.json");
    })
})