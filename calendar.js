const monthNames=['',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function calendar(arr) {
    let year=arr[2];
    let month=arr[1];
    let day=arr[0];

    let daysOfAMonth=(new Date(year, month, 0)).getDate();
    let firstDay=(new Date(year + "-" + month + "-01")).getDay();
    if(firstDay==0) firstDay=7;
    console.log("days of he month: "+daysOfAMonth+"   first day: "+firstDay);

    $("#content").append(
        $("<table>")
            .append($("<caption>").text(monthNames[month]+" "+year.toString()))
            .append(
                $("<tbody>")
                    .append(
                        $("<tr>")
                            .append($("<th>").text("Mon"))
                            .append($("<th>").text("Tue"))
                            .append($("<th>").text("Wed"))
                            .append($("<th>").text("Thu"))
                            .append($("<th>").text("Fri"))
                            .append($("<th>").text("Sat"))
                            .append($("<th>").text("Sun"))
                    )
                    .append(function () {
                            let result="";
                            let weekCount=1;
                            for(let i=1;i<=daysOfAMonth;i++) {
                                if(weekCount==1)
                                    result=result.concat("<tr>"); // starts a new row
                                if( (i==1) && (firstDay!=1) ) {
                                    for(let j=1;j<firstDay;j++)
                                        result=result.concat("<td>&nbsp;</td>");
                                    weekCount=firstDay;
                                }
                                if(i!=day)
                                    result=result.concat("<td>");
                                else
                                    result=result.concat("<td class=\"today\">");
                                result=result.concat(i.toString()).concat("</td>");
                                if(weekCount==7) {
                                    result=result.concat("</tr>");
                                    weekCount=0;
                                }
                                weekCount++;
                            }
                            if(weekCount!=1) {
                                for(let i=weekCount;i<=7;i++)
                                    result=result.concat("<td>&nbsp;</td>");
                                result=result.concat("</tr>");
                            }
                            return result;
                        }
                    )
            )
    );

}

