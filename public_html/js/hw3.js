<!-- Exercise 6.18 -->
			<!-- get three numbers from the user -->
			var number1 = 0;
			var number2 = 0;
			var number3 = 0;
			
			<!-- convert them to integers -->
			var int1 = parseInt(prompt("Please enter your first integer: ", "Integer 1 of 3"));
			var int2 = parseInt(prompt("Please enter your second integer: ", "Integer 2 of 3"));
			var int3 = parseInt(prompt("Please enter your last integer: ", "Integer 3 of 3"));
			
			<!-- find sum, average. product, smallest, and largest -->
			var sum = int1 + int2 + int3;
			var average = sum / 3;
			var product = int1 * int2 * int3;
			var smallestNum = Math.min(int1, int2, int3);
			var largestNum = Math.max(int1, int2, int3);
			
			<!-- display the results to one alert box -->
			alert("Exercise 6.18" +
				"\nThe sum of your three numbers is: " + sum +
				".\nThe average of your three numbers is: " + average +
				".\nThe product of your three numbers is: " + product +
				".\nThe smallest number of your three numbers is: " + smallestNum +
				".\nThe largest number of your three numbers is: " + largestNum ); 
			
		<!-- Exercise 6.19 -->
			<!-- get radius of a circle form the user -->
			var radius = prompt("Enter the radius of a circle: ", "Please enter the radius: ");
			
			<!-- find diameter, circumference and area -->
			var diameter = radius * 2;
			var circumference = diameter * Math.PI;
			var area = Math.PI * radius * radius;
			
			<!-- display results -->
			document.write("<h4>Exercise 6.19</h4>");
			document.write("<p> Your circle, with radius " + radius + " has the following:<br/>" +
							"Diameter: " + diameter + "<br/>" +
							"Circumference: " + circumference + "<br/>" +
							"Area: " + area + "</p>");
							
		<!-- Exercise 6.24 -->
			<!-- create table header -->
			document.write("<table><tr>" +
							"<th>Number</th>" +
							"<th>Square</th>" +
							"<th>Cube</th>" +
							"</tr>");
			<!-- create loop for table data -->
			document.write("<h4>Exercise 6.24</h4>");
			for (var i = 0; i < 6; i++){
				document.write("<tr>" + 
								"<td>" + i + "</td>" +
								"<td>" + i * i + "</td>" +
								"<td>" + i * i * i + "</td>" +
								"</tr>");
			}
			document.write("</table>")
			<!-- Exercise 7.16 -->
				<!-- create table header -->
			document.write("<table><tr>" +
							"<th >N</th>" +
							"<th >10 * N</th>" +
							"<th >100 * N</th>" +
							"<th >1000 * N</th>" +
							"</tr>");
			<!-- create loop for table data -->
			document.write("<h4>Exercise 7.16</h4>");
			<!-- how many total times to loop -->
			for (var n = 1; n < 7; n++){
				document.write("<tr>") 
				<!-- data in rows -->
				for (var j = 0; j < 4; j++){
					document.write("<td >" + Math.pow(10 , j) * n + "</td>");
				}
				document.write("</tr>");
			}
			document.write("</table>")