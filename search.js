window.onload = function init() {
    document.getElementById("search").addEventListener("click", on_click);
}

function on_click() {
    var entry = document.getElementById("entry").value;
    var searchResults = document.getElementById("searchResults");
    var br = document.createElement("br");
    while(searchResults.firstNode) {
        searchResults.removeChild(searchResults.lastChild);
    }
    var result = 1;
    
    //go through database and get number of search results. Implement after backend
    var placeholderLink = document.createElement("a");
    // placeholderLink.style.textDecoration = "none";
    // placeholderLink.style.color = "black";
    placeholderLink.setAttribute("href", "entry.html");
    var placeholder = document.createElement("p");
    var result_string = "Results found: " + result;
    result_string.fontcolor("gray");
    var resultnum = document.createTextNode(result_string);
    placeholder.appendChild(resultnum);
    var hr = document.createElement("hr");
    placeholder.appendChild(hr);
    if(result > 0) {
        var node = document.createTextNode("Title: Spongebob\n");
        placeholder.appendChild(node);
	placeholder.appendChild(br);
	var br = document.createElement("br");
        var date = document.createTextNode("First aired: May 1st, 1999");
        placeholder.appendChild(date);
	placeholder.appendChild(br);
        var sum = document.createTextNode("Short summary: A talking sea sponge fry cook embarks on miscellaneous adventures with his pals: a squirrel scientist, greedy crab boss, lazy sea star, and overly annoyed squid neighbor.");
        placeholder.appendChild(sum);
	var br = document.createElement("br");
	placeholder.appendChild(br);
	var br = document.createElement("br");
	placeholder.appendChild(br);
	var reviews = document.createTextNode("Top review: It's a gift from the gods!");
	placeholder.appendChild(reviews);
	
	var hr = document.createElement("hr");
	placeholder.appendChild(hr);

	// implement styling
	placeholder.style.padding = "2% 2%";
	placeholder.style.borderRadius = "4px";
	placeholder.style.boxShadow = "0 0 0 1px #a8adb4";
	placeholder.style.fontFamily = "'robotoregular', 'Sans Serif'";
    }

    placeholderLink.appendChild(placeholder);
    
    searchResults.appendChild(placeholderLink);
}
