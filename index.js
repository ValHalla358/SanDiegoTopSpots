$(function() {
    $.getJSON("topspots.json", function(result) {
        $(result).each(function(index, value) {
            var row = ``;
            var mapLink = `https://www.google.com/maps?q=`;
            mapLink += value.location[0] + ',' + value.location[1];
            row += `<tr><td>${value.name}</td><td>${value.description}</td><td class="btn btn-default"><a href= "${mapLink}" >Location</a></td></tr>`;
            $("tbody").append(row);
        });


    });

});
