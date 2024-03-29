const date =  new Date();

const humanRedableDateFormatterYearFirst = (date ,separator) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;//month - 0 based in javascript
    const year =  date.getFullYear();
    let hour =  date.getHours();
    let minute =  date.getMinutes();
    if (day < '10'){
        day = '0' + day;
    }
   
    if(month < '10'){
        month = '0' + month;
    }
    if(hour < '10'){
        hour = '0' + hour;
    }
    if(minute < '10'){
        minute = '0' + minute;
    }

    return (`${year}${separator}${month}${separator}${day} ${hour}:${minute}`);
}

const humanRedableDateFormatter = (date ,separator) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;//month - 0 based in javascript
    const year =  date.getFullYear();
    let hour =  date.getHours();
    let minute =  date.getMinutes();
    if (day < '10'){
        day = '0' + day;
    }
   
    if(month < '10'){
        month = '0' + month;
    }
    if(hour < '10'){
        hour = '0' + hour;
    }
    if(minute < '10'){
        minute = '0' + minute;
    }

    return (`${day}${separator}${month}${separator}${year} ${hour}:${minute}`);
}
console.log(humanRedableDateFormatterYearFirst(date,'-'));
console.log(humanRedableDateFormatter(date,'-'));
console.log(humanRedableDateFormatter(date,'/'));
