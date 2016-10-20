/*
 * Optimal Schedule
 *
 * Pay is the same for every job regardless of duration.
 * Must maximize number of jobs scheduled
 *
 *     ------jobA------   ------jobB------   ---------------jobC---------------
 *     ---jobD---   ---------jobE---------   -----jobF---------  ---jobK----
 *     ---jobG---   ----jobH----   ---------------jobI---------------
 *  
 * Choose the job that ends soonest
 * Start over starting with jobs beginning after the chosen job ends
 * From above we would have:   D or G then H then F then K
 *
 * Thinking about this before coding, we should realize that it will be efficient
 * to create two arrays, one sorted by end date, and one sorted by start date.
 *
*/

module.exports = {
  optimalSchedule(arr) {
    if (!Array.isArray(arr) || !arr.every(e=>Array.isArray(e))) {
      throw new TypeError("Array of arrays expected");
    }
    if (!arr.every(e=>e.length === 2 && e[1] > e[0])) {
      throw new TypeError("Arrays should contain an end time > start time");
    }

    return findSchedule(0, arr, []);

    function findSchedule(start = 0, arr, output) {
      let indexesWithValidStartTimes = [];
      arr.forEach((e,i)=>{
        if (e[0] >= start) {indexesWithValidStartTimes.push(i);}
      });

      if (indexesWithValidStartTimes.length === 0) {return output;}

      let indexWithEarliestEndTime = indexesWithValidStartTimes.reduce((early, e)=>{
        return arr[e][1] < arr[early][1] ? e : early
      });

      output.push(indexWithEarliestEndTime);
      return findSchedule(arr[indexWithEarliestEndTime][1], arr, output);
    }
  }
};

