/**
 * Provide helper methods for modal validation.
*/
define('js/models/validation_helpers',['jquery'],
    function($) {
        var validateIntegerRange = function(attributeVal, range) {
            // Validating attribute should have an integer value and should be under the given range.
            var isIntegerUnderRange = true;
            var value = Math.round(attributeVal); // see if this ensures value saved is int
            if (!isFinite(value) || /\D+/.test(attributeVal) || value < range.min || value > range.max) {
                isIntegerUnderRange = false;
            }
            return isIntegerUnderRange;
        };

        return {
            validateIntegerRange: validateIntegerRange
        };
    });

/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/.
 * @website: http://www.datejs.com/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
if(typeof $P._toString === 'undefined'){$P._toString=$P.toString;}$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());

define("date", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Date;
    };
}(this)));

define('js/utils/change_on_enter',['jquery'], function($) {
    // Trigger "Change" event on "Enter" keyup event
    var triggerChangeEventOnEnter = function(e) {
        if (e.which == 13) {
            $(this).trigger('change').blur();
        }
    };

    return triggerChangeEventOnEnter;
});

/*! jQuery UI - v1.10.0 - 2013-01-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.10.0",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.10.0",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};return y=d(b),b[0].preventDefault&&(t.at="left top"),l=y.width,v=y.height,m=y.offset,g=e.extend({},m),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),x[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),S.length===1&&(S[1]=S[0]),t.at[0]==="right"?g.left+=l:t.at[0]==="center"&&(g.left+=l/2),t.at[1]==="bottom"?g.top+=v:t.at[1]==="center"&&(g.top+=v/2),n=h(x.at,l,v),g.left+=n[0],g.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop"),T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend({},g),k=h(x.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:d,marginTop:y},e.each(["left","top"],function(r,i){e.ui.position[S[r]]&&e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:w,elem:a})}),t.using&&(u=function(e){var n=m.left-C.left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),v<c&&i(o+u)<v&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}()})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n,r=this,i=!1,s=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=this.element[0];while(n&&(n=n.parentNode))n===document&&(i=!0);return!i&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window).scrollTop())+(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0];if(!r)return;t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else i.containment.constructor===Array&&(this.containment=i.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;e.each(r.sortables,function(){var s=!1,o=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=!1;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!=="y")n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!=="x")t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!=="y")t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c].height;if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1;continue}d.snapMode!=="inner"&&(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=r||i||s||o||h}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=e(this).data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!r.length)return;t=parseInt(r[0].style.zIndex,10)||0,e(r).each(function(e){this.style.zIndex=t+e}),this[0].style.zIndex=t+r.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.droppable",{version:"1.10.0",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,n=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=0,n=e.ui.ddmanager.droppables[this.options.scope];for(;t<n.length;t++)n[t]===this&&n.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t==="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current,i=!1;return!r||(r.currentItem||r.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope===r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1)},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,t,r){if(!t.offset)return!1;var i,s,o=(e.positionAbs||e.position.absolute).left,u=o+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,f=a+e.helperProportions.height,l=t.offset.left,c=l+t.proportions.width,h=t.offset.top,p=h+t.proportions.height;switch(r){case"fit":return l<=o&&u<=c&&h<=a&&f<=p;case"intersect":return l<o+e.helperProportions.width/2&&u-e.helperProportions.width/2<c&&h<a+e.helperProportions.height/2&&f-e.helperProportions.height/2<p;case"pointer":return i=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,s=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,n(s,h,t.proportions.height)&&n(i,l,t.proportions.width);case"touch":return(a>=h&&a<=p||f>=h&&f<=p||a<h&&f>p)&&(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r,i,s=e.ui.ddmanager.droppables[t.options.scope]||[],o=n?n.type:null,u=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(r=0;r<s.length;r++){if(s[r].options.disabled||t&&!s[r].accept.call(s[r].element[0],t.currentItem||t.element))continue;for(i=0;i<u.length;i++)if(u[i]===s[r].element[0]){s[r].proportions.height=0;continue e}s[r].visible=s[r].element.css("display")!=="none";if(!s[r].visible)continue;o==="mousedown"&&s[r]._activate.call(s[r],n),s[r].offset=s[r].element.offset(),s[r].proportions={width:s[r].element[0].offsetWidth,height:s[r].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r,i,s,o=e.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?"isout":o&&!this.isover?"isover":null;if(!u)return;this.options.greedy&&(i=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===i}),s.length&&(r=e.data(s[0],"ui-droppable"),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=!1,r.isout=!0,r._out.call(r,n)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over":"_out"].call(this,n),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);(function(e,t){function n(e){return parseInt(e,10)||0}function r(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){this.handles[n].constructor===String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize());if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var r,i,s,o=this.options,u=this.element.position(),a=this.element;return this.resizing=!0,/absolute/.test(a.css("position"))?a.css({position:"absolute",top:a.css("top"),left:a.css("left")}):a.is(".ui-draggable")&&a.css({position:"absolute",top:u.top,left:u.left}),this._renderProxy(),r=n(this.helper.css("left")),i=n(this.helper.css("top")),o.containment&&(r+=e(o.containment).scrollLeft()||0,i+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:i},this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:r,top:i},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof o.aspectRatio=="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",s==="auto"?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];if(!p)return!1;n=p.apply(this,[t,c,h]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),this.position.top!==u&&(i.top=this.position.top+"px"),this.position.left!==a&&(i.left=this.position.left+"px"),this.size.width!==f&&(i.width=this.size.width+"px"),this.size.height!==l&&(i.height=this.size.height+"px"),r.css(i),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(i)||this._trigger("resize",t,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,n,i,s,o,u=this.options;o={minWidth:r(u.minWidth)?u.minWidth:0,maxWidth:r(u.maxWidth)?u.maxWidth:Infinity,minHeight:r(u.minHeight)?u.minHeight:0,maxHeight:r(u.maxHeight)?u.maxHeight:Infinity};if(this._aspectRatio||e)t=o.minHeight*this.aspectRatio,i=o.minWidth/this.aspectRatio,n=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),i>o.minHeight&&(o.minHeight=i),n<o.maxWidth&&(o.maxWidth=n),s<o.maxHeight&&(o.maxHeight=s);this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),i==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),i==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=r(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=r(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=r(e.width)&&t.minWidth&&t.minWidth>e.width,u=r(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,f=this.position.top+this.size.height,l=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n);return o&&(e.width=t.minWidth),u&&(e.height=t.minHeight),i&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),o&&l&&(e.left=a-t.minWidth),i&&l&&(e.left=a-t.maxWidth),u&&c&&(e.top=f-t.minHeight),s&&c&&(e.top=f-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t,n,r,i,s=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){i=this._proportionallyResizeElements[e];if(!this.borderDif){this.borderDif=[],n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];for(t=0;t<n.length;t++)this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0)}i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;if(!p)return;f.containerElement=e(p),/document/.test(h)||h===document?(f.containerOffset={left:0,top:0},f.containerPosition={left:0,top:0},f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(p),r=[],e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=n(t.css("padding"+i))}),f.containerOffset=t.offset(),f.containerPosition=t.position(),f.containerSize={height:t.innerHeight()-r[3],width:t.innerWidth()-r[1]},i=f.containerOffset,s=f.containerSize.height,o=f.containerSize.width,u=e.ui.hasScroll(p,"left")?p.scrollWidth:o,a=e.ui.hasScroll(p)?p.scrollHeight:s,f.parentData={element:p,left:i.left,top:i.top,width:u,height:a})},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?a.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s&&(n-=o.parentData.left),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof n.alsoResize=="object"&&!n.alsoResize.parentNode?n.alsoResize.length?(n.alsoResize=n.alsoResize[0],r(n.alsoResize)):e.each(n.alsoResize,function(e){r(e)}):r(n.alsoResize)},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u=typeof n.grid=="number"?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&n.maxWidth<h,v=n.maxHeight&&n.maxHeight<p,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;n.grid=u,m&&(h+=a),g&&(p+=f),d&&(h-=a),v&&(p-=f),/^(se|s|e)$/.test(o)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.top=s.top-c):/^(sw)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.left=s.left-l):(t.size.width=h,t.size.height=p,t.position.top=s.top-c,t.position.left=s.left-l)}})})(jQuery);(function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.0",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,n=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(n.options.filter,n.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var n=this,r=this.options;this.opos=[t.pageX,t.pageY];if(this.options.disabled)return;this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))}),e(t.target).parents().addBack().each(function(){var r,i=e.data(this,"selectable-item");if(i)return r=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected"),i.$element.removeClass(r?"ui-unselecting":"ui-selected").addClass(r?"ui-selecting":"ui-unselecting"),i.unselecting=!r,i.selecting=r,i.selected=r,r?n._trigger("selecting",t,{selecting:i.element}):n._trigger("unselecting",t,{unselecting:i.element}),!1})},_mouseDrag:function(t){this.dragged=!0;if(this.options.disabled)return;var n,r=this,i=this.options,s=this.opos[0],o=this.opos[1],u=t.pageX,a=t.pageY;return s>u&&(n=u,u=s,s=n),o>a&&(n=a,a=o,o=n),this.helper.css({left:s,top:o,width:u-s,height:a-o}),this.selectees.each(function(){var n=e.data(this,"selectable-item"),f=!1;if(!n||n.element===r.element[0])return;i.tolerance==="touch"?f=!(n.left>u||n.right<s||n.top>a||n.bottom<o):i.tolerance==="fit"&&(f=n.left>s&&n.right<u&&n.top>o&&n.bottom<a),f?(n.selected&&(n.$element.removeClass("ui-selected"),n.selected=!1),n.unselecting&&(n.$element.removeClass("ui-unselecting"),n.unselecting=!1),n.selecting||(n.$element.addClass("ui-selecting"),n.selecting=!0,r._trigger("selecting",t,{selecting:n.element}))):(n.selecting&&((t.metaKey||t.ctrlKey)&&n.startselected?(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.$element.addClass("ui-selected"),n.selected=!0):(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.startselected&&(n.$element.addClass("ui-unselecting"),n.unselecting=!0),r._trigger("unselecting",t,{unselecting:n.element}))),n.selected&&!t.metaKey&&!t.ctrlKey&&!n.startselected&&(n.$element.removeClass("ui-selected"),n.selected=!1,n.$element.addClass("ui-unselecting"),n.unselecting=!0,r._trigger("unselecting",t,{unselecting:n.element})))}),!1},_mouseStop:function(t){var n=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=null,i=!1,s=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type==="static")return!1;this._refreshItems(t),e(t.target).parents().each(function(){if(e.data(this,s.widgetName+"-item")===s)return r=e(this),!1}),e.data(t.target,s.widgetName+"-item")===s&&(r=e(t.target));if(!r)return!1;if(this.options.handle&&!n){e(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(i=!0)});if(!i)return!1}return this.currentItem=r,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i,s=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),s.containment&&this._setContainment(),s.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",s.cursor)),s.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",s.opacity)),s.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",s.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(i=this.containers.length-1;i>=0;i--)this.containers[i]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var n,r,i,s,o=this.options,u=!1;this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?u=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(u=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?u=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(u=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),u!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";for(n=this.items.length-1;n>=0;n--){r=this.items[n],i=r.item[0],s=this._intersectsWithPointer(r);if(!s)continue;if(r.instance!==this.currentContainer)continue;if(i!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],i):!0)){this.direction=s===1?"down":"up";if(this.options.tolerance!=="pointer"&&!this._intersectsWithSides(r))break;this._rearrange(t,r),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper==="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(e){var t=this.options.axis==="x"||n(this.positionAbs.top+this.offset.click.top,e.top,e.height),r=this.options.axis==="y"||n(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=t&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o==="right"||s==="down"?2:1:s&&(s==="down"?2:1):!1},_intersectsWithSides:function(e){var t=n(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),r=n(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s==="right"&&r||s==="left"&&!r:i&&(i==="down"&&t||i==="up"&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!==0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n,r,i,s,o=[],u=[],a=this._connectWith();if(a&&t)for(n=a.length-1;n>=0;n--){i=e(a[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&u.push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}u.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(n=u.length-1;n>=0;n--)u[n][0].each(function(){o.push(this)});return e(o)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n,r,i,s,o,u,a,f,l=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith();if(h&&this.ready)for(n=h.length-1;n>=0;n--){i=e(h[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&(c.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):e(s.options.items,s.element),s]),this.containers.push(s))}for(n=c.length-1;n>=0;n--){o=c[n][1],u=c[n][0];for(r=0,f=u.length;r<f;r++)a=e(u[r]),a.data(this.widgetName+"-item",o),l.push({item:a,instance:o,width:0,height:0,left:0,top:0})}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var n,r,i,s;for(n=this.items.length-1;n>=0;n--){r=this.items[n];if(r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0])continue;i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item,t||(r.width=i.outerWidth(),r.height=i.outerHeight()),s=i.offset(),r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(n=this.containers.length-1;n>=0;n--)s=this.containers[n].element.offset(),this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var n,r=t.options;if(!r.placeholder||r.placeholder.constructor===String)n=r.placeholder,r.placeholder={element:function(){var r=e(document.createElement(t.currentItem[0].nodeName)).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return n||(r.style.visibility="hidden"),r},update:function(e,i){if(n&&!r.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}};t.placeholder=e(r.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),r.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n,r,i,s,o,u,a,f,l,c=null,h=null;for(n=this.containers.length-1;n>=0;n--){if(e.contains(this.currentItem[0],this.containers[n].element[0]))continue;if(this._intersectsWith(this.containers[n].containerCache)){if(c&&e.contains(this.containers[n].element[0],c.element[0]))continue;c=this.containers[n],h=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",t,this._uiHash(this)),this.containers[n].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1;else{i=1e4,s=null,o=this.containers[h].floating?"left":"top",u=this.containers[h].floating?"width":"height",a=this.positionAbs[o]+this.offset.click[o];for(r=this.items.length-1;r>=0;r--){if(!e.contains(this.containers[h].element[0],this.items[r].item[0]))continue;if(this.items[r].item[0]===this.currentItem[0])continue;f=this.items[r].item.offset()[o],l=!1,Math.abs(f-a)>Math.abs(f+this.items[r][u]-a)&&(l=!0,f+=this.items[r][u]),Math.abs(f-a)<i&&(i=Math.abs(f-a),s=this.items[r],this.direction=l?"up":"down")}if(!s&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[h],s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[h].element,!0),this._trigger("change",t,this._uiHash()),this.containers[h]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper==="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!r[0].style.width||n.forceHelperSize)&&r.width(this.currentItem.width()),(!r[0].style.height||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];/^(document|window|parent)$/.test(i.containment)||(t=e(i.containment)[0],n=e(i.containment).offset(),r=e(t).css("overflow")!=="hidden",this.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(r?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(r?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i=this.options,s=t.pageX,o=t.pageY,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName);return this.cssPosition==="relative"&&(this.scrollParent[0]===document||this.scrollParent[0]===this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),i.grid&&(n=this.originalPageY+Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1],o=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-i.grid[1]:n+i.grid[1]:n,r=this.originalPageX+Math.round((s-this.originalPageX)/i.grid[0])*i.grid[0],s=this.containment?r-this.offset.click.left>=this.containment[0]&&r-this.offset.click.left<=this.containment[2]?r:r-this.offset.click.left>=this.containment[0]?r-i.grid[0]:r+i.grid[0]:r)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i===this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r,i=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(r in this._storedCSS)if(this._storedCSS[r]==="auto"||this._storedCSS[r]==="static")this._storedCSS[r]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&i.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!n&&i.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(i.push(function(e){this._trigger("remove",e,this._uiHash())}),i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),i.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(r=this.containers.length-1;r>=0;r--)n||i.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over&&(i.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.0",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),!t.collapsible&&(t.active===!1||t.active==null)&&(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();if(t.active===!1&&t.collapsible===!0||!this.headers.length)t.active=!1,this.active=e();t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,r=this.options,i=r.heightStyle,s=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var n=e(this),r=n.attr("id"),i=n.next(),s=i.attr("id");r||(r=o+"-header-"+t,n.attr("id",r)),s||(s=o+"-panel-"+t,i.attr("id",s)),n.attr("aria-controls",s),i.attr("aria-labelledby",r)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(r.event),i==="fill"?(t=s.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):i==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,n),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.10.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this._appendTo()).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this._appendTo()),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.10.0",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.0",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=o(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function o(t){var n="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(n,"mouseout",function(){e(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(n,"mouseover",function(){e.datepicker._isDisabledDatepicker(i.inline?t.parent()[0]:i.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).addClass("ui-datepicker-next-hover"))})}function u(t,n){e.extend(t,n);for(var r in n)n[r]==null&&(t[r]=n[r]);return t}e.extend(e.ui,{datepicker:{version:"1.10.0"}});var n="datepicker",r=(new Date).getTime(),i;e.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return u(this._defaults,e||{}),this},_attachDatepicker:function(t,n){var r,i,s;r=t.nodeName.toLowerCase(),i=r==="div"||r==="span",t.id||(this.uuid+=1,t.id="dp"+this.uuid),s=this._newInst(e(t),i),s.settings=e.extend({},n||{}),r==="input"?this._connectDatepicker(t,s):i&&this._inlineDatepicker(t,s)},_newInst:function(t,n){var r=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:r,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:n?o(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,r){var i=e(t);r.append=e([]),r.trigger=e([]);if(i.hasClass(this.markerClassName))return;this._attachments(i,r),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(r),e.data(t,n,r),r.settings.disabled&&this._disableDatepicker(t)},_attachments:function(t,n){var r,i,s,o=this._get(n,"appendText"),u=this._get(n,"isRTL");n.append&&n.append.remove(),o&&(n.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[u?"before":"after"](n.append)),t.unbind("focus",this._showDatepicker),n.trigger&&n.trigger.remove(),r=this._get(n,"showOn"),(r==="focus"||r==="both")&&t.focus(this._showDatepicker);if(r==="button"||r==="both")i=this._get(n,"buttonText"),s=this._get(n,"buttonImage"),n.trigger=e(this._get(n,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:s,alt:i,title:i}):e("<button type='button'></button>").addClass(this._triggerClass).html(s?e("<img/>").attr({src:s,alt:i,title:i}):i)),t[u?"before":"after"](n.trigger),n.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1})},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,n,r,i,s=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){n=0,r=0;for(i=0;i<e.length;i++)e[i].length>n&&(n=e[i].length,r=i);return r},s.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),s.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())),e.input.attr("size",this._formatDate(e,s).length)}},_inlineDatepicker:function(t,r){var i=e(t);if(i.hasClass(this.markerClassName))return;i.addClass(this.markerClassName).append(r.dpDiv),e.data(t,n,r),this._setDate(r,this._getDefaultDate(r),!0),this._updateDatepicker(r),this._updateAlternate(r),r.settings.disabled&&this._disableDatepicker(t),r.dpDiv.css("display","block")},_dialogDatepicker:function(t,r,i,s,o){var a,f,l,c,h,p=this._dialogInst;return p||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],n,p)),u(p.settings,s||{}),r=r&&r.constructor===Date?this._formatDate(p,r):r,this._dialogInput.val(r),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(f=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[f/2-100+c,l/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],n,p),this},_destroyDatepicker:function(t){var r,i=e(t),s=e.data(t,n);if(!i.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase(),e.removeData(t,n),r==="input"?(s.append.remove(),s.trigger.remove(),i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r==="div"||r==="span")&&i.removeClass(this.markerClassName).empty()},_enableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase();if(r==="input")t.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r==="div"||r==="span")i=s.children("."+this._inlineClass),i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1);this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e})},_disableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase();if(r==="input")t.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r==="div"||r==="span")i=s.children("."+this._inlineClass),i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0);this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,n)}catch(r){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(n,r,i){var s,o,a,f,l=this._getInst(n);if(arguments.length===2&&typeof r=="string")return r==="defaults"?e.extend({},e.datepicker._defaults):l?r==="all"?e.extend({},l.settings):this._get(l,r):null;s=r||{},typeof r=="string"&&(s={},s[r]=i),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(n,!0),a=this._getMinMaxDate(l,"min"),f=this._getMinMaxDate(l,"max"),u(l.settings,s),a!==null&&s.dateFormat!==t&&s.minDate===t&&(l.settings.minDate=this._formatDate(l,a)),f!==null&&s.dateFormat!==t&&s.maxDate===t&&(l.settings.maxDate=this._formatDate(l,f)),"disabled"in s&&(s.disabled?this._disableDatepicker(n):this._enableDatepicker(n)),this._attachments(e(n),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l))},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(t){var n,r,i,s=e.datepicker._getInst(t.target),o=!0,u=s.dpDiv.is(".ui-datepicker-rtl");s._keyEvent=!0;if(e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return i=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",s.dpDiv),i[0]&&e.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,i[0]),n=e.datepicker._get(s,"onSelect"),n?(r=e.datepicker._formatDate(s),n.apply(s.input?s.input[0]:null,[r,s])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,u?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,u?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else t.keyCode===36&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var n,r,i=e.datepicker._getInst(t.target);if(e.datepicker._get(i,"constrainInput"))return n=e.datepicker._possibleChars(e.datepicker._get(i,"dateFormat")),r=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||r<" "||!n||n.indexOf(r)>-1},_doKeyUp:function(t){var n,r=e.datepicker._getInst(t.target);if(r.input.val()!==r.lastVal)try{n=e.datepicker.parseDate(e.datepicker._get(r,"dateFormat"),r.input?r.input.val():null,e.datepicker._getFormatConfig(r)),n&&(e.datepicker._setDateFromField(r),e.datepicker._updateAlternate(r),e.datepicker._updateDatepicker(r))}catch(i){}return!0},_showDatepicker:function(t){t=t.target||t,t.nodeName.toLowerCase()!=="input"&&(t=e("input",t.parentNode)[0]);if(e.datepicker._isDisabledDatepicker(t)||e.datepicker._lastInput===t)return;var n,r,i,s,o,a,f;n=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==n&&(e.datepicker._curInst.dpDiv.stop(!0,!0),n&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),r=e.datepicker._get(n,"beforeShow"),i=r?r.apply(t,[t,n]):{};if(i===!1)return;u(n.settings,i),n.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(n),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),s=!1,e(t).parents().each(function(){return s|=e(this).css("position")==="fixed",!s}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(n),o=e.datepicker._checkOffset(n,o,s),n.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":s?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),n.inline||(a=e.datepicker._get(n,"showAnim"),f=e.datepicker._get(n,"duration"),n.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[a]?n.dpDiv.show(a,e.datepicker._get(n,"showOptions"),f):n.dpDiv[a||"show"](a?f:null),n.input.is(":visible")&&!n.input.is(":disabled")&&n.input.focus(),e.datepicker._curInst=n)},_updateDatepicker:function(t){this.maxRows=4,i=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var n,r=this._getNumberOfMonths(t),s=r[1],o=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",o*s+"em"),t.dpDiv[(r[0]!==1||r[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&t.input[0]!==document.activeElement&&t.input.focus(),t.yearshtml&&(n=t.yearshtml,setTimeout(function(){n===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),n=t.yearshtml=null},0))},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(t,n,r){var i=t.dpDiv.outerWidth(),s=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,u=t.input?t.input.outerHeight():0,a=document.documentElement.clientWidth+(r?0:e(document).scrollLeft()),f=document.documentElement.clientHeight+(r?0:e(document).scrollTop());return n.left-=this._get(t,"isRTL")?i-o:0,n.left-=r&&n.left===t.input.offset().left?e(document).scrollLeft():0,n.top-=r&&n.top===t.input.offset().top+u?e(document).scrollTop():0,n.left-=Math.min(n.left,n.left+i>a&&a>i?Math.abs(n.left+i-a):0),n.top-=Math.min(n.top,n.top+s>f&&f>s?Math.abs(s+u):0),n},_findPos:function(t){var n,r=this._getInst(t),i=this._get(r,"isRTL");while(t&&(t.type==="hidden"||t.nodeType!==1||e.expr.filters.hidden(t)))t=t[i?"previousSibling":"nextSibling"];return n=e(t).offset(),[n.left,n.top]},_hideDatepicker:function(t){var r,i,s,o,u=this._curInst;if(!u||t&&u!==e.data(t,n))return;this._datepickerShowing&&(r=this._get(u,"showAnim"),i=this._get(u,"duration"),s=function(){e.datepicker._tidyDialog(u)},e.effects&&(e.effects.effect[r]||e.effects[r])?u.dpDiv.hide(r,e.datepicker._get(u,"showOptions"),i,s):u.dpDiv[r==="slideDown"?"slideUp":r==="fadeIn"?"fadeOut":"hide"](r?i:null,s),r||s(),this._datepickerShowing=!1,o=this._get(u,"onClose"),o&&o.apply(u.input?u.input[0]:null,[u.input?u.input.val():"",u]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(!e.datepicker._curInst)return;var n=e(t.target),r=e.datepicker._getInst(n[0]);(n[0].id!==e.datepicker._mainDivId&&n.parents("#"+e.datepicker._mainDivId).length===0&&!n.hasClass(e.datepicker.markerClassName)&&!n.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||n.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==r)&&e.datepicker._hideDatepicker()},_adjustDate:function(t,n,r){var i=e(t),s=this._getInst(i[0]);if(this._isDisabledDatepicker(i[0]))return;this._adjustInstDate(s,n+(r==="M"?this._get(s,"showCurrentAtPos"):0),r),this._updateDatepicker(s)},_gotoToday:function(t){var n,r=e(t),i=this._getInst(r[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(n=new Date,i.selectedDay=n.getDate(),i.drawMonth=i.selectedMonth=n.getMonth(),i.drawYear=i.selectedYear=n.getFullYear()),this._notifyChange(i),this._adjustDate(r)},_selectMonthYear:function(t,n,r){var i=e(t),s=this._getInst(i[0]);s["selected"+(r==="M"?"Month":"Year")]=s["draw"+(r==="M"?"Month":"Year")]=parseInt(n.options[n.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(i)},_selectDay:function(t,n,r,i){var s,o=e(t);if(e(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0]))return;s=this._getInst(o[0]),s.selectedDay=s.currentDay=e("a",i).html(),s.selectedMonth=s.currentMonth=n,s.selectedYear=s.currentYear=r,this._selectDate(t,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(t){var n=e(t);this._selectDate(n,"")},_selectDate:function(t,n){var r,i=e(t),s=this._getInst(i[0]);n=n!=null?n:this._formatDate(s),s.input&&s.input.val(n),this._updateAlternate(s),r=this._get(s,"onSelect"),r?r.apply(s.input?s.input[0]:null,[n,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],typeof s.input[0]!="object"&&s.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var n,r,i,s=this._get(t,"altField");s&&(n=this._get(t,"altFormat")||this._get(t,"dateFormat"),r=this._getDate(t),i=this.formatDate(n,r,this._getFormatConfig(t)),e(s).each(function(){e(this).val(i)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t,n=new Date(e.getTime());return n.setDate(n.getDate()+4-(n.getDay()||7)),t=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((t-n)/864e5)/7)+1},parseDate:function(t,n,r){if(t==null||n==null)throw"Invalid arguments";n=typeof n=="object"?n.toString():n+"";if(n==="")return null;var i,s,o,u=0,a=(r?r.shortYearCutoff:null)||this._defaults.shortYearCutoff,f=typeof a!="string"?a:(new Date).getFullYear()%100+parseInt(a,10),l=(r?r.dayNamesShort:null)||this._defaults.dayNamesShort,c=(r?r.dayNames:null)||this._defaults.dayNames,h=(r?r.monthNamesShort:null)||this._defaults.monthNamesShort,p=(r?r.monthNames:null)||this._defaults.monthNames,d=-1,v=-1,m=-1,g=-1,y=!1,b,w=function(e){var n=i+1<t.length&&t.charAt(i+1)===e;return n&&i++,n},E=function(e){var t=w(e),r=e==="@"?14:e==="!"?20:e==="y"&&t?4:e==="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=n.substring(u).match(i);if(!s)throw"Missing number at position "+u;return u+=s[0].length,parseInt(s[0],10)},S=function(t,r,i){var s=-1,o=e.map(w(t)?i:r,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});e.each(o,function(e,t){var r=t[1];if(n.substr(u,r.length).toLowerCase()===r.toLowerCase())return s=t[0],u+=r.length,!1});if(s!==-1)return s+1;throw"Unknown name at position "+u},x=function(){if(n.charAt(u)!==t.charAt(i))throw"Unexpected literal at position "+u;u++};for(i=0;i<t.length;i++)if(y)t.charAt(i)==="'"&&!w("'")?y=!1:x();else switch(t.charAt(i)){case"d":m=E("d");break;case"D":S("D",l,c);break;case"o":g=E("o");break;case"m":v=E("m");break;case"M":v=S("M",h,p);break;case"y":d=E("y");break;case"@":b=new Date(E("@")),d=b.getFullYear(),v=b.getMonth()+1,m=b.getDate();break;case"!":b=new Date((E("!")-this._ticksTo1970)/1e4),d=b.getFullYear(),v=b.getMonth()+1,m=b.getDate();break;case"'":w("'")?x():y=!0;break;default:x()}if(u<n.length){o=n.substr(u);if(!/^\s+/.test(o))throw"Extra/unparsed characters found in date: "+o}d===-1?d=(new Date).getFullYear():d<100&&(d+=(new Date).getFullYear()-(new Date).getFullYear()%100+(d<=f?0:-100));if(g>-1){v=1,m=g;do{s=this._getDaysInMonth(d,v-1);if(m<=s)break;v++,m-=s}while(!0)}b=this._daylightSavingAdjust(new Date(d,v-1,m));if(b.getFullYear()!==d||b.getMonth()+1!==v||b.getDate()!==m)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r,i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=function(t){var n=r+1<e.length&&e.charAt(r+1)===t;return n&&r++,n},f=function(e,t,n){var r=""+t;if(a(e))while(r.length<n)r="0"+r;return r},l=function(e,t,n,r){return a(e)?r[t]:n[t]},c="",h=!1;if(t)for(r=0;r<e.length;r++)if(h)e.charAt(r)==="'"&&!a("'")?h=!1:c+=e.charAt(r);else switch(e.charAt(r)){case"d":c+=f("d",t.getDate(),2);break;case"D":c+=l("D",t.getDay(),i,s);break;case"o":c+=f("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":c+=f("m",t.getMonth()+1,2);break;case"M":c+=l("M",t.getMonth(),o,u);break;case"y":c+=a("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":c+=t.getTime();break;case"!":c+=t.getTime()*1e4+this._ticksTo1970;break;case"'":a("'")?c+="'":h=!0;break;default:c+=e.charAt(r)}return c},_possibleChars:function(e){var t,n="",r=!1,i=function(n){var r=t+1<e.length&&e.charAt(t+1)===n;return r&&t++,r};for(t=0;t<e.length;t++)if(r)e.charAt(t)==="'"&&!i("'")?r=!1:n+=e.charAt(t);else switch(e.charAt(t)){case"d":case"m":case"y":case"@":n+="0123456789";break;case"D":case"M":return null;case"'":i("'")?n+="'":r=!0;break;default:n+=e.charAt(t)}return n},_get:function(e,n){return e.settings[n]!==t?e.settings[n]:this._defaults[n]},_setDateFromField:function(e,t){if(e.input.val()===e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i=this._getDefaultDate(e),s=i,o=this._getFormatConfig(e);try{s=this.parseDate(n,r,o)||i}catch(u){r=t?"":r}e.selectedDay=s.getDate(),e.drawMonth=e.selectedMonth=s.getMonth(),e.drawYear=e.selectedYear=s.getFullYear(),e.currentDay=r?s.getDate():0,e.currentMonth=r?s.getMonth():0,e.currentYear=r?s.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,n,r){var i=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},s=function(n){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),n,e.datepicker._getFormatConfig(t))}catch(r){}var i=(n.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,s=i.getFullYear(),o=i.getMonth(),u=i.getDate(),a=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,f=a.exec(n);while(f){switch(f[2]||"d"){case"d":case"D":u+=parseInt(f[1],10);break;case"w":case"W":u+=parseInt(f[1],10)*7;break;case"m":case"M":o+=parseInt(f[1],10),u=Math.min(u,e.datepicker._getDaysInMonth(s,o));break;case"y":case"Y":s+=parseInt(f[1],10),u=Math.min(u,e.datepicker._getDaysInMonth(s,o))}f=a.exec(n)}return new Date(s,o,u)},o=n==null||n===""?r:typeof n=="string"?s(n):typeof n=="number"?isNaN(n)?r:i(n):new Date(n.getTime());return o=o&&o.toString()==="Invalid Date"?r:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!==e.selectedMonth||s!==e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()===""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var n=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){window["DP_jQuery_"+r].datepicker._adjustDate(i,-n,"M")},next:function(){window["DP_jQuery_"+r].datepicker._adjustDate(i,+n,"M")},hide:function(){window["DP_jQuery_"+r].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+r].datepicker._gotoToday(i)},selectDay:function(){return window["DP_jQuery_"+r].datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+r].datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+r].datepicker._selectMonthYear(i,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q=new Date,R=this._daylightSavingAdjust(new Date(q.getFullYear(),q.getMonth(),q.getDate())),U=this._get(e,"isRTL"),z=this._get(e,"showButtonPanel"),W=this._get(e,"hideIfNoPrevNext"),X=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),$=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),K=V[0]!==1||V[1]!==1,Q=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(e,"min"),Y=this._getMinMaxDate(e,"max"),Z=e.drawMonth-$,et=e.drawYear;Z<0&&(Z+=12,et--);if(Y){t=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth()-V[0]*V[1]+1,Y.getDate())),t=G&&t<G?G:t;while(this._daylightSavingAdjust(new Date(et,Z,1))>t)Z--,Z<0&&(Z=11,et--)}e.drawMonth=Z,e.drawYear=et,n=this._get(e,"prevText"),n=X?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):n,r=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>":W?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>",i=this._get(e,"nextText"),i=X?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>":W?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>",o=this._get(e,"currentText"),u=this._get(e,"gotoCurrent")&&e.currentDay?Q:R,o=X?this.formatDate(o,u,this._getFormatConfig(e)):o,a=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",f=z?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(U?a:"")+(this._isInRange(e,u)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(U?"":a)+"</div>":"",l=parseInt(this._get(e,"firstDay"),10),l=isNaN(l)?0:l,c=this._get(e,"showWeek"),h=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),d=this._get(e,"monthNames"),v=this._get(e,"monthNamesShort"),m=this._get(e,"beforeShowDay"),g=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),w="",E;for(S=0;S<V[0];S++){x="",this.maxRows=4;for(T=0;T<V[1];T++){N=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),C=" ui-corner-all",k="";if(K){k+="<div class='ui-datepicker-group";if(V[1]>1)switch(T){case 0:k+=" ui-datepicker-group-first",C=" ui-corner-"+(U?"right":"left");break;case V[1]-1:k+=" ui-datepicker-group-last",C=" ui-corner-"+(U?"left":"right");break;default:k+=" ui-datepicker-group-middle",C=""}k+="'>"}k+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&S===0?U?s:r:"")+(/all|right/.test(C)&&S===0?U?r:s:"")+this._generateMonthYearHeader(e,Z,et,G,Y,S>0||T>0,d,v)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",L=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"";for(E=0;E<7;E++)A=(E+l)%7,L+="<th"+((E+l+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+h[A]+"'>"+p[A]+"</span></th>";k+=L+"</tr></thead><tbody>",O=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,O)),M=(this._getFirstDayOfMonth(et,Z)-l+7)%7,_=Math.ceil((M+O)/7),D=K?this.maxRows>_?this.maxRows:_:_,this.maxRows=D,P=this._daylightSavingAdjust(new Date(et,Z,1-M));for(H=0;H<D;H++){k+="<tr>",B=c?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(P)+"</td>":"";for(E=0;E<7;E++)j=m?m.apply(e.input?e.input[0]:null,[P]):[!0,""],F=P.getMonth()!==Z,I=F&&!y||!j[0]||G&&P<G||Y&&P>Y,B+="<td class='"+((E+l+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(P.getTime()===N.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===P.getTime()&&b.getTime()===N.getTime()?" "+this._dayOverClass:"")+(I?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!g?"":" "+j[1]+(P.getTime()===Q.getTime()?" "+this._currentClass:"")+(P.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+((!F||g)&&j[2]?" title='"+j[2]+"'":"")+(I?"":" data-handler='selectDay' data-event='click' data-month='"+P.getMonth()+"' data-year='"+P.getFullYear()+"'")+">"+(F&&!g?"&#xa0;":I?"<span class='ui-state-default'>"+P.getDate()+"</span>":"<a class='ui-state-default"+(P.getTime()===R.getTime()?" ui-state-highlight":"")+(P.getTime()===Q.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+P.getDate()+"</a>")+"</td>",P.setDate(P.getDate()+1),P=this._daylightSavingAdjust(P);k+=B+"</tr>"}Z++,Z>11&&(Z=0,et++),k+="</tbody></table>"+(K?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=k}w+=x}return w+=f,e._keyEvent=!1,w},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a,f,l,c,h,p,d,v,m=this._get(e,"changeMonth"),g=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",w="";if(s||!m)w+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{a=r&&r.getFullYear()===n,f=i&&i.getFullYear()===n,w+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(l=0;l<12;l++)(!a||l>=r.getMonth())&&(!f||l<=i.getMonth())&&(w+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+u[l]+"</option>");w+="</select>"}y||(b+=w+(s||!m||!g?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!g)b+="<span class='ui-datepicker-year'>"+n+"</span>";else{c=this._get(e,"yearRange").split(":"),h=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?n+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10);return isNaN(t)?h:t},d=p(c[0]),v=Math.max(d,p(c[1]||"")),d=r?Math.max(d,r.getFullYear()):d,v=i?Math.min(v,i.getFullYear()):v,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;d<=v;d++)e.yearshtml+="<option value='"+d+"'"+(d===n?" selected='selected'":"")+">"+d+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}}return b+=this._get(e,"yearSuffix"),y&&(b+=(s||!m||!g?"&#xa0;":"")+w),b+="</div>",b},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n==="Y"?t:0),i=e.drawMonth+(n==="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n==="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n==="M"||n==="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return r&&i>r?r:i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n,r,i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),o=null,u=null,a=this._get(e,"yearRange");return a&&(n=a.split(":"),r=(new Date).getFullYear(),o=parseInt(n[0],10)+r,u=parseInt(n[1],10)+r),(!i||t.getTime()>=i.getTime())&&(!s||t.getTime()<=s.getTime())&&(!o||t.getFullYear()>=o)&&(!u||t.getFullYear()<=u)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),e("#"+e.datepicker._mainDivId).length===0&&e("body").append(e.datepicker.dpDiv);var n=Array.prototype.slice.call(arguments,1);return typeof t!="string"||t!=="isDisabled"&&t!=="getDate"&&t!=="widget"?t==="option"&&arguments.length===2&&typeof arguments[1]=="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n)):this.each(function(){typeof t=="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(n)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n))},e.datepicker=new s,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.0",window["DP_jQuery_"+r]=e})(jQuery);(function(e,t){var n={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},r={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.0",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||e(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var n=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return n&&!t&&this._trigger("focus",e),n},open:function(){if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show),this._focusTabbable(),this._isOpen=!0,this._trigger("open"),this._trigger("focus")},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB)return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(i.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){n.height=e(this).height(),n.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,o={};e.each(t,function(e,t){i._setOption(e,t),e in n&&(s=!0),e in r&&(o[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_createOverlay:function(){if(!this.options.modal)return;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this._on(this.document,{focusin:function(t){e(t.target).closest(".ui-dialog").length||(t.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())}})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this.document[0].body),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal)return;e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this._off(this.document,"focusin"),this.overlay.remove()}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t=this.options.position,n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()}})})(jQuery);(function(e,t){e.widget("ui.menu",{version:"1.10.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var n=e(t.target).closest(".ui-menu-item");!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(t),n.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-—–\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){e==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.10.0",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){if(e===t)return this.options.value;this.options.value=this._constrainedValue(e),this._refreshValue()},_constrainedValue:function(e){return e===t&&(e=this.options.value),this.indeterminate=e===!1,typeof e!="number"&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){e==="max"&&(t=Math.max(this.min,t)),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,n=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(n.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.0",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this.range=e([]),r.range&&(r.range===!0&&(r.values?r.values.length&&r.values.length!==2?r.values=[r.values[0],r.values[0]]:e.isArray(r.values)&&(r.values=r.values.slice(0)):r.values=[this._valueMin(),this._valueMin()]),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(r.range==="min"||r.range==="max"?" ui-slider-range-"+r.range:""))),n=r.values&&r.values.length||1;for(t=i.length;t<n;t++)o.push(s);this.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){r.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){r.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._setOption("disabled",r.disabled),this._on(this.handles,this._handleEvents),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));if(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min))i=n,s=e(this),o=t}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0)):this.handles.prop("disabled",!1);break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))},_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);(function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.widget("ui.spinner",{version:"1.10.0",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},n=this.element;return e.each(["min","max","step"],function(e,r){var i=n.attr(r);i!==undefined&&i.length&&(t[r]=i)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e)},mousewheel:function(e,t){if(!t)return;if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()},"mousedown .ui-spinner-button":function(t){function r(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,r.call(this)});if(this._start(t)===!1)return;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(!e(t.currentTarget).hasClass("ui-state-active"))return;if(this._start(t)===!1)return!1;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(e.height()*.5)&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var n=this.options,r=e.ui.keyCode;switch(t.keyCode){case r.UP:return this._repeat(null,1,t),!0;case r.DOWN:return this._repeat(null,-1,t),!0;case r.PAGE_UP:return this._repeat(null,n.page,t),!0;case r.PAGE_DOWN:return this._repeat(null,-n.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return!this.spinning&&this._trigger("start",e)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(e,t,n){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,n)},e),this._spin(t*this.options.step,n)},_spin:function(e,t){var n=this.value()||0;this.counter||(this.counter=1),n=this._adjustValue(n+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",t,{value:n})!==!1)this._value(n),this.counter++},_increment:function(t){var n=this.options.incremental;return n?e.isFunction(n)?n(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return this.options.min!==null&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=e.toString(),n=t.indexOf(".");return n===-1?0:t.length-n-1},_adjustValue:function(e){var t,n,r=this.options;return t=r.min!==null?r.min:0,n=e-t,n=Math.round(n/r.step)*r.step,e=t+n,e=parseFloat(e.toFixed(this._precision())),r.max!==null&&e>r.max?r.max:r.min!==null&&e<r.min?r.min:e},_stop:function(e){if(!this.spinning)return;clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e)},_setOption:function(e,t){if(e==="culture"||e==="numberFormat"){var n=this._parse(this.element.val());this.options[e]=t,this.element.val(this._format(n));return}(e==="max"||e==="min"||e==="step")&&typeof t=="string"&&(t=this._parse(t)),e==="icons"&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),e==="disabled"&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse:function(e){return typeof e=="string"&&e!==""&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),e===""||isNaN(e)?null:e},_format:function(e){return e===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var n;e!==""&&(n=this._parse(e),n!==null&&(t||(n=this._adjustValue(n)),e=this._format(n))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,e)},widget:function(){return this.uiSpinner}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.0",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),n.active=this._initialActive(),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(n.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){r&&this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r)return t=n,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(t===null||t===-1)t=this.tabs.length?0:!1}return t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=n?!1:0)),!n&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();t==="fill"?(n=r.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})})(jQuery);(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")}var t=0;e.widget("ui.tooltip",{version:"1.10.0",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)})},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=this.delayedShow=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing)return;clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[r]=n,i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})})(jQuery);jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version:"1.10.0",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden")?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){var n=/up|down|vertical/,r=/up|left|vertical|horizontal/;e.effects.effect.blind=function(t,i){var s=e(this),o=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),a=t.direction||"up",f=n.test(a),l=f?"height":"width",c=f?"top":"left",h=r.test(a),p={},d=u==="show",v,m,g;s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),o):e.effects.save(s,o),s.show(),v=e.effects.createWrapper(s).css({overflow:"hidden"}),m=v[l](),g=parseFloat(v.css(c))||0,p[l]=d?m:0,h||(s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),p[c]=d?g:m+g),d&&(v.css(l,0),h||v.css(c,g+m)),v.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){u==="hide"&&s.hide(),e.effects.restore(s,o),e.effects.removeWrapper(s),i()}})}})(jQuery);(function(e,t){e.effects.effect.bounce=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=s==="hide",u=s==="show",a=t.direction||"up",f=t.distance,l=t.times||5,c=l*2+(u||o?1:0),h=t.duration/c,p=t.easing,d=a==="up"||a==="down"?"top":"left",v=a==="up"||a==="left",m,g,y,b=r.queue(),w=b.length;(u||o)&&i.push("opacity"),e.effects.save(r,i),r.show(),e.effects.createWrapper(r),f||(f=r[d==="top"?"outerHeight":"outerWidth"]()/3),u&&(y={opacity:1},y[d]=0,r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)),o&&(f/=Math.pow(2,l-1)),y={},y[d]=0;for(m=0;m<l;m++)g={},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p).animate(y,h,p),f=o?f*2:f/2;o&&(g={opacity:0},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p)),r.queue(function(){o&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,c+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(a,f==="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}})(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.fold=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=s==="hide",a=t.size||15,f=/([0-9]+)%/.exec(a),l=!!t.horizFirst,c=o!==l,h=c?["width","height"]:["height","width"],p=t.duration/2,d,v,m={},g={};e.effects.save(r,i),r.show(),d=e.effects.createWrapper(r).css({overflow:"hidden"}),v=c?[d.width(),d.height()]:[d.height(),d.width()],f&&(a=parseInt(f[1],10)/100*v[u?0:1]),o&&d.css(l?{height:0,width:a}:{height:a,width:0}),m[h[0]]=o?v[0]:a,g[h[1]]=o?v[1]:0,d.animate(m,p,t.easing).animate(g,p,t.easing,function(){u&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}})(jQuery);(function(e,t){e.effects.effect.pulsate=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"show"),s=i==="show",o=i==="hide",u=s||i==="hide",a=(t.times||5)*2+(u?1:0),f=t.duration/a,l=0,c=r.queue(),h=c.length,p;if(s||!r.is(":visible"))r.css("opacity",0).show(),l=1;for(p=1;p<a;p++)r.animate({opacity:l},f,t.easing),l=1-l;r.animate({opacity:l},f,t.easing),r.queue(function(){o&&r.hide(),n()}),h>1&&c.splice.apply(c,[1,0].concat(c.splice(h,a+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}}),r.effect(t)},e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(!0,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};i.effect="size",i.queue=!1,i.complete=n,s!=="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s==="show"&&(i.from.opacity=0,i.to.opacity=1),s==="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)},e.effects.effect.size=function(t,n){var r,i,s,o=e(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],l=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),d=t.restore||p!=="effect",v=t.scale||"both",m=t.origin||["middle","center"],g=o.css("position"),y=d?u:a,b={height:0,width:0,outerHeight:0,outerWidth:0};p==="show"&&o.show(),r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},t.mode==="toggle"&&p==="show"?(o.from=t.to||b,o.to=t.from||r):(o.from=t.from||(p==="show"?b:r),o.to=t.to||(p==="hide"?b:r)),s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both")s.from.y!==s.to.y&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,s.from.y,o.from),o.to=e.effects.setTransition(o,c,s.to.y,o.to)),s.from.x!==s.to.x&&(y=y.concat(h),o.from=e.effects.setTransition(o,h,s.from.x,o.from),o.to=e.effects.setTransition(o,h,s.to.x,o.to));(v==="content"||v==="both")&&s.from.y!==s.to.y&&(y=y.concat(l).concat(f),o.from=e.effects.setTransition(o,l,s.from.y,o.from),o.to=e.effects.setTransition(o,l,s.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(i=e.effects.getBaseline(m,r),o.from.top=(r.outerHeight-o.outerHeight())*i.y,o.from.left=(r.outerWidth-o.outerWidth())*i.x,o.to.top=(r.outerHeight-o.to.outerHeight)*i.y,o.to.left=(r.outerWidth-o.to.outerWidth)*i.x),o.css(o.from);if(v==="content"||v==="both")c=c.concat(["marginTop","marginBottom"]).concat(l),h=h.concat(["marginLeft","marginRight"]),f=u.concat(c).concat(h),o.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};d&&e.effects.save(n,f),n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x},n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x},s.from.y!==s.to.y&&(n.from=e.effects.setTransition(n,c,s.from.y,n.from),n.to=e.effects.setTransition(n,c,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=e.effects.setTransition(n,h,s.from.x,n.from),n.to=e.effects.setTransition(n,h,s.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){d&&e.effects.restore(n,f)})});o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o.to.opacity===0&&o.css("opacity",o.from.opacity),p==="hide"&&o.hide(),e.effects.restore(o,y),d||(g==="static"?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,n){var r=parseInt(n,10),i=e?o.to.left:o.to.top;return n==="auto"?i+"px":r+i+"px"})})),e.effects.removeWrapper(o),n()}})}})(jQuery);(function(e,t){e.effects.effect.shake=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",u=t.distance||20,a=t.times||3,f=a*2+1,l=Math.round(t.duration/f),c=o==="up"||o==="down"?"top":"left",h=o==="up"||o==="left",p={},d={},v={},m,g=r.queue(),y=g.length;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),p[c]=(h?"-=":"+=")+u,d[c]=(h?"+=":"-=")+u*2,v[c]=(h?"-=":"+=")+u*2,r.animate(p,l,t.easing);for(m=1;m<a;m++)r.animate(d,l,t.easing).animate(v,l,t.easing);r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),y>1&&g.splice.apply(g,[1,0].concat(g.splice(y,f+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.transfer=function(t,n){var r=e(this),i=e(t.to),s=i.css("position")==="fixed",o=e("body"),u=s?o.scrollTop():0,a=s?o.scrollLeft():0,f=i.offset(),l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()},c=r.offset(),h=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){h.remove(),n()})}})(jQuery);
define("jquery.ui", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.jQuery.ui;
    };
}(this)));

/************************
jquery-timepicker
http://jonthornton.github.com/jquery-timepicker/

requires jQuery 1.7+
************************/


(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('jquery.timepicker',['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
	var _baseDate = _generateBaseDate();
	var _ONE_DAY = 86400;
	var _closeEvent = 'ontouchstart' in document ? 'touchstart' : 'mousedown';
	var _defaults =	{
		className: null,
		minTime: null,
		maxTime: null,
		durationTime: null,
		step: 30,
		showDuration: false,
		timeFormat: 'g:ia',
		scrollDefaultNow: false,
		scrollDefaultTime: false,
		selectOnBlur: false,
		forceRoundTime: false,
		appendTo: 'body'
	};
	var _lang = {
		decimal: '.',
		mins: 'mins',
		hr: 'hr',
		hrs: 'hrs'
	};
	var globalInit = false;

	var methods =
	{
		init: function(options)
		{
			return this.each(function()
			{
				var self = $(this);

				// convert dropdowns to text input
				if (self[0].tagName == 'SELECT') {
					var input = $('<input />');
					var attrs = { 'type': 'text', 'value': self.val() };
					var raw_attrs = self[0].attributes;

					for (var i=0; i < raw_attrs.length; i++) {
						attrs[raw_attrs[i].nodeName] = raw_attrs[i].nodeValue;
					}

					input.attr(attrs);
					self.replaceWith(input);
					self = input;
				}

				var settings = $.extend({}, _defaults);

				if (options) {
					settings = $.extend(settings, options);
				}

				if (settings.minTime) {
					settings.minTime = _time2int(settings.minTime);
				}

				if (settings.maxTime) {
					settings.maxTime = _time2int(settings.maxTime);
				}

				if (settings.durationTime) {
					settings.durationTime = _time2int(settings.durationTime);
				}

				if (settings.lang) {
					_lang = $.extend(_lang, settings.lang);
				}

				self.data('timepicker-settings', settings);
				self.attr('autocomplete', 'off');
				self.on('click.timepicker focus.timepicker', methods.show);
				self.on('blur.timepicker', _formatValue);
				self.on('keydown.timepicker', _keyhandler);
				self.addClass('ui-timepicker-input');

				_formatValue.call(self.get(0));

				if (!globalInit) {
					// close the dropdown when container loses focus
					$('body').on(_closeEvent, function(e) {
						var target = $(e.target);
						var input = target.closest('.ui-timepicker-input');
						if (input.length === 0 && target.closest('.ui-timepicker-list').length === 0) {
							methods.hide();
						}
					});
					globalInit = true;
				}
			});
		},

		show: function(e)
		{
			var self = $(this);

			if ('ontouchstart' in document) {
				// block the keyboard on mobile devices
				self.blur();
			}

			var list = self.data('timepicker-list');

			// check if input is readonly
			if (self.attr('readonly')) {
				return;
			}

			// check if list needs to be rendered
			if (!list || list.length === 0) {
				_render(self);
				list = self.data('timepicker-list');
			}

			// check if a flag was set to close this picker
			if (self.hasClass('ui-timepicker-hideme')) {
				self.removeClass('ui-timepicker-hideme');
				list.hide();
				return;
			}

			if (list.is(':visible')) {
				return;
			}

			// make sure other pickers are hidden
			methods.hide();

			if ((self.offset().top + self.outerHeight(true) + list.outerHeight()) > $(window).height() + $(window).scrollTop()) {
				// position the dropdown on top
				list.css({ 'left':(self.offset().left), 'top': self.offset().top - list.outerHeight() });
			} else {
				// put it under the input
				list.css({ 'left':(self.offset().left), 'top': self.offset().top + self.outerHeight() });
			}

			list.show();

			var settings = self.data('timepicker-settings');
			// position scrolling
			var selected = list.find('.ui-timepicker-selected');

			if (!selected.length) {
                if (self.val()) {
                    selected = _findRow(self, list, _time2int(self.val()));
                } else if (settings.scrollDefaultNow) {
                    selected = _findRow(self, list, _time2int(new Date()));
                } else if (settings.scrollDefaultTime !== false) {
                    selected = _findRow(self, list, _time2int(settings.scrollDefaultTime));
                }
			}

			if (selected && selected.length) {
				var topOffset = list.scrollTop() + selected.position().top - selected.outerHeight();
				list.scrollTop(topOffset);
			} else {
				list.scrollTop(0);
			}

			self.trigger('showTimepicker');
		},

		hide: function(e)
		{
			$('.ui-timepicker-list:visible').each(function() {
				var list = $(this);
				var self = list.data('timepicker-input');
				var settings = self.data('timepicker-settings');

				if (settings && settings.selectOnBlur) {
					_selectValue(self);
				}

				list.hide();
				self.trigger('hideTimepicker');
			});
		},

		option: function(key, value)
		{
			var self = $(this);
			var settings = self.data('timepicker-settings');
			var list = self.data('timepicker-list');

			if (typeof key == 'object') {
				settings = $.extend(settings, key);

			} else if (typeof key == 'string' && typeof value != 'undefined') {
				settings[key] = value;

			} else if (typeof key == 'string') {
				return settings[key];
			}

			if (settings.minTime) {
				settings.minTime = _time2int(settings.minTime);
			}

			if (settings.maxTime) {
				settings.maxTime = _time2int(settings.maxTime);
			}

			if (settings.durationTime) {
				settings.durationTime = _time2int(settings.durationTime);
			}

			self.data('timepicker-settings', settings);

			if (list) {
				list.remove();
				self.data('timepicker-list', false);
			}

		},

		getSecondsFromMidnight: function()
		{
			return _time2int($(this).val());
		},

		getTime: function()
		{
			return new Date(_baseDate.valueOf() + (_time2int($(this).val())*1000));
		},

		setTime: function(value)
		{
			var self = $(this);
			var prettyTime = _int2time(_time2int(value), self.data('timepicker-settings').timeFormat);
			self.val(prettyTime);
		},

		remove: function()
		{
			var self = $(this);

			// check if this element is a timepicker
			if (!self.hasClass('ui-timepicker-input')) {
				return;
			}

			self.removeAttr('autocomplete', 'off');
			self.removeClass('ui-timepicker-input');
			self.removeData('timepicker-settings');
			self.off('.timepicker');

			// timepicker-list won't be present unless the user has interacted with this timepicker
			if (self.data('timepicker-list')) {
				self.data('timepicker-list').remove();
			}

			self.removeData('timepicker-list');
		}
	};

	// private methods

	function _render(self)
	{
		var settings = self.data('timepicker-settings');
		var list = self.data('timepicker-list');

		if (list && list.length) {
			list.remove();
			self.data('timepicker-list', false);
		}

		list = $('<ul />');
		list.attr('tabindex', -1);
		list.addClass('ui-timepicker-list');
		if (settings.className) {
			list.addClass(settings.className);
		}

		list.css({'display':'none', 'position': 'absolute' });

		if ((settings.minTime !== null || settings.durationTime !== null) && settings.showDuration) {
			list.addClass('ui-timepicker-with-duration');
		}

		var durStart = (settings.durationTime !== null) ? settings.durationTime : settings.minTime;
		var start = (settings.minTime !== null) ? settings.minTime : 0;
		var end = (settings.maxTime !== null) ? settings.maxTime : (start + _ONE_DAY - 1);

		if (end <= start) {
			// make sure the end time is greater than start time, otherwise there will be no list to show
			end += _ONE_DAY;
		}
		for (var i=start; i <= end; i += settings.step*60) {
			var timeInt = i;
			var row = $('<li />');
			row.data('time', timeInt);
			row.text(_int2time(timeInt, settings.timeFormat));

			if ((settings.minTime !== null || settings.durationTime !== null) && settings.showDuration) {
				var duration = $('<span />');
				duration.addClass('ui-timepicker-duration');
				duration.text(' ('+_int2duration(i - durStart)+')');
				row.append(duration);
			}

			list.append(row);
		}

		list.data('timepicker-input', self);
		self.data('timepicker-list', list);

		var appendTo = settings.appendTo;
		if (typeof appendTo === 'string') {
			appendTo = $(appendTo);
		} else if (typeof appendTo === 'function') {
			appendTo = appendTo(self);
		}
		appendTo.append(list);
		_setSelected(self, list);

		list.on('click', 'li', function(e) {
			self.addClass('ui-timepicker-hideme');
			self[0].focus();

			// make sure only the clicked row is selected
			list.find('li').removeClass('ui-timepicker-selected');
			$(this).addClass('ui-timepicker-selected');

			_selectValue(self);
			list.hide();
		});
	}

	function _generateBaseDate()
	{
		var _baseDate = new Date();
		var _currentTimezoneOffset = _baseDate.getTimezoneOffset()*60000;
		_baseDate.setHours(0); _baseDate.setMinutes(0); _baseDate.setSeconds(0);
		var _baseDateTimezoneOffset = _baseDate.getTimezoneOffset()*60000;

		return new Date(_baseDate.valueOf() - _baseDateTimezoneOffset + _currentTimezoneOffset);
	}

	function _findRow(self, list, value)
	{
		if (!value && value !== 0) {
			return false;
		}

		var settings = self.data('timepicker-settings');
		var out = false;
		var halfStep = settings.step*30;

		// loop through the menu items
		list.find('li').each(function(i, obj) {
			var jObj = $(obj);

			var offset = jObj.data('time') - value;

			// check if the value is less than half a step from each row
			if (Math.abs(offset) < halfStep || offset == halfStep) {
				out = jObj;
				return false;
			}
		});

		return out;
	}

	function _setSelected(self, list)
	{
		var timeValue = _time2int(self.val());

		var selected = _findRow(self, list, timeValue);
		if (selected) selected.addClass('ui-timepicker-selected');
	}


	function _formatValue()
	{
		if (this.value === '') {
			return;
		}

		var self = $(this);
		var seconds = _time2int(this.value);

		if (seconds === null) {
			self.trigger('timeFormatError');
			return;
		}

		var settings = self.data('timepicker-settings');

		if (settings.forceRoundTime) {
			var offset = seconds % (settings.step*60); // step is in minutes

			if (offset >= settings.step*30) {
				// if offset is larger than a half step, round up
				seconds += (settings.step*60) - offset;
			} else {
				// round down
				seconds -= offset;
			}
		}

		var prettyTime = _int2time(seconds, settings.timeFormat);
		self.val(prettyTime);
	}

	function _keyhandler(e)
	{
		var self = $(this);
		var list = self.data('timepicker-list');

		if (!list.is(':visible')) {
			if (e.keyCode == 40) {
				self.focus();
			} else {
				return true;
			}
		}

		switch (e.keyCode) {

			case 13: // return
				_selectValue(self);
				methods.hide.apply(this);
				e.preventDefault();
				return false;

			case 38: // up
				var selected = list.find('.ui-timepicker-selected');

				if (!selected.length) {
					list.children().each(function(i, obj) {
						if ($(obj).position().top > 0) {
							selected = $(obj);
							return false;
						}
					});
					selected.addClass('ui-timepicker-selected');

				} else if (!selected.is(':first-child')) {
					selected.removeClass('ui-timepicker-selected');
					selected.prev().addClass('ui-timepicker-selected');

					if (selected.prev().position().top < selected.outerHeight()) {
						list.scrollTop(list.scrollTop() - selected.outerHeight());
					}
				}

				break;

			case 40: // down
				selected = list.find('.ui-timepicker-selected');

				if (selected.length === 0) {
					list.children().each(function(i, obj) {
						if ($(obj).position().top > 0) {
							selected = $(obj);
							return false;
						}
					});

					selected.addClass('ui-timepicker-selected');
				} else if (!selected.is(':last-child')) {
					selected.removeClass('ui-timepicker-selected');
					selected.next().addClass('ui-timepicker-selected');

					if (selected.next().position().top + 2*selected.outerHeight() > list.outerHeight()) {
						list.scrollTop(list.scrollTop() + selected.outerHeight());
					}
				}

				break;

			case 27: // escape
				list.find('li').removeClass('ui-timepicker-selected');
				list.hide();
				break;

			case 9: //tab
				methods.hide();
				break;

			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 45:
				return;

			default:
				list.find('li').removeClass('ui-timepicker-selected');
				return;
		}
	}

	function _selectValue(self)
	{
		var settings = self.data('timepicker-settings');
		var list = self.data('timepicker-list');
		var timeValue = null;

		var cursor = list.find('.ui-timepicker-selected');

		if (cursor.length) {
			// selected value found
			timeValue = cursor.data('time');

		} else if (self.val()) {

			// no selected value; fall back on input value
			timeValue = _time2int(self.val());

			_setSelected(self, list);
		}

		if (timeValue !== null) {
			var timeString = _int2time(timeValue, settings.timeFormat);
			self.attr('value', timeString);
		}

		self.trigger('change').trigger('changeTime');
	}

	function _int2duration(seconds)
	{
		var minutes = Math.round(seconds/60);
		var duration;

		if (Math.abs(minutes) < 60) {
			duration = [minutes, _lang.mins];
		} else if (minutes == 60) {
			duration = ['1', _lang.hr];
		} else {
			var hours = (minutes/60).toFixed(1);
			if (_lang.decimal != '.') hours = hours.replace('.', _lang.decimal);
			duration = [hours, _lang.hrs];
		}

		return duration.join(' ');
	}

	function _int2time(seconds, format)
	{
		if (seconds === null) {
			return;
		}

		var time = new Date(_baseDate.valueOf() + (seconds*1000));
		var output = '';
		var hour, code;

		for (var i=0; i<format.length; i++) {

			code = format.charAt(i);
			switch (code) {

				case 'a':
					output += (time.getHours() > 11) ? 'pm' : 'am';
					break;

				case 'A':
					output += (time.getHours() > 11) ? 'PM' : 'AM';
					break;

				case 'g':
					hour = time.getHours() % 12;
					output += (hour === 0) ? '12' : hour;
					break;

				case 'G':
					output += time.getHours();
					break;

				case 'h':
					hour = time.getHours() % 12;

					if (hour !== 0 && hour < 10) {
						hour = '0'+hour;
					}

					output += (hour === 0) ? '12' : hour;
					break;

				case 'H':
					hour = time.getHours();
					if (seconds >= _ONE_DAY)
						hour = Math.floor(seconds / (60 * 60));
					output += (hour > 9) ? hour : '0'+hour;
					break;

				case 'i':
					var minutes = time.getMinutes();
					output += (minutes > 9) ? minutes : '0'+minutes;
					break;

				case 's':
					seconds = time.getSeconds();
					output += (seconds > 9) ? seconds : '0'+seconds;
					break;

				default:
					output += code;
			}
		}

		return output;
	}

	function _time2int(timeString)
	{
		if (timeString === '') return null;
		if (timeString+0 == timeString) return timeString;

		if (typeof(timeString) == 'object') {
			timeString = timeString.getHours()+':'+timeString.getMinutes()+':'+timeString.getSeconds();
		}

		var d = new Date(0);
		var time = timeString.toLowerCase().match(/(\d{1,2})(?::(\d{1,2}))?(?::(\d{2}))?\s*([pa]?)/);

		if (!time) {
			return null;
		}

		var hour = parseInt(time[1]*1, 10);
        var hours;

		if (time[4]) {
			if (hour == 12) {
				hours = (time[4] == 'p') ? 12 : 0;
			} else {
				hours = (hour + (time[4] == 'p' ? 12 : 0));
			}

		} else {
			hours = hour;
		}

		var minutes = ( time[2]*1 || 0 );
		var seconds = ( time[3]*1 || 0 );
		return hours*3600 + minutes*60 + seconds;
	}

	// Plugin entry
	$.fn.timepicker = function(method)
	{
		if(methods[method]) { return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)); }
		else if(typeof method === "object" || !method) { return methods.init.apply(this, arguments); }
		else { $.error("Method "+ method + " does not exist on jQuery.timepicker"); }
	};
}));

define('js/utils/date_utils',['jquery', 'date', 'js/utils/change_on_enter', 'jquery.ui', 'jquery.timepicker'],
function($, date, TriggerChangeEventOnEnter) {
    'use strict';

    function getDate(datepickerInput, timepickerInput) {
        // given a pair of inputs (datepicker and timepicker), return a JS Date
        // object that corresponds to the datetime.js that they represent. Assume
        // UTC timezone, NOT the timezone of the user's browser.
        var selectedDate = null,
            selectedTime = null;
        if (datepickerInput.length > 0) {
            selectedDate = $(datepickerInput).datepicker('getDate');
        }
        if (timepickerInput.length > 0) {
            selectedTime = $(timepickerInput).timepicker('getTime');
        }
        if (selectedDate && selectedTime) {
            return new Date(Date.UTC(
                selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(),
                selectedTime.getHours(), selectedTime.getMinutes()
            ));
        } else if (selectedDate) {
            return new Date(Date.UTC(
                selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
        } else {
            return null;
        }
    }

    function setDate(datepickerInput, timepickerInput, datetime) {
        // given a pair of inputs (datepicker and timepicker) and the date as an
        // ISO-formatted date string.
        var parsedDatetime = Date.parse(datetime);
        if (parsedDatetime) {
            $(datepickerInput).datepicker('setDate', parsedDatetime);
            if (timepickerInput.length > 0) {
                $(timepickerInput).timepicker('setTime', parsedDatetime);
            }
        }
    }

    function renderDate(dateArg) {
        // Render a localized date from an argument that can be passed to
        // the Date constructor (e.g. another Date or an ISO 8601 string)
        var dateObj = new Date(dateArg);
        return dateObj.toLocaleString(
            [],
            {timeZone: 'UTC', timeZoneName: 'short'}
        );
    }

    function parseDateFromString(stringDate) {
        if (stringDate && typeof stringDate === 'string') {
            return new Date(stringDate);
        } else {
            return stringDate;
        }
    }

    function convertDateStringsToObjects(obj, dateFields) {
        var i;
        for (i = 0; i < dateFields.length; i++) {
            if (obj[dateFields[i]]) {
                obj[dateFields[i]] = parseDateFromString(obj[dateFields[i]]);
            }
        }
        return obj;
    }

    function setupDatePicker(fieldName, view, index) {
        var cacheModel;
        var div;
        var datefield;
        var timefield;
        var cacheview;
        var setfield;
        var currentDate;
        if (typeof index !== 'undefined' && view.hasOwnProperty('collection')) {
            cacheModel = view.collection.models[index];
            div = view.$el.find('#' + view.collectionSelector(cacheModel.cid));
        } else {
            cacheModel = view.model;
            div = view.$el.find('#' + view.fieldToSelectorMap[fieldName]);
        }
        datefield = $(div).find('input.date');
        timefield = $(div).find('input.time');
        cacheview = view;
        setfield = function(event) {
            var newVal = getDate(datefield, timefield);

            // Setting to null clears the time as well, as date and time are linked.
            // Note also that the validation logic prevents us from clearing the start date
            // (start date is required by the back end).
            cacheview.clearValidationErrors();
            cacheview.setAndValidate(fieldName, (newVal || null), event);
        };

        // instrument as date and time pickers
        timefield.timepicker({timeFormat: 'H:i'});
        datefield.datepicker();

        // Using the change event causes setfield to be triggered twice, but it is necessary
        // to pick up when the date is typed directly in the field.
        datefield.change(setfield).keyup(TriggerChangeEventOnEnter);
        timefield.on('changeTime', setfield);
        timefield.on('input', setfield);

        currentDate = null;
        if (cacheModel) {
            currentDate = cacheModel.get(fieldName);
        }
        // timepicker doesn't let us set null, so check that we have a time
        if (currentDate) {
            setDate(datefield, timefield, currentDate);
        } else {
             // but reset fields either way
            timefield.val('');
            datefield.val('');
        }
    }

    return {
        getDate: getDate,
        setDate: setDate,
        renderDate: renderDate,
        convertDateStringsToObjects: convertDateStringsToObjects,
        parseDateFromString: parseDateFromString,
        setupDatePicker: setupDatePicker
    };
});

define('js/models/settings/course_details',['backbone', 'underscore', 'gettext', 'js/models/validation_helpers', 'js/utils/date_utils',
    'edx-ui-toolkit/js/utils/string-utils'
],
    function(Backbone, _, gettext, ValidationHelpers, DateUtils, StringUtils) {
        'use strict';
        var CourseDetails = Backbone.Model.extend({
            defaults: {
                org: '',
                course_id: '',
                run: '',
                language: '',
                start_date: null,	// maps to 'start'
                end_date: null,		// maps to 'end'
                certificates_display_behavior: "",
                certificate_available_date: null,
                enrollment_start: null,
                enrollment_end: null,
                syllabus: null,
                title: '',
                subtitle: '',
                duration: '',
                description: '',
                short_description: '',
                overview: '',
                intro_video: null,
                effort: null,	// an int or null,
                license: null,
                course_image_name: '', // the filename
                course_image_asset_path: '', // the full URL (/c4x/org/course/num/asset/filename)
                banner_image_name: '',
                banner_image_asset_path: '',
                video_thumbnail_image_name: '',
                video_thumbnail_image_asset_path: '',
                pre_requisite_courses: [],
                entrance_exam_enabled: '',
                entrance_exam_minimum_score_pct: '50',
                learning_info: [],
                instructor_info: {},
                self_paced: null
            },

            validate: function(newattrs) {
        // Returns either nothing (no return call) so that validate works or an object of {field: errorstring} pairs
        // A bit funny in that the video key validation is asynchronous; so, it won't stop the validation.
                var errors = {};
                const CERTIFICATES_DISPLAY_BEHAVIOR_OPTIONS = {
                    END: "end",
                    END_WITH_DATE: "end_with_date",
                    EARLY_NO_INFO: "early_no_info"
                };

                newattrs = DateUtils.convertDateStringsToObjects(
                    newattrs,
                    ['start_date', 'end_date', 'certificate_available_date', 'enrollment_start', 'enrollment_end']
                );

                if (newattrs.start_date === null) {
                    errors.start_date = gettext('The course must have an assigned start date.');
                }

                if (newattrs.start_date && newattrs.end_date && newattrs.start_date >= newattrs.end_date) {
                    errors.end_date = gettext('The course end date must be later than the course start date.');
                }
                if (newattrs.start_date && newattrs.enrollment_start &&
                  newattrs.start_date < newattrs.enrollment_start) {
                    errors.enrollment_start = gettext(
                      'The course start date must be later than the enrollment start date.'
                    );
                }
                if (newattrs.enrollment_start && newattrs.enrollment_end &&
                  newattrs.enrollment_start >= newattrs.enrollment_end) {
                    errors.enrollment_end = gettext(
                      'The enrollment start date cannot be after the enrollment end date.'
                    );
                }
                if (newattrs.end_date && newattrs.enrollment_end && newattrs.end_date < newattrs.enrollment_end) {
                    errors.enrollment_end = gettext('The enrollment end date cannot be after the course end date.');
                }
                if (this.showCertificateAvailableDate && newattrs.end_date && newattrs.certificate_available_date &&
                    newattrs.certificate_available_date < newattrs.end_date) {
                    errors.certificate_available_date = gettext(
                        'The certificate available date must be later than the course end date.'
                    );
                }

                if (this.useV2CertDisplaySettings){
                    if (
                        newattrs.certificates_display_behavior
                        && !(Object.values(CERTIFICATES_DISPLAY_BEHAVIOR_OPTIONS).includes(newattrs.certificates_display_behavior))
                    ) {

                        errors.certificates_display_behavior = StringUtils.interpolate(
                            gettext(
                                "The certificate display behavior must be one of: {behavior_options}"
                            ),
                            {
                                behavior_options: Object.values(CERTIFICATES_DISPLAY_BEHAVIOR_OPTIONS).join(', ')
                            }
                        );
                    }

                    // Throw error if there's a value for certificate_available_date
                    if(
                        (newattrs.certificate_available_date && newattrs.certificates_display_behavior != CERTIFICATES_DISPLAY_BEHAVIOR_OPTIONS.END_WITH_DATE)
                        || (!newattrs.certificate_available_date && newattrs.certificates_display_behavior == CERTIFICATES_DISPLAY_BEHAVIOR_OPTIONS.END_WITH_DATE)
                    ){
                        errors.certificates_display_behavior = StringUtils.interpolate(
                            gettext(
                                "The certificates display behavior must be {valid_option} if certificate available date is set."
                            ),
                            {
                                valid_option: CERTIFICATES_DISPLAY_BEHAVIOR_OPTIONS.END_WITH_DATE
                            }
                        );
                    }
                }

                if (newattrs.intro_video && newattrs.intro_video !== this.get('intro_video')) {
                    if (this._videokey_illegal_chars.exec(newattrs.intro_video)) {
                        errors.intro_video = gettext('Key should only contain letters, numbers, _, or -');
                    }
            // TODO check if key points to a real video using google's youtube api
                }
                if (_.has(newattrs, 'entrance_exam_minimum_score_pct')) {
                    var range = {
                        min: 1,
                        max: 100
                    };
                    if (!ValidationHelpers.validateIntegerRange(newattrs.entrance_exam_minimum_score_pct, range)) {
                        errors.entrance_exam_minimum_score_pct = StringUtils.interpolate(gettext(
                          'Please enter an integer between %(min)s and %(max)s.'
                        ), range, true);
                    }
                }
                if (!_.isEmpty(errors)) return errors;
        // NOTE don't return empty errors as that will be interpreted as an error state
            },

            _videokey_illegal_chars: /[^a-zA-Z0-9_-]/g,

            set_videosource: function(newsource) {
        // newsource either is <video youtube="speed:key, *"/> or just the "speed:key, *" string
        // returns the videosource for the preview which iss the key whose speed is closest to 1
                if (_.isEmpty(newsource) &&
                  !_.isEmpty(this.get('intro_video'))) this.set({intro_video: null}, {validate: true});
        // TODO remove all whitespace w/in string
                else {
                    if (this.get('intro_video') !== newsource) this.set('intro_video', newsource, {validate: true});
                }

                return this.videosourceSample();
            },

            videosourceSample: function() {
                if (this.has('intro_video')) return '//www.youtube.com/embed/' + this.get('intro_video');
                else return '';
            },

    // Whether or not the course pacing can be toggled. If the course
    // has already started, returns false; otherwise, returns true.
            canTogglePace: function() {
                return new Date() <= new Date(this.get('start_date'));
            }
        });

        return CourseDetails;
    }); // end define()
;
define('js/utils/handle_iframe_binding',['jquery'], function($) {
    var iframeBinding = function(e) {
        var target_element = null;
        if (typeof(e) === 'undefined') {
            target_element = $('iframe, embed');
        } else {
            if (typeof(e.nodeName) !== 'undefined') {
                target_element = $(e).find('iframe, embed');
            } else {
                target_element = e.$('iframe, embed');
            }
        }
        modifyTagContent(target_element);
    };

    var modifyTagContent = function(target_element) {
        target_element.each(function() {
            if ($(this).prop('tagName') === 'IFRAME') {
                var ifr_source = $(this).attr('src');

                // Modify iframe src only if it is not empty
                if (ifr_source) {
                    var wmode = 'wmode=transparent';
                    if (ifr_source.indexOf('?') !== -1) {
                        var getQString = ifr_source.split('?');
                        if (getQString[1].search('wmode=transparent') === -1) {
                            var oldString = getQString[1];
                            var newString = getQString[0];
                            $(this).attr('src', newString + '?' + wmode + '&' + oldString);
                        }
                    }
                    // The TinyMCE editor is hosted in an iframe, and before the iframe is
                    // removed we execute this code. To avoid throwing an error when setting the
                    // attr, check that the source doesn't start with the value specified by TinyMCE ('javascript:""').
                    else if (ifr_source.lastIndexOf('javascript:', 0) !== 0) {
                        $(this).attr('src', ifr_source + '?' + wmode);
                    }
                }
            } else {
                $(this).attr('wmode', 'transparent');
            }
        });
    };

    // Modify iframe/embed tags in provided html string
    // Use this method when provided data is just html sting not dom element
    // This method will only modify iframe (add wmode=transparent in url querystring) and embed (add wmode=transparent as attribute)
    // tags in html string so both tags will attach to dom and don't create z-index problem for other popups
    // Note: embed tags should be modified before rendering as they are static objects as compared to iframes
    // Note: this method can modify unintended html (invalid tags) while converting to dom object
    var iframeBindingHtml = function(html_string) {
        if (html_string) {
            var target_element = null;
            var temp_content = document.createElement('div');
            $(temp_content).html(html_string);
            target_element = $(temp_content).find('iframe, embed');
            if (target_element.length > 0) {
                modifyTagContent(target_element);
                html_string = $(temp_content).html();
            }
        }
        return html_string;
    };

    return {
        iframeBinding: iframeBinding,
        iframeBindingHtml: iframeBindingHtml
    };
});

define('js/utils/templates',['jquery', 'underscore'], function($, _) {
    /**
     * Loads the named template from the page, or logs an error if it fails.
     * @param name The name of the template.
     * @returns The loaded template.
     */
    var loadTemplate = function(name) {
        var templateSelector = '#' + name + '-tpl',
            templateText = $(templateSelector).text();
        if (!templateText) {
            console.error('Failed to load ' + name + ' template');
        }
        return _.template(templateText);
    };

    return {
        loadTemplate: loadTemplate
    };
});

define('text',{load: function(id){throw new Error("Dynamic load not allowed: " + id);}});

define('text!common/templates/components/system-feedback.underscore',[],function () { return '<div class="wrapper wrapper-<%- type %> wrapper-<%- type %>-<%- intent %>\n            <% if(obj.shown) { %>is-shown<% } else { %>is-hiding<% } %>\n            <% if(_.contains([\'help\', \'mini\'], intent)) { %>wrapper-<%- type %>-status<% } %>"\n     id="<%- type %>-<%- intent %>"\n     aria-hidden="<% if(obj.shown) { %>false<% } else { %>true<% } %>"\n     aria-labelledby="<%- type %>-<%- intent %>-title"\n     tabindex="-1"\n     <% if (obj.message) { %>aria-describedby="<%- type %>-<%- intent %>-description" <% } %>\n     <% if (obj.actions) { %>role="dialog"<% } %>\n  >\n  <div class="<%- type %> <%- intent %> <% if(obj.actions) { %>has-actions<% } %>">\n    <% if(obj.icon) { %>\n      <% var iconClass = {"warning": "warning", "confirmation": "check", "error": "warning", "announcement": "bullhorn", "step-required": "exclamation-circle", "help": "question", "mini": "cog"} %>\n      <span class="feedback-symbol fa fa-<%- iconClass[intent] %>" aria-hidden="true"></span>\n    <% } %>\n\n    <div class="copy">\n      <h2 class="title title-3" id="<%- type %>-<%- intent %>-title"><%- title %></h2>\n      <% if(obj.message) { %><p class="message" id="<%- type %>-<%- intent %>-description"><%- message %></p><% } %>\n    </div>\n\n    <% if(obj.actions) { %>\n    <nav class="nav-actions">\n      <ul>\n        <% if(actions.primary) { %>\n        <li class="nav-item">\n          <button class="action-primary <%- actions.primary.class %>"><%- actions.primary.text %></button>\n        </li>\n        <% } %>\n        <% if(actions.secondary) {\n             _.each(actions.secondary, function(secondary) { %>\n        <li class="nav-item">\n          <button class="action-secondary <%- secondary.class %>"><%- secondary.text %></button>\n        </li>\n        <%   });\n           } %>\n      </ul>\n    </nav>\n    <% } %>\n\n    <% if(obj.closeIcon) { %>\n    <a href="#" rel="view" class="action action-close action-<%- type %>-close">\n      <span class="icon fa fa-times-circle" aria-hidden="true"></span>\n      <span class="label">close <%- type %></span>\n    </a>\n    <% } %>\n  </div>\n</div>\n';});

(function(define) {
    'use strict';
    define('common/js/components/views/feedback',[
        'jquery',
        'underscore',
        'underscore.string',
        'backbone',
        'edx-ui-toolkit/js/utils/html-utils',
        'text!../../../../common/templates/components/system-feedback.underscore'
    ],
        function($, _, str, Backbone, HtmlUtils, systemFeedbackTemplate) {
            var tabbableElements = [
                "a[href]:not([tabindex='-1'])",
                "area[href]:not([tabindex='-1'])",
                "input:not([disabled]):not([tabindex='-1'])",
                "select:not([disabled]):not([tabindex='-1'])",
                "textarea:not([disabled]):not([tabindex='-1'])",
                "button:not([disabled]):not([tabindex='-1'])",
                "iframe:not([tabindex='-1'])",
                "[tabindex]:not([tabindex='-1'])",
                "[contentEditable=true]:not([tabindex='-1'])"
            ];
            var SystemFeedback = Backbone.View.extend({
                options: {
                    title: '',
                    message: '',
                    intent: null,  // "warning", "confirmation", "error", "announcement", "step-required", etc
                    type: null, // "alert", "notification", or "prompt": set by subclass
                    shown: true,  // is this view currently being shown?
                    icon: true,  // should we render an icon related to the message intent?
                    closeIcon: true,  // should we render a close button in the top right corner?
                    minShown: 0,  // ms after this view has been shown before it can be hidden
                    maxShown: Infinity,  // ms after this view has been shown before it will be automatically hidden
                    outFocusElement: null  // element to send focus to on hide

                /* Could also have an "actions" hash: here is an example demonstrating
                    the expected structure. For each action, by default the framework
                    will call preventDefault on the click event before the function is
                    run; to make it not do that, just pass `preventDefault: false` in
                    the action object.

                actions: {
                    primary: {
                        "text": "Save",
                        "class": "action-save",
                        "click": function(view) {
                            // do something when Save is clicked
                        }
                    },
                    secondary: [
                        {
                            "text": "Cancel",
                            "class": "action-cancel",
                            "click": function(view) {}
                        }, {
                            "text": "Discard Changes",
                            "class": "action-discard",
                            "click": function(view) {}
                        }
                    ]
                }
                */
                },

                initialize: function(options) {
                    this.options = _.extend({}, this.options, options);
                    if (!this.options.type) {
                        throw 'SystemFeedback: type required (given ' +  // eslint-disable-line no-throw-literal
                            JSON.stringify(this.options) + ')';
                    }
                    if (!this.options.intent) {
                        throw 'SystemFeedback: intent required (given ' +  // eslint-disable-line no-throw-literal
                            JSON.stringify(this.options) + ')';
                    }
                    this.setElement($('#page-' + this.options.type));
                    // handle single "secondary" action
                    if (this.options.actions && this.options.actions.secondary &&
                            !_.isArray(this.options.actions.secondary)) {
                        this.options.actions.secondary = [this.options.actions.secondary];
                    }
                    return this;
                },

                inFocus: function(wrapperElementSelector) {
                    var wrapper = wrapperElementSelector || '.wrapper',
                        tabbables;
                    this.options.outFocusElement = this.options.outFocusElement || document.activeElement;

                    // Set focus to the container.
                    this.$(wrapper).first().focus();

                    // Make tabs within the prompt loop rather than setting focus
                    // back to the main content of the page.
                    tabbables = this.$(tabbableElements.join());
                    tabbables.on('keydown', function(event) {
                        // On tab backward from the first tabbable item in the prompt
                        if (event.which === 9 && event.shiftKey && event.target === tabbables.first()[0]) {
                            event.preventDefault();
                            tabbables.last().focus();
                        } else if (event.which === 9 && !event.shiftKey && event.target === tabbables.last()[0]) {
                            // On tab forward from the last tabbable item in the prompt
                            event.preventDefault();
                            tabbables.first().focus();
                        }
                    });

                    return this;
                },

                outFocus: function() {
                    this.$(tabbableElements.join()).off('keydown');
                    if (this.options.outFocusElement) {
                        this.options.outFocusElement.focus();
                    }
                    return this;
                },

                // public API: show() and hide()
                show: function() {
                    clearTimeout(this.hideTimeout);
                    this.options.shown = true;
                    this.shownAt = new Date();
                    this.render();
                    if ($.isNumeric(this.options.maxShown)) {
                        this.hideTimeout = setTimeout(_.bind(this.hide, this),
                            this.options.maxShown);
                    }
                    return this;
                },

                hide: function() {
                    if (this.shownAt && $.isNumeric(this.options.minShown) &&
                            this.options.minShown > new Date() - this.shownAt) {
                        clearTimeout(this.hideTimeout);
                        this.hideTimeout = setTimeout(_.bind(this.hide, this),
                            this.options.minShown - (new Date() - this.shownAt));
                    } else {
                        this.options.shown = false;
                        delete this.shownAt;
                        this.render();
                    }
                    return this;
                },

                // the rest of the API should be considered semi-private
                events: {
                    'click .action-close': 'hide',
                    'click .action-primary': 'primaryClick',
                    'click .action-secondary': 'secondaryClick'
                },

                render: function() {
                    // there can be only one active view of a given type at a time: only
                    // one alert, only one notification, only one prompt. Therefore, we'll
                    // use a singleton approach.
                    var singleton = SystemFeedback['active_' + this.options.type];
                    if (singleton && singleton !== this) {
                        singleton.stopListening();
                        singleton.undelegateEvents();
                    }
                    HtmlUtils.setHtml(this.$el, HtmlUtils.template(systemFeedbackTemplate)(this.options));
                    SystemFeedback['active_' + this.options.type] = this;
                    return this;
                },

                primaryClick: function(event) {
                    var actions, primary;
                    actions = this.options.actions;
                    if (!actions) { return; }
                    primary = actions.primary;
                    if (!primary) { return; }
                    if (primary.preventDefault !== false) {
                        event.preventDefault();
                    }
                    if (primary.click) {
                        primary.click.call(event.target, this, event);
                    }
                },

                secondaryClick: function(event) {
                    var actions, secondaryList, secondary, i;
                    actions = this.options.actions;
                    if (!actions) { return; }
                    secondaryList = actions.secondary;
                    if (!secondaryList) { return; }
                    // which secondary action was clicked?
                    i = 0;  // default to the first secondary action (easier for testing)
                    if (event && event.target) {
                        i = _.indexOf(this.$('.action-secondary'), event.target);
                    }
                    secondary = secondaryList[i];
                    if (secondary.preventDefault !== false) {
                        event.preventDefault();
                    }
                    if (secondary.click) {
                        secondary.click.call(event.target, this, event);
                    }
                }
            });
            return SystemFeedback;
        });
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    define('common/js/components/views/feedback_notification',['jquery', 'underscore', 'underscore.string', './feedback'],
        function($, _, str, SystemFeedbackView) {
            var Notification = SystemFeedbackView.extend({
                options: $.extend({}, SystemFeedbackView.prototype.options, {
                    type: 'notification',
                    closeIcon: false
                })
            });

            // create Notification.Warning, Notification.Confirmation, etc
            var capitalCamel, intents, miniOptions;
            capitalCamel = _.compose(str.capitalize, str.camelize);
            intents = ['warning', 'error', 'confirmation', 'announcement', 'step-required', 'help', 'mini'];
            _.each(intents, function(intent) {
                var subclass;
                subclass = Notification.extend({
                    options: $.extend({}, Notification.prototype.options, {
                        intent: intent
                    })
                });
                Notification[capitalCamel(intent)] = subclass;
            });

            // set more sensible defaults for Notification.Mini views
            miniOptions = Notification.Mini.prototype.options;
            miniOptions.minShown = 1250;
            miniOptions.closeIcon = false;

            return Notification;
        }
    );
}).call(this, define || RequireJS.define);

(function(define) {
    'use strict';
    define('common/js/components/views/feedback_prompt',['jquery', 'underscore', 'underscore.string', 'common/js/components/views/feedback'],
        function($, _, str, SystemFeedbackView) {
            var Prompt = SystemFeedbackView.extend({
                options: $.extend({}, SystemFeedbackView.prototype.options, {
                    type: 'prompt',
                    closeIcon: false,
                    icon: false
                }),
                render: function() {
                    if (!window.$body) { window.$body = $(document.body); }
                    if (this.options.shown) {
                        $body.addClass('prompt-is-shown');
                    } else {
                        $body.removeClass('prompt-is-shown');
                    }
                    // super() in Javascript has awkward syntax :(
                    return SystemFeedbackView.prototype.render.apply(this, arguments);
                },
                show: function() {
                    SystemFeedbackView.prototype.show.apply(this, arguments);
                    return this.inFocus();
                },

                hide: function() {
                    SystemFeedbackView.prototype.hide.apply(this, arguments);
                    return this.outFocus();
                }
            });

            // create Prompt.Warning, Prompt.Confirmation, etc
            var capitalCamel, intents;
            capitalCamel = _.compose(str.capitalize, str.camelize);
            intents = ['warning', 'error', 'confirmation', 'announcement', 'step-required', 'help', 'mini'];
            _.each(intents, function(intent) {
                var subclass;
                subclass = Prompt.extend({
                    options: $.extend({}, Prompt.prototype.options, {
                        intent: intent
                    })
                });
                Prompt[capitalCamel(intent)] = subclass;
            });

            return Prompt;
        });
}).call(this, define || RequireJS.define);

/**
 * Provides useful utilities for views.
 */
(function(define, require) {
    'use strict';

    /* RequireJS */
    define('common/js/components/utils/view_utils',['jquery', 'underscore', 'gettext', 'common/js/components/views/feedback_notification',
        'common/js/components/views/feedback_prompt', 'edx-ui-toolkit/js/utils/html-utils'],
        function($, _, gettext, NotificationView, PromptView, HtmlUtils) {
    /* End RequireJS */
    /* Webpack
    define(['jquery', 'underscore', 'gettext', 'common/js/components/views/feedback_notification',
        'common/js/components/views/feedback_prompt', 'scriptjs'],
        function($, _, gettext, NotificationView, PromptView, $script) {
    /* End Webpack */

            var toggleExpandCollapse, showLoadingIndicator, hideLoadingIndicator, confirmThenRunOperation,
                runOperationShowingMessage, showErrorMeassage, withDisabledElement, disableElementWhileRunning,
                getScrollOffset, setScrollOffset, setScrollTop, redirect, reload, hasChangedAttributes,
                deleteNotificationHandler, validateRequiredField, validateURLItemEncoding,
                validateTotalKeyLength, checkTotalKeyLengthViolations, loadJavaScript;

            // see https://openedx.atlassian.net/browse/TNL-889 for what is it and why it's 65
            var MAX_SUM_KEY_LENGTH = 65;

            /**
             * Toggles the expanded state of the current element.
             */
            toggleExpandCollapse = function(target, collapsedClass) {
                // Support the old 'collapsed' option until fully switched over to is-collapsed
                var collapsed = collapsedClass || 'collapsed';
                target.closest('.expand-collapse').toggleClass('expand collapse');
                target.closest('.is-collapsible, .window').toggleClass(collapsed);
                target.closest('.is-collapsible').children('article').slideToggle();
            };

            /**
             * Show the page's loading indicator.
             */
            showLoadingIndicator = function() {
                $('.ui-loading').show();
            };

            /**
             * Hide the page's loading indicator.
             */
            hideLoadingIndicator = function() {
                $('.ui-loading').hide();
            };

            /**
             * Confirms with the user whether to run an operation or not, and then runs it if desired.
             */
            confirmThenRunOperation = function(title, message, actionLabel, operation, onCancelCallback) {
                return new PromptView.Warning({
                    title: title,
                    message: message,
                    actions: {
                        primary: {
                            text: actionLabel,
                            click: function(prompt) {
                                prompt.hide();
                                operation();
                            }
                        },
                        secondary: {
                            text: gettext('Cancel'),
                            click: function(prompt) {
                                if (onCancelCallback) {
                                    onCancelCallback();
                                }
                                return prompt.hide();
                            }
                        }
                    }
                }).show();
            };

            /**
             * Shows a progress message for the duration of an asynchronous operation.
             * Note: this does not remove the notification upon failure because an error
             * will be shown that shouldn't be removed.
             * @param message The message to show.
             * @param operation A function that returns a promise representing the operation.
             */
            runOperationShowingMessage = function(message, operation) {
                var notificationView;
                notificationView = new NotificationView.Mini({
                    title: gettext(message)
                });
                notificationView.show();
                return operation().done(function() {
                    notificationView.hide();
                });
            };

            /**
             * Shows an error notification message for a specifc period of time.
             * @param heading The heading of notification.
             * @param message The message to show.
             * @param timeInterval The time interval to hide the notification.
             */
            showErrorMeassage = function(heading, message, timeInterval) {
                var errorNotificationView = new NotificationView.Error({
                    title: gettext(heading),
                    message: gettext(message)
                });
                errorNotificationView.show();

                setTimeout(function() { errorNotificationView.hide(); }, timeInterval);
            };
            /**
             * Wraps a Backbone event callback to disable the event's target element.
             *
             * This paradigm is designed to be used in Backbone event maps where
             * multiple events firing simultaneously is not desired.
             *
             * @param functionName the function to execute, as a string.
             * The function must return a jQuery promise and be able to take an event
             */
            withDisabledElement = function(functionName) {
                return function(event) {
                    var view = this;
                    disableElementWhileRunning($(event.currentTarget), function() {
                        // call view.functionName(event), with view as the current this
                        return view[functionName].apply(view, [event]);
                    });
                };
            };

            /**
             * Disables a given element when a given operation is running.
             * @param {jQuery} element the element to be disabled.
             * @param operation the operation during whose duration the
             * element should be disabled. The operation should return
             * a JQuery promise.
             */
            disableElementWhileRunning = function(element, operation) {
                element.addClass('is-disabled').attr('aria-disabled', true);
                return operation().always(function() {
                    element.removeClass('is-disabled').attr('aria-disabled', false);
                });
            };

            /**
             * Returns a handler that removes a notification, both dismissing it and deleting it from the database.
             * @param callback function to call when deletion succeeds
             */
            deleteNotificationHandler = function(callback) {
                return function(event) {
                    event.preventDefault();
                    $.ajax({
                        url: $(this).data('dismiss-link'),
                        type: 'DELETE',
                        success: callback
                    });
                };
            };

            /**
             * Performs an animated scroll so that the window has the specified scroll top.
             * @param scrollTop The desired scroll top for the window.
             */
            setScrollTop = function(scrollTop) {
                $('html, body').animate({
                    scrollTop: scrollTop
                }, 500);
            };

            /**
             * Returns the relative position that the element is scrolled from the top of the view port.
             * @param element The element in question.
             */
            getScrollOffset = function(element) {
                var elementTop = element.offset().top;
                return elementTop - $(window).scrollTop();
            };

            /**
             * Scrolls the window so that the element is scrolled down to the specified relative position
             * from the top of the view port.
             * @param element The element in question.
             * @param offset The amount by which the element should be scrolled from the top of the view port.
             */
            setScrollOffset = function(element, offset) {
                var elementTop = element.offset().top,
                    newScrollTop = elementTop - offset;
                setScrollTop(newScrollTop);
            };

            /**
             * Redirects to the specified URL. This is broken out as its own function for unit testing.
             */
            redirect = function(url) {
                window.location = url;
            };

            /**
             * Reloads the page. This is broken out as its own function for unit testing.
             */
            reload = function() {
                window.location.reload();
            };

            /**
             * Returns true if a model has changes to at least one of the specified attributes.
             * @param model The model in question.
             * @param attributes The list of attributes to be compared.
             * @returns {boolean} Returns true if attribute changes are found.
             */
            hasChangedAttributes = function(model, attributes) {
                var i,
                    changedAttributes = model.changedAttributes();
                if (!changedAttributes) {
                    return false;
                }
                for (i = 0; i < attributes.length; i++) {
                    if (_.has(changedAttributes, attributes[i])) {
                        return true;
                    }
                }
                return false;
            };

            /**
             * Helper method for course/library creation - verifies a required field is not blank.
             */
            validateRequiredField = function(msg) {
                return msg.length === 0 ? gettext('Required field.') : '';
            };

            /**
             * Helper method for course/library creation.
             * Check that a course (org, number, run) doesn't use any special characters
             */
            validateURLItemEncoding = function(item, allowUnicode) {
                var required = validateRequiredField(item);
                if (required) {
                    return required;
                }
                if (allowUnicode) {
                    if (/\s/g.test(item)) {
                        return gettext('Please do not use any spaces in this field.');
                    }
                } else {
                    if (item !== encodeURIComponent(item) || item.match(/[!'()*]/)) {
                        return gettext('Please do not use any spaces or special characters in this field.');
                    }
                }
                return '';
            };

            // Ensure that sum length of key field values <= ${MAX_SUM_KEY_LENGTH} chars.
            validateTotalKeyLength = function(keyFieldSelectors) {
                var totalLength = _.reduce(
                    keyFieldSelectors,
                    function(sum, ele) { return sum + $(ele).val().length; },
                    0
                );
                return totalLength <= MAX_SUM_KEY_LENGTH;
            };

            checkTotalKeyLengthViolations = function(selectors, classes, keyFieldSelectors, messageTpl) {
                var tempHtml;
                if (!validateTotalKeyLength(keyFieldSelectors)) {
                    $(selectors.errorWrapper).addClass(classes.shown).removeClass(classes.hiding);
                    tempHtml = HtmlUtils.joinHtml(
                            HtmlUtils.HTML('<p>'),
                            HtmlUtils.template(messageTpl)({limit: MAX_SUM_KEY_LENGTH}),
                            HtmlUtils.HTML('</p>')
                    );
                    HtmlUtils.setHtml(
                        $(selectors.errorMessage),
                        tempHtml
                    );
                    $(selectors.save).addClass(classes.disabled);
                } else {
                    $(selectors.errorWrapper).removeClass(classes.shown).addClass(classes.hiding);
                }
            };

            /**
             * Dynamically loads the specified JavaScript file.
             * @param url The URL to a JavaScript file.
             * @returns {Promise} A promise indicating when the URL has been loaded.
             */
            loadJavaScript = function(url) {
                var deferred = $.Deferred();
                /* RequireJS */
                require([url],
                    function() {
                        deferred.resolve();
                    },
                    function() {
                        deferred.reject();
                    });
                /* End RequireJS */
                /* Webpack
                $script(url, url, function () {
                    deferred.resolve();
                });
                /* End Webpack */
                return deferred.promise();
            };

            return {
                toggleExpandCollapse: toggleExpandCollapse,
                showLoadingIndicator: showLoadingIndicator,
                hideLoadingIndicator: hideLoadingIndicator,
                confirmThenRunOperation: confirmThenRunOperation,
                runOperationShowingMessage: runOperationShowingMessage,
                showErrorMeassage: showErrorMeassage,
                withDisabledElement: withDisabledElement,
                disableElementWhileRunning: disableElementWhileRunning,
                deleteNotificationHandler: deleteNotificationHandler,
                setScrollTop: setScrollTop,
                getScrollOffset: getScrollOffset,
                setScrollOffset: setScrollOffset,
                redirect: redirect,
                reload: reload,
                hasChangedAttributes: hasChangedAttributes,
                validateRequiredField: validateRequiredField,
                validateURLItemEncoding: validateURLItemEncoding,
                validateTotalKeyLength: validateTotalKeyLength,
                checkTotalKeyLengthViolations: checkTotalKeyLengthViolations,
                loadJavaScript: loadJavaScript
            };
        });
}).call(this, define || RequireJS.define, require || RequireJS.require);

define('js/views/baseview',['jquery', 'underscore', 'backbone', 'gettext', 'js/utils/handle_iframe_binding', 'js/utils/templates',
    'common/js/components/utils/view_utils'],
    function($, _, Backbone, gettext, IframeUtils, TemplateUtils, ViewUtils) {
        /*
         This view is extended from backbone to provide useful functionality for all Studio views.
         This functionality includes:
         - automatic expand and collapse of elements with the 'ui-toggle-expansion' class specified
         - additional control of rendering by overriding 'beforeRender' or 'afterRender'

         Note: the default 'afterRender' function calls a utility function 'iframeBinding' which modifies
         iframe src urls on a page so that they are rendered as part of the DOM.
         */

        var BaseView = Backbone.View.extend({
            events: {
                'click .ui-toggle-expansion': 'toggleExpandCollapse'
            },

            options: {
                // UX is moving towards using 'is-collapsed' in preference over 'collapsed',
                // but use the old scheme as the default so that existing code doesn't need
                // to be rewritten.
                collapsedClass: 'collapsed'
            },

            // override the constructor function
            constructor: function(options) {
                _.bindAll(this, 'beforeRender', 'render', 'afterRender');

                // Merge passed options and view's options property and
                // attach to the view's options property
                if (this.options) {
                    options = _.extend({}, _.result(this, 'options'), options);
                }

                // trunc is not available in IE, and it provides polyfill for it.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
                if (!Math.trunc) {
                    Math.trunc = function(v) {
                        v = +v;  // eslint-disable-line no-param-reassign
                        return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
                    };
                }
                this.options = options;

                var _this = this;
                // xss-lint: disable=javascript-jquery-insertion
                this.render = _.wrap(this.render, function(render, options) {
                    _this.beforeRender();
                    render(options);
                    _this.afterRender();
                    return _this;
                });

                // call Backbone's own constructor
                Backbone.View.prototype.constructor.apply(this, arguments);
            },

            beforeRender: function() {
            },

            render: function() {
                return this;
            },

            afterRender: function() {
                IframeUtils.iframeBinding(this);
            },

            toggleExpandCollapse: function(event) {
                var $target = $(event.target);
                // Don't propagate the event as it is possible that two views will both contain
                // this element, e.g. clicking on the element of a child view container in a parent.
                event.stopPropagation();
                event.preventDefault();
                ViewUtils.toggleExpandCollapse($target, this.options.collapsedClass);
            },

            /**
             * Loads the named template from the page, or logs an error if it fails.
             * @param name The name of the template.
             * @returns The loaded template.
             */
            loadTemplate: function(name) {
                return TemplateUtils.loadTemplate(name);
            }
        });

        return BaseView;
    });

(function(define) {
    'use strict';
    define('common/js/components/views/feedback_alert',['jquery', 'underscore', 'underscore.string', 'common/js/components/views/feedback'],
        function($, _, str, SystemFeedbackView) {
            var Alert = SystemFeedbackView.extend({
                options: $.extend({}, SystemFeedbackView.prototype.options, {
                    type: 'alert'
                }),
                slide_speed: 900,
                show: function() {
                    SystemFeedbackView.prototype.show.apply(this, arguments);
                    this.$el.hide();
                    this.$el.slideDown(this.slide_speed);
                    return this;
                },
                hide: function() {
                    this.$el.slideUp({
                        duration: this.slide_speed
                    });
                    setTimeout(_.bind(SystemFeedbackView.prototype.hide, this, arguments),
                           this.slideSpeed);
                }
            });

        // create Alert.Warning, Alert.Confirmation, etc
            var capitalCamel, intents;
            capitalCamel = _.compose(str.capitalize, str.camelize);
            intents = ['warning', 'error', 'confirmation', 'announcement', 'step-required', 'help', 'mini'];
            _.each(intents, function(intent) {
                var subclass;
                subclass = Alert.extend({
                    options: $.extend({}, Alert.prototype.options, {
                        intent: intent
                    })
                });
                Alert[capitalCamel(intent)] = subclass;
            });

            return Alert;
        });
}).call(this, define || RequireJS.define);

/*!
 * Smooth Scroll - v1.4.10 - 2013-03-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.10",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);
define("jquery.smoothScroll", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.jQuery.fn.smoothScroll;
    };
}(this)));

define('js/views/validation',['edx-ui-toolkit/js/utils/html-utils',
    'js/views/baseview',
    'underscore',
    'jquery',
    'gettext',
    'common/js/components/views/feedback_notification',
    'common/js/components/views/feedback_alert',
    'js/views/baseview',
    'jquery.smoothScroll'],
    function(HtmlUtils, BaseView, _, $, gettext, NotificationView, AlertView) {
        var ValidatingView = BaseView.extend({
    // Intended as an abstract class which catches validation errors on the model and
    // decorates the fields. Needs wiring per class, but this initialization shows how
    // either have your init call this one or copy the contents
            initialize: function() {
                this.listenTo(this.model, 'invalid', this.handleValidationError);
                this.selectorToField = _.invert(this.fieldToSelectorMap);
            },

            errorTemplate: HtmlUtils.template('<span class="message-error"><%- message %></span>'),

            save_title: gettext("You've made some changes"),
            save_message: gettext('Your changes will not take effect until you save your progress.'),
            error_title: gettext("You've made some changes, but there are some errors"),
            error_message: gettext('Please address the errors on this page first, and then save your progress.'),

            events: {
                'change input': 'clearValidationErrors',
                'change textarea': 'clearValidationErrors'
            },
            fieldToSelectorMap: {
        // Your subclass must populate this w/ all of the model keys and dom selectors
        // which may be the subjects of validation errors
            },
            _cacheValidationErrors: [],

            handleValidationError: function(model, error) {
                this.clearValidationErrors();
        // error is object w/ fields and error strings
                for (var field in error) {
                    var ele = this.$el.find('#' + this.fieldToSelectorMap[field]);
                    this._cacheValidationErrors.push(ele);
                    this.getInputElements(ele).addClass('error');
                    HtmlUtils.append($(ele).parent(), this.errorTemplate({message: error[field]}));
                }
                $('.wrapper-notification-warning').addClass('wrapper-notification-warning-w-errors');
                $('.action-save').addClass('is-disabled');
        // TODO: (pfogg) should this text fade in/out on change?
                $('#notification-warning-title').text(this.error_title);
                $('#notification-warning-description').text(this.error_message);
            },

            clearValidationErrors: function() {
        // error is object w/ fields and error strings
                while (this._cacheValidationErrors.length > 0) {
                    var ele = this._cacheValidationErrors.pop();
                    this.getInputElements(ele).removeClass('error');
                    $(ele).nextAll('.message-error').remove();
                }
                $('.wrapper-notification-warning').removeClass('wrapper-notification-warning-w-errors');
                $('.action-save').removeClass('is-disabled');
                $('#notification-warning-title').text(this.save_title);
                $('#notification-warning-description').text(this.save_message);
            },

            setField: function(event) {
        // Set model field and return the new value.
                this.clearValidationErrors();
                var field = this.selectorToField[event.currentTarget.id];
                var newVal = '';
                if (event.currentTarget.type == 'checkbox') {
                    newVal = $(event.currentTarget).is(':checked').toString();
                } else {
                    newVal = $(event.currentTarget).val();
                }
                this.model.set(field, newVal);
                this.model.isValid();
                return newVal;
            },
    // these should perhaps go into a superclass but lack of event hash inheritance demotivates me
            inputFocus: function(event) {
                $("label[for='" + event.currentTarget.id + "']").addClass('is-focused');
            },
            inputUnfocus: function(event) {
                $("label[for='" + event.currentTarget.id + "']").removeClass('is-focused');
            },

            getInputElements: function(ele) {
                var inputElements = 'input, textarea';
                if ($(ele).is(inputElements)) {
                    return $(ele);
                } else {
            // put error on the contained inputs
                    return $(ele).find(inputElements);
                }
            },

            showNotificationBar: function(message, primaryClick, secondaryClick) {
        // Show a notification with message. primaryClick is called on
        // pressing the save button, and secondaryClick (if it's
        // passed, which it may not be) will be called on
        // cancel. Takes care of hiding the notification bar at the
        // appropriate times.
                if (this.notificationBarShowing) {
                    return;
                }
        // If we've already saved something, hide the alert.
                if (this.saved) {
                    this.saved.hide();
                }
                var self = this;
                this.confirmation = new NotificationView.Warning({
                    title: this.save_title,
                    message: message,
                    actions: {
                        primary: {
                            text: gettext('Save Changes'),
                            class: 'action-save',
                            click: function() {
                                primaryClick();
                                self.confirmation.hide();
                                self.notificationBarShowing = false;
                            }
                        },
                        secondary: [{
                            text: gettext('Cancel'),
                            class: 'action-cancel',
                            click: function() {
                                if (secondaryClick) {
                                    secondaryClick();
                                }
                                self.model.clear({silent: true});
                                self.confirmation.hide();
                                self.notificationBarShowing = false;
                            }
                        }]
                    }});
                this.notificationBarShowing = true;
                this.confirmation.show();
        // Make sure the bar is in the right state
                this.model.isValid();
            },

            showSavedBar: function(title, message) {
                var defaultTitle = gettext('Your changes have been saved.');
                this.saved = new AlertView.Confirmation({
                    title: title || defaultTitle,
                    message: message,
                    closeIcon: false
                });
                this.saved.show();
                $.smoothScroll({
                    offset: 0,
                    easing: 'swing',
                    speed: 1000
                });
            },

            saveView: function() {
                var self = this;
                this.model.save(
            {},
                    {
                        success: function() {
                            self.showSavedBar();
                            self.render();
                        },
                        silent: true
                    }
        );
            }
        });

        return ValidatingView;
    }); // end define()
;
window.CodeMirror=function(){"use strict";var userAgent=navigator.userAgent;var platform=navigator.platform;var gecko=/gecko\/\d/i.test(userAgent);var ie_upto10=/MSIE \d/.test(userAgent);var ie_11up=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);var edge=/Edge\/(\d+)/.exec(userAgent);var ie=ie_upto10||ie_11up||edge;var ie_version=ie&&(ie_upto10?document.documentMode||6:+(edge||ie_11up)[1]);var webkit=!edge&&/WebKit\//.test(userAgent);var qtwebkit=webkit&&/Qt\/\d+\.\d+/.test(userAgent);var chrome=!edge&&/Chrome\//.test(userAgent);var presto=/Opera\//.test(userAgent);var safari=/Apple Computer/.test(navigator.vendor);var mac_geMountainLion=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);var phantom=/PhantomJS/.test(userAgent);var ios=!edge&&/AppleWebKit/.test(userAgent)&&/Mobile\/\w+/.test(userAgent);var android=/Android/.test(userAgent);var mobile=ios||android||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);var mac=ios||/Mac/.test(platform);var chromeOS=/\bCrOS\b/.test(userAgent);var windows=/win/i.test(platform);var presto_version=presto&&userAgent.match(/Version\/(\d*\.\d*)/);if(presto_version){presto_version=Number(presto_version[1])}if(presto_version&&presto_version>=15){presto=false;webkit=true}var flipCtrlCmd=mac&&(qtwebkit||presto&&(presto_version==null||presto_version<12.11));var captureRightClick=gecko||ie&&ie_version>=9;function classTest(cls){return new RegExp("(^|\\s)"+cls+"(?:$|\\s)\\s*")}var rmClass=function(node,cls){var current=node.className;var match=classTest(cls).exec(current);if(match){var after=current.slice(match.index+match[0].length);node.className=current.slice(0,match.index)+(after?match[1]+after:"")}};function removeChildren(e){for(var count=e.childNodes.length;count>0;--count){e.removeChild(e.firstChild)}return e}function removeChildrenAndAdd(parent,e){return removeChildren(parent).appendChild(e)}function elt(tag,content,className,style){var e=document.createElement(tag);if(className){e.className=className}if(style){e.style.cssText=style}if(typeof content=="string"){e.appendChild(document.createTextNode(content))}else if(content){for(var i=0;i<content.length;++i){e.appendChild(content[i])}}return e}function eltP(tag,content,className,style){var e=elt(tag,content,className,style);e.setAttribute("role","presentation");return e}var range;if(document.createRange){range=function(node,start,end,endNode){var r=document.createRange();r.setEnd(endNode||node,end);r.setStart(node,start);return r}}else{range=function(node,start,end){var r=document.body.createTextRange();try{r.moveToElementText(node.parentNode)}catch(e){return r}r.collapse(true);r.moveEnd("character",end);r.moveStart("character",start);return r}}function contains(parent,child){if(child.nodeType==3){child=child.parentNode}if(parent.contains){return parent.contains(child)}do{if(child.nodeType==11){child=child.host}if(child==parent){return true}}while(child=child.parentNode)}function activeElt(){var activeElement;try{activeElement=document.activeElement}catch(e){activeElement=document.body||null}while(activeElement&&activeElement.shadowRoot&&activeElement.shadowRoot.activeElement){activeElement=activeElement.shadowRoot.activeElement}return activeElement}function addClass(node,cls){var current=node.className;if(!classTest(cls).test(current)){node.className+=(current?" ":"")+cls}}function joinClasses(a,b){var as=a.split(" ");for(var i=0;i<as.length;i++){if(as[i]&&!classTest(as[i]).test(b)){b+=" "+as[i]}}return b}var selectInput=function(node){node.select()};if(ios){selectInput=function(node){node.selectionStart=0;node.selectionEnd=node.value.length}}else if(ie){selectInput=function(node){try{node.select()}catch(_e){}}}function bind(f){var args=Array.prototype.slice.call(arguments,1);return function(){return f.apply(null,args)}}function copyObj(obj,target,overwrite){if(!target){target={}}for(var prop in obj){if(obj.hasOwnProperty(prop)&&(overwrite!==false||!target.hasOwnProperty(prop))){target[prop]=obj[prop]}}return target}function countColumn(string,end,tabSize,startIndex,startValue){if(end==null){end=string.search(/[^\s\u00a0]/);if(end==-1){end=string.length}}for(var i=startIndex||0,n=startValue||0;;){var nextTab=string.indexOf("\t",i);if(nextTab<0||nextTab>=end){return n+(end-i)}n+=nextTab-i;n+=tabSize-n%tabSize;i=nextTab+1}}var Delayed=function(){this.id=null;this.f=null;this.time=0;this.handler=bind(this.onTimeout,this)};Delayed.prototype.onTimeout=function(self){self.id=0;if(self.time<=+new Date){self.f()}else{setTimeout(self.handler,self.time-+new Date)}};Delayed.prototype.set=function(ms,f){this.f=f;var time=+new Date+ms;if(!this.id||time<this.time){clearTimeout(this.id);this.id=setTimeout(this.handler,ms);this.time=time}};function indexOf(array,elt){for(var i=0;i<array.length;++i){if(array[i]==elt){return i}}return-1}var scrollerGap=30;var Pass={toString:function(){return"CodeMirror.Pass"}};var sel_dontScroll={scroll:false},sel_mouse={origin:"*mouse"},sel_move={origin:"+move"};function findColumn(string,goal,tabSize){for(var pos=0,col=0;;){var nextTab=string.indexOf("\t",pos);if(nextTab==-1){nextTab=string.length}var skipped=nextTab-pos;if(nextTab==string.length||col+skipped>=goal){return pos+Math.min(skipped,goal-col)}col+=nextTab-pos;col+=tabSize-col%tabSize;pos=nextTab+1;if(col>=goal){return pos}}}var spaceStrs=[""];function spaceStr(n){while(spaceStrs.length<=n){spaceStrs.push(lst(spaceStrs)+" ")}return spaceStrs[n]}function lst(arr){return arr[arr.length-1]}function map(array,f){var out=[];for(var i=0;i<array.length;i++){out[i]=f(array[i],i)}return out}function insertSorted(array,value,score){var pos=0,priority=score(value);while(pos<array.length&&score(array[pos])<=priority){pos++}array.splice(pos,0,value)}function nothing(){}function createObj(base,props){var inst;if(Object.create){inst=Object.create(base)}else{nothing.prototype=base;inst=new nothing}if(props){copyObj(props,inst)}return inst}var nonASCIISingleCaseWordChar=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function isWordCharBasic(ch){return/\w/.test(ch)||ch>""&&(ch.toUpperCase()!=ch.toLowerCase()||nonASCIISingleCaseWordChar.test(ch))}function isWordChar(ch,helper){if(!helper){return isWordCharBasic(ch)}if(helper.source.indexOf("\\w")>-1&&isWordCharBasic(ch)){return true}return helper.test(ch)}function isEmpty(obj){for(var n in obj){if(obj.hasOwnProperty(n)&&obj[n]){return false}}return true}var extendingChars=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function isExtendingChar(ch){return ch.charCodeAt(0)>=768&&extendingChars.test(ch)}function skipExtendingChars(str,pos,dir){while((dir<0?pos>0:pos<str.length)&&isExtendingChar(str.charAt(pos))){pos+=dir}return pos}function findFirst(pred,from,to){var dir=from>to?-1:1;for(;;){if(from==to){return from}var midF=(from+to)/2,mid=dir<0?Math.ceil(midF):Math.floor(midF);if(mid==from){return pred(mid)?from:to}if(pred(mid)){to=mid}else{from=mid+dir}}}function iterateBidiSections(order,from,to,f){if(!order){return f(from,to,"ltr",0)}var found=false;for(var i=0;i<order.length;++i){var part=order[i];if(part.from<to&&part.to>from||from==to&&part.to==from){f(Math.max(part.from,from),Math.min(part.to,to),part.level==1?"rtl":"ltr",i);found=true}}if(!found){f(from,to,"ltr")}}var bidiOther=null;function getBidiPartAt(order,ch,sticky){var found;bidiOther=null;for(var i=0;i<order.length;++i){var cur=order[i];if(cur.from<ch&&cur.to>ch){return i}if(cur.to==ch){if(cur.from!=cur.to&&sticky=="before"){found=i}else{bidiOther=i}}if(cur.from==ch){if(cur.from!=cur.to&&sticky!="before"){found=i}else{bidiOther=i}}}return found!=null?found:bidiOther}var bidiOrdering=function(){var lowTypes="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";var arabicTypes="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";function charType(code){if(code<=247){return lowTypes.charAt(code)}else if(1424<=code&&code<=1524){return"R"}else if(1536<=code&&code<=1785){return arabicTypes.charAt(code-1536)}else if(1774<=code&&code<=2220){return"r"}else if(8192<=code&&code<=8203){return"w"}else if(code==8204){return"b"}else{return"L"}}var bidiRE=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;var isNeutral=/[stwN]/,isStrong=/[LRr]/,countsAsLeft=/[Lb1n]/,countsAsNum=/[1n]/;function BidiSpan(level,from,to){this.level=level;this.from=from;this.to=to}return function(str,direction){var outerType=direction=="ltr"?"L":"R";if(str.length==0||direction=="ltr"&&!bidiRE.test(str)){return false}var len=str.length,types=[];for(var i=0;i<len;++i){types.push(charType(str.charCodeAt(i)))}for(var i$1=0,prev=outerType;i$1<len;++i$1){var type=types[i$1];if(type=="m"){types[i$1]=prev}else{prev=type}}for(var i$2=0,cur=outerType;i$2<len;++i$2){var type$1=types[i$2];if(type$1=="1"&&cur=="r"){types[i$2]="n"}else if(isStrong.test(type$1)){cur=type$1;if(type$1=="r"){types[i$2]="R"}}}for(var i$3=1,prev$1=types[0];i$3<len-1;++i$3){var type$2=types[i$3];if(type$2=="+"&&prev$1=="1"&&types[i$3+1]=="1"){types[i$3]="1"}else if(type$2==","&&prev$1==types[i$3+1]&&(prev$1=="1"||prev$1=="n")){types[i$3]=prev$1}prev$1=type$2}for(var i$4=0;i$4<len;++i$4){var type$3=types[i$4];if(type$3==","){types[i$4]="N"}else if(type$3=="%"){var end=void 0;for(end=i$4+1;end<len&&types[end]=="%";++end){}var replace=i$4&&types[i$4-1]=="!"||end<len&&types[end]=="1"?"1":"N";for(var j=i$4;j<end;++j){types[j]=replace}i$4=end-1}}for(var i$5=0,cur$1=outerType;i$5<len;++i$5){var type$4=types[i$5];if(cur$1=="L"&&type$4=="1"){types[i$5]="L"}else if(isStrong.test(type$4)){cur$1=type$4}}for(var i$6=0;i$6<len;++i$6){if(isNeutral.test(types[i$6])){var end$1=void 0;for(end$1=i$6+1;end$1<len&&isNeutral.test(types[end$1]);++end$1){}var before=(i$6?types[i$6-1]:outerType)=="L";var after=(end$1<len?types[end$1]:outerType)=="L";var replace$1=before==after?before?"L":"R":outerType;for(var j$1=i$6;j$1<end$1;++j$1){types[j$1]=replace$1}i$6=end$1-1}}var order=[],m;for(var i$7=0;i$7<len;){if(countsAsLeft.test(types[i$7])){var start=i$7;for(++i$7;i$7<len&&countsAsLeft.test(types[i$7]);++i$7){}order.push(new BidiSpan(0,start,i$7))}else{var pos=i$7,at=order.length;for(++i$7;i$7<len&&types[i$7]!="L";++i$7){}for(var j$2=pos;j$2<i$7;){if(countsAsNum.test(types[j$2])){if(pos<j$2){order.splice(at,0,new BidiSpan(1,pos,j$2))}var nstart=j$2;for(++j$2;j$2<i$7&&countsAsNum.test(types[j$2]);++j$2){}order.splice(at,0,new BidiSpan(2,nstart,j$2));pos=j$2}else{++j$2}}if(pos<i$7){order.splice(at,0,new BidiSpan(1,pos,i$7))}}}if(direction=="ltr"){if(order[0].level==1&&(m=str.match(/^\s+/))){order[0].from=m[0].length;order.unshift(new BidiSpan(0,0,m[0].length))}if(lst(order).level==1&&(m=str.match(/\s+$/))){lst(order).to-=m[0].length;order.push(new BidiSpan(0,len-m[0].length,len))}}return direction=="rtl"?order.reverse():order}}();function getOrder(line,direction){var order=line.order;if(order==null){order=line.order=bidiOrdering(line.text,direction)}return order}var noHandlers=[];var on=function(emitter,type,f){if(emitter.addEventListener){emitter.addEventListener(type,f,false)}else if(emitter.attachEvent){emitter.attachEvent("on"+type,f)}else{var map$$1=emitter._handlers||(emitter._handlers={});map$$1[type]=(map$$1[type]||noHandlers).concat(f)}};function getHandlers(emitter,type){return emitter._handlers&&emitter._handlers[type]||noHandlers}function off(emitter,type,f){if(emitter.removeEventListener){emitter.removeEventListener(type,f,false)}else if(emitter.detachEvent){emitter.detachEvent("on"+type,f)}else{var map$$1=emitter._handlers,arr=map$$1&&map$$1[type];if(arr){var index=indexOf(arr,f);if(index>-1){map$$1[type]=arr.slice(0,index).concat(arr.slice(index+1))}}}}function signal(emitter,type){var handlers=getHandlers(emitter,type);if(!handlers.length){return}var args=Array.prototype.slice.call(arguments,2);for(var i=0;i<handlers.length;++i){handlers[i].apply(null,args)}}function signalDOMEvent(cm,e,override){if(typeof e=="string"){e={type:e,preventDefault:function(){this.defaultPrevented=true}}}signal(cm,override||e.type,cm,e);return e_defaultPrevented(e)||e.codemirrorIgnore}function signalCursorActivity(cm){var arr=cm._handlers&&cm._handlers.cursorActivity;if(!arr){return}var set=cm.curOp.cursorActivityHandlers||(cm.curOp.cursorActivityHandlers=[]);for(var i=0;i<arr.length;++i){if(indexOf(set,arr[i])==-1){set.push(arr[i])}}}function hasHandler(emitter,type){return getHandlers(emitter,type).length>0}function eventMixin(ctor){ctor.prototype.on=function(type,f){on(this,type,f)};ctor.prototype.off=function(type,f){off(this,type,f)}}function e_preventDefault(e){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}}function e_stopPropagation(e){if(e.stopPropagation){e.stopPropagation()}else{e.cancelBubble=true}}function e_defaultPrevented(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==false}function e_stop(e){e_preventDefault(e);e_stopPropagation(e)}function e_target(e){return e.target||e.srcElement}function e_button(e){var b=e.which;if(b==null){if(e.button&1){b=1}else if(e.button&2){b=3}else if(e.button&4){b=2}}if(mac&&e.ctrlKey&&b==1){b=3}return b}var dragAndDrop=function(){if(ie&&ie_version<9){return false}var div=elt("div");return"draggable"in div||"dragDrop"in div}();var zwspSupported;function zeroWidthElement(measure){if(zwspSupported==null){var test=elt("span","​");removeChildrenAndAdd(measure,elt("span",[test,document.createTextNode("x")]));if(measure.firstChild.offsetHeight!=0){zwspSupported=test.offsetWidth<=1&&test.offsetHeight>2&&!(ie&&ie_version<8)}}var node=zwspSupported?elt("span","​"):elt("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");node.setAttribute("cm-text","");return node}var badBidiRects;function hasBadBidiRects(measure){if(badBidiRects!=null){return badBidiRects}var txt=removeChildrenAndAdd(measure,document.createTextNode("AخA"));var r0=range(txt,0,1).getBoundingClientRect();var r1=range(txt,1,2).getBoundingClientRect();removeChildren(measure);if(!r0||r0.left==r0.right){return false}return badBidiRects=r1.right-r0.right<3}var splitLinesAuto="\n\nb".split(/\n/).length!=3?function(string){var pos=0,result=[],l=string.length;while(pos<=l){var nl=string.indexOf("\n",pos);if(nl==-1){nl=string.length}var line=string.slice(pos,string.charAt(nl-1)=="\r"?nl-1:nl);var rt=line.indexOf("\r");if(rt!=-1){result.push(line.slice(0,rt));pos+=rt+1}else{result.push(line);pos=nl+1}}return result}:function(string){return string.split(/\r\n?|\n/)};var hasSelection=window.getSelection?function(te){try{return te.selectionStart!=te.selectionEnd}catch(e){return false}}:function(te){var range$$1;try{range$$1=te.ownerDocument.selection.createRange()}catch(e){}if(!range$$1||range$$1.parentElement()!=te){return false}return range$$1.compareEndPoints("StartToEnd",range$$1)!=0};var hasCopyEvent=function(){var e=elt("div");if("oncopy"in e){return true}e.setAttribute("oncopy","return;");return typeof e.oncopy=="function"}();var badZoomedRects=null;function hasBadZoomedRects(measure){if(badZoomedRects!=null){return badZoomedRects}var node=removeChildrenAndAdd(measure,elt("span","x"));var normal=node.getBoundingClientRect();var fromRange=range(node,0,1).getBoundingClientRect();return badZoomedRects=Math.abs(normal.left-fromRange.left)>1}var modes={},mimeModes={};function defineMode(name,mode){if(arguments.length>2){mode.dependencies=Array.prototype.slice.call(arguments,2)}modes[name]=mode}function defineMIME(mime,spec){mimeModes[mime]=spec}function resolveMode(spec){if(typeof spec=="string"&&mimeModes.hasOwnProperty(spec)){spec=mimeModes[spec]}else if(spec&&typeof spec.name=="string"&&mimeModes.hasOwnProperty(spec.name)){var found=mimeModes[spec.name];if(typeof found=="string"){found={name:found}}spec=createObj(found,spec);spec.name=found.name}else if(typeof spec=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(spec)){return resolveMode("application/xml")}else if(typeof spec=="string"&&/^[\w\-]+\/[\w\-]+\+json$/.test(spec)){return resolveMode("application/json")}if(typeof spec=="string"){return{name:spec}}else{return spec||{name:"null"}}}function getMode(options,spec){spec=resolveMode(spec);var mfactory=modes[spec.name];if(!mfactory){return getMode(options,"text/plain")}var modeObj=mfactory(options,spec);if(modeExtensions.hasOwnProperty(spec.name)){var exts=modeExtensions[spec.name];for(var prop in exts){if(!exts.hasOwnProperty(prop)){continue}if(modeObj.hasOwnProperty(prop)){modeObj["_"+prop]=modeObj[prop]}modeObj[prop]=exts[prop]}}modeObj.name=spec.name;if(spec.helperType){modeObj.helperType=spec.helperType}if(spec.modeProps){for(var prop$1 in spec.modeProps){modeObj[prop$1]=spec.modeProps[prop$1]}}return modeObj}var modeExtensions={};function extendMode(mode,properties){var exts=modeExtensions.hasOwnProperty(mode)?modeExtensions[mode]:modeExtensions[mode]={};copyObj(properties,exts)}function copyState(mode,state){if(state===true){return state}if(mode.copyState){return mode.copyState(state)}var nstate={};for(var n in state){var val=state[n];if(val instanceof Array){val=val.concat([])}nstate[n]=val}return nstate}function innerMode(mode,state){var info;while(mode.innerMode){info=mode.innerMode(state);if(!info||info.mode==mode){break}state=info.state;mode=info.mode}return info||{mode:mode,state:state}}function startState(mode,a1,a2){return mode.startState?mode.startState(a1,a2):true}var StringStream=function(string,tabSize,lineOracle){this.pos=this.start=0;this.string=string;this.tabSize=tabSize||8;this.lastColumnPos=this.lastColumnValue=0;this.lineStart=0;this.lineOracle=lineOracle};StringStream.prototype.eol=function(){return this.pos>=this.string.length};StringStream.prototype.sol=function(){return this.pos==this.lineStart};StringStream.prototype.peek=function(){return this.string.charAt(this.pos)||undefined};StringStream.prototype.next=function(){if(this.pos<this.string.length){return this.string.charAt(this.pos++)}};StringStream.prototype.eat=function(match){var ch=this.string.charAt(this.pos);var ok;if(typeof match=="string"){ok=ch==match}else{ok=ch&&(match.test?match.test(ch):match(ch))}if(ok){++this.pos;return ch}};StringStream.prototype.eatWhile=function(match){var start=this.pos;while(this.eat(match)){}return this.pos>start};StringStream.prototype.eatSpace=function(){var start=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos))){++this.pos}return this.pos>start};StringStream.prototype.skipToEnd=function(){this.pos=this.string.length};StringStream.prototype.skipTo=function(ch){var found=this.string.indexOf(ch,this.pos);if(found>-1){this.pos=found;return true}};StringStream.prototype.backUp=function(n){this.pos-=n};StringStream.prototype.column=function(){if(this.lastColumnPos<this.start){this.lastColumnValue=countColumn(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue);this.lastColumnPos=this.start}return this.lastColumnValue-(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0)};StringStream.prototype.indentation=function(){return countColumn(this.string,null,this.tabSize)-(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0)};StringStream.prototype.match=function(pattern,consume,caseInsensitive){if(typeof pattern=="string"){var cased=function(str){return caseInsensitive?str.toLowerCase():str};var substr=this.string.substr(this.pos,pattern.length);if(cased(substr)==cased(pattern)){if(consume!==false){this.pos+=pattern.length}return true}}else{var match=this.string.slice(this.pos).match(pattern);if(match&&match.index>0){return null}if(match&&consume!==false){this.pos+=match[0].length}return match}};StringStream.prototype.current=function(){return this.string.slice(this.start,this.pos)};StringStream.prototype.hideFirstChars=function(n,inner){this.lineStart+=n;try{return inner()}finally{this.lineStart-=n}};StringStream.prototype.lookAhead=function(n){var oracle=this.lineOracle;return oracle&&oracle.lookAhead(n)};StringStream.prototype.baseToken=function(){var oracle=this.lineOracle;return oracle&&oracle.baseToken(this.pos)};function getLine(doc,n){n-=doc.first;if(n<0||n>=doc.size){throw new Error("There is no line "+(n+doc.first)+" in the document.")}var chunk=doc;while(!chunk.lines){for(var i=0;;++i){var child=chunk.children[i],sz=child.chunkSize();if(n<sz){chunk=child;break}n-=sz}}return chunk.lines[n]}function getBetween(doc,start,end){var out=[],n=start.line;doc.iter(start.line,end.line+1,function(line){var text=line.text;if(n==end.line){text=text.slice(0,end.ch)}if(n==start.line){text=text.slice(start.ch)}out.push(text);++n});return out}function getLines(doc,from,to){var out=[];doc.iter(from,to,function(line){out.push(line.text)});return out}function updateLineHeight(line,height){var diff=height-line.height;if(diff){for(var n=line;n;n=n.parent){n.height+=diff}}}function lineNo(line){if(line.parent==null){return null}var cur=line.parent,no=indexOf(cur.lines,line);for(var chunk=cur.parent;chunk;cur=chunk,chunk=chunk.parent){for(var i=0;;++i){if(chunk.children[i]==cur){break}no+=chunk.children[i].chunkSize()}}return no+cur.first}function lineAtHeight(chunk,h){var n=chunk.first;outer:do{for(var i$1=0;i$1<chunk.children.length;++i$1){var child=chunk.children[i$1],ch=child.height;if(h<ch){chunk=child;continue outer}h-=ch;n+=child.chunkSize()}return n}while(!chunk.lines);var i=0;for(;i<chunk.lines.length;++i){var line=chunk.lines[i],lh=line.height;if(h<lh){break}h-=lh}return n+i}function isLine(doc,l){return l>=doc.first&&l<doc.first+doc.size}function lineNumberFor(options,i){return String(options.lineNumberFormatter(i+options.firstLineNumber))}function Pos(line,ch,sticky){if(sticky===void 0)sticky=null;if(!(this instanceof Pos)){return new Pos(line,ch,sticky)}this.line=line;this.ch=ch;this.sticky=sticky}function cmp(a,b){return a.line-b.line||a.ch-b.ch}function equalCursorPos(a,b){return a.sticky==b.sticky&&cmp(a,b)==0}function copyPos(x){return Pos(x.line,x.ch)}function maxPos(a,b){return cmp(a,b)<0?b:a}function minPos(a,b){return cmp(a,b)<0?a:b}function clipLine(doc,n){return Math.max(doc.first,Math.min(n,doc.first+doc.size-1))}function clipPos(doc,pos){if(pos.line<doc.first){return Pos(doc.first,0)}var last=doc.first+doc.size-1;if(pos.line>last){return Pos(last,getLine(doc,last).text.length)}return clipToLen(pos,getLine(doc,pos.line).text.length)}function clipToLen(pos,linelen){var ch=pos.ch;if(ch==null||ch>linelen){return Pos(pos.line,linelen)}else if(ch<0){return Pos(pos.line,0)}else{return pos}}function clipPosArray(doc,array){var out=[];for(var i=0;i<array.length;i++){out[i]=clipPos(doc,array[i])}return out}var SavedContext=function(state,lookAhead){this.state=state;this.lookAhead=lookAhead};var Context=function(doc,state,line,lookAhead){this.state=state;this.doc=doc;this.line=line;this.maxLookAhead=lookAhead||0;this.baseTokens=null;this.baseTokenPos=1};Context.prototype.lookAhead=function(n){var line=this.doc.getLine(this.line+n);if(line!=null&&n>this.maxLookAhead){this.maxLookAhead=n}return line};Context.prototype.baseToken=function(n){if(!this.baseTokens){return null}while(this.baseTokens[this.baseTokenPos]<=n){this.baseTokenPos+=2}var type=this.baseTokens[this.baseTokenPos+1];return{type:type&&type.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-n}};Context.prototype.nextLine=function(){this.line++;if(this.maxLookAhead>0){this.maxLookAhead--}};Context.fromSaved=function(doc,saved,line){if(saved instanceof SavedContext){return new Context(doc,copyState(doc.mode,saved.state),line,saved.lookAhead)}else{return new Context(doc,copyState(doc.mode,saved),line)}};Context.prototype.save=function(copy){var state=copy!==false?copyState(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new SavedContext(state,this.maxLookAhead):state};function highlightLine(cm,line,context,forceToEnd){var st=[cm.state.modeGen],lineClasses={};runMode(cm,line.text,cm.doc.mode,context,function(end,style){return st.push(end,style)},lineClasses,forceToEnd);var state=context.state;var loop=function(o){context.baseTokens=st;var overlay=cm.state.overlays[o],i=1,at=0;context.state=true;runMode(cm,line.text,overlay.mode,context,function(end,style){var start=i;while(at<end){var i_end=st[i];if(i_end>end){st.splice(i,1,end,st[i+1],i_end)}i+=2;at=Math.min(end,i_end)}if(!style){return}if(overlay.opaque){st.splice(start,i-start,end,"overlay "+style);i=start+2}else{for(;start<i;start+=2){var cur=st[start+1];st[start+1]=(cur?cur+" ":"")+"overlay "+style}}},lineClasses);context.state=state;context.baseTokens=null;context.baseTokenPos=1};for(var o=0;o<cm.state.overlays.length;++o)loop(o);return{styles:st,classes:lineClasses.bgClass||lineClasses.textClass?lineClasses:null}}function getLineStyles(cm,line,updateFrontier){if(!line.styles||line.styles[0]!=cm.state.modeGen){var context=getContextBefore(cm,lineNo(line));var resetState=line.text.length>cm.options.maxHighlightLength&&copyState(cm.doc.mode,context.state);var result=highlightLine(cm,line,context);if(resetState){context.state=resetState}line.stateAfter=context.save(!resetState);line.styles=result.styles;if(result.classes){line.styleClasses=result.classes}else if(line.styleClasses){line.styleClasses=null}if(updateFrontier===cm.doc.highlightFrontier){cm.doc.modeFrontier=Math.max(cm.doc.modeFrontier,++cm.doc.highlightFrontier)}}return line.styles}function getContextBefore(cm,n,precise){var doc=cm.doc,display=cm.display;if(!doc.mode.startState){return new Context(doc,true,n)}var start=findStartLine(cm,n,precise);var saved=start>doc.first&&getLine(doc,start-1).stateAfter;var context=saved?Context.fromSaved(doc,saved,start):new Context(doc,startState(doc.mode),start);doc.iter(start,n,function(line){processLine(cm,line.text,context);var pos=context.line;line.stateAfter=pos==n-1||pos%5==0||pos>=display.viewFrom&&pos<display.viewTo?context.save():null;context.nextLine()});if(precise){doc.modeFrontier=context.line}return context}function processLine(cm,text,context,startAt){var mode=cm.doc.mode;var stream=new StringStream(text,cm.options.tabSize,context);stream.start=stream.pos=startAt||0;if(text==""){callBlankLine(mode,context.state)}while(!stream.eol()){readToken(mode,stream,context.state);stream.start=stream.pos}}function callBlankLine(mode,state){if(mode.blankLine){return mode.blankLine(state)}if(!mode.innerMode){return}var inner=innerMode(mode,state);if(inner.mode.blankLine){return inner.mode.blankLine(inner.state)}}function readToken(mode,stream,state,inner){for(var i=0;i<10;i++){if(inner){inner[0]=innerMode(mode,state).mode}var style=mode.token(stream,state);if(stream.pos>stream.start){return style}}throw new Error("Mode "+mode.name+" failed to advance stream.")}var Token=function(stream,type,state){this.start=stream.start;this.end=stream.pos;this.string=stream.current();this.type=type||null;this.state=state};function takeToken(cm,pos,precise,asArray){var doc=cm.doc,mode=doc.mode,style;pos=clipPos(doc,pos);var line=getLine(doc,pos.line),context=getContextBefore(cm,pos.line,precise);var stream=new StringStream(line.text,cm.options.tabSize,context),tokens;if(asArray){tokens=[]}while((asArray||stream.pos<pos.ch)&&!stream.eol()){stream.start=stream.pos;style=readToken(mode,stream,context.state);if(asArray){tokens.push(new Token(stream,style,copyState(doc.mode,context.state)))}}return asArray?tokens:new Token(stream,style,context.state)}function extractLineClasses(type,output){if(type){for(;;){var lineClass=type.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!lineClass){break}type=type.slice(0,lineClass.index)+type.slice(lineClass.index+lineClass[0].length);var prop=lineClass[1]?"bgClass":"textClass";if(output[prop]==null){output[prop]=lineClass[2]}else if(!new RegExp("(?:^|s)"+lineClass[2]+"(?:$|s)").test(output[prop])){output[prop]+=" "+lineClass[2]}}}return type}function runMode(cm,text,mode,context,f,lineClasses,forceToEnd){var flattenSpans=mode.flattenSpans;if(flattenSpans==null){flattenSpans=cm.options.flattenSpans}var curStart=0,curStyle=null;var stream=new StringStream(text,cm.options.tabSize,context),style;var inner=cm.options.addModeClass&&[null];if(text==""){extractLineClasses(callBlankLine(mode,context.state),lineClasses)}while(!stream.eol()){if(stream.pos>cm.options.maxHighlightLength){flattenSpans=false;if(forceToEnd){processLine(cm,text,context,stream.pos)}stream.pos=text.length;style=null}else{style=extractLineClasses(readToken(mode,stream,context.state,inner),lineClasses)}if(inner){var mName=inner[0].name;if(mName){style="m-"+(style?mName+" "+style:mName)}}if(!flattenSpans||curStyle!=style){while(curStart<stream.start){curStart=Math.min(stream.start,curStart+5e3);f(curStart,curStyle)}curStyle=style}stream.start=stream.pos}while(curStart<stream.pos){var pos=Math.min(stream.pos,curStart+5e3);f(pos,curStyle);curStart=pos}}function findStartLine(cm,n,precise){var minindent,minline,doc=cm.doc;var lim=precise?-1:n-(cm.doc.mode.innerMode?1e3:100);for(var search=n;search>lim;--search){if(search<=doc.first){return doc.first}var line=getLine(doc,search-1),after=line.stateAfter;if(after&&(!precise||search+(after instanceof SavedContext?after.lookAhead:0)<=doc.modeFrontier)){return search}var indented=countColumn(line.text,null,cm.options.tabSize);if(minline==null||minindent>indented){minline=search-1;minindent=indented}}return minline}function retreatFrontier(doc,n){doc.modeFrontier=Math.min(doc.modeFrontier,n);if(doc.highlightFrontier<n-10){return}var start=doc.first;for(var line=n-1;line>start;line--){var saved=getLine(doc,line).stateAfter;if(saved&&(!(saved instanceof SavedContext)||line+saved.lookAhead<n)){start=line+1;break}}doc.highlightFrontier=Math.min(doc.highlightFrontier,start)}var sawReadOnlySpans=false,sawCollapsedSpans=false;function seeReadOnlySpans(){sawReadOnlySpans=true}function seeCollapsedSpans(){sawCollapsedSpans=true}
function MarkedSpan(marker,from,to){this.marker=marker;this.from=from;this.to=to}function getMarkedSpanFor(spans,marker){if(spans){for(var i=0;i<spans.length;++i){var span=spans[i];if(span.marker==marker){return span}}}}function removeMarkedSpan(spans,span){var r;for(var i=0;i<spans.length;++i){if(spans[i]!=span){(r||(r=[])).push(spans[i])}}return r}function addMarkedSpan(line,span){line.markedSpans=line.markedSpans?line.markedSpans.concat([span]):[span];span.marker.attachLine(line)}function markedSpansBefore(old,startCh,isInsert){var nw;if(old){for(var i=0;i<old.length;++i){var span=old[i],marker=span.marker;var startsBefore=span.from==null||(marker.inclusiveLeft?span.from<=startCh:span.from<startCh);if(startsBefore||span.from==startCh&&marker.type=="bookmark"&&(!isInsert||!span.marker.insertLeft)){var endsAfter=span.to==null||(marker.inclusiveRight?span.to>=startCh:span.to>startCh);(nw||(nw=[])).push(new MarkedSpan(marker,span.from,endsAfter?null:span.to))}}}return nw}function markedSpansAfter(old,endCh,isInsert){var nw;if(old){for(var i=0;i<old.length;++i){var span=old[i],marker=span.marker;var endsAfter=span.to==null||(marker.inclusiveRight?span.to>=endCh:span.to>endCh);if(endsAfter||span.from==endCh&&marker.type=="bookmark"&&(!isInsert||span.marker.insertLeft)){var startsBefore=span.from==null||(marker.inclusiveLeft?span.from<=endCh:span.from<endCh);(nw||(nw=[])).push(new MarkedSpan(marker,startsBefore?null:span.from-endCh,span.to==null?null:span.to-endCh))}}}return nw}function stretchSpansOverChange(doc,change){if(change.full){return null}var oldFirst=isLine(doc,change.from.line)&&getLine(doc,change.from.line).markedSpans;var oldLast=isLine(doc,change.to.line)&&getLine(doc,change.to.line).markedSpans;if(!oldFirst&&!oldLast){return null}var startCh=change.from.ch,endCh=change.to.ch,isInsert=cmp(change.from,change.to)==0;var first=markedSpansBefore(oldFirst,startCh,isInsert);var last=markedSpansAfter(oldLast,endCh,isInsert);var sameLine=change.text.length==1,offset=lst(change.text).length+(sameLine?startCh:0);if(first){for(var i=0;i<first.length;++i){var span=first[i];if(span.to==null){var found=getMarkedSpanFor(last,span.marker);if(!found){span.to=startCh}else if(sameLine){span.to=found.to==null?null:found.to+offset}}}}if(last){for(var i$1=0;i$1<last.length;++i$1){var span$1=last[i$1];if(span$1.to!=null){span$1.to+=offset}if(span$1.from==null){var found$1=getMarkedSpanFor(first,span$1.marker);if(!found$1){span$1.from=offset;if(sameLine){(first||(first=[])).push(span$1)}}}else{span$1.from+=offset;if(sameLine){(first||(first=[])).push(span$1)}}}}if(first){first=clearEmptySpans(first)}if(last&&last!=first){last=clearEmptySpans(last)}var newMarkers=[first];if(!sameLine){var gap=change.text.length-2,gapMarkers;if(gap>0&&first){for(var i$2=0;i$2<first.length;++i$2){if(first[i$2].to==null){(gapMarkers||(gapMarkers=[])).push(new MarkedSpan(first[i$2].marker,null,null))}}}for(var i$3=0;i$3<gap;++i$3){newMarkers.push(gapMarkers)}newMarkers.push(last)}return newMarkers}function clearEmptySpans(spans){for(var i=0;i<spans.length;++i){var span=spans[i];if(span.from!=null&&span.from==span.to&&span.marker.clearWhenEmpty!==false){spans.splice(i--,1)}}if(!spans.length){return null}return spans}function removeReadOnlyRanges(doc,from,to){var markers=null;doc.iter(from.line,to.line+1,function(line){if(line.markedSpans){for(var i=0;i<line.markedSpans.length;++i){var mark=line.markedSpans[i].marker;if(mark.readOnly&&(!markers||indexOf(markers,mark)==-1)){(markers||(markers=[])).push(mark)}}}});if(!markers){return null}var parts=[{from:from,to:to}];for(var i=0;i<markers.length;++i){var mk=markers[i],m=mk.find(0);for(var j=0;j<parts.length;++j){var p=parts[j];if(cmp(p.to,m.from)<0||cmp(p.from,m.to)>0){continue}var newParts=[j,1],dfrom=cmp(p.from,m.from),dto=cmp(p.to,m.to);if(dfrom<0||!mk.inclusiveLeft&&!dfrom){newParts.push({from:p.from,to:m.from})}if(dto>0||!mk.inclusiveRight&&!dto){newParts.push({from:m.to,to:p.to})}parts.splice.apply(parts,newParts);j+=newParts.length-3}}return parts}function detachMarkedSpans(line){var spans=line.markedSpans;if(!spans){return}for(var i=0;i<spans.length;++i){spans[i].marker.detachLine(line)}line.markedSpans=null}function attachMarkedSpans(line,spans){if(!spans){return}for(var i=0;i<spans.length;++i){spans[i].marker.attachLine(line)}line.markedSpans=spans}function extraLeft(marker){return marker.inclusiveLeft?-1:0}function extraRight(marker){return marker.inclusiveRight?1:0}function compareCollapsedMarkers(a,b){var lenDiff=a.lines.length-b.lines.length;if(lenDiff!=0){return lenDiff}var aPos=a.find(),bPos=b.find();var fromCmp=cmp(aPos.from,bPos.from)||extraLeft(a)-extraLeft(b);if(fromCmp){return-fromCmp}var toCmp=cmp(aPos.to,bPos.to)||extraRight(a)-extraRight(b);if(toCmp){return toCmp}return b.id-a.id}function collapsedSpanAtSide(line,start){var sps=sawCollapsedSpans&&line.markedSpans,found;if(sps){for(var sp=void 0,i=0;i<sps.length;++i){sp=sps[i];if(sp.marker.collapsed&&(start?sp.from:sp.to)==null&&(!found||compareCollapsedMarkers(found,sp.marker)<0)){found=sp.marker}}}return found}function collapsedSpanAtStart(line){return collapsedSpanAtSide(line,true)}function collapsedSpanAtEnd(line){return collapsedSpanAtSide(line,false)}function collapsedSpanAround(line,ch){var sps=sawCollapsedSpans&&line.markedSpans,found;if(sps){for(var i=0;i<sps.length;++i){var sp=sps[i];if(sp.marker.collapsed&&(sp.from==null||sp.from<ch)&&(sp.to==null||sp.to>ch)&&(!found||compareCollapsedMarkers(found,sp.marker)<0)){found=sp.marker}}}return found}function conflictingCollapsedRange(doc,lineNo$$1,from,to,marker){var line=getLine(doc,lineNo$$1);var sps=sawCollapsedSpans&&line.markedSpans;if(sps){for(var i=0;i<sps.length;++i){var sp=sps[i];if(!sp.marker.collapsed){continue}var found=sp.marker.find(0);var fromCmp=cmp(found.from,from)||extraLeft(sp.marker)-extraLeft(marker);var toCmp=cmp(found.to,to)||extraRight(sp.marker)-extraRight(marker);if(fromCmp>=0&&toCmp<=0||fromCmp<=0&&toCmp>=0){continue}if(fromCmp<=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.to,from)>=0:cmp(found.to,from)>0)||fromCmp>=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.from,to)<=0:cmp(found.from,to)<0)){return true}}}}function visualLine(line){var merged;while(merged=collapsedSpanAtStart(line)){line=merged.find(-1,true).line}return line}function visualLineEnd(line){var merged;while(merged=collapsedSpanAtEnd(line)){line=merged.find(1,true).line}return line}function visualLineContinued(line){var merged,lines;while(merged=collapsedSpanAtEnd(line)){line=merged.find(1,true).line;(lines||(lines=[])).push(line)}return lines}function visualLineNo(doc,lineN){var line=getLine(doc,lineN),vis=visualLine(line);if(line==vis){return lineN}return lineNo(vis)}function visualLineEndNo(doc,lineN){if(lineN>doc.lastLine()){return lineN}var line=getLine(doc,lineN),merged;if(!lineIsHidden(doc,line)){return lineN}while(merged=collapsedSpanAtEnd(line)){line=merged.find(1,true).line}return lineNo(line)+1}function lineIsHidden(doc,line){var sps=sawCollapsedSpans&&line.markedSpans;if(sps){for(var sp=void 0,i=0;i<sps.length;++i){sp=sps[i];if(!sp.marker.collapsed){continue}if(sp.from==null){return true}if(sp.marker.widgetNode){continue}if(sp.from==0&&sp.marker.inclusiveLeft&&lineIsHiddenInner(doc,line,sp)){return true}}}}function lineIsHiddenInner(doc,line,span){if(span.to==null){var end=span.marker.find(1,true);return lineIsHiddenInner(doc,end.line,getMarkedSpanFor(end.line.markedSpans,span.marker))}if(span.marker.inclusiveRight&&span.to==line.text.length){return true}for(var sp=void 0,i=0;i<line.markedSpans.length;++i){sp=line.markedSpans[i];if(sp.marker.collapsed&&!sp.marker.widgetNode&&sp.from==span.to&&(sp.to==null||sp.to!=span.from)&&(sp.marker.inclusiveLeft||span.marker.inclusiveRight)&&lineIsHiddenInner(doc,line,sp)){return true}}}function heightAtLine(lineObj){lineObj=visualLine(lineObj);var h=0,chunk=lineObj.parent;for(var i=0;i<chunk.lines.length;++i){var line=chunk.lines[i];if(line==lineObj){break}else{h+=line.height}}for(var p=chunk.parent;p;chunk=p,p=chunk.parent){for(var i$1=0;i$1<p.children.length;++i$1){var cur=p.children[i$1];if(cur==chunk){break}else{h+=cur.height}}}return h}function lineLength(line){if(line.height==0){return 0}var len=line.text.length,merged,cur=line;while(merged=collapsedSpanAtStart(cur)){var found=merged.find(0,true);cur=found.from.line;len+=found.from.ch-found.to.ch}cur=line;while(merged=collapsedSpanAtEnd(cur)){var found$1=merged.find(0,true);len-=cur.text.length-found$1.from.ch;cur=found$1.to.line;len+=cur.text.length-found$1.to.ch}return len}function findMaxLine(cm){var d=cm.display,doc=cm.doc;d.maxLine=getLine(doc,doc.first);d.maxLineLength=lineLength(d.maxLine);d.maxLineChanged=true;doc.iter(function(line){var len=lineLength(line);if(len>d.maxLineLength){d.maxLineLength=len;d.maxLine=line}})}var Line=function(text,markedSpans,estimateHeight){this.text=text;attachMarkedSpans(this,markedSpans);this.height=estimateHeight?estimateHeight(this):1};Line.prototype.lineNo=function(){return lineNo(this)};eventMixin(Line);function updateLine(line,text,markedSpans,estimateHeight){line.text=text;if(line.stateAfter){line.stateAfter=null}if(line.styles){line.styles=null}if(line.order!=null){line.order=null}detachMarkedSpans(line);attachMarkedSpans(line,markedSpans);var estHeight=estimateHeight?estimateHeight(line):1;if(estHeight!=line.height){updateLineHeight(line,estHeight)}}function cleanUpLine(line){line.parent=null;detachMarkedSpans(line)}var styleToClassCache={},styleToClassCacheWithMode={};function interpretTokenStyle(style,options){if(!style||/^\s*$/.test(style)){return null}var cache=options.addModeClass?styleToClassCacheWithMode:styleToClassCache;return cache[style]||(cache[style]=style.replace(/\S+/g,"cm-$&"))}function buildLineContent(cm,lineView){var content=eltP("span",null,null,webkit?"padding-right: .1px":null);var builder={pre:eltP("pre",[content],"CodeMirror-line"),content:content,col:0,pos:0,cm:cm,trailingSpace:false,splitSpaces:cm.getOption("lineWrapping")};lineView.measure={};for(var i=0;i<=(lineView.rest?lineView.rest.length:0);i++){var line=i?lineView.rest[i-1]:lineView.line,order=void 0;builder.pos=0;builder.addToken=buildToken;if(hasBadBidiRects(cm.display.measure)&&(order=getOrder(line,cm.doc.direction))){builder.addToken=buildTokenBadBidi(builder.addToken,order)}builder.map=[];var allowFrontierUpdate=lineView!=cm.display.externalMeasured&&lineNo(line);insertLineContent(line,builder,getLineStyles(cm,line,allowFrontierUpdate));if(line.styleClasses){if(line.styleClasses.bgClass){builder.bgClass=joinClasses(line.styleClasses.bgClass,builder.bgClass||"")}if(line.styleClasses.textClass){builder.textClass=joinClasses(line.styleClasses.textClass,builder.textClass||"")}}if(builder.map.length==0){builder.map.push(0,0,builder.content.appendChild(zeroWidthElement(cm.display.measure)))}if(i==0){lineView.measure.map=builder.map;lineView.measure.cache={}}else{(lineView.measure.maps||(lineView.measure.maps=[])).push(builder.map);(lineView.measure.caches||(lineView.measure.caches=[])).push({})}}if(webkit){var last=builder.content.lastChild;if(/\bcm-tab\b/.test(last.className)||last.querySelector&&last.querySelector(".cm-tab")){builder.content.className="cm-tab-wrap-hack"}}signal(cm,"renderLine",cm,lineView.line,builder.pre);if(builder.pre.className){builder.textClass=joinClasses(builder.pre.className,builder.textClass||"")}return builder}function defaultSpecialCharPlaceholder(ch){var token=elt("span","•","cm-invalidchar");token.title="\\u"+ch.charCodeAt(0).toString(16);token.setAttribute("aria-label",token.title);return token}function buildToken(builder,text,style,startStyle,endStyle,css,attributes){if(!text){return}var displayText=builder.splitSpaces?splitSpaces(text,builder.trailingSpace):text;var special=builder.cm.state.specialChars,mustWrap=false;var content;if(!special.test(text)){builder.col+=text.length;content=document.createTextNode(displayText);builder.map.push(builder.pos,builder.pos+text.length,content);if(ie&&ie_version<9){mustWrap=true}builder.pos+=text.length}else{content=document.createDocumentFragment();var pos=0;while(true){special.lastIndex=pos;var m=special.exec(text);var skipped=m?m.index-pos:text.length-pos;if(skipped){var txt=document.createTextNode(displayText.slice(pos,pos+skipped));if(ie&&ie_version<9){content.appendChild(elt("span",[txt]))}else{content.appendChild(txt)}builder.map.push(builder.pos,builder.pos+skipped,txt);builder.col+=skipped;builder.pos+=skipped}if(!m){break}pos+=skipped+1;var txt$1=void 0;if(m[0]=="\t"){var tabSize=builder.cm.options.tabSize,tabWidth=tabSize-builder.col%tabSize;txt$1=content.appendChild(elt("span",spaceStr(tabWidth),"cm-tab"));txt$1.setAttribute("role","presentation");txt$1.setAttribute("cm-text","\t");builder.col+=tabWidth}else if(m[0]=="\r"||m[0]=="\n"){txt$1=content.appendChild(elt("span",m[0]=="\r"?"␍":"␤","cm-invalidchar"));txt$1.setAttribute("cm-text",m[0]);builder.col+=1}else{txt$1=builder.cm.options.specialCharPlaceholder(m[0]);txt$1.setAttribute("cm-text",m[0]);if(ie&&ie_version<9){content.appendChild(elt("span",[txt$1]))}else{content.appendChild(txt$1)}builder.col+=1}builder.map.push(builder.pos,builder.pos+1,txt$1);builder.pos++}}builder.trailingSpace=displayText.charCodeAt(text.length-1)==32;if(style||startStyle||endStyle||mustWrap||css){var fullStyle=style||"";if(startStyle){fullStyle+=startStyle}if(endStyle){fullStyle+=endStyle}var token=elt("span",[content],fullStyle,css);if(attributes){for(var attr in attributes){if(attributes.hasOwnProperty(attr)&&attr!="style"&&attr!="class"){token.setAttribute(attr,attributes[attr])}}}return builder.content.appendChild(token)}builder.content.appendChild(content)}function splitSpaces(text,trailingBefore){if(text.length>1&&!/  /.test(text)){return text}var spaceBefore=trailingBefore,result="";for(var i=0;i<text.length;i++){var ch=text.charAt(i);if(ch==" "&&spaceBefore&&(i==text.length-1||text.charCodeAt(i+1)==32)){ch=" "}result+=ch;spaceBefore=ch==" "}return result}function buildTokenBadBidi(inner,order){return function(builder,text,style,startStyle,endStyle,css,attributes){style=style?style+" cm-force-border":"cm-force-border";var start=builder.pos,end=start+text.length;for(;;){var part=void 0;for(var i=0;i<order.length;i++){part=order[i];if(part.to>start&&part.from<=start){break}}if(part.to>=end){return inner(builder,text,style,startStyle,endStyle,css,attributes)}inner(builder,text.slice(0,part.to-start),style,startStyle,null,css,attributes);startStyle=null;text=text.slice(part.to-start);start=part.to}}}function buildCollapsedSpan(builder,size,marker,ignoreWidget){var widget=!ignoreWidget&&marker.widgetNode;if(widget){builder.map.push(builder.pos,builder.pos+size,widget)}if(!ignoreWidget&&builder.cm.display.input.needsContentAttribute){if(!widget){widget=builder.content.appendChild(document.createElement("span"))}widget.setAttribute("cm-marker",marker.id)}if(widget){builder.cm.display.input.setUneditable(widget);builder.content.appendChild(widget)}builder.pos+=size;builder.trailingSpace=false}function insertLineContent(line,builder,styles){var spans=line.markedSpans,allText=line.text,at=0;if(!spans){for(var i$1=1;i$1<styles.length;i$1+=2){builder.addToken(builder,allText.slice(at,at=styles[i$1]),interpretTokenStyle(styles[i$1+1],builder.cm.options))}return}var len=allText.length,pos=0,i=1,text="",style,css;var nextChange=0,spanStyle,spanEndStyle,spanStartStyle,collapsed,attributes;for(;;){if(nextChange==pos){spanStyle=spanEndStyle=spanStartStyle=css="";attributes=null;collapsed=null;nextChange=Infinity;var foundBookmarks=[],endStyles=void 0;for(var j=0;j<spans.length;++j){var sp=spans[j],m=sp.marker;if(m.type=="bookmark"&&sp.from==pos&&m.widgetNode){foundBookmarks.push(m)}else if(sp.from<=pos&&(sp.to==null||sp.to>pos||m.collapsed&&sp.to==pos&&sp.from==pos)){if(sp.to!=null&&sp.to!=pos&&nextChange>sp.to){nextChange=sp.to;spanEndStyle=""}if(m.className){spanStyle+=" "+m.className}if(m.css){css=(css?css+";":"")+m.css}if(m.startStyle&&sp.from==pos){spanStartStyle+=" "+m.startStyle}if(m.endStyle&&sp.to==nextChange){(endStyles||(endStyles=[])).push(m.endStyle,sp.to)}if(m.title){(attributes||(attributes={})).title=m.title}if(m.attributes){for(var attr in m.attributes){(attributes||(attributes={}))[attr]=m.attributes[attr]}}if(m.collapsed&&(!collapsed||compareCollapsedMarkers(collapsed.marker,m)<0)){collapsed=sp}}else if(sp.from>pos&&nextChange>sp.from){nextChange=sp.from}}if(endStyles){for(var j$1=0;j$1<endStyles.length;j$1+=2){if(endStyles[j$1+1]==nextChange){spanEndStyle+=" "+endStyles[j$1]}}}if(!collapsed||collapsed.from==pos){for(var j$2=0;j$2<foundBookmarks.length;++j$2){buildCollapsedSpan(builder,0,foundBookmarks[j$2])}}if(collapsed&&(collapsed.from||0)==pos){buildCollapsedSpan(builder,(collapsed.to==null?len+1:collapsed.to)-pos,collapsed.marker,collapsed.from==null);if(collapsed.to==null){return}if(collapsed.to==pos){collapsed=false}}}if(pos>=len){break}var upto=Math.min(len,nextChange);while(true){if(text){var end=pos+text.length;if(!collapsed){var tokenText=end>upto?text.slice(0,upto-pos):text;builder.addToken(builder,tokenText,style?style+spanStyle:spanStyle,spanStartStyle,pos+tokenText.length==nextChange?spanEndStyle:"",css,attributes)}if(end>=upto){text=text.slice(upto-pos);pos=upto;break}pos=end;spanStartStyle=""}text=allText.slice(at,at=styles[i++]);style=interpretTokenStyle(styles[i++],builder.cm.options)}}}function LineView(doc,line,lineN){this.line=line;this.rest=visualLineContinued(line);this.size=this.rest?lineNo(lst(this.rest))-lineN+1:1;this.node=this.text=null;this.hidden=lineIsHidden(doc,line)}function buildViewArray(cm,from,to){var array=[],nextPos;for(var pos=from;pos<to;pos=nextPos){var view=new LineView(cm.doc,getLine(cm.doc,pos),pos);nextPos=pos+view.size;array.push(view)}return array}var operationGroup=null;function pushOperation(op){if(operationGroup){operationGroup.ops.push(op)}else{op.ownsGroup=operationGroup={ops:[op],delayedCallbacks:[]}}}function fireCallbacksForOps(group){var callbacks=group.delayedCallbacks,i=0;do{for(;i<callbacks.length;i++){callbacks[i].call(null)}for(var j=0;j<group.ops.length;j++){var op=group.ops[j];if(op.cursorActivityHandlers){while(op.cursorActivityCalled<op.cursorActivityHandlers.length){op.cursorActivityHandlers[op.cursorActivityCalled++].call(null,op.cm)}}}}while(i<callbacks.length)}function finishOperation(op,endCb){var group=op.ownsGroup;if(!group){return}try{fireCallbacksForOps(group)}finally{operationGroup=null;endCb(group)}}var orphanDelayedCallbacks=null;function signalLater(emitter,type){var arr=getHandlers(emitter,type);if(!arr.length){return}var args=Array.prototype.slice.call(arguments,2),list;if(operationGroup){list=operationGroup.delayedCallbacks}else if(orphanDelayedCallbacks){list=orphanDelayedCallbacks}else{list=orphanDelayedCallbacks=[];setTimeout(fireOrphanDelayed,0)}var loop=function(i){list.push(function(){return arr[i].apply(null,args)})};for(var i=0;i<arr.length;++i)loop(i)}function fireOrphanDelayed(){var delayed=orphanDelayedCallbacks;orphanDelayedCallbacks=null;for(var i=0;i<delayed.length;++i){delayed[i]()}}function updateLineForChanges(cm,lineView,lineN,dims){for(var j=0;j<lineView.changes.length;j++){var type=lineView.changes[j];if(type=="text"){updateLineText(cm,lineView)}else if(type=="gutter"){updateLineGutter(cm,lineView,lineN,dims)}else if(type=="class"){updateLineClasses(cm,lineView)}else if(type=="widget"){updateLineWidgets(cm,lineView,dims)}}lineView.changes=null}function ensureLineWrapped(lineView){if(lineView.node==lineView.text){lineView.node=elt("div",null,null,"position: relative");if(lineView.text.parentNode){lineView.text.parentNode.replaceChild(lineView.node,lineView.text)}lineView.node.appendChild(lineView.text);if(ie&&ie_version<8){lineView.node.style.zIndex=2}}return lineView.node}function updateLineBackground(cm,lineView){var cls=lineView.bgClass?lineView.bgClass+" "+(lineView.line.bgClass||""):lineView.line.bgClass;if(cls){cls+=" CodeMirror-linebackground"}if(lineView.background){if(cls){lineView.background.className=cls}else{lineView.background.parentNode.removeChild(lineView.background);lineView.background=null}}else if(cls){var wrap=ensureLineWrapped(lineView);lineView.background=wrap.insertBefore(elt("div",null,cls),wrap.firstChild);cm.display.input.setUneditable(lineView.background)}}function getLineContent(cm,lineView){var ext=cm.display.externalMeasured;if(ext&&ext.line==lineView.line){cm.display.externalMeasured=null;lineView.measure=ext.measure;return ext.built}return buildLineContent(cm,lineView)}function updateLineText(cm,lineView){var cls=lineView.text.className;var built=getLineContent(cm,lineView);if(lineView.text==lineView.node){lineView.node=built.pre}lineView.text.parentNode.replaceChild(built.pre,lineView.text);lineView.text=built.pre;if(built.bgClass!=lineView.bgClass||built.textClass!=lineView.textClass){lineView.bgClass=built.bgClass;lineView.textClass=built.textClass;updateLineClasses(cm,lineView)}else if(cls){lineView.text.className=cls}}function updateLineClasses(cm,lineView){updateLineBackground(cm,lineView);if(lineView.line.wrapClass){ensureLineWrapped(lineView).className=lineView.line.wrapClass}else if(lineView.node!=lineView.text){lineView.node.className=""}var textClass=lineView.textClass?lineView.textClass+" "+(lineView.line.textClass||""):lineView.line.textClass;lineView.text.className=textClass||""}function updateLineGutter(cm,lineView,lineN,dims){if(lineView.gutter){lineView.node.removeChild(lineView.gutter);lineView.gutter=null}if(lineView.gutterBackground){lineView.node.removeChild(lineView.gutterBackground);lineView.gutterBackground=null}if(lineView.line.gutterClass){var wrap=ensureLineWrapped(lineView);lineView.gutterBackground=elt("div",null,"CodeMirror-gutter-background "+lineView.line.gutterClass,"left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px; width: "+dims.gutterTotalWidth+"px");cm.display.input.setUneditable(lineView.gutterBackground);wrap.insertBefore(lineView.gutterBackground,lineView.text)}var markers=lineView.line.gutterMarkers;if(cm.options.lineNumbers||markers){var wrap$1=ensureLineWrapped(lineView);var gutterWrap=lineView.gutter=elt("div",null,"CodeMirror-gutter-wrapper","left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px");cm.display.input.setUneditable(gutterWrap);wrap$1.insertBefore(gutterWrap,lineView.text);if(lineView.line.gutterClass){gutterWrap.className+=" "+lineView.line.gutterClass}if(cm.options.lineNumbers&&(!markers||!markers["CodeMirror-linenumbers"])){lineView.lineNumber=gutterWrap.appendChild(elt("div",lineNumberFor(cm.options,lineN),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+dims.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+cm.display.lineNumInnerWidth+"px"))}if(markers){for(var k=0;k<cm.display.gutterSpecs.length;++k){var id=cm.display.gutterSpecs[k].className,found=markers.hasOwnProperty(id)&&markers[id];if(found){gutterWrap.appendChild(elt("div",[found],"CodeMirror-gutter-elt","left: "+dims.gutterLeft[id]+"px; width: "+dims.gutterWidth[id]+"px"))}}}}}function updateLineWidgets(cm,lineView,dims){if(lineView.alignable){lineView.alignable=null}for(var node=lineView.node.firstChild,next=void 0;node;node=next){next=node.nextSibling;if(node.className=="CodeMirror-linewidget"){lineView.node.removeChild(node)}}insertLineWidgets(cm,lineView,dims)}function buildLineElement(cm,lineView,lineN,dims){var built=getLineContent(cm,lineView);lineView.text=lineView.node=built.pre;if(built.bgClass){lineView.bgClass=built.bgClass}if(built.textClass){lineView.textClass=built.textClass}updateLineClasses(cm,lineView);updateLineGutter(cm,lineView,lineN,dims);insertLineWidgets(cm,lineView,dims);return lineView.node}function insertLineWidgets(cm,lineView,dims){insertLineWidgetsFor(cm,lineView.line,lineView,dims,true);if(lineView.rest){for(var i=0;i<lineView.rest.length;i++){insertLineWidgetsFor(cm,lineView.rest[i],lineView,dims,false)}}}function insertLineWidgetsFor(cm,line,lineView,dims,allowAbove){if(!line.widgets){return}var wrap=ensureLineWrapped(lineView);for(var i=0,ws=line.widgets;i<ws.length;++i){var widget=ws[i],node=elt("div",[widget.node],"CodeMirror-linewidget");if(!widget.handleMouseEvents){node.setAttribute("cm-ignore-events","true")}positionLineWidget(widget,node,lineView,dims);cm.display.input.setUneditable(node);if(allowAbove&&widget.above){wrap.insertBefore(node,lineView.gutter||lineView.text)}else{wrap.appendChild(node)}signalLater(widget,"redraw")}}function positionLineWidget(widget,node,lineView,dims){if(widget.noHScroll){(lineView.alignable||(lineView.alignable=[])).push(node);var width=dims.wrapperWidth;node.style.left=dims.fixedPos+"px";if(!widget.coverGutter){width-=dims.gutterTotalWidth;node.style.paddingLeft=dims.gutterTotalWidth+"px"}node.style.width=width+"px"}if(widget.coverGutter){node.style.zIndex=5;node.style.position="relative";if(!widget.noHScroll){node.style.marginLeft=-dims.gutterTotalWidth+"px"}}}function widgetHeight(widget){if(widget.height!=null){return widget.height}var cm=widget.doc.cm;if(!cm){return 0}if(!contains(document.body,widget.node)){var parentStyle="position: relative;";if(widget.coverGutter){parentStyle+="margin-left: -"+cm.display.gutters.offsetWidth+"px;"}if(widget.noHScroll){parentStyle+="width: "+cm.display.wrapper.clientWidth+"px;"}removeChildrenAndAdd(cm.display.measure,elt("div",[widget.node],null,parentStyle))}return widget.height=widget.node.parentNode.offsetHeight}function eventInWidget(display,e){for(var n=e_target(e);n!=display.wrapper;n=n.parentNode){if(!n||n.nodeType==1&&n.getAttribute("cm-ignore-events")=="true"||n.parentNode==display.sizer&&n!=display.mover){return true}}}function paddingTop(display){return display.lineSpace.offsetTop}function paddingVert(display){return display.mover.offsetHeight-display.lineSpace.offsetHeight}function paddingH(display){if(display.cachedPaddingH){return display.cachedPaddingH}var e=removeChildrenAndAdd(display.measure,elt("pre","x","CodeMirror-line-like"));var style=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle;var data={left:parseInt(style.paddingLeft),right:parseInt(style.paddingRight)};if(!isNaN(data.left)&&!isNaN(data.right)){display.cachedPaddingH=data}return data}function scrollGap(cm){return scrollerGap-cm.display.nativeBarWidth}function displayWidth(cm){return cm.display.scroller.clientWidth-scrollGap(cm)-cm.display.barWidth}function displayHeight(cm){return cm.display.scroller.clientHeight-scrollGap(cm)-cm.display.barHeight}function ensureLineHeights(cm,lineView,rect){var wrapping=cm.options.lineWrapping;var curWidth=wrapping&&displayWidth(cm);if(!lineView.measure.heights||wrapping&&lineView.measure.width!=curWidth){var heights=lineView.measure.heights=[];if(wrapping){lineView.measure.width=curWidth;var rects=lineView.text.firstChild.getClientRects();for(var i=0;i<rects.length-1;i++){var cur=rects[i],next=rects[i+1];if(Math.abs(cur.bottom-next.bottom)>2){heights.push((cur.bottom+next.top)/2-rect.top)}}}heights.push(rect.bottom-rect.top)}}function mapFromLineView(lineView,line,lineN){if(lineView.line==line){return{map:lineView.measure.map,cache:lineView.measure.cache}}for(var i=0;i<lineView.rest.length;i++){if(lineView.rest[i]==line){return{map:lineView.measure.maps[i],cache:lineView.measure.caches[i]}}}for(var i$1=0;i$1<lineView.rest.length;i$1++){if(lineNo(lineView.rest[i$1])>lineN){return{map:lineView.measure.maps[i$1],cache:lineView.measure.caches[i$1],before:true}}}}function updateExternalMeasurement(cm,line){line=visualLine(line);var lineN=lineNo(line);var view=cm.display.externalMeasured=new LineView(cm.doc,line,lineN);view.lineN=lineN;var built=view.built=buildLineContent(cm,view);view.text=built.pre;removeChildrenAndAdd(cm.display.lineMeasure,built.pre);return view}function measureChar(cm,line,ch,bias){return measureCharPrepared(cm,prepareMeasureForLine(cm,line),ch,bias)}function findViewForLine(cm,lineN){if(lineN>=cm.display.viewFrom&&lineN<cm.display.viewTo){return cm.display.view[findViewIndex(cm,lineN)]}var ext=cm.display.externalMeasured;if(ext&&lineN>=ext.lineN&&lineN<ext.lineN+ext.size){return ext}}function prepareMeasureForLine(cm,line){var lineN=lineNo(line);var view=findViewForLine(cm,lineN);if(view&&!view.text){view=null}else if(view&&view.changes){updateLineForChanges(cm,view,lineN,getDimensions(cm));cm.curOp.forceUpdate=true}if(!view){view=updateExternalMeasurement(cm,line)}var info=mapFromLineView(view,line,lineN);return{line:line,view:view,rect:null,map:info.map,cache:info.cache,before:info.before,hasHeights:false}}function measureCharPrepared(cm,prepared,ch,bias,varHeight){if(prepared.before){ch=-1}var key=ch+(bias||""),found;if(prepared.cache.hasOwnProperty(key)){found=prepared.cache[key]}else{if(!prepared.rect){prepared.rect=prepared.view.text.getBoundingClientRect()}if(!prepared.hasHeights){ensureLineHeights(cm,prepared.view,prepared.rect);prepared.hasHeights=true}found=measureCharInner(cm,prepared,ch,bias);if(!found.bogus){prepared.cache[key]=found}}return{left:found.left,right:found.right,top:varHeight?found.rtop:found.top,bottom:varHeight?found.rbottom:found.bottom}}var nullRect={left:0,right:0,top:0,bottom:0};function nodeAndOffsetInLineMap(map$$1,ch,bias){var node,start,end,collapse,mStart,mEnd;for(var i=0;i<map$$1.length;i+=3){mStart=map$$1[i];mEnd=map$$1[i+1];if(ch<mStart){start=0;end=1;collapse="left"}else if(ch<mEnd){start=ch-mStart;end=start+1}else if(i==map$$1.length-3||ch==mEnd&&map$$1[i+3]>ch){end=mEnd-mStart;start=end-1;if(ch>=mEnd){collapse="right"}}if(start!=null){node=map$$1[i+2];if(mStart==mEnd&&bias==(node.insertLeft?"left":"right")){collapse=bias}if(bias=="left"&&start==0){while(i&&map$$1[i-2]==map$$1[i-3]&&map$$1[i-1].insertLeft){node=map$$1[(i-=3)+2];collapse="left"}}if(bias=="right"&&start==mEnd-mStart){while(i<map$$1.length-3&&map$$1[i+3]==map$$1[i+4]&&!map$$1[i+5].insertLeft){node=map$$1[(i+=3)+2];collapse="right"}}break}}return{node:node,start:start,end:end,collapse:collapse,coverStart:mStart,coverEnd:mEnd}}function getUsefulRect(rects,bias){var rect=nullRect;if(bias=="left"){for(var i=0;i<rects.length;i++){if((rect=rects[i]).left!=rect.right){break}}}else{for(var i$1=rects.length-1;i$1>=0;i$1--){if((rect=rects[i$1]).left!=rect.right){break}}}return rect}function measureCharInner(cm,prepared,ch,bias){var place=nodeAndOffsetInLineMap(prepared.map,ch,bias);var node=place.node,start=place.start,end=place.end,collapse=place.collapse;var rect;if(node.nodeType==3){for(var i$1=0;i$1<4;i$1++){while(start&&isExtendingChar(prepared.line.text.charAt(place.coverStart+start))){--start}while(place.coverStart+end<place.coverEnd&&isExtendingChar(prepared.line.text.charAt(place.coverStart+end))){++end}if(ie&&ie_version<9&&start==0&&end==place.coverEnd-place.coverStart){rect=node.parentNode.getBoundingClientRect()}else{rect=getUsefulRect(range(node,start,end).getClientRects(),bias)}if(rect.left||rect.right||start==0){break}end=start;start=start-1;collapse="right"}if(ie&&ie_version<11){rect=maybeUpdateRectForZooming(cm.display.measure,rect)}}else{if(start>0){collapse=bias="right"}var rects;if(cm.options.lineWrapping&&(rects=node.getClientRects()).length>1){rect=rects[bias=="right"?rects.length-1:0]}else{rect=node.getBoundingClientRect()}}if(ie&&ie_version<9&&!start&&(!rect||!rect.left&&!rect.right)){var rSpan=node.parentNode.getClientRects()[0];if(rSpan){rect={left:rSpan.left,right:rSpan.left+charWidth(cm.display),top:rSpan.top,bottom:rSpan.bottom}}else{rect=nullRect}}var rtop=rect.top-prepared.rect.top,rbot=rect.bottom-prepared.rect.top;var mid=(rtop+rbot)/2;var heights=prepared.view.measure.heights;var i=0;for(;i<heights.length-1;i++){if(mid<heights[i]){break}}var top=i?heights[i-1]:0,bot=heights[i];var result={left:(collapse=="right"?rect.right:rect.left)-prepared.rect.left,right:(collapse=="left"?rect.left:rect.right)-prepared.rect.left,top:top,bottom:bot};if(!rect.left&&!rect.right){result.bogus=true;
}if(!cm.options.singleCursorHeightPerLine){result.rtop=rtop;result.rbottom=rbot}return result}function maybeUpdateRectForZooming(measure,rect){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!hasBadZoomedRects(measure)){return rect}var scaleX=screen.logicalXDPI/screen.deviceXDPI;var scaleY=screen.logicalYDPI/screen.deviceYDPI;return{left:rect.left*scaleX,right:rect.right*scaleX,top:rect.top*scaleY,bottom:rect.bottom*scaleY}}function clearLineMeasurementCacheFor(lineView){if(lineView.measure){lineView.measure.cache={};lineView.measure.heights=null;if(lineView.rest){for(var i=0;i<lineView.rest.length;i++){lineView.measure.caches[i]={}}}}}function clearLineMeasurementCache(cm){cm.display.externalMeasure=null;removeChildren(cm.display.lineMeasure);for(var i=0;i<cm.display.view.length;i++){clearLineMeasurementCacheFor(cm.display.view[i])}}function clearCaches(cm){clearLineMeasurementCache(cm);cm.display.cachedCharWidth=cm.display.cachedTextHeight=cm.display.cachedPaddingH=null;if(!cm.options.lineWrapping){cm.display.maxLineChanged=true}cm.display.lineNumChars=null}function pageScrollX(){if(chrome&&android){return-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft))}return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function pageScrollY(){if(chrome&&android){return-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop))}return window.pageYOffset||(document.documentElement||document.body).scrollTop}function widgetTopHeight(lineObj){var height=0;if(lineObj.widgets){for(var i=0;i<lineObj.widgets.length;++i){if(lineObj.widgets[i].above){height+=widgetHeight(lineObj.widgets[i])}}}return height}function intoCoordSystem(cm,lineObj,rect,context,includeWidgets){if(!includeWidgets){var height=widgetTopHeight(lineObj);rect.top+=height;rect.bottom+=height}if(context=="line"){return rect}if(!context){context="local"}var yOff=heightAtLine(lineObj);if(context=="local"){yOff+=paddingTop(cm.display)}else{yOff-=cm.display.viewOffset}if(context=="page"||context=="window"){var lOff=cm.display.lineSpace.getBoundingClientRect();yOff+=lOff.top+(context=="window"?0:pageScrollY());var xOff=lOff.left+(context=="window"?0:pageScrollX());rect.left+=xOff;rect.right+=xOff}rect.top+=yOff;rect.bottom+=yOff;return rect}function fromCoordSystem(cm,coords,context){if(context=="div"){return coords}var left=coords.left,top=coords.top;if(context=="page"){left-=pageScrollX();top-=pageScrollY()}else if(context=="local"||!context){var localBox=cm.display.sizer.getBoundingClientRect();left+=localBox.left;top+=localBox.top}var lineSpaceBox=cm.display.lineSpace.getBoundingClientRect();return{left:left-lineSpaceBox.left,top:top-lineSpaceBox.top}}function charCoords(cm,pos,context,lineObj,bias){if(!lineObj){lineObj=getLine(cm.doc,pos.line)}return intoCoordSystem(cm,lineObj,measureChar(cm,lineObj,pos.ch,bias),context)}function cursorCoords(cm,pos,context,lineObj,preparedMeasure,varHeight){lineObj=lineObj||getLine(cm.doc,pos.line);if(!preparedMeasure){preparedMeasure=prepareMeasureForLine(cm,lineObj)}function get(ch,right){var m=measureCharPrepared(cm,preparedMeasure,ch,right?"right":"left",varHeight);if(right){m.left=m.right}else{m.right=m.left}return intoCoordSystem(cm,lineObj,m,context)}var order=getOrder(lineObj,cm.doc.direction),ch=pos.ch,sticky=pos.sticky;if(ch>=lineObj.text.length){ch=lineObj.text.length;sticky="before"}else if(ch<=0){ch=0;sticky="after"}if(!order){return get(sticky=="before"?ch-1:ch,sticky=="before")}function getBidi(ch,partPos,invert){var part=order[partPos],right=part.level==1;return get(invert?ch-1:ch,right!=invert)}var partPos=getBidiPartAt(order,ch,sticky);var other=bidiOther;var val=getBidi(ch,partPos,sticky=="before");if(other!=null){val.other=getBidi(ch,other,sticky!="before")}return val}function estimateCoords(cm,pos){var left=0;pos=clipPos(cm.doc,pos);if(!cm.options.lineWrapping){left=charWidth(cm.display)*pos.ch}var lineObj=getLine(cm.doc,pos.line);var top=heightAtLine(lineObj)+paddingTop(cm.display);return{left:left,right:left,top:top,bottom:top+lineObj.height}}function PosWithInfo(line,ch,sticky,outside,xRel){var pos=Pos(line,ch,sticky);pos.xRel=xRel;if(outside){pos.outside=outside}return pos}function coordsChar(cm,x,y){var doc=cm.doc;y+=cm.display.viewOffset;if(y<0){return PosWithInfo(doc.first,0,null,-1,-1)}var lineN=lineAtHeight(doc,y),last=doc.first+doc.size-1;if(lineN>last){return PosWithInfo(doc.first+doc.size-1,getLine(doc,last).text.length,null,1,1)}if(x<0){x=0}var lineObj=getLine(doc,lineN);for(;;){var found=coordsCharInner(cm,lineObj,lineN,x,y);var collapsed=collapsedSpanAround(lineObj,found.ch+(found.xRel>0||found.outside>0?1:0));if(!collapsed){return found}var rangeEnd=collapsed.find(1);if(rangeEnd.line==lineN){return rangeEnd}lineObj=getLine(doc,lineN=rangeEnd.line)}}function wrappedLineExtent(cm,lineObj,preparedMeasure,y){y-=widgetTopHeight(lineObj);var end=lineObj.text.length;var begin=findFirst(function(ch){return measureCharPrepared(cm,preparedMeasure,ch-1).bottom<=y},end,0);end=findFirst(function(ch){return measureCharPrepared(cm,preparedMeasure,ch).top>y},begin,end);return{begin:begin,end:end}}function wrappedLineExtentChar(cm,lineObj,preparedMeasure,target){if(!preparedMeasure){preparedMeasure=prepareMeasureForLine(cm,lineObj)}var targetTop=intoCoordSystem(cm,lineObj,measureCharPrepared(cm,preparedMeasure,target),"line").top;return wrappedLineExtent(cm,lineObj,preparedMeasure,targetTop)}function boxIsAfter(box,x,y,left){return box.bottom<=y?false:box.top>y?true:(left?box.left:box.right)>x}function coordsCharInner(cm,lineObj,lineNo$$1,x,y){y-=heightAtLine(lineObj);var preparedMeasure=prepareMeasureForLine(cm,lineObj);var widgetHeight$$1=widgetTopHeight(lineObj);var begin=0,end=lineObj.text.length,ltr=true;var order=getOrder(lineObj,cm.doc.direction);if(order){var part=(cm.options.lineWrapping?coordsBidiPartWrapped:coordsBidiPart)(cm,lineObj,lineNo$$1,preparedMeasure,order,x,y);ltr=part.level!=1;begin=ltr?part.from:part.to-1;end=ltr?part.to:part.from-1}var chAround=null,boxAround=null;var ch=findFirst(function(ch){var box=measureCharPrepared(cm,preparedMeasure,ch);box.top+=widgetHeight$$1;box.bottom+=widgetHeight$$1;if(!boxIsAfter(box,x,y,false)){return false}if(box.top<=y&&box.left<=x){chAround=ch;boxAround=box}return true},begin,end);var baseX,sticky,outside=false;if(boxAround){var atLeft=x-boxAround.left<boxAround.right-x,atStart=atLeft==ltr;ch=chAround+(atStart?0:1);sticky=atStart?"after":"before";baseX=atLeft?boxAround.left:boxAround.right}else{if(!ltr&&(ch==end||ch==begin)){ch++}sticky=ch==0?"after":ch==lineObj.text.length?"before":measureCharPrepared(cm,preparedMeasure,ch-(ltr?1:0)).bottom+widgetHeight$$1<=y==ltr?"after":"before";var coords=cursorCoords(cm,Pos(lineNo$$1,ch,sticky),"line",lineObj,preparedMeasure);baseX=coords.left;outside=y<coords.top?-1:y>=coords.bottom?1:0}ch=skipExtendingChars(lineObj.text,ch,1);return PosWithInfo(lineNo$$1,ch,sticky,outside,x-baseX)}function coordsBidiPart(cm,lineObj,lineNo$$1,preparedMeasure,order,x,y){var index=findFirst(function(i){var part=order[i],ltr=part.level!=1;return boxIsAfter(cursorCoords(cm,Pos(lineNo$$1,ltr?part.to:part.from,ltr?"before":"after"),"line",lineObj,preparedMeasure),x,y,true)},0,order.length-1);var part=order[index];if(index>0){var ltr=part.level!=1;var start=cursorCoords(cm,Pos(lineNo$$1,ltr?part.from:part.to,ltr?"after":"before"),"line",lineObj,preparedMeasure);if(boxIsAfter(start,x,y,true)&&start.top>y){part=order[index-1]}}return part}function coordsBidiPartWrapped(cm,lineObj,_lineNo,preparedMeasure,order,x,y){var ref=wrappedLineExtent(cm,lineObj,preparedMeasure,y);var begin=ref.begin;var end=ref.end;if(/\s/.test(lineObj.text.charAt(end-1))){end--}var part=null,closestDist=null;for(var i=0;i<order.length;i++){var p=order[i];if(p.from>=end||p.to<=begin){continue}var ltr=p.level!=1;var endX=measureCharPrepared(cm,preparedMeasure,ltr?Math.min(end,p.to)-1:Math.max(begin,p.from)).right;var dist=endX<x?x-endX+1e9:endX-x;if(!part||closestDist>dist){part=p;closestDist=dist}}if(!part){part=order[order.length-1]}if(part.from<begin){part={from:begin,to:part.to,level:part.level}}if(part.to>end){part={from:part.from,to:end,level:part.level}}return part}var measureText;function textHeight(display){if(display.cachedTextHeight!=null){return display.cachedTextHeight}if(measureText==null){measureText=elt("pre",null,"CodeMirror-line-like");for(var i=0;i<49;++i){measureText.appendChild(document.createTextNode("x"));measureText.appendChild(elt("br"))}measureText.appendChild(document.createTextNode("x"))}removeChildrenAndAdd(display.measure,measureText);var height=measureText.offsetHeight/50;if(height>3){display.cachedTextHeight=height}removeChildren(display.measure);return height||1}function charWidth(display){if(display.cachedCharWidth!=null){return display.cachedCharWidth}var anchor=elt("span","xxxxxxxxxx");var pre=elt("pre",[anchor],"CodeMirror-line-like");removeChildrenAndAdd(display.measure,pre);var rect=anchor.getBoundingClientRect(),width=(rect.right-rect.left)/10;if(width>2){display.cachedCharWidth=width}return width||10}function getDimensions(cm){var d=cm.display,left={},width={};var gutterLeft=d.gutters.clientLeft;for(var n=d.gutters.firstChild,i=0;n;n=n.nextSibling,++i){var id=cm.display.gutterSpecs[i].className;left[id]=n.offsetLeft+n.clientLeft+gutterLeft;width[id]=n.clientWidth}return{fixedPos:compensateForHScroll(d),gutterTotalWidth:d.gutters.offsetWidth,gutterLeft:left,gutterWidth:width,wrapperWidth:d.wrapper.clientWidth}}function compensateForHScroll(display){return display.scroller.getBoundingClientRect().left-display.sizer.getBoundingClientRect().left}function estimateHeight(cm){var th=textHeight(cm.display),wrapping=cm.options.lineWrapping;var perLine=wrapping&&Math.max(5,cm.display.scroller.clientWidth/charWidth(cm.display)-3);return function(line){if(lineIsHidden(cm.doc,line)){return 0}var widgetsHeight=0;if(line.widgets){for(var i=0;i<line.widgets.length;i++){if(line.widgets[i].height){widgetsHeight+=line.widgets[i].height}}}if(wrapping){return widgetsHeight+(Math.ceil(line.text.length/perLine)||1)*th}else{return widgetsHeight+th}}}function estimateLineHeights(cm){var doc=cm.doc,est=estimateHeight(cm);doc.iter(function(line){var estHeight=est(line);if(estHeight!=line.height){updateLineHeight(line,estHeight)}})}function posFromMouse(cm,e,liberal,forRect){var display=cm.display;if(!liberal&&e_target(e).getAttribute("cm-not-content")=="true"){return null}var x,y,space=display.lineSpace.getBoundingClientRect();try{x=e.clientX-space.left;y=e.clientY-space.top}catch(e){return null}var coords=coordsChar(cm,x,y),line;if(forRect&&coords.xRel==1&&(line=getLine(cm.doc,coords.line).text).length==coords.ch){var colDiff=countColumn(line,line.length,cm.options.tabSize)-line.length;coords=Pos(coords.line,Math.max(0,Math.round((x-paddingH(cm.display).left)/charWidth(cm.display))-colDiff))}return coords}function findViewIndex(cm,n){if(n>=cm.display.viewTo){return null}n-=cm.display.viewFrom;if(n<0){return null}var view=cm.display.view;for(var i=0;i<view.length;i++){n-=view[i].size;if(n<0){return i}}}function regChange(cm,from,to,lendiff){if(from==null){from=cm.doc.first}if(to==null){to=cm.doc.first+cm.doc.size}if(!lendiff){lendiff=0}var display=cm.display;if(lendiff&&to<display.viewTo&&(display.updateLineNumbers==null||display.updateLineNumbers>from)){display.updateLineNumbers=from}cm.curOp.viewChanged=true;if(from>=display.viewTo){if(sawCollapsedSpans&&visualLineNo(cm.doc,from)<display.viewTo){resetView(cm)}}else if(to<=display.viewFrom){if(sawCollapsedSpans&&visualLineEndNo(cm.doc,to+lendiff)>display.viewFrom){resetView(cm)}else{display.viewFrom+=lendiff;display.viewTo+=lendiff}}else if(from<=display.viewFrom&&to>=display.viewTo){resetView(cm)}else if(from<=display.viewFrom){var cut=viewCuttingPoint(cm,to,to+lendiff,1);if(cut){display.view=display.view.slice(cut.index);display.viewFrom=cut.lineN;display.viewTo+=lendiff}else{resetView(cm)}}else if(to>=display.viewTo){var cut$1=viewCuttingPoint(cm,from,from,-1);if(cut$1){display.view=display.view.slice(0,cut$1.index);display.viewTo=cut$1.lineN}else{resetView(cm)}}else{var cutTop=viewCuttingPoint(cm,from,from,-1);var cutBot=viewCuttingPoint(cm,to,to+lendiff,1);if(cutTop&&cutBot){display.view=display.view.slice(0,cutTop.index).concat(buildViewArray(cm,cutTop.lineN,cutBot.lineN)).concat(display.view.slice(cutBot.index));display.viewTo+=lendiff}else{resetView(cm)}}var ext=display.externalMeasured;if(ext){if(to<ext.lineN){ext.lineN+=lendiff}else if(from<ext.lineN+ext.size){display.externalMeasured=null}}}function regLineChange(cm,line,type){cm.curOp.viewChanged=true;var display=cm.display,ext=cm.display.externalMeasured;if(ext&&line>=ext.lineN&&line<ext.lineN+ext.size){display.externalMeasured=null}if(line<display.viewFrom||line>=display.viewTo){return}var lineView=display.view[findViewIndex(cm,line)];if(lineView.node==null){return}var arr=lineView.changes||(lineView.changes=[]);if(indexOf(arr,type)==-1){arr.push(type)}}function resetView(cm){cm.display.viewFrom=cm.display.viewTo=cm.doc.first;cm.display.view=[];cm.display.viewOffset=0}function viewCuttingPoint(cm,oldN,newN,dir){var index=findViewIndex(cm,oldN),diff,view=cm.display.view;if(!sawCollapsedSpans||newN==cm.doc.first+cm.doc.size){return{index:index,lineN:newN}}var n=cm.display.viewFrom;for(var i=0;i<index;i++){n+=view[i].size}if(n!=oldN){if(dir>0){if(index==view.length-1){return null}diff=n+view[index].size-oldN;index++}else{diff=n-oldN}oldN+=diff;newN+=diff}while(visualLineNo(cm.doc,newN)!=newN){if(index==(dir<0?0:view.length-1)){return null}newN+=dir*view[index-(dir<0?1:0)].size;index+=dir}return{index:index,lineN:newN}}function adjustView(cm,from,to){var display=cm.display,view=display.view;if(view.length==0||from>=display.viewTo||to<=display.viewFrom){display.view=buildViewArray(cm,from,to);display.viewFrom=from}else{if(display.viewFrom>from){display.view=buildViewArray(cm,from,display.viewFrom).concat(display.view)}else if(display.viewFrom<from){display.view=display.view.slice(findViewIndex(cm,from))}display.viewFrom=from;if(display.viewTo<to){display.view=display.view.concat(buildViewArray(cm,display.viewTo,to))}else if(display.viewTo>to){display.view=display.view.slice(0,findViewIndex(cm,to))}}display.viewTo=to}function countDirtyView(cm){var view=cm.display.view,dirty=0;for(var i=0;i<view.length;i++){var lineView=view[i];if(!lineView.hidden&&(!lineView.node||lineView.changes)){++dirty}}return dirty}function updateSelection(cm){cm.display.input.showSelection(cm.display.input.prepareSelection())}function prepareSelection(cm,primary){if(primary===void 0)primary=true;var doc=cm.doc,result={};var curFragment=result.cursors=document.createDocumentFragment();var selFragment=result.selection=document.createDocumentFragment();for(var i=0;i<doc.sel.ranges.length;i++){if(!primary&&i==doc.sel.primIndex){continue}var range$$1=doc.sel.ranges[i];if(range$$1.from().line>=cm.display.viewTo||range$$1.to().line<cm.display.viewFrom){continue}var collapsed=range$$1.empty();if(collapsed||cm.options.showCursorWhenSelecting){drawSelectionCursor(cm,range$$1.head,curFragment)}if(!collapsed){drawSelectionRange(cm,range$$1,selFragment)}}return result}function drawSelectionCursor(cm,head,output){var pos=cursorCoords(cm,head,"div",null,null,!cm.options.singleCursorHeightPerLine);var cursor=output.appendChild(elt("div"," ","CodeMirror-cursor"));cursor.style.left=pos.left+"px";cursor.style.top=pos.top+"px";cursor.style.height=Math.max(0,pos.bottom-pos.top)*cm.options.cursorHeight+"px";if(pos.other){var otherCursor=output.appendChild(elt("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));otherCursor.style.display="";otherCursor.style.left=pos.other.left+"px";otherCursor.style.top=pos.other.top+"px";otherCursor.style.height=(pos.other.bottom-pos.other.top)*.85+"px"}}function cmpCoords(a,b){return a.top-b.top||a.left-b.left}function drawSelectionRange(cm,range$$1,output){var display=cm.display,doc=cm.doc;var fragment=document.createDocumentFragment();var padding=paddingH(cm.display),leftSide=padding.left;var rightSide=Math.max(display.sizerWidth,displayWidth(cm)-display.sizer.offsetLeft)-padding.right;var docLTR=doc.direction=="ltr";function add(left,top,width,bottom){if(top<0){top=0}top=Math.round(top);bottom=Math.round(bottom);fragment.appendChild(elt("div",null,"CodeMirror-selected","position: absolute; left: "+left+"px;\n                             top: "+top+"px; width: "+(width==null?rightSide-left:width)+"px;\n                             height: "+(bottom-top)+"px"))}function drawForLine(line,fromArg,toArg){var lineObj=getLine(doc,line);var lineLen=lineObj.text.length;var start,end;function coords(ch,bias){return charCoords(cm,Pos(line,ch),"div",lineObj,bias)}function wrapX(pos,dir,side){var extent=wrappedLineExtentChar(cm,lineObj,null,pos);var prop=dir=="ltr"==(side=="after")?"left":"right";var ch=side=="after"?extent.begin:extent.end-(/\s/.test(lineObj.text.charAt(extent.end-1))?2:1);return coords(ch,prop)[prop]}var order=getOrder(lineObj,doc.direction);iterateBidiSections(order,fromArg||0,toArg==null?lineLen:toArg,function(from,to,dir,i){var ltr=dir=="ltr";var fromPos=coords(from,ltr?"left":"right");var toPos=coords(to-1,ltr?"right":"left");var openStart=fromArg==null&&from==0,openEnd=toArg==null&&to==lineLen;var first=i==0,last=!order||i==order.length-1;if(toPos.top-fromPos.top<=3){var openLeft=(docLTR?openStart:openEnd)&&first;var openRight=(docLTR?openEnd:openStart)&&last;var left=openLeft?leftSide:(ltr?fromPos:toPos).left;var right=openRight?rightSide:(ltr?toPos:fromPos).right;add(left,fromPos.top,right-left,fromPos.bottom)}else{var topLeft,topRight,botLeft,botRight;if(ltr){topLeft=docLTR&&openStart&&first?leftSide:fromPos.left;topRight=docLTR?rightSide:wrapX(from,dir,"before");botLeft=docLTR?leftSide:wrapX(to,dir,"after");botRight=docLTR&&openEnd&&last?rightSide:toPos.right}else{topLeft=!docLTR?leftSide:wrapX(from,dir,"before");topRight=!docLTR&&openStart&&first?rightSide:fromPos.right;botLeft=!docLTR&&openEnd&&last?leftSide:toPos.left;botRight=!docLTR?rightSide:wrapX(to,dir,"after")}add(topLeft,fromPos.top,topRight-topLeft,fromPos.bottom);if(fromPos.bottom<toPos.top){add(leftSide,fromPos.bottom,null,toPos.top)}add(botLeft,toPos.top,botRight-botLeft,toPos.bottom)}if(!start||cmpCoords(fromPos,start)<0){start=fromPos}if(cmpCoords(toPos,start)<0){start=toPos}if(!end||cmpCoords(fromPos,end)<0){end=fromPos}if(cmpCoords(toPos,end)<0){end=toPos}});return{start:start,end:end}}var sFrom=range$$1.from(),sTo=range$$1.to();if(sFrom.line==sTo.line){drawForLine(sFrom.line,sFrom.ch,sTo.ch)}else{var fromLine=getLine(doc,sFrom.line),toLine=getLine(doc,sTo.line);var singleVLine=visualLine(fromLine)==visualLine(toLine);var leftEnd=drawForLine(sFrom.line,sFrom.ch,singleVLine?fromLine.text.length+1:null).end;var rightStart=drawForLine(sTo.line,singleVLine?0:null,sTo.ch).start;if(singleVLine){if(leftEnd.top<rightStart.top-2){add(leftEnd.right,leftEnd.top,null,leftEnd.bottom);add(leftSide,rightStart.top,rightStart.left,rightStart.bottom)}else{add(leftEnd.right,leftEnd.top,rightStart.left-leftEnd.right,leftEnd.bottom)}}if(leftEnd.bottom<rightStart.top){add(leftSide,leftEnd.bottom,null,rightStart.top)}}output.appendChild(fragment)}function restartBlink(cm){if(!cm.state.focused){return}var display=cm.display;clearInterval(display.blinker);var on=true;display.cursorDiv.style.visibility="";if(cm.options.cursorBlinkRate>0){display.blinker=setInterval(function(){return display.cursorDiv.style.visibility=(on=!on)?"":"hidden"},cm.options.cursorBlinkRate)}else if(cm.options.cursorBlinkRate<0){display.cursorDiv.style.visibility="hidden"}}function ensureFocus(cm){if(!cm.state.focused){cm.display.input.focus();onFocus(cm)}}function delayBlurEvent(cm){cm.state.delayingBlurEvent=true;setTimeout(function(){if(cm.state.delayingBlurEvent){cm.state.delayingBlurEvent=false;onBlur(cm)}},100)}function onFocus(cm,e){if(cm.state.delayingBlurEvent){cm.state.delayingBlurEvent=false}if(cm.options.readOnly=="nocursor"){return}if(!cm.state.focused){signal(cm,"focus",cm,e);cm.state.focused=true;addClass(cm.display.wrapper,"CodeMirror-focused");if(!cm.curOp&&cm.display.selForContextMenu!=cm.doc.sel){cm.display.input.reset();if(webkit){setTimeout(function(){return cm.display.input.reset(true)},20)}}cm.display.input.receivedFocus()}restartBlink(cm)}function onBlur(cm,e){if(cm.state.delayingBlurEvent){return}if(cm.state.focused){signal(cm,"blur",cm,e);cm.state.focused=false;rmClass(cm.display.wrapper,"CodeMirror-focused")}clearInterval(cm.display.blinker);setTimeout(function(){if(!cm.state.focused){cm.display.shift=false}},150)}function updateHeightsInViewport(cm){var display=cm.display;var prevBottom=display.lineDiv.offsetTop;for(var i=0;i<display.view.length;i++){var cur=display.view[i],wrapping=cm.options.lineWrapping;var height=void 0,width=0;if(cur.hidden){continue}if(ie&&ie_version<8){var bot=cur.node.offsetTop+cur.node.offsetHeight;height=bot-prevBottom;prevBottom=bot}else{var box=cur.node.getBoundingClientRect();height=box.bottom-box.top;if(!wrapping&&cur.text.firstChild){width=cur.text.firstChild.getBoundingClientRect().right-box.left-1}}var diff=cur.line.height-height;if(diff>.005||diff<-.005){updateLineHeight(cur.line,height);updateWidgetHeight(cur.line);if(cur.rest){for(var j=0;j<cur.rest.length;j++){updateWidgetHeight(cur.rest[j])}}}if(width>cm.display.sizerWidth){var chWidth=Math.ceil(width/charWidth(cm.display));if(chWidth>cm.display.maxLineLength){cm.display.maxLineLength=chWidth;cm.display.maxLine=cur.line;cm.display.maxLineChanged=true}}}}function updateWidgetHeight(line){if(line.widgets){for(var i=0;i<line.widgets.length;++i){var w=line.widgets[i],parent=w.node.parentNode;if(parent){w.height=parent.offsetHeight}}}}function visibleLines(display,doc,viewport){var top=viewport&&viewport.top!=null?Math.max(0,viewport.top):display.scroller.scrollTop;top=Math.floor(top-paddingTop(display));var bottom=viewport&&viewport.bottom!=null?viewport.bottom:top+display.wrapper.clientHeight;var from=lineAtHeight(doc,top),to=lineAtHeight(doc,bottom);if(viewport&&viewport.ensure){var ensureFrom=viewport.ensure.from.line,ensureTo=viewport.ensure.to.line;if(ensureFrom<from){from=ensureFrom;to=lineAtHeight(doc,heightAtLine(getLine(doc,ensureFrom))+display.wrapper.clientHeight)}else if(Math.min(ensureTo,doc.lastLine())>=to){from=lineAtHeight(doc,heightAtLine(getLine(doc,ensureTo))-display.wrapper.clientHeight);to=ensureTo}}return{from:from,to:Math.max(to,from+1)}}function maybeScrollWindow(cm,rect){if(signalDOMEvent(cm,"scrollCursorIntoView")){return}var display=cm.display,box=display.sizer.getBoundingClientRect(),doScroll=null;if(rect.top+box.top<0){doScroll=true}else if(rect.bottom+box.top>(window.innerHeight||document.documentElement.clientHeight)){doScroll=false}if(doScroll!=null&&!phantom){var scrollNode=elt("div","​",null,"position: absolute;\n                         top: "+(rect.top-display.viewOffset-paddingTop(cm.display))+"px;\n                         height: "+(rect.bottom-rect.top+scrollGap(cm)+display.barHeight)+"px;\n                         left: "+rect.left+"px; width: "+Math.max(2,rect.right-rect.left)+"px;");cm.display.lineSpace.appendChild(scrollNode);scrollNode.scrollIntoView(doScroll);cm.display.lineSpace.removeChild(scrollNode)}}function scrollPosIntoView(cm,pos,end,margin){if(margin==null){margin=0}var rect;if(!cm.options.lineWrapping&&pos==end){pos=pos.ch?Pos(pos.line,pos.sticky=="before"?pos.ch-1:pos.ch,"after"):pos;end=pos.sticky=="before"?Pos(pos.line,pos.ch+1,"before"):pos}for(var limit=0;limit<5;limit++){var changed=false;var coords=cursorCoords(cm,pos);var endCoords=!end||end==pos?coords:cursorCoords(cm,end);rect={left:Math.min(coords.left,endCoords.left),top:Math.min(coords.top,endCoords.top)-margin,right:Math.max(coords.left,endCoords.left),bottom:Math.max(coords.bottom,endCoords.bottom)+margin};var scrollPos=calculateScrollPos(cm,rect);var startTop=cm.doc.scrollTop,startLeft=cm.doc.scrollLeft;if(scrollPos.scrollTop!=null){updateScrollTop(cm,scrollPos.scrollTop);if(Math.abs(cm.doc.scrollTop-startTop)>1){changed=true}}if(scrollPos.scrollLeft!=null){setScrollLeft(cm,scrollPos.scrollLeft);if(Math.abs(cm.doc.scrollLeft-startLeft)>1){changed=true}}if(!changed){break}}return rect}function scrollIntoView(cm,rect){var scrollPos=calculateScrollPos(cm,rect);if(scrollPos.scrollTop!=null){updateScrollTop(cm,scrollPos.scrollTop)}if(scrollPos.scrollLeft!=null){setScrollLeft(cm,scrollPos.scrollLeft)}}function calculateScrollPos(cm,rect){var display=cm.display,snapMargin=textHeight(cm.display);if(rect.top<0){rect.top=0}var screentop=cm.curOp&&cm.curOp.scrollTop!=null?cm.curOp.scrollTop:display.scroller.scrollTop;var screen=displayHeight(cm),result={};if(rect.bottom-rect.top>screen){rect.bottom=rect.top+screen}var docBottom=cm.doc.height+paddingVert(display);var atTop=rect.top<snapMargin,atBottom=rect.bottom>docBottom-snapMargin;if(rect.top<screentop){result.scrollTop=atTop?0:rect.top}else if(rect.bottom>screentop+screen){var newTop=Math.min(rect.top,(atBottom?docBottom:rect.bottom)-screen);if(newTop!=screentop){result.scrollTop=newTop}}var screenleft=cm.curOp&&cm.curOp.scrollLeft!=null?cm.curOp.scrollLeft:display.scroller.scrollLeft;var screenw=displayWidth(cm)-(cm.options.fixedGutter?display.gutters.offsetWidth:0);var tooWide=rect.right-rect.left>screenw;if(tooWide){rect.right=rect.left+screenw}if(rect.left<10){result.scrollLeft=0}else if(rect.left<screenleft){result.scrollLeft=Math.max(0,rect.left-(tooWide?0:10))}else if(rect.right>screenw+screenleft-3){result.scrollLeft=rect.right+(tooWide?0:10)-screenw}return result}function addToScrollTop(cm,top){if(top==null){return}resolveScrollToPos(cm);cm.curOp.scrollTop=(cm.curOp.scrollTop==null?cm.doc.scrollTop:cm.curOp.scrollTop)+top}function ensureCursorVisible(cm){resolveScrollToPos(cm);var cur=cm.getCursor();cm.curOp.scrollToPos={from:cur,to:cur,margin:cm.options.cursorScrollMargin}}function scrollToCoords(cm,x,y){if(x!=null||y!=null){resolveScrollToPos(cm)}if(x!=null){cm.curOp.scrollLeft=x}if(y!=null){cm.curOp.scrollTop=y}}function scrollToRange(cm,range$$1){resolveScrollToPos(cm);cm.curOp.scrollToPos=range$$1}function resolveScrollToPos(cm){var range$$1=cm.curOp.scrollToPos;if(range$$1){cm.curOp.scrollToPos=null;var from=estimateCoords(cm,range$$1.from),to=estimateCoords(cm,range$$1.to);scrollToCoordsRange(cm,from,to,range$$1.margin)}}function scrollToCoordsRange(cm,from,to,margin){var sPos=calculateScrollPos(cm,{left:Math.min(from.left,to.left),top:Math.min(from.top,to.top)-margin,right:Math.max(from.right,to.right),bottom:Math.max(from.bottom,to.bottom)+margin});scrollToCoords(cm,sPos.scrollLeft,sPos.scrollTop)}function updateScrollTop(cm,val){if(Math.abs(cm.doc.scrollTop-val)<2){return}if(!gecko){updateDisplaySimple(cm,{top:val})}setScrollTop(cm,val,true);if(gecko){updateDisplaySimple(cm)}startWorker(cm,100)}function setScrollTop(cm,val,forceScroll){val=Math.min(cm.display.scroller.scrollHeight-cm.display.scroller.clientHeight,val);if(cm.display.scroller.scrollTop==val&&!forceScroll){return}cm.doc.scrollTop=val;cm.display.scrollbars.setScrollTop(val);if(cm.display.scroller.scrollTop!=val){cm.display.scroller.scrollTop=val}}function setScrollLeft(cm,val,isScroller,forceScroll){val=Math.min(val,cm.display.scroller.scrollWidth-cm.display.scroller.clientWidth);if((isScroller?val==cm.doc.scrollLeft:Math.abs(cm.doc.scrollLeft-val)<2)&&!forceScroll){return}cm.doc.scrollLeft=val;alignHorizontally(cm);if(cm.display.scroller.scrollLeft!=val){cm.display.scroller.scrollLeft=val}cm.display.scrollbars.setScrollLeft(val)}function measureForScrollbars(cm){var d=cm.display,gutterW=d.gutters.offsetWidth;var docH=Math.round(cm.doc.height+paddingVert(cm.display));return{clientHeight:d.scroller.clientHeight,viewHeight:d.wrapper.clientHeight,scrollWidth:d.scroller.scrollWidth,clientWidth:d.scroller.clientWidth,viewWidth:d.wrapper.clientWidth,barLeft:cm.options.fixedGutter?gutterW:0,docHeight:docH,scrollHeight:docH+scrollGap(cm)+d.barHeight,nativeBarWidth:d.nativeBarWidth,gutterWidth:gutterW}}var NativeScrollbars=function(place,scroll,cm){this.cm=cm;var vert=this.vert=elt("div",[elt("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar");var horiz=this.horiz=elt("div",[elt("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");vert.tabIndex=horiz.tabIndex=-1;place(vert);place(horiz);on(vert,"scroll",function(){if(vert.clientHeight){scroll(vert.scrollTop,"vertical")}});on(horiz,"scroll",function(){if(horiz.clientWidth){scroll(horiz.scrollLeft,"horizontal")}});this.checkedZeroWidth=false;if(ie&&ie_version<8){this.horiz.style.minHeight=this.vert.style.minWidth="18px"}};NativeScrollbars.prototype.update=function(measure){var needsH=measure.scrollWidth>measure.clientWidth+1;var needsV=measure.scrollHeight>measure.clientHeight+1;var sWidth=measure.nativeBarWidth;if(needsV){this.vert.style.display="block";this.vert.style.bottom=needsH?sWidth+"px":"0";var totalHeight=measure.viewHeight-(needsH?sWidth:0);this.vert.firstChild.style.height=Math.max(0,measure.scrollHeight-measure.clientHeight+totalHeight)+"px"}else{this.vert.style.display="";this.vert.firstChild.style.height="0"}if(needsH){this.horiz.style.display="block";this.horiz.style.right=needsV?sWidth+"px":"0";this.horiz.style.left=measure.barLeft+"px";var totalWidth=measure.viewWidth-measure.barLeft-(needsV?sWidth:0);this.horiz.firstChild.style.width=Math.max(0,measure.scrollWidth-measure.clientWidth+totalWidth)+"px"}else{this.horiz.style.display="";this.horiz.firstChild.style.width="0"}if(!this.checkedZeroWidth&&measure.clientHeight>0){if(sWidth==0){this.zeroWidthHack()}this.checkedZeroWidth=true}return{right:needsV?sWidth:0,bottom:needsH?sWidth:0}};NativeScrollbars.prototype.setScrollLeft=function(pos){if(this.horiz.scrollLeft!=pos){this.horiz.scrollLeft=pos}if(this.disableHoriz){this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")}};NativeScrollbars.prototype.setScrollTop=function(pos){if(this.vert.scrollTop!=pos){this.vert.scrollTop=pos}if(this.disableVert){this.enableZeroWidthBar(this.vert,this.disableVert,"vert")}};NativeScrollbars.prototype.zeroWidthHack=function(){var w=mac&&!mac_geMountainLion?"12px":"18px";this.horiz.style.height=this.vert.style.width=w;this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none";this.disableHoriz=new Delayed;this.disableVert=new Delayed};NativeScrollbars.prototype.enableZeroWidthBar=function(bar,delay,type){bar.style.pointerEvents="auto";function maybeDisable(){var box=bar.getBoundingClientRect();var elt$$1=type=="vert"?document.elementFromPoint(box.right-1,(box.top+box.bottom)/2):document.elementFromPoint((box.right+box.left)/2,box.bottom-1);if(elt$$1!=bar){bar.style.pointerEvents="none"}else{delay.set(1e3,maybeDisable)}}delay.set(1e3,maybeDisable)};NativeScrollbars.prototype.clear=function(){var parent=this.horiz.parentNode;parent.removeChild(this.horiz);parent.removeChild(this.vert)};var NullScrollbars=function(){};NullScrollbars.prototype.update=function(){return{bottom:0,right:0}};NullScrollbars.prototype.setScrollLeft=function(){};NullScrollbars.prototype.setScrollTop=function(){};NullScrollbars.prototype.clear=function(){};function updateScrollbars(cm,measure){if(!measure){measure=measureForScrollbars(cm)}var startWidth=cm.display.barWidth,startHeight=cm.display.barHeight;updateScrollbarsInner(cm,measure);for(var i=0;i<4&&startWidth!=cm.display.barWidth||startHeight!=cm.display.barHeight;i++){if(startWidth!=cm.display.barWidth&&cm.options.lineWrapping){updateHeightsInViewport(cm)}updateScrollbarsInner(cm,measureForScrollbars(cm));startWidth=cm.display.barWidth;startHeight=cm.display.barHeight}}function updateScrollbarsInner(cm,measure){var d=cm.display;var sizes=d.scrollbars.update(measure);d.sizer.style.paddingRight=(d.barWidth=sizes.right)+"px";
d.sizer.style.paddingBottom=(d.barHeight=sizes.bottom)+"px";d.heightForcer.style.borderBottom=sizes.bottom+"px solid transparent";if(sizes.right&&sizes.bottom){d.scrollbarFiller.style.display="block";d.scrollbarFiller.style.height=sizes.bottom+"px";d.scrollbarFiller.style.width=sizes.right+"px"}else{d.scrollbarFiller.style.display=""}if(sizes.bottom&&cm.options.coverGutterNextToScrollbar&&cm.options.fixedGutter){d.gutterFiller.style.display="block";d.gutterFiller.style.height=sizes.bottom+"px";d.gutterFiller.style.width=measure.gutterWidth+"px"}else{d.gutterFiller.style.display=""}}var scrollbarModel={native:NativeScrollbars,null:NullScrollbars};function initScrollbars(cm){if(cm.display.scrollbars){cm.display.scrollbars.clear();if(cm.display.scrollbars.addClass){rmClass(cm.display.wrapper,cm.display.scrollbars.addClass)}}cm.display.scrollbars=new scrollbarModel[cm.options.scrollbarStyle](function(node){cm.display.wrapper.insertBefore(node,cm.display.scrollbarFiller);on(node,"mousedown",function(){if(cm.state.focused){setTimeout(function(){return cm.display.input.focus()},0)}});node.setAttribute("cm-not-content","true")},function(pos,axis){if(axis=="horizontal"){setScrollLeft(cm,pos)}else{updateScrollTop(cm,pos)}},cm);if(cm.display.scrollbars.addClass){addClass(cm.display.wrapper,cm.display.scrollbars.addClass)}}var nextOpId=0;function startOperation(cm){cm.curOp={cm:cm,viewChanged:false,startHeight:cm.doc.height,forceUpdate:false,updateInput:0,typing:false,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:false,updateMaxLine:false,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:false,id:++nextOpId};pushOperation(cm.curOp)}function endOperation(cm){var op=cm.curOp;if(op){finishOperation(op,function(group){for(var i=0;i<group.ops.length;i++){group.ops[i].cm.curOp=null}endOperations(group)})}}function endOperations(group){var ops=group.ops;for(var i=0;i<ops.length;i++){endOperation_R1(ops[i])}for(var i$1=0;i$1<ops.length;i$1++){endOperation_W1(ops[i$1])}for(var i$2=0;i$2<ops.length;i$2++){endOperation_R2(ops[i$2])}for(var i$3=0;i$3<ops.length;i$3++){endOperation_W2(ops[i$3])}for(var i$4=0;i$4<ops.length;i$4++){endOperation_finish(ops[i$4])}}function endOperation_R1(op){var cm=op.cm,display=cm.display;maybeClipScrollbars(cm);if(op.updateMaxLine){findMaxLine(cm)}op.mustUpdate=op.viewChanged||op.forceUpdate||op.scrollTop!=null||op.scrollToPos&&(op.scrollToPos.from.line<display.viewFrom||op.scrollToPos.to.line>=display.viewTo)||display.maxLineChanged&&cm.options.lineWrapping;op.update=op.mustUpdate&&new DisplayUpdate(cm,op.mustUpdate&&{top:op.scrollTop,ensure:op.scrollToPos},op.forceUpdate)}function endOperation_W1(op){op.updatedDisplay=op.mustUpdate&&updateDisplayIfNeeded(op.cm,op.update)}function endOperation_R2(op){var cm=op.cm,display=cm.display;if(op.updatedDisplay){updateHeightsInViewport(cm)}op.barMeasure=measureForScrollbars(cm);if(display.maxLineChanged&&!cm.options.lineWrapping){op.adjustWidthTo=measureChar(cm,display.maxLine,display.maxLine.text.length).left+3;cm.display.sizerWidth=op.adjustWidthTo;op.barMeasure.scrollWidth=Math.max(display.scroller.clientWidth,display.sizer.offsetLeft+op.adjustWidthTo+scrollGap(cm)+cm.display.barWidth);op.maxScrollLeft=Math.max(0,display.sizer.offsetLeft+op.adjustWidthTo-displayWidth(cm))}if(op.updatedDisplay||op.selectionChanged){op.preparedSelection=display.input.prepareSelection()}}function endOperation_W2(op){var cm=op.cm;if(op.adjustWidthTo!=null){cm.display.sizer.style.minWidth=op.adjustWidthTo+"px";if(op.maxScrollLeft<cm.doc.scrollLeft){setScrollLeft(cm,Math.min(cm.display.scroller.scrollLeft,op.maxScrollLeft),true)}cm.display.maxLineChanged=false}var takeFocus=op.focus&&op.focus==activeElt();if(op.preparedSelection){cm.display.input.showSelection(op.preparedSelection,takeFocus)}if(op.updatedDisplay||op.startHeight!=cm.doc.height){updateScrollbars(cm,op.barMeasure)}if(op.updatedDisplay){setDocumentHeight(cm,op.barMeasure)}if(op.selectionChanged){restartBlink(cm)}if(cm.state.focused&&op.updateInput){cm.display.input.reset(op.typing)}if(takeFocus){ensureFocus(op.cm)}}function endOperation_finish(op){var cm=op.cm,display=cm.display,doc=cm.doc;if(op.updatedDisplay){postUpdateDisplay(cm,op.update)}if(display.wheelStartX!=null&&(op.scrollTop!=null||op.scrollLeft!=null||op.scrollToPos)){display.wheelStartX=display.wheelStartY=null}if(op.scrollTop!=null){setScrollTop(cm,op.scrollTop,op.forceScroll)}if(op.scrollLeft!=null){setScrollLeft(cm,op.scrollLeft,true,true)}if(op.scrollToPos){var rect=scrollPosIntoView(cm,clipPos(doc,op.scrollToPos.from),clipPos(doc,op.scrollToPos.to),op.scrollToPos.margin);maybeScrollWindow(cm,rect)}var hidden=op.maybeHiddenMarkers,unhidden=op.maybeUnhiddenMarkers;if(hidden){for(var i=0;i<hidden.length;++i){if(!hidden[i].lines.length){signal(hidden[i],"hide")}}}if(unhidden){for(var i$1=0;i$1<unhidden.length;++i$1){if(unhidden[i$1].lines.length){signal(unhidden[i$1],"unhide")}}}if(display.wrapper.offsetHeight){doc.scrollTop=cm.display.scroller.scrollTop}if(op.changeObjs){signal(cm,"changes",cm,op.changeObjs)}if(op.update){op.update.finish()}}function runInOp(cm,f){if(cm.curOp){return f()}startOperation(cm);try{return f()}finally{endOperation(cm)}}function operation(cm,f){return function(){if(cm.curOp){return f.apply(cm,arguments)}startOperation(cm);try{return f.apply(cm,arguments)}finally{endOperation(cm)}}}function methodOp(f){return function(){if(this.curOp){return f.apply(this,arguments)}startOperation(this);try{return f.apply(this,arguments)}finally{endOperation(this)}}}function docMethodOp(f){return function(){var cm=this.cm;if(!cm||cm.curOp){return f.apply(this,arguments)}startOperation(cm);try{return f.apply(this,arguments)}finally{endOperation(cm)}}}function startWorker(cm,time){if(cm.doc.highlightFrontier<cm.display.viewTo){cm.state.highlight.set(time,bind(highlightWorker,cm))}}function highlightWorker(cm){var doc=cm.doc;if(doc.highlightFrontier>=cm.display.viewTo){return}var end=+new Date+cm.options.workTime;var context=getContextBefore(cm,doc.highlightFrontier);var changedLines=[];doc.iter(context.line,Math.min(doc.first+doc.size,cm.display.viewTo+500),function(line){if(context.line>=cm.display.viewFrom){var oldStyles=line.styles;var resetState=line.text.length>cm.options.maxHighlightLength?copyState(doc.mode,context.state):null;var highlighted=highlightLine(cm,line,context,true);if(resetState){context.state=resetState}line.styles=highlighted.styles;var oldCls=line.styleClasses,newCls=highlighted.classes;if(newCls){line.styleClasses=newCls}else if(oldCls){line.styleClasses=null}var ischange=!oldStyles||oldStyles.length!=line.styles.length||oldCls!=newCls&&(!oldCls||!newCls||oldCls.bgClass!=newCls.bgClass||oldCls.textClass!=newCls.textClass);for(var i=0;!ischange&&i<oldStyles.length;++i){ischange=oldStyles[i]!=line.styles[i]}if(ischange){changedLines.push(context.line)}line.stateAfter=context.save();context.nextLine()}else{if(line.text.length<=cm.options.maxHighlightLength){processLine(cm,line.text,context)}line.stateAfter=context.line%5==0?context.save():null;context.nextLine()}if(+new Date>end){startWorker(cm,cm.options.workDelay);return true}});doc.highlightFrontier=context.line;doc.modeFrontier=Math.max(doc.modeFrontier,context.line);if(changedLines.length){runInOp(cm,function(){for(var i=0;i<changedLines.length;i++){regLineChange(cm,changedLines[i],"text")}})}}var DisplayUpdate=function(cm,viewport,force){var display=cm.display;this.viewport=viewport;this.visible=visibleLines(display,cm.doc,viewport);this.editorIsHidden=!display.wrapper.offsetWidth;this.wrapperHeight=display.wrapper.clientHeight;this.wrapperWidth=display.wrapper.clientWidth;this.oldDisplayWidth=displayWidth(cm);this.force=force;this.dims=getDimensions(cm);this.events=[]};DisplayUpdate.prototype.signal=function(emitter,type){if(hasHandler(emitter,type)){this.events.push(arguments)}};DisplayUpdate.prototype.finish=function(){for(var i=0;i<this.events.length;i++){signal.apply(null,this.events[i])}};function maybeClipScrollbars(cm){var display=cm.display;if(!display.scrollbarsClipped&&display.scroller.offsetWidth){display.nativeBarWidth=display.scroller.offsetWidth-display.scroller.clientWidth;display.heightForcer.style.height=scrollGap(cm)+"px";display.sizer.style.marginBottom=-display.nativeBarWidth+"px";display.sizer.style.borderRightWidth=scrollGap(cm)+"px";display.scrollbarsClipped=true}}function selectionSnapshot(cm){if(cm.hasFocus()){return null}var active=activeElt();if(!active||!contains(cm.display.lineDiv,active)){return null}var result={activeElt:active};if(window.getSelection){var sel=window.getSelection();if(sel.anchorNode&&sel.extend&&contains(cm.display.lineDiv,sel.anchorNode)){result.anchorNode=sel.anchorNode;result.anchorOffset=sel.anchorOffset;result.focusNode=sel.focusNode;result.focusOffset=sel.focusOffset}}return result}function restoreSelection(snapshot){if(!snapshot||!snapshot.activeElt||snapshot.activeElt==activeElt()){return}snapshot.activeElt.focus();if(snapshot.anchorNode&&contains(document.body,snapshot.anchorNode)&&contains(document.body,snapshot.focusNode)){var sel=window.getSelection(),range$$1=document.createRange();range$$1.setEnd(snapshot.anchorNode,snapshot.anchorOffset);range$$1.collapse(false);sel.removeAllRanges();sel.addRange(range$$1);sel.extend(snapshot.focusNode,snapshot.focusOffset)}}function updateDisplayIfNeeded(cm,update){var display=cm.display,doc=cm.doc;if(update.editorIsHidden){resetView(cm);return false}if(!update.force&&update.visible.from>=display.viewFrom&&update.visible.to<=display.viewTo&&(display.updateLineNumbers==null||display.updateLineNumbers>=display.viewTo)&&display.renderedView==display.view&&countDirtyView(cm)==0){return false}if(maybeUpdateLineNumberWidth(cm)){resetView(cm);update.dims=getDimensions(cm)}var end=doc.first+doc.size;var from=Math.max(update.visible.from-cm.options.viewportMargin,doc.first);var to=Math.min(end,update.visible.to+cm.options.viewportMargin);if(display.viewFrom<from&&from-display.viewFrom<20){from=Math.max(doc.first,display.viewFrom)}if(display.viewTo>to&&display.viewTo-to<20){to=Math.min(end,display.viewTo)}if(sawCollapsedSpans){from=visualLineNo(cm.doc,from);to=visualLineEndNo(cm.doc,to)}var different=from!=display.viewFrom||to!=display.viewTo||display.lastWrapHeight!=update.wrapperHeight||display.lastWrapWidth!=update.wrapperWidth;adjustView(cm,from,to);display.viewOffset=heightAtLine(getLine(cm.doc,display.viewFrom));cm.display.mover.style.top=display.viewOffset+"px";var toUpdate=countDirtyView(cm);if(!different&&toUpdate==0&&!update.force&&display.renderedView==display.view&&(display.updateLineNumbers==null||display.updateLineNumbers>=display.viewTo)){return false}var selSnapshot=selectionSnapshot(cm);if(toUpdate>4){display.lineDiv.style.display="none"}patchDisplay(cm,display.updateLineNumbers,update.dims);if(toUpdate>4){display.lineDiv.style.display=""}display.renderedView=display.view;restoreSelection(selSnapshot);removeChildren(display.cursorDiv);removeChildren(display.selectionDiv);display.gutters.style.height=display.sizer.style.minHeight=0;if(different){display.lastWrapHeight=update.wrapperHeight;display.lastWrapWidth=update.wrapperWidth;startWorker(cm,400)}display.updateLineNumbers=null;return true}function postUpdateDisplay(cm,update){var viewport=update.viewport;for(var first=true;;first=false){if(!first||!cm.options.lineWrapping||update.oldDisplayWidth==displayWidth(cm)){if(viewport&&viewport.top!=null){viewport={top:Math.min(cm.doc.height+paddingVert(cm.display)-displayHeight(cm),viewport.top)}}update.visible=visibleLines(cm.display,cm.doc,viewport);if(update.visible.from>=cm.display.viewFrom&&update.visible.to<=cm.display.viewTo){break}}if(!updateDisplayIfNeeded(cm,update)){break}updateHeightsInViewport(cm);var barMeasure=measureForScrollbars(cm);updateSelection(cm);updateScrollbars(cm,barMeasure);setDocumentHeight(cm,barMeasure);update.force=false}update.signal(cm,"update",cm);if(cm.display.viewFrom!=cm.display.reportedViewFrom||cm.display.viewTo!=cm.display.reportedViewTo){update.signal(cm,"viewportChange",cm,cm.display.viewFrom,cm.display.viewTo);cm.display.reportedViewFrom=cm.display.viewFrom;cm.display.reportedViewTo=cm.display.viewTo}}function updateDisplaySimple(cm,viewport){var update=new DisplayUpdate(cm,viewport);if(updateDisplayIfNeeded(cm,update)){updateHeightsInViewport(cm);postUpdateDisplay(cm,update);var barMeasure=measureForScrollbars(cm);updateSelection(cm);updateScrollbars(cm,barMeasure);setDocumentHeight(cm,barMeasure);update.finish()}}function patchDisplay(cm,updateNumbersFrom,dims){var display=cm.display,lineNumbers=cm.options.lineNumbers;var container=display.lineDiv,cur=container.firstChild;function rm(node){var next=node.nextSibling;if(webkit&&mac&&cm.display.currentWheelTarget==node){node.style.display="none"}else{node.parentNode.removeChild(node)}return next}var view=display.view,lineN=display.viewFrom;for(var i=0;i<view.length;i++){var lineView=view[i];if(lineView.hidden);else if(!lineView.node||lineView.node.parentNode!=container){var node=buildLineElement(cm,lineView,lineN,dims);container.insertBefore(node,cur)}else{while(cur!=lineView.node){cur=rm(cur)}var updateNumber=lineNumbers&&updateNumbersFrom!=null&&updateNumbersFrom<=lineN&&lineView.lineNumber;if(lineView.changes){if(indexOf(lineView.changes,"gutter")>-1){updateNumber=false}updateLineForChanges(cm,lineView,lineN,dims)}if(updateNumber){removeChildren(lineView.lineNumber);lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options,lineN)))}cur=lineView.node.nextSibling}lineN+=lineView.size}while(cur){cur=rm(cur)}}function updateGutterSpace(display){var width=display.gutters.offsetWidth;display.sizer.style.marginLeft=width+"px"}function setDocumentHeight(cm,measure){cm.display.sizer.style.minHeight=measure.docHeight+"px";cm.display.heightForcer.style.top=measure.docHeight+"px";cm.display.gutters.style.height=measure.docHeight+cm.display.barHeight+scrollGap(cm)+"px"}function alignHorizontally(cm){var display=cm.display,view=display.view;if(!display.alignWidgets&&(!display.gutters.firstChild||!cm.options.fixedGutter)){return}var comp=compensateForHScroll(display)-display.scroller.scrollLeft+cm.doc.scrollLeft;var gutterW=display.gutters.offsetWidth,left=comp+"px";for(var i=0;i<view.length;i++){if(!view[i].hidden){if(cm.options.fixedGutter){if(view[i].gutter){view[i].gutter.style.left=left}if(view[i].gutterBackground){view[i].gutterBackground.style.left=left}}var align=view[i].alignable;if(align){for(var j=0;j<align.length;j++){align[j].style.left=left}}}}if(cm.options.fixedGutter){display.gutters.style.left=comp+gutterW+"px"}}function maybeUpdateLineNumberWidth(cm){if(!cm.options.lineNumbers){return false}var doc=cm.doc,last=lineNumberFor(cm.options,doc.first+doc.size-1),display=cm.display;if(last.length!=display.lineNumChars){var test=display.measure.appendChild(elt("div",[elt("div",last)],"CodeMirror-linenumber CodeMirror-gutter-elt"));var innerW=test.firstChild.offsetWidth,padding=test.offsetWidth-innerW;display.lineGutter.style.width="";display.lineNumInnerWidth=Math.max(innerW,display.lineGutter.offsetWidth-padding)+1;display.lineNumWidth=display.lineNumInnerWidth+padding;display.lineNumChars=display.lineNumInnerWidth?last.length:-1;display.lineGutter.style.width=display.lineNumWidth+"px";updateGutterSpace(cm.display);return true}return false}function getGutters(gutters,lineNumbers){var result=[],sawLineNumbers=false;for(var i=0;i<gutters.length;i++){var name=gutters[i],style=null;if(typeof name!="string"){style=name.style;name=name.className}if(name=="CodeMirror-linenumbers"){if(!lineNumbers){continue}else{sawLineNumbers=true}}result.push({className:name,style:style})}if(lineNumbers&&!sawLineNumbers){result.push({className:"CodeMirror-linenumbers",style:null})}return result}function renderGutters(display){var gutters=display.gutters,specs=display.gutterSpecs;removeChildren(gutters);display.lineGutter=null;for(var i=0;i<specs.length;++i){var ref=specs[i];var className=ref.className;var style=ref.style;var gElt=gutters.appendChild(elt("div",null,"CodeMirror-gutter "+className));if(style){gElt.style.cssText=style}if(className=="CodeMirror-linenumbers"){display.lineGutter=gElt;gElt.style.width=(display.lineNumWidth||1)+"px"}}gutters.style.display=specs.length?"":"none";updateGutterSpace(display)}function updateGutters(cm){renderGutters(cm.display);regChange(cm);alignHorizontally(cm)}function Display(place,doc,input,options){var d=this;this.input=input;d.scrollbarFiller=elt("div",null,"CodeMirror-scrollbar-filler");d.scrollbarFiller.setAttribute("cm-not-content","true");d.gutterFiller=elt("div",null,"CodeMirror-gutter-filler");d.gutterFiller.setAttribute("cm-not-content","true");d.lineDiv=eltP("div",null,"CodeMirror-code");d.selectionDiv=elt("div",null,null,"position: relative; z-index: 1");d.cursorDiv=elt("div",null,"CodeMirror-cursors");d.measure=elt("div",null,"CodeMirror-measure");d.lineMeasure=elt("div",null,"CodeMirror-measure");d.lineSpace=eltP("div",[d.measure,d.lineMeasure,d.selectionDiv,d.cursorDiv,d.lineDiv],null,"position: relative; outline: none");var lines=eltP("div",[d.lineSpace],"CodeMirror-lines");d.mover=elt("div",[lines],null,"position: relative");d.sizer=elt("div",[d.mover],"CodeMirror-sizer");d.sizerWidth=null;d.heightForcer=elt("div",null,null,"position: absolute; height: "+scrollerGap+"px; width: 1px;");d.gutters=elt("div",null,"CodeMirror-gutters");d.lineGutter=null;d.scroller=elt("div",[d.sizer,d.heightForcer,d.gutters],"CodeMirror-scroll");d.scroller.setAttribute("tabIndex","-1");d.wrapper=elt("div",[d.scrollbarFiller,d.gutterFiller,d.scroller],"CodeMirror");if(ie&&ie_version<8){d.gutters.style.zIndex=-1;d.scroller.style.paddingRight=0}if(!webkit&&!(gecko&&mobile)){d.scroller.draggable=true}if(place){if(place.appendChild){place.appendChild(d.wrapper)}else{place(d.wrapper)}}d.viewFrom=d.viewTo=doc.first;d.reportedViewFrom=d.reportedViewTo=doc.first;d.view=[];d.renderedView=null;d.externalMeasured=null;d.viewOffset=0;d.lastWrapHeight=d.lastWrapWidth=0;d.updateLineNumbers=null;d.nativeBarWidth=d.barHeight=d.barWidth=0;d.scrollbarsClipped=false;d.lineNumWidth=d.lineNumInnerWidth=d.lineNumChars=null;d.alignWidgets=false;d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null;d.maxLine=null;d.maxLineLength=0;d.maxLineChanged=false;d.wheelDX=d.wheelDY=d.wheelStartX=d.wheelStartY=null;d.shift=false;d.selForContextMenu=null;d.activeTouch=null;d.gutterSpecs=getGutters(options.gutters,options.lineNumbers);renderGutters(d);input.init(d)}var wheelSamples=0,wheelPixelsPerUnit=null;if(ie){wheelPixelsPerUnit=-.53}else if(gecko){wheelPixelsPerUnit=15}else if(chrome){wheelPixelsPerUnit=-.7}else if(safari){wheelPixelsPerUnit=-1/3}function wheelEventDelta(e){var dx=e.wheelDeltaX,dy=e.wheelDeltaY;if(dx==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS){dx=e.detail}if(dy==null&&e.detail&&e.axis==e.VERTICAL_AXIS){dy=e.detail}else if(dy==null){dy=e.wheelDelta}return{x:dx,y:dy}}function wheelEventPixels(e){var delta=wheelEventDelta(e);delta.x*=wheelPixelsPerUnit;delta.y*=wheelPixelsPerUnit;return delta}function onScrollWheel(cm,e){var delta=wheelEventDelta(e),dx=delta.x,dy=delta.y;var display=cm.display,scroll=display.scroller;var canScrollX=scroll.scrollWidth>scroll.clientWidth;var canScrollY=scroll.scrollHeight>scroll.clientHeight;if(!(dx&&canScrollX||dy&&canScrollY)){return}if(dy&&mac&&webkit){outer:for(var cur=e.target,view=display.view;cur!=scroll;cur=cur.parentNode){for(var i=0;i<view.length;i++){if(view[i].node==cur){cm.display.currentWheelTarget=cur;break outer}}}}if(dx&&!gecko&&!presto&&wheelPixelsPerUnit!=null){if(dy&&canScrollY){updateScrollTop(cm,Math.max(0,scroll.scrollTop+dy*wheelPixelsPerUnit))}setScrollLeft(cm,Math.max(0,scroll.scrollLeft+dx*wheelPixelsPerUnit));if(!dy||dy&&canScrollY){e_preventDefault(e)}display.wheelStartX=null;return}if(dy&&wheelPixelsPerUnit!=null){var pixels=dy*wheelPixelsPerUnit;var top=cm.doc.scrollTop,bot=top+display.wrapper.clientHeight;if(pixels<0){top=Math.max(0,top+pixels-50)}else{bot=Math.min(cm.doc.height,bot+pixels+50)}updateDisplaySimple(cm,{top:top,bottom:bot})}if(wheelSamples<20){if(display.wheelStartX==null){display.wheelStartX=scroll.scrollLeft;display.wheelStartY=scroll.scrollTop;display.wheelDX=dx;display.wheelDY=dy;setTimeout(function(){if(display.wheelStartX==null){return}var movedX=scroll.scrollLeft-display.wheelStartX;var movedY=scroll.scrollTop-display.wheelStartY;var sample=movedY&&display.wheelDY&&movedY/display.wheelDY||movedX&&display.wheelDX&&movedX/display.wheelDX;display.wheelStartX=display.wheelStartY=null;if(!sample){return}wheelPixelsPerUnit=(wheelPixelsPerUnit*wheelSamples+sample)/(wheelSamples+1);++wheelSamples},200)}else{display.wheelDX+=dx;display.wheelDY+=dy}}}var Selection=function(ranges,primIndex){this.ranges=ranges;this.primIndex=primIndex};Selection.prototype.primary=function(){return this.ranges[this.primIndex]};Selection.prototype.equals=function(other){if(other==this){return true}if(other.primIndex!=this.primIndex||other.ranges.length!=this.ranges.length){return false}for(var i=0;i<this.ranges.length;i++){var here=this.ranges[i],there=other.ranges[i];if(!equalCursorPos(here.anchor,there.anchor)||!equalCursorPos(here.head,there.head)){return false}}return true};Selection.prototype.deepCopy=function(){var out=[];for(var i=0;i<this.ranges.length;i++){out[i]=new Range(copyPos(this.ranges[i].anchor),copyPos(this.ranges[i].head))}return new Selection(out,this.primIndex)};Selection.prototype.somethingSelected=function(){for(var i=0;i<this.ranges.length;i++){if(!this.ranges[i].empty()){return true}}return false};Selection.prototype.contains=function(pos,end){if(!end){end=pos}for(var i=0;i<this.ranges.length;i++){var range=this.ranges[i];if(cmp(end,range.from())>=0&&cmp(pos,range.to())<=0){return i}}return-1};var Range=function(anchor,head){this.anchor=anchor;this.head=head};Range.prototype.from=function(){return minPos(this.anchor,this.head)};Range.prototype.to=function(){return maxPos(this.anchor,this.head)};Range.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};function normalizeSelection(cm,ranges,primIndex){var mayTouch=cm&&cm.options.selectionsMayTouch;var prim=ranges[primIndex];ranges.sort(function(a,b){return cmp(a.from(),b.from())});primIndex=indexOf(ranges,prim);for(var i=1;i<ranges.length;i++){var cur=ranges[i],prev=ranges[i-1];var diff=cmp(prev.to(),cur.from());if(mayTouch&&!cur.empty()?diff>0:diff>=0){var from=minPos(prev.from(),cur.from()),to=maxPos(prev.to(),cur.to());var inv=prev.empty()?cur.from()==cur.head:prev.from()==prev.head;if(i<=primIndex){--primIndex}ranges.splice(--i,2,new Range(inv?to:from,inv?from:to))}}return new Selection(ranges,primIndex)}function simpleSelection(anchor,head){return new Selection([new Range(anchor,head||anchor)],0)}function changeEnd(change){if(!change.text){return change.to}return Pos(change.from.line+change.text.length-1,lst(change.text).length+(change.text.length==1?change.from.ch:0))}function adjustForChange(pos,change){if(cmp(pos,change.from)<0){return pos}if(cmp(pos,change.to)<=0){return changeEnd(change)}var line=pos.line+change.text.length-(change.to.line-change.from.line)-1,ch=pos.ch;if(pos.line==change.to.line){ch+=changeEnd(change).ch-change.to.ch}return Pos(line,ch)}function computeSelAfterChange(doc,change){var out=[];for(var i=0;i<doc.sel.ranges.length;i++){var range=doc.sel.ranges[i];out.push(new Range(adjustForChange(range.anchor,change),adjustForChange(range.head,change)))}return normalizeSelection(doc.cm,out,doc.sel.primIndex)}function offsetPos(pos,old,nw){if(pos.line==old.line){return Pos(nw.line,pos.ch-old.ch+nw.ch)}else{return Pos(nw.line+(pos.line-old.line),pos.ch)}}function computeReplacedSel(doc,changes,hint){var out=[];var oldPrev=Pos(doc.first,0),newPrev=oldPrev;for(var i=0;i<changes.length;i++){var change=changes[i];var from=offsetPos(change.from,oldPrev,newPrev);var to=offsetPos(changeEnd(change),oldPrev,newPrev);oldPrev=change.to;newPrev=to;if(hint=="around"){var range=doc.sel.ranges[i],inv=cmp(range.head,range.anchor)<0;out[i]=new Range(inv?to:from,inv?from:to)}else{out[i]=new Range(from,from)}}return new Selection(out,doc.sel.primIndex)}function loadMode(cm){cm.doc.mode=getMode(cm.options,cm.doc.modeOption);resetModeState(cm)}function resetModeState(cm){cm.doc.iter(function(line){if(line.stateAfter){line.stateAfter=null}if(line.styles){line.styles=null}});cm.doc.modeFrontier=cm.doc.highlightFrontier=cm.doc.first;startWorker(cm,100);cm.state.modeGen++;if(cm.curOp){regChange(cm)}}function isWholeLineUpdate(doc,change){return change.from.ch==0&&change.to.ch==0&&lst(change.text)==""&&(!doc.cm||doc.cm.options.wholeLineUpdateBefore)}function updateDoc(doc,change,markedSpans,estimateHeight$$1){function spansFor(n){return markedSpans?markedSpans[n]:null}function update(line,text,spans){updateLine(line,text,spans,estimateHeight$$1);signalLater(line,"change",line,change)}function linesFor(start,end){var result=[];for(var i=start;i<end;++i){result.push(new Line(text[i],spansFor(i),estimateHeight$$1))}return result}var from=change.from,to=change.to,text=change.text;var firstLine=getLine(doc,from.line),lastLine=getLine(doc,to.line);var lastText=lst(text),lastSpans=spansFor(text.length-1),nlines=to.line-from.line;if(change.full){doc.insert(0,linesFor(0,text.length));doc.remove(text.length,doc.size-text.length)}else if(isWholeLineUpdate(doc,change)){var added=linesFor(0,text.length-1);update(lastLine,lastLine.text,lastSpans);if(nlines){doc.remove(from.line,nlines)}if(added.length){doc.insert(from.line,added)}}else if(firstLine==lastLine){if(text.length==1){update(firstLine,firstLine.text.slice(0,from.ch)+lastText+firstLine.text.slice(to.ch),lastSpans)}else{var added$1=linesFor(1,text.length-1);added$1.push(new Line(lastText+firstLine.text.slice(to.ch),lastSpans,estimateHeight$$1));update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0));doc.insert(from.line+1,added$1)}}else if(text.length==1){update(firstLine,firstLine.text.slice(0,from.ch)+text[0]+lastLine.text.slice(to.ch),spansFor(0));doc.remove(from.line+1,nlines)}else{update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0));update(lastLine,lastText+lastLine.text.slice(to.ch),lastSpans);var added$2=linesFor(1,text.length-1);if(nlines>1){doc.remove(from.line+1,nlines-1)}doc.insert(from.line+1,added$2)}signalLater(doc,"change",doc,change)}function linkedDocs(doc,f,sharedHistOnly){function propagate(doc,skip,sharedHist){if(doc.linked){for(var i=0;i<doc.linked.length;++i){var rel=doc.linked[i];if(rel.doc==skip){continue}var shared=sharedHist&&rel.sharedHist;if(sharedHistOnly&&!shared){continue}f(rel.doc,shared);propagate(rel.doc,doc,shared)}}}propagate(doc,null,true)}function attachDoc(cm,doc){if(doc.cm){throw new Error("This document is already in use.")}cm.doc=doc;doc.cm=cm;estimateLineHeights(cm);loadMode(cm);setDirectionClass(cm);if(!cm.options.lineWrapping){findMaxLine(cm)}cm.options.mode=doc.modeOption;regChange(cm)}function setDirectionClass(cm){(cm.doc.direction=="rtl"?addClass:rmClass)(cm.display.lineDiv,"CodeMirror-rtl")}function directionChanged(cm){runInOp(cm,function(){setDirectionClass(cm);regChange(cm)})}function History(startGen){this.done=[];this.undone=[];this.undoDepth=Infinity;this.lastModTime=this.lastSelTime=0;this.lastOp=this.lastSelOp=null;this.lastOrigin=this.lastSelOrigin=null;this.generation=this.maxGeneration=startGen||1}function historyChangeFromChange(doc,change){var histChange={from:copyPos(change.from),to:changeEnd(change),text:getBetween(doc,change.from,change.to)};attachLocalSpans(doc,histChange,change.from.line,change.to.line+1);linkedDocs(doc,function(doc){return attachLocalSpans(doc,histChange,change.from.line,change.to.line+1)},true);return histChange}function clearSelectionEvents(array){while(array.length){var last=lst(array);if(last.ranges){array.pop()}else{break}}}function lastChangeEvent(hist,force){if(force){clearSelectionEvents(hist.done);return lst(hist.done)}else if(hist.done.length&&!lst(hist.done).ranges){return lst(hist.done)}else if(hist.done.length>1&&!hist.done[hist.done.length-2].ranges){hist.done.pop();return lst(hist.done)}}function addChangeToHistory(doc,change,selAfter,opId){var hist=doc.history;hist.undone.length=0;var time=+new Date,cur;var last;if((hist.lastOp==opId||hist.lastOrigin==change.origin&&change.origin&&(change.origin.charAt(0)=="+"&&hist.lastModTime>time-(doc.cm?doc.cm.options.historyEventDelay:500)||change.origin.charAt(0)=="*"))&&(cur=lastChangeEvent(hist,hist.lastOp==opId))){last=lst(cur.changes);if(cmp(change.from,change.to)==0&&cmp(change.from,last.to)==0){last.to=changeEnd(change)}else{cur.changes.push(historyChangeFromChange(doc,change))}}else{var before=lst(hist.done);if(!before||!before.ranges){pushSelectionToHistory(doc.sel,hist.done)}cur={changes:[historyChangeFromChange(doc,change)],generation:hist.generation};hist.done.push(cur);while(hist.done.length>hist.undoDepth){hist.done.shift();if(!hist.done[0].ranges){hist.done.shift()}}}hist.done.push(selAfter);hist.generation=++hist.maxGeneration;hist.lastModTime=hist.lastSelTime=time;hist.lastOp=hist.lastSelOp=opId;hist.lastOrigin=hist.lastSelOrigin=change.origin;if(!last){signal(doc,"historyAdded")}}function selectionEventCanBeMerged(doc,origin,prev,sel){var ch=origin.charAt(0);return ch=="*"||ch=="+"&&prev.ranges.length==sel.ranges.length&&prev.somethingSelected()==sel.somethingSelected()&&new Date-doc.history.lastSelTime<=(doc.cm?doc.cm.options.historyEventDelay:500)}function addSelectionToHistory(doc,sel,opId,options){var hist=doc.history,origin=options&&options.origin;if(opId==hist.lastSelOp||origin&&hist.lastSelOrigin==origin&&(hist.lastModTime==hist.lastSelTime&&hist.lastOrigin==origin||selectionEventCanBeMerged(doc,origin,lst(hist.done),sel))){hist.done[hist.done.length-1]=sel}else{pushSelectionToHistory(sel,hist.done)}hist.lastSelTime=+new Date;hist.lastSelOrigin=origin;hist.lastSelOp=opId;if(options&&options.clearRedo!==false){clearSelectionEvents(hist.undone)}}function pushSelectionToHistory(sel,dest){var top=lst(dest);if(!(top&&top.ranges&&top.equals(sel))){dest.push(sel)}}function attachLocalSpans(doc,change,from,to){var existing=change["spans_"+doc.id],n=0;doc.iter(Math.max(doc.first,from),Math.min(doc.first+doc.size,to),function(line){if(line.markedSpans){(existing||(existing=change["spans_"+doc.id]={}))[n]=line.markedSpans}++n})}function removeClearedSpans(spans){if(!spans){return null}var out;for(var i=0;i<spans.length;++i){if(spans[i].marker.explicitlyCleared){if(!out){out=spans.slice(0,i)}}else if(out){out.push(spans[i])}}return!out?spans:out.length?out:null}function getOldSpans(doc,change){var found=change["spans_"+doc.id];if(!found){return null}var nw=[];for(var i=0;i<change.text.length;++i){nw.push(removeClearedSpans(found[i]))}return nw}function mergeOldSpans(doc,change){var old=getOldSpans(doc,change);var stretched=stretchSpansOverChange(doc,change);if(!old){return stretched}if(!stretched){return old}for(var i=0;i<old.length;++i){var oldCur=old[i],stretchCur=stretched[i];if(oldCur&&stretchCur){spans:for(var j=0;j<stretchCur.length;++j){var span=stretchCur[j];for(var k=0;k<oldCur.length;++k){if(oldCur[k].marker==span.marker){continue spans}}oldCur.push(span)}}else if(stretchCur){old[i]=stretchCur}}return old}function copyHistoryArray(events,newGroup,instantiateSel){var copy=[];for(var i=0;i<events.length;++i){var event=events[i];if(event.ranges){copy.push(instantiateSel?Selection.prototype.deepCopy.call(event):event);continue}var changes=event.changes,newChanges=[];copy.push({changes:newChanges});for(var j=0;j<changes.length;++j){var change=changes[j],m=void 0;newChanges.push({from:change.from,to:change.to,text:change.text});if(newGroup){for(var prop in change){if(m=prop.match(/^spans_(\d+)$/)){if(indexOf(newGroup,Number(m[1]))>-1){lst(newChanges)[prop]=change[prop];delete change[prop]}}
}}}}return copy}function extendRange(range,head,other,extend){if(extend){var anchor=range.anchor;if(other){var posBefore=cmp(head,anchor)<0;if(posBefore!=cmp(other,anchor)<0){anchor=head;head=other}else if(posBefore!=cmp(head,other)<0){head=other}}return new Range(anchor,head)}else{return new Range(other||head,head)}}function extendSelection(doc,head,other,options,extend){if(extend==null){extend=doc.cm&&(doc.cm.display.shift||doc.extend)}setSelection(doc,new Selection([extendRange(doc.sel.primary(),head,other,extend)],0),options)}function extendSelections(doc,heads,options){var out=[];var extend=doc.cm&&(doc.cm.display.shift||doc.extend);for(var i=0;i<doc.sel.ranges.length;i++){out[i]=extendRange(doc.sel.ranges[i],heads[i],null,extend)}var newSel=normalizeSelection(doc.cm,out,doc.sel.primIndex);setSelection(doc,newSel,options)}function replaceOneSelection(doc,i,range,options){var ranges=doc.sel.ranges.slice(0);ranges[i]=range;setSelection(doc,normalizeSelection(doc.cm,ranges,doc.sel.primIndex),options)}function setSimpleSelection(doc,anchor,head,options){setSelection(doc,simpleSelection(anchor,head),options)}function filterSelectionChange(doc,sel,options){var obj={ranges:sel.ranges,update:function(ranges){this.ranges=[];for(var i=0;i<ranges.length;i++){this.ranges[i]=new Range(clipPos(doc,ranges[i].anchor),clipPos(doc,ranges[i].head))}},origin:options&&options.origin};signal(doc,"beforeSelectionChange",doc,obj);if(doc.cm){signal(doc.cm,"beforeSelectionChange",doc.cm,obj)}if(obj.ranges!=sel.ranges){return normalizeSelection(doc.cm,obj.ranges,obj.ranges.length-1)}else{return sel}}function setSelectionReplaceHistory(doc,sel,options){var done=doc.history.done,last=lst(done);if(last&&last.ranges){done[done.length-1]=sel;setSelectionNoUndo(doc,sel,options)}else{setSelection(doc,sel,options)}}function setSelection(doc,sel,options){setSelectionNoUndo(doc,sel,options);addSelectionToHistory(doc,doc.sel,doc.cm?doc.cm.curOp.id:NaN,options)}function setSelectionNoUndo(doc,sel,options){if(hasHandler(doc,"beforeSelectionChange")||doc.cm&&hasHandler(doc.cm,"beforeSelectionChange")){sel=filterSelectionChange(doc,sel,options)}var bias=options&&options.bias||(cmp(sel.primary().head,doc.sel.primary().head)<0?-1:1);setSelectionInner(doc,skipAtomicInSelection(doc,sel,bias,true));if(!(options&&options.scroll===false)&&doc.cm){ensureCursorVisible(doc.cm)}}function setSelectionInner(doc,sel){if(sel.equals(doc.sel)){return}doc.sel=sel;if(doc.cm){doc.cm.curOp.updateInput=1;doc.cm.curOp.selectionChanged=true;signalCursorActivity(doc.cm)}signalLater(doc,"cursorActivity",doc)}function reCheckSelection(doc){setSelectionInner(doc,skipAtomicInSelection(doc,doc.sel,null,false))}function skipAtomicInSelection(doc,sel,bias,mayClear){var out;for(var i=0;i<sel.ranges.length;i++){var range=sel.ranges[i];var old=sel.ranges.length==doc.sel.ranges.length&&doc.sel.ranges[i];var newAnchor=skipAtomic(doc,range.anchor,old&&old.anchor,bias,mayClear);var newHead=skipAtomic(doc,range.head,old&&old.head,bias,mayClear);if(out||newAnchor!=range.anchor||newHead!=range.head){if(!out){out=sel.ranges.slice(0,i)}out[i]=new Range(newAnchor,newHead)}}return out?normalizeSelection(doc.cm,out,sel.primIndex):sel}function skipAtomicInner(doc,pos,oldPos,dir,mayClear){var line=getLine(doc,pos.line);if(line.markedSpans){for(var i=0;i<line.markedSpans.length;++i){var sp=line.markedSpans[i],m=sp.marker;var preventCursorLeft="selectLeft"in m?!m.selectLeft:m.inclusiveLeft;var preventCursorRight="selectRight"in m?!m.selectRight:m.inclusiveRight;if((sp.from==null||(preventCursorLeft?sp.from<=pos.ch:sp.from<pos.ch))&&(sp.to==null||(preventCursorRight?sp.to>=pos.ch:sp.to>pos.ch))){if(mayClear){signal(m,"beforeCursorEnter");if(m.explicitlyCleared){if(!line.markedSpans){break}else{--i;continue}}}if(!m.atomic){continue}if(oldPos){var near=m.find(dir<0?1:-1),diff=void 0;if(dir<0?preventCursorRight:preventCursorLeft){near=movePos(doc,near,-dir,near&&near.line==pos.line?line:null)}if(near&&near.line==pos.line&&(diff=cmp(near,oldPos))&&(dir<0?diff<0:diff>0)){return skipAtomicInner(doc,near,pos,dir,mayClear)}}var far=m.find(dir<0?-1:1);if(dir<0?preventCursorLeft:preventCursorRight){far=movePos(doc,far,dir,far.line==pos.line?line:null)}return far?skipAtomicInner(doc,far,pos,dir,mayClear):null}}}return pos}function skipAtomic(doc,pos,oldPos,bias,mayClear){var dir=bias||1;var found=skipAtomicInner(doc,pos,oldPos,dir,mayClear)||!mayClear&&skipAtomicInner(doc,pos,oldPos,dir,true)||skipAtomicInner(doc,pos,oldPos,-dir,mayClear)||!mayClear&&skipAtomicInner(doc,pos,oldPos,-dir,true);if(!found){doc.cantEdit=true;return Pos(doc.first,0)}return found}function movePos(doc,pos,dir,line){if(dir<0&&pos.ch==0){if(pos.line>doc.first){return clipPos(doc,Pos(pos.line-1))}else{return null}}else if(dir>0&&pos.ch==(line||getLine(doc,pos.line)).text.length){if(pos.line<doc.first+doc.size-1){return Pos(pos.line+1,0)}else{return null}}else{return new Pos(pos.line,pos.ch+dir)}}function selectAll(cm){cm.setSelection(Pos(cm.firstLine(),0),Pos(cm.lastLine()),sel_dontScroll)}function filterChange(doc,change,update){var obj={canceled:false,from:change.from,to:change.to,text:change.text,origin:change.origin,cancel:function(){return obj.canceled=true}};if(update){obj.update=function(from,to,text,origin){if(from){obj.from=clipPos(doc,from)}if(to){obj.to=clipPos(doc,to)}if(text){obj.text=text}if(origin!==undefined){obj.origin=origin}}}signal(doc,"beforeChange",doc,obj);if(doc.cm){signal(doc.cm,"beforeChange",doc.cm,obj)}if(obj.canceled){if(doc.cm){doc.cm.curOp.updateInput=2}return null}return{from:obj.from,to:obj.to,text:obj.text,origin:obj.origin}}function makeChange(doc,change,ignoreReadOnly){if(doc.cm){if(!doc.cm.curOp){return operation(doc.cm,makeChange)(doc,change,ignoreReadOnly)}if(doc.cm.state.suppressEdits){return}}if(hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange")){change=filterChange(doc,change,true);if(!change){return}}var split=sawReadOnlySpans&&!ignoreReadOnly&&removeReadOnlyRanges(doc,change.from,change.to);if(split){for(var i=split.length-1;i>=0;--i){makeChangeInner(doc,{from:split[i].from,to:split[i].to,text:i?[""]:change.text,origin:change.origin})}}else{makeChangeInner(doc,change)}}function makeChangeInner(doc,change){if(change.text.length==1&&change.text[0]==""&&cmp(change.from,change.to)==0){return}var selAfter=computeSelAfterChange(doc,change);addChangeToHistory(doc,change,selAfter,doc.cm?doc.cm.curOp.id:NaN);makeChangeSingleDoc(doc,change,selAfter,stretchSpansOverChange(doc,change));var rebased=[];linkedDocs(doc,function(doc,sharedHist){if(!sharedHist&&indexOf(rebased,doc.history)==-1){rebaseHist(doc.history,change);rebased.push(doc.history)}makeChangeSingleDoc(doc,change,null,stretchSpansOverChange(doc,change))})}function makeChangeFromHistory(doc,type,allowSelectionOnly){var suppress=doc.cm&&doc.cm.state.suppressEdits;if(suppress&&!allowSelectionOnly){return}var hist=doc.history,event,selAfter=doc.sel;var source=type=="undo"?hist.done:hist.undone,dest=type=="undo"?hist.undone:hist.done;var i=0;for(;i<source.length;i++){event=source[i];if(allowSelectionOnly?event.ranges&&!event.equals(doc.sel):!event.ranges){break}}if(i==source.length){return}hist.lastOrigin=hist.lastSelOrigin=null;for(;;){event=source.pop();if(event.ranges){pushSelectionToHistory(event,dest);if(allowSelectionOnly&&!event.equals(doc.sel)){setSelection(doc,event,{clearRedo:false});return}selAfter=event}else if(suppress){source.push(event);return}else{break}}var antiChanges=[];pushSelectionToHistory(selAfter,dest);dest.push({changes:antiChanges,generation:hist.generation});hist.generation=event.generation||++hist.maxGeneration;var filter=hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange");var loop=function(i){var change=event.changes[i];change.origin=type;if(filter&&!filterChange(doc,change,false)){source.length=0;return{}}antiChanges.push(historyChangeFromChange(doc,change));var after=i?computeSelAfterChange(doc,change):lst(source);makeChangeSingleDoc(doc,change,after,mergeOldSpans(doc,change));if(!i&&doc.cm){doc.cm.scrollIntoView({from:change.from,to:changeEnd(change)})}var rebased=[];linkedDocs(doc,function(doc,sharedHist){if(!sharedHist&&indexOf(rebased,doc.history)==-1){rebaseHist(doc.history,change);rebased.push(doc.history)}makeChangeSingleDoc(doc,change,null,mergeOldSpans(doc,change))})};for(var i$1=event.changes.length-1;i$1>=0;--i$1){var returned=loop(i$1);if(returned)return returned.v}}function shiftDoc(doc,distance){if(distance==0){return}doc.first+=distance;doc.sel=new Selection(map(doc.sel.ranges,function(range){return new Range(Pos(range.anchor.line+distance,range.anchor.ch),Pos(range.head.line+distance,range.head.ch))}),doc.sel.primIndex);if(doc.cm){regChange(doc.cm,doc.first,doc.first-distance,distance);for(var d=doc.cm.display,l=d.viewFrom;l<d.viewTo;l++){regLineChange(doc.cm,l,"gutter")}}}function makeChangeSingleDoc(doc,change,selAfter,spans){if(doc.cm&&!doc.cm.curOp){return operation(doc.cm,makeChangeSingleDoc)(doc,change,selAfter,spans)}if(change.to.line<doc.first){shiftDoc(doc,change.text.length-1-(change.to.line-change.from.line));return}if(change.from.line>doc.lastLine()){return}if(change.from.line<doc.first){var shift=change.text.length-1-(doc.first-change.from.line);shiftDoc(doc,shift);change={from:Pos(doc.first,0),to:Pos(change.to.line+shift,change.to.ch),text:[lst(change.text)],origin:change.origin}}var last=doc.lastLine();if(change.to.line>last){change={from:change.from,to:Pos(last,getLine(doc,last).text.length),text:[change.text[0]],origin:change.origin}}change.removed=getBetween(doc,change.from,change.to);if(!selAfter){selAfter=computeSelAfterChange(doc,change)}if(doc.cm){makeChangeSingleDocInEditor(doc.cm,change,spans)}else{updateDoc(doc,change,spans)}setSelectionNoUndo(doc,selAfter,sel_dontScroll);if(doc.cantEdit&&skipAtomic(doc,Pos(doc.firstLine(),0))){doc.cantEdit=false}}function makeChangeSingleDocInEditor(cm,change,spans){var doc=cm.doc,display=cm.display,from=change.from,to=change.to;var recomputeMaxLength=false,checkWidthStart=from.line;if(!cm.options.lineWrapping){checkWidthStart=lineNo(visualLine(getLine(doc,from.line)));doc.iter(checkWidthStart,to.line+1,function(line){if(line==display.maxLine){recomputeMaxLength=true;return true}})}if(doc.sel.contains(change.from,change.to)>-1){signalCursorActivity(cm)}updateDoc(doc,change,spans,estimateHeight(cm));if(!cm.options.lineWrapping){doc.iter(checkWidthStart,from.line+change.text.length,function(line){var len=lineLength(line);if(len>display.maxLineLength){display.maxLine=line;display.maxLineLength=len;display.maxLineChanged=true;recomputeMaxLength=false}});if(recomputeMaxLength){cm.curOp.updateMaxLine=true}}retreatFrontier(doc,from.line);startWorker(cm,400);var lendiff=change.text.length-(to.line-from.line)-1;if(change.full){regChange(cm)}else if(from.line==to.line&&change.text.length==1&&!isWholeLineUpdate(cm.doc,change)){regLineChange(cm,from.line,"text")}else{regChange(cm,from.line,to.line+1,lendiff)}var changesHandler=hasHandler(cm,"changes"),changeHandler=hasHandler(cm,"change");if(changeHandler||changesHandler){var obj={from:from,to:to,text:change.text,removed:change.removed,origin:change.origin};if(changeHandler){signalLater(cm,"change",cm,obj)}if(changesHandler){(cm.curOp.changeObjs||(cm.curOp.changeObjs=[])).push(obj)}}cm.display.selForContextMenu=null}function replaceRange(doc,code,from,to,origin){var assign;if(!to){to=from}if(cmp(to,from)<0){assign=[to,from],from=assign[0],to=assign[1]}if(typeof code=="string"){code=doc.splitLines(code)}makeChange(doc,{from:from,to:to,text:code,origin:origin})}function rebaseHistSelSingle(pos,from,to,diff){if(to<pos.line){pos.line+=diff}else if(from<pos.line){pos.line=from;pos.ch=0}}function rebaseHistArray(array,from,to,diff){for(var i=0;i<array.length;++i){var sub=array[i],ok=true;if(sub.ranges){if(!sub.copied){sub=array[i]=sub.deepCopy();sub.copied=true}for(var j=0;j<sub.ranges.length;j++){rebaseHistSelSingle(sub.ranges[j].anchor,from,to,diff);rebaseHistSelSingle(sub.ranges[j].head,from,to,diff)}continue}for(var j$1=0;j$1<sub.changes.length;++j$1){var cur=sub.changes[j$1];if(to<cur.from.line){cur.from=Pos(cur.from.line+diff,cur.from.ch);cur.to=Pos(cur.to.line+diff,cur.to.ch)}else if(from<=cur.to.line){ok=false;break}}if(!ok){array.splice(0,i+1);i=0}}}function rebaseHist(hist,change){var from=change.from.line,to=change.to.line,diff=change.text.length-(to-from)-1;rebaseHistArray(hist.done,from,to,diff);rebaseHistArray(hist.undone,from,to,diff)}function changeLine(doc,handle,changeType,op){var no=handle,line=handle;if(typeof handle=="number"){line=getLine(doc,clipLine(doc,handle))}else{no=lineNo(handle)}if(no==null){return null}if(op(line,no)&&doc.cm){regLineChange(doc.cm,no,changeType)}return line}function LeafChunk(lines){this.lines=lines;this.parent=null;var height=0;for(var i=0;i<lines.length;++i){lines[i].parent=this;height+=lines[i].height}this.height=height}LeafChunk.prototype={chunkSize:function(){return this.lines.length},removeInner:function(at,n){for(var i=at,e=at+n;i<e;++i){var line=this.lines[i];this.height-=line.height;cleanUpLine(line);signalLater(line,"delete")}this.lines.splice(at,n)},collapse:function(lines){lines.push.apply(lines,this.lines)},insertInner:function(at,lines,height){this.height+=height;this.lines=this.lines.slice(0,at).concat(lines).concat(this.lines.slice(at));for(var i=0;i<lines.length;++i){lines[i].parent=this}},iterN:function(at,n,op){for(var e=at+n;at<e;++at){if(op(this.lines[at])){return true}}}};function BranchChunk(children){this.children=children;var size=0,height=0;for(var i=0;i<children.length;++i){var ch=children[i];size+=ch.chunkSize();height+=ch.height;ch.parent=this}this.size=size;this.height=height;this.parent=null}BranchChunk.prototype={chunkSize:function(){return this.size},removeInner:function(at,n){this.size-=n;for(var i=0;i<this.children.length;++i){var child=this.children[i],sz=child.chunkSize();if(at<sz){var rm=Math.min(n,sz-at),oldHeight=child.height;child.removeInner(at,rm);this.height-=oldHeight-child.height;if(sz==rm){this.children.splice(i--,1);child.parent=null}if((n-=rm)==0){break}at=0}else{at-=sz}}if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof LeafChunk))){var lines=[];this.collapse(lines);this.children=[new LeafChunk(lines)];this.children[0].parent=this}},collapse:function(lines){for(var i=0;i<this.children.length;++i){this.children[i].collapse(lines)}},insertInner:function(at,lines,height){this.size+=lines.length;this.height+=height;for(var i=0;i<this.children.length;++i){var child=this.children[i],sz=child.chunkSize();if(at<=sz){child.insertInner(at,lines,height);if(child.lines&&child.lines.length>50){var remaining=child.lines.length%25+25;for(var pos=remaining;pos<child.lines.length;){var leaf=new LeafChunk(child.lines.slice(pos,pos+=25));child.height-=leaf.height;this.children.splice(++i,0,leaf);leaf.parent=this}child.lines=child.lines.slice(0,remaining);this.maybeSpill()}break}at-=sz}},maybeSpill:function(){if(this.children.length<=10){return}var me=this;do{var spilled=me.children.splice(me.children.length-5,5);var sibling=new BranchChunk(spilled);if(!me.parent){var copy=new BranchChunk(me.children);copy.parent=me;me.children=[copy,sibling];me=copy}else{me.size-=sibling.size;me.height-=sibling.height;var myIndex=indexOf(me.parent.children,me);me.parent.children.splice(myIndex+1,0,sibling)}sibling.parent=me.parent}while(me.children.length>10);me.parent.maybeSpill()},iterN:function(at,n,op){for(var i=0;i<this.children.length;++i){var child=this.children[i],sz=child.chunkSize();if(at<sz){var used=Math.min(n,sz-at);if(child.iterN(at,used,op)){return true}if((n-=used)==0){break}at=0}else{at-=sz}}}};var LineWidget=function(doc,node,options){if(options){for(var opt in options){if(options.hasOwnProperty(opt)){this[opt]=options[opt]}}}this.doc=doc;this.node=node};LineWidget.prototype.clear=function(){var cm=this.doc.cm,ws=this.line.widgets,line=this.line,no=lineNo(line);if(no==null||!ws){return}for(var i=0;i<ws.length;++i){if(ws[i]==this){ws.splice(i--,1)}}if(!ws.length){line.widgets=null}var height=widgetHeight(this);updateLineHeight(line,Math.max(0,line.height-height));if(cm){runInOp(cm,function(){adjustScrollWhenAboveVisible(cm,line,-height);regLineChange(cm,no,"widget")});signalLater(cm,"lineWidgetCleared",cm,this,no)}};LineWidget.prototype.changed=function(){var this$1=this;var oldH=this.height,cm=this.doc.cm,line=this.line;this.height=null;var diff=widgetHeight(this)-oldH;if(!diff){return}if(!lineIsHidden(this.doc,line)){updateLineHeight(line,line.height+diff)}if(cm){runInOp(cm,function(){cm.curOp.forceUpdate=true;adjustScrollWhenAboveVisible(cm,line,diff);signalLater(cm,"lineWidgetChanged",cm,this$1,lineNo(line))})}};eventMixin(LineWidget);function adjustScrollWhenAboveVisible(cm,line,diff){if(heightAtLine(line)<(cm.curOp&&cm.curOp.scrollTop||cm.doc.scrollTop)){addToScrollTop(cm,diff)}}function addLineWidget(doc,handle,node,options){var widget=new LineWidget(doc,node,options);var cm=doc.cm;if(cm&&widget.noHScroll){cm.display.alignWidgets=true}changeLine(doc,handle,"widget",function(line){var widgets=line.widgets||(line.widgets=[]);if(widget.insertAt==null){widgets.push(widget)}else{widgets.splice(Math.min(widgets.length-1,Math.max(0,widget.insertAt)),0,widget)}widget.line=line;if(cm&&!lineIsHidden(doc,line)){var aboveVisible=heightAtLine(line)<doc.scrollTop;updateLineHeight(line,line.height+widgetHeight(widget));if(aboveVisible){addToScrollTop(cm,widget.height)}cm.curOp.forceUpdate=true}return true});if(cm){signalLater(cm,"lineWidgetAdded",cm,widget,typeof handle=="number"?handle:lineNo(handle))}return widget}var nextMarkerId=0;var TextMarker=function(doc,type){this.lines=[];this.type=type;this.doc=doc;this.id=++nextMarkerId};TextMarker.prototype.clear=function(){if(this.explicitlyCleared){return}var cm=this.doc.cm,withOp=cm&&!cm.curOp;if(withOp){startOperation(cm)}if(hasHandler(this,"clear")){var found=this.find();if(found){signalLater(this,"clear",found.from,found.to)}}var min=null,max=null;for(var i=0;i<this.lines.length;++i){var line=this.lines[i];var span=getMarkedSpanFor(line.markedSpans,this);if(cm&&!this.collapsed){regLineChange(cm,lineNo(line),"text")}else if(cm){if(span.to!=null){max=lineNo(line)}if(span.from!=null){min=lineNo(line)}}line.markedSpans=removeMarkedSpan(line.markedSpans,span);if(span.from==null&&this.collapsed&&!lineIsHidden(this.doc,line)&&cm){updateLineHeight(line,textHeight(cm.display))}}if(cm&&this.collapsed&&!cm.options.lineWrapping){for(var i$1=0;i$1<this.lines.length;++i$1){var visual=visualLine(this.lines[i$1]),len=lineLength(visual);if(len>cm.display.maxLineLength){cm.display.maxLine=visual;cm.display.maxLineLength=len;cm.display.maxLineChanged=true}}}if(min!=null&&cm&&this.collapsed){regChange(cm,min,max+1)}this.lines.length=0;this.explicitlyCleared=true;if(this.atomic&&this.doc.cantEdit){this.doc.cantEdit=false;if(cm){reCheckSelection(cm.doc)}}if(cm){signalLater(cm,"markerCleared",cm,this,min,max)}if(withOp){endOperation(cm)}if(this.parent){this.parent.clear()}};TextMarker.prototype.find=function(side,lineObj){if(side==null&&this.type=="bookmark"){side=1}var from,to;for(var i=0;i<this.lines.length;++i){var line=this.lines[i];var span=getMarkedSpanFor(line.markedSpans,this);if(span.from!=null){from=Pos(lineObj?line:lineNo(line),span.from);if(side==-1){return from}}if(span.to!=null){to=Pos(lineObj?line:lineNo(line),span.to);if(side==1){return to}}}return from&&{from:from,to:to}};TextMarker.prototype.changed=function(){var this$1=this;var pos=this.find(-1,true),widget=this,cm=this.doc.cm;if(!pos||!cm){return}runInOp(cm,function(){var line=pos.line,lineN=lineNo(pos.line);var view=findViewForLine(cm,lineN);if(view){clearLineMeasurementCacheFor(view);cm.curOp.selectionChanged=cm.curOp.forceUpdate=true}cm.curOp.updateMaxLine=true;if(!lineIsHidden(widget.doc,line)&&widget.height!=null){var oldHeight=widget.height;widget.height=null;var dHeight=widgetHeight(widget)-oldHeight;if(dHeight){updateLineHeight(line,line.height+dHeight)}}signalLater(cm,"markerChanged",cm,this$1)})};TextMarker.prototype.attachLine=function(line){if(!this.lines.length&&this.doc.cm){var op=this.doc.cm.curOp;if(!op.maybeHiddenMarkers||indexOf(op.maybeHiddenMarkers,this)==-1){(op.maybeUnhiddenMarkers||(op.maybeUnhiddenMarkers=[])).push(this)}}this.lines.push(line)};TextMarker.prototype.detachLine=function(line){this.lines.splice(indexOf(this.lines,line),1);if(!this.lines.length&&this.doc.cm){var op=this.doc.cm.curOp;(op.maybeHiddenMarkers||(op.maybeHiddenMarkers=[])).push(this)}};eventMixin(TextMarker);function markText(doc,from,to,options,type){if(options&&options.shared){return markTextShared(doc,from,to,options,type)}if(doc.cm&&!doc.cm.curOp){return operation(doc.cm,markText)(doc,from,to,options,type)}var marker=new TextMarker(doc,type),diff=cmp(from,to);if(options){copyObj(options,marker,false)}if(diff>0||diff==0&&marker.clearWhenEmpty!==false){return marker}if(marker.replacedWith){marker.collapsed=true;marker.widgetNode=eltP("span",[marker.replacedWith],"CodeMirror-widget");if(!options.handleMouseEvents){marker.widgetNode.setAttribute("cm-ignore-events","true")}if(options.insertLeft){marker.widgetNode.insertLeft=true}}if(marker.collapsed){if(conflictingCollapsedRange(doc,from.line,from,to,marker)||from.line!=to.line&&conflictingCollapsedRange(doc,to.line,from,to,marker)){throw new Error("Inserting collapsed marker partially overlapping an existing one")}seeCollapsedSpans()}if(marker.addToHistory){addChangeToHistory(doc,{from:from,to:to,origin:"markText"},doc.sel,NaN)}var curLine=from.line,cm=doc.cm,updateMaxLine;doc.iter(curLine,to.line+1,function(line){if(cm&&marker.collapsed&&!cm.options.lineWrapping&&visualLine(line)==cm.display.maxLine){updateMaxLine=true}if(marker.collapsed&&curLine!=from.line){updateLineHeight(line,0)}addMarkedSpan(line,new MarkedSpan(marker,curLine==from.line?from.ch:null,curLine==to.line?to.ch:null));++curLine});if(marker.collapsed){doc.iter(from.line,to.line+1,function(line){if(lineIsHidden(doc,line)){updateLineHeight(line,0)}})}if(marker.clearOnEnter){on(marker,"beforeCursorEnter",function(){return marker.clear()})}if(marker.readOnly){seeReadOnlySpans();if(doc.history.done.length||doc.history.undone.length){doc.clearHistory()}}if(marker.collapsed){marker.id=++nextMarkerId;marker.atomic=true}if(cm){if(updateMaxLine){cm.curOp.updateMaxLine=true}if(marker.collapsed){regChange(cm,from.line,to.line+1)}else if(marker.className||marker.startStyle||marker.endStyle||marker.css||marker.attributes||marker.title){for(var i=from.line;i<=to.line;i++){regLineChange(cm,i,"text")}}if(marker.atomic){reCheckSelection(cm.doc)}signalLater(cm,"markerAdded",cm,marker)}return marker}var SharedTextMarker=function(markers,primary){this.markers=markers;this.primary=primary;for(var i=0;i<markers.length;++i){markers[i].parent=this}};SharedTextMarker.prototype.clear=function(){if(this.explicitlyCleared){return}this.explicitlyCleared=true;for(var i=0;i<this.markers.length;++i){this.markers[i].clear()}signalLater(this,"clear")};SharedTextMarker.prototype.find=function(side,lineObj){return this.primary.find(side,lineObj)};eventMixin(SharedTextMarker);function markTextShared(doc,from,to,options,type){options=copyObj(options);options.shared=false;var markers=[markText(doc,from,to,options,type)],primary=markers[0];var widget=options.widgetNode;linkedDocs(doc,function(doc){if(widget){options.widgetNode=widget.cloneNode(true)}markers.push(markText(doc,clipPos(doc,from),clipPos(doc,to),options,type));for(var i=0;i<doc.linked.length;++i){if(doc.linked[i].isParent){return}}primary=lst(markers)});return new SharedTextMarker(markers,primary)}function findSharedMarkers(doc){return doc.findMarks(Pos(doc.first,0),doc.clipPos(Pos(doc.lastLine())),function(m){return m.parent})}function copySharedMarkers(doc,markers){for(var i=0;i<markers.length;i++){var marker=markers[i],pos=marker.find();var mFrom=doc.clipPos(pos.from),mTo=doc.clipPos(pos.to);if(cmp(mFrom,mTo)){var subMark=markText(doc,mFrom,mTo,marker.primary,marker.primary.type);marker.markers.push(subMark);subMark.parent=marker}}}function detachSharedMarkers(markers){var loop=function(i){var marker=markers[i],linked=[marker.primary.doc];linkedDocs(marker.primary.doc,function(d){return linked.push(d)});for(var j=0;j<marker.markers.length;j++){var subMarker=marker.markers[j];if(indexOf(linked,subMarker.doc)==-1){subMarker.parent=null;marker.markers.splice(j--,1)}}};for(var i=0;i<markers.length;i++)loop(i)}var nextDocId=0;var Doc=function(text,mode,firstLine,lineSep,direction){if(!(this instanceof Doc)){return new Doc(text,mode,firstLine,lineSep,direction)}if(firstLine==null){firstLine=0}BranchChunk.call(this,[new LeafChunk([new Line("",null)])]);this.first=firstLine;this.scrollTop=this.scrollLeft=0;this.cantEdit=false;this.cleanGeneration=1;this.modeFrontier=this.highlightFrontier=firstLine;var start=Pos(firstLine,0);this.sel=simpleSelection(start);this.history=new History(null);this.id=++nextDocId;this.modeOption=mode;this.lineSep=lineSep;this.direction=direction=="rtl"?"rtl":"ltr";this.extend=false;if(typeof text=="string"){text=this.splitLines(text)}updateDoc(this,{from:start,to:start,text:text});setSelection(this,simpleSelection(start),sel_dontScroll)};Doc.prototype=createObj(BranchChunk.prototype,{constructor:Doc,iter:function(from,to,op){if(op){this.iterN(from-this.first,to-from,op)}else{this.iterN(this.first,this.first+this.size,from)}},insert:function(at,lines){var height=0;for(var i=0;i<lines.length;++i){height+=lines[i].height}this.insertInner(at-this.first,lines,height)},remove:function(at,n){this.removeInner(at-this.first,n)},getValue:function(lineSep){var lines=getLines(this,this.first,this.first+this.size);if(lineSep===false){return lines}return lines.join(lineSep||this.lineSeparator())},setValue:docMethodOp(function(code){var top=Pos(this.first,0),last=this.first+this.size-1;makeChange(this,{from:top,to:Pos(last,getLine(this,last).text.length),text:this.splitLines(code),origin:"setValue",full:true},true);if(this.cm){scrollToCoords(this.cm,0,0)}setSelection(this,simpleSelection(top),sel_dontScroll)}),replaceRange:function(code,from,to,origin){from=clipPos(this,from);to=to?clipPos(this,to):from;replaceRange(this,code,from,to,origin)},getRange:function(from,to,lineSep){var lines=getBetween(this,clipPos(this,from),clipPos(this,to));if(lineSep===false){return lines}return lines.join(lineSep||this.lineSeparator())},getLine:function(line){var l=this.getLineHandle(line);return l&&l.text},setLine:function(line,text){if(isLine(this,line))replaceRange(this,text,Pos(line,0),clipPos(this,Pos(line)))},getLineHandle:function(line){if(isLine(this,line)){return getLine(this,line)}},getLineNumber:function(line){return lineNo(line)},getLineHandleVisualStart:function(line){if(typeof line=="number"){line=getLine(this,line)}return visualLine(line)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(pos){return clipPos(this,pos)},getCursor:function(start){var range$$1=this.sel.primary(),pos;if(start==null||start=="head"){pos=range$$1.head}else if(start=="anchor"){pos=range$$1.anchor}else if(start=="end"||start=="to"||start===false){pos=range$$1.to()}else{pos=range$$1.from()}return pos},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:docMethodOp(function(line,ch,options){setSimpleSelection(this,clipPos(this,typeof line=="number"?Pos(line,ch||0):line),null,options)}),setSelection:docMethodOp(function(anchor,head,options){setSimpleSelection(this,clipPos(this,anchor),clipPos(this,head||anchor),options)}),extendSelection:docMethodOp(function(head,other,options){extendSelection(this,clipPos(this,head),other&&clipPos(this,other),options)}),extendSelections:docMethodOp(function(heads,options){extendSelections(this,clipPosArray(this,heads),options)}),extendSelectionsBy:docMethodOp(function(f,options){var heads=map(this.sel.ranges,f);extendSelections(this,clipPosArray(this,heads),options)}),setSelections:docMethodOp(function(ranges,primary,options){if(!ranges.length){return}var out=[];for(var i=0;i<ranges.length;i++){out[i]=new Range(clipPos(this,ranges[i].anchor),clipPos(this,ranges[i].head))}if(primary==null){primary=Math.min(ranges.length-1,this.sel.primIndex)}setSelection(this,normalizeSelection(this.cm,out,primary),options)}),addSelection:docMethodOp(function(anchor,head,options){var ranges=this.sel.ranges.slice(0);ranges.push(new Range(clipPos(this,anchor),clipPos(this,head||anchor)));setSelection(this,normalizeSelection(this.cm,ranges,ranges.length-1),options)}),getSelection:function(lineSep){var ranges=this.sel.ranges,lines;for(var i=0;i<ranges.length;i++){var sel=getBetween(this,ranges[i].from(),ranges[i].to());lines=lines?lines.concat(sel):sel}if(lineSep===false){return lines}else{return lines.join(lineSep||this.lineSeparator())}},getSelections:function(lineSep){var parts=[],ranges=this.sel.ranges;for(var i=0;i<ranges.length;i++){var sel=getBetween(this,ranges[i].from(),ranges[i].to());if(lineSep!==false){sel=sel.join(lineSep||this.lineSeparator())}parts[i]=sel}return parts},replaceSelection:function(code,collapse,origin){var dup=[];for(var i=0;i<this.sel.ranges.length;i++){dup[i]=code}this.replaceSelections(dup,collapse,origin||"+input")},replaceSelections:docMethodOp(function(code,collapse,origin){var changes=[],sel=this.sel;for(var i=0;i<sel.ranges.length;i++){var range$$1=sel.ranges[i];changes[i]={from:range$$1.from(),to:range$$1.to(),text:this.splitLines(code[i]),origin:origin}}var newSel=collapse&&collapse!="end"&&computeReplacedSel(this,changes,collapse);for(var i$1=changes.length-1;i$1>=0;i$1--){makeChange(this,changes[i$1])}if(newSel){setSelectionReplaceHistory(this,newSel)}else if(this.cm){ensureCursorVisible(this.cm)}}),undo:docMethodOp(function(){makeChangeFromHistory(this,"undo")}),redo:docMethodOp(function(){makeChangeFromHistory(this,"redo")}),undoSelection:docMethodOp(function(){makeChangeFromHistory(this,"undo",true)}),redoSelection:docMethodOp(function(){makeChangeFromHistory(this,"redo",true)}),setExtending:function(val){this.extend=val},getExtending:function(){return this.extend},historySize:function(){var hist=this.history,done=0,undone=0;for(var i=0;i<hist.done.length;i++){if(!hist.done[i].ranges){++done}}for(var i$1=0;i$1<hist.undone.length;i$1++){if(!hist.undone[i$1].ranges){++undone}}return{undo:done,redo:undone}},clearHistory:function(){this.history=new History(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(true)},changeGeneration:function(forceSplit){if(forceSplit){this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null}return this.history.generation},isClean:function(gen){return this.history.generation==(gen||this.cleanGeneration)},getHistory:function(){return{done:copyHistoryArray(this.history.done),undone:copyHistoryArray(this.history.undone)}},setHistory:function(histData){var hist=this.history=new History(this.history.maxGeneration);hist.done=copyHistoryArray(histData.done.slice(0),null,true);hist.undone=copyHistoryArray(histData.undone.slice(0),null,true)},setGutterMarker:docMethodOp(function(line,gutterID,value){return changeLine(this,line,"gutter",function(line){var markers=line.gutterMarkers||(line.gutterMarkers={});markers[gutterID]=value;if(!value&&isEmpty(markers)){line.gutterMarkers=null}return true})}),clearGutter:docMethodOp(function(gutterID){var this$1=this;this.iter(function(line){if(line.gutterMarkers&&line.gutterMarkers[gutterID]){changeLine(this$1,line,"gutter",function(){line.gutterMarkers[gutterID]=null;if(isEmpty(line.gutterMarkers)){line.gutterMarkers=null}return true})}})}),lineInfo:function(line){var n;if(typeof line=="number"){if(!isLine(this,line)){return null}n=line;line=getLine(this,line);if(!line){return null}}else{n=lineNo(line);
if(n==null){return null}}return{line:n,handle:line,text:line.text,gutterMarkers:line.gutterMarkers,textClass:line.textClass,bgClass:line.bgClass,wrapClass:line.wrapClass,widgets:line.widgets}},addLineClass:docMethodOp(function(handle,where,cls){return changeLine(this,handle,where=="gutter"?"gutter":"class",function(line){var prop=where=="text"?"textClass":where=="background"?"bgClass":where=="gutter"?"gutterClass":"wrapClass";if(!line[prop]){line[prop]=cls}else if(classTest(cls).test(line[prop])){return false}else{line[prop]+=" "+cls}return true})}),removeLineClass:docMethodOp(function(handle,where,cls){return changeLine(this,handle,where=="gutter"?"gutter":"class",function(line){var prop=where=="text"?"textClass":where=="background"?"bgClass":where=="gutter"?"gutterClass":"wrapClass";var cur=line[prop];if(!cur){return false}else if(cls==null){line[prop]=null}else{var found=cur.match(classTest(cls));if(!found){return false}var end=found.index+found[0].length;line[prop]=cur.slice(0,found.index)+(!found.index||end==cur.length?"":" ")+cur.slice(end)||null}return true})}),addLineWidget:docMethodOp(function(handle,node,options){return addLineWidget(this,handle,node,options)}),removeLineWidget:function(widget){widget.clear()},markText:function(from,to,options){return markText(this,clipPos(this,from),clipPos(this,to),options,options&&options.type||"range")},setBookmark:function(pos,options){var realOpts={replacedWith:options&&(options.nodeType==null?options.widget:options),insertLeft:options&&options.insertLeft,clearWhenEmpty:false,shared:options&&options.shared,handleMouseEvents:options&&options.handleMouseEvents};pos=clipPos(this,pos);return markText(this,pos,pos,realOpts,"bookmark")},findMarksAt:function(pos){pos=clipPos(this,pos);var markers=[],spans=getLine(this,pos.line).markedSpans;if(spans){for(var i=0;i<spans.length;++i){var span=spans[i];if((span.from==null||span.from<=pos.ch)&&(span.to==null||span.to>=pos.ch)){markers.push(span.marker.parent||span.marker)}}}return markers},findMarks:function(from,to,filter){from=clipPos(this,from);to=clipPos(this,to);var found=[],lineNo$$1=from.line;this.iter(from.line,to.line+1,function(line){var spans=line.markedSpans;if(spans){for(var i=0;i<spans.length;i++){var span=spans[i];if(!(span.to!=null&&lineNo$$1==from.line&&from.ch>=span.to||span.from==null&&lineNo$$1!=from.line||span.from!=null&&lineNo$$1==to.line&&span.from>=to.ch)&&(!filter||filter(span.marker))){found.push(span.marker.parent||span.marker)}}}++lineNo$$1});return found},getAllMarks:function(){var markers=[];this.iter(function(line){var sps=line.markedSpans;if(sps){for(var i=0;i<sps.length;++i){if(sps[i].from!=null){markers.push(sps[i].marker)}}}});return markers},posFromIndex:function(off){var ch,lineNo$$1=this.first,sepSize=this.lineSeparator().length;this.iter(function(line){var sz=line.text.length+sepSize;if(sz>off){ch=off;return true}off-=sz;++lineNo$$1});return clipPos(this,Pos(lineNo$$1,ch))},indexFromPos:function(coords){coords=clipPos(this,coords);var index=coords.ch;if(coords.line<this.first||coords.ch<0){return 0}var sepSize=this.lineSeparator().length;this.iter(this.first,coords.line,function(line){index+=line.text.length+sepSize});return index},copy:function(copyHistory){var doc=new Doc(getLines(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);doc.scrollTop=this.scrollTop;doc.scrollLeft=this.scrollLeft;doc.sel=this.sel;doc.extend=false;if(copyHistory){doc.history.undoDepth=this.history.undoDepth;doc.setHistory(this.getHistory())}return doc},linkedDoc:function(options){if(!options){options={}}var from=this.first,to=this.first+this.size;if(options.from!=null&&options.from>from){from=options.from}if(options.to!=null&&options.to<to){to=options.to}var copy=new Doc(getLines(this,from,to),options.mode||this.modeOption,from,this.lineSep,this.direction);if(options.sharedHist){copy.history=this.history}(this.linked||(this.linked=[])).push({doc:copy,sharedHist:options.sharedHist});copy.linked=[{doc:this,isParent:true,sharedHist:options.sharedHist}];copySharedMarkers(copy,findSharedMarkers(this));return copy},unlinkDoc:function(other){if(other instanceof CodeMirror){other=other.doc}if(this.linked){for(var i=0;i<this.linked.length;++i){var link=this.linked[i];if(link.doc!=other){continue}this.linked.splice(i,1);other.unlinkDoc(this);detachSharedMarkers(findSharedMarkers(this));break}}if(other.history==this.history){var splitIds=[other.id];linkedDocs(other,function(doc){return splitIds.push(doc.id)},true);other.history=new History(null);other.history.done=copyHistoryArray(this.history.done,splitIds);other.history.undone=copyHistoryArray(this.history.undone,splitIds)}},iterLinkedDocs:function(f){linkedDocs(this,f)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(str){if(this.lineSep){return str.split(this.lineSep)}return splitLinesAuto(str)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:docMethodOp(function(dir){if(dir!="rtl"){dir="ltr"}if(dir==this.direction){return}this.direction=dir;this.iter(function(line){return line.order=null});if(this.cm){directionChanged(this.cm)}})});Doc.prototype.eachLine=Doc.prototype.iter;var lastDrop=0;function onDrop(e){var cm=this;clearDragCursor(cm);if(signalDOMEvent(cm,e)||eventInWidget(cm.display,e)){return}e_preventDefault(e);if(ie){lastDrop=+new Date}var pos=posFromMouse(cm,e,true),files=e.dataTransfer.files;if(!pos||cm.isReadOnly()){return}if(files&&files.length&&window.FileReader&&window.File){var n=files.length,text=Array(n),read=0;var loadFile=function(file,i){if(cm.options.allowDropFileTypes&&indexOf(cm.options.allowDropFileTypes,file.type)==-1){return}var reader=new FileReader;reader.onload=operation(cm,function(){var content=reader.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(content)){content=""}text[i]=content;if(++read==n){pos=clipPos(cm.doc,pos);var change={from:pos,to:pos,text:cm.doc.splitLines(text.join(cm.doc.lineSeparator())),origin:"paste"};makeChange(cm.doc,change);setSelectionReplaceHistory(cm.doc,simpleSelection(pos,changeEnd(change)))}});reader.readAsText(file)};for(var i=0;i<n;++i){loadFile(files[i],i)}}else{if(cm.state.draggingText&&cm.doc.sel.contains(pos)>-1){cm.state.draggingText(e);setTimeout(function(){return cm.display.input.focus()},20);return}try{var text$1=e.dataTransfer.getData("Text");if(text$1){var selected;if(cm.state.draggingText&&!cm.state.draggingText.copy){selected=cm.listSelections()}setSelectionNoUndo(cm.doc,simpleSelection(pos,pos));if(selected){for(var i$1=0;i$1<selected.length;++i$1){replaceRange(cm.doc,"",selected[i$1].anchor,selected[i$1].head,"drag")}}cm.replaceSelection(text$1,"around","paste");cm.display.input.focus()}}catch(e){}}}function onDragStart(cm,e){if(ie&&(!cm.state.draggingText||+new Date-lastDrop<100)){e_stop(e);return}if(signalDOMEvent(cm,e)||eventInWidget(cm.display,e)){return}e.dataTransfer.setData("Text",cm.getSelection());e.dataTransfer.effectAllowed="copyMove";if(e.dataTransfer.setDragImage&&!safari){var img=elt("img",null,null,"position: fixed; left: 0; top: 0;");img.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";if(presto){img.width=img.height=1;cm.display.wrapper.appendChild(img);img._top=img.offsetTop}e.dataTransfer.setDragImage(img,0,0);if(presto){img.parentNode.removeChild(img)}}}function onDragOver(cm,e){var pos=posFromMouse(cm,e);if(!pos){return}var frag=document.createDocumentFragment();drawSelectionCursor(cm,pos,frag);if(!cm.display.dragCursor){cm.display.dragCursor=elt("div",null,"CodeMirror-cursors CodeMirror-dragcursors");cm.display.lineSpace.insertBefore(cm.display.dragCursor,cm.display.cursorDiv)}removeChildrenAndAdd(cm.display.dragCursor,frag)}function clearDragCursor(cm){if(cm.display.dragCursor){cm.display.lineSpace.removeChild(cm.display.dragCursor);cm.display.dragCursor=null}}function forEachCodeMirror(f){if(!document.getElementsByClassName){return}var byClass=document.getElementsByClassName("CodeMirror"),editors=[];for(var i=0;i<byClass.length;i++){var cm=byClass[i].CodeMirror;if(cm){editors.push(cm)}}if(editors.length){editors[0].operation(function(){for(var i=0;i<editors.length;i++){f(editors[i])}})}}var globalsRegistered=false;function ensureGlobalHandlers(){if(globalsRegistered){return}registerGlobalHandlers();globalsRegistered=true}function registerGlobalHandlers(){var resizeTimer;on(window,"resize",function(){if(resizeTimer==null){resizeTimer=setTimeout(function(){resizeTimer=null;forEachCodeMirror(onResize)},100)}});on(window,"blur",function(){return forEachCodeMirror(onBlur)})}function onResize(cm){var d=cm.display;d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null;d.scrollbarsClipped=false;cm.setSize()}var keyNames={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};for(var i=0;i<10;i++){keyNames[i+48]=keyNames[i+96]=String(i)}for(var i$1=65;i$1<=90;i$1++){keyNames[i$1]=String.fromCharCode(i$1)}for(var i$2=1;i$2<=12;i$2++){keyNames[i$2+111]=keyNames[i$2+63235]="F"+i$2}var keyMap={};keyMap.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"};keyMap.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"};keyMap.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"};keyMap.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]};keyMap["default"]=mac?keyMap.macDefault:keyMap.pcDefault;function normalizeKeyName(name){var parts=name.split(/-(?!$)/);name=parts[parts.length-1];var alt,ctrl,shift,cmd;for(var i=0;i<parts.length-1;i++){var mod=parts[i];if(/^(cmd|meta|m)$/i.test(mod)){cmd=true}else if(/^a(lt)?$/i.test(mod)){alt=true}else if(/^(c|ctrl|control)$/i.test(mod)){ctrl=true}else if(/^s(hift)?$/i.test(mod)){shift=true}else{throw new Error("Unrecognized modifier name: "+mod)}}if(alt){name="Alt-"+name}if(ctrl){name="Ctrl-"+name}if(cmd){name="Cmd-"+name}if(shift){name="Shift-"+name}return name}function normalizeKeyMap(keymap){var copy={};for(var keyname in keymap){if(keymap.hasOwnProperty(keyname)){var value=keymap[keyname];if(/^(name|fallthrough|(de|at)tach)$/.test(keyname)){continue}if(value=="..."){delete keymap[keyname];continue}var keys=map(keyname.split(" "),normalizeKeyName);for(var i=0;i<keys.length;i++){var val=void 0,name=void 0;if(i==keys.length-1){name=keys.join(" ");val=value}else{name=keys.slice(0,i+1).join(" ");val="..."}var prev=copy[name];if(!prev){copy[name]=val}else if(prev!=val){throw new Error("Inconsistent bindings for "+name)}}delete keymap[keyname]}}for(var prop in copy){keymap[prop]=copy[prop]}return keymap}function lookupKey(key,map$$1,handle,context){map$$1=getKeyMap(map$$1);var found=map$$1.call?map$$1.call(key,context):map$$1[key];if(found===false){return"nothing"}if(found==="..."){return"multi"}if(found!=null&&handle(found)){return"handled"}if(map$$1.fallthrough){if(Object.prototype.toString.call(map$$1.fallthrough)!="[object Array]"){return lookupKey(key,map$$1.fallthrough,handle,context)}for(var i=0;i<map$$1.fallthrough.length;i++){var result=lookupKey(key,map$$1.fallthrough[i],handle,context);if(result){return result}}}}function isModifierKey(value){var name=typeof value=="string"?value:keyNames[value.keyCode];return name=="Ctrl"||name=="Alt"||name=="Shift"||name=="Mod"}function addModifierNames(name,event,noShift){var base=name;if(event.altKey&&base!="Alt"){name="Alt-"+name}if((flipCtrlCmd?event.metaKey:event.ctrlKey)&&base!="Ctrl"){name="Ctrl-"+name}if((flipCtrlCmd?event.ctrlKey:event.metaKey)&&base!="Cmd"){name="Cmd-"+name}if(!noShift&&event.shiftKey&&base!="Shift"){name="Shift-"+name}return name}function keyName(event,noShift){if(presto&&event.keyCode==34&&event["char"]){return false}var name=keyNames[event.keyCode];if(name==null||event.altGraphKey){return false}if(event.keyCode==3&&event.code){name=event.code}return addModifierNames(name,event,noShift)}function getKeyMap(val){return typeof val=="string"?keyMap[val]:val}function deleteNearSelection(cm,compute){var ranges=cm.doc.sel.ranges,kill=[];for(var i=0;i<ranges.length;i++){var toKill=compute(ranges[i]);while(kill.length&&cmp(toKill.from,lst(kill).to)<=0){var replaced=kill.pop();if(cmp(replaced.from,toKill.from)<0){toKill.from=replaced.from;break}}kill.push(toKill)}runInOp(cm,function(){for(var i=kill.length-1;i>=0;i--){replaceRange(cm.doc,"",kill[i].from,kill[i].to,"+delete")}ensureCursorVisible(cm)})}function moveCharLogically(line,ch,dir){var target=skipExtendingChars(line.text,ch+dir,dir);return target<0||target>line.text.length?null:target}function moveLogically(line,start,dir){var ch=moveCharLogically(line,start.ch,dir);return ch==null?null:new Pos(start.line,ch,dir<0?"after":"before")}function endOfLine(visually,cm,lineObj,lineNo,dir){if(visually){var order=getOrder(lineObj,cm.doc.direction);if(order){var part=dir<0?lst(order):order[0];var moveInStorageOrder=dir<0==(part.level==1);var sticky=moveInStorageOrder?"after":"before";var ch;if(part.level>0||cm.doc.direction=="rtl"){var prep=prepareMeasureForLine(cm,lineObj);ch=dir<0?lineObj.text.length-1:0;var targetTop=measureCharPrepared(cm,prep,ch).top;ch=findFirst(function(ch){return measureCharPrepared(cm,prep,ch).top==targetTop},dir<0==(part.level==1)?part.from:part.to-1,ch);if(sticky=="before"){ch=moveCharLogically(lineObj,ch,1)}}else{ch=dir<0?part.to:part.from}return new Pos(lineNo,ch,sticky)}}return new Pos(lineNo,dir<0?lineObj.text.length:0,dir<0?"before":"after")}function moveVisually(cm,line,start,dir){var bidi=getOrder(line,cm.doc.direction);if(!bidi){return moveLogically(line,start,dir)}if(start.ch>=line.text.length){start.ch=line.text.length;start.sticky="before"}else if(start.ch<=0){start.ch=0;start.sticky="after"}var partPos=getBidiPartAt(bidi,start.ch,start.sticky),part=bidi[partPos];if(cm.doc.direction=="ltr"&&part.level%2==0&&(dir>0?part.to>start.ch:part.from<start.ch)){return moveLogically(line,start,dir)}var mv=function(pos,dir){return moveCharLogically(line,pos instanceof Pos?pos.ch:pos,dir)};var prep;var getWrappedLineExtent=function(ch){if(!cm.options.lineWrapping){return{begin:0,end:line.text.length}}prep=prep||prepareMeasureForLine(cm,line);return wrappedLineExtentChar(cm,line,prep,ch)};var wrappedLineExtent=getWrappedLineExtent(start.sticky=="before"?mv(start,-1):start.ch);if(cm.doc.direction=="rtl"||part.level==1){var moveInStorageOrder=part.level==1==dir<0;var ch=mv(start,moveInStorageOrder?1:-1);if(ch!=null&&(!moveInStorageOrder?ch>=part.from&&ch>=wrappedLineExtent.begin:ch<=part.to&&ch<=wrappedLineExtent.end)){var sticky=moveInStorageOrder?"before":"after";return new Pos(start.line,ch,sticky)}}var searchInVisualLine=function(partPos,dir,wrappedLineExtent){var getRes=function(ch,moveInStorageOrder){return moveInStorageOrder?new Pos(start.line,mv(ch,1),"before"):new Pos(start.line,ch,"after")};for(;partPos>=0&&partPos<bidi.length;partPos+=dir){var part=bidi[partPos];var moveInStorageOrder=dir>0==(part.level!=1);var ch=moveInStorageOrder?wrappedLineExtent.begin:mv(wrappedLineExtent.end,-1);if(part.from<=ch&&ch<part.to){return getRes(ch,moveInStorageOrder)}ch=moveInStorageOrder?part.from:mv(part.to,-1);if(wrappedLineExtent.begin<=ch&&ch<wrappedLineExtent.end){return getRes(ch,moveInStorageOrder)}}};var res=searchInVisualLine(partPos+dir,dir,wrappedLineExtent);if(res){return res}var nextCh=dir>0?wrappedLineExtent.end:mv(wrappedLineExtent.begin,-1);if(nextCh!=null&&!(dir>0&&nextCh==line.text.length)){res=searchInVisualLine(dir>0?0:bidi.length-1,dir,getWrappedLineExtent(nextCh));if(res){return res}}return null}var commands={selectAll:selectAll,singleSelection:function(cm){return cm.setSelection(cm.getCursor("anchor"),cm.getCursor("head"),sel_dontScroll)},killLine:function(cm){return deleteNearSelection(cm,function(range){if(range.empty()){var len=getLine(cm.doc,range.head.line).text.length;if(range.head.ch==len&&range.head.line<cm.lastLine()){return{from:range.head,to:Pos(range.head.line+1,0)}}else{return{from:range.head,to:Pos(range.head.line,len)}}}else{return{from:range.from(),to:range.to()}}})},deleteLine:function(cm){return deleteNearSelection(cm,function(range){return{from:Pos(range.from().line,0),to:clipPos(cm.doc,Pos(range.to().line+1,0))}})},delLineLeft:function(cm){return deleteNearSelection(cm,function(range){return{from:Pos(range.from().line,0),to:range.from()}})},delWrappedLineLeft:function(cm){return deleteNearSelection(cm,function(range){var top=cm.charCoords(range.head,"div").top+5;var leftPos=cm.coordsChar({left:0,top:top},"div");return{from:leftPos,to:range.from()}})},delWrappedLineRight:function(cm){return deleteNearSelection(cm,function(range){var top=cm.charCoords(range.head,"div").top+5;var rightPos=cm.coordsChar({left:cm.display.lineDiv.offsetWidth+100,top:top},"div");return{from:range.from(),to:rightPos}})},undo:function(cm){return cm.undo()},redo:function(cm){return cm.redo()},undoSelection:function(cm){return cm.undoSelection()},redoSelection:function(cm){return cm.redoSelection()},goDocStart:function(cm){return cm.extendSelection(Pos(cm.firstLine(),0))},goDocEnd:function(cm){return cm.extendSelection(Pos(cm.lastLine()))},goLineStart:function(cm){return cm.extendSelectionsBy(function(range){return lineStart(cm,range.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(cm){return cm.extendSelectionsBy(function(range){return lineStartSmart(cm,range.head)},{origin:"+move",bias:1})},goLineEnd:function(cm){return cm.extendSelectionsBy(function(range){return lineEnd(cm,range.head.line)},{origin:"+move",bias:-1})},goLineRight:function(cm){return cm.extendSelectionsBy(function(range){var top=cm.cursorCoords(range.head,"div").top+5;return cm.coordsChar({left:cm.display.lineDiv.offsetWidth+100,top:top},"div")},sel_move)},goLineLeft:function(cm){return cm.extendSelectionsBy(function(range){var top=cm.cursorCoords(range.head,"div").top+5;return cm.coordsChar({left:0,top:top},"div")},sel_move)},goLineLeftSmart:function(cm){return cm.extendSelectionsBy(function(range){var top=cm.cursorCoords(range.head,"div").top+5;var pos=cm.coordsChar({left:0,top:top},"div");if(pos.ch<cm.getLine(pos.line).search(/\S/)){return lineStartSmart(cm,range.head)}return pos},sel_move)},goLineUp:function(cm){return cm.moveV(-1,"line")},goLineDown:function(cm){return cm.moveV(1,"line")},goPageUp:function(cm){return cm.moveV(-1,"page")},goPageDown:function(cm){return cm.moveV(1,"page")},goCharLeft:function(cm){return cm.moveH(-1,"char")},goCharRight:function(cm){return cm.moveH(1,"char")},goColumnLeft:function(cm){return cm.moveH(-1,"column")},goColumnRight:function(cm){return cm.moveH(1,"column")},goWordLeft:function(cm){return cm.moveH(-1,"word")},goGroupRight:function(cm){return cm.moveH(1,"group")},goGroupLeft:function(cm){return cm.moveH(-1,"group")},goWordRight:function(cm){return cm.moveH(1,"word")},delCharBefore:function(cm){return cm.deleteH(-1,"char")},delCharAfter:function(cm){return cm.deleteH(1,"char")},delWordBefore:function(cm){return cm.deleteH(-1,"word")},delWordAfter:function(cm){return cm.deleteH(1,"word")},delGroupBefore:function(cm){return cm.deleteH(-1,"group")},delGroupAfter:function(cm){return cm.deleteH(1,"group")},indentAuto:function(cm){return cm.indentSelection("smart")},indentMore:function(cm){return cm.indentSelection("add")},indentLess:function(cm){return cm.indentSelection("subtract")},insertTab:function(cm){return cm.replaceSelection("\t")},insertSoftTab:function(cm){var spaces=[],ranges=cm.listSelections(),tabSize=cm.options.tabSize;for(var i=0;i<ranges.length;i++){var pos=ranges[i].from();var col=countColumn(cm.getLine(pos.line),pos.ch,tabSize);spaces.push(spaceStr(tabSize-col%tabSize))}cm.replaceSelections(spaces)},defaultTab:function(cm){if(cm.somethingSelected()){cm.indentSelection("add")}else{cm.execCommand("insertTab")}},transposeChars:function(cm){return runInOp(cm,function(){var ranges=cm.listSelections(),newSel=[];for(var i=0;i<ranges.length;i++){if(!ranges[i].empty()){continue}var cur=ranges[i].head,line=getLine(cm.doc,cur.line).text;if(line){if(cur.ch==line.length){cur=new Pos(cur.line,cur.ch-1)}if(cur.ch>0){cur=new Pos(cur.line,cur.ch+1);cm.replaceRange(line.charAt(cur.ch-1)+line.charAt(cur.ch-2),Pos(cur.line,cur.ch-2),cur,"+transpose")}else if(cur.line>cm.doc.first){var prev=getLine(cm.doc,cur.line-1).text;if(prev){cur=new Pos(cur.line,1);cm.replaceRange(line.charAt(0)+cm.doc.lineSeparator()+prev.charAt(prev.length-1),Pos(cur.line-1,prev.length-1),cur,"+transpose")}}}newSel.push(new Range(cur,cur))}cm.setSelections(newSel)})},newlineAndIndent:function(cm){return runInOp(cm,function(){var sels=cm.listSelections();for(var i=sels.length-1;i>=0;i--){cm.replaceRange(cm.doc.lineSeparator(),sels[i].anchor,sels[i].head,"+input")}sels=cm.listSelections();for(var i$1=0;i$1<sels.length;i$1++){cm.indentLine(sels[i$1].from().line,null,true)}ensureCursorVisible(cm)})},openLine:function(cm){return cm.replaceSelection("\n","start")},toggleOverwrite:function(cm){return cm.toggleOverwrite()}};function lineStart(cm,lineN){var line=getLine(cm.doc,lineN);var visual=visualLine(line);if(visual!=line){lineN=lineNo(visual)}return endOfLine(true,cm,visual,lineN,1)}function lineEnd(cm,lineN){var line=getLine(cm.doc,lineN);var visual=visualLineEnd(line);if(visual!=line){lineN=lineNo(visual)}return endOfLine(true,cm,line,lineN,-1)}function lineStartSmart(cm,pos){var start=lineStart(cm,pos.line);var line=getLine(cm.doc,start.line);var order=getOrder(line,cm.doc.direction);if(!order||order[0].level==0){var firstNonWS=Math.max(0,line.text.search(/\S/));var inWS=pos.line==start.line&&pos.ch<=firstNonWS&&pos.ch;return Pos(start.line,inWS?0:firstNonWS,start.sticky)}return start}function doHandleBinding(cm,bound,dropShift){if(typeof bound=="string"){bound=commands[bound];if(!bound){return false}}cm.display.input.ensurePolled();var prevShift=cm.display.shift,done=false;try{if(cm.isReadOnly()){cm.state.suppressEdits=true}if(dropShift){cm.display.shift=false}done=bound(cm)!=Pass}finally{cm.display.shift=prevShift;cm.state.suppressEdits=false}return done}function lookupKeyForEditor(cm,name,handle){for(var i=0;i<cm.state.keyMaps.length;i++){var result=lookupKey(name,cm.state.keyMaps[i],handle,cm);if(result){return result}}return cm.options.extraKeys&&lookupKey(name,cm.options.extraKeys,handle,cm)||lookupKey(name,cm.options.keyMap,handle,cm)}var stopSeq=new Delayed;function dispatchKey(cm,name,e,handle){var seq=cm.state.keySeq;if(seq){if(isModifierKey(name)){return"handled"}if(/\'$/.test(name)){cm.state.keySeq=null}else{stopSeq.set(50,function(){if(cm.state.keySeq==seq){cm.state.keySeq=null;cm.display.input.reset()}})}if(dispatchKeyInner(cm,seq+" "+name,e,handle)){return true}}return dispatchKeyInner(cm,name,e,handle)}function dispatchKeyInner(cm,name,e,handle){var result=lookupKeyForEditor(cm,name,handle);if(result=="multi"){cm.state.keySeq=name}if(result=="handled"){signalLater(cm,"keyHandled",cm,name,e)}if(result=="handled"||result=="multi"){e_preventDefault(e);restartBlink(cm)}return!!result}function handleKeyBinding(cm,e){var name=keyName(e,true);if(!name){return false}if(e.shiftKey&&!cm.state.keySeq){return dispatchKey(cm,"Shift-"+name,e,function(b){return doHandleBinding(cm,b,true)})||dispatchKey(cm,name,e,function(b){if(typeof b=="string"?/^go[A-Z]/.test(b):b.motion){return doHandleBinding(cm,b)}})}else{return dispatchKey(cm,name,e,function(b){return doHandleBinding(cm,b)})}}function handleCharBinding(cm,e,ch){return dispatchKey(cm,"'"+ch+"'",e,function(b){return doHandleBinding(cm,b,true)})}var lastStoppedKey=null;function onKeyDown(e){var cm=this;cm.curOp.focus=activeElt();if(signalDOMEvent(cm,e)){return}if(ie&&ie_version<11&&e.keyCode==27){e.returnValue=false}var code=e.keyCode;cm.display.shift=code==16||e.shiftKey;var handled=handleKeyBinding(cm,e);if(presto){lastStoppedKey=handled?code:null;if(!handled&&code==88&&!hasCopyEvent&&(mac?e.metaKey:e.ctrlKey)){cm.replaceSelection("",null,"cut")}}if(code==18&&!/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className)){showCrossHair(cm)}}function showCrossHair(cm){var lineDiv=cm.display.lineDiv;addClass(lineDiv,"CodeMirror-crosshair");function up(e){if(e.keyCode==18||!e.altKey){rmClass(lineDiv,"CodeMirror-crosshair");off(document,"keyup",up);off(document,"mouseover",up)}}on(document,"keyup",up);on(document,"mouseover",up)}function onKeyUp(e){if(e.keyCode==16){this.doc.sel.shift=false}signalDOMEvent(this,e)}function onKeyPress(e){var cm=this;if(eventInWidget(cm.display,e)||signalDOMEvent(cm,e)||e.ctrlKey&&!e.altKey||mac&&e.metaKey){return}var keyCode=e.keyCode,charCode=e.charCode;if(presto&&keyCode==lastStoppedKey){lastStoppedKey=null;e_preventDefault(e);return}if(presto&&(!e.which||e.which<10)&&handleKeyBinding(cm,e)){return}var ch=String.fromCharCode(charCode==null?keyCode:charCode);if(ch=="\b"){return}if(handleCharBinding(cm,e,ch)){return}cm.display.input.onKeyPress(e)}var DOUBLECLICK_DELAY=400;var PastClick=function(time,pos,button){this.time=time;this.pos=pos;this.button=button};PastClick.prototype.compare=function(time,pos,button){return this.time+DOUBLECLICK_DELAY>time&&cmp(pos,this.pos)==0&&button==this.button};var lastClick,lastDoubleClick;function clickRepeat(pos,button){var now=+new Date;if(lastDoubleClick&&lastDoubleClick.compare(now,pos,button)){lastClick=lastDoubleClick=null;return"triple"}else if(lastClick&&lastClick.compare(now,pos,button)){lastDoubleClick=new PastClick(now,pos,button);lastClick=null;return"double"}else{lastClick=new PastClick(now,pos,button);lastDoubleClick=null;return"single"}}function onMouseDown(e){var cm=this,display=cm.display;if(signalDOMEvent(cm,e)||display.activeTouch&&display.input.supportsTouch()){return}display.input.ensurePolled();display.shift=e.shiftKey;if(eventInWidget(display,e)){if(!webkit){display.scroller.draggable=false;setTimeout(function(){return display.scroller.draggable=true},100)}return}if(clickInGutter(cm,e)){return}var pos=posFromMouse(cm,e),button=e_button(e),repeat=pos?clickRepeat(pos,button):"single";window.focus();if(button==1&&cm.state.selectingText){cm.state.selectingText(e)}if(pos&&handleMappedButton(cm,button,pos,repeat,e)){return}if(button==1){if(pos){leftButtonDown(cm,pos,repeat,e)}else if(e_target(e)==display.scroller){e_preventDefault(e)}}else if(button==2){if(pos){extendSelection(cm.doc,pos)}setTimeout(function(){return display.input.focus()},20)}else if(button==3){if(captureRightClick){cm.display.input.onContextMenu(e)}else{delayBlurEvent(cm)}}}function handleMappedButton(cm,button,pos,repeat,event){var name="Click";if(repeat=="double"){name="Double"+name}else if(repeat=="triple"){name="Triple"+name}name=(button==1?"Left":button==2?"Middle":"Right")+name;return dispatchKey(cm,addModifierNames(name,event),event,function(bound){if(typeof bound=="string"){bound=commands[bound]}if(!bound){return false}var done=false;try{if(cm.isReadOnly()){cm.state.suppressEdits=true}done=bound(cm,pos)!=Pass}finally{cm.state.suppressEdits=false}return done})}function configureMouse(cm,repeat,event){var option=cm.getOption("configureMouse");var value=option?option(cm,repeat,event):{};if(value.unit==null){var rect=chromeOS?event.shiftKey&&event.metaKey:event.altKey;value.unit=rect?"rectangle":repeat=="single"?"char":repeat=="double"?"word":"line"}if(value.extend==null||cm.doc.extend){value.extend=cm.doc.extend||event.shiftKey}if(value.addNew==null){value.addNew=mac?event.metaKey:event.ctrlKey}if(value.moveOnDrag==null){value.moveOnDrag=!(mac?event.altKey:event.ctrlKey)}return value}function leftButtonDown(cm,pos,repeat,event){if(ie){setTimeout(bind(ensureFocus,cm),0)}else{cm.curOp.focus=activeElt()}var behavior=configureMouse(cm,repeat,event);var sel=cm.doc.sel,contained;if(cm.options.dragDrop&&dragAndDrop&&!cm.isReadOnly()&&repeat=="single"&&(contained=sel.contains(pos))>-1&&(cmp((contained=sel.ranges[contained]).from(),pos)<0||pos.xRel>0)&&(cmp(contained.to(),pos)>0||pos.xRel<0)){leftButtonStartDrag(cm,event,pos,behavior)}else{leftButtonSelect(cm,event,pos,behavior)}}function leftButtonStartDrag(cm,event,pos,behavior){var display=cm.display,moved=false;var dragEnd=operation(cm,function(e){if(webkit){display.scroller.draggable=false}cm.state.draggingText=false;off(display.wrapper.ownerDocument,"mouseup",dragEnd);off(display.wrapper.ownerDocument,"mousemove",mouseMove);off(display.scroller,"dragstart",dragStart);off(display.scroller,"drop",dragEnd);if(!moved){e_preventDefault(e);if(!behavior.addNew){extendSelection(cm.doc,pos,null,null,behavior.extend)}if(webkit||ie&&ie_version==9){setTimeout(function(){display.wrapper.ownerDocument.body.focus();display.input.focus()},20)}else{display.input.focus()}}});var mouseMove=function(e2){moved=moved||Math.abs(event.clientX-e2.clientX)+Math.abs(event.clientY-e2.clientY)>=10};var dragStart=function(){return moved=true};if(webkit){display.scroller.draggable=true}cm.state.draggingText=dragEnd;dragEnd.copy=!behavior.moveOnDrag;if(display.scroller.dragDrop){display.scroller.dragDrop()}on(display.wrapper.ownerDocument,"mouseup",dragEnd);on(display.wrapper.ownerDocument,"mousemove",mouseMove);on(display.scroller,"dragstart",dragStart);on(display.scroller,"drop",dragEnd);delayBlurEvent(cm);setTimeout(function(){return display.input.focus()},20)}function rangeForUnit(cm,pos,unit){if(unit=="char"){return new Range(pos,pos)}if(unit=="word"){return cm.findWordAt(pos)}if(unit=="line"){return new Range(Pos(pos.line,0),clipPos(cm.doc,Pos(pos.line+1,0)))}var result=unit(cm,pos);return new Range(result.from,result.to)}function leftButtonSelect(cm,event,start,behavior){var display=cm.display,doc=cm.doc;e_preventDefault(event);var ourRange,ourIndex,startSel=doc.sel,ranges=startSel.ranges;if(behavior.addNew&&!behavior.extend){
ourIndex=doc.sel.contains(start);if(ourIndex>-1){ourRange=ranges[ourIndex]}else{ourRange=new Range(start,start)}}else{ourRange=doc.sel.primary();ourIndex=doc.sel.primIndex}if(behavior.unit=="rectangle"){if(!behavior.addNew){ourRange=new Range(start,start)}start=posFromMouse(cm,event,true,true);ourIndex=-1}else{var range$$1=rangeForUnit(cm,start,behavior.unit);if(behavior.extend){ourRange=extendRange(ourRange,range$$1.anchor,range$$1.head,behavior.extend)}else{ourRange=range$$1}}if(!behavior.addNew){ourIndex=0;setSelection(doc,new Selection([ourRange],0),sel_mouse);startSel=doc.sel}else if(ourIndex==-1){ourIndex=ranges.length;setSelection(doc,normalizeSelection(cm,ranges.concat([ourRange]),ourIndex),{scroll:false,origin:"*mouse"})}else if(ranges.length>1&&ranges[ourIndex].empty()&&behavior.unit=="char"&&!behavior.extend){setSelection(doc,normalizeSelection(cm,ranges.slice(0,ourIndex).concat(ranges.slice(ourIndex+1)),0),{scroll:false,origin:"*mouse"});startSel=doc.sel}else{replaceOneSelection(doc,ourIndex,ourRange,sel_mouse)}var lastPos=start;function extendTo(pos){if(cmp(lastPos,pos)==0){return}lastPos=pos;if(behavior.unit=="rectangle"){var ranges=[],tabSize=cm.options.tabSize;var startCol=countColumn(getLine(doc,start.line).text,start.ch,tabSize);var posCol=countColumn(getLine(doc,pos.line).text,pos.ch,tabSize);var left=Math.min(startCol,posCol),right=Math.max(startCol,posCol);for(var line=Math.min(start.line,pos.line),end=Math.min(cm.lastLine(),Math.max(start.line,pos.line));line<=end;line++){var text=getLine(doc,line).text,leftPos=findColumn(text,left,tabSize);if(left==right){ranges.push(new Range(Pos(line,leftPos),Pos(line,leftPos)))}else if(text.length>leftPos){ranges.push(new Range(Pos(line,leftPos),Pos(line,findColumn(text,right,tabSize))))}}if(!ranges.length){ranges.push(new Range(start,start))}setSelection(doc,normalizeSelection(cm,startSel.ranges.slice(0,ourIndex).concat(ranges),ourIndex),{origin:"*mouse",scroll:false});cm.scrollIntoView(pos)}else{var oldRange=ourRange;var range$$1=rangeForUnit(cm,pos,behavior.unit);var anchor=oldRange.anchor,head;if(cmp(range$$1.anchor,anchor)>0){head=range$$1.head;anchor=minPos(oldRange.from(),range$$1.anchor)}else{head=range$$1.anchor;anchor=maxPos(oldRange.to(),range$$1.head)}var ranges$1=startSel.ranges.slice(0);ranges$1[ourIndex]=bidiSimplify(cm,new Range(clipPos(doc,anchor),head));setSelection(doc,normalizeSelection(cm,ranges$1,ourIndex),sel_mouse)}}var editorSize=display.wrapper.getBoundingClientRect();var counter=0;function extend(e){var curCount=++counter;var cur=posFromMouse(cm,e,true,behavior.unit=="rectangle");if(!cur){return}if(cmp(cur,lastPos)!=0){cm.curOp.focus=activeElt();extendTo(cur);var visible=visibleLines(display,doc);if(cur.line>=visible.to||cur.line<visible.from){setTimeout(operation(cm,function(){if(counter==curCount){extend(e)}}),150)}}else{var outside=e.clientY<editorSize.top?-20:e.clientY>editorSize.bottom?20:0;if(outside){setTimeout(operation(cm,function(){if(counter!=curCount){return}display.scroller.scrollTop+=outside;extend(e)}),50)}}}function done(e){cm.state.selectingText=false;counter=Infinity;if(e){e_preventDefault(e);display.input.focus()}off(display.wrapper.ownerDocument,"mousemove",move);off(display.wrapper.ownerDocument,"mouseup",up);doc.history.lastSelOrigin=null}var move=operation(cm,function(e){if(e.buttons===0||!e_button(e)){done(e)}else{extend(e)}});var up=operation(cm,done);cm.state.selectingText=up;on(display.wrapper.ownerDocument,"mousemove",move);on(display.wrapper.ownerDocument,"mouseup",up)}function bidiSimplify(cm,range$$1){var anchor=range$$1.anchor;var head=range$$1.head;var anchorLine=getLine(cm.doc,anchor.line);if(cmp(anchor,head)==0&&anchor.sticky==head.sticky){return range$$1}var order=getOrder(anchorLine);if(!order){return range$$1}var index=getBidiPartAt(order,anchor.ch,anchor.sticky),part=order[index];if(part.from!=anchor.ch&&part.to!=anchor.ch){return range$$1}var boundary=index+(part.from==anchor.ch==(part.level!=1)?0:1);if(boundary==0||boundary==order.length){return range$$1}var leftSide;if(head.line!=anchor.line){leftSide=(head.line-anchor.line)*(cm.doc.direction=="ltr"?1:-1)>0}else{var headIndex=getBidiPartAt(order,head.ch,head.sticky);var dir=headIndex-index||(head.ch-anchor.ch)*(part.level==1?-1:1);if(headIndex==boundary-1||headIndex==boundary){leftSide=dir<0}else{leftSide=dir>0}}var usePart=order[boundary+(leftSide?-1:0)];var from=leftSide==(usePart.level==1);var ch=from?usePart.from:usePart.to,sticky=from?"after":"before";return anchor.ch==ch&&anchor.sticky==sticky?range$$1:new Range(new Pos(anchor.line,ch,sticky),head)}function gutterEvent(cm,e,type,prevent){var mX,mY;if(e.touches){mX=e.touches[0].clientX;mY=e.touches[0].clientY}else{try{mX=e.clientX;mY=e.clientY}catch(e){return false}}if(mX>=Math.floor(cm.display.gutters.getBoundingClientRect().right)){return false}if(prevent){e_preventDefault(e)}var display=cm.display;var lineBox=display.lineDiv.getBoundingClientRect();if(mY>lineBox.bottom||!hasHandler(cm,type)){return e_defaultPrevented(e)}mY-=lineBox.top-display.viewOffset;for(var i=0;i<cm.display.gutterSpecs.length;++i){var g=display.gutters.childNodes[i];if(g&&g.getBoundingClientRect().right>=mX){var line=lineAtHeight(cm.doc,mY);var gutter=cm.display.gutterSpecs[i];signal(cm,type,cm,line,gutter.className,e);return e_defaultPrevented(e)}}}function clickInGutter(cm,e){return gutterEvent(cm,e,"gutterClick",true)}function onContextMenu(cm,e){if(eventInWidget(cm.display,e)||contextMenuInGutter(cm,e)){return}if(signalDOMEvent(cm,e,"contextmenu")){return}if(!captureRightClick){cm.display.input.onContextMenu(e)}}function contextMenuInGutter(cm,e){if(!hasHandler(cm,"gutterContextMenu")){return false}return gutterEvent(cm,e,"gutterContextMenu",false)}function themeChanged(cm){cm.display.wrapper.className=cm.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+cm.options.theme.replace(/(^|\s)\s*/g," cm-s-");clearCaches(cm)}var Init={toString:function(){return"CodeMirror.Init"}};var defaults={};var optionHandlers={};function defineOptions(CodeMirror){var optionHandlers=CodeMirror.optionHandlers;function option(name,deflt,handle,notOnInit){CodeMirror.defaults[name]=deflt;if(handle){optionHandlers[name]=notOnInit?function(cm,val,old){if(old!=Init){handle(cm,val,old)}}:handle}}CodeMirror.defineOption=option;CodeMirror.Init=Init;option("value","",function(cm,val){return cm.setValue(val)},true);option("mode",null,function(cm,val){cm.doc.modeOption=val;loadMode(cm)},true);option("indentUnit",2,loadMode,true);option("indentWithTabs",false);option("smartIndent",true);option("tabSize",4,function(cm){resetModeState(cm);clearCaches(cm);regChange(cm)},true);option("lineSeparator",null,function(cm,val){cm.doc.lineSep=val;if(!val){return}var newBreaks=[],lineNo=cm.doc.first;cm.doc.iter(function(line){for(var pos=0;;){var found=line.text.indexOf(val,pos);if(found==-1){break}pos=found+val.length;newBreaks.push(Pos(lineNo,found))}lineNo++});for(var i=newBreaks.length-1;i>=0;i--){replaceRange(cm.doc,val,newBreaks[i],Pos(newBreaks[i].line,newBreaks[i].ch+val.length))}});option("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,function(cm,val,old){cm.state.specialChars=new RegExp(val.source+(val.test("\t")?"":"|\t"),"g");if(old!=Init){cm.refresh()}});option("specialCharPlaceholder",defaultSpecialCharPlaceholder,function(cm){return cm.refresh()},true);option("electricChars",true);option("inputStyle",mobile?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},true);option("spellcheck",false,function(cm,val){return cm.getInputField().spellcheck=val},true);option("autocorrect",false,function(cm,val){return cm.getInputField().autocorrect=val},true);option("autocapitalize",false,function(cm,val){return cm.getInputField().autocapitalize=val},true);option("rtlMoveVisually",!windows);option("wholeLineUpdateBefore",true);option("theme","default",function(cm){themeChanged(cm);updateGutters(cm)},true);option("keyMap","default",function(cm,val,old){var next=getKeyMap(val);var prev=old!=Init&&getKeyMap(old);if(prev&&prev.detach){prev.detach(cm,next)}if(next.attach){next.attach(cm,prev||null)}});option("extraKeys",null);option("configureMouse",null);option("lineWrapping",false,wrappingChanged,true);option("gutters",[],function(cm,val){cm.display.gutterSpecs=getGutters(val,cm.options.lineNumbers);updateGutters(cm)},true);option("fixedGutter",true,function(cm,val){cm.display.gutters.style.left=val?compensateForHScroll(cm.display)+"px":"0";cm.refresh()},true);option("coverGutterNextToScrollbar",false,function(cm){return updateScrollbars(cm)},true);option("scrollbarStyle","native",function(cm){initScrollbars(cm);updateScrollbars(cm);cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)},true);option("lineNumbers",false,function(cm,val){cm.display.gutterSpecs=getGutters(cm.options.gutters,val);updateGutters(cm)},true);option("firstLineNumber",1,updateGutters,true);option("lineNumberFormatter",function(integer){return integer},updateGutters,true);option("showCursorWhenSelecting",false,updateSelection,true);option("resetSelectionOnContextMenu",true);option("lineWiseCopyCut",true);option("pasteLinesPerSelection",true);option("selectionsMayTouch",false);option("readOnly",false,function(cm,val){if(val=="nocursor"){onBlur(cm);cm.display.input.blur()}cm.display.input.readOnlyChanged(val)});option("disableInput",false,function(cm,val){if(!val){cm.display.input.reset()}},true);option("dragDrop",true,dragDropChanged);option("allowDropFileTypes",null);option("cursorBlinkRate",530);option("cursorScrollMargin",0);option("cursorHeight",1,updateSelection,true);option("singleCursorHeightPerLine",true,updateSelection,true);option("workTime",100);option("workDelay",100);option("flattenSpans",true,resetModeState,true);option("addModeClass",false,resetModeState,true);option("pollInterval",100);option("undoDepth",200,function(cm,val){return cm.doc.history.undoDepth=val});option("historyEventDelay",1250);option("viewportMargin",10,function(cm){return cm.refresh()},true);option("maxHighlightLength",1e4,resetModeState,true);option("moveInputWithCursor",true,function(cm,val){if(!val){cm.display.input.resetPosition()}});option("tabindex",null,function(cm,val){return cm.display.input.getField().tabIndex=val||""});option("autofocus",null);option("direction","ltr",function(cm,val){return cm.doc.setDirection(val)},true);option("phrases",null)}function dragDropChanged(cm,value,old){var wasOn=old&&old!=Init;if(!value!=!wasOn){var funcs=cm.display.dragFunctions;var toggle=value?on:off;toggle(cm.display.scroller,"dragstart",funcs.start);toggle(cm.display.scroller,"dragenter",funcs.enter);toggle(cm.display.scroller,"dragover",funcs.over);toggle(cm.display.scroller,"dragleave",funcs.leave);toggle(cm.display.scroller,"drop",funcs.drop)}}function wrappingChanged(cm){if(cm.options.lineWrapping){addClass(cm.display.wrapper,"CodeMirror-wrap");cm.display.sizer.style.minWidth="";cm.display.sizerWidth=null}else{rmClass(cm.display.wrapper,"CodeMirror-wrap");findMaxLine(cm)}estimateLineHeights(cm);regChange(cm);clearCaches(cm);setTimeout(function(){return updateScrollbars(cm)},100)}function CodeMirror(place,options){var this$1=this;if(!(this instanceof CodeMirror)){return new CodeMirror(place,options)}this.options=options=options?copyObj(options):{};copyObj(defaults,options,false);var doc=options.value;if(typeof doc=="string"){doc=new Doc(doc,options.mode,null,options.lineSeparator,options.direction)}else if(options.mode){doc.modeOption=options.mode}this.doc=doc;var input=new CodeMirror.inputStyles[options.inputStyle](this);var display=this.display=new Display(place,doc,input,options);display.wrapper.CodeMirror=this;themeChanged(this);if(options.lineWrapping){this.display.wrapper.className+=" CodeMirror-wrap"}initScrollbars(this);this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:false,delayingBlurEvent:false,focused:false,suppressEdits:false,pasteIncoming:-1,cutIncoming:-1,selectingText:false,draggingText:false,highlight:new Delayed,keySeq:null,specialChars:null};if(options.autofocus&&!mobile){display.input.focus()}if(ie&&ie_version<11){setTimeout(function(){return this$1.display.input.reset(true)},20)}registerEventHandlers(this);ensureGlobalHandlers();startOperation(this);this.curOp.forceUpdate=true;attachDoc(this,doc);if(options.autofocus&&!mobile||this.hasFocus()){setTimeout(bind(onFocus,this),20)}else{onBlur(this)}for(var opt in optionHandlers){if(optionHandlers.hasOwnProperty(opt)){optionHandlers[opt](this,options[opt],Init)}}maybeUpdateLineNumberWidth(this);if(options.finishInit){options.finishInit(this)}for(var i=0;i<initHooks.length;++i){initHooks[i](this)}endOperation(this);if(webkit&&options.lineWrapping&&getComputedStyle(display.lineDiv).textRendering=="optimizelegibility"){display.lineDiv.style.textRendering="auto"}}CodeMirror.defaults=defaults;CodeMirror.optionHandlers=optionHandlers;function registerEventHandlers(cm){var d=cm.display;on(d.scroller,"mousedown",operation(cm,onMouseDown));if(ie&&ie_version<11){on(d.scroller,"dblclick",operation(cm,function(e){if(signalDOMEvent(cm,e)){return}var pos=posFromMouse(cm,e);if(!pos||clickInGutter(cm,e)||eventInWidget(cm.display,e)){return}e_preventDefault(e);var word=cm.findWordAt(pos);extendSelection(cm.doc,word.anchor,word.head)}))}else{on(d.scroller,"dblclick",function(e){return signalDOMEvent(cm,e)||e_preventDefault(e)})}on(d.scroller,"contextmenu",function(e){return onContextMenu(cm,e)});var touchFinished,prevTouch={end:0};function finishTouch(){if(d.activeTouch){touchFinished=setTimeout(function(){return d.activeTouch=null},1e3);prevTouch=d.activeTouch;prevTouch.end=+new Date}}function isMouseLikeTouchEvent(e){if(e.touches.length!=1){return false}var touch=e.touches[0];return touch.radiusX<=1&&touch.radiusY<=1}function farAway(touch,other){if(other.left==null){return true}var dx=other.left-touch.left,dy=other.top-touch.top;return dx*dx+dy*dy>20*20}on(d.scroller,"touchstart",function(e){if(!signalDOMEvent(cm,e)&&!isMouseLikeTouchEvent(e)&&!clickInGutter(cm,e)){d.input.ensurePolled();clearTimeout(touchFinished);var now=+new Date;d.activeTouch={start:now,moved:false,prev:now-prevTouch.end<=300?prevTouch:null};if(e.touches.length==1){d.activeTouch.left=e.touches[0].pageX;d.activeTouch.top=e.touches[0].pageY}}});on(d.scroller,"touchmove",function(){if(d.activeTouch){d.activeTouch.moved=true}});on(d.scroller,"touchend",function(e){var touch=d.activeTouch;if(touch&&!eventInWidget(d,e)&&touch.left!=null&&!touch.moved&&new Date-touch.start<300){var pos=cm.coordsChar(d.activeTouch,"page"),range;if(!touch.prev||farAway(touch,touch.prev)){range=new Range(pos,pos)}else if(!touch.prev.prev||farAway(touch,touch.prev.prev)){range=cm.findWordAt(pos)}else{range=new Range(Pos(pos.line,0),clipPos(cm.doc,Pos(pos.line+1,0)))}cm.setSelection(range.anchor,range.head);cm.focus();e_preventDefault(e)}finishTouch()});on(d.scroller,"touchcancel",finishTouch);on(d.scroller,"scroll",function(){if(d.scroller.clientHeight){updateScrollTop(cm,d.scroller.scrollTop);setScrollLeft(cm,d.scroller.scrollLeft,true);signal(cm,"scroll",cm)}});on(d.scroller,"mousewheel",function(e){return onScrollWheel(cm,e)});on(d.scroller,"DOMMouseScroll",function(e){return onScrollWheel(cm,e)});on(d.wrapper,"scroll",function(){return d.wrapper.scrollTop=d.wrapper.scrollLeft=0});d.dragFunctions={enter:function(e){if(!signalDOMEvent(cm,e)){e_stop(e)}},over:function(e){if(!signalDOMEvent(cm,e)){onDragOver(cm,e);e_stop(e)}},start:function(e){return onDragStart(cm,e)},drop:operation(cm,onDrop),leave:function(e){if(!signalDOMEvent(cm,e)){clearDragCursor(cm)}}};var inp=d.input.getField();on(inp,"keyup",function(e){return onKeyUp.call(cm,e)});on(inp,"keydown",operation(cm,onKeyDown));on(inp,"keypress",operation(cm,onKeyPress));on(inp,"focus",function(e){return onFocus(cm,e)});on(inp,"blur",function(e){return onBlur(cm,e)})}var initHooks=[];CodeMirror.defineInitHook=function(f){return initHooks.push(f)};function indentLine(cm,n,how,aggressive){var doc=cm.doc,state;if(how==null){how="add"}if(how=="smart"){if(!doc.mode.indent){how="prev"}else{state=getContextBefore(cm,n).state}}var tabSize=cm.options.tabSize;var line=getLine(doc,n),curSpace=countColumn(line.text,null,tabSize);if(line.stateAfter){line.stateAfter=null}var curSpaceString=line.text.match(/^\s*/)[0],indentation;if(!aggressive&&!/\S/.test(line.text)){indentation=0;how="not"}else if(how=="smart"){indentation=doc.mode.indent(state,line.text.slice(curSpaceString.length),line.text);if(indentation==Pass||indentation>150){if(!aggressive){return}how="prev"}}if(how=="prev"){if(n>doc.first){indentation=countColumn(getLine(doc,n-1).text,null,tabSize)}else{indentation=0}}else if(how=="add"){indentation=curSpace+cm.options.indentUnit}else if(how=="subtract"){indentation=curSpace-cm.options.indentUnit}else if(typeof how=="number"){indentation=curSpace+how}indentation=Math.max(0,indentation);var indentString="",pos=0;if(cm.options.indentWithTabs){for(var i=Math.floor(indentation/tabSize);i;--i){pos+=tabSize;indentString+="\t"}}if(pos<indentation){indentString+=spaceStr(indentation-pos)}if(indentString!=curSpaceString){replaceRange(doc,indentString,Pos(n,0),Pos(n,curSpaceString.length),"+input");line.stateAfter=null;return true}else{for(var i$1=0;i$1<doc.sel.ranges.length;i$1++){var range=doc.sel.ranges[i$1];if(range.head.line==n&&range.head.ch<curSpaceString.length){var pos$1=Pos(n,curSpaceString.length);replaceOneSelection(doc,i$1,new Range(pos$1,pos$1));break}}}}var lastCopied=null;function setLastCopied(newLastCopied){lastCopied=newLastCopied}function applyTextInput(cm,inserted,deleted,sel,origin){var doc=cm.doc;cm.display.shift=false;if(!sel){sel=doc.sel}var recent=+new Date-200;var paste=origin=="paste"||cm.state.pasteIncoming>recent;var textLines=splitLinesAuto(inserted),multiPaste=null;if(paste&&sel.ranges.length>1){if(lastCopied&&lastCopied.text.join("\n")==inserted){if(sel.ranges.length%lastCopied.text.length==0){multiPaste=[];for(var i=0;i<lastCopied.text.length;i++){multiPaste.push(doc.splitLines(lastCopied.text[i]))}}}else if(textLines.length==sel.ranges.length&&cm.options.pasteLinesPerSelection){multiPaste=map(textLines,function(l){return[l]})}}var updateInput=cm.curOp.updateInput;for(var i$1=sel.ranges.length-1;i$1>=0;i$1--){var range$$1=sel.ranges[i$1];var from=range$$1.from(),to=range$$1.to();if(range$$1.empty()){if(deleted&&deleted>0){from=Pos(from.line,from.ch-deleted)}else if(cm.state.overwrite&&!paste){to=Pos(to.line,Math.min(getLine(doc,to.line).text.length,to.ch+lst(textLines).length))}else if(paste&&lastCopied&&lastCopied.lineWise&&lastCopied.text.join("\n")==inserted){from=to=Pos(from.line,0)}}var changeEvent={from:from,to:to,text:multiPaste?multiPaste[i$1%multiPaste.length]:textLines,origin:origin||(paste?"paste":cm.state.cutIncoming>recent?"cut":"+input")};makeChange(cm.doc,changeEvent);signalLater(cm,"inputRead",cm,changeEvent)}if(inserted&&!paste){triggerElectric(cm,inserted)}ensureCursorVisible(cm);if(cm.curOp.updateInput<2){cm.curOp.updateInput=updateInput}cm.curOp.typing=true;cm.state.pasteIncoming=cm.state.cutIncoming=-1}function handlePaste(e,cm){var pasted=e.clipboardData&&e.clipboardData.getData("Text");if(pasted){e.preventDefault();if(!cm.isReadOnly()&&!cm.options.disableInput){runInOp(cm,function(){return applyTextInput(cm,pasted,0,null,"paste")})}return true}}function triggerElectric(cm,inserted){if(!cm.options.electricChars||!cm.options.smartIndent){return}var sel=cm.doc.sel;for(var i=sel.ranges.length-1;i>=0;i--){var range$$1=sel.ranges[i];if(range$$1.head.ch>100||i&&sel.ranges[i-1].head.line==range$$1.head.line){continue}var mode=cm.getModeAt(range$$1.head);var indented=false;if(mode.electricChars){for(var j=0;j<mode.electricChars.length;j++){if(inserted.indexOf(mode.electricChars.charAt(j))>-1){indented=indentLine(cm,range$$1.head.line,"smart");break}}}else if(mode.electricInput){if(mode.electricInput.test(getLine(cm.doc,range$$1.head.line).text.slice(0,range$$1.head.ch))){indented=indentLine(cm,range$$1.head.line,"smart")}}if(indented){signalLater(cm,"electricInput",cm,range$$1.head.line)}}}function copyableRanges(cm){var text=[],ranges=[];for(var i=0;i<cm.doc.sel.ranges.length;i++){var line=cm.doc.sel.ranges[i].head.line;var lineRange={anchor:Pos(line,0),head:Pos(line+1,0)};ranges.push(lineRange);text.push(cm.getRange(lineRange.anchor,lineRange.head))}return{text:text,ranges:ranges}}function disableBrowserMagic(field,spellcheck,autocorrect,autocapitalize){field.setAttribute("autocorrect",autocorrect?"":"off");field.setAttribute("autocapitalize",autocapitalize?"":"off");field.setAttribute("spellcheck",!!spellcheck)}function hiddenTextarea(){var te=elt("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");var div=elt("div",[te],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");if(webkit){te.style.width="1000px"}else{te.setAttribute("wrap","off")}if(ios){te.style.border="1px solid black"}disableBrowserMagic(te);return div}function addEditorMethods(CodeMirror){var optionHandlers=CodeMirror.optionHandlers;var helpers=CodeMirror.helpers={};CodeMirror.prototype={constructor:CodeMirror,focus:function(){window.focus();this.display.input.focus()},setOption:function(option,value){var options=this.options,old=options[option];if(options[option]==value&&option!="mode"){return}options[option]=value;if(optionHandlers.hasOwnProperty(option)){operation(this,optionHandlers[option])(this,value,old)}signal(this,"optionChange",this,option)},getOption:function(option){return this.options[option]},getDoc:function(){return this.doc},addKeyMap:function(map$$1,bottom){this.state.keyMaps[bottom?"push":"unshift"](getKeyMap(map$$1))},removeKeyMap:function(map$$1){var maps=this.state.keyMaps;for(var i=0;i<maps.length;++i){if(maps[i]==map$$1||maps[i].name==map$$1){maps.splice(i,1);return true}}},addOverlay:methodOp(function(spec,options){var mode=spec.token?spec:CodeMirror.getMode(this.options,spec);if(mode.startState){throw new Error("Overlays may not be stateful.")}insertSorted(this.state.overlays,{mode:mode,modeSpec:spec,opaque:options&&options.opaque,priority:options&&options.priority||0},function(overlay){return overlay.priority});this.state.modeGen++;regChange(this)}),removeOverlay:methodOp(function(spec){var overlays=this.state.overlays;for(var i=0;i<overlays.length;++i){var cur=overlays[i].modeSpec;if(cur==spec||typeof spec=="string"&&cur.name==spec){overlays.splice(i,1);this.state.modeGen++;regChange(this);return}}}),indentLine:methodOp(function(n,dir,aggressive){if(typeof dir!="string"&&typeof dir!="number"){if(dir==null){dir=this.options.smartIndent?"smart":"prev"}else{dir=dir?"add":"subtract"}}if(isLine(this.doc,n)){indentLine(this,n,dir,aggressive)}}),indentSelection:methodOp(function(how){var ranges=this.doc.sel.ranges,end=-1;for(var i=0;i<ranges.length;i++){var range$$1=ranges[i];if(!range$$1.empty()){var from=range$$1.from(),to=range$$1.to();var start=Math.max(end,from.line);end=Math.min(this.lastLine(),to.line-(to.ch?0:1))+1;for(var j=start;j<end;++j){indentLine(this,j,how)}var newRanges=this.doc.sel.ranges;if(from.ch==0&&ranges.length==newRanges.length&&newRanges[i].from().ch>0){replaceOneSelection(this.doc,i,new Range(from,newRanges[i].to()),sel_dontScroll)}}else if(range$$1.head.line>end){indentLine(this,range$$1.head.line,how,true);end=range$$1.head.line;if(i==this.doc.sel.primIndex){ensureCursorVisible(this)}}}}),getTokenAt:function(pos,precise){return takeToken(this,pos,precise)},getLineTokens:function(line,precise){return takeToken(this,Pos(line),precise,true)},getTokenTypeAt:function(pos){pos=clipPos(this.doc,pos);var styles=getLineStyles(this,getLine(this.doc,pos.line));var before=0,after=(styles.length-1)/2,ch=pos.ch;var type;if(ch==0){type=styles[2]}else{for(;;){var mid=before+after>>1;if((mid?styles[mid*2-1]:0)>=ch){after=mid}else if(styles[mid*2+1]<ch){before=mid+1}else{type=styles[mid*2+2];break}}}var cut=type?type.indexOf("overlay "):-1;return cut<0?type:cut==0?null:type.slice(0,cut-1)},getModeAt:function(pos){var mode=this.doc.mode;if(!mode.innerMode){return mode}return CodeMirror.innerMode(mode,this.getTokenAt(pos).state).mode},getHelper:function(pos,type){return this.getHelpers(pos,type)[0]},getHelpers:function(pos,type){var found=[];if(!helpers.hasOwnProperty(type)){return found}var help=helpers[type],mode=this.getModeAt(pos);if(typeof mode[type]=="string"){if(help[mode[type]]){found.push(help[mode[type]])}}else if(mode[type]){for(var i=0;i<mode[type].length;i++){var val=help[mode[type][i]];if(val){found.push(val)}}}else if(mode.helperType&&help[mode.helperType]){found.push(help[mode.helperType])}else if(help[mode.name]){found.push(help[mode.name])}for(var i$1=0;i$1<help._global.length;i$1++){var cur=help._global[i$1];if(cur.pred(mode,this)&&indexOf(found,cur.val)==-1){found.push(cur.val)}}return found},getStateAfter:function(line,precise){var doc=this.doc;line=clipLine(doc,line==null?doc.first+doc.size-1:line);return getContextBefore(this,line+1,precise).state},cursorCoords:function(start,mode){var pos,range$$1=this.doc.sel.primary();if(start==null){pos=range$$1.head}else if(typeof start=="object"){pos=clipPos(this.doc,start)}else{pos=start?range$$1.from():range$$1.to()}return cursorCoords(this,pos,mode||"page")},charCoords:function(pos,mode){return charCoords(this,clipPos(this.doc,pos),mode||"page")},coordsChar:function(coords,mode){coords=fromCoordSystem(this,coords,mode||"page");return coordsChar(this,coords.left,coords.top)},lineAtHeight:function(height,mode){height=fromCoordSystem(this,{top:height,left:0},mode||"page").top;return lineAtHeight(this.doc,height+this.display.viewOffset)},heightAtLine:function(line,mode,includeWidgets){var end=false,lineObj;if(typeof line=="number"){var last=this.doc.first+this.doc.size-1;if(line<this.doc.first){line=this.doc.first}else if(line>last){line=last;end=true}lineObj=getLine(this.doc,line)}else{lineObj=line}return intoCoordSystem(this,lineObj,{top:0,left:0},mode||"page",includeWidgets||end).top+(end?this.doc.height-heightAtLine(lineObj):0)},defaultTextHeight:function(){return textHeight(this.display)},defaultCharWidth:function(){return charWidth(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(pos,node,scroll,vert,horiz){var display=this.display;pos=cursorCoords(this,clipPos(this.doc,pos));var top=pos.bottom,left=pos.left;node.style.position="absolute";node.setAttribute("cm-ignore-events","true");this.display.input.setUneditable(node);display.sizer.appendChild(node);if(vert=="over"){top=pos.top}else if(vert=="above"||vert=="near"){var vspace=Math.max(display.wrapper.clientHeight,this.doc.height),hspace=Math.max(display.sizer.clientWidth,display.lineSpace.clientWidth);if((vert=="above"||pos.bottom+node.offsetHeight>vspace)&&pos.top>node.offsetHeight){top=pos.top-node.offsetHeight}else if(pos.bottom+node.offsetHeight<=vspace){top=pos.bottom}if(left+node.offsetWidth>hspace){left=hspace-node.offsetWidth}}node.style.top=top+"px";node.style.left=node.style.right="";if(horiz=="right"){left=display.sizer.clientWidth-node.offsetWidth;node.style.right="0px"}else{if(horiz=="left"){left=0}else if(horiz=="middle"){left=(display.sizer.clientWidth-node.offsetWidth)/2}node.style.left=left+"px"}if(scroll){scrollIntoView(this,{left:left,top:top,right:left+node.offsetWidth,bottom:top+node.offsetHeight})}},triggerOnKeyDown:methodOp(onKeyDown),triggerOnKeyPress:methodOp(onKeyPress),triggerOnKeyUp:onKeyUp,triggerOnMouseDown:methodOp(onMouseDown),execCommand:function(cmd){if(commands.hasOwnProperty(cmd)){return commands[cmd].call(null,this)}},triggerElectric:methodOp(function(text){triggerElectric(this,text)}),findPosH:function(from,amount,unit,visually){var dir=1;if(amount<0){dir=-1;amount=-amount}var cur=clipPos(this.doc,from);for(var i=0;i<amount;++i){cur=findPosH(this.doc,cur,dir,unit,visually);if(cur.hitSide){break}}return cur},moveH:methodOp(function(dir,unit){var this$1=this;this.extendSelectionsBy(function(range$$1){if(this$1.display.shift||this$1.doc.extend||range$$1.empty()){return findPosH(this$1.doc,range$$1.head,dir,unit,this$1.options.rtlMoveVisually)}else{return dir<0?range$$1.from():range$$1.to()}},sel_move)}),deleteH:methodOp(function(dir,unit){var sel=this.doc.sel,doc=this.doc;if(sel.somethingSelected()){doc.replaceSelection("",null,"+delete")}else{deleteNearSelection(this,function(range$$1){var other=findPosH(doc,range$$1.head,dir,unit,false);return dir<0?{from:other,to:range$$1.head}:{from:range$$1.head,to:other}})}}),findPosV:function(from,amount,unit,goalColumn){var dir=1,x=goalColumn;if(amount<0){dir=-1;amount=-amount}var cur=clipPos(this.doc,from);for(var i=0;i<amount;++i){var coords=cursorCoords(this,cur,"div");if(x==null){x=coords.left}else{coords.left=x}cur=findPosV(this,coords,dir,unit);if(cur.hitSide){break}}return cur},moveV:methodOp(function(dir,unit){var this$1=this;var doc=this.doc,goals=[];var collapse=!this.display.shift&&!doc.extend&&doc.sel.somethingSelected();doc.extendSelectionsBy(function(range$$1){if(collapse){return dir<0?range$$1.from():range$$1.to()}var headPos=cursorCoords(this$1,range$$1.head,"div");if(range$$1.goalColumn!=null){headPos.left=range$$1.goalColumn}goals.push(headPos.left);var pos=findPosV(this$1,headPos,dir,unit);if(unit=="page"&&range$$1==doc.sel.primary()){addToScrollTop(this$1,charCoords(this$1,pos,"div").top-headPos.top)}return pos},sel_move);if(goals.length){for(var i=0;i<doc.sel.ranges.length;i++){doc.sel.ranges[i].goalColumn=goals[i]}}}),findWordAt:function(pos){var doc=this.doc,line=getLine(doc,pos.line).text;var start=pos.ch,end=pos.ch;if(line){var helper=this.getHelper(pos,"wordChars");if((pos.sticky=="before"||end==line.length)&&start){--start}else{++end}var startChar=line.charAt(start);var check=isWordChar(startChar,helper)?function(ch){return isWordChar(ch,helper)}:/\s/.test(startChar)?function(ch){return/\s/.test(ch)}:function(ch){return!/\s/.test(ch)&&!isWordChar(ch)};while(start>0&&check(line.charAt(start-1))){--start}while(end<line.length&&check(line.charAt(end))){++end}}return new Range(Pos(pos.line,start),Pos(pos.line,end))},toggleOverwrite:function(value){if(value!=null&&value==this.state.overwrite){return}if(this.state.overwrite=!this.state.overwrite){addClass(this.display.cursorDiv,"CodeMirror-overwrite")}else{rmClass(this.display.cursorDiv,"CodeMirror-overwrite")}signal(this,"overwriteToggle",this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==activeElt()},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit)},scrollTo:methodOp(function(x,y){scrollToCoords(this,x,y)}),getScrollInfo:function(){var scroller=this.display.scroller;return{left:scroller.scrollLeft,top:scroller.scrollTop,height:scroller.scrollHeight-scrollGap(this)-this.display.barHeight,width:scroller.scrollWidth-scrollGap(this)-this.display.barWidth,clientHeight:displayHeight(this),clientWidth:displayWidth(this)}},scrollIntoView:methodOp(function(range$$1,margin){if(range$$1==null){range$$1={from:this.doc.sel.primary().head,to:null};if(margin==null){margin=this.options.cursorScrollMargin}}else if(typeof range$$1=="number"){range$$1={from:Pos(range$$1,0),to:null}}else if(range$$1.from==null){range$$1={from:range$$1,to:null}}if(!range$$1.to){range$$1.to=range$$1.from}range$$1.margin=margin||0;if(range$$1.from.line!=null){scrollToRange(this,range$$1)}else{scrollToCoordsRange(this,range$$1.from,range$$1.to,range$$1.margin)}}),setSize:methodOp(function(width,height){var this$1=this;var interpret=function(val){return typeof val=="number"||/^\d+$/.test(String(val))?val+"px":val};if(width!=null){this.display.wrapper.style.width=interpret(width)}if(height!=null){this.display.wrapper.style.height=interpret(height)}if(this.options.lineWrapping){clearLineMeasurementCache(this);
}var lineNo$$1=this.display.viewFrom;this.doc.iter(lineNo$$1,this.display.viewTo,function(line){if(line.widgets){for(var i=0;i<line.widgets.length;i++){if(line.widgets[i].noHScroll){regLineChange(this$1,lineNo$$1,"widget");break}}}++lineNo$$1});this.curOp.forceUpdate=true;signal(this,"refresh",this)}),operation:function(f){return runInOp(this,f)},startOperation:function(){return startOperation(this)},endOperation:function(){return endOperation(this)},refresh:methodOp(function(){var oldHeight=this.display.cachedTextHeight;regChange(this);this.curOp.forceUpdate=true;clearCaches(this);scrollToCoords(this,this.doc.scrollLeft,this.doc.scrollTop);updateGutterSpace(this.display);if(oldHeight==null||Math.abs(oldHeight-textHeight(this.display))>.5){estimateLineHeights(this)}signal(this,"refresh",this)}),swapDoc:methodOp(function(doc){var old=this.doc;old.cm=null;if(this.state.selectingText){this.state.selectingText()}attachDoc(this,doc);clearCaches(this);this.display.input.reset();scrollToCoords(this,doc.scrollLeft,doc.scrollTop);this.curOp.forceScroll=true;signalLater(this,"swapDoc",this,old);return old}),phrase:function(phraseText){var phrases=this.options.phrases;return phrases&&Object.prototype.hasOwnProperty.call(phrases,phraseText)?phrases[phraseText]:phraseText},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}};eventMixin(CodeMirror);CodeMirror.registerHelper=function(type,name,value){if(!helpers.hasOwnProperty(type)){helpers[type]=CodeMirror[type]={_global:[]}}helpers[type][name]=value};CodeMirror.registerGlobalHelper=function(type,name,predicate,value){CodeMirror.registerHelper(type,name,value);helpers[type]._global.push({pred:predicate,val:value})}}function findPosH(doc,pos,dir,unit,visually){var oldPos=pos;var origDir=dir;var lineObj=getLine(doc,pos.line);function findNextLine(){var l=pos.line+dir;if(l<doc.first||l>=doc.first+doc.size){return false}pos=new Pos(l,pos.ch,pos.sticky);return lineObj=getLine(doc,l)}function moveOnce(boundToLine){var next;if(visually){next=moveVisually(doc.cm,lineObj,pos,dir)}else{next=moveLogically(lineObj,pos,dir)}if(next==null){if(!boundToLine&&findNextLine()){pos=endOfLine(visually,doc.cm,lineObj,pos.line,dir)}else{return false}}else{pos=next}return true}if(unit=="char"){moveOnce()}else if(unit=="column"){moveOnce(true)}else if(unit=="word"||unit=="group"){var sawType=null,group=unit=="group";var helper=doc.cm&&doc.cm.getHelper(pos,"wordChars");for(var first=true;;first=false){if(dir<0&&!moveOnce(!first)){break}var cur=lineObj.text.charAt(pos.ch)||"\n";var type=isWordChar(cur,helper)?"w":group&&cur=="\n"?"n":!group||/\s/.test(cur)?null:"p";if(group&&!first&&!type){type="s"}if(sawType&&sawType!=type){if(dir<0){dir=1;moveOnce();pos.sticky="after"}break}if(type){sawType=type}if(dir>0&&!moveOnce(!first)){break}}}var result=skipAtomic(doc,pos,oldPos,origDir,true);if(equalCursorPos(oldPos,result)){result.hitSide=true}return result}function findPosV(cm,pos,dir,unit){var doc=cm.doc,x=pos.left,y;if(unit=="page"){var pageSize=Math.min(cm.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);var moveAmount=Math.max(pageSize-.5*textHeight(cm.display),3);y=(dir>0?pos.bottom:pos.top)+dir*moveAmount}else if(unit=="line"){y=dir>0?pos.bottom+3:pos.top-3}var target;for(;;){target=coordsChar(cm,x,y);if(!target.outside){break}if(dir<0?y<=0:y>=doc.height){target.hitSide=true;break}y+=dir*5}return target}var ContentEditableInput=function(cm){this.cm=cm;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Delayed;this.composing=null;this.gracePeriod=false;this.readDOMTimeout=null};ContentEditableInput.prototype.init=function(display){var this$1=this;var input=this,cm=input.cm;var div=input.div=display.lineDiv;disableBrowserMagic(div,cm.options.spellcheck,cm.options.autocorrect,cm.options.autocapitalize);on(div,"paste",function(e){if(signalDOMEvent(cm,e)||handlePaste(e,cm)){return}if(ie_version<=11){setTimeout(operation(cm,function(){return this$1.updateFromDOM()}),20)}});on(div,"compositionstart",function(e){this$1.composing={data:e.data,done:false}});on(div,"compositionupdate",function(e){if(!this$1.composing){this$1.composing={data:e.data,done:false}}});on(div,"compositionend",function(e){if(this$1.composing){if(e.data!=this$1.composing.data){this$1.readFromDOMSoon()}this$1.composing.done=true}});on(div,"touchstart",function(){return input.forceCompositionEnd()});on(div,"input",function(){if(!this$1.composing){this$1.readFromDOMSoon()}});function onCopyCut(e){if(signalDOMEvent(cm,e)){return}if(cm.somethingSelected()){setLastCopied({lineWise:false,text:cm.getSelections()});if(e.type=="cut"){cm.replaceSelection("",null,"cut")}}else if(!cm.options.lineWiseCopyCut){return}else{var ranges=copyableRanges(cm);setLastCopied({lineWise:true,text:ranges.text});if(e.type=="cut"){cm.operation(function(){cm.setSelections(ranges.ranges,0,sel_dontScroll);cm.replaceSelection("",null,"cut")})}}if(e.clipboardData){e.clipboardData.clearData();var content=lastCopied.text.join("\n");e.clipboardData.setData("Text",content);if(e.clipboardData.getData("Text")==content){e.preventDefault();return}}var kludge=hiddenTextarea(),te=kludge.firstChild;cm.display.lineSpace.insertBefore(kludge,cm.display.lineSpace.firstChild);te.value=lastCopied.text.join("\n");var hadFocus=document.activeElement;selectInput(te);setTimeout(function(){cm.display.lineSpace.removeChild(kludge);hadFocus.focus();if(hadFocus==div){input.showPrimarySelection()}},50)}on(div,"copy",onCopyCut);on(div,"cut",onCopyCut)};ContentEditableInput.prototype.prepareSelection=function(){var result=prepareSelection(this.cm,false);result.focus=this.cm.state.focused;return result};ContentEditableInput.prototype.showSelection=function(info,takeFocus){if(!info||!this.cm.display.view.length){return}if(info.focus||takeFocus){this.showPrimarySelection()}this.showMultipleSelections(info)};ContentEditableInput.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()};ContentEditableInput.prototype.showPrimarySelection=function(){var sel=this.getSelection(),cm=this.cm,prim=cm.doc.sel.primary();var from=prim.from(),to=prim.to();if(cm.display.viewTo==cm.display.viewFrom||from.line>=cm.display.viewTo||to.line<cm.display.viewFrom){sel.removeAllRanges();return}var curAnchor=domToPos(cm,sel.anchorNode,sel.anchorOffset);var curFocus=domToPos(cm,sel.focusNode,sel.focusOffset);if(curAnchor&&!curAnchor.bad&&curFocus&&!curFocus.bad&&cmp(minPos(curAnchor,curFocus),from)==0&&cmp(maxPos(curAnchor,curFocus),to)==0){return}var view=cm.display.view;var start=from.line>=cm.display.viewFrom&&posToDOM(cm,from)||{node:view[0].measure.map[2],offset:0};var end=to.line<cm.display.viewTo&&posToDOM(cm,to);if(!end){var measure=view[view.length-1].measure;var map$$1=measure.maps?measure.maps[measure.maps.length-1]:measure.map;end={node:map$$1[map$$1.length-1],offset:map$$1[map$$1.length-2]-map$$1[map$$1.length-3]}}if(!start||!end){sel.removeAllRanges();return}var old=sel.rangeCount&&sel.getRangeAt(0),rng;try{rng=range(start.node,start.offset,end.offset,end.node)}catch(e){}if(rng){if(!gecko&&cm.state.focused){sel.collapse(start.node,start.offset);if(!rng.collapsed){sel.removeAllRanges();sel.addRange(rng)}}else{sel.removeAllRanges();sel.addRange(rng)}if(old&&sel.anchorNode==null){sel.addRange(old)}else if(gecko){this.startGracePeriod()}}this.rememberSelection()};ContentEditableInput.prototype.startGracePeriod=function(){var this$1=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){this$1.gracePeriod=false;if(this$1.selectionChanged()){this$1.cm.operation(function(){return this$1.cm.curOp.selectionChanged=true})}},20)};ContentEditableInput.prototype.showMultipleSelections=function(info){removeChildrenAndAdd(this.cm.display.cursorDiv,info.cursors);removeChildrenAndAdd(this.cm.display.selectionDiv,info.selection)};ContentEditableInput.prototype.rememberSelection=function(){var sel=this.getSelection();this.lastAnchorNode=sel.anchorNode;this.lastAnchorOffset=sel.anchorOffset;this.lastFocusNode=sel.focusNode;this.lastFocusOffset=sel.focusOffset};ContentEditableInput.prototype.selectionInEditor=function(){var sel=this.getSelection();if(!sel.rangeCount){return false}var node=sel.getRangeAt(0).commonAncestorContainer;return contains(this.div,node)};ContentEditableInput.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"){if(!this.selectionInEditor()){this.showSelection(this.prepareSelection(),true)}this.div.focus()}};ContentEditableInput.prototype.blur=function(){this.div.blur()};ContentEditableInput.prototype.getField=function(){return this.div};ContentEditableInput.prototype.supportsTouch=function(){return true};ContentEditableInput.prototype.receivedFocus=function(){var input=this;if(this.selectionInEditor()){this.pollSelection()}else{runInOp(this.cm,function(){return input.cm.curOp.selectionChanged=true})}function poll(){if(input.cm.state.focused){input.pollSelection();input.polling.set(input.cm.options.pollInterval,poll)}}this.polling.set(this.cm.options.pollInterval,poll)};ContentEditableInput.prototype.selectionChanged=function(){var sel=this.getSelection();return sel.anchorNode!=this.lastAnchorNode||sel.anchorOffset!=this.lastAnchorOffset||sel.focusNode!=this.lastFocusNode||sel.focusOffset!=this.lastFocusOffset};ContentEditableInput.prototype.pollSelection=function(){if(this.readDOMTimeout!=null||this.gracePeriod||!this.selectionChanged()){return}var sel=this.getSelection(),cm=this.cm;if(android&&chrome&&this.cm.display.gutterSpecs.length&&isInGutter(sel.anchorNode)){this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs});this.blur();this.focus();return}if(this.composing){return}this.rememberSelection();var anchor=domToPos(cm,sel.anchorNode,sel.anchorOffset);var head=domToPos(cm,sel.focusNode,sel.focusOffset);if(anchor&&head){runInOp(cm,function(){setSelection(cm.doc,simpleSelection(anchor,head),sel_dontScroll);if(anchor.bad||head.bad){cm.curOp.selectionChanged=true}})}};ContentEditableInput.prototype.pollContent=function(){if(this.readDOMTimeout!=null){clearTimeout(this.readDOMTimeout);this.readDOMTimeout=null}var cm=this.cm,display=cm.display,sel=cm.doc.sel.primary();var from=sel.from(),to=sel.to();if(from.ch==0&&from.line>cm.firstLine()){from=Pos(from.line-1,getLine(cm.doc,from.line-1).length)}if(to.ch==getLine(cm.doc,to.line).text.length&&to.line<cm.lastLine()){to=Pos(to.line+1,0)}if(from.line<display.viewFrom||to.line>display.viewTo-1){return false}var fromIndex,fromLine,fromNode;if(from.line==display.viewFrom||(fromIndex=findViewIndex(cm,from.line))==0){fromLine=lineNo(display.view[0].line);fromNode=display.view[0].node}else{fromLine=lineNo(display.view[fromIndex].line);fromNode=display.view[fromIndex-1].node.nextSibling}var toIndex=findViewIndex(cm,to.line);var toLine,toNode;if(toIndex==display.view.length-1){toLine=display.viewTo-1;toNode=display.lineDiv.lastChild}else{toLine=lineNo(display.view[toIndex+1].line)-1;toNode=display.view[toIndex+1].node.previousSibling}if(!fromNode){return false}var newText=cm.doc.splitLines(domTextBetween(cm,fromNode,toNode,fromLine,toLine));var oldText=getBetween(cm.doc,Pos(fromLine,0),Pos(toLine,getLine(cm.doc,toLine).text.length));while(newText.length>1&&oldText.length>1){if(lst(newText)==lst(oldText)){newText.pop();oldText.pop();toLine--}else if(newText[0]==oldText[0]){newText.shift();oldText.shift();fromLine++}else{break}}var cutFront=0,cutEnd=0;var newTop=newText[0],oldTop=oldText[0],maxCutFront=Math.min(newTop.length,oldTop.length);while(cutFront<maxCutFront&&newTop.charCodeAt(cutFront)==oldTop.charCodeAt(cutFront)){++cutFront}var newBot=lst(newText),oldBot=lst(oldText);var maxCutEnd=Math.min(newBot.length-(newText.length==1?cutFront:0),oldBot.length-(oldText.length==1?cutFront:0));while(cutEnd<maxCutEnd&&newBot.charCodeAt(newBot.length-cutEnd-1)==oldBot.charCodeAt(oldBot.length-cutEnd-1)){++cutEnd}if(newText.length==1&&oldText.length==1&&fromLine==from.line){while(cutFront&&cutFront>from.ch&&newBot.charCodeAt(newBot.length-cutEnd-1)==oldBot.charCodeAt(oldBot.length-cutEnd-1)){cutFront--;cutEnd++}}newText[newText.length-1]=newBot.slice(0,newBot.length-cutEnd).replace(/^\u200b+/,"");newText[0]=newText[0].slice(cutFront).replace(/\u200b+$/,"");var chFrom=Pos(fromLine,cutFront);var chTo=Pos(toLine,oldText.length?lst(oldText).length-cutEnd:0);if(newText.length>1||newText[0]||cmp(chFrom,chTo)){replaceRange(cm.doc,newText,chFrom,chTo,"+input");return true}};ContentEditableInput.prototype.ensurePolled=function(){this.forceCompositionEnd()};ContentEditableInput.prototype.reset=function(){this.forceCompositionEnd()};ContentEditableInput.prototype.forceCompositionEnd=function(){if(!this.composing){return}clearTimeout(this.readDOMTimeout);this.composing=null;this.updateFromDOM();this.div.blur();this.div.focus()};ContentEditableInput.prototype.readFromDOMSoon=function(){var this$1=this;if(this.readDOMTimeout!=null){return}this.readDOMTimeout=setTimeout(function(){this$1.readDOMTimeout=null;if(this$1.composing){if(this$1.composing.done){this$1.composing=null}else{return}}this$1.updateFromDOM()},80)};ContentEditableInput.prototype.updateFromDOM=function(){var this$1=this;if(this.cm.isReadOnly()||!this.pollContent()){runInOp(this.cm,function(){return regChange(this$1.cm)})}};ContentEditableInput.prototype.setUneditable=function(node){node.contentEditable="false"};ContentEditableInput.prototype.onKeyPress=function(e){if(e.charCode==0||this.composing){return}e.preventDefault();if(!this.cm.isReadOnly()){operation(this.cm,applyTextInput)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0)}};ContentEditableInput.prototype.readOnlyChanged=function(val){this.div.contentEditable=String(val!="nocursor")};ContentEditableInput.prototype.onContextMenu=function(){};ContentEditableInput.prototype.resetPosition=function(){};ContentEditableInput.prototype.needsContentAttribute=true;function posToDOM(cm,pos){var view=findViewForLine(cm,pos.line);if(!view||view.hidden){return null}var line=getLine(cm.doc,pos.line);var info=mapFromLineView(view,line,pos.line);var order=getOrder(line,cm.doc.direction),side="left";if(order){var partPos=getBidiPartAt(order,pos.ch);side=partPos%2?"right":"left"}var result=nodeAndOffsetInLineMap(info.map,pos.ch,side);result.offset=result.collapse=="right"?result.end:result.start;return result}function isInGutter(node){for(var scan=node;scan;scan=scan.parentNode){if(/CodeMirror-gutter-wrapper/.test(scan.className)){return true}}return false}function badPos(pos,bad){if(bad){pos.bad=true}return pos}function domTextBetween(cm,from,to,fromLine,toLine){var text="",closing=false,lineSep=cm.doc.lineSeparator(),extraLinebreak=false;function recognizeMarker(id){return function(marker){return marker.id==id}}function close(){if(closing){text+=lineSep;if(extraLinebreak){text+=lineSep}closing=extraLinebreak=false}}function addText(str){if(str){close();text+=str}}function walk(node){if(node.nodeType==1){var cmText=node.getAttribute("cm-text");if(cmText){addText(cmText);return}var markerID=node.getAttribute("cm-marker"),range$$1;if(markerID){var found=cm.findMarks(Pos(fromLine,0),Pos(toLine+1,0),recognizeMarker(+markerID));if(found.length&&(range$$1=found[0].find(0))){addText(getBetween(cm.doc,range$$1.from,range$$1.to).join(lineSep))}return}if(node.getAttribute("contenteditable")=="false"){return}var isBlock=/^(pre|div|p|li|table|br)$/i.test(node.nodeName);if(!/^br$/i.test(node.nodeName)&&node.textContent.length==0){return}if(isBlock){close()}for(var i=0;i<node.childNodes.length;i++){walk(node.childNodes[i])}if(/^(pre|p)$/i.test(node.nodeName)){extraLinebreak=true}if(isBlock){closing=true}}else if(node.nodeType==3){addText(node.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}}for(;;){walk(from);if(from==to){break}from=from.nextSibling;extraLinebreak=false}return text}function domToPos(cm,node,offset){var lineNode;if(node==cm.display.lineDiv){lineNode=cm.display.lineDiv.childNodes[offset];if(!lineNode){return badPos(cm.clipPos(Pos(cm.display.viewTo-1)),true)}node=null;offset=0}else{for(lineNode=node;;lineNode=lineNode.parentNode){if(!lineNode||lineNode==cm.display.lineDiv){return null}if(lineNode.parentNode&&lineNode.parentNode==cm.display.lineDiv){break}}}for(var i=0;i<cm.display.view.length;i++){var lineView=cm.display.view[i];if(lineView.node==lineNode){return locateNodeInLineView(lineView,node,offset)}}}function locateNodeInLineView(lineView,node,offset){var wrapper=lineView.text.firstChild,bad=false;if(!node||!contains(wrapper,node)){return badPos(Pos(lineNo(lineView.line),0),true)}if(node==wrapper){bad=true;node=wrapper.childNodes[offset];offset=0;if(!node){var line=lineView.rest?lst(lineView.rest):lineView.line;return badPos(Pos(lineNo(line),line.text.length),bad)}}var textNode=node.nodeType==3?node:null,topNode=node;if(!textNode&&node.childNodes.length==1&&node.firstChild.nodeType==3){textNode=node.firstChild;if(offset){offset=textNode.nodeValue.length}}while(topNode.parentNode!=wrapper){topNode=topNode.parentNode}var measure=lineView.measure,maps=measure.maps;function find(textNode,topNode,offset){for(var i=-1;i<(maps?maps.length:0);i++){var map$$1=i<0?measure.map:maps[i];for(var j=0;j<map$$1.length;j+=3){var curNode=map$$1[j+2];if(curNode==textNode||curNode==topNode){var line=lineNo(i<0?lineView.line:lineView.rest[i]);var ch=map$$1[j]+offset;if(offset<0||curNode!=textNode){ch=map$$1[j+(offset?1:0)]}return Pos(line,ch)}}}}var found=find(textNode,topNode,offset);if(found){return badPos(found,bad)}for(var after=topNode.nextSibling,dist=textNode?textNode.nodeValue.length-offset:0;after;after=after.nextSibling){found=find(after,after.firstChild,0);if(found){return badPos(Pos(found.line,found.ch-dist),bad)}else{dist+=after.textContent.length}}for(var before=topNode.previousSibling,dist$1=offset;before;before=before.previousSibling){found=find(before,before.firstChild,-1);if(found){return badPos(Pos(found.line,found.ch+dist$1),bad)}else{dist$1+=before.textContent.length}}}var TextareaInput=function(cm){this.cm=cm;this.prevInput="";this.pollingFast=false;this.polling=new Delayed;this.hasSelection=false;this.composing=null};TextareaInput.prototype.init=function(display){var this$1=this;var input=this,cm=this.cm;this.createField(display);var te=this.textarea;display.wrapper.insertBefore(this.wrapper,display.wrapper.firstChild);if(ios){te.style.width="0px"}on(te,"input",function(){if(ie&&ie_version>=9&&this$1.hasSelection){this$1.hasSelection=null}input.poll()});on(te,"paste",function(e){if(signalDOMEvent(cm,e)||handlePaste(e,cm)){return}cm.state.pasteIncoming=+new Date;input.fastPoll()});function prepareCopyCut(e){if(signalDOMEvent(cm,e)){return}if(cm.somethingSelected()){setLastCopied({lineWise:false,text:cm.getSelections()})}else if(!cm.options.lineWiseCopyCut){return}else{var ranges=copyableRanges(cm);setLastCopied({lineWise:true,text:ranges.text});if(e.type=="cut"){cm.setSelections(ranges.ranges,null,sel_dontScroll)}else{input.prevInput="";te.value=ranges.text.join("\n");selectInput(te)}}if(e.type=="cut"){cm.state.cutIncoming=+new Date}}on(te,"cut",prepareCopyCut);on(te,"copy",prepareCopyCut);on(display.scroller,"paste",function(e){if(eventInWidget(display,e)||signalDOMEvent(cm,e)){return}if(!te.dispatchEvent){cm.state.pasteIncoming=+new Date;input.focus();return}var event=new Event("paste");event.clipboardData=e.clipboardData;te.dispatchEvent(event)});on(display.lineSpace,"selectstart",function(e){if(!eventInWidget(display,e)){e_preventDefault(e)}});on(te,"compositionstart",function(){var start=cm.getCursor("from");if(input.composing){input.composing.range.clear()}input.composing={start:start,range:cm.markText(start,cm.getCursor("to"),{className:"CodeMirror-composing"})}});on(te,"compositionend",function(){if(input.composing){input.poll();input.composing.range.clear();input.composing=null}})};TextareaInput.prototype.createField=function(_display){this.wrapper=hiddenTextarea();this.textarea=this.wrapper.firstChild};TextareaInput.prototype.prepareSelection=function(){var cm=this.cm,display=cm.display,doc=cm.doc;var result=prepareSelection(cm);if(cm.options.moveInputWithCursor){var headPos=cursorCoords(cm,doc.sel.primary().head,"div");var wrapOff=display.wrapper.getBoundingClientRect(),lineOff=display.lineDiv.getBoundingClientRect();result.teTop=Math.max(0,Math.min(display.wrapper.clientHeight-10,headPos.top+lineOff.top-wrapOff.top));result.teLeft=Math.max(0,Math.min(display.wrapper.clientWidth-10,headPos.left+lineOff.left-wrapOff.left))}return result};TextareaInput.prototype.showSelection=function(drawn){var cm=this.cm,display=cm.display;removeChildrenAndAdd(display.cursorDiv,drawn.cursors);removeChildrenAndAdd(display.selectionDiv,drawn.selection);if(drawn.teTop!=null){this.wrapper.style.top=drawn.teTop+"px";this.wrapper.style.left=drawn.teLeft+"px"}};TextareaInput.prototype.reset=function(typing){if(this.contextMenuPending||this.composing){return}var cm=this.cm;if(cm.somethingSelected()){this.prevInput="";var content=cm.getSelection();this.textarea.value=content;if(cm.state.focused){selectInput(this.textarea)}if(ie&&ie_version>=9){this.hasSelection=content}}else if(!typing){this.prevInput=this.textarea.value="";if(ie&&ie_version>=9){this.hasSelection=null}}};TextareaInput.prototype.getField=function(){return this.textarea};TextareaInput.prototype.supportsTouch=function(){return false};TextareaInput.prototype.focus=function(){if(this.cm.options.readOnly!="nocursor"&&(!mobile||activeElt()!=this.textarea)){try{this.textarea.focus()}catch(e){}}};TextareaInput.prototype.blur=function(){this.textarea.blur()};TextareaInput.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};TextareaInput.prototype.receivedFocus=function(){this.slowPoll()};TextareaInput.prototype.slowPoll=function(){var this$1=this;if(this.pollingFast){return}this.polling.set(this.cm.options.pollInterval,function(){this$1.poll();if(this$1.cm.state.focused){this$1.slowPoll()}})};TextareaInput.prototype.fastPoll=function(){var missed=false,input=this;input.pollingFast=true;function p(){var changed=input.poll();if(!changed&&!missed){missed=true;input.polling.set(60,p)}else{input.pollingFast=false;input.slowPoll()}}input.polling.set(20,p)};TextareaInput.prototype.poll=function(){var this$1=this;var cm=this.cm,input=this.textarea,prevInput=this.prevInput;if(this.contextMenuPending||!cm.state.focused||hasSelection(input)&&!prevInput&&!this.composing||cm.isReadOnly()||cm.options.disableInput||cm.state.keySeq){return false}var text=input.value;if(text==prevInput&&!cm.somethingSelected()){return false}if(ie&&ie_version>=9&&this.hasSelection===text||mac&&/[\uf700-\uf7ff]/.test(text)){cm.display.input.reset();return false}if(cm.doc.sel==cm.display.selForContextMenu){var first=text.charCodeAt(0);if(first==8203&&!prevInput){prevInput="​"}if(first==8666){this.reset();return this.cm.execCommand("undo")}}var same=0,l=Math.min(prevInput.length,text.length);while(same<l&&prevInput.charCodeAt(same)==text.charCodeAt(same)){++same}runInOp(cm,function(){applyTextInput(cm,text.slice(same),prevInput.length-same,null,this$1.composing?"*compose":null);if(text.length>1e3||text.indexOf("\n")>-1){input.value=this$1.prevInput=""}else{this$1.prevInput=text}if(this$1.composing){this$1.composing.range.clear();this$1.composing.range=cm.markText(this$1.composing.start,cm.getCursor("to"),{className:"CodeMirror-composing"})}});return true};TextareaInput.prototype.ensurePolled=function(){if(this.pollingFast&&this.poll()){this.pollingFast=false}};TextareaInput.prototype.onKeyPress=function(){if(ie&&ie_version>=9){this.hasSelection=null}this.fastPoll()};TextareaInput.prototype.onContextMenu=function(e){var input=this,cm=input.cm,display=cm.display,te=input.textarea;if(input.contextMenuPending){input.contextMenuPending()}var pos=posFromMouse(cm,e),scrollPos=display.scroller.scrollTop;if(!pos||presto){return}var reset=cm.options.resetSelectionOnContextMenu;if(reset&&cm.doc.sel.contains(pos)==-1){operation(cm,setSelection)(cm.doc,simpleSelection(pos),sel_dontScroll)}var oldCSS=te.style.cssText,oldWrapperCSS=input.wrapper.style.cssText;var wrapperBox=input.wrapper.offsetParent.getBoundingClientRect();input.wrapper.style.cssText="position: static";te.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-wrapperBox.top-5)+"px; left: "+(e.clientX-wrapperBox.left-5)+"px;\n      z-index: 1000; background: "+(ie?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";var oldScrollY;if(webkit){oldScrollY=window.scrollY}display.input.focus();if(webkit){window.scrollTo(null,oldScrollY)}display.input.reset();if(!cm.somethingSelected()){te.value=input.prevInput=" "}input.contextMenuPending=rehide;display.selForContextMenu=cm.doc.sel;clearTimeout(display.detectingSelectAll);function prepareSelectAllHack(){if(te.selectionStart!=null){var selected=cm.somethingSelected();var extval="​"+(selected?te.value:"");te.value="⇚";te.value=extval;input.prevInput=selected?"":"​";te.selectionStart=1;te.selectionEnd=extval.length;display.selForContextMenu=cm.doc.sel}}function rehide(){if(input.contextMenuPending!=rehide){return}input.contextMenuPending=false;input.wrapper.style.cssText=oldWrapperCSS;te.style.cssText=oldCSS;if(ie&&ie_version<9){display.scrollbars.setScrollTop(display.scroller.scrollTop=scrollPos)}if(te.selectionStart!=null){if(!ie||ie&&ie_version<9){prepareSelectAllHack()}var i=0,poll=function(){if(display.selForContextMenu==cm.doc.sel&&te.selectionStart==0&&te.selectionEnd>0&&input.prevInput=="​"){operation(cm,selectAll)(cm)}else if(i++<10){display.detectingSelectAll=setTimeout(poll,500)}else{display.selForContextMenu=null;display.input.reset()}};display.detectingSelectAll=setTimeout(poll,200)}}if(ie&&ie_version>=9){prepareSelectAllHack()}if(captureRightClick){e_stop(e);var mouseup=function(){off(window,"mouseup",mouseup);setTimeout(rehide,20)};on(window,"mouseup",mouseup)}else{setTimeout(rehide,50)}};TextareaInput.prototype.readOnlyChanged=function(val){if(!val){this.reset()}this.textarea.disabled=val=="nocursor"};TextareaInput.prototype.setUneditable=function(){};TextareaInput.prototype.needsContentAttribute=false;function fromTextArea(textarea,options){options=options?copyObj(options):{};options.value=textarea.value;if(!options.tabindex&&textarea.tabIndex){options.tabindex=textarea.tabIndex}if(!options.placeholder&&textarea.placeholder){options.placeholder=textarea.placeholder}if(options.autofocus==null){var hasFocus=activeElt();options.autofocus=hasFocus==textarea||textarea.getAttribute("autofocus")!=null&&hasFocus==document.body}function save(){textarea.value=cm.getValue()}var realSubmit;if(textarea.form){on(textarea.form,"submit",save);if(!options.leaveSubmitMethodAlone){var form=textarea.form;realSubmit=form.submit;try{var wrappedSubmit=form.submit=function(){save();form.submit=realSubmit;form.submit();form.submit=wrappedSubmit}}catch(e){}}}options.finishInit=function(cm){cm.save=save;cm.getTextArea=function(){return textarea};cm.toTextArea=function(){cm.toTextArea=isNaN;save();textarea.parentNode.removeChild(cm.getWrapperElement());textarea.style.display="";if(textarea.form){off(textarea.form,"submit",save);if(!options.leaveSubmitMethodAlone&&typeof textarea.form.submit=="function"){textarea.form.submit=realSubmit}}}};textarea.style.display="none";var cm=CodeMirror(function(node){return textarea.parentNode.insertBefore(node,textarea.nextSibling)},options);return cm}function addLegacyProps(CodeMirror){CodeMirror.off=off;CodeMirror.on=on;CodeMirror.wheelEventPixels=wheelEventPixels;CodeMirror.Doc=Doc;CodeMirror.splitLines=splitLinesAuto;CodeMirror.countColumn=countColumn;CodeMirror.findColumn=findColumn;CodeMirror.isWordChar=isWordCharBasic;CodeMirror.Pass=Pass;CodeMirror.signal=signal;CodeMirror.Line=Line;CodeMirror.changeEnd=changeEnd;CodeMirror.scrollbarModel=scrollbarModel;CodeMirror.Pos=Pos;CodeMirror.cmpPos=cmp;CodeMirror.modes=modes;CodeMirror.mimeModes=mimeModes;CodeMirror.resolveMode=resolveMode;CodeMirror.getMode=getMode;CodeMirror.modeExtensions=modeExtensions;CodeMirror.extendMode=extendMode;CodeMirror.copyState=copyState;CodeMirror.startState=startState;CodeMirror.innerMode=innerMode;CodeMirror.commands=commands;CodeMirror.keyMap=keyMap;CodeMirror.keyName=keyName;CodeMirror.isModifierKey=isModifierKey;CodeMirror.lookupKey=lookupKey;CodeMirror.normalizeKeyMap=normalizeKeyMap;CodeMirror.StringStream=StringStream;CodeMirror.SharedTextMarker=SharedTextMarker;CodeMirror.TextMarker=TextMarker;CodeMirror.LineWidget=LineWidget;CodeMirror.e_preventDefault=e_preventDefault;CodeMirror.e_stopPropagation=e_stopPropagation;CodeMirror.e_stop=e_stop;CodeMirror.addClass=addClass;CodeMirror.contains=contains;CodeMirror.rmClass=rmClass;CodeMirror.keyNames=keyNames}defineOptions(CodeMirror);addEditorMethods(CodeMirror);var dontDelegate="iter insert remove copy getEditor constructor".split(" ");for(var prop in Doc.prototype){if(Doc.prototype.hasOwnProperty(prop)&&indexOf(dontDelegate,prop)<0){CodeMirror.prototype[prop]=function(method){return function(){return method.apply(this.doc,arguments)}}(Doc.prototype[prop])}}eventMixin(Doc);CodeMirror.inputStyles={textarea:TextareaInput,contenteditable:ContentEditableInput};CodeMirror.defineMode=function(name){if(!CodeMirror.defaults.mode&&name!="null"){CodeMirror.defaults.mode=name}defineMode.apply(this,arguments)};CodeMirror.defineMIME=defineMIME;CodeMirror.defineMode("null",function(){return{token:function(stream){return stream.skipToEnd()}}});CodeMirror.defineMIME("text/plain","null");CodeMirror.defineExtension=function(name,func){CodeMirror.prototype[name]=func};CodeMirror.defineDocExtension=function(name,func){Doc.prototype[name]=func};CodeMirror.fromTextArea=fromTextArea;addLegacyProps(CodeMirror);CodeMirror.version="5.49.2";return CodeMirror}();(function(){CodeMirror.defineOption("autoCloseTags",false,function(cm,val,old){if(old!=CodeMirror.Init&&old)cm.removeKeyMap("autoCloseTags");if(!val)return;var map={name:"autoCloseTags"};if(typeof val!="object"||val.whenClosing)map["'/'"]=function(cm){return autoCloseSlash(cm)};if(typeof val!="object"||val.whenOpening)map["'>'"]=function(cm){return autoCloseGT(cm)};cm.addKeyMap(map)});var htmlDontClose=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];var htmlIndent=["applet","blockquote","body","button","div","dl","fieldset","form","frameset","h1","h2","h3","h4","h5","h6","head","html","iframe","layer","legend","object","ol","p","select","table","ul"];function autoCloseGT(cm){var pos=cm.getCursor(),tok=cm.getTokenAt(pos);var inner=CodeMirror.innerMode(cm.getMode(),tok.state),state=inner.state;if(inner.mode.name!="xml"||!state.tagName||cm.getOption("disableInput"))return CodeMirror.Pass;var opt=cm.getOption("autoCloseTags"),html=inner.mode.configuration=="html";var dontCloseTags=typeof opt=="object"&&opt.dontCloseTags||html&&htmlDontClose;var indentTags=typeof opt=="object"&&opt.indentTags||html&&htmlIndent;var tagName=state.tagName;if(tok.end>pos.ch)tagName=tagName.slice(0,tagName.length-tok.end+pos.ch);var lowerTagName=tagName.toLowerCase();if(!tagName||tok.type=="string"&&(tok.end!=pos.ch||!/[\"\']/.test(tok.string.charAt(tok.string.length-1))||tok.string.length==1)||tok.type=="tag"&&state.type=="closeTag"||tok.string.indexOf("/")==tok.string.length-1||dontCloseTags&&indexOf(dontCloseTags,lowerTagName)>-1||CodeMirror.scanForClosingTag&&CodeMirror.scanForClosingTag(cm,pos,tagName,Math.min(cm.lastLine()+1,pos.line+50)))return CodeMirror.Pass;var doIndent=indentTags&&indexOf(indentTags,lowerTagName)>-1;var curPos=doIndent?CodeMirror.Pos(pos.line+1,0):CodeMirror.Pos(pos.line,pos.ch+1);
cm.replaceSelection(">"+(doIndent?"\n\n":"")+"</"+tagName+">",{head:curPos,anchor:curPos});if(doIndent){cm.indentLine(pos.line+1,null,true);cm.indentLine(pos.line+2,null)}}function autoCloseSlash(cm){var pos=cm.getCursor(),tok=cm.getTokenAt(pos);var inner=CodeMirror.innerMode(cm.getMode(),tok.state),state=inner.state;if(tok.type=="string"||tok.string.charAt(0)!="<"||tok.start!=pos.ch-1||inner.mode.name!="xml"||cm.getOption("disableInput"))return CodeMirror.Pass;var tagName=state.context&&state.context.tagName;if(tagName)cm.replaceSelection("/"+tagName+">","end")}function indexOf(collection,elt){if(collection.indexOf)return collection.indexOf(elt);for(var i=0,e=collection.length;i<e;++i)if(collection[i]==elt)return i;return-1}})();(function(){"use strict";var noOptions={};var nonWS=/[^\s\u00a0]/;var Pos=CodeMirror.Pos;function firstNonWS(str){var found=str.search(nonWS);return found==-1?0:found}CodeMirror.commands.toggleComment=function(cm){var from=cm.getCursor("start"),to=cm.getCursor("end");cm.uncomment(from,to)||cm.lineComment(from,to)};CodeMirror.defineExtension("lineComment",function(from,to,options){if(!options)options=noOptions;var self=this,mode=self.getModeAt(from);var commentString=options.lineComment||mode.lineComment;if(!commentString){if(options.blockCommentStart||mode.blockCommentStart){options.fullLines=true;self.blockComment(from,to,options)}return}var firstLine=self.getLine(from.line);if(firstLine==null)return;var end=Math.min(to.ch!=0||to.line==from.line?to.line+1:to.line,self.lastLine()+1);var pad=options.padding==null?" ":options.padding;var blankLines=options.commentBlankLines||from.line==to.line;self.operation(function(){if(options.indent){var baseString=firstLine.slice(0,firstNonWS(firstLine));for(var i=from.line;i<end;++i){var line=self.getLine(i),cut=baseString.length;if(!blankLines&&!nonWS.test(line))continue;if(line.slice(0,cut)!=baseString)cut=firstNonWS(line);self.replaceRange(baseString+commentString+pad,Pos(i,0),Pos(i,cut))}}else{for(var i=from.line;i<end;++i){if(blankLines||nonWS.test(self.getLine(i)))self.replaceRange(commentString+pad,Pos(i,0))}}})});CodeMirror.defineExtension("blockComment",function(from,to,options){if(!options)options=noOptions;var self=this,mode=self.getModeAt(from);var startString=options.blockCommentStart||mode.blockCommentStart;var endString=options.blockCommentEnd||mode.blockCommentEnd;if(!startString||!endString){if((options.lineComment||mode.lineComment)&&options.fullLines!=false)self.lineComment(from,to,options);return}var end=Math.min(to.line,self.lastLine());if(end!=from.line&&to.ch==0&&nonWS.test(self.getLine(end)))--end;var pad=options.padding==null?" ":options.padding;if(from.line>end)return;self.operation(function(){if(options.fullLines!=false){var lastLineHasText=nonWS.test(self.getLine(end));self.replaceRange(pad+endString,Pos(end));self.replaceRange(startString+pad,Pos(from.line,0));var lead=options.blockCommentLead||mode.blockCommentLead;if(lead!=null)for(var i=from.line+1;i<=end;++i)if(i!=end||lastLineHasText)self.replaceRange(lead+pad,Pos(i,0))}else{self.replaceRange(endString,to);self.replaceRange(startString,from)}})});CodeMirror.defineExtension("uncomment",function(from,to,options){if(!options)options=noOptions;var self=this,mode=self.getModeAt(from);var end=Math.min(to.line,self.lastLine()),start=Math.min(from.line,end);var lineString=options.lineComment||mode.lineComment,lines=[];var pad=options.padding==null?" ":options.padding,didSomething;lineComment:{if(!lineString)break lineComment;for(var i=start;i<=end;++i){var line=self.getLine(i);var found=line.indexOf(lineString);if(found>-1&&!/comment/.test(self.getTokenTypeAt(Pos(i,found+1))))found=-1;if(found==-1&&(i!=end||i==start)&&nonWS.test(line))break lineComment;if(found>-1&&nonWS.test(line.slice(0,found)))break lineComment;lines.push(line)}self.operation(function(){for(var i=start;i<=end;++i){var line=lines[i-start];var pos=line.indexOf(lineString),endPos=pos+lineString.length;if(pos<0)continue;if(line.slice(endPos,endPos+pad.length)==pad)endPos+=pad.length;didSomething=true;self.replaceRange("",Pos(i,pos),Pos(i,endPos))}});if(didSomething)return true}var startString=options.blockCommentStart||mode.blockCommentStart;var endString=options.blockCommentEnd||mode.blockCommentEnd;if(!startString||!endString)return false;var lead=options.blockCommentLead||mode.blockCommentLead;var startLine=self.getLine(start),endLine=end==start?startLine:self.getLine(end);var open=startLine.indexOf(startString),close=endLine.lastIndexOf(endString);if(close==-1&&start!=end){endLine=self.getLine(--end);close=endLine.lastIndexOf(endString)}if(open==-1||close==-1||!/comment/.test(self.getTokenTypeAt(Pos(start,open+1)))||!/comment/.test(self.getTokenTypeAt(Pos(end,close+1))))return false;self.operation(function(){self.replaceRange("",Pos(end,close-(pad&&endLine.slice(close-pad.length,close)==pad?pad.length:0)),Pos(end,close+endString.length));var openEnd=open+startString.length;if(pad&&startLine.slice(openEnd,openEnd+pad.length)==pad)openEnd+=pad.length;self.replaceRange("",Pos(start,open),Pos(start,openEnd));if(lead)for(var i=start+1;i<=end;++i){var line=self.getLine(i),found=line.indexOf(lead);if(found==-1||nonWS.test(line.slice(0,found)))continue;var foundEnd=found+lead.length;if(pad&&line.slice(foundEnd,foundEnd+pad.length)==pad)foundEnd+=pad.length;self.replaceRange("",Pos(i,found),Pos(i,foundEnd))}});return true})})();CodeMirror.defineMode("css",function(config,parserConfig){"use strict";if(!parserConfig.propertyKeywords)parserConfig=CodeMirror.resolveMode("text/css");var indentUnit=config.indentUnit,tokenHooks=parserConfig.tokenHooks,mediaTypes=parserConfig.mediaTypes||{},mediaFeatures=parserConfig.mediaFeatures||{},propertyKeywords=parserConfig.propertyKeywords||{},colorKeywords=parserConfig.colorKeywords||{},valueKeywords=parserConfig.valueKeywords||{},fontProperties=parserConfig.fontProperties||{},allowNested=parserConfig.allowNested;var type,override;function ret(style,tp){type=tp;return style}function tokenBase(stream,state){var ch=stream.next();if(tokenHooks[ch]){var result=tokenHooks[ch](stream,state);if(result!==false)return result}if(ch=="@"){stream.eatWhile(/[\w\\\-]/);return ret("def",stream.current())}else if(ch=="="||(ch=="~"||ch=="|")&&stream.eat("=")){return ret(null,"compare")}else if(ch=='"'||ch=="'"){state.tokenize=tokenString(ch);return state.tokenize(stream,state)}else if(ch=="#"){stream.eatWhile(/[\w\\\-]/);return ret("atom","hash")}else if(ch=="!"){stream.match(/^\s*\w*/);return ret("keyword","important")}else if(/\d/.test(ch)||ch=="."&&stream.eat(/\d/)){stream.eatWhile(/[\w.%]/);return ret("number","unit")}else if(ch==="-"){if(/[\d.]/.test(stream.peek())){stream.eatWhile(/[\w.%]/);return ret("number","unit")}else if(stream.match(/^[^-]+-/)){return ret("meta","meta")}}else if(/[,+>*\/]/.test(ch)){return ret(null,"select-op")}else if(ch=="."&&stream.match(/^-?[_a-z][_a-z0-9-]*/i)){return ret("qualifier","qualifier")}else if(/[:;{}\[\]\(\)]/.test(ch)){return ret(null,ch)}else if(ch=="u"&&stream.match("rl(")){stream.backUp(1);state.tokenize=tokenParenthesized;return ret("property","word")}else if(/[\w\\\-]/.test(ch)){stream.eatWhile(/[\w\\\-]/);return ret("property","word")}else{return ret(null,null)}}function tokenString(quote){return function(stream,state){var escaped=false,ch;while((ch=stream.next())!=null){if(ch==quote&&!escaped){if(quote==")")stream.backUp(1);break}escaped=!escaped&&ch=="\\"}if(ch==quote||!escaped&&quote!=")")state.tokenize=null;return ret("string","string")}}function tokenParenthesized(stream,state){stream.next();if(!stream.match(/\s*[\"\']/,false))state.tokenize=tokenString(")");else state.tokenize=null;return ret(null,"(")}function Context(type,indent,prev){this.type=type;this.indent=indent;this.prev=prev}function pushContext(state,stream,type){state.context=new Context(type,stream.indentation()+indentUnit,state.context);return type}function popContext(state){state.context=state.context.prev;return state.context.type}function pass(type,stream,state){return states[state.context.type](type,stream,state)}function popAndPass(type,stream,state,n){for(var i=n||1;i>0;i--)state.context=state.context.prev;return pass(type,stream,state)}function wordAsValue(stream){var word=stream.current().toLowerCase();if(valueKeywords.hasOwnProperty(word))override="atom";else if(colorKeywords.hasOwnProperty(word))override="keyword";else override="variable"}var states={};states.top=function(type,stream,state){if(type=="{"){return pushContext(state,stream,"block")}else if(type=="}"&&state.context.prev){return popContext(state)}else if(type=="@media"){return pushContext(state,stream,"media")}else if(type=="@font-face"){return"font_face_before"}else if(type&&type.charAt(0)=="@"){return pushContext(state,stream,"at")}else if(type=="hash"){override="builtin"}else if(type=="word"){override="tag"}else if(type=="variable-definition"){return"maybeprop"}else if(type=="interpolation"){return pushContext(state,stream,"interpolation")}else if(type==":"){return"pseudo"}else if(allowNested&&type=="("){return pushContext(state,stream,"params")}return state.context.type};states.block=function(type,stream,state){if(type=="word"){if(propertyKeywords.hasOwnProperty(stream.current().toLowerCase())){override="property";return"maybeprop"}else if(allowNested){override=stream.match(/^\s*:/,false)?"property":"tag";return"block"}else{override+=" error";return"maybeprop"}}else if(type=="meta"){return"block"}else if(!allowNested&&(type=="hash"||type=="qualifier")){override="error";return"block"}else{return states.top(type,stream,state)}};states.maybeprop=function(type,stream,state){if(type==":")return pushContext(state,stream,"prop");return pass(type,stream,state)};states.prop=function(type,stream,state){if(type==";")return popContext(state);if(type=="{"&&allowNested)return pushContext(state,stream,"propBlock");if(type=="}"||type=="{")return popAndPass(type,stream,state);if(type=="(")return pushContext(state,stream,"parens");if(type=="hash"&&!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(stream.current())){override+=" error"}else if(type=="word"){wordAsValue(stream)}else if(type=="interpolation"){return pushContext(state,stream,"interpolation")}return"prop"};states.propBlock=function(type,_stream,state){if(type=="}")return popContext(state);if(type=="word"){override="property";return"maybeprop"}return state.context.type};states.parens=function(type,stream,state){if(type=="{"||type=="}")return popAndPass(type,stream,state);if(type==")")return popContext(state);return"parens"};states.pseudo=function(type,stream,state){if(type=="word"){override="variable-3";return state.context.type}return pass(type,stream,state)};states.media=function(type,stream,state){if(type=="(")return pushContext(state,stream,"media_parens");if(type=="}")return popAndPass(type,stream,state);if(type=="{")return popContext(state)&&pushContext(state,stream,allowNested?"block":"top");if(type=="word"){var word=stream.current().toLowerCase();if(word=="only"||word=="not"||word=="and")override="keyword";else if(mediaTypes.hasOwnProperty(word))override="attribute";else if(mediaFeatures.hasOwnProperty(word))override="property";else override="error"}return state.context.type};states.media_parens=function(type,stream,state){if(type==")")return popContext(state);if(type=="{"||type=="}")return popAndPass(type,stream,state,2);return states.media(type,stream,state)};states.font_face_before=function(type,stream,state){if(type=="{")return pushContext(state,stream,"font_face");return pass(type,stream,state)};states.font_face=function(type,stream,state){if(type=="}")return popContext(state);if(type=="word"){if(!fontProperties.hasOwnProperty(stream.current().toLowerCase()))override="error";else override="property";return"maybeprop"}return"font_face"};states.at=function(type,stream,state){if(type==";")return popContext(state);if(type=="{"||type=="}")return popAndPass(type,stream,state);if(type=="word")override="tag";else if(type=="hash")override="builtin";return"at"};states.interpolation=function(type,stream,state){if(type=="}")return popContext(state);if(type=="{"||type==";")return popAndPass(type,stream,state);if(type!="variable")override="error";return"interpolation"};states.params=function(type,stream,state){if(type==")")return popContext(state);if(type=="{"||type=="}")return popAndPass(type,stream,state);if(type=="word")wordAsValue(stream);return"params"};return{startState:function(base){return{tokenize:null,state:"top",context:new Context("top",base||0,null)}},token:function(stream,state){if(!state.tokenize&&stream.eatSpace())return null;var style=(state.tokenize||tokenBase)(stream,state);if(style&&typeof style=="object"){type=style[1];style=style[0]}override=style;state.state=states[state.state](type,stream,state);return override},indent:function(state,textAfter){var cx=state.context,ch=textAfter&&textAfter.charAt(0);var indent=cx.indent;if(cx.prev&&(ch=="}"&&(cx.type=="block"||cx.type=="top"||cx.type=="interpolation"||cx.type=="font_face")||ch==")"&&(cx.type=="parens"||cx.type=="params"||cx.type=="media_parens")||ch=="{"&&(cx.type=="at"||cx.type=="media"))){indent=cx.indent-indentUnit;cx=cx.prev}return indent},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace"}});(function(){function keySet(array){var keys={};for(var i=0;i<array.length;++i){keys[array[i]]=true}return keys}var mediaTypes_=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],mediaTypes=keySet(mediaTypes_);var mediaFeatures_=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid"],mediaFeatures=keySet(mediaFeatures_);var propertyKeywords_=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid-cell","grid-column","grid-column-align","grid-column-sizing","grid-column-span","grid-columns","grid-flow","grid-row","grid-row-align","grid-row-sizing","grid-row-span","grid-rows","grid-template","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-inside","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","word-break","word-spacing","word-wrap","z-index","zoom","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-profile","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","kerning","text-anchor","writing-mode"],propertyKeywords=keySet(propertyKeywords_);var colorKeywords_=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],colorKeywords=keySet(colorKeywords_);var valueKeywords_=["above","absolute","activeborder","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","auto","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","column","compact","condensed","contain","content","content-box","context-menu","continuous","copy","cover","crop","cross","crosshair","currentcolor","cursive","dashed","decimal","decimal-leading-zero","default","default-button","destination-atop","destination-in","destination-out","destination-over","devanagari","disc","discard","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ew-resize","expanded","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","footnotes","forwards","from","geometricPrecision","georgian","graytext","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-table","inset","inside","intrinsic","invert","italic","justify","kannada","katakana","katakana-iroha","keep-all","khmer","landscape","lao","large","larger","left","level","lighter","line-through","linear","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","malayalam","match","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","nw-resize","nwse-resize","oblique","octal","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","round","row-resize","rtl","run-in","running","s-resize","sans-serif","scroll","scrollbar","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","single","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","solid","somali","source-atop","source-in","source-out","source-over","space","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","transparent","ultra-condensed","ultra-expanded","underline","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","x-large","x-small","xor","xx-large","xx-small"],valueKeywords=keySet(valueKeywords_);var fontProperties_=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],fontProperties=keySet(fontProperties_);var allWords=mediaTypes_.concat(mediaFeatures_).concat(propertyKeywords_).concat(colorKeywords_).concat(valueKeywords_);CodeMirror.registerHelper("hintWords","css",allWords);function tokenCComment(stream,state){var maybeEnd=false,ch;while((ch=stream.next())!=null){if(maybeEnd&&ch=="/"){state.tokenize=null;break}maybeEnd=ch=="*"}return["comment","comment"]}function tokenSGMLComment(stream,state){if(stream.skipTo("-->")){stream.match("-->");state.tokenize=null}else{stream.skipToEnd()}return["comment","comment"]}CodeMirror.defineMIME("text/css",{mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,propertyKeywords:propertyKeywords,colorKeywords:colorKeywords,valueKeywords:valueKeywords,fontProperties:fontProperties,tokenHooks:{"<":function(stream,state){if(!stream.match("!--"))return false;state.tokenize=tokenSGMLComment;return tokenSGMLComment(stream,state)},"/":function(stream,state){if(!stream.eat("*"))return false;state.tokenize=tokenCComment;return tokenCComment(stream,state)}},name:"css"});CodeMirror.defineMIME("text/x-scss",{mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,propertyKeywords:propertyKeywords,colorKeywords:colorKeywords,valueKeywords:valueKeywords,fontProperties:fontProperties,allowNested:true,tokenHooks:{"/":function(stream,state){if(stream.eat("/")){stream.skipToEnd();return["comment","comment"]}else if(stream.eat("*")){state.tokenize=tokenCComment;return tokenCComment(stream,state)}else{return["operator","operator"]}},":":function(stream){if(stream.match(/\s*{/))return[null,"{"];return false},$:function(stream){stream.match(/^[\w-]+/);if(stream.match(/^\s*:/,false))return["variable-2","variable-definition"];return["variable-2","variable"]},"#":function(stream){if(!stream.eat("{"))return false;return[null,"interpolation"]}},name:"css",helperType:"scss"});CodeMirror.defineMIME("text/x-less",{mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,propertyKeywords:propertyKeywords,colorKeywords:colorKeywords,valueKeywords:valueKeywords,fontProperties:fontProperties,allowNested:true,tokenHooks:{"/":function(stream,state){if(stream.eat("/")){stream.skipToEnd();return["comment","comment"]}else if(stream.eat("*")){state.tokenize=tokenCComment;return tokenCComment(stream,state)}else{return["operator","operator"]}},"@":function(stream){if(stream.match(/^(charset|document|font-face|import|keyframes|media|namespace|page|supports)\b/,false))return false;stream.eatWhile(/[\w\\\-]/);if(stream.match(/^\s*:/,false))return["variable-2","variable-definition"];return["variable-2","variable"]},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"})})();CodeMirror.defineMode("diff",function(){var TOKEN_NAMES={"+":"positive","-":"negative","@":"meta"};return{token:function(stream){var tw_pos=stream.string.search(/[\t ]+?$/);if(!stream.sol()||tw_pos===0){stream.skipToEnd();return("error "+(TOKEN_NAMES[stream.string.charAt(0)]||"")).replace(/ $/,"")}var token_name=TOKEN_NAMES[stream.peek()]||stream.skipToEnd();if(tw_pos===-1){stream.skipToEnd()}else{stream.pos=tw_pos}return token_name}}});CodeMirror.defineMIME("text/x-diff","diff");CodeMirror.defineMode("edx_markdown",function(cmCfg,modeCfg){var htmlFound=CodeMirror.mimeModes.hasOwnProperty("text/html");var htmlMode=CodeMirror.getMode(cmCfg,htmlFound?"text/html":"text/plain");var header="header",code="comment",quote="quote",list="string",hr="hr",linktext="link",linkhref="string",em="em",strong="strong",emstrong="emstrong";var hrRE=/^([*\-=_])(?:\s*\1){2,}\s*$/,ulRE=/^[*\-+]\s+/,olRE=/^[0-9]+\.\s+/,headerRE=/^(?:\={3,}|-{3,})$/,textRE=/^[^\[*_\\<>`]+/;function switchInline(stream,state,f){state.f=state.inline=f;return f(stream,state)}function switchBlock(stream,state,f){state.f=state.block=f;return f(stream,state)}function blankLine(state){state.em=false;state.strong=false;if(!htmlFound&&state.f==htmlBlock){state.f=inlineNormal;state.block=blockNormal}return null}function escapeHtml(unsafe){return unsafe.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function blockNormal(stream,state){var match;if(state.indentationDiff>=4){state.indentation-=state.indentationDiff;stream.skipToEnd();return code}else if(stream.eatSpace()){return null}else if(stream.peek()==="#"||stream.match(headerRE)){state.header=true}else if(stream.eat(">")){state.indentation++;state.quote=true}else if(stream.peek()==="["){return switchInline(stream,state,footnoteLink)}else if(stream.match(hrRE,true)){return hr}else if(match=stream.match(ulRE,true)||stream.match(olRE,true)){state.indentation+=match[0].length;return list}return switchInline(stream,state,state.inline)}function htmlBlock(stream,state){var style=htmlMode.token(stream,state.htmlState);if(htmlFound&&style==="tag"&&state.htmlState.type!=="openTag"&&!state.htmlState.context){state.f=inlineNormal;state.block=blockNormal}if(state.md_inside&&stream.current().indexOf(">")!=-1){
state.f=inlineNormal;state.block=blockNormal;state.htmlState.context=undefined}return style}function getType(state){var styles=[];if(state.strong){styles.push(state.em?emstrong:strong)}else if(state.em){styles.push(em)}if(state.header){styles.push(header)}if(state.quote){styles.push(quote)}return styles.length?styles.join(" "):null}function handleText(stream,state){if(stream.match(textRE,true)){return getType(state)}return undefined}function inlineNormal(stream,state){var style=state.text(stream,state);if(typeof style!=="undefined")return style;var ch=stream.next();if(ch==="\\"){stream.next();return getType(state)}if(ch==="`"){return switchInline(stream,state,inlineElement(code,"`"))}if(ch==="["){return switchInline(stream,state,linkText)}if(ch==="<"&&stream.match(/^\w/,false)){var md_inside=false;if(stream.string.indexOf(">")!=-1){var atts=stream.string.substring(1,stream.string.indexOf(">"));if(/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)){state.md_inside=true}}stream.backUp(1);return switchBlock(stream,state,htmlBlock)}if(ch==="<"&&stream.match(/^\/\w*?>/)){state.md_inside=false;return"tag"}var t=getType(state);if(ch==="*"||ch==="_"){if(stream.eat(ch)){return(state.strong=!state.strong)?getType(state):t}return(state.em=!state.em)?getType(state):t}return getType(state)}function linkText(stream,state){while(!stream.eol()){var ch=stream.next();if(ch==="\\")stream.next();if(ch==="]"){state.inline=state.f=linkHref;return linktext}}return linktext}function linkHref(stream,state){stream.eatSpace();var ch=stream.next();if(ch==="("||ch==="["){return switchInline(stream,state,inlineElement(linkhref,ch==="("?")":"]"))}return"error"}function footnoteLink(stream,state){if(stream.match(/^[^\]]*\]:/,true)){state.f=footnoteUrl;return linktext}return switchInline(stream,state,inlineNormal)}function footnoteUrl(stream,state){stream.eatSpace();stream.match(/^[^\s]+/,true);state.f=state.inline=inlineNormal;return linkhref}function inlineRE(endChar){if(!inlineRE[endChar]){inlineRE[endChar]=new RegExp("^(?:[^\\\\\\"+endChar+"]|\\\\.)*(?:\\"+endChar+"|$)")}return inlineRE[endChar]}function inlineElement(type,endChar,next){next=next||inlineNormal;return function(stream,state){stream.match(inlineRE(endChar));state.inline=state.f=next;return type}}return{startState:function(){return{f:blockNormal,block:blockNormal,htmlState:CodeMirror.startState(htmlMode),indentation:0,inline:inlineNormal,text:handleText,em:false,strong:false,header:false,quote:false}},copyState:function(s){return{f:s.f,block:s.block,htmlState:CodeMirror.copyState(htmlMode,s.htmlState),indentation:s.indentation,inline:s.inline,text:s.text,em:s.em,strong:s.strong,header:s.header,quote:s.quote,md_inside:s.md_inside}},token:function(stream,state){if(stream.sol()){if(stream.match(/^\s*$/,true)){return blankLine(state)}state.header=false;state.quote=false;state.f=state.block;var indentation=stream.match(/^\s*/,true)[0].replace(/\t/g,"    ").length;state.indentationDiff=indentation-state.indentation;state.indentation=indentation;if(indentation>0){return null}}return state.f(stream,state)},blankLine:blankLine,getType:getType}},"xml");CodeMirror.defineMIME("text/x-markdown","markdown");(function(){CodeMirror.extendMode("css",{commentStart:"/*",commentEnd:"*/",newlineAfterToken:function(_type,content){return/^[;{}]$/.test(content)}});CodeMirror.extendMode("javascript",{commentStart:"/*",commentEnd:"*/",newlineAfterToken:function(_type,content,textAfter,state){if(this.jsonMode){return/^[\[,{]$/.test(content)||/^}/.test(textAfter)}else{if(content==";"&&state.lexical&&state.lexical.type==")")return false;return/^[;{}]$/.test(content)&&!/^;/.test(textAfter)}}});var inlineElements=/^(a|abbr|acronym|area|base|bdo|big|br|button|caption|cite|code|col|colgroup|dd|del|dfn|em|frame|hr|iframe|img|input|ins|kbd|label|legend|link|map|object|optgroup|option|param|q|samp|script|select|small|span|strong|sub|sup|textarea|tt|var)$/;CodeMirror.extendMode("xml",{commentStart:"<!--",commentEnd:"-->",newlineAfterToken:function(type,content,textAfter,state){var inline=false;if(this.configuration=="html")inline=state.context?inlineElements.test(state.context.tagName):false;return!inline&&(type=="tag"&&/>$/.test(content)&&state.context||/^</.test(textAfter))}});CodeMirror.defineExtension("commentRange",function(isComment,from,to){var cm=this,curMode=CodeMirror.innerMode(cm.getMode(),cm.getTokenAt(from).state).mode;cm.operation(function(){if(isComment){cm.replaceRange(curMode.commentEnd,to);cm.replaceRange(curMode.commentStart,from);if(from.line==to.line&&from.ch==to.ch)cm.setCursor(from.line,from.ch+curMode.commentStart.length)}else{var selText=cm.getRange(from,to);var startIndex=selText.indexOf(curMode.commentStart);var endIndex=selText.lastIndexOf(curMode.commentEnd);if(startIndex>-1&&endIndex>-1&&endIndex>startIndex){selText=selText.substr(0,startIndex)+selText.substring(startIndex+curMode.commentStart.length,endIndex)+selText.substr(endIndex+curMode.commentEnd.length)}cm.replaceRange(selText,from,to)}})});CodeMirror.defineExtension("autoIndentRange",function(from,to){var cmInstance=this;this.operation(function(){for(var i=from.line;i<=to.line;i++){cmInstance.indentLine(i,"smart")}})});CodeMirror.defineExtension("autoFormatRange",function(from,to){var cm=this;var outer=cm.getMode(),text=cm.getRange(from,to).split("\n");var state=CodeMirror.copyState(outer,cm.getTokenAt(from).state);var tabSize=cm.getOption("tabSize");var out="",lines=0,atSol=from.ch==0;function newline(){out+="\n";atSol=true;++lines}for(var i=0;i<text.length;++i){var stream=new CodeMirror.StringStream(text[i],tabSize);while(!stream.eol()){var inner=CodeMirror.innerMode(outer,state);var style=outer.token(stream,state),cur=stream.current();stream.start=stream.pos;if(!atSol||/\S/.test(cur)){out+=cur;atSol=false}if(!atSol&&inner.mode.newlineAfterToken&&inner.mode.newlineAfterToken(style,cur,stream.string.slice(stream.pos)||text[i+1]||"",inner.state))newline()}if(!stream.pos&&outer.blankLine)outer.blankLine(state);if(!atSol&&i<text.length-1)newline()}cm.operation(function(){cm.replaceRange(out,from,to);for(var cur=from.line+1,end=from.line+lines;cur<=end;++cur)cm.indentLine(cur,"smart");cm.setSelection(from,cm.getCursor(false))})})})();CodeMirror.defineMode("htmlembedded",function(config,parserConfig){var scriptStartRegex=parserConfig.scriptStartRegex||/^<%/i,scriptEndRegex=parserConfig.scriptEndRegex||/^%>/i;var scriptingMode,htmlMixedMode;function htmlDispatch(stream,state){if(stream.match(scriptStartRegex,false)){state.token=scriptingDispatch;return scriptingMode.token(stream,state.scriptState)}else return htmlMixedMode.token(stream,state.htmlState)}function scriptingDispatch(stream,state){if(stream.match(scriptEndRegex,false)){state.token=htmlDispatch;return htmlMixedMode.token(stream,state.htmlState)}else return scriptingMode.token(stream,state.scriptState)}return{startState:function(){scriptingMode=scriptingMode||CodeMirror.getMode(config,parserConfig.scriptingModeSpec);htmlMixedMode=htmlMixedMode||CodeMirror.getMode(config,"htmlmixed");return{token:parserConfig.startOpen?scriptingDispatch:htmlDispatch,htmlState:CodeMirror.startState(htmlMixedMode),scriptState:CodeMirror.startState(scriptingMode)}},token:function(stream,state){return state.token(stream,state)},indent:function(state,textAfter){if(state.token==htmlDispatch)return htmlMixedMode.indent(state.htmlState,textAfter);else if(scriptingMode.indent)return scriptingMode.indent(state.scriptState,textAfter)},copyState:function(state){return{token:state.token,htmlState:CodeMirror.copyState(htmlMixedMode,state.htmlState),scriptState:CodeMirror.copyState(scriptingMode,state.scriptState)}},innerMode:function(state){if(state.token==scriptingDispatch)return{state:state.scriptState,mode:scriptingMode};else return{state:state.htmlState,mode:htmlMixedMode}}}},"htmlmixed");CodeMirror.defineMIME("application/x-ejs",{name:"htmlembedded",scriptingModeSpec:"javascript"});CodeMirror.defineMIME("application/x-aspx",{name:"htmlembedded",scriptingModeSpec:"text/x-csharp"});CodeMirror.defineMIME("application/x-jsp",{name:"htmlembedded",scriptingModeSpec:"text/x-java"});CodeMirror.defineMIME("application/x-erb",{name:"htmlembedded",scriptingModeSpec:"ruby"});CodeMirror.defineMode("htmlmixed",function(config,parserConfig){var htmlMode=CodeMirror.getMode(config,{name:"xml",htmlMode:true});var cssMode=CodeMirror.getMode(config,"css");var scriptTypes=[],scriptTypesConf=parserConfig&&parserConfig.scriptTypes;scriptTypes.push({matches:/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,mode:CodeMirror.getMode(config,"javascript")});if(scriptTypesConf)for(var i=0;i<scriptTypesConf.length;++i){var conf=scriptTypesConf[i];scriptTypes.push({matches:conf.matches,mode:conf.mode&&CodeMirror.getMode(config,conf.mode)})}scriptTypes.push({matches:/./,mode:CodeMirror.getMode(config,"text/plain")});function html(stream,state){var tagName=state.htmlState.tagName;var style=htmlMode.token(stream,state.htmlState);if(tagName=="script"&&/\btag\b/.test(style)&&stream.current()==">"){var scriptType=stream.string.slice(Math.max(0,stream.pos-100),stream.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i);scriptType=scriptType?scriptType[1]:"";if(scriptType&&/[\"\']/.test(scriptType.charAt(0)))scriptType=scriptType.slice(1,scriptType.length-1);for(var i=0;i<scriptTypes.length;++i){var tp=scriptTypes[i];if(typeof tp.matches=="string"?scriptType==tp.matches:tp.matches.test(scriptType)){if(tp.mode){state.token=script;state.localMode=tp.mode;state.localState=tp.mode.startState&&tp.mode.startState(htmlMode.indent(state.htmlState,""))}break}}}else if(tagName=="style"&&/\btag\b/.test(style)&&stream.current()==">"){state.token=css;state.localMode=cssMode;state.localState=cssMode.startState(htmlMode.indent(state.htmlState,""))}return style}function maybeBackup(stream,pat,style){var cur=stream.current();var close=cur.search(pat),m;if(close>-1)stream.backUp(cur.length-close);else if(m=cur.match(/<\/?$/)){stream.backUp(cur.length);if(!stream.match(pat,false))stream.match(cur)}return style}function script(stream,state){if(stream.match(/^<\/\s*script\s*>/i,false)){state.token=html;state.localState=state.localMode=null;return html(stream,state)}return maybeBackup(stream,/<\/\s*script\s*>/,state.localMode.token(stream,state.localState))}function css(stream,state){if(stream.match(/^<\/\s*style\s*>/i,false)){state.token=html;state.localState=state.localMode=null;return html(stream,state)}return maybeBackup(stream,/<\/\s*style\s*>/,cssMode.token(stream,state.localState))}return{startState:function(){var state=htmlMode.startState();return{token:html,localMode:null,localState:null,htmlState:state}},copyState:function(state){if(state.localState)var local=CodeMirror.copyState(state.localMode,state.localState);return{token:state.token,localMode:state.localMode,localState:local,htmlState:CodeMirror.copyState(htmlMode,state.htmlState)}},token:function(stream,state){return state.token(stream,state)},indent:function(state,textAfter){if(!state.localMode||/^\s*<\//.test(textAfter))return htmlMode.indent(state.htmlState,textAfter);else if(state.localMode.indent)return state.localMode.indent(state.localState,textAfter);else return CodeMirror.Pass},innerMode:function(state){return{state:state.localState||state.htmlState,mode:state.localMode||htmlMode}}}},"xml","javascript","css");CodeMirror.defineMIME("text/html","htmlmixed");CodeMirror.defineMode("javascript",function(config,parserConfig){var indentUnit=config.indentUnit;var statementIndent=parserConfig.statementIndent;var jsonMode=parserConfig.json;var isTS=parserConfig.typescript;var keywords=function(){function kw(type){return{type:type,style:"keyword"}}var A=kw("keyword a"),B=kw("keyword b"),C=kw("keyword c");var operator=kw("operator"),atom={type:"atom",style:"atom"};var jsKeywords={if:kw("if"),while:A,with:A,else:B,do:B,try:B,finally:B,return:C,break:C,continue:C,new:C,delete:C,throw:C,debugger:C,var:kw("var"),const:kw("var"),let:kw("var"),function:kw("function"),catch:kw("catch"),for:kw("for"),switch:kw("switch"),case:kw("case"),default:kw("default"),in:operator,typeof:operator,instanceof:operator,true:atom,false:atom,null:atom,undefined:atom,NaN:atom,Infinity:atom,this:kw("this"),module:kw("module"),class:kw("class"),super:kw("atom"),yield:C,export:kw("export"),import:kw("import"),extends:C};if(isTS){var type={type:"variable",style:"variable-3"};var tsKeywords={interface:kw("interface"),extends:kw("extends"),constructor:kw("constructor"),public:kw("public"),private:kw("private"),protected:kw("protected"),static:kw("static"),string:type,number:type,bool:type,any:type};for(var attr in tsKeywords){jsKeywords[attr]=tsKeywords[attr]}}return jsKeywords}();var isOperatorChar=/[+\-*&%=<>!?|~^]/;function readRegexp(stream){var escaped=false,next,inSet=false;while((next=stream.next())!=null){if(!escaped){if(next=="/"&&!inSet)return;if(next=="[")inSet=true;else if(inSet&&next=="]")inSet=false}escaped=!escaped&&next=="\\"}}var type,content;function ret(tp,style,cont){type=tp;content=cont;return style}function tokenBase(stream,state){var ch=stream.next();if(ch=='"'||ch=="'"){state.tokenize=tokenString(ch);return state.tokenize(stream,state)}else if(ch=="."&&stream.match(/^\d+(?:[eE][+\-]?\d+)?/)){return ret("number","number")}else if(ch=="."&&stream.match("..")){return ret("spread","meta")}else if(/[\[\]{}\(\),;\:\.]/.test(ch)){return ret(ch)}else if(ch=="="&&stream.eat(">")){return ret("=>","operator")}else if(ch=="0"&&stream.eat(/x/i)){stream.eatWhile(/[\da-f]/i);return ret("number","number")}else if(/\d/.test(ch)){stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);return ret("number","number")}else if(ch=="/"){if(stream.eat("*")){state.tokenize=tokenComment;return tokenComment(stream,state)}else if(stream.eat("/")){stream.skipToEnd();return ret("comment","comment")}else if(state.lastType=="operator"||state.lastType=="keyword c"||state.lastType=="sof"||/^[\[{}\(,;:]$/.test(state.lastType)){readRegexp(stream);stream.eatWhile(/[gimy]/);return ret("regexp","string-2")}else{stream.eatWhile(isOperatorChar);return ret("operator","operator",stream.current())}}else if(ch=="`"){state.tokenize=tokenQuasi;return tokenQuasi(stream,state)}else if(ch=="#"){stream.skipToEnd();return ret("error","error")}else if(isOperatorChar.test(ch)){stream.eatWhile(isOperatorChar);return ret("operator","operator",stream.current())}else{stream.eatWhile(/[\w\$_]/);var word=stream.current(),known=keywords.propertyIsEnumerable(word)&&keywords[word];return known&&state.lastType!="."?ret(known.type,known.style,word):ret("variable","variable",word)}}function tokenString(quote){return function(stream,state){var escaped=false,next;while((next=stream.next())!=null){if(next==quote&&!escaped)break;escaped=!escaped&&next=="\\"}if(!escaped)state.tokenize=tokenBase;return ret("string","string")}}function tokenComment(stream,state){var maybeEnd=false,ch;while(ch=stream.next()){if(ch=="/"&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd=ch=="*"}return ret("comment","comment")}function tokenQuasi(stream,state){var escaped=false,next;while((next=stream.next())!=null){if(!escaped&&(next=="`"||next=="$"&&stream.eat("{"))){state.tokenize=tokenBase;break}escaped=!escaped&&next=="\\"}return ret("quasi","string-2",stream.current())}var brackets="([{}])";function findFatArrow(stream,state){if(state.fatArrowAt)state.fatArrowAt=null;var arrow=stream.string.indexOf("=>",stream.start);if(arrow<0)return;var depth=0,sawSomething=false;for(var pos=arrow-1;pos>=0;--pos){var ch=stream.string.charAt(pos);var bracket=brackets.indexOf(ch);if(bracket>=0&&bracket<3){if(!depth){++pos;break}if(--depth==0)break}else if(bracket>=3&&bracket<6){++depth}else if(/[$\w]/.test(ch)){sawSomething=true}else if(sawSomething&&!depth){++pos;break}}if(sawSomething&&!depth)state.fatArrowAt=pos}var atomicTypes={atom:true,number:true,variable:true,string:true,regexp:true,this:true};function JSLexical(indented,column,type,align,prev,info){this.indented=indented;this.column=column;this.type=type;this.prev=prev;this.info=info;if(align!=null)this.align=align}function inScope(state,varname){for(var v=state.localVars;v;v=v.next)if(v.name==varname)return true;for(var cx=state.context;cx;cx=cx.prev){for(var v=cx.vars;v;v=v.next)if(v.name==varname)return true}}function parseJS(state,style,type,content,stream){var cc=state.cc;cx.state=state;cx.stream=stream;cx.marked=null,cx.cc=cc;if(!state.lexical.hasOwnProperty("align"))state.lexical.align=true;while(true){var combinator=cc.length?cc.pop():jsonMode?expression:statement;if(combinator(type,content)){while(cc.length&&cc[cc.length-1].lex)cc.pop()();if(cx.marked)return cx.marked;if(type=="variable"&&inScope(state,content))return"variable-2";return style}}}var cx={state:null,column:null,marked:null,cc:null};function pass(){for(var i=arguments.length-1;i>=0;i--)cx.cc.push(arguments[i])}function cont(){pass.apply(null,arguments);return true}function register(varname){function inList(list){for(var v=list;v;v=v.next)if(v.name==varname)return true;return false}var state=cx.state;if(state.context){cx.marked="def";if(inList(state.localVars))return;state.localVars={name:varname,next:state.localVars}}else{if(inList(state.globalVars))return;if(parserConfig.globalVars)state.globalVars={name:varname,next:state.globalVars}}}var defaultVars={name:"this",next:{name:"arguments"}};function pushcontext(){cx.state.context={prev:cx.state.context,vars:cx.state.localVars};cx.state.localVars=defaultVars}function popcontext(){cx.state.localVars=cx.state.context.vars;cx.state.context=cx.state.context.prev}function pushlex(type,info){var result=function(){var state=cx.state,indent=state.indented;if(state.lexical.type=="stat")indent=state.lexical.indented;state.lexical=new JSLexical(indent,cx.stream.column(),type,null,state.lexical,info)};result.lex=true;return result}function poplex(){var state=cx.state;if(state.lexical.prev){if(state.lexical.type==")")state.indented=state.lexical.indented;state.lexical=state.lexical.prev}}poplex.lex=true;function expect(wanted){return function(type){if(type==wanted)return cont();else if(wanted==";")return pass();else return cont(arguments.callee)}}function statement(type,value){if(type=="var")return cont(pushlex("vardef",value.length),vardef,expect(";"),poplex);if(type=="keyword a")return cont(pushlex("form"),expression,statement,poplex);if(type=="keyword b")return cont(pushlex("form"),statement,poplex);if(type=="{")return cont(pushlex("}"),block,poplex);if(type==";")return cont();if(type=="if")return cont(pushlex("form"),expression,statement,poplex,maybeelse);if(type=="function")return cont(functiondef);if(type=="for")return cont(pushlex("form"),forspec,statement,poplex);if(type=="variable")return cont(pushlex("stat"),maybelabel);if(type=="switch")return cont(pushlex("form"),expression,pushlex("}","switch"),expect("{"),block,poplex,poplex);if(type=="case")return cont(expression,expect(":"));if(type=="default")return cont(expect(":"));if(type=="catch")return cont(pushlex("form"),pushcontext,expect("("),funarg,expect(")"),statement,poplex,popcontext);if(type=="module")return cont(pushlex("form"),pushcontext,afterModule,popcontext,poplex);if(type=="class")return cont(pushlex("form"),className,objlit,poplex);if(type=="export")return cont(pushlex("form"),afterExport,poplex);if(type=="import")return cont(pushlex("form"),afterImport,poplex);return pass(pushlex("stat"),expression,expect(";"),poplex)}function expression(type){return expressionInner(type,false)}function expressionNoComma(type){return expressionInner(type,true)}function expressionInner(type,noComma){if(cx.state.fatArrowAt==cx.stream.start){var body=noComma?arrowBodyNoComma:arrowBody;if(type=="(")return cont(pushcontext,pushlex(")"),commasep(pattern,")"),poplex,expect("=>"),body,popcontext);else if(type=="variable")return pass(pushcontext,pattern,expect("=>"),body,popcontext)}var maybeop=noComma?maybeoperatorNoComma:maybeoperatorComma;if(atomicTypes.hasOwnProperty(type))return cont(maybeop);if(type=="function")return cont(functiondef);if(type=="keyword c")return cont(noComma?maybeexpressionNoComma:maybeexpression);if(type=="(")return cont(pushlex(")"),maybeexpression,comprehension,expect(")"),poplex,maybeop);if(type=="operator"||type=="spread")return cont(noComma?expressionNoComma:expression);if(type=="[")return cont(pushlex("]"),arrayLiteral,poplex,maybeop);if(type=="{")return contCommasep(objprop,"}",null,maybeop);return cont()}function maybeexpression(type){if(type.match(/[;\}\)\],]/))return pass();return pass(expression)}function maybeexpressionNoComma(type){if(type.match(/[;\}\)\],]/))return pass();return pass(expressionNoComma)}function maybeoperatorComma(type,value){if(type==",")return cont(expression);return maybeoperatorNoComma(type,value,false)}function maybeoperatorNoComma(type,value,noComma){var me=noComma==false?maybeoperatorComma:maybeoperatorNoComma;var expr=noComma==false?expression:expressionNoComma;if(value=="=>")return cont(pushcontext,noComma?arrowBodyNoComma:arrowBody,popcontext);if(type=="operator"){if(/\+\+|--/.test(value))return cont(me);if(value=="?")return cont(expression,expect(":"),expr);return cont(expr)}if(type=="quasi"){cx.cc.push(me);return quasi(value)}if(type==";")return;if(type=="(")return contCommasep(expressionNoComma,")","call",me);if(type==".")return cont(property,me);if(type=="[")return cont(pushlex("]"),maybeexpression,expect("]"),poplex,me)}function quasi(value){if(value.slice(value.length-2)!="${")return cont();return cont(expression,continueQuasi)}function continueQuasi(type){if(type=="}"){cx.marked="string-2";cx.state.tokenize=tokenQuasi;return cont()}}function arrowBody(type){findFatArrow(cx.stream,cx.state);if(type=="{")return pass(statement);return pass(expression)}function arrowBodyNoComma(type){findFatArrow(cx.stream,cx.state);if(type=="{")return pass(statement);return pass(expressionNoComma)}function maybelabel(type){if(type==":")return cont(poplex,statement);return pass(maybeoperatorComma,expect(";"),poplex)}function property(type){if(type=="variable"){cx.marked="property";return cont()}}function objprop(type,value){if(type=="variable"){cx.marked="property";if(value=="get"||value=="set")return cont(getterSetter)}else if(type=="number"||type=="string"){cx.marked=type+" property"}else if(type=="["){return cont(expression,expect("]"),afterprop)}if(atomicTypes.hasOwnProperty(type))return cont(afterprop)}function getterSetter(type){if(type!="variable")return pass(afterprop);cx.marked="property";return cont(functiondef)}function afterprop(type){if(type==":")return cont(expressionNoComma);if(type=="(")return pass(functiondef)}function commasep(what,end){function proceed(type){if(type==","){var lex=cx.state.lexical;if(lex.info=="call")lex.pos=(lex.pos||0)+1;return cont(what,proceed)}if(type==end)return cont();return cont(expect(end))}return function(type){if(type==end)return cont();return pass(what,proceed)}}function contCommasep(what,end,info){for(var i=3;i<arguments.length;i++)cx.cc.push(arguments[i]);return cont(pushlex(end,info),commasep(what,end),poplex)}function block(type){if(type=="}")return cont();return pass(statement,block)}function maybetype(type){if(isTS&&type==":")return cont(typedef)}function typedef(type){if(type=="variable"){cx.marked="variable-3";return cont()}}function vardef(){return pass(pattern,maybetype,maybeAssign,vardefCont)}function pattern(type,value){if(type=="variable"){register(value);return cont()}if(type=="[")return contCommasep(pattern,"]");if(type=="{")return contCommasep(proppattern,"}")}function proppattern(type,value){if(type=="variable"&&!cx.stream.match(/^\s*:/,false)){register(value);return cont(maybeAssign)}if(type=="variable")cx.marked="property";return cont(expect(":"),pattern,maybeAssign)}function maybeAssign(_type,value){if(value=="=")return cont(expressionNoComma)}function vardefCont(type){if(type==",")return cont(vardef)}function maybeelse(type,value){if(type=="keyword b"&&value=="else")return cont(pushlex("form"),statement,poplex)}function forspec(type){if(type=="(")return cont(pushlex(")"),forspec1,expect(")"),poplex)}function forspec1(type){if(type=="var")return cont(vardef,expect(";"),forspec2);if(type==";")return cont(forspec2);if(type=="variable")return cont(formaybeinof);return pass(expression,expect(";"),forspec2)}function formaybeinof(_type,value){if(value=="in"||value=="of"){cx.marked="keyword";return cont(expression)}return cont(maybeoperatorComma,forspec2)}function forspec2(type,value){if(type==";")return cont(forspec3);if(value=="in"||value=="of"){cx.marked="keyword";return cont(expression)}return pass(expression,expect(";"),forspec3)}function forspec3(type){if(type!=")")cont(expression)}function functiondef(type,value){if(value=="*"){cx.marked="keyword";return cont(functiondef)}if(type=="variable"){register(value);return cont(functiondef)}if(type=="(")return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,statement,popcontext)}function funarg(type){if(type=="spread")return cont(funarg);return pass(pattern,maybetype)}function className(type,value){if(type=="variable"){register(value);return cont(classNameAfter)}}function classNameAfter(_type,value){if(value=="extends")return cont(expression)}function objlit(type){if(type=="{")return contCommasep(objprop,"}")}function afterModule(type,value){if(type=="string")return cont(statement);if(type=="variable"){register(value);return cont(maybeFrom)}}function afterExport(_type,value){if(value=="*"){cx.marked="keyword";return cont(maybeFrom,expect(";"))}if(value=="default"){cx.marked="keyword";return cont(expression,expect(";"))}return pass(statement)}function afterImport(type){if(type=="string")return cont();return pass(importSpec,maybeFrom)}function importSpec(type,value){if(type=="{")return contCommasep(importSpec,"}");if(type=="variable")register(value);return cont()}function maybeFrom(_type,value){if(value=="from"){cx.marked="keyword";return cont(expression)}}function arrayLiteral(type){if(type=="]")return cont();return pass(expressionNoComma,maybeArrayComprehension)}function maybeArrayComprehension(type){if(type=="for")return pass(comprehension,expect("]"));if(type==",")return cont(commasep(expressionNoComma,"]"));return pass(commasep(expressionNoComma,"]"))}function comprehension(type){if(type=="for")return cont(forspec,comprehension);if(type=="if")return cont(expression,comprehension)}return{startState:function(basecolumn){var state={tokenize:tokenBase,lastType:"sof",cc:[],lexical:new JSLexical((basecolumn||0)-indentUnit,0,"block",false),localVars:parserConfig.localVars,context:parserConfig.localVars&&{vars:parserConfig.localVars},indented:0};if(parserConfig.globalVars)state.globalVars=parserConfig.globalVars;return state},token:function(stream,state){if(stream.sol()){if(!state.lexical.hasOwnProperty("align"))state.lexical.align=false;state.indented=stream.indentation();findFatArrow(stream,state)}if(state.tokenize!=tokenComment&&stream.eatSpace())return null;var style=state.tokenize(stream,state);if(type=="comment")return style;state.lastType=type=="operator"&&(content=="++"||content=="--")?"incdec":type;return parseJS(state,style,type,content,stream)},indent:function(state,textAfter){if(state.tokenize==tokenComment)return CodeMirror.Pass;if(state.tokenize!=tokenBase)return 0;var firstChar=textAfter&&textAfter.charAt(0),lexical=state.lexical;for(var i=state.cc.length-1;i>=0;--i){var c=state.cc[i];if(c==poplex)lexical=lexical.prev;else if(c!=maybeelse)break}if(lexical.type=="stat"&&firstChar=="}")lexical=lexical.prev;if(statementIndent&&lexical.type==")"&&lexical.prev.type=="stat")lexical=lexical.prev;var type=lexical.type,closing=firstChar==type;if(type=="vardef")return lexical.indented+(state.lastType=="operator"||state.lastType==","?lexical.info+1:0);else if(type=="form"&&firstChar=="{")return lexical.indented;else if(type=="form")return lexical.indented+indentUnit;else if(type=="stat")return lexical.indented+(state.lastType=="operator"||state.lastType==","?statementIndent||indentUnit:0);else if(lexical.info=="switch"&&!closing&&parserConfig.doubleIndentSwitch!=false)return lexical.indented+(/^(?:case|default)\b/.test(textAfter)?indentUnit:2*indentUnit);else if(lexical.align)return lexical.column+(closing?0:1);else return lexical.indented+(closing?0:indentUnit)},electricChars:":{}",blockCommentStart:jsonMode?null:"/*",blockCommentEnd:jsonMode?null:"*/",lineComment:jsonMode?null:"//",fold:"brace",helperType:jsonMode?"json":"javascript",jsonMode:jsonMode}});CodeMirror.defineMIME("text/javascript","javascript");CodeMirror.defineMIME("text/ecmascript","javascript");CodeMirror.defineMIME("application/javascript","javascript");CodeMirror.defineMIME("application/ecmascript","javascript");CodeMirror.defineMIME("application/json",{name:"javascript",json:true});CodeMirror.defineMIME("application/x-json",{name:"javascript",json:true});CodeMirror.defineMIME("text/typescript",{name:"javascript",typescript:true});CodeMirror.defineMIME("application/typescript",{name:"javascript",typescript:true});(function(){var DEFAULT_MIN_CHARS=2;var DEFAULT_TOKEN_STYLE="matchhighlight";var DEFAULT_DELAY=100;function State(options){if(typeof options=="object"){this.minChars=options.minChars;this.style=options.style;this.showToken=options.showToken;this.delay=options.delay}if(this.style==null)this.style=DEFAULT_TOKEN_STYLE;if(this.minChars==null)this.minChars=DEFAULT_MIN_CHARS;if(this.delay==null)this.delay=DEFAULT_DELAY;this.overlay=this.timeout=null}CodeMirror.defineOption("highlightSelectionMatches",false,function(cm,val,old){if(old&&old!=CodeMirror.Init){var over=cm.state.matchHighlighter.overlay;if(over)cm.removeOverlay(over);clearTimeout(cm.state.matchHighlighter.timeout);cm.state.matchHighlighter=null;cm.off("cursorActivity",cursorActivity)}if(val){cm.state.matchHighlighter=new State(val);highlightMatches(cm);cm.on("cursorActivity",cursorActivity)}});function cursorActivity(cm){var state=cm.state.matchHighlighter;clearTimeout(state.timeout);state.timeout=setTimeout(function(){highlightMatches(cm)},state.delay)}function highlightMatches(cm){cm.operation(function(){var state=cm.state.matchHighlighter;if(state.overlay){cm.removeOverlay(state.overlay);state.overlay=null}if(!cm.somethingSelected()&&state.showToken){var re=state.showToken===true?/[\w$]/:state.showToken;var cur=cm.getCursor(),line=cm.getLine(cur.line),start=cur.ch,end=start;while(start&&re.test(line.charAt(start-1)))--start;while(end<line.length&&re.test(line.charAt(end)))++end;if(start<end)cm.addOverlay(state.overlay=makeOverlay(line.slice(start,end),re,state.style));return}if(cm.getCursor("head").line!=cm.getCursor("anchor").line)return;var selection=cm.getSelection().replace(/^\s+|\s+$/g,"");if(selection.length>=state.minChars)cm.addOverlay(state.overlay=makeOverlay(selection,false,state.style))})}function boundariesAround(stream,re){return(!stream.start||!re.test(stream.string.charAt(stream.start-1)))&&(stream.pos==stream.string.length||!re.test(stream.string.charAt(stream.pos)))}function makeOverlay(query,hasBoundary,style){return{token:function(stream){if(stream.match(query)&&(!hasBoundary||boundariesAround(stream,hasBoundary)))return style;stream.next();stream.skipTo(query.charAt(0))||stream.skipToEnd()}}}})();CodeMirror.defineMode("python",function(conf,parserConf){var ERRORCLASS="error";function wordRegexp(words){return new RegExp("^(("+words.join(")|(")+"))\\b")}var singleOperators=parserConf.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!]");var singleDelimiters=parserConf.singleDelimiters||new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]");var doubleOperators=parserConf.doubleOperators||new RegExp("^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))");var doubleDelimiters=parserConf.doubleDelimiters||new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");var tripleDelimiters=parserConf.tripleDelimiters||new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");var identifiers=parserConf.identifiers||new RegExp("^[_A-Za-z][_A-Za-z0-9]*");var hangingIndent=parserConf.hangingIndent||parserConf.indentUnit;
var wordOperators=wordRegexp(["and","or","not","is","in"]);var commonkeywords=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield"];var commonBuiltins=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];var py2={builtins:["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"],keywords:["exec","print"]};var py3={builtins:["ascii","bytes","exec","print"],keywords:["nonlocal","False","True","None"]};if(parserConf.extra_keywords!=undefined){commonkeywords=commonkeywords.concat(parserConf.extra_keywords)}if(parserConf.extra_builtins!=undefined){commonBuiltins=commonBuiltins.concat(parserConf.extra_builtins)}if(!!parserConf.version&&parseInt(parserConf.version,10)===3){commonkeywords=commonkeywords.concat(py3.keywords);commonBuiltins=commonBuiltins.concat(py3.builtins);var stringPrefixes=new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))","i")}else{commonkeywords=commonkeywords.concat(py2.keywords);commonBuiltins=commonBuiltins.concat(py2.builtins);var stringPrefixes=new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var keywords=wordRegexp(commonkeywords);var builtins=wordRegexp(commonBuiltins);var indentInfo=null;function tokenBase(stream,state){if(stream.sol()){var scopeOffset=state.scopes[0].offset;if(stream.eatSpace()){var lineOffset=stream.indentation();if(lineOffset>scopeOffset){indentInfo="indent"}else if(lineOffset<scopeOffset){indentInfo="dedent"}return null}else{if(scopeOffset>0){dedent(stream,state)}}}if(stream.eatSpace()){return null}var ch=stream.peek();if(ch==="#"){stream.skipToEnd();return"comment"}if(stream.match(/^[0-9\.]/,false)){var floatLiteral=false;if(stream.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)){floatLiteral=true}if(stream.match(/^\d+\.\d*/)){floatLiteral=true}if(stream.match(/^\.\d+/)){floatLiteral=true}if(floatLiteral){stream.eat(/J/i);return"number"}var intLiteral=false;if(stream.match(/^0x[0-9a-f]+/i)){intLiteral=true}if(stream.match(/^0b[01]+/i)){intLiteral=true}if(stream.match(/^0o[0-7]+/i)){intLiteral=true}if(stream.match(/^[1-9]\d*(e[\+\-]?\d+)?/)){stream.eat(/J/i);intLiteral=true}if(stream.match(/^0(?![\dx])/i)){intLiteral=true}if(intLiteral){stream.eat(/L/i);return"number"}}if(stream.match(stringPrefixes)){state.tokenize=tokenStringFactory(stream.current());return state.tokenize(stream,state)}if(stream.match(tripleDelimiters)||stream.match(doubleDelimiters)){return null}if(stream.match(doubleOperators)||stream.match(singleOperators)||stream.match(wordOperators)){return"operator"}if(stream.match(singleDelimiters)){return null}if(stream.match(keywords)){return"keyword"}if(stream.match(builtins)){return"builtin"}if(stream.match(identifiers)){if(state.lastToken=="def"||state.lastToken=="class"){return"def"}return"variable"}stream.next();return ERRORCLASS}function tokenStringFactory(delimiter){while("rub".indexOf(delimiter.charAt(0).toLowerCase())>=0){delimiter=delimiter.substr(1)}var singleline=delimiter.length==1;var OUTCLASS="string";function tokenString(stream,state){while(!stream.eol()){stream.eatWhile(/[^'"\\]/);if(stream.eat("\\")){stream.next();if(singleline&&stream.eol()){return OUTCLASS}}else if(stream.match(delimiter)){state.tokenize=tokenBase;return OUTCLASS}else{stream.eat(/['"]/)}}if(singleline){if(parserConf.singleLineStringErrors){return ERRORCLASS}else{state.tokenize=tokenBase}}return OUTCLASS}tokenString.isString=true;return tokenString}function indent(stream,state,type){type=type||"py";var indentUnit=0;if(type==="py"){if(state.scopes[0].type!=="py"){state.scopes[0].offset=stream.indentation();return}for(var i=0;i<state.scopes.length;++i){if(state.scopes[i].type==="py"){indentUnit=state.scopes[i].offset+conf.indentUnit;break}}}else if(stream.match(/\s*($|#)/,false)){indentUnit=stream.indentation()+hangingIndent}else{indentUnit=stream.column()+stream.current().length}state.scopes.unshift({offset:indentUnit,type:type})}function dedent(stream,state,type){type=type||"py";if(state.scopes.length==1)return;if(state.scopes[0].type==="py"){var _indent=stream.indentation();var _indent_index=-1;for(var i=0;i<state.scopes.length;++i){if(_indent===state.scopes[i].offset){_indent_index=i;break}}if(_indent_index===-1){return true}while(state.scopes[0].offset!==_indent){state.scopes.shift()}return false}else{if(type==="py"){state.scopes[0].offset=stream.indentation();return false}else{if(state.scopes[0].type!=type){return true}state.scopes.shift();return false}}}function tokenLexer(stream,state){indentInfo=null;var style=state.tokenize(stream,state);var current=stream.current();if(current==="."){style=stream.match(identifiers,false)?null:ERRORCLASS;if(style===null&&state.lastStyle==="meta"){style="meta"}return style}if(current==="@"){return stream.match(identifiers,false)?"meta":ERRORCLASS}if((style==="variable"||style==="builtin")&&state.lastStyle==="meta"){style="meta"}if(current==="pass"||current==="return"){state.dedent+=1}if(current==="lambda")state.lambda=true;if(current===":"&&!state.lambda&&state.scopes[0].type=="py"||indentInfo==="indent"){indent(stream,state)}var delimiter_index="[({".indexOf(current);if(delimiter_index!==-1){indent(stream,state,"])}".slice(delimiter_index,delimiter_index+1))}if(indentInfo==="dedent"){if(dedent(stream,state)){return ERRORCLASS}}delimiter_index="])}".indexOf(current);if(delimiter_index!==-1){if(dedent(stream,state,current)){return ERRORCLASS}}if(state.dedent>0&&stream.eol()&&state.scopes[0].type=="py"){if(state.scopes.length>1)state.scopes.shift();state.dedent-=1}return style}var external={startState:function(basecolumn){return{tokenize:tokenBase,scopes:[{offset:basecolumn||0,type:"py"}],lastStyle:null,lastToken:null,lambda:false,dedent:0}},token:function(stream,state){var style=tokenLexer(stream,state);state.lastStyle=style;var current=stream.current();if(current&&style){state.lastToken=current}if(stream.eol()&&state.lambda){state.lambda=false}return style},indent:function(state){if(state.tokenize!=tokenBase){return state.tokenize.isString?CodeMirror.Pass:0}return state.scopes[0].offset},lineComment:"#",fold:"indent"};return external});CodeMirror.defineMIME("text/x-python","python");(function(){"use strict";var words=function(str){return str.split(" ")};CodeMirror.defineMIME("text/x-cython",{name:"python",extra_keywords:words("by cdef cimport cpdef ctypedef enum except"+"extern gil include nogil property public"+"readonly struct union DEF IF ELIF ELSE")})})();(function(){var Pos=CodeMirror.Pos;function SearchCursor(doc,query,pos,caseFold){this.atOccurrence=false;this.doc=doc;if(caseFold==null&&typeof query=="string")caseFold=false;pos=pos?doc.clipPos(pos):Pos(0,0);this.pos={from:pos,to:pos};if(typeof query!="string"){if(!query.global)query=new RegExp(query.source,query.ignoreCase?"ig":"g");this.matches=function(reverse,pos){if(reverse){query.lastIndex=0;var line=doc.getLine(pos.line).slice(0,pos.ch),cutOff=0,match,start;for(;;){query.lastIndex=cutOff;var newMatch=query.exec(line);if(!newMatch)break;match=newMatch;start=match.index;cutOff=match.index+(match[0].length||1);if(cutOff==line.length)break}var matchLen=match&&match[0].length||0;if(!matchLen){if(start==0&&line.length==0){match=undefined}else if(start!=doc.getLine(pos.line).length){matchLen++}}}else{query.lastIndex=pos.ch;var line=doc.getLine(pos.line),match=query.exec(line);var matchLen=match&&match[0].length||0;var start=match&&match.index;if(start+matchLen!=line.length&&!matchLen)matchLen=1}if(match&&matchLen)return{from:Pos(pos.line,start),to:Pos(pos.line,start+matchLen),match:match}}}else{var origQuery=query;if(caseFold)query=query.toLowerCase();var fold=caseFold?function(str){return str.toLowerCase()}:function(str){return str};var target=query.split("\n");if(target.length==1){if(!query.length){this.matches=function(){}}else{this.matches=function(reverse,pos){if(reverse){var orig=doc.getLine(pos.line).slice(0,pos.ch),line=fold(orig);var match=line.lastIndexOf(query);if(match>-1){match=adjustPos(orig,line,match);return{from:Pos(pos.line,match),to:Pos(pos.line,match+origQuery.length)}}}else{var orig=doc.getLine(pos.line).slice(pos.ch),line=fold(orig);var match=line.indexOf(query);if(match>-1){match=adjustPos(orig,line,match)+pos.ch;return{from:Pos(pos.line,match),to:Pos(pos.line,match+origQuery.length)}}}}}}else{var origTarget=origQuery.split("\n");this.matches=function(reverse,pos){var last=target.length-1;if(reverse){if(pos.line-(target.length-1)<doc.firstLine())return;if(fold(doc.getLine(pos.line).slice(0,origTarget[last].length))!=target[target.length-1])return;var to=Pos(pos.line,origTarget[last].length);for(var ln=pos.line-1,i=last-1;i>=1;--i,--ln)if(target[i]!=fold(doc.getLine(ln)))return;var line=doc.getLine(ln),cut=line.length-origTarget[0].length;if(fold(line.slice(cut))!=target[0])return;return{from:Pos(ln,cut),to:to}}else{if(pos.line+(target.length-1)>doc.lastLine())return;var line=doc.getLine(pos.line),cut=line.length-origTarget[0].length;if(fold(line.slice(cut))!=target[0])return;var from=Pos(pos.line,cut);for(var ln=pos.line+1,i=1;i<last;++i,++ln)if(target[i]!=fold(doc.getLine(ln)))return;if(doc.getLine(ln).slice(0,origTarget[last].length)!=target[last])return;return{from:from,to:Pos(ln,origTarget[last].length)}}}}}}SearchCursor.prototype={findNext:function(){return this.find(false)},findPrevious:function(){return this.find(true)},find:function(reverse){var self=this,pos=this.doc.clipPos(reverse?this.pos.from:this.pos.to);function savePosAndFail(line){var pos=Pos(line,0);self.pos={from:pos,to:pos};self.atOccurrence=false;return false}for(;;){if(this.pos=this.matches(reverse,pos)){this.atOccurrence=true;return this.pos.match||true}if(reverse){if(!pos.line)return savePosAndFail(0);pos=Pos(pos.line-1,this.doc.getLine(pos.line-1).length)}else{var maxLine=this.doc.lineCount();if(pos.line==maxLine-1)return savePosAndFail(maxLine);pos=Pos(pos.line+1,0)}}},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(newText){if(!this.atOccurrence)return;var lines=CodeMirror.splitLines(newText);this.doc.replaceRange(lines,this.pos.from,this.pos.to);this.pos.to=Pos(this.pos.from.line+lines.length-1,lines[lines.length-1].length+(lines.length==1?this.pos.from.ch:0))}};function adjustPos(orig,folded,pos){if(orig.length==folded.length)return pos;for(var pos1=Math.min(pos,orig.length);;){var len1=orig.slice(0,pos1).toLowerCase().length;if(len1<pos)++pos1;else if(len1>pos)--pos1;else return pos1}}CodeMirror.defineExtension("getSearchCursor",function(query,pos,caseFold){return new SearchCursor(this.doc,query,pos,caseFold)});CodeMirror.defineDocExtension("getSearchCursor",function(query,pos,caseFold){return new SearchCursor(this,query,pos,caseFold)})})();(function(){function searchOverlay(query,caseInsensitive){var startChar;if(typeof query=="string"){startChar=query.charAt(0);query=new RegExp("^"+query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),caseInsensitive?"i":"")}else{query=new RegExp("^(?:"+query.source+")",query.ignoreCase?"i":"")}if(typeof query=="string")return{token:function(stream){if(stream.match(query))return"searching";stream.next();stream.skipTo(query.charAt(0))||stream.skipToEnd()}};return{token:function(stream){if(stream.match(query))return"searching";while(!stream.eol()){stream.next();if(startChar)stream.skipTo(startChar)||stream.skipToEnd();if(stream.match(query,false))break}}}}function SearchState(){this.posFrom=this.posTo=this.query=null;this.overlay=null}function getSearchState(cm){return cm.state.search||(cm.state.search=new SearchState)}function queryCaseInsensitive(query){return typeof query=="string"&&query==query.toLowerCase()}function getSearchCursor(cm,query,pos){return cm.getSearchCursor(query,pos,queryCaseInsensitive(query))}function dialog(cm,text,shortText,deflt,f){if(cm.openDialog)cm.openDialog(text,f,{value:deflt});else f(prompt(shortText,deflt))}function confirmDialog(cm,text,shortText,fs){if(cm.openConfirm)cm.openConfirm(text,fs);else if(confirm(shortText))fs[0]()}function parseQuery(query){var isRE=query.match(/^\/(.*)\/([a-z]*)$/);return isRE?new RegExp(isRE[1],isRE[2].indexOf("i")==-1?"":"i"):query}var queryDialog='Search: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>';function doSearch(cm,rev){var state=getSearchState(cm);if(state.query)return findNext(cm,rev);dialog(cm,queryDialog,"Search for:",cm.getSelection(),function(query){cm.operation(function(){if(!query||state.query)return;state.query=parseQuery(query);cm.removeOverlay(state.overlay,queryCaseInsensitive(state.query));state.overlay=searchOverlay(state.query);cm.addOverlay(state.overlay);state.posFrom=state.posTo=cm.getCursor();findNext(cm,rev)})})}function findNext(cm,rev){cm.operation(function(){var state=getSearchState(cm);var cursor=getSearchCursor(cm,state.query,rev?state.posFrom:state.posTo);if(!cursor.find(rev)){cursor=getSearchCursor(cm,state.query,rev?CodeMirror.Pos(cm.lastLine()):CodeMirror.Pos(cm.firstLine(),0));if(!cursor.find(rev))return}cm.setSelection(cursor.from(),cursor.to());cm.scrollIntoView({from:cursor.from(),to:cursor.to()});state.posFrom=cursor.from();state.posTo=cursor.to()})}function clearSearch(cm){cm.operation(function(){var state=getSearchState(cm);if(!state.query)return;state.query=null;cm.removeOverlay(state.overlay)})}var replaceQueryDialog='Replace: <input type="text" style="width: 10em"/> <span style="color: #888">(Use /re/ syntax for regexp search)</span>';var replacementQueryDialog='With: <input type="text" style="width: 10em"/>';var doReplaceConfirm="Replace? <button>Yes</button> <button>No</button> <button>Stop</button>";function replace(cm,all){dialog(cm,replaceQueryDialog,"Replace:",cm.getSelection(),function(query){if(!query)return;query=parseQuery(query);dialog(cm,replacementQueryDialog,"Replace with:","",function(text){if(all){cm.operation(function(){for(var cursor=getSearchCursor(cm,query);cursor.findNext();){if(typeof query!="string"){var match=cm.getRange(cursor.from(),cursor.to()).match(query);cursor.replace(text.replace(/\$(\d)/,function(_,i){return match[i]}))}else cursor.replace(text)}})}else{clearSearch(cm);var cursor=getSearchCursor(cm,query,cm.getCursor());var advance=function(){var start=cursor.from(),match;if(!(match=cursor.findNext())){cursor=getSearchCursor(cm,query);if(!(match=cursor.findNext())||start&&cursor.from().line==start.line&&cursor.from().ch==start.ch)return}cm.setSelection(cursor.from(),cursor.to());cm.scrollIntoView({from:cursor.from(),to:cursor.to()});confirmDialog(cm,doReplaceConfirm,"Replace?",[function(){doReplace(match)},advance])};var doReplace=function(match){cursor.replace(typeof query=="string"?text:text.replace(/\$(\d)/,function(_,i){return match[i]}));advance()};advance()}})})}CodeMirror.commands.find=function(cm){clearSearch(cm);doSearch(cm)};CodeMirror.commands.findNext=doSearch;CodeMirror.commands.findPrev=function(cm){doSearch(cm,true)};CodeMirror.commands.clearSearch=clearSearch;CodeMirror.commands.replace=replace;CodeMirror.commands.replaceAll=function(cm){replace(cm,true)}})();CodeMirror.defineMode("xml",function(config,parserConfig){var indentUnit=config.indentUnit;var multilineTagIndentFactor=parserConfig.multilineTagIndentFactor||1;var multilineTagIndentPastTag=parserConfig.multilineTagIndentPastTag||true;var Kludges=parserConfig.htmlMode?{autoSelfClosers:{area:true,base:true,br:true,col:true,command:true,embed:true,frame:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true},implicitlyClosed:{dd:true,li:true,optgroup:true,option:true,p:true,rp:true,rt:true,tbody:true,td:true,tfoot:true,th:true,tr:true},contextGrabbers:{dd:{dd:true,dt:true},dt:{dd:true,dt:true},li:{li:true},option:{option:true,optgroup:true},optgroup:{optgroup:true},p:{address:true,article:true,aside:true,blockquote:true,dir:true,div:true,dl:true,fieldset:true,footer:true,form:true,h1:true,h2:true,h3:true,h4:true,h5:true,h6:true,header:true,hgroup:true,hr:true,menu:true,nav:true,ol:true,p:true,pre:true,section:true,table:true,ul:true},rp:{rp:true,rt:true},rt:{rp:true,rt:true},tbody:{tbody:true,tfoot:true},td:{td:true,th:true},tfoot:{tbody:true},th:{td:true,th:true},thead:{tbody:true,tfoot:true},tr:{tr:true}},doNotIndent:{pre:true},allowUnquoted:true,allowMissing:true}:{autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:false,allowMissing:false};var alignCDATA=parserConfig.alignCDATA;var tagName,type,setStyle;function inText(stream,state){function chain(parser){state.tokenize=parser;return parser(stream,state)}var ch=stream.next();if(ch=="<"){if(stream.eat("!")){if(stream.eat("[")){if(stream.match("CDATA["))return chain(inBlock("atom","]]>"));else return null}else if(stream.match("--")){return chain(inBlock("comment","-->"))}else if(stream.match("DOCTYPE",true,true)){stream.eatWhile(/[\w\._\-]/);return chain(doctype(1))}else{return null}}else if(stream.eat("?")){stream.eatWhile(/[\w\._\-]/);state.tokenize=inBlock("meta","?>");return"meta"}else{var isClose=stream.eat("/");tagName="";var c;while(c=stream.eat(/[^\s\u00a0=<>\"\'\/?]/))tagName+=c;if(!tagName)return"tag error";type=isClose?"closeTag":"openTag";state.tokenize=inTag;return"tag"}}else if(ch=="&"){var ok;if(stream.eat("#")){if(stream.eat("x")){ok=stream.eatWhile(/[a-fA-F\d]/)&&stream.eat(";")}else{ok=stream.eatWhile(/[\d]/)&&stream.eat(";")}}else{ok=stream.eatWhile(/[\w\.\-:]/)&&stream.eat(";")}return ok?"atom":"error"}else{stream.eatWhile(/[^&<]/);return null}}function inTag(stream,state){var ch=stream.next();if(ch==">"||ch=="/"&&stream.eat(">")){state.tokenize=inText;type=ch==">"?"endTag":"selfcloseTag";return"tag"}else if(ch=="="){type="equals";return null}else if(ch=="<"){state.tokenize=inText;state.state=baseState;state.tagName=state.tagStart=null;var next=state.tokenize(stream,state);return next?next+" error":"error"}else if(/[\'\"]/.test(ch)){state.tokenize=inAttribute(ch);state.stringStartCol=stream.column();return state.tokenize(stream,state)}else{stream.eatWhile(/[^\s\u00a0=<>\"\']/);return"word"}}function inAttribute(quote){var closure=function(stream,state){while(!stream.eol()){if(stream.next()==quote){state.tokenize=inTag;break}}return"string"};closure.isInAttribute=true;return closure}function inBlock(style,terminator){return function(stream,state){while(!stream.eol()){if(stream.match(terminator)){state.tokenize=inText;break}stream.next()}return style}}function doctype(depth){return function(stream,state){var ch;while((ch=stream.next())!=null){if(ch=="<"){state.tokenize=doctype(depth+1);return state.tokenize(stream,state)}else if(ch==">"){if(depth==1){state.tokenize=inText;break}else{state.tokenize=doctype(depth-1);return state.tokenize(stream,state)}}}return"meta"}}function Context(state,tagName,startOfLine){this.prev=state.context;this.tagName=tagName;this.indent=state.indented;this.startOfLine=startOfLine;if(Kludges.doNotIndent.hasOwnProperty(tagName)||state.context&&state.context.noIndent)this.noIndent=true}function popContext(state){if(state.context)state.context=state.context.prev}function maybePopContext(state,nextTagName){var parentTagName;while(true){if(!state.context){return}parentTagName=state.context.tagName.toLowerCase();if(!Kludges.contextGrabbers.hasOwnProperty(parentTagName)||!Kludges.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)){return}popContext(state)}}function baseState(type,stream,state){if(type=="openTag"){state.tagName=tagName;state.tagStart=stream.column();return attrState}else if(type=="closeTag"){var err=false;if(state.context){if(state.context.tagName!=tagName){if(Kludges.implicitlyClosed.hasOwnProperty(state.context.tagName.toLowerCase()))popContext(state);err=!state.context||state.context.tagName!=tagName}}else{err=true}if(err)setStyle="error";return err?closeStateErr:closeState}else{return baseState}}function closeState(type,_stream,state){if(type!="endTag"){setStyle="error";return closeState}popContext(state);return baseState}function closeStateErr(type,stream,state){setStyle="error";return closeState(type,stream,state)}function attrState(type,_stream,state){if(type=="word"){setStyle="attribute";return attrEqState}else if(type=="endTag"||type=="selfcloseTag"){var tagName=state.tagName,tagStart=state.tagStart;state.tagName=state.tagStart=null;if(type=="selfcloseTag"||Kludges.autoSelfClosers.hasOwnProperty(tagName.toLowerCase())){maybePopContext(state,tagName.toLowerCase())}else{maybePopContext(state,tagName.toLowerCase());state.context=new Context(state,tagName,tagStart==state.indented)}return baseState}setStyle="error";return attrState}function attrEqState(type,stream,state){if(type=="equals")return attrValueState;if(!Kludges.allowMissing)setStyle="error";return attrState(type,stream,state)}function attrValueState(type,stream,state){if(type=="string")return attrContinuedState;if(type=="word"&&Kludges.allowUnquoted){setStyle="string";return attrState}setStyle="error";return attrState(type,stream,state)}function attrContinuedState(type,stream,state){if(type=="string")return attrContinuedState;return attrState(type,stream,state)}return{startState:function(){return{tokenize:inText,state:baseState,indented:0,tagName:null,tagStart:null,context:null}},token:function(stream,state){if(!state.tagName&&stream.sol())state.indented=stream.indentation();if(stream.eatSpace())return null;tagName=type=null;var style=state.tokenize(stream,state);if((style||type)&&style!="comment"){setStyle=null;state.state=state.state(type||style,stream,state);if(setStyle)style=setStyle=="error"?style+" error":setStyle}return style},indent:function(state,textAfter,fullLine){var context=state.context;if(state.tokenize.isInAttribute){return state.stringStartCol+1}if(context&&context.noIndent)return CodeMirror.Pass;if(state.tokenize!=inTag&&state.tokenize!=inText)return fullLine?fullLine.match(/^(\s*)/)[0].length:0;if(state.tagName){if(multilineTagIndentPastTag)return state.tagStart+state.tagName.length+2;else return state.tagStart+indentUnit*multilineTagIndentFactor}if(alignCDATA&&/<!\[CDATA\[/.test(textAfter))return 0;if(context&&/^<\//.test(textAfter))context=context.prev;while(context&&!context.startOfLine)context=context.prev;if(context)return context.indent+indentUnit;else return 0},electricChars:"/",blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:parserConfig.htmlMode?"html":"xml",helperType:parserConfig.htmlMode?"html":"xml"}});CodeMirror.defineMIME("text/xml","xml");CodeMirror.defineMIME("application/xml","xml");if(!CodeMirror.mimeModes.hasOwnProperty("text/html"))CodeMirror.defineMIME("text/html",{name:"xml",htmlMode:true});CodeMirror.defineMode("yaml",function(){var cons=["true","false","on","off","yes","no"];var keywordRegex=new RegExp("\\b(("+cons.join(")|(")+"))$","i");return{token:function(stream,state){var ch=stream.peek();var esc=state.escaped;state.escaped=false;if(ch=="#"&&(stream.pos==0||/\s/.test(stream.string.charAt(stream.pos-1)))){stream.skipToEnd();return"comment"}if(state.literal&&stream.indentation()>state.keyCol){stream.skipToEnd();return"string"}else if(state.literal){state.literal=false}if(stream.sol()){state.keyCol=0;state.pair=false;state.pairStart=false;if(stream.match(/---/)){return"def"}if(stream.match(/\.\.\./)){return"def"}if(stream.match(/\s*-\s+/)){return"meta"}}if(stream.match(/^(\{|\}|\[|\])/)){if(ch=="{")state.inlinePairs++;else if(ch=="}")state.inlinePairs--;else if(ch=="[")state.inlineList++;else state.inlineList--;return"meta"}if(state.inlineList>0&&!esc&&ch==","){stream.next();return"meta"}if(state.inlinePairs>0&&!esc&&ch==","){state.keyCol=0;state.pair=false;state.pairStart=false;stream.next();return"meta"}if(state.pairStart){if(stream.match(/^\s*(\||\>)\s*/)){state.literal=true;return"meta"}if(stream.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)){return"variable-2"}if(state.inlinePairs==0&&stream.match(/^\s*-?[0-9\.\,]+\s?$/)){return"number"}if(state.inlinePairs>0&&stream.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)){return"number"}if(stream.match(keywordRegex)){return"keyword"}}if(!state.pair&&stream.match(/^\s*\S+(?=\s*:($|\s))/i)){state.pair=true;state.keyCol=stream.indentation();return"atom"}if(state.pair&&stream.match(/^:\s*/)){state.pairStart=true;return"meta"}state.pairStart=false;state.escaped=ch=="\\";stream.next();return null},startState:function(){return{pair:false,pairStart:false,keyCol:0,inlinePairs:0,inlineList:0,literal:false,escaped:false}}}});CodeMirror.defineMIME("text/x-yaml","yaml");(function(){function dialogDiv(cm,template,bottom){var wrap=cm.getWrapperElement();var dialog;dialog=wrap.appendChild(document.createElement("div"));if(bottom){dialog.className="CodeMirror-dialog CodeMirror-dialog-bottom"}else{dialog.className="CodeMirror-dialog CodeMirror-dialog-top"}if(typeof template=="string"){dialog.innerHTML=template}else{dialog.appendChild(template)}return dialog}function closeNotification(cm,newVal){if(cm.state.currentNotificationClose)cm.state.currentNotificationClose();cm.state.currentNotificationClose=newVal}CodeMirror.defineExtension("openDialog",function(template,callback,options){closeNotification(this,null);var dialog=dialogDiv(this,template,options&&options.bottom);var closed=false,me=this;function close(){if(closed)return;closed=true;dialog.parentNode.removeChild(dialog)}var inp=dialog.getElementsByTagName("input")[0],button;if(inp){if(options&&options.value)inp.value=options.value;CodeMirror.on(inp,"keydown",function(e){if(options&&options.onKeyDown&&options.onKeyDown(e,inp.value,close)){return}if(e.keyCode==13||e.keyCode==27){CodeMirror.e_stop(e);close();me.focus();if(e.keyCode==13)callback(inp.value)}});if(options&&options.onKeyUp){CodeMirror.on(inp,"keyup",function(e){options.onKeyUp(e,inp.value,close)})}if(options&&options.value)inp.value=options.value;inp.focus();CodeMirror.on(inp,"blur",close)}else if(button=dialog.getElementsByTagName("button")[0]){CodeMirror.on(button,"click",function(){close();me.focus()});button.focus();CodeMirror.on(button,"blur",close)}return close});CodeMirror.defineExtension("openConfirm",function(template,callbacks,options){closeNotification(this,null);var dialog=dialogDiv(this,template,options&&options.bottom);var buttons=dialog.getElementsByTagName("button");var closed=false,me=this,blurring=1;function close(){if(closed)return;closed=true;dialog.parentNode.removeChild(dialog);me.focus()}buttons[0].focus();for(var i=0;i<buttons.length;++i){var b=buttons[i];(function(callback){CodeMirror.on(b,"click",function(e){CodeMirror.e_preventDefault(e);close();if(callback)callback(me)})})(callbacks[i]);CodeMirror.on(b,"blur",function(){--blurring;setTimeout(function(){if(blurring<=0)close()},200)});CodeMirror.on(b,"focus",function(){++blurring})}});CodeMirror.defineExtension("openNotification",function(template,options){closeNotification(this,close);var dialog=dialogDiv(this,template,options&&options.bottom);var duration=options&&(options.duration===undefined?5e3:options.duration);var closed=false,doneTimer;function close(){if(closed)return;closed=true;clearTimeout(doneTimer);dialog.parentNode.removeChild(dialog)}CodeMirror.on(dialog,"click",function(e){CodeMirror.e_preventDefault(e);close()});if(duration)doneTimer=setTimeout(close,options.duration)})})();

define("codemirror", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.CodeMirror;
    };
}(this)));

define('js/models/uploads',['backbone', 'underscore', 'gettext'], function(Backbone, _, gettext) {
    var FileUpload = Backbone.Model.extend({
        defaults: {
            title: '',
            message: '',
            selectedFile: null,
            uploading: false,
            uploadedBytes: 0,
            totalBytes: 0,
            finished: false,
            mimeTypes: [],
            fileFormats: []
        },
        validate: function(attrs, options) {
            if (attrs.selectedFile && !this.checkTypeValidity(attrs.selectedFile)) {
                return {
                    message: _.template(gettext('Only <%- fileTypes %> files can be uploaded. Please select a file ending in <%- (fileExtensions) %> to upload.'))(  // eslint-disable-line max-len
                    this.formatValidTypes()
                ),
                    attributes: {selectedFile: true}
                };
            }
        },
    // Return a list of this uploader's valid file types
        fileTypes: function() {
            var mimeTypes = _.map(
                this.attributes.mimeTypes,
                function(type) {
                    return type.split('/')[1].toUpperCase();
                }
            ),
                fileFormats = _.map(
                this.attributes.fileFormats,
                function(type) {
                    return type.toUpperCase();
                }
            );

            return mimeTypes.concat(fileFormats);
        },
        checkTypeValidity: function(file) {
            var attrs = this.attributes,
                getRegExp = function(formats) {
                // Creates regular expression like: /(?:.+)\.(jpg|png|gif)$/i
                    return RegExp(('(?:.+)\\.(' + formats.join('|') + ')$'), 'i');
                };

            return (attrs.mimeTypes.length === 0 && attrs.fileFormats.length === 0) ||
                _.contains(attrs.mimeTypes, file.type) ||
                getRegExp(attrs.fileFormats).test(file.name);
        },
    // Return strings for the valid file types and extensions this
    // uploader accepts, formatted as natural language
        formatValidTypes: function() {
            var attrs = this.attributes;

            if (attrs.mimeTypes.concat(attrs.fileFormats).length === 1) {
                return {
                    fileTypes: this.fileTypes()[0],
                    fileExtensions: '.' + this.fileTypes()[0].toLowerCase()
                };
            }
            var or = gettext('or');
            var formatTypes = function(types) {
                return _.template('<%- initial %> <%- or %> <%- last %>')({
                    initial: _.initial(types).join(', '),
                    or: or,
                    last: _.last(types)
                });
            };
            return {
                fileTypes: formatTypes(this.fileTypes()),
                fileExtensions: formatTypes(
                _.map(this.fileTypes(),
                      function(type) {
                          return '.' + type.toLowerCase();
                      })
            )
            };
        }
    });

    return FileUpload;
}); // end define()
;
/**
 * This is a base modal implementation that provides common utilities.
 *
 * A modal implementation should override the following methods:
 *
 *   getTitle():
 *     returns the title for the modal.
 *   getContentHtml():
 *     returns the HTML content to be shown inside the modal.
 *
 * A modal implementation should also provide the following options:
 *
 *   modalName: A string identifying the modal.
 *   modalType: A string identifying the type of the modal.
 *   modalSize: A string, either 'sm', 'med', or 'lg' indicating the
 *     size of the modal.
 *   viewSpecificClasses: A string of CSS classes to be attached to
 *     the modal window.
 *   addPrimaryActionButton: A boolean indicating whether to include a primary action
 *     button on the modal.
 *   primaryActionButtonType: A string to be used as type for primary action button.
 *   primaryActionButtonTitle: A string to be used as title for primary action button.
 *   showEditorModeButtons: Whether to show editor mode button in the modal header.
 */
define('js/views/modals/base_modal',['jquery', 'underscore', 'gettext', 'js/views/baseview'],
    function($, _, gettext, BaseView) {
        var BaseModal = BaseView.extend({
            events: {
                'click .action-cancel': 'cancel'
            },

            options: _.extend({}, BaseView.prototype.options, {
                type: 'prompt',
                closeIcon: false,
                icon: false,
                modalName: 'basic',
                modalType: 'generic',
                modalSize: 'lg',
                title: '',
                modalWindowClass: '.modal-window',
                // A list of class names, separated by space.
                viewSpecificClasses: '',
                addPrimaryActionButton: false,
                primaryActionButtonType: 'save',
                primaryActionButtonTitle: gettext('Save'),
                showEditorModeButtons: true
            }),

            initialize: function() {
                var parent = this.options.parent,
                    parentElement = this.options.parentElement;
                this.modalTemplate = this.loadTemplate('basic-modal');
                this.buttonTemplate = this.loadTemplate('modal-button');
                if (parent) {
                    parentElement = parent.$el;
                } else if (!parentElement) {
                    parentElement = this.$el.closest(this.options.modalWindowClass);
                    if (parentElement.length === 0) {
                        parentElement = $('body');
                    }
                }
                this.parentElement = parentElement;
            },

            render: function() {
                // xss-lint: disable=javascript-jquery-html
                this.$el.html(this.modalTemplate({
                    name: this.options.modalName,
                    type: this.options.modalType,
                    size: this.options.modalSize,
                    title: this.getTitle(),
                    modalSRTitle: this.options.modalSRTitle,
                    showEditorModeButtons: this.options.showEditorModeButtons,
                    viewSpecificClasses: this.options.viewSpecificClasses
                }));
                this.addActionButtons();
                this.renderContents();
                this.parentElement.append(this.$el);
            },

            getTitle: function() {
                return this.options.title;
            },

            renderContents: function() {
                var contentHtml = this.getContentHtml();
                // xss-lint: disable=javascript-jquery-html
                this.$('.modal-content').html(contentHtml);
            },

            /**
             * Returns the content to be shown in the modal.
             */
            getContentHtml: function() {
                return '';
            },

            show: function(focusModal) {
                var focusModalWindow = focusModal === undefined;
                this.render();
                this.resize();
                $(window).resize(_.bind(this.resize, this));

                // child may want to have its own focus management
                if (focusModalWindow) {
                    // after showing and resizing, send focus
                    this.$el.find(this.options.modalWindowClass).focus();
                }
            },

            hide: function() {
                // Completely remove the modal from the DOM
                this.undelegateEvents();
                this.$el.html('');
            },

            cancel: function(event) {
                if (event) {
                    event.preventDefault();
                    event.stopPropagation(); // Make sure parent modals don't see the click
                }
                this.hide();
            },

            /**
             * Adds the action buttons to the modal.
             */
            addActionButtons: function() {
                if (this.options.addPrimaryActionButton) {
                    this.addActionButton(
                        this.options.primaryActionButtonType,
                        this.options.primaryActionButtonTitle,
                        true
                    );
                }
                this.addActionButton('cancel', gettext('Cancel'));
            },

            /**
             * Adds a new action button to the modal.
             * @param type The type of the action.
             * @param name The action's name.
             * @param isPrimary True if this button is the primary one.
             */
            addActionButton: function(type, name, isPrimary) {
                var html = this.buttonTemplate({
                    type: type,
                    name: name,
                    isPrimary: isPrimary
                });
                // xss-lint: disable=javascript-jquery-append
                this.getActionBar().find('ul').append(html);
            },

            /**
             * Returns the action bar that contains the modal's action buttons.
             */
            getActionBar: function() {
                return this.$(this.options.modalWindowClass + ' > div > .modal-actions');
            },

            /**
             * Returns the action button of the specified type.
             */
            getActionButton: function(type) {
                return this.getActionBar().find('.action-' + type);
            },

            enableActionButton: function(type) {
                this.getActionBar().find('.action-' + type).prop('disabled', false).removeClass('is-disabled');
            },

            disableActionButton: function(type) {
                this.getActionBar().find('.action-' + type).prop('disabled', true).addClass('is-disabled');
            },

            resize: function() {
                var top, left, modalWindow, modalWidth, modalHeight,
                    availableWidth, availableHeight, maxWidth, maxHeight;

                modalWindow = this.$el.find(this.options.modalWindowClass);
                availableWidth = $(window).width();
                availableHeight = $(window).height();
                maxWidth = availableWidth * 0.98;
                maxHeight = availableHeight * 0.98;
                modalWidth = Math.min(modalWindow.outerWidth(), maxWidth);
                modalHeight = Math.min(modalWindow.outerHeight(), maxHeight);

                left = (availableWidth - modalWidth) / 2;
                top = (availableHeight - modalHeight) / 2;

                modalWindow.css({
                    top: top + $(window).scrollTop(),
                    left: left + $(window).scrollLeft()
                });
            }
        });

        return BaseModal;
    });

/*!
 * jQuery Form Plugin
 * version: 3.18 (28-SEP-2012)
 * @requires jQuery v1.5 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
/*global ActiveXObject alert */
;(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });
    
    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });
    
    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }
    
    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }

    method = this.attr('method');
    action = this.attr('action');
    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || 'GET',
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }
    
    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }    
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context 
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    // are there files to upload?
    var fileInputs = $('input:file:enabled[value]', this); // [value] (issue #113)
    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++)
        elements[k] = null;

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData).split('&');
        var len = serialized.length;
        var result = {};
        var i, part;
        for (i=0; i < len; i++) {
            part = serialized[i].split('=');
            result[decodeURIComponent(part[0])] = decodeURIComponent(part[1]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (var p in serializedData)
                if (serializedData.hasOwnProperty(p))
                    formdata.append(p, serializedData[p]);
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });
        
        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = jQuery.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.onprogress = function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    };
                }
                return xhr;
            };
        }

        s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                o.data = formdata;
                if(beforeSend)
                    beforeSend.call(this, xhr, o);
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var useProp = !!$.fn.prop;
        var deferred = $.Deferred();

        if ($(':input[name=submit],:input[id=submit]', form).length) {
            // if there is an input with a name or id of 'submit' then we won't be
            // able to invoke the submit fn on the form (at least not x-browser)
            alert('Error: Form elements must not have name or id of "submit".');
            deferred.reject();
            return deferred;
        }
        
        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( useProp )
                    el.prop('disabled', false);
                else
                    el.removeAttr('disabled');
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr('name');
            if (!n)
                 $io.attr('name', id);
            else
                id = n;
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;
                // #214
                if (io.contentWindow.document.execCommand) {
                    try { // #214
                        io.contentWindow.document.execCommand('Stop');
                    } catch(ignore) {}
                }
                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error)
                    s.error.call(s.context, xhr, e, status);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, e]);
                if (s.complete)
                    s.complete.call(s.context, xhr, e);
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }
        
        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;

        function getDoc(frame) {
            var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
            return doc;
        }
        
        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr('target'), a = $form.attr('action');

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }
            
            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized')
                        setTimeout(checkState,50);
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle)
                        clearTimeout(timeoutHandle);
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').attr('value',s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').attr('value',s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                    if (io.attachEvent)
                        io.attachEvent('onload', cb);
                    else
                        io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);
                form.submit();
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            try {
                doc = getDoc(io);
            }
            catch(ex) {
                log('cannot access response document: ', ex);
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut)
                    return;
            }
            if (io.detachEvent)
                io.detachEvent('onload', cb);
            else    
                io.removeEventListener('load', cb, false);

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml)
                    s.dataType = 'xml';
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (e) {
                    status = 'parsererror';
                    xhr.error = errMsg = (e || status);
                }
            }
            catch (e) {
                log('error caught: ',e);
                status = 'error';
                xhr.error = errMsg = (e || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success)
                    s.success.call(s.context, data, 'success', xhr);
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g)
                    $.event.trigger("ajaxSuccess", [xhr, s]);
            }
            else if (status) {
                if (errMsg === undefined)
                    errMsg = xhr.statusText;
                if (s.error)
                    s.error.call(s.context, xhr, status, errMsg);
                deferred.reject(xhr, 'error', errMsg);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
            }

            if (g)
                $.event.trigger("ajaxComplete", [xhr, s]);

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete)
                s.complete.call(s.context, xhr, status);

            callbackProcessed = true;
            if (s.timeout)
                clearTimeout(timeoutHandle);

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget)
                    $io.remove();
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error)
                    $.error('parsererror');
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);
    
    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers    
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(this).ajaxSubmit(options);
    }
}
    
function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is(":submit,input:image"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest(':submit');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) 
                elements.push(el);
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file' && !el.disabled) {
            if (elements) 
                elements.push(el);
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) 
                elements.push(el);
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array)
            $.merge(val, v);
        else
            val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) )
                this.value = '';
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) 
        return;
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

})(jQuery);

define("jquery.form", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.jQuery.fn.ajaxForm;
    };
}(this)));

define('js/views/uploads',['jquery', 'underscore', 'gettext', 'js/views/modals/base_modal', 'edx-ui-toolkit/js/utils/html-utils',
    'jquery.form'],
    function($, _, gettext, BaseModal, HtmlUtils) {
        'use strict';
        var UploadDialog = BaseModal.extend({
            events: _.extend({}, BaseModal.prototype.events, {
                'change input[type=file]': 'selectFile',
                'click .action-upload': 'upload'
            }),

            options: $.extend({}, BaseModal.prototype.options, {
                modalName: 'assetupload',
                modalSize: 'med',
                successMessageTimeout: 2000, // 2 seconds
                viewSpecificClasses: 'confirm'
            }),

            initialize: function(options) {
                BaseModal.prototype.initialize.call(this);
                this.template = this.loadTemplate('upload-dialog');
                this.listenTo(this.model, 'change', this.renderContents);
                this.options.title = this.model.get('title');
                // `uploadData` can contain extra data that
                // can be POSTed along with the file.
                this.uploadData = _.extend({}, options.uploadData);
            },

            addActionButtons: function() {
                this.addActionButton('upload', gettext('Upload'), true);
                BaseModal.prototype.addActionButtons.call(this);
            },

            renderContents: function() {
                var isValid = this.model.isValid(),
                    selectedFile = this.model.get('selectedFile'),
                    oldInput = this.$('input[type=file]');
                BaseModal.prototype.renderContents.call(this);
                // Ideally, we'd like to tell the browser to pre-populate the
                // <input type="file"> with the selectedFile if we have one -- but
                // browser security prohibits that. So instead, we'll swap out the
                // new input (that has no file selected) with the old input (that
                // already has the selectedFile selected). However, we only want to do
                // this if the selected file is valid: if it isn't, we want to render
                // a blank input to prompt the user to upload a different (valid) file.
                if (selectedFile && isValid) {
                    $(oldInput).removeClass('error');
                    this.$('input[type=file]').replaceWith(HtmlUtils.HTML(oldInput).toString());
                    this.$('.action-upload').removeClass('disabled');
                } else {
                    this.$('.action-upload').addClass('disabled');
                }
                return this;
            },

            getContentHtml: function() {
                return this.template({
                    url: this.options.url || CMS.URL.UPLOAD_ASSET,
                    message: this.model.get('message'),
                    selectedFile: this.model.get('selectedFile'),
                    uploading: this.model.get('uploading'),
                    uploadedBytes: this.model.get('uploadedBytes'),
                    totalBytes: this.model.get('totalBytes'),
                    finished: this.model.get('finished'),
                    error: this.model.validationError
                });
            },

            selectFile: function(e) {
                var selectedFile = e.target.files[0] || null;
                this.model.set({
                    selectedFile: selectedFile
                });
                // This change event triggering necessary for FireFox, because the browser don't
                // consider change of File object (file input field) as a change in model.
                if (selectedFile && $.isEmptyObject(this.model.changed)) {
                    this.model.trigger('change');
                }
            },

            upload: function(e) {
                var uploadAjaxData = _.extend({}, this.uploadData);
                // don't show the generic error notification; we're in a modal,
                // and we're better off modifying it instead.
                uploadAjaxData.notifyOnError = false;

                if (e && e.preventDefault) { e.preventDefault(); }
                this.model.set('uploading', true);
                this.$('form').ajaxSubmit({
                    success: _.bind(this.success, this),
                    error: _.bind(this.error, this),
                    uploadProgress: _.bind(this.progress, this),
                    data: uploadAjaxData
                });
            },

            progress: function(event, position, total) {
                this.model.set({
                    uploadedBytes: position,
                    totalBytes: total
                });
            },

            success: function(response, statusText, xhr, form) {
                this.model.set({
                    uploading: false,
                    finished: true
                });
                if (this.options.onSuccess) {
                    this.options.onSuccess(response, statusText, xhr, form);
                }
                var that = this;
                this.removalTimeout = setTimeout(function() {
                    that.hide();
                }, this.options.successMessageTimeout);
            },

            error: function() {
                this.model.set({
                    uploading: false,
                    uploadedBytes: 0,
                    title: gettext("We're sorry, there was an error")
                });
            }
        });
        return UploadDialog;
    }); // end define()
;

define('text!templates/license-selector.underscore',[],function () { return '<div class="wrapper-license">\n    <h3 class="label setting-label">\n        <%- gettext("License Type") %>\n    </h3>\n    <ul class="license-types">\n        <% var link_start_tpl = \'<a href="{url}" rel="noopener" target="_blank">\'; %>\n        <% _.each(licenseInfo, function(license, licenseType) { %>\n            <li class="license-type" data-license="<%- licenseType %>">\n                <button name="license-<%- licenseType %>"\n                        class="action license-button <% if(model.type === licenseType) { print("is-selected"); } %>"\n                        aria-pressed="<%- (model.type === licenseType).toString() %>"\n                        <% if (license.tooltip) { %>data-tooltip="<%- license.tooltip %>"<% } %>>\n                    <%- license.name %>\n                </button>\n                <p class="tip">\n                    <% if(license.url) { %>\n                        <a href="<%- license.url %>" rel="noopener" target="_blank">\n                            <%- gettext("Learn more about {license_name}")\n                                        .replace("{license_name}", license.name)\n                            %>\n                        </a>\n                    <% } else { %>\n                        &nbsp;\n                    <% } %>\n                </p>\n            </li>\n        <% }) %>\n    </ul>\n\n<% var license = licenseInfo[model.type]; %>\n<% if(license && !_.isEmpty(license.options)) { %>\n    <div class="wrapper-license-options">\n        <h4 class="label setting-label">\n            <%- gettext("Options for {license_name}").replace("{license_name}", license.name) %>\n        </h4>\n        <p class=\'tip tip-inline\'>\n            <%- gettext("The following options are available for the {license_name} license.")\n                        .replace("{license_name}", license.name) %>\n        </p>\n        <ul class="license-options">\n            <% _.each(license.option_order, function(optionKey) { %>\n                <% var optionInfo = license.options[optionKey]; %>\n                <% if (optionInfo.type == "boolean") { %>\n                    <% var optionSelected = model.options[optionKey]; %>\n                    <% var optionDisabled = optionInfo.disabled %>\n                    <li data-option="<%- optionKey %>"\n                        class="action-item license-option\n                               <% if (optionSelected) { print("is-selected"); } %>\n                               <% if (optionDisabled) { print("is-disabled"); } else { print("is-clickable"); } %>"\n                    >\n                        <input type="checkbox"\n                               id="<%- model.type %>-<%- optionKey %>"\n                               name="<%- model.type %>-<%- optionKey %>"\n                               aria-describedby="<%- optionKey %>-explanation"\n                               <% if(optionSelected) { print(\'checked="checked"\'); } %>\n                               <% if(optionDisabled) { print(\'disabled="disabled"\'); } %>\n                        />\n                        <label for="<%- model.type %>-<%- optionKey %>" class="option-name">\n                            <%- optionInfo.name %>\n                        </label>\n                        <div id="<%- optionKey %>-explanation" class="explanation">\n                            <%- optionInfo.help %>\n                        </div>\n                    </li>\n                <% } // could implement other types here %>\n            <% }) %>\n        </ul>\n    </div>\n<% } %>\n\n<% if (showPreview) { %>\n    <div class="wrapper-license-preview">\n        <h4 class="label setting-label">\n            <%- gettext("License Display") %>\n        </h4>\n        <p class="tip">\n            <%- gettext("The following message will be displayed at the bottom of the courseware pages within your course:") %>\n        </p>\n        <div class="license-preview">\n        <% // keep this synchronized with the contents of common/templates/license.html %>\n        <% if (model.type === "all-rights-reserved") { %>\n            © <span class="license-text"><%- gettext("All Rights Reserved") %></span>\n        <% } else if (model.type === "creative-commons") {\n             var possible = ["by", "nc", "nd", "sa"];\n             var enabled = _.filter(possible, function(option) {\n                 return model.options[option] === true || model.options[option.toUpperCase()] === true;\n             });\n             var version = model.options.ver || "4.0";\n             if (_.isEmpty(enabled)) {\n                    enabled = ["zero"];\n                    version = model.options.ver || "1.0";\n             }\n        %>\n            <a rel="license" href="https://creativecommons.org/licenses/<%- enabled.join("-") %>/<%- version %>/">\n            <% if (previewButton) { %>\n                <img src="https://licensebuttons.net/l/<%- enabled.join("-") %>/<%- version %>/<%- typeof buttonSize == "string" ? buttonSize : "88x31" %>.png"\n                    alt="<%- typeof licenseString == "string" ? licenseString : "" %>"\n                    />\n            <% } else { %>\n\t        <% //<span> must come before <i> icon or else spacing gets messed up %>\n                <span class="sr"><%- gettext("Creative Commons licensed content, with terms as follow:") %>&nbsp;</span><span aria-hidden="true" class="icon-cc"></span>\n                <% _.each(enabled, function(option) { %>\n                        <span class="sr"><%- license.options[option.toUpperCase()].name %>&nbsp;</span><span aria-hidden="true" class="icon-cc-<%- option %>"></span>\n                <% }); %>\n                <span class="license-text"><%- gettext("Some Rights Reserved") %></span>\n            <% } %>\n        <% } else { %>\n            <%- typeof licenseString == "string" ? licenseString : "" %>\n            <% // Default to ARR license %>\n            © <span class="license-text"><%- gettext("All Rights Reserved") %></span>\n        <% } %>\n        </a>\n    </div>\n<% } %>\n</div>\n';});

define('js/views/license',[
    'js/views/baseview',
    'underscore',
    'text!templates/license-selector.underscore'
], function(BaseView, _, licenseSelectorTemplate) {
    var defaultLicenseInfo = {
        'all-rights-reserved': {
            name: gettext('All Rights Reserved'),
            tooltip: gettext('You reserve all rights for your work')
        },
        'creative-commons': {
            name: gettext('Creative Commons'),
            tooltip: gettext('You waive some rights for your work, such that others can use it too'),
            url: 'https://creativecommons.org/about',
            options: {
                ver: {
                    name: gettext('Version'),
                    type: 'string',
                    default: '4.0'
                },
                BY: {
                    name: gettext('Attribution'),
                    type: 'boolean',
                    default: true,
                    help: gettext('Allow others to copy, distribute, display and perform your copyrighted work but only if they give credit the way you request. Currently, this option is required.'),
                    disabled: true
                },
                NC: {
                    name: gettext('Noncommercial'),
                    type: 'boolean',
                    default: true,
                    help: gettext('Allow others to copy, distribute, display and perform your work - and derivative works based upon it - but for noncommercial purposes only.')
                },
                ND: {
                    name: gettext('No Derivatives'),
                    type: 'boolean',
                    default: true,
                    help: gettext('Allow others to copy, distribute, display and perform only verbatim copies of your work, not derivative works based upon it. This option is incompatible with "Share Alike".'),
                    conflictsWith: ['SA']
                },
                SA: {
                    name: gettext('Share Alike'),
                    type: 'boolean',
                    default: false,
                    help: gettext('Allow others to distribute derivative works only under a license identical to the license that governs your work. This option is incompatible with "No Derivatives".'),
                    conflictsWith: ['ND']
                }
            },
            option_order: ['BY', 'NC', 'ND', 'SA']
        }
    };

    var LicenseView = BaseView.extend({
        events: {
            'click ul.license-types li button': 'onLicenseClick',
            'click ul.license-options li': 'onOptionClick'
        },

        initialize: function(options) {
            this.licenseInfo = options.licenseInfo || defaultLicenseInfo;
            this.showPreview = !!options.showPreview; // coerce to boolean

            // Rerender when the model changes
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        getDefaultOptionsForLicenseType: function(licenseType) {
            if (!this.licenseInfo[licenseType]) {
                // custom license type, no options
                return {};
            }
            if (!this.licenseInfo[licenseType].options) {
                // defined license type without options
                return {};
            }
            var defaults = {};
            _.each(this.licenseInfo[licenseType].options, function(value, key) {
                defaults[key] = value.default;
            });
            return defaults;
        },

        render: function() {
            edx.HtmlUtils.setHtml(this.$el, edx.HtmlUtils.template(licenseSelectorTemplate)({
                model: this.model.attributes,
                licenseString: this.model.toString() || '',
                licenseInfo: this.licenseInfo,
                showPreview: this.showPreview,
                previewButton: false
            }));
            return this;
        },

        onLicenseClick: function(e) {
            var $li = $(e.srcElement || e.target).closest('li');
            var licenseType = $li.data('license');

            // Check that we've selected a different license type than what's currently selected
            if (licenseType != this.model.attributes.type) {
                this.model.set({
                    type: licenseType,
                    options: this.getDefaultOptionsForLicenseType(licenseType)
                });
                // Fire the change event manually
                this.model.trigger('change change:type');
            }
            e.preventDefault();
        },

        onOptionClick: function(e) {
            var licenseType = this.model.get('type'),
                licenseOptions = $.extend({}, this.model.get('options')),
                $li = $(e.srcElement || e.target).closest('li');

            var optionKey = $li.data('option');
            var licenseInfo = this.licenseInfo[licenseType];
            var optionInfo = licenseInfo.options[optionKey];
            if (optionInfo.disabled) {
                // we're done here
                return;
            }
            var currentOptionValue = licenseOptions[optionKey];
            if (optionInfo.type === 'boolean') {
                // toggle current value
                currentOptionValue = !currentOptionValue;
                licenseOptions[optionKey] = currentOptionValue;
            }
            // check for conflicts
            if (currentOptionValue && optionInfo.conflictsWith) {
                var conflicts = optionInfo.conflictsWith;
                for (var i = 0; i < conflicts.length; i++) {
                    // Uncheck all conflicts
                    licenseOptions[conflicts[i]] = false;
                    console.log(licenseOptions);
                }
            }

            this.model.set({options: licenseOptions});
            // Backbone has trouble identifying when objects change, so we'll
            // fire the change event manually.
            this.model.trigger('change change:options');
            e.preventDefault();
        }

    });
    return LicenseView;
});

define('js/models/license',['backbone', 'underscore'], function(Backbone, _) {
    var LicenseModel = Backbone.Model.extend({
        defaults: {
            type: null,
            options: {},
            custom: false // either `false`, or a string
        },

        initialize: function(attributes) {
            if (attributes && attributes.asString) {
                this.setFromString(attributes.asString);
                this.unset('asString');
            }
        },

        toString: function() {
            var custom = this.get('custom');
            if (custom) {
                return custom;
            }

            var type = this.get('type'),
                options = this.get('options');

            if (_.isEmpty(options)) {
                return type || '';
            }

            // options are where it gets tricky
            var optionStrings = _.map(options, function(value, key) {
                if (_.isBoolean(value)) {
                    return value ? key : null;
                } else {
                    return key + '=' + value;
                }
            });
            // filter out nulls
            optionStrings = _.filter(optionStrings, _.identity);
            // build license string and return
            return type + ': ' + optionStrings.join(' ');
        },

        setFromString: function(string, options) {
            if (!string) {
                // reset to defaults
                return this.set(this.defaults, options);
            }

            var colonIndex = string.indexOf(':'),
                spaceIndex = string.indexOf(' ');

            // a string without a colon could be a custom license, or a license
            // type without options
            if (colonIndex == -1) {
                if (spaceIndex == -1) {
                    // if there's no space, it's a license type without options
                    return this.set({
                        type: string,
                        options: {},
                        custom: false
                    }, options);
                } else {
                // if there is a space, it's a custom license
                    return this.set({
                        type: null,
                        options: {},
                        custom: string
                    }, options);
                }
            }

            // there is a colon, which indicates a license type with options.
            var type = string.substring(0, colonIndex),
                optionsObj = {},
                optionsString = string.substring(colonIndex + 1);

            _.each(optionsString.split(' '), function(optionString) {
                if (_.isEmpty(optionString)) {
                    return;
                }
                var eqIndex = optionString.indexOf('=');
                if (eqIndex == -1) {
                        // this is a boolean flag
                    optionsObj[optionString] = true;
                } else {
                        // this is a key-value pair
                    var optionKey = optionString.substring(0, eqIndex);
                    var optionVal = optionString.substring(eqIndex + 1);
                    optionsObj[optionKey] = optionVal;
                }
            });

            return this.set({
                type: type, options: optionsObj, custom: false
            }, options);
        }
    });

    return LicenseModel;
});

// Backbone Application View: Course Learning Information

define('js/views/learning_info',[
    'jquery',
    'underscore',
    'backbone',
    'gettext',
    'js/utils/templates',
    'edx-ui-toolkit/js/utils/html-utils'
],
function($, _, Backbone, gettext, TemplateUtils, HtmlUtils) {
    'use strict';
    var LearningInfoView = Backbone.View.extend({

        events: {
            'click .delete-course-learning-info': 'removeLearningInfo'
        },

        initialize: function() {
            // Set up the initial state of the attributes set for this model instance
            _.bindAll(this, 'render');
            this.template = this.loadTemplate('course-settings-learning-fields');
            this.listenTo(this.model, 'change:learning_info', this.render);
        },

        loadTemplate: function(name) {
            // Retrieve the corresponding template for this model
            return TemplateUtils.loadTemplate(name);
        },

        render: function() {
             // rendering for this model
            $('li.course-settings-learning-fields').empty();
            var self = this;
            var learning_information = this.model.get('learning_info');
            $.each(learning_information, function(index, info) {
                var attributes = {
                    index: index,
                    info: info,
                    info_count: learning_information.length
                };
                $(self.el).append(HtmlUtils.HTML(self.template(attributes)).toString());
            });
        },

        removeLearningInfo: function(event) {
            /*
            * Remove course learning fields.
            * */
            event.preventDefault();
            var index = event.currentTarget.getAttribute('data-index'),
                existing_info = _.clone(this.model.get('learning_info'));
            existing_info.splice(index, 1);
            this.model.set('learning_info', existing_info);
        }

    });
    return LearningInfoView;
});

// Backbone Application View: Instructor Information

define('js/views/instructor_info',[
    'jquery',
    'underscore',
    'backbone',
    'gettext',
    'js/utils/templates',
    'js/models/uploads',
    'js/views/uploads',
    'edx-ui-toolkit/js/utils/html-utils'
],
    function($, _, Backbone, gettext, TemplateUtils, FileUploadModel, FileUploadDialog, HtmlUtils) {
        'use strict';
        var InstructorInfoView = Backbone.View.extend({

            events: {
                'click .remove-instructor-data': 'removeInstructor',
                'click .action-upload-instructor-image': 'uploadInstructorImage'
            },

            initialize: function() {
                // Set up the initial state of the attributes set for this model instance
                _.bindAll(this, 'render');
                this.template = this.loadTemplate('course-instructor-details');
                this.listenTo(this.model, 'change:instructor_info', this.render);
            },

            loadTemplate: function(name) {
                // Retrieve the corresponding template for this model
                return TemplateUtils.loadTemplate(name);
            },

            render: function() {
                var attributes;
                // Assemble the render view for this model.
                $('.course-instructor-details-fields').empty();
                var self = this;
                $.each(this.model.get('instructor_info').instructors, function(index, data) {
                    attributes = {
                        data: data,
                        index: index
                    };
                    $(self.el).append(HtmlUtils.HTML(self.template(attributes)).toString());
                });

                // Avoid showing broken image on mistyped/nonexistent image
                this.$el.find('img').error(function() {
                    $(this).hide();
                });
                this.$el.find('img').load(function() {
                    $(this).show();
                });
            },

            removeInstructor: function(event) {
                /*
                 * Remove course Instructor fields.
                 * */
                event.preventDefault();
                var index = event.currentTarget.getAttribute('data-index'),
                    instructors = this.model.get('instructor_info').instructors.slice(0);
                instructors.splice(index, 1);
                this.model.set('instructor_info', {instructors: instructors});
            },

            uploadInstructorImage: function(event) {
                /*
                * Upload instructor image.
                * */
                event.preventDefault();
                var index = event.currentTarget.getAttribute('data-index'),
                    instructors = this.model.get('instructor_info').instructors.slice(0),
                    instructor = instructors[index];

                var upload = new FileUploadModel({
                    title: gettext('Upload instructor image.'),
                    message: gettext('Files must be in JPEG or PNG format.'),
                    mimeTypes: ['image/jpeg', 'image/png']
                });
                var self = this;
                var modal = new FileUploadDialog({
                    model: upload,
                    onSuccess: function(response) {
                        instructor.image = response.asset.url;
                        self.model.set('instructor_info', {instructors: instructors});
                        self.model.trigger('change', self.model);
                        self.model.trigger('change:instructor_info', self.model);
                    }
                });
                modal.show();
            }
        });
        return InstructorInfoView;
    });

define('js/views/settings/main',['js/views/validation', 'codemirror', 'underscore', 'jquery', 'jquery.ui', 'js/utils/date_utils',
    'js/models/uploads', 'js/views/uploads', 'js/views/license', 'js/models/license',
    'common/js/components/views/feedback_notification', 'jquery.timepicker', 'date', 'gettext',
    'js/views/learning_info', 'js/views/instructor_info', 'edx-ui-toolkit/js/utils/string-utils'],
       function(ValidatingView, CodeMirror, _, $, ui, DateUtils, FileUploadModel,
                FileUploadDialog, LicenseView, LicenseModel, NotificationView,
                timepicker, date, gettext, LearningInfoView, InstructorInfoView, StringUtils) {
           var DetailsView = ValidatingView.extend({
    // Model class is CMS.Models.Settings.CourseDetails
               events: {
                   'input input': 'updateModel',
                   'input textarea': 'updateModel',
        // Leaving change in as fallback for older browsers
                   'change input': 'updateModel',
                   'change textarea': 'updateModel',
                   'change select': 'updateModel',
                   'click .remove-course-introduction-video': 'removeVideo',
                   'focus #course-overview': 'codeMirrorize',
                   'focus #course-about-sidebar-html': 'codeMirrorize',
                   'mouseover .timezone': 'updateTime',
        // would love to move to a general superclass, but event hashes don't inherit in backbone :-(
                   'focus :input': 'inputFocus',
                   'blur :input': 'inputUnfocus',
                   'click .action-upload-image': 'uploadImage',
                   'click .add-course-learning-info': 'addLearningFields',
                   'click .add-course-instructor-info': 'addInstructorFields'
               },

               initialize: function(options) {
                   options = options || {};
        // fill in fields
                   this.$el.find('#course-language').val(this.model.get('language'));
                   this.$el.find('#course-organization').val(this.model.get('org'));
                   this.$el.find('#course-number').val(this.model.get('course_id'));
                   this.$el.find('#course-name').val(this.model.get('run'));
                   this.$el.find('.set-date').datepicker({ dateFormat: 'm/d/yy' });
                   this.$el.find("#certificates-display-behavior").val(this.model.get("certificates_display_behavior"));
                   this.updateCertificatesDisplayBehavior();

        // Avoid showing broken image on mistyped/nonexistent image
                   this.$el.find('img').error(function() {
                       $(this).hide();
                   });
                   this.$el.find('img').load(function() {
                       $(this).show();
                   });

                   this.listenTo(this.model, 'invalid', this.handleValidationError);
                   this.listenTo(this.model, 'change', this.showNotificationBar);
                   this.selectorToField = _.invert(this.fieldToSelectorMap);
        // handle license separately, to avoid reimplementing view logic
                   this.licenseModel = new LicenseModel({asString: this.model.get('license')});
                   this.licenseView = new LicenseView({
                       model: this.licenseModel,
                       el: this.$('#course-license-selector').get(),
                       showPreview: true
                   });
                   this.listenTo(this.licenseModel, 'change', this.handleLicenseChange);

                   if (options.showMinGradeWarning || false) {
                       new NotificationView.Warning({
                           title: gettext('Course Credit Requirements'),
                           message: gettext('The minimum grade for course credit is not set.'),
                           closeIcon: true
                       }).show();
                   }

                   this.learning_info_view = new LearningInfoView({
                       el: $('.course-settings-learning-fields'),
                       model: this.model
                   });

                   this.instructor_info_view = new InstructorInfoView({
                       el: $('.course-instructor-details-fields'),
                       model: this.model
                   });
               },

               render: function() {
        // Clear any image preview timeouts set in this.updateImagePreview
                   clearTimeout(this.imageTimer);

                   DateUtils.setupDatePicker('start_date', this);
                   DateUtils.setupDatePicker('end_date', this);
                   DateUtils.setupDatePicker('certificate_available_date', this);
                   DateUtils.setupDatePicker('enrollment_start', this);
                   DateUtils.setupDatePicker('enrollment_end', this);
                   DateUtils.setupDatePicker('upgrade_deadline', this);

                   this.$el.find('#' + this.fieldToSelectorMap.overview).val(this.model.get('overview'));
                   this.codeMirrorize(null, $('#course-overview')[0]);

                   if (this.model.get('title') !== '') {
                       this.$el.find('#' + this.fieldToSelectorMap.title).val(this.model.get('title'));
                   } else {
                       var displayName = this.$el.find('#' + this.fieldToSelectorMap.title).attr('data-display-name');
                       this.$el.find('#' + this.fieldToSelectorMap.title).val(displayName);
                   }
                   this.$el.find('#' + this.fieldToSelectorMap.subtitle).val(this.model.get('subtitle'));
                   this.$el.find('#' + this.fieldToSelectorMap.duration).val(this.model.get('duration'));
                   this.$el.find('#' + this.fieldToSelectorMap.description).val(this.model.get('description'));

                   this.$el.find('#' + this.fieldToSelectorMap.short_description).val(this.model.get('short_description'));
                   this.$el.find('#' + this.fieldToSelectorMap.about_sidebar_html).val(
                       this.model.get('about_sidebar_html')
                   );
                   this.codeMirrorize(null, $('#course-about-sidebar-html')[0]);

                   this.$el.find('.current-course-introduction-video iframe').attr('src', this.model.videosourceSample());
                   this.$el.find('#' + this.fieldToSelectorMap.intro_video).val(this.model.get('intro_video') || '');
                   if (this.model.has('intro_video')) {
                       this.$el.find('.remove-course-introduction-video').show();
                   } else this.$el.find('.remove-course-introduction-video').hide();

                   this.$el.find('#' + this.fieldToSelectorMap.effort).val(this.model.get('effort'));
                   this.$el.find("#" + this.fieldToSelectorMap.certificates_display_behavior).val(this.model.get('certificates_display_behavior'));
                   this.updateCertificatesDisplayBehavior();

                   var courseImageURL = this.model.get('course_image_asset_path');
                   this.$el.find('#course-image-url').val(courseImageURL);
                   this.$el.find('#course-image').attr('src', courseImageURL);

                   var bannerImageURL = this.model.get('banner_image_asset_path');
                   this.$el.find('#banner-image-url').val(bannerImageURL);
                   this.$el.find('#banner-image').attr('src', bannerImageURL);

                   var videoThumbnailImageURL = this.model.get('video_thumbnail_image_asset_path');
                   this.$el.find('#video-thumbnail-image-url').val(videoThumbnailImageURL);
                   this.$el.find('#video-thumbnail-image').attr('src', videoThumbnailImageURL);

                   var pre_requisite_courses = this.model.get('pre_requisite_courses');
                   pre_requisite_courses = pre_requisite_courses.length > 0 ? pre_requisite_courses : '';
                   this.$el.find('#' + this.fieldToSelectorMap.pre_requisite_courses).val(pre_requisite_courses);

                   if (this.model.get('entrance_exam_enabled') == 'true') {
                       this.$('#' + this.fieldToSelectorMap.entrance_exam_enabled).attr('checked', this.model.get('entrance_exam_enabled'));
                       this.$('.div-grade-requirements').show();
                   } else {
                       this.$('#' + this.fieldToSelectorMap.entrance_exam_enabled).removeAttr('checked');
                       this.$('.div-grade-requirements').hide();
                   }
                   this.$('#' + this.fieldToSelectorMap.entrance_exam_minimum_score_pct).val(this.model.get('entrance_exam_minimum_score_pct'));

                   var selfPacedButton = this.$('#course-pace-self-paced'),
                       instructorPacedButton = this.$('#course-pace-instructor-paced'),
                       paceToggleTip = this.$('#course-pace-toggle-tip');
                   (this.model.get('self_paced') ? selfPacedButton : instructorPacedButton).attr('checked', true);
                   if (this.model.canTogglePace()) {
                       selfPacedButton.removeAttr('disabled');
                       instructorPacedButton.removeAttr('disabled');
                       paceToggleTip.text('');
                   } else {
                       selfPacedButton.attr('disabled', true);
                       instructorPacedButton.attr('disabled', true);
                       paceToggleTip.text(gettext('Course pacing cannot be changed once a course has started.'));
                   }

                   this.licenseView.render();
                   this.learning_info_view.render();
                   this.instructor_info_view.render();

                   return this;
               },
               fieldToSelectorMap: {
                   language: 'course-language',
                   start_date: 'course-start',
                   end_date: 'course-end',
                   enrollment_start: 'enrollment-start',
                   enrollment_end: 'enrollment-end',
                   upgrade_deadline: 'upgrade-deadline',
                   certificate_available_date: 'certificate-available',
                   certificates_display_behavior: 'certificates-display-behavior',
                   overview: 'course-overview',
                   title: 'course-title',
                   subtitle: 'course-subtitle',
                   duration: 'course-duration',
                   description: 'course-description',
                   about_sidebar_html: 'course-about-sidebar-html',
                   short_description: 'course-short-description',
                   intro_video: 'course-introduction-video',
                   effort: 'course-effort',
                   course_image_asset_path: 'course-image-url',
                   banner_image_asset_path: 'banner-image-url',
                   video_thumbnail_image_asset_path: 'video-thumbnail-image-url',
                   pre_requisite_courses: 'pre-requisite-course',
                   entrance_exam_enabled: 'entrance-exam-enabled',
                   entrance_exam_minimum_score_pct: 'entrance-exam-minimum-score-pct',
                   course_settings_learning_fields: 'course-settings-learning-fields',
                   add_course_learning_info: 'add-course-learning-info',
                   add_course_instructor_info: 'add-course-instructor-info',
                   course_learning_info: 'course-learning-info'
               },

               addLearningFields: function() {
        /*
        * Add new course learning fields.
        * */
                   var existingInfo = _.clone(this.model.get('learning_info'));
                   existingInfo.push('');
                   this.model.set('learning_info', existingInfo);
               },

               addInstructorFields: function() {
        /*
        * Add new course instructor fields.
        * */
                   var instructors = this.model.get('instructor_info').instructors.slice(0);
                   instructors.push({
                       name: '',
                       title: '',
                       organization: '',
                       image: '',
                       bio: ''
                   });
                   this.model.set('instructor_info', {instructors: instructors});
               },

               updateTime: function(e) {
                   var now = new Date(),
                       hours = now.getUTCHours(),
                       minutes = now.getUTCMinutes(),
                       currentTimeText = StringUtils.interpolate(
                gettext('{hours}:{minutes} (current UTC time)'),
                           {
                               hours: hours,
                               minutes: minutes
                           }
            );

                   $(e.currentTarget).attr('title', currentTimeText);
               },
               updateModel: function(event) {
                   var value;
                   var index = event.currentTarget.getAttribute('data-index');
                   switch (event.currentTarget.id) {
                   case 'course-learning-info-' + index:
                       value = $(event.currentTarget).val();
                       var learningInfo = this.model.get('learning_info');
                       learningInfo[index] = value;
                       this.showNotificationBar();
                       break;
                   case 'course-instructor-name-' + index:
                   case 'course-instructor-title-' + index:
                   case 'course-instructor-organization-' + index:
                   case 'course-instructor-bio-' + index:
                       value = $(event.currentTarget).val();
                       var field = event.currentTarget.getAttribute('data-field'),
                           instructors = this.model.get('instructor_info').instructors.slice(0);
                       instructors[index][field] = value;
                       this.model.set('instructor_info', {instructors: instructors});
                       this.showNotificationBar();
                       break;
                   case 'course-instructor-image-' + index:
                       instructors = this.model.get('instructor_info').instructors.slice(0);
                       instructors[index].image = $(event.currentTarget).val();
                       this.model.set('instructor_info', {instructors: instructors});
                       this.showNotificationBar();
                       this.updateImagePreview(event.currentTarget, '#course-instructor-image-preview-' + index);
                       break;
                   case 'course-image-url':
                       this.updateImageField(event, 'course_image_name', '#course-image');
                       break;
                   case 'banner-image-url':
                       this.updateImageField(event, 'banner_image_name', '#banner-image');
                       break;
                   case 'video-thumbnail-image-url':
                       this.updateImageField(event, 'video_thumbnail_image_name', '#video-thumbnail-image');
                       break;
                   case 'entrance-exam-enabled':
                       if ($(event.currentTarget).is(':checked')) {
                           this.$('.div-grade-requirements').show();
                       } else {
                           this.$('.div-grade-requirements').hide();
                       }
                       this.setField(event);
                       break;
                   case 'entrance-exam-minimum-score-pct':
            // If the val is an empty string then update model with default value.
                       if ($(event.currentTarget).val() === '') {
                           this.model.set('entrance_exam_minimum_score_pct', this.model.defaults.entrance_exam_minimum_score_pct);
                       } else {
                           this.setField(event);
                       }
                       break;
                   case 'pre-requisite-course':
                       var value = $(event.currentTarget).val();
                       value = value == '' ? [] : [value];
                       this.model.set('pre_requisite_courses', value);
                       break;
        // Don't make the user reload the page to check the Youtube ID.
        // Wait for a second to load the video, avoiding egregious AJAX calls.
                   case 'course-introduction-video':
                       this.clearValidationErrors();
                       var previewsource = this.model.set_videosource($(event.currentTarget).val());
                       clearTimeout(this.videoTimer);
                       this.videoTimer = setTimeout(_.bind(function() {
                           this.$el.find('.current-course-introduction-video iframe').attr('src', previewsource);
                           if (this.model.has('intro_video')) {
                               this.$el.find('.remove-course-introduction-video').show();
                           } else {
                               this.$el.find('.remove-course-introduction-video').hide();
                           }
                       }, this), 1000);
                       break;
                   case 'course-pace-self-paced':
            // Fallthrough to handle both radio buttons
                   case 'course-pace-instructor-paced':
                       this.model.set('self_paced', JSON.parse(event.currentTarget.value));
                       break;
                   case 'certificates-display-behavior':
                       this.setField(event);
                       this.updateCertificatesDisplayBehavior();
                       break;
                   case 'course-language':
                   case 'course-effort':
                   case 'course-title':
                   case 'course-subtitle':
                   case 'course-duration':
                   case 'course-description':
                   case 'course-short-description':
                       this.setField(event);
                       break;
                   default: // Everything else is handled by datepickers and CodeMirror.
                       break;
                   }
               },
               updateImageField: function(event, image_field, selector) {
                   this.setField(event);
                   var url = $(event.currentTarget).val();
                   var image_name = _.last(url.split('/'));
        // If image path is entered directly, we need to strip the asset prefix
                   image_name = _.last(image_name.split('block@'));
                   this.model.set(image_field, image_name);
                   this.updateImagePreview(event.currentTarget, selector);
               },
               updateImagePreview: function(imagePathInputElement, previewSelector) {
        // Wait to set the image src until the user stops typing
                   clearTimeout(this.imageTimer);
                   this.imageTimer = setTimeout(function() {
                       $(previewSelector).attr('src', $(imagePathInputElement).val());
                   }, 1000);
               },
               removeVideo: function(event) {
                   event.preventDefault();
                   if (this.model.has('intro_video')) {
                       this.model.set_videosource(null);
                       this.$el.find('.current-course-introduction-video iframe').attr('src', '');
                       this.$el.find('#' + this.fieldToSelectorMap.intro_video).val('');
                       this.$el.find('.remove-course-introduction-video').hide();
                   }
               },
               codeMirrors: {},
               codeMirrorize: function(e, forcedTarget) {
                   var thisTarget, cachethis, field, cmTextArea;
                   if (forcedTarget) {
                       thisTarget = forcedTarget;
                       thisTarget.id = $(thisTarget).attr('id');
                   } else if (e !== null) {
                       thisTarget = e.currentTarget;
                   } else {
            // e and forcedTarget can be null so don't deference it
            // This is because in cases where we have a marketing site
            // we don't display the codeMirrors for editing the marketing
            // materials, except we do need to show the 'set course image'
            // workflow. So in this case e = forcedTarget = null.
                       return;
                   }

                   if (!this.codeMirrors[thisTarget.id]) {
                       cachethis = this;
                       field = this.selectorToField[thisTarget.id];
                       this.codeMirrors[thisTarget.id] = CodeMirror.fromTextArea(thisTarget, {
                           mode: 'text/html', lineNumbers: true, lineWrapping: true});
                       this.codeMirrors[thisTarget.id].on('change', function(mirror) {
                           mirror.save();
                           cachethis.clearValidationErrors();
                           var newVal = mirror.getValue();
                           if (cachethis.model.get(field) != newVal) {
                               cachethis.setAndValidate(field, newVal);
                           }
                       });
                       cmTextArea = this.codeMirrors[thisTarget.id].getInputField();
                       cmTextArea.setAttribute('id', thisTarget.id + '-cm-textarea');
                   }
               },

                updateCertificatesDisplayBehavior: function() {
                    /*
                    Hides and clears the certificate available date field if a display behavior that doesn't use it is
                    chosen. Because we are clearing it, toggling back to "end_with_date" will require re-entering the date
                    */
                    if (!this.useV2CertDisplaySettings){
                        return;
                    }
                    let showDatepicker = this.model.get("certificates_display_behavior") == "end_with_date";
                    let datepicker = this.$el.find('#certificate-available-date');
                    let certificateAvailableDateField = this.$el.find('#field-certificate-available-date');

                    if (showDatepicker) {
                        datepicker.prop('disabled', false);
                        certificateAvailableDateField.removeClass("hidden");
                    } else {
                        datepicker.prop('disabled', true);
                        datepicker.val(null);
                        this.clearValidationErrors();
                        this.setAndValidate("certificate_available_date", null)
                        certificateAvailableDateField.addClass("hidden");
                    }
                },
               revertView: function() {
        // Make sure that the CodeMirror instance has the correct
        // data from its corresponding textarea
                   var self = this;
                   this.model.fetch({
                       success: function() {
                           self.render();
                           _.each(self.codeMirrors, function(mirror) {
                               var ele = mirror.getTextArea();
                               var field = self.selectorToField[ele.id];
                               mirror.setValue(self.model.get(field));
                           });
                           self.licenseModel.setFromString(self.model.get('license'), {silent: true});
                           self.licenseView.render();
                       },
                       reset: true,
                       silent: true});
               },
               setAndValidate: function(attr, value) {
        // If we call model.set() with {validate: true}, model fields
        // will not be set if validation fails. This puts the UI and
        // the model in an inconsistent state, and causes us to not
        // see the right validation errors the next time validate() is
        // called on the model. So we set *without* validating, then
        // call validate ourselves.
                   this.model.set(attr, value);
                   this.model.isValid();
               },

               showNotificationBar: function() {
        // We always call showNotificationBar with the same args, just
        // delegate to superclass
                   ValidatingView.prototype.showNotificationBar.call(this,
                                                          this.save_message,
                                                          _.bind(this.saveView, this),
                                                          _.bind(this.revertView, this));
               },

               uploadImage: function(event) {
                   event.preventDefault();
                   var title = '',
                       selector = '',
                       image_key = '',
                       image_path_key = '';
                   switch (event.currentTarget.id) {
                   case 'upload-course-image':
                       title = gettext('Upload your course image.');
                       selector = '#course-image';
                       image_key = 'course_image_name';
                       image_path_key = 'course_image_asset_path';
                       break;
                   case 'upload-banner-image':
                       title = gettext('Upload your banner image.');
                       selector = '#banner-image';
                       image_key = 'banner_image_name';
                       image_path_key = 'banner_image_asset_path';
                       break;
                   case 'upload-video-thumbnail-image':
                       title = gettext('Upload your video thumbnail image.');
                       selector = '#video-thumbnail-image';
                       image_key = 'video_thumbnail_image_name';
                       image_path_key = 'video_thumbnail_image_asset_path';
                       break;
                   }

                   var upload = new FileUploadModel({
                       title: title,
                       message: gettext('Files must be in JPEG or PNG format.'),
                       mimeTypes: ['image/jpeg', 'image/png']
                   });
                   var self = this;
                   var modal = new FileUploadDialog({
                       model: upload,
                       onSuccess: function(response) {
                           var options = {};
                           options[image_key] = response.asset.display_name;
                           options[image_path_key] = response.asset.url;
                           self.model.set(options);
                           self.render();
                           $(selector).attr('src', self.model.get(image_path_key));
                       }
                   });
                   modal.show();
               },

               handleLicenseChange: function() {
                   this.showNotificationBar();
                   this.model.set('license', this.licenseModel.toString());
               }
           });

           return DetailsView;
       }); // end define()
;
define('js/factories/settings',[
    'jquery', 'js/models/settings/course_details', 'js/views/settings/main'
], function($, CourseDetailsModel, MainView) {
    'use strict';
    return function(detailsUrl, showMinGradeWarning, showCertificateAvailableDate, upgradeDeadline, useV2CertDisplaySettings) {
        var model;
        // highlighting labels when fields are focused in
        $('form :input')
            .focus(function() {
                $('label[for="' + this.id + '"]').addClass('is-focused');
            })
            .blur(function() {
                $('label').removeClass('is-focused');
            });

        // Toggle collapsibles when trigger is clicked
        $(".collapsible .collapsible-trigger").click(function() {
            const contentId = this.id.replace("-trigger", "-content")
            $(`#${contentId}`).toggleClass("collapsed")
        })

        model = new CourseDetailsModel();
        model.urlRoot = detailsUrl;
        model.showCertificateAvailableDate = showCertificateAvailableDate;
        model.useV2CertDisplaySettings = useV2CertDisplaySettings;
        model.set('upgrade_deadline', upgradeDeadline);
        model.fetch({
            success: function(model) {
                var editor = new MainView({
                    el: $('.settings-details'),
                    model: model,
                    showMinGradeWarning: showMinGradeWarning
                });
                editor.useV2CertDisplaySettings = useV2CertDisplaySettings;
                editor.render();
            },
            reset: true,
            cache: false
        });
    };
});

