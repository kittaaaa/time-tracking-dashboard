"use strict";

const dailyBtn = document.querySelector(".day");
const weeklyBtn = document.querySelector(".week");
const monthlyBtn = document.querySelector(".month");

const contentTime = Array.from(document.querySelectorAll(".content-wraper-time"));
const hours = Array.from(document.querySelectorAll(".hours"));
const previousHours = Array.from(document.querySelectorAll(".previous-hours"));

const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

function populateInfo(info) {
  let currentTime = null;
  for (let index = 0; index < 6; index++) {
    currentTime = + String.toString(info.timeframes.daily.current);
    hours[index].textContent = currentTime;
    console.log(typeof currentTime);
    
  }
}

function init() {
  
  let currentActiveBtn = weeklyBtn;
  let previousActiveBtn = null;


  dailyBtn.addEventListener("click", (e) => {
    data.forEach((d) => {
      populateInfo(d)
    });
  })
}
init();