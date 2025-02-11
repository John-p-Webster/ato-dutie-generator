"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scheduler_1 = require("./scheduler");
function main() {
    // Create a new scheduler instance
    var scheduler = new scheduler_1.Scheduler();
    // Assign people to jobs
    scheduler.assignPeopleToJobs();
    // Display the schedule
    console.log("=== House Job Schedule ===\n");
    var assignmentCountByName = {};
    scheduler.people.forEach(function (person) {
        assignmentCountByName[person.name] = 0;
    });
    scheduler.schedule.getWeeks().forEach(function (week, index) {
        console.log("\n=== Week ".concat(week.weekNumber, " ==="));
        console.log(week.displayWeek());
        console.log("------------------------");
        scheduler.schedule.getWeeks().forEach(function (w) {
            w.jobs.forEach(function (job) {
                job.getPeople().forEach(function (person) {
                    assignmentCountByName[person.name] += 1;
                });
            });
        });
    });
    console.log("People - ".concat(scheduler.people.length));
    console.log("------------------------");
    Object.entries(assignmentCountByName).forEach(function (_a) {
        var name = _a[0], count = _a[1];
        console.log("".concat(name, ": ").concat(count / scheduler.schedule.getWeeks().length));
    });
    console.log("Max times one person is doing kitchen: ".concat(scheduler.maxTimesOnePersonIsDoingKitchen()));
    scheduler.toJson();
}
// Run the main function
main();
