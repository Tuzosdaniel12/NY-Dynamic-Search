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
})

})
