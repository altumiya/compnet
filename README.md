Day 1 - Computers, Code & Networking Foundations

🚀 Overview

This repository contains notes and practical code from Day 1 of learning web development and networking foundations. It covers setting up a basic Node.js local server, understanding character encoding, and breaking down core networking concepts.

💻 Practical Code Examples

1. Basic Node.js Server

This script creates a simple local HTTP server that responds to client requests.

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


2. Character Encoding (UTF-8)

Using the Node.js Buffer to see how human-readable text is converted into bytes.

console.log(Buffer.from("A", "utf8"));  // Output: <Buffer 41> 
console.log(Buffer.from("₹", "utf8"));  // Output: <Buffer e2 82 b9>


How it works: Buffer.from(..., "utf8") encodes each string as UTF-8 bytes. The letter "A" is one byte (41 in hex), while the Rupee symbol "₹" is three bytes (e2 82 b9). The terminal output shows those bytes in Node’s hexadecimal format.

🌐 Core Networking Concepts

IP & Network Boundaries

IPv4 Address: Your computer's unique temporary address on your local home Wi-Fi (LAN).

Default Gateway: This is your home router. Anytime your laptop wants to load a website on the internet, it sends the request to this router first.

Subnet Mask: When your laptop wants to send data to another IP address, it uses the Subnet Mask to ask: "Is this destination inside my house, or out on the internet?"

Link-local Address: This address is strictly for local chatter on your Wi-Fi. Data sent from this address never crosses your router to go to the internet.

Network Testing Tools

ping: If you run ping <your-router-ip>, your laptop sends tiny test packets to your router to see if it replies. It is the quickest way to check if your computer is successfully connected to your local network.

curl: When you run curl http://127.0.0.1:4100, your terminal is acting exactly like a web browser. It becomes the client making a request to the Node.js server running on your local machine. The server processes it and sends back your response text.

MAC Address vs. IP Address

Think of a MAC address as your Aadhaar card and an IP address as your postal address.

MAC Address (Aadhaar Card): Permanently tied to your device's hardware. No matter where you travel in the world, it never changes.

IP Address (Postal Address): Changes depending on where you are currently sitting (e.g., home vs. a coffee shop).

How they work together to deliver a webpage:

The internet uses the IP address to navigate across global networks and deliver the webpage data to your home router.

Once the data hits the router, the router says, "Okay, the data is inside the house, but who asked for it? The phone, the smart TV, or the laptop?"

The router uses the MAC address to hand the webpage data to the exact physical device that originally requested it.
