

function makeStage(w, h) {
	var stage = d3.select(".container")
		.insert("center")
		.insert("svg")
		.attr("width",w)
		.attr("height",h);
	return stage;
}


function clearStimulus(stage) {
	stage.selectAll("circle").remove();
}

function drawStimulus(stage, cx, cy, radius, fillcolor) {
	console.log("I call my function");
	stage.insert("circle")
	.attr("cx", cx)
	.attr("cy", cy)
	.attr("r", radius)
	.attr("class","mycirclestim")
	.style("fill", fillcolor)
	.style("stroke","lightblue")
	.style("stroke-width","3px");
}

function clearButton (){
	d3.select(".container")
	.selectAll("button")
	.remove();
}

function makeButton(text, callback) {
	d3.select(".container")
		.insert("button")
		.attr("type","button")
		.attr("class","btn btn-primary btn-lg")
		.text(text)
		.on("click", function(d) { console.log("clicked"); callback(); } );
}

var trials = [  {"color":"lightblue", "radius": 20},
				{"color":"yellow", "radius": 20},
				{"color":"red", "radius": 50},
				{"color":"blue", "radius":20}
			];


var mystage = makeStage(500,300);

function doTrial(stage, stim_array) {
	if(stim_array.length > 0) {
		var stim = stim_array.shift();
		clearStimulus(stage);
		clearButton();
		drawStimulus(stage, 500/2., 400/2., stim["radius"], stim["color"]);
		makeButton("yo yo yo", function () { doTrial(stage, stim_array); });
	} else {
		alert("wooo!")
	}
}

doTrial(mystage, trials);

