webpackJsonp([0xa1edfb40fa32],{347:function(e,t,a){(function(n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),d=(l(r),a(22)),c=l(d),o=a(21),u=l(o),i=a(59),m=l(i);t.default=function(){return n.createElement(u.default,{title:"DateUtils API"},n.createElement("p",null,"Set of functions useful to work with dates and modifiers."),n.createElement(c.default,null,'import { DateUtils } from "react-day-picker";'),n.createElement("hr",null),n.createElement(m.default,null,n.createElement("h2",null,"Functions"),n.createElement("h3",{id:"addDayToRange"},"addDayToRange"," ",n.createElement("code",null,"(day: Date, range: ?Object<from: ?Date, to: ?Date>) ⇒ Object<from: ?Date, to: ?Date>")),n.createElement("p",null,"Add ",n.createElement("code",null,"day")," to a range of days, returning a new range including that day. A range is an object with ",n.createElement("code",null,"from")," and"," ",n.createElement("code",null,"to")," keys. See the range example for an example using this function."),n.createElement(c.default,null,'import { DateUtils } from "react-day-picker";\n\nconst range = {\n  from: new Date(2015, 5, 14),\n  to: new Date(2015, 5, 18)\n}\nconst newRange = DateUtils.addDayToRange(new Date(2015, 5, 24), range);\n\nconsole.log(newRange.from) // 2015-05-24'),n.createElement("h3",{id:"addMonths"},"addMonths ",n.createElement("code",null,"(date: Date, n: Number) ⇒ Date")),n.createElement("p",null,"Return ",n.createElement("code",null,"date")," as a new Date with ",n.createElement("code",null,"n")," months added. Missing days will be added to the final date, e.g."," ",n.createElement("code",null,"2016-03-31 + 1 month = 2016-05-01")," (since the 31th of April is missing)."),n.createElement("h3",{id:"clone"},"clone ",n.createElement("code",null,"(date: date) ⇒ Date")),n.createElement("p",null,"Clone ",n.createElement("code",null,"date")," returning a new Date with the same time."),n.createElement("h3",{id:"isDayAfter"},"isDayAfter ",n.createElement("code",null,"(day1: ?Date, day2: ?Date) ⇒ Boolean")),n.createElement("p",null,"Return ",n.createElement("code",null,"true")," if ",n.createElement("code",null,"day1")," is after ",n.createElement("code",null,"day2"),"."),n.createElement("h3",{id:"isDayBefore"},"isDayBefore ",n.createElement("code",null,"(day1: ?Date, day2: ?Date) ⇒ Boolean")),n.createElement("p",null,"Return ",n.createElement("code",null,"true")," if ",n.createElement("code",null,"day1")," is before"," ",n.createElement("code",null,"day2"),"."),n.createElement("h3",{id:"isDayBetween"},"isDayBetween ",n.createElement("code",null,"(day: Date, day1: Date, day2: Date) ⇒ Boolean")),n.createElement("p",null,"Returns ",n.createElement("code",null,"true")," if ",n.createElement("code",null,"day")," is between"," ",n.createElement("code",null,"day1")," and ",n.createElement("code",null,"day2"),", without including those days."),n.createElement("h3",{id:"isDayInRange"},"isDayInRange"," ",n.createElement("code",null,"(day: Date, range: Object<from: ?Date, to: ?Date>) ⇒ Boolean")),n.createElement("p",null,"Returns ",n.createElement("code",null,"true")," if ",n.createElement("code",null,"day")," is included in the specified range of days."),n.createElement("h3",{id:"isFutureDay"},"isFutureDay ",n.createElement("code",null,"(day: Date) ⇒ Boolean")),n.createElement("p",null,"Return ",n.createElement("code",null,"true")," if ",n.createElement("code",null,"day")," is in the future, i.e. is tomorrow or any day after tomorrow."),n.createElement("h3",{id:"isPastDay"},"isPastDay ",n.createElement("code",null,"(day: Date) ⇒ Boolean")),n.createElement("p",null,"Return ",n.createElement("code",null,"true")," if ",n.createElement("code",null,"day")," is in the past, i.e. is yesterday or any day before yesterday."),n.createElement("h3",{id:"isSameDay"},"isSameDay ",n.createElement("code",null,"(day1: ?Date, day2: ?Date) ⇒ Boolean")),n.createElement("p",null,"Return ",n.createElement("code",null,"true")," if ",n.createElement("code",null,"day1")," and",n.createElement("code",null,"day2")," are the same day.")))},e.exports=t.default}).call(t,a(2))}});
//# sourceMappingURL=component---src-pages-api-date-utils-js-4d5dfe8e07b93f8caec2.js.map