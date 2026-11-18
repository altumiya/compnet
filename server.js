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

// Unlike IPv4, IPv6 uses hexadecimal numbers separated by colons. uses 128 bits
// e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334

// The router uses a technology called NAT (Network Address Translation) 
// to allow devices using private IPv4 addresses to share public IPv4 connectivity.

// Why do we need subnet masks?
// Suppose your laptop wants to communicate with:
// 192.168.1.20
// It checks whether the destination belongs to its local network.
// If it does, the device can communicate directly over the local network.
// If the destination belongs to another network, the computer generally sends the packet to its default gateway.

// IP address = Device's network address.
// Subnet mask = Identifies network boundaries.
// Default gateway = Next-hop device for traffic leaving the local network.

// A Record stands for Address Record. 
// e.g. junglewildsafari.com to 203.0.113.10

// CNAME stands for Canonical Name. e.g. www.junglewildsafari.com to junglewildsafari.com

// MX stands for Mail Exchange.It specifies which mail servers receive email for a domain.

// DNS Lookup: The browser checks its local cache, then asks a Recursive Resolver to find the IP.
// The Resolver queries the Root Server, then the TLD (.com) Server, and finally the Authoritative Server.
// The Authoritative Server returns the exact IP address so the browser can connect to the website.

// DNS (Domain Name System) translates domain names into IP addresses.

// A CNAME (Canonical Name) record points one domain or subdomain (like www) to another.

// The Authoritative DNS Server holds and provides the official, final DNS records for a domain.

// An MX (Mail Exchanger) record directs email to a domain's mail hosting server.

// If the IP is incorrect, visitors typing the domain will see an error or be sent to the wrong website.

// 1. Domain name: The user types junglewildsafari.com into their browser.
// 2. DNS resolver: The browser asks the ISP's resolver to find the IP address.
// 3. Root server: The resolver asks the Root Server, which points it to the .com server.
// 4. TLD server: The .com server points the resolver to the domain's Authoritative server.
// 5. Authoritative server: The Authoritative server holds the official records and provides the exact IP.
// 6. IP address: The resolver receives the IP (e.g., 203.0.113.10) and hands it to the browser.
// 7. Connect: The browser uses that IP address to connect directly to the web server and load the site.

// TCP(transfer controll protocol) is the reliable one: 
// it establishes a connection first, 
// double-checks that every packet arrives in order, 
// and retransmits anything that gets lost. 
// It’s perfect for downloading files or loading webpages where accuracy matters.

// UDP(user datagram protocol) is the fast one: 
// it just sends the data without waiting for delivery receipts. 
// If a packet drops, it just moves on. 
// This low overhead makes it ideal for live gaming, video calls, and real-time streaming where speed beats perfect accuracy.

// (Bonus point: The newest web standard, HTTP/3, actually uses UDP for speed 
// but builds its own reliability on top of it!)

// HTTP is stateless by default. Each request is treated independently.
//  Applications can use cookies, sessions or tokens to maintain user identity across requests.

// HTTP status code
// | Category | Meaning |
// |--------|--------|
// | 1xx | Informational |
// | 2xx | Success |
// | 3xx | Redirection |
// | 4xx | Client error |
// | 5xx | Server error |

// CORS is a browser security mechanism, not an authentication system. 
// It does not replace JWT, authorization or server-side validation