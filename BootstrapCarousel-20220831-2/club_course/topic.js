/*var topic = [
    "上課",
    "看第三輪的捍衛戰士",
    "上課",
    "繼續睡覺",
    "上課",
    "看得到嗎?"
];

var startDate = document.getElementById("date").value;

//設定好活動第一次的日期
function setMonthAndDay(startMonth,startDay){
    //JS的月份是0~11，所以這邊-1
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
var startDate = input.Date();
//設定第一次活動日期為2月21日

const mArray = startDate.split("-");
setMonthAndDay(mArray[1],mArray[2]);
*/

var topic =[
    "上課",
    "看第三輪的捍衛戰士",
    "上課",
    "繼續睡覺",
    "上課",
    "看得到嗎?"
];

var topic2 =[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "運動會"
];
var startDate = new Date ();

//設定好活動第一次的日期
function setMonthAndDay(starMonth,startDay){
    //JS的月份是0~11，所以這邊-1
    startDate.setMonth(starMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//設定第一次活動日期為2月21日
setMonthAndDay(2,21);