// Sleep Hours Project

function getSleepHours(day) {
    // evaluate day in switch or if/else
    switch (day) {
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 7;
        break;
      case "wednesday":
        return 6;
        break;
      case "thursday":
        return 5;
        break;
      case "friday":
        return 9;
        break;
      case "saturday":
        return 9;
        break;
      case "sunday":
        return 7;
        break;
    }
  }
  
  // function getActualSleepHours() {
  //   const monday = getSleepHours('monday');
  //   const tuesday = getSleepHours('tuesday');
  //   const wednesday = getSleepHours('wednesday');
  //   const thursday = getSleepHours('thursday');
  //   const friday = getSleepHours('friday');
  //   const saturday = getSleepHours('saturday');
  //   const sunday = getSleepHours('sunday');
  //   return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
  // }
  
  function getActualSleepHours() {
    const monday = 9;
    const tuesday = 9;
    const wednesday = 9;
    const thursday = 9;
    const friday = 9;
    const saturday = 9;
    const sunday = 13;
    return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
  }
  function getIdealSleepHours(idealHours) {
    return idealHours * 7;
  }
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(10);
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        `You got ${
          actualSleepHours - idealSleepHours
        } hours more than enough sleep!`
      );
    } else {
      console.log(
        `You need ${idealSleepHours - actualSleepHours} more hours my dude.`
      );
    }
  }
  calculateSleepDebt();