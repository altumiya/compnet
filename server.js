const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end("Welcome to Jungle Wild Safari!");
});

server.listen(4100, "127.0.0.1", () => {
  console.log("Server running on port 4100");
});

console.log(Buffer.from("A", "utf8"));  //<Buffer 41> 
console.log(Buffer.from("₹", "utf8"));  //<Buffer e2 82 b9>
//Buffer.from(..., "utf8") encodes each string as UTF-8 bytes. 
// "A" is one byte (41 in hex); "₹" is three bytes (e2 82 b9). 
// The output shows those bytes in Node’s hexadecimal format

// IPv4 Address : This is your laptop's unique address on your local home Wi-Fi (LAN).

// Default Gateway : This is your home router.
// Anytime your laptop wants to load a website on the internet, it sends the request to this router first.

// If you run ping your-ip-key,
// your laptop sends tiny test packets to your router
// to see if it replies.
// It is the quickest way to check if your computer is successfully connected to your local network

// When you run curl [http://127.0.0.1:4100](http://127.0.0.1:4100),
// your terminal is acting exactly like a web browser.
// It becomes the client making a request to the Node.js
// server running on your local machine.
// The server processes it and sends back your
// "Welcome to Jungle Wild Safari!" text.

// When your laptop wants to send data to another IP address,
// it uses the Subnet Mask to ask:
// "Is this destination inside my house, or out on the internet?"

// "Link-local" means this address is strictly for local chatter on your Wi-Fi.
// Data sent from this address never crosses your router to go to the internet.

// Think of a MAC address as your Aadhaar card and an IP address as your postal address.
// Your Aadhaar card (MAC address) is permanently tied to you.
// No matter where you travel in the world, it never changes.
// Your postal address (IP address) changes depending on where you are currently sitting.
// If you take your laptop to a coffee shop, your IP address changes,
// but your MAC address stays exactly the same.
// Here is the technical breakdown:
// the internet uses the IP address to navigate across global networks and deliver the webpage data to their home router.
// Once the data hits the router, the router says, "Okay, the data is inside the house, but who asked for it?
// The phone, the smart TV, or the laptop?"
// The router uses the MAC address to hand the webpage data to the exact physical device that requested it.
