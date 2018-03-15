          var start = new Date().getTime();

					function getRandomColor() {
					  var letters = '0123456789ABCDEF';
					  var color = '#';

						  for (var i = 0; i < 6; i++) {
						    color += letters[Math.floor(Math.random() * 16)];
						  }
					  return color;
					}


						function shapeAppear(){

							var top = Math.random() * 200;

							var left = Math.random() * 1000;

							var widthAndHeight = (Math.random() * 200) + 100;

							if(Math.random() > 0.5){
								document.getElementById("shape").style.borderRadius = "50%";
							} else {
								document.getElementById("shape").style.borderRadius = "0%";
							}

							document.getElementById("shape").style.top = top + "px";

							document.getElementById("shape").style.left = top + "px";

							document.getElementById("shape").style.width = widthAndHeight + "px";

							document.getElementById("shape").style.height = widthAndHeight + "px";

							document.getElementById("shape").style.backgroundColor = getRandomColor();

							document.getElementById("shape").style.display = "block";

							start = new Date().getTime();
						}

						function appearAfter(){
							setTimeout(shapeAppear, Math.random() * 2000);
						}

						appearAfter();

						document.getElementById("shape").onclick = function (){

							document.getElementById("shape").style.display = "none";

							var end = new Date().getTime();

							var timeTaken = (end - start) / 1000;

							document.getElementById("timeSeconds").innerHTML = timeTaken + "<b> (s)</b>";

							appearAfter();
						}
