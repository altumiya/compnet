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

/*
=========================================
NETWORKING & MERN STACK - QUICK NOTES
=========================================

1. HTTPS & TLS
- HTTP: Plaintext data (no encryption).
- HTTPS: HTTP + TLS (Transport Layer Security).
- TLS provides:
  * Encryption: Hides data in transit.
  * Integrity: Detects data tampering.
  * Authentication: Verifies server identity.
- Example: Protects user booking data sent to your server.

2. PORTS (Range: 0 - 65535)
- IP Address = Building address | Port = Room/App number.
- Common Ports:
  * 20/21: FTP (Data/Control) | 22: SSH | 25: SMTP | 53: DNS
  * 80: HTTP | 443: HTTPS
  * 3000 / 4000: Common dev ports (e.g., Express)
  * 27017: MongoDB default

3. FIREWALL
- Controls incoming/outgoing traffic using security rules (allow/block IPs & ports).
- Example: Allow HTTPS (443) publicly, block MongoDB (27017) from public access.

4. VPN (Virtual Private Network)
- Creates an encrypted tunnel between your device and a VPN server.
- Hides your real public IP and allows remote access to private networks.
- Note: VPN does NOT replace HTTPS.

5. MERN STACK FLOW
- Dev Ports: React (5173), Admin (5175), Express (4000), MongoDB (27017).
- Request Flow:
  axios.get("http://localhost:4000/api/parks")
  React -> Express (4000) -> MongoDB (27017) -> Express -> React.
- Production: HTTPS enters on port 443 -> Reverse proxy forwards to Express.

6. USEFUL COMMANDS & STATES
- netstat -ano                         -> View all network connections
- netstat -ano | findstr :4000         -> Check connections on port 4000
- Test-NetConnection google.com -Port 443 -> Test TCP connection
- curl.exe -I https://google.com       -> Check HTTP response headers
- openssl s_client -connect google.com:443 -servername google.com -> Check TLS/SSL cert
- States:
  * LISTENING: App waiting for incoming connections.
  * ESTABLISHED: Active TCP connection.

/*
=========================================
TOP INTERVIEW QUESTIONS - SHORT ANSWERS
=========================================

1. What is HTTPS?
-> Secure version of HTTP that uses TLS to encrypt data between the browser and server.

2. What is TLS?
-> Transport Layer Security; a protocol that provides encryption, data integrity, and server authentication.

3. HTTP vs HTTPS?
-> HTTP sends plaintext data (insecure, port 80). HTTPS sends encrypted data using TLS (secure, port 443).

4. What is a port number?
-> A number (0-65535) that identifies a specific application or service running on an IP address.

5. Why does HTTPS use port 443?
-> It is the standard default port reserved for secure web traffic, so browsers connect to it automatically without needing to specify it in the URL.

6. Port 80 vs Port 443?
-> Port 80 handles unencrypted HTTP traffic; Port 443 handles encrypted HTTPS traffic.

7. What is a firewall?
-> A security layer that filters incoming and outgoing network traffic based on rules (allowing or blocking specific IPs and ports).

8. What is a VPN?
-> Virtual Private Network; creates an encrypted tunnel between your device and a VPN server to hide your real IP and securely access private networks.

9. Why should MongoDB not be publicly accessible?
-> Exposing port 27017 to the public internet makes your database an easy target for unauthorized access, data theft, or ransomware attacks. Only your backend should talk to it.

10. What happens when Express listens on port 4000?
-> The OS binds port 4000 to your Express server (entering the LISTENING state), allowing it to accept, process, and respond to incoming HTTP requests sent to that port.
*/
/*
8. 5 THINGS TO REMEMBER
- HTTPS: Secure HTTP
- TLS: Encryption, Integrity, Authentication
- Ports: Identify specific apps/services
- Firewall: Filters network traffic
- VPN: Encrypted network tunnel
*/

