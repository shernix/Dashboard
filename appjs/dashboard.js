
this.USERID;
// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart2);

 google.charts.setOnLoadCallback(drawChart3);
 google.charts.setOnLoadCallback(drawChart4);
 google.charts.setOnLoadCallback(drawChart5);
 google.charts.setOnLoadCallback(drawChart6);
//google.charts.setOnLoadCallback(drawChart7);
 google.charts.setOnLoadCallback(drawChart8);
/// Number of messages per day
function reformatData(jsonData){
    var temp= jsonData.DailyPosts;
    //console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.day );
        dataElement.push(row.total);
        result.push(dataElement);
    }
    //console.log("Data: " + JSON.stringify(result));
    return result;
}
function updateUserId(id)
{
    console.log(id);
}
function drawChart() {
    var jsonData = $.ajax({
        url: "http://127.0.0.1:5000/kheApp/dashboard/NumberOfDailyPosts",
        dataType: "json",
        async: false
    }).responseText;

    ///console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Day');
    data.addColumn('number', 'Messages');
    data.addRows(reformatData(JSON.parse(jsonData)));

    var options = {
        title: 'Messages per day',
        chartArea: {width: '100%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('message'));

    chart.draw(data, options);

}

///chart for displaying trending hashtags
function reformatData2(jsonData){
    
    var temp= jsonData.TrendingTopics;
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i<temp.length; ++i)
    {
       
        row= temp[i]
      //  console.log(JSON.stringify(row));
        dataElement = [];
        dataElement.push(row.hashtag );
        dataElement.push(row.used );
        result.push(dataElement);
        
    }
    
    //console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChart2() {
    var jsonData = $.ajax({
        url: "http://127.0.0.1:5000/kheApp/dashboard/TrendingTopics",
        dataType: "json",
        async: false
    }).responseText;

   // console.log("jsonData: " + JSON.parse(JSON.stringify(jsonData)));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    
    data.addColumn('string', 'hashtag');
    data.addColumn('number', 'used');
    data.addRows(reformatData2(JSON.parse(jsonData)));

    var options = {
        title: 'Trending Hashtags',
        chartArea: {width: '60%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Times used'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('hashtag'));

    chart.draw(data, options);

}

///number of replies per day
function reformatData3(jsonData){
    var temp= jsonData.DailyReplies
   // console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.day );
        dataElement.push(row.total);
        result.push(dataElement);
    }
    //console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChart3() {
    var jsonData = $.ajax({
        url: "http://127.0.0.1:5000/kheApp/dashboard/NumberOfDailyReplies",
        dataType: "json",
        async: false
    }).responseText;

    ///console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Day');
    data.addColumn('number', 'Replies');
    data.addRows(reformatData3(JSON.parse(jsonData)));

    var options = {
        title: 'Replies per day',
        chartArea: {width: '100%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Day'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('reply'));

    chart.draw(data, options);

}

//Chart for Likes Per Date
function reformatData4(jsonData){
    var temp= jsonData.DailyLikes;
    //console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.day );
        dataElement.push(row.total);
        result.push(dataElement);
    }
   // console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChart4() {
    var jsonData = $.ajax({
        url: "http://127.0.0.1:5000/kheApp/dashboard/NumberOfDailyLikes",
        dataType: "json",
        async: false
    }).responseText;

   // console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'date');
    data.addColumn('number', 'likes');
    data.addRows(reformatData4(JSON.parse(jsonData)));

    var options = {
        title: 'Likes per day ',
        chartArea: {width: '100%'},
        hAxis: {
            title: 'Dates',
            minValue: 0
        },
        vAxis: {
            title: 'Likes per Day'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('like'));

    chart.draw(data, options);

}
// //Chart for Dislikes per date

function reformatData5(jsonData){
    var temp= jsonData.DailyDislikes;
    //console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.day );
        dataElement.push(row.total);
        result.push(dataElement);
    }
   // console.log("Data: " + JSON.stringify(result));
    return result;
}

function drawChart5() {
    var jsonData = $.ajax({
        url: "http://127.0.0.1:5000/kheApp/dashboard/NumberOfDailyDislikes",
        dataType: "json",
        async: false
    }).responseText;

   //console.log("jsonData: " +JSON.stringify( JSON.parse(jsonData)));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'date');
    data.addColumn('number', 'dislikes');
    data.addRows(reformatData5(JSON.parse(jsonData)));

    var options = {
        title: 'Dislikes per day ',
        chartArea: {width: '100%'},
        hAxis: {
            title: 'Dates',
            minValue: 0
        },
        vAxis: {
            title: 'Dislikes per Day'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('dislike'));

    chart.draw(data, options);

}
// Chart for Top Users per Day
function reformatData6(jsonData){
    var temp= jsonData.ActiveUsers;
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.day );
        dataElement.push(row.user);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    //console.log("Data: " + JSON.stringify(result));
    return result
}
///Top Active uses per day
function drawChart6() {
    var jsonData = $.ajax({
        url: "http://127.0.0.1:5000/kheApp/dashboard/MostActiveUsersPerDay",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn({ type: 'string', id: 'User', role: 'annotation' })
    data.addColumn('number', 'Posts');
    data.addRows(reformatData6(JSON.parse(jsonData)));

    var options = {
        title: 'Most active users by date',
        chartArea: {width: '100%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Times used'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('activeUser'));

    chart.draw(data, options);

}

// Chart for Top Users per Day
function reformatData7(jsonData){
    var temp= jsonData.TotalPostsPerDayByUser;
    console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
        dataElement.push(row.day );
        dataElement.push(row.user);
        dataElement.push(row.count);
        result.push(dataElement);
    }
    //console.log("Data: " + JSON.stringify(result));
    return result
}
///Top Active uses per day

document.getElementById("postsPerDayByUser").onclick = function() {

   var uid = document.getElementById("postsuid").value;
  console.log("new user fetch "+uid);


    var jsonData = $.ajax({
        url: "http://127.0.0.1:5000/kheApp/dashboard/PostsPerDayByUsers/"+uid,
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " +JSON.stringify( JSON.parse(jsonData)));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn({ type: 'string', id: 'User', role: 'annotation' })
    data.addColumn('number', 'Posts');
    data.addRows(reformatData7(JSON.parse(jsonData)));

    var options = {
        title: 'Post Per day by user ',
        chartArea: {width: '100%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: 'Times used'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('activeId'));

    chart.draw(data, options);

}

// Chart for Top Users per Day
function reformatData8(jsonData){
    var temp= jsonData.SpecialStats;
    //console.log("temp: " + JSON.stringify(temp));
    var result = [];
    var i;
    var row;
    for (i=0; i < temp.length; ++i){
        row= temp[i]
        dataElement = [];
       
        dataElement.push(row.media);
        dataElement.push(row.likes);
        dataElement.push(row.dislikes);
        dataElement.push(row.replies);

        result.push(dataElement);
    }
    //console.log("Data: " + JSON.stringify(result));
    return result
}
///Top Active uses per day
function drawChart8() {
    var jsonData = $.ajax({
        url: "http://127.0.0.1:5000/kheApp/dashboard/LDRToAPhoto",
        dataType: "json",
        async: false
    }).responseText;

    console.log("jsonData: " + JSON.parse(jsonData));

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Media');
    data.addColumn("number",'likess');
    data.addColumn("number",'dislikes');
    data.addColumn("number",'replies');
    
    data.addRows(reformatData8(JSON.parse(jsonData)));

    var options = {
        title: 'Photo Likes,Dislikes & Replies ',
        chartArea: {width: '100%'},
        hAxis: {
            title: 'Total Number',
            minValue: 0
        },
        vAxis: {
            title: ''
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('pictureInfo'));

    chart.draw(data, options);

}