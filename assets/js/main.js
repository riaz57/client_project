/*
* ----------------------------------------------------------------------------------------
    Jquery custom code file
* ----------------------------------------------------------------------------------------
*/
    /*-------- Bangla Date -------*/

    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const date = fullDate.getDate();

    const number =['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    const monthName = ['জানুয়ারি','ফেব্রুয়ারি ','মার্চ ','এপ্রিল ','মে','জুন','জুলাই ','আগস্ট ','সেপ্টেম্বর ','অক্টোবর','নভেম্বর ','ডিসেম্বর '];

    const convertNumber = (n)=>n.toString().split("").map(num=> number[num]).join('');
    const convertMonth = (n)=>n.toString().split("").map(num=> monthName[num]).join('');

    const datePlace = document.querySelector('span.date');
    datePlace.textContent = convertNumber(date) + ' ' + convertMonth(month) + ', ' + convertNumber(year);

$(function(){























});
