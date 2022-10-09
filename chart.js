var incidents_distribution_map = "incidents_distribution_map.json";
var top_sharks_stacked = "top_sharks_stacked.json";
var victim_activity_bar = "victim_activity_bar.json";

// Chart 1
vegaEmbed("#incidents_distribution_map", incidents_distribution_map).then(function(result) {
}).catch(console.error);

// Chart 2
vegaEmbed("#top_sharks_stacked", top_sharks_stacked).then(function(result) {
}).catch(console.error);

// Chart 6
vegaEmbed("#victim_activity_bar", victim_activity_bar).then(function(result) {
}).catch(console.error);