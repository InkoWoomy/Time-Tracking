const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

const timeWorkCurrent = document.getElementById("timeWorkCurrent");
const timeWorkPrevious = document.getElementById("timeWorkPrevious");
const timePlayCurrent = document.getElementById("timePlayCurrent");
const timePlayPrevious = document.getElementById("timePlayPrevious");
const timeStudyCurrent = document.getElementById("timeStudyCurrent");
const timeStudyPrevious = document.getElementById("timeStudyPrevious");
const timeExerciseCurrent = document.getElementById("timeExerciseCurrent");
const timeExercisePrevious = document.getElementById("timeExercisePrevious");
const timeSocialCurrent = document.getElementById("timeSocialCurrent");
const timeSocialPrevious = document.getElementById("timeSocialPrevious");
const timeSelfCareCurrent = document.getElementById("timeSelfCareCurrent");
const timeSelfCarePrevious = document.getElementById("timeSelfCarePrevious");

let timeData = [];



async function apiData() {
 const response = await fetch('../data/data.json');
 const data = await response.json();
    console.log(data)
    timeData = data;
    console.log(timeData)
}

apiData();

dailyBtn.addEventListener ('click', function(){
    timeWorkCurrent.innerText = ` ${timeData[0].timeframes.daily.current}hrs`;
    timeWorkPrevious.innerText = `Last Week - ${timeData[0].timeframes.daily.previous}hrs`;
    timePlayCurrent.innerText = ` ${timeData[1].timeframes.daily.current}hrs`;
    timePlayPrevious.innerText = `Last Week - ${timeData[1].timeframes.daily.previous}hrs`;
    timeStudyCurrent.innerText = ` ${timeData[2].timeframes.daily.current}hrs`;
    timeStudyPrevious.innerText = `Last Week - ${timeData[2].timeframes.daily.previous}hrs`;
    timeExerciseCurrent.innerText = ` ${timeData[3].timeframes.daily.current}hrs`;
    timeExercisePrevious.innerText = `Last Week - ${timeData[3].timeframes.daily.previous}hrs`;
    timeSocialCurrent.innerText = ` ${timeData[4].timeframes.daily.current}hrs`;
    timeSocialPrevious.innerText = `Last Week - ${timeData[4].timeframes.daily.previous}hrs`;
    timeSelfCareCurrent.innerText = ` ${timeData[5].timeframes.daily.current}hrs`;
    timeSelfCarePrevious.innerText = `Last Week - ${timeData[5].timeframes.daily.previous}hrs`;
})

weeklyBtn.addEventListener ('click', function(){
    timeWorkCurrent.innerText = ` ${timeData[0].timeframes.weekly.current}hrs`;
    timeWorkPrevious.innerText = `Last Week - ${timeData[0].timeframes.weekly.previous}hrs`;
    timePlayCurrent.innerText = ` ${timeData[1].timeframes.weekly.current}hrs`;
    timePlayPrevious.innerText = `Last Week - ${timeData[1].timeframes.weekly.previous}hrs`;
    timeStudyCurrent.innerText = ` ${timeData[2].timeframes.weekly.current}hrs`;
    timeStudyPrevious.innerText = `Last Week - ${timeData[2].timeframes.weekly.previous}hrs`;
    timeExerciseCurrent.innerText = ` ${timeData[3].timeframes.weekly.current}hrs`;
    timeExercisePrevious.innerText = `Last Week - ${timeData[3].timeframes.weekly.previous}hrs`;
    timeSocialCurrent.innerText = ` ${timeData[4].timeframes.weekly.current}hrs`;
    timeSocialPrevious.innerText = `Last Week - ${timeData[4].timeframes.weekly.previous}hrs`;
    timeSelfCareCurrent.innerText = ` ${timeData[5].timeframes.weekly.current}hrs`;
    timeSelfCarePrevious.innerText = `Last Week - ${timeData[5].timeframes.weekly.previous}hrs`;
})

monthlyBtn.addEventListener ('click', function(){
    timeWorkCurrent.innerText = ` ${timeData[0].timeframes.monthly.current}hrs`;
    timeWorkPrevious.innerText = `Last Week - ${timeData[0].timeframes.monthly.previous}hrs`;
    timePlayCurrent.innerText = ` ${timeData[1].timeframes.monthly.current}hrs`;
    timePlayPrevious.innerText = `Last Week - ${timeData[1].timeframes.monthly.previous}hrs`;
    timeStudyCurrent.innerText = ` ${timeData[2].timeframes.monthly.current}hrs`;
    timeStudyPrevious.innerText = `Last Week - ${timeData[2].timeframes.monthly.previous}hrs`;
    timeExerciseCurrent.innerText = ` ${timeData[3].timeframes.monthly.current}hrs`;
    timeExercisePrevious.innerText = `Last Week - ${timeData[3].timeframes.monthly.previous}hrs`;
    timeSocialCurrent.innerText = ` ${timeData[4].timeframes.monthly.current}hrs`;
    timeSocialPrevious.innerText = `Last Week - ${timeData[4].timeframes.monthly.previous}hrs`;
    timeSelfCareCurrent.innerText = ` ${timeData[5].timeframes.monthly.current}hrs`;
    timeSelfCarePrevious.innerText = `Last Week - ${timeData[5].timeframes.monthly.previous}hrs`;
})