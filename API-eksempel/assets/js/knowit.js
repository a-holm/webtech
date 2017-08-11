//fylle html med ajax
var url = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100"
var mydata = $.getJSON(url, function(data){
	html = ""
    $.each(data.items, function (index, value) {
    	html += "<tr> \n <td>" + value.id + "</td> \n <td>" + value.name + "</td> \n <td><a href=" + value.html_url + ">Github</a> , <a href=" + value.homepage + ">Homepage</a></td><td>" + value.description + "</td></tr>"
    });
    $(html).appendTo("#tabellBody")
});

var n = 20; //antall rader per side
var tr = [] ;// array med hver rad
var table
var pageCount

// p er det valgte sidenummeret som blir generert når brukeren trykker på en knapp

mydata.done(function(response){
    // Når JSON er ferdig
    // hente antall rader
    table = document.getElementById('Tabell');
    var rowCount = table.rows.length-1;
    console.log(rowCount)
    
    // sjekke om første rad er en header
    var firstRow = table.rows[0].firstElementChild.tagName;
    var hasHead = (firstRow === "TH");
    //følgende variabel vil holde første rad hvis hasHead er sant, altså den vil holde header-raden
    theader = (hasHead ? table.rows[(0)].outerHTML:"");

    //kalkulere antall sider
    pageCount = Math.ceil(rowCount / n);

    var i;
    var ii;
    var j = (hasHead) ? 1:0;

    //Hvis vi kun har en side så har vi ingenting å gjøre. Bør ikke være nødvendig her, men det gjør koden mer generell.
    if (pageCount > 1) {
    	for (i = j, ii = 0; i < (rowCount); i++, ii++) {
    		//hvis første rad har th så vil første av følgende inneholde andre rad
    		//tr[0] = table.rows[1].outerHTML; ellers rows[0]
    		tr[ii] = table.rows[i].outerHTML;
    	}
    	//legge til HTML til knapper før tabellen.
    	table.insertAdjacentHTML("beforebegin", "<div id='buttons'></div>")
    	//sortere slik at man starter på første side
    	sortere(1);
    }
    });

function sortere (p) {
	//Lage variabelen "rows" som holder gruppen med rader som skal vises på siden.
	//variablen "sp" er startpunktet. Første raden i hver side.
	var rows = theader;
	var sp = ((n*p)-n);
	for (i = sp; i < (sp+n) && i < tr.length; i++) {
		rows += tr[i];
	}
	// Nå har man en gruppe rader med
	table.innerHTML = rows;
	// lage pagineringsknapper
	document.getElementById("buttons").innerHTML = pageButtons(pageCount, p);
	// CSS for aktiv pagineringsknapp
	document.getElementById("id"+p).setAttribute("class", "active");
}

// pCount: total antall sider, cur : nåværende side

function pageButtons (pCount, cur) {
	// skru av "Prev" knappen på første side og "Next" på siste sist
	var prevDis = (cur == 1) ? "disabled" : "";
	var nextDis = (cur == pCount) ? "disabled" : "";

	//variabelen "buttons" vil holde alle knappene man behøver som HTML
	var buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sortere(" + (cur-1) + ")' " + prevDis + ">";
	for (i=1; i<= pCount; i++) {
		buttons += "<input type='button' id='id"+i+"'value='"+i+"' onclick='sortere("+i+")'>";
	}
	buttons += "<input type='button' value='Next &gt;&gt;' onclick='sortere("+(cur + 1)+")' "+nextDis+">";
	return buttons;
};