/*
=========================================================
       DAY 5: NETWORK MODELS AND ARCHITECTURE
=========================================================

COURSE: Computer Fundamentals & Networking
LEVEL: Beginner
DURATION: Approximately 2 Hours

TOPICS:
1. OSI Model (7 Layers)
2. TCP/IP Model
3. Routing and Switching
4. NAT (Network Address Translation)
5. Load Balancing
6. Complete Website Request Journey
7. Practical Networking Commands
8. Interview Questions and Answers


=========================================================
1. WHY DO WE NEED NETWORK MODELS?
=========================================================

A network model divides complicated network communication
into smaller layers.

Each layer has a specific responsibility.

Example:

When a visitor opens Jungle Wild Safari:

1. Browser creates a request.
2. DNS finds the server IP address.
3. TCP establishes communication (for HTTP/1.1 or HTTP/2).
4. IP handles addressing and routing.
5. Data travels through the network.
6. Server receives and processes the request.
7. Server sends a response.

Network models help us understand these steps.


=========================================================
2. OSI MODEL (7 LAYERS)
=========================================================

OSI = Open Systems Interconnection.

The OSI model divides network communication into
SEVEN layers.

---------------------------------------------------------
LAYER 7: APPLICATION
---------------------------------------------------------

- Closest layer to the user and applications.
- Provides network services to applications.
- Examples: HTTP, DNS, SMTP, FTP.

Example:
Browser uses HTTP to request Jungle Wild Safari.

---------------------------------------------------------
LAYER 6: PRESENTATION
---------------------------------------------------------

- Deals with data representation and formatting.
- Handles encryption, decryption and compression
  concepts in the OSI model.
- Helps systems understand the exchanged data.

Examples:
Character encoding, data formatting, encryption.

---------------------------------------------------------
LAYER 5: SESSION
---------------------------------------------------------

- Establishes communication sessions.
- Manages and terminates sessions.
- Helps maintain communication between systems.

Example:
Managing a communication session between two systems.

Note:
Modern web applications often handle session-related
functions through application protocols and libraries.

---------------------------------------------------------
LAYER 4: TRANSPORT
---------------------------------------------------------

- Provides communication between applications.
- Uses port numbers.
- Handles segmentation and transport.

Main protocols:

TCP:
- Connection-oriented.
- Reliable communication.
- Delivers data in order.
- Retransmits lost data.

UDP:
- Connectionless.
- No built-in delivery guarantee.
- No built-in ordering guarantee.
- Lower communication overhead.

Example:
HTTPS using HTTP/1.1 or HTTP/2 normally uses TCP port 443.

---------------------------------------------------------
LAYER 3: NETWORK
---------------------------------------------------------

- Handles logical addressing.
- Uses IP addresses.
- Handles routing between networks.

Example:
Your computer sends a request to a server using
the server's IP address.

Main protocol:
IP (Internet Protocol).

---------------------------------------------------------
LAYER 2: DATA LINK
---------------------------------------------------------

- Handles communication within a local network.
- Uses MAC addresses.
- Handles Ethernet frames.
- Switches commonly operate at this layer.

Example:
Your laptop communicates with your Wi-Fi router.

---------------------------------------------------------
LAYER 1: PHYSICAL
---------------------------------------------------------

- Deals with physical transmission of bits.
- Transmits data as electrical, optical or radio signals.

Examples:
- Ethernet cables.
- Fibre-optic cables.
- Wi-Fi radio signals.

---------------------------------------------------------
OSI MODEL ORDER
---------------------------------------------------------

Layer 7 = Application
Layer 6 = Presentation
Layer 5 = Session
Layer 4 = Transport
Layer 3 = Network
Layer 2 = Data Link
Layer 1 = Physical

Remember:

ALL PEOPLE SEEM TO NEED DATA PROCESSING.

Application
Presentation
Session
Transport
Network
Data Link
Physical


=========================================================
3. TCP/IP MODEL
=========================================================

TCP/IP = Transmission Control Protocol / Internet Protocol.

It describes the architecture used by the internet.

A common teaching version contains FOUR layers.

---------------------------------------------------------
LAYER 1: APPLICATION
---------------------------------------------------------

Corresponds to OSI layers 5, 6 and 7.

Examples:
- HTTP
- HTTPS
- DNS
- SMTP

---------------------------------------------------------
LAYER 2: TRANSPORT
---------------------------------------------------------

Corresponds to OSI layer 4.

Examples:
- TCP
- UDP

Responsible for application-to-application communication.

---------------------------------------------------------
LAYER 3: INTERNET
---------------------------------------------------------

Corresponds to OSI layer 3.

Examples:
- IPv4
- IPv6

Responsible for IP addressing and routing.

---------------------------------------------------------
LAYER 4: NETWORK ACCESS
---------------------------------------------------------

Corresponds to OSI layers 1 and 2.

Examples:
- Ethernet
- Wi-Fi

Responsible for communication over the local network.

---------------------------------------------------------
OSI VS TCP/IP
---------------------------------------------------------

OSI MODEL          TCP/IP MODEL

Application        Application
Presentation       Application
Session            Application
Transport          Transport
Network            Internet
Data Link          Network Access
Physical           Network Access

IMPORTANT:

OSI has 7 layers.
The common TCP/IP teaching model has 4 layers.

Some textbooks use a 5-layer TCP/IP teaching model
by separating Physical and Data Link.

These are reference models. Real protocols do not
always fit perfectly into one OSI layer.


=========================================================
4. ROUTING AND SWITCHING
=========================================================

Both are used to move data through networks.

---------------------------------------------------------
SWITCHING
---------------------------------------------------------

A switch connects devices within a local network (LAN).

Example:

Computer A ----\
                SWITCH ---- Computer C
Computer B ----/

A switch uses MAC addresses to forward Ethernet frames.

Main purpose:
Connect devices within the same local network.

---------------------------------------------------------
ROUTING
---------------------------------------------------------

A router connects different networks.

Example:

Laptop
   |
Wi-Fi Router
   |
Internet Provider
   |
Internet
   |
Website Server

A router uses IP addresses and routing tables
to forward packets towards their destinations.

Main purpose:
Connect different networks.

---------------------------------------------------------
ROUTER VS SWITCH
---------------------------------------------------------

SWITCH:
- Connects devices in a LAN.
- Uses MAC addresses for normal Layer 2 forwarding.
- Commonly operates at Layer 2.

ROUTER:
- Connects different networks.
- Uses IP addresses.
- Commonly operates at Layer 3.

Note:
Some advanced switches can also perform Layer 3 routing.


=========================================================
5. NAT (NETWORK ADDRESS TRANSLATION)
=========================================================

NAT = Network Address Translation.

NAT translates IP addresses as traffic moves
between networks.

Why is NAT needed?

Devices inside a home network commonly use private IPs.

Example:

Laptop:
192.168.1.10

Mobile:
192.168.1.11

Smart TV:
192.168.1.12

These devices can share a public IP address
through the home router.

---------------------------------------------------------
HOW NAT WORKS
---------------------------------------------------------

1. Laptop sends a request to a website.
2. Request reaches the home router.
3. Router translates the private source address
   into its public address.
4. Request travels across the internet.
5. Response comes back to the router.
6. Router uses its translation information to
   forward the response to the correct device.

---------------------------------------------------------
PAT (PORT ADDRESS TRANSLATION)
---------------------------------------------------------

A common form of NAT.

PAT uses port numbers along with IP addresses
to allow multiple devices to share one public IP.

IMPORTANT:

NAT and Firewall are NOT the same.

NAT:
Translates network addresses.

Firewall:
Controls network traffic according to security rules.


=========================================================
6. LOAD BALANCING
=========================================================

Load balancing distributes incoming requests
across multiple servers.

Why is it needed?

Imagine:

Jungle Wild Safari receives 10,000 requests.

One server may become overloaded.

Instead, requests can be distributed across
multiple application servers.

Example:

             VISITORS
                 |
           LOAD BALANCER
                 |
          ----------------
          |      |       |
        Server1 Server2 Server3
          |      |       |
          ----------------

---------------------------------------------------------
LOAD BALANCING METHODS
---------------------------------------------------------

1. ROUND ROBIN

Requests are distributed in rotation.

Example:

Request 1 -> Server 1
Request 2 -> Server 2
Request 3 -> Server 3
Request 4 -> Server 1

2. LEAST CONNECTIONS

Sends a new request to the server with
fewer active connections.

3. HEALTH CHECKS

Checks whether a server is healthy.

Unhealthy servers can be removed from
the available server pool.

BENEFITS:

- Distributes workload.
- Helps prevent one server from becoming overloaded.
- Can improve availability.
- Supports scaling.

IMPORTANT:

Load balancing does not automatically make
an application faster.

Database performance and application capacity
also matter.


=========================================================
7. COMPLETE WEBSITE REQUEST JOURNEY
=========================================================

Example:

A visitor opens:

https://junglewildsafari.com

Let's understand what happens.

STEP 1: BROWSER

Visitor enters the domain name in the browser.

STEP 2: DNS RESOLUTION

DNS finds the IP address associated with the domain.

STEP 3: LOCAL NETWORK AND NAT

Computer sends traffic through its default gateway.

The home router may translate its private IP
using NAT/PAT.

STEP 4: ROUTING

Routers forward IP packets across different networks
towards the destination.

STEP 5: HTTPS AND TLS

Browser establishes a secure connection.

For HTTP/1.1 and HTTP/2 over TLS:
TCP port 443 is normally used.

For HTTP/3:
QUIC over UDP is used.

TLS provides:
- Encryption.
- Data integrity.
- Server authentication through certificate validation.

STEP 6: HOSTING INFRASTRUCTURE

The hosting provider receives the public request
and directs it to the hosted application.

STEP 7: REACT FRONTEND

The browser receives the website's:

- HTML
- CSS
- JavaScript
- Images
- Other assets

React runs inside the visitor's browser.

STEP 8: REACT TO EXPRESS

When a visitor submits a safari enquiry form,
React sends an API request to Express.

Example:

Axios -> Express API

STEP 9: EXPRESS AND MONGODB

Express:

- Receives the request.
- Validates the information.
- Performs application logic.
- Communicates with MongoDB if required.

STEP 10: RESPONSE

Express returns a response.

React receives the response and displays
the result to the visitor.

---------------------------------------------------------
YOUR MERN PROJECT ARCHITECTURE
---------------------------------------------------------

JUNGLE WILD SAFARI

website/
    React frontend

admin/
    Admin frontend

server/
    Node.js + Express backend

DATABASE:
    MongoDB

LOCAL DEVELOPMENT PORTS:

Website:
5173

Admin:
5175

Express:
4000

MongoDB:
27017

IMPORTANT PRODUCTION NOTE:

Your public website normally uses HTTPS port 443.

Your hosting provider manages the public-facing
web infrastructure.

Do not assume that Express port 4000 or MongoDB
port 27017 should be publicly exposed.

Keep database access restricted.

Your Hostinger Business hosting configuration
may manage internal application connections
differently from local development.


=========================================================
8. PRACTICAL NETWORKING COMMANDS
=========================================================

Open Windows PowerShell.

---------------------------------------------------------
1. FIND YOUR NETWORK DETAILS
---------------------------------------------------------

COMMAND:

ipconfig /all

Displays:

- IPv4 Address
- Subnet Mask
- Default Gateway
- DNS Servers
- MAC Address (Physical Address)

---------------------------------------------------------
2. VIEW LOCAL NETWORK MAC ADDRESSES
---------------------------------------------------------

COMMAND:

arp -a

Displays the ARP table.

It shows IPv4-to-MAC address mappings
that your computer has learned.

---------------------------------------------------------
3. VIEW ROUTING TABLE
---------------------------------------------------------

COMMAND:

route print

Displays your computer's routing table.

Look for:

0.0.0.0

This commonly represents the default IPv4 route.

---------------------------------------------------------
4. TRACE WEBSITE ROUTE
---------------------------------------------------------

COMMAND:

tracert -d google.com

Shows the network hops between your computer
and the destination.

Each hop represents a router along the path.

Note:
Some routers may not respond to traceroute probes.

---------------------------------------------------------
5. TEST HTTPS PORT
---------------------------------------------------------

COMMAND:

Test-NetConnection google.com -Port 443

Look for:

TcpTestSucceeded : True

This means the TCP connection to port 443 succeeded.

---------------------------------------------------------
6. TEST HTTP HEAD REQUEST
---------------------------------------------------------

COMMAND:

curl.exe -I https://google.com

Displays HTTP response headers.

---------------------------------------------------------
7. INSPECT WEBSITE REQUEST IN BROWSER
---------------------------------------------------------

1. Open a website.
2. Press F12.
3. Select Network tab.
4. Refresh the page.
5. Click the main document request.

Inspect:

- Request URL
- Request Method
- Status Code
- Remote Address
- Protocol (if displayed)


=========================================================
9. INTERVIEW QUESTIONS AND ANSWERS
=========================================================

Q1. What is the OSI model?

A:
OSI stands for Open Systems Interconnection.

It is a seven-layer reference model used
to understand network communication.

The seven layers are:

Application
Presentation
Session
Transport
Network
Data Link
Physical


Q2. Name all seven OSI layers.

A:

1. Application
2. Presentation
3. Session
4. Transport
5. Network
6. Data Link
7. Physical


Q3. Which OSI layer uses IP addresses?

A:
Layer 3 - Network Layer.

It handles logical addressing and routing.


Q4. Which OSI layer uses TCP and UDP?

A:
Layer 4 - Transport Layer.

It handles communication between applications.


Q5. Which OSI layer uses MAC addresses?

A:
Layer 2 - Data Link Layer.

It handles local network frame delivery.


Q6. Which OSI layer handles cables and signals?

A:
Layer 1 - Physical Layer.

It transmits bits through electrical,
optical or radio signals.


Q7. What is the TCP/IP model?

A:
TCP/IP is the networking architecture
used by the internet.

Its common four-layer teaching model is:

1. Application
2. Transport
3. Internet
4. Network Access


Q8. What is the difference between OSI and TCP/IP?

A:
OSI has seven layers.

The common TCP/IP teaching model has four layers.

OSI is primarily a reference model for understanding
network communication.

TCP/IP describes the architecture and protocols
used by the internet.


Q9. What is switching?

A:
Switching is the process of forwarding data
between devices within a local network.

A normal Layer 2 switch uses MAC addresses
to forward Ethernet frames.


Q10. What is routing?

A:
Routing is the process of forwarding packets
between different networks.

Routers use IP addresses and routing tables
to select paths.


Q11. What is the difference between a router and switch?

A:

Switch:
Connects devices within a LAN.

Router:
Connects different networks.

A switch commonly uses MAC addresses.

A router uses IP addresses for routing.


Q12. What is NAT?

A:
NAT stands for Network Address Translation.

It translates IP addresses as traffic moves
between networks.

Home routers commonly use NAT so multiple
private-network devices can share a public IP.


Q13. What is PAT?

A:
PAT stands for Port Address Translation.

It uses port numbers along with IP addresses
to allow multiple devices to share a public IP.


Q14. Is NAT a firewall?

A:
No.

NAT translates network addresses.

A firewall controls network traffic using
security rules.

They perform different functions.


Q15. What is load balancing?

A:
Load balancing distributes incoming requests
across multiple servers.

It helps distribute workload and improve
availability and capacity.


Q16. What is Round Robin load balancing?

A:
It distributes requests across servers
in a repeating rotation.

Example:

Request 1 -> Server 1
Request 2 -> Server 2
Request 3 -> Server 3
Request 4 -> Server 1


Q17. What is a health check in load balancing?

A:
A health check checks whether a server
is working correctly.

An unhealthy server can be removed
from the available server pool.


Q18. What happens when someone opens a website?

A:

1. Browser requests the domain.
2. DNS resolves the domain to an IP address.
3. Computer sends traffic through its gateway.
4. Router may perform NAT.
5. Routers forward packets across networks.
6. Browser establishes a secure connection.
7. Hosting infrastructure receives the request.
8. Website files are delivered to the browser.
9. Browser renders the website.


Q19. What happens when someone submits a form
on a MERN website?

A:

1. User fills the React form.
2. React sends an Axios API request.
3. Express receives the request.
4. Express validates the data.
5. Express communicates with MongoDB if required.
6. Express sends a response.
7. React displays the result.


Q20. What is the purpose of the browser Network tab?

A:
It helps developers inspect network requests.

We can examine:

- Request URL
- HTTP method
- Status code
- Request headers
- Response headers
- Response data
- Timing information


Q21. What is the default route?

A:
A default route is used when no more specific
routing-table entry matches the destination.

In IPv4, the destination is commonly represented as:

0.0.0.0/0


Q22. Does a load balancer always make a website faster?

A:
No.

It distributes requests across servers.

Performance also depends on application code,
database performance, network latency and
available server resources.


Q23. Which protocol is used by HTTP/3?

A:
HTTP/3 uses QUIC, which runs over UDP.

HTTP/1.1 and HTTP/2 commonly use TCP
when operating over TLS.


Q24. What is the role of a router's routing table?

A:
It contains information used by the router
to decide where packets should be forwarded.


Q25. What is the difference between a packet
and a frame?

A:
A packet is associated with the Network layer.

A frame is associated with the Data Link layer.

The packet is carried inside a frame
when transmitted over a link.


=========================================================
10. QUICK REVISION TABLE
=========================================================

CONCEPT             MEANING

OSI                 Seven-layer reference model.

TCP/IP              Internet networking architecture.

Application         Network services for applications.

Presentation        Data representation and formatting.

Session             Session management.

Transport           TCP, UDP and port numbers.

Network             IP addressing and routing.

Data Link           MAC addresses and frames.

Physical            Transmission of bits.

Switch              Connects devices within a LAN.

Router              Connects different networks.

NAT                 Network Address Translation.

PAT                 NAT using port information.

Load Balancer       Distributes incoming requests.

Round Robin         Distributes requests in rotation.

Health Check        Checks server availability.

Routing Table       Information used to forward packets.

Default Route       Route used when no more specific
                    route matches.


=========================================================
11. FINAL MEMORY CHECK
=========================================================

OSI MODEL:
7 layers.

TCP/IP MODEL:
Common teaching model has 4 layers.

SWITCH:
Connects devices in a LAN.

ROUTER:
Connects different networks.

NAT:
Translates network addresses.

PAT:
Uses IP addresses and port numbers.

LOAD BALANCER:
Distributes incoming requests.

HTTP/HTTPS:
Application-layer protocols.

TCP:
Reliable, ordered byte-stream transport.

UDP:
Connectionless datagram transport.

IP:
Logical addressing and routing.

MAC:
Local network hardware addressing.

PORT:
Identifies an application endpoint on a host.

DNS:
Translates domain names into IP addresses.
*/