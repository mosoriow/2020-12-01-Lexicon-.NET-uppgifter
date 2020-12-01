function domSearchOnLoad() {
    $("#content").addClass("items-control")
    
        .append($("<div>")
            .addClass("add-controls")

            .append($("<lable>")
                .text("Enter text: ")
                .append("<input id=\"addText\">")
                .append(
                    $("<a>")
                        .addClass("button")
                        .css({ "display": "inline-block" })
                        .text("Add")
                        .on("click", function () {
                                let addedLine=$("#addText")[0].value;
                                if(addedLine!='') {
                                    $("ul").append($("<li>")
                                        .addClass("list-item")

                                        .append($("<a>")
                                            .addClass("button")
                                            .text("X")
                                        )
                                        .append($("<strong>")
                                            .text(addedLine)
                                        )
                                    );
                                }
                            }
                        )
                )
            )
        )

        .append($("<div>")
            .addClass("search-controls")

            .append($("<lable>")
                    .text("Search")
                    .append($("<input>")
                        .attr('id','searchText')
                        .keyup(function () {
                                let searchText=$("#searchText")[0].value;
                                domSearch(searchText,false);
                            }
                        )
                    )
            )
        )

        .append($("<div>")
            .addClass("result-controls")
            .append($("<ul>")
                .addClass("list-item")
            )
        )
    ;
}


function domSearch(selector,isCaseSensitive) {
    $("li").each(
        function() {
            if(selector=="")
                $(this).css({"display": "block"});
            else {
                let regex;
                if(isCaseSensitive)
                    regex=RegExp(selector,"g");
                else
                    regex=RegExp(selector,"gi");
                if(regex.test($(this).text()))
                    $(this).css({"display": "block"});
                else
                    $(this).css({"display": "none"});
            }
        }
    );
}
