$("#submit").on("click", function(event) {
    event.preventDefault();
    // Query API 
var searchEl = $("#search-term").val();
var recordEl = $("#records").val();
var startdateEl = $("#start-date").val();
var enddateEl = $("#end-date").val();
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchEl + 
"&begin_date=" + startdateEl +"0101" + "&end_date=" +enddateEl +  "1231"+ "&api-key=U4gbgr7Z89QycNFrxAiIQxBeYauW6L5K"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    for (i = 0; i < parseInt(recordEl);i++) {
    var articleDiv =   $("<div>")
    var articleHeading = $("<h1>")

    articleHeading.text(response.docs[i].headline.main)

    var articleDesc = $("<p>")
    var articleYear = $("<p>") 
    }

})

})
