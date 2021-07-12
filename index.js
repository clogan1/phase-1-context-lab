/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



function createEmployeeRecord(arr){
    let empRecord = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return empRecord;
}

function createEmployeeRecords(arrArr){
    return arrArr.map(createEmployeeRecord);
}

function createTimeInEvent(timeStamp){
    let timeInArr = this.timeInEvents
    let hourInt = timeStamp.slice(11)
    hourInt = parseInt(hourInt);
    let timeIn = {
        type: "TimeIn",
        hour: hourInt,
        date: timeStamp.slice(0, 10)
    }

    timeInArr.push(timeIn)

    return this;
}

function createTimeOutEvent(timeStamp){
    let timeOutArr = this.timeOutEvents
    let hourInt = timeStamp.slice(11)
    hourInt = parseInt(hourInt);
    let timeOut = {
        type: "TimeOut",
        hour: hourInt,
        date: timeStamp.slice(0, 10)
    }

    timeOutArr.push(timeOut)
    return this;
}


function hoursWorkedOnDate(workDate){
    //console.log(createEmployeeRecords)
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === workDate)
    // let timeInHour = this.timeInEvents.filter(function (obj) {obj.date === workDate})
    // .map(function (obj){obj.hour})
    const outEvent =  this.timeOutEvents.find(outEvent => outEvent.date === workDate)
    // let timeOutHour = this.timeOutEvents.filter(function (obj) {
    //     obj.date === workDate}).map(function (obj){obj.hour})
    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(workDate){
   return this.payPerHour * hoursWorkedOnDate.call(this, workDate)
}

function findEmployeeByFirstName(srcArr, firstName){
    return srcArr.find(rec => rec.firstName === firstName)
}


function calculatePayroll(recsArr){
    return recsArr.reduce((total, rec) => {
        return total + allWagesFor.call(rec)
    }, 0)

}

      
