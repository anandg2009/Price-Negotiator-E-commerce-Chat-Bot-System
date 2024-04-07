function addImage(imageUrl) {
	var chatLog = document.getElementById("chatLog");
	var image = document.createElement("img");
	image.src = imageUrl;
	image.style.width = "200px"; // adjust as needed
	image.style.height = "200px"; // adjust as needed
	chatLog.appendChild(image);
}

function sendMessage(event) {
	if (event.key === "Enter") {
		var userInput = document.getElementById("userInput").value;
		addMessage(userInput, "user-message");
		document.getElementById("userInput").value = ""; // Clear the input field

		// Simulate a response from the bot
		setTimeout(function() {
			var response = "";
			// Use a switch statement to check the user input and generate a response
			switch (userInput.toLowerCase() || userInput.toUpperCase()) {
				case "hi":
				case "hello":
				case "hi!":
				case "hello!":
				case "Hi":
				case "Hello":
				case "Hi!":
				case "Hello!":
					response = "What product do you want?";
					break;
				case "shoes":
				case "Shoes":
					response = "We have a variety of shoes for men, women, and kids. For whom do you prefer the shoes?";
					break;
				case "Men":
				case "men":
				case "Men Shoes":
				case "Men shoes":
				case "men shoes":
				case "men Shoes":
					response = "Great! There are some shoes for men. What kind of shoes are you looking for?";
					break;
				case "Women":
				case "women":
				case "Women Shoes":
				case "Women shoes":
				case "women shoes":
				case "women Shoes":
					response = "Great! There are some shoes for women. What kind of shoes are you looking for?";
					break;
				case "Kids":
				case "kids":
				case "Kids Shoes":
				case "kids shoes":
				case "Kids shoes":
				case "kids Shoes":
				case "Kid":
				case "kid":
				case "Kid Shoes":
				case "kid shoes":
				case "Kid shoes":
				case "kid Shoes":
					response = "Great! There are some shoes for kids. What kind of shoes are you looking for?";
					break;
				case "Sneakers":
				case "sneakers":
					response = "It is a great choice for you! Sneakers ranges from Rs. 500. What range will you prefer for shoes? And What is your preferred color and size for shoes? And what brand will you recommend for yourself?";
					break;
				case "I want some shoes in range of Rs 500 to Rs 1000":
				case "I want some shoes in range of Rs 500 to rs 1000":
				case "i want some shoes in range of Rs 500 to Rs 1000":
				case "i want some shoes in range of Rs 500 to rs 1000":
				case "I want some shoes in range of rs 500 to Rs 1000":
				case "I want some shoes in range of rs 500 to rs 1000":
				case "i want some shoes in range of rs 500 to Rs 1000":
				case "i want some shoes in range of rs 500 to rs 1000":
				case "I want some shoes in range of Rs 500 - Rs 1000":
				case "I want some shoes in range of Rs 500 - rs 1000":
				case "i want some shoes in range of Rs 500 - Rs 1000":
				case "i want some shoes in range of Rs 500 - rs 1000":
				case "i want some shoes in range of rs 500 - Rs 1000":
				case "i want some shoes in range of rs 500 - rs 1000":
				case "I want some shoes in range of rs 500 - Rs 1000":
				case "I want some shoes in range of rs 500 - rs 1000":
				case "I want some shoes in range of Rs 500-Rs 1000":
				case "I want some shoes in range of Rs 500-rs 1000":
				case "i want some shoes in range of Rs 500-Rs 1000":
				case "i want some shoes in range of Rs 500-rs 1000":
				case "I want some shoes in range of rs 500-Rs 1000":
				case "I want some shoes in range of rs 500-rs 1000":
				case "i want some shoes in range of rs 500-Rs 1000":
				case "i want some shoes in range of rs 500-rs 1000":
				case "I want some shoes in range of Rs 500 and Rs 1000":
				case "I want some shoes in range of Rs 500 and rs 1000":
				case "i want some shoes in range of Rs 500 and Rs 1000":
				case "i want some shoes in range of Rs 500 and rs 1000":
				case "I want some shoes in range of rs 500 and Rs 1000":
				case "I want some shoes in range of rs 500 and rs 1000":
				case "i want some shoes in range of rs 500 and Rs 1000":
				case "i want some shoes in range of rs 500 and rs 1000":
					response = "Ohh nice! There are some shoes in range of Rs. 500 to Rs. 1000.";
					break;
				case "I want some shoes of Rs 500":
				case "I want some shoes of rs 500":
				case "i want some shoes of Rs 500":
				case "i want some shoes of rs 500":
				case "I want to buy some shoes of Rs 500":
				case "I want to buy some shoes of rs 500":
				case "i want to buy some shoes of Rs 500":
				case "i want to buy some shoes of rs 500":
					response = "Yes! There are some shoes of Rs. 500. Would you like to see it?";
					case "Yes":
					case "yes":
					case "Yes.":
					case "yes.":
					case "Yes. I want to see":
					case "yes. I want to see":
					case "Yes. i want to see":
					case "yes. i want to see":
					case "Yes I want to see":
					case "Yes i want to see":
					case "yes I want to see":
					case "yes i want to see":
					case "I want to see":
					case "i want to see":
						response = "Here are some shoes of Rs. 500:";
						addImage("image.jpeg");
						addImage("image2.jpeg");
						break;
					break;
				case "I want some shoes of Rs 700":
				case "I want some shoes of rs 700":
				case "i want some shoes of Rs 700":
				case "i want some shoes of rs 700":
				case "I want to buy some shoes of Rs 700":
				case "I want to buy some shoes of rs 700":
				case "i want to buy some shoes of Rs 700":
				case "i want to buy some shoes of rs 700":
					response = "Yes! There are some shoes of Rs. 700. Would you like to see it?";
					case "Yes":
					case "yes":
					case "Yes.":
					case "yes.":
					case "Yes. I want to see":
					case "yes. I want to see":
					case "Yes. i want to see":
					case "yes. i want to see":
					case "Yes I want to see":
					case "Yes i want to see":
					case "yes I want to see":
					case "yes i want to see":
					case "I want to see":
					case "i want to see":
						response = "Here are some shoes of Rs. 500:";
						addImage("image3.jpeg");
						addImage("image4.jpeg");
						break;
					break;
				case "Show me":
				case "Show Me":
				case "show me":
				case "show Me":
				case "Show me some shoes":
				case "show me some shoes":
					response = "Here are some shoes you should like:";
					addImage("image.jpeg");
					addImage("image2.jpeg");
					addImage("image3.jpeg");
					addImage("image4.jpeg");
					break;
				case "t-shirts":
				case "T-Shirts":
				case "T Shirts":
				case "t shirts":
				case "T shirts":
					response = "We have a range of t-shirts in different colors, sizes, and designs. What is your preferred color and size?";
					break;
				case "Color Blue and Size 18":
					response = "We have some Roadster T-Shirts with color blue and size 18 ranging from Rs. 500. You can search it in the Search box for these T-Shirts";
					break;
				case "Mobiles":
				case "mobiles":
				case "Mobile":
				case "mobile":
					response = "Ohh nice! What mobile brand do you recommend me to show? Please give the category of mobile phone such as Smartphone or a Simple one. Also give the price range and specifications so that I can show the best one for you";
					break;
				default:
					response = "Sorry, I did not understand your query. Please try again.";
			}
			addMessage(response, "bot-message");
		}, 500);
	}
}

document.getElementById("chatbotButton").addEventListener("click", function() {
    var chatbot = document.querySelector(".chatbot");
    if (chatbot.style.display === "none") {
        chatbot.style.display = "block";
    } else {
        chatbot.style.display = "none";
    }
});

function addMessage(message, className) {
  var chatLog = document.getElementById("chatLog");
  var messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.classList.add("chat-message", className);
  chatLog.appendChild(messageDiv);

  // Scroll to the bottom of the chat log
  chatLog.scrollTop = chatLog.scrollHeight;
}

document.getElementById("closeButton").addEventListener("click", function() {
    document.querySelector(".chatbot").style.display = "none";
});