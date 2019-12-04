mapboxgl.accessToken='pk.eyJ1IjoieHk2YXUiLCJhIjoiY2sxdXlwejk5MGZ5aTNncXV3MGx0Y3JmcCJ9.2LvX99rC6vL08hPV1pVhxg';
var map =new mapboxgl.Map({
container:'map',
style:'mapbox://styles/xy6au/ck2135n2m3tev1cmd1oq8zk2a'

});
// --------------------------------------------------------
// 3. Creating a legend
// See example tutorial at https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-2/#create-arrays-of-intervals-and-colors

    var layers = [ // an array of the possible values you want to show in your legend
        'air-4n4tfp', // Civic Spaces.png
        'Community Park', // Community Park.png
        'Neighborhood Park', // Neighborhood Park.png
        'Cemetery',
        'Urban Park',
        'Regional Park'
    ];

    var colors = [ // an array of the color values for each legend item
        '#800000',
        '#800030',
        '#800060',
        '#80006c',
        '#800090',
        '#80009c'
    ];

    // for loop to create individual legend items
    for (i=0; i<layers.length; i++) {
        var layer =layers[i]; // name of the current legend item, from the layers array
        var color =colors[i]; // color value of the current legend item, from the colors array 
        
        var itemHTML = "<div><span class='legend-key'></span><span>" + layer + "</span></div>"; // create the HTML for the legend element to be added

        var item = $(itemHTML).appendTo("#legend"); // add the legend item to the legend
        var legendKey = $(item).find(".legend-key"); // find the legend key (colored circle) for the current item
        legendKey.css("background", color); // change the background color of the legend key
    }
