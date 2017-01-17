// $(document).ready(function() {
window.initMap = function() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 32.715736, lng: -117.161087 }
    });

    $.getJSON("topspots.json", function(result) {
        $(result).each(function(index, value) {
            var row = ``;
            var mapLink = `https://www.google.com/maps?q=`;
            mapLink += value.location[0] + ',' + value.location[1];
            row += `<tr><td>${value.name}</td><td>${value.description}</td><td class="btn btn-default"><a href= "${mapLink}" >Location</a></td></tr>`;
            $("tbody").append(row);


            var marker = new google.maps.Marker({
                position: { lat: value.location[0], lng: value.location[1] },
                map: map
            });

        });

    });
};
// });


