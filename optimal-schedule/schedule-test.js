const schedule = require("./schedule.js");
const assert = require("assert");

describe("Optimal Schedule", ()=>{

  describe("input validation", ()=>{
    it("expects an array", ()=>{
      let testArr = {};
      assert.throws(()=>{schedule.optimalSchedule(testArr)});
    });
    it("expects the array to contain arrays", ()=>{
      let testArr = ["a","b"];
      assert.throws(()=>{schedule.optimalSchedule(testArr)});
    });
    it("expects the arrays to contain a start and end time", ()=>{
      let testArr = [[]];
      assert.throws(()=>{schedule.optimalSchedule(testArr)});
    });
    it("expects endtime to be later than starttime", ()=>{
      let testArr = [[3,2],];
      assert.throws(()=>{schedule.optimalSchedule(testArr)});
    });
  });

  describe("basic cases", ()=>{
    it("single schedule", ()=>{
      let testArr = [[1,5]];
      assert.deepEqual(schedule.optimalSchedule(testArr), [0]);
    });
    it("empty schedule", ()=>{
      let testArr = [];
      assert.deepEqual(schedule.optimalSchedule(testArr), testArr);
    });
    it("no overlap", ()=>{
      let testArr = [[1,2], [2,4]];
      assert.deepEqual(schedule.optimalSchedule(testArr), [0,1]);
    }); 
  });

  describe("example", ()=>{
    it("handles example case", ()=>{
      let testArr = [
        [0,7],[0,5],[0,5],[6,10],[6,9],[8,10],[9,20],[11,30],[11,25],[28,29]
      ];
      assert.deepEqual(schedule.optimalSchedule(testArr), [1,4,6,9]);
    });
  });
});
