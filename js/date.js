
const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", {
    hour12: false
  });
  setTimeout(showTime, 1000);
}
showTime();
// Date
function updateDate() {
  let today = new Date();
  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();
    year2 = today.getFullYear();

  const months = [
    "1","2","3","4","5","6","7","8","9","10","11","12",
  ];
  const dayWeek = [
    "星期日","星期一","星期二","星期三","星期四","星期五","星期六",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}
updateDate();


function CalConv() {
  FIRSTYEAR = 1998;
  LASTYEAR = 2031;

  today = new Date();
  SolarYear = today.getFullYear();
  SolarMonth = today.getMonth() + 1;
  SolarDate = today.getDate();
  Weekday = today.getDay();

  LunarCal = [
    new tagLunarCal(27, 5, 3, 43, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1),
    new tagLunarCal(46, 0, 4, 48, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1), /* 1999 */
    new tagLunarCal(35, 0, 5, 53, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1), /* 2000 */
    new tagLunarCal(23, 4, 0, 59, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
    new tagLunarCal(42, 0, 1, 4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
    new tagLunarCal(31, 0, 2, 9, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0),
    new tagLunarCal(21, 2, 3, 14, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1), /* 2004 */
    new tagLunarCal(39, 0, 5, 20, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1),
    new tagLunarCal(28, 7, 6, 25, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1),
    new tagLunarCal(48, 0, 0, 30, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1),
    new tagLunarCal(37, 0, 1, 35, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1), /* 2008 */
    new tagLunarCal(25, 5, 3, 41, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
    new tagLunarCal(44, 0, 4, 46, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1),
    new tagLunarCal(33, 0, 5, 51, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1),
    new tagLunarCal(22, 4, 6, 56, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0), /* 2012 */
    new tagLunarCal(40, 0, 1, 2, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0),
    new tagLunarCal(30, 9, 2, 7, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1),
    new tagLunarCal(49, 0, 3, 12, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1),
    new tagLunarCal(38, 0, 4, 17, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0), /* 2016 */
    new tagLunarCal(27, 6, 6, 23, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1),
    new tagLunarCal(46, 0, 0, 28, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0),
    new tagLunarCal(35, 0, 1, 33, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0),
    new tagLunarCal(24, 4, 2, 38, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1), /* 2020 */
    new tagLunarCal(42, 0, 4, 44, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1),
    new tagLunarCal(31, 0, 5, 49, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0),
    new tagLunarCal(21, 2, 6, 54, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1),
    new tagLunarCal(40, 0, 0, 59, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1), /* 2024 */
    new tagLunarCal(28, 6, 2, 5, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0),
    new tagLunarCal(47, 0, 3, 10, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1),
    new tagLunarCal(36, 0, 4, 15, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1),
    new tagLunarCal(25, 5, 5, 20, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0), /* 2028 */
    new tagLunarCal(43, 0, 0, 26, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1),
    new tagLunarCal(32, 0, 1, 31, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0),
    new tagLunarCal(22, 3, 2, 36, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0)];


  /* 西曆年每月之日數 */
  SolarCal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  /* 西曆年每月之累積日數, 平年與閏年 */
  SolarDays = [
    0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365, 396,
    0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366, 397];

  AnimalIdx = ["马", "羊", "猴", "鸡", "狗", "猪", "鼠", "牛", "虎", "兔", "龙", "蛇" ];;
  LocationIdx = ["南", "东", "北", "西"];
  
  SixtyIdx = [ 
            "戊午","已未","庚申","辛酉","壬戌","癸亥","甲子","乙丑","丙寅","丁卯",
            "戊辰","已巳","庚午","辛未","壬申","癸酉","甲戌","乙亥","丙子","丁丑",
            "戊寅","已卯","庚辰","辛巳","壬午","癸未","甲申","乙酉","丙戌","丁亥",
            "戊子","己丑","庚寅","辛卯","壬辰","癸巳","甲午","乙未","丙申","丁酉",
            "戊戌","已亥","庚子","辛丑","壬寅","癸卯","甲辰","乙巳","丙午","丁未",
            "戊申","已酉","庚戌","辛亥","壬子","癸丑","甲寅","乙卯","丙辰","丁巳",
          ];

  AnimalDayIdx = [ "鼠日", "牛日", "虎日", "兔日", "龙日", "蛇日", "马日", "羊日", "猴日", "鸡日", "狗日", "猪日"];;

  ChineseMonth = [ "正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "腊月"];

  ChineseDay = [ "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", 
                "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "廿十",
                "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十",
              ];


  if (SolarYear <= FIRSTYEAR || SolarYear > LASTYEAR) return 1;

  sm = SolarMonth - 1;

  if (sm < 0 || sm > 11) return 2;

  leap = GetLeap(SolarYear);

  if (sm == 1)
    d = leap + 28;
  else
    d = SolarCal[sm];

  if (SolarDate < 1 || SolarDate > d) return 3;

  y = SolarYear - FIRSTYEAR;
  acc = SolarDays[leap * 14 + sm] + SolarDate;
  kc = acc + LunarCal[y].BaseKanChih;
  Kan = kc % 10;
  Chih = kc % 12;
  ele = kc % 60;

  Location = LocationIdx[kc % 4];
  Age = kc % 60;
  if (Age < 22)
    Age = 22 - Age;
  else
    Age = 82 - Age;

  Age = Age + 9;

  if (Age < 10)
    Age = Age;

  Animal = AnimalIdx[Chih];
  
  AnimalDay = AnimalDayIdx[Chih];

  Sixty = SixtyIdx[ele];

  if (acc <= LunarCal[y].BaseDays) {
    y--;
    LunarYear = SolarYear - 1;
    leap = GetLeap(LunarYear);
    sm += 12;
    acc = SolarDays[leap * 14 + sm] + SolarDate;
  }
  else
    LunarYear = SolarYear;

  l1 = LunarCal[y].BaseDays;
  for (i = 0; i < 13; i++) {
    l2 = l1 + LunarCal[y].MonthDays[i] + 29;
    if (acc <= l2) break;
    l1 = l2;
  }

  LunarMonth = i + 1;
  LunarDate = acc - l1;
  im = LunarCal[y].Intercalation;

  if (im != 0 && LunarMonth > im) {
    LunarMonth--;
    if (LunarMonth == im) LunarMonth = -im;
  }

  if (LunarMonth > 12) LunarMonth -= 12;

  let mm = ChineseMonth.at(LunarMonth-1);
  let dd = ChineseDay.at(LunarDate-1);

  // document.write( SolarYear + "年" + SolarMonth + "月" + SolarDate + "日");
  document.write("<div class='chineseDate'>");
  document.write( mm + dd);
  document.write("</div>");

  document.write("<div class='to_right'>");
  document.write("冲" + Animal + AnimalDay +"("+ Sixty +")"+ "煞" + Location);
  document.write("</div>");

  return 0;
}

/* 求此西曆年是否為閏年, 返回 0 為平年, 1 為閏年 */
function GetLeap(year) {
  if (year % 400 == 0)
    return 1;
  else if (year % 100 == 0)
    return 0;
  else if (year % 4 == 0)
    return 1;
  else
    return 0;
}
function tagLunarCal(d, i, w, k, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13) {
  this.BaseDays = d;         /* 到西曆 1 月 1 日到农历正月初一的累積日數 */
  this.Intercalation = i;    /* 閏月月份. 0==此年沒有閏月 */
  this.BaseWeekday = w;      /* 此年西曆 1 月 1 日為星期幾再減 1 */
  this.BaseKanChih = k;      /* 此年西曆 1 月 1 日之干支序號減 1 */
  this.MonthDays = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13]; /* 此农历年每月之大小, 0==小月(29日), 1==大月(30日) */
}
CalConv();