
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5175"
  ]
}));

let parks = [
  {
    slug: "ranthambore",
    name: "Ranthambore National Park",
    state: "Rajasthan",
    booking : "confirm"
  },
  {
    slug: "corbett",
    name: "Jim Corbett National Park",
    state: "Uttarakhand",
    booking:"confirm"
  }
];

let bookings = [];

// GET: View all parks
app.get("/api/parks", (req, res) => {
  res.status(200).json(parks);
});

// GET: View one park
app.get("/api/parks/:slug", (req, res) => {

  const park = parks.find(
    p => p.slug === req.params.slug
  );

  if (!park) {
    return res.status(404).json({
      message: "Park not found"
    });
  }

  res.status(200).json(park);
});

app.get("/api/parks/booking/:booking", (req,res)=>{
  const park = park.find(
    p => p.booking === req.params.booking
  );

  if (!park) {
    return res.status(404).json({
      message: "Park not found"
    });
  }
  res.status(200).json(park);
})
app.get("/api/bookings", (req, res) => {
  res.status(200).json(bookings);
});

// POST: Create booking enquiry
app.post("/api/bookings", (req, res) => {

  const { name, park, email } = req.body;

  if (!name || !park || !email) {
    return res.status(400).json({
      message: "Name, park and email are required"
    });
  }

  const booking = {
    id: Date.now().toString(),
    name,
    park,
    email,
    status: "enquiry_received"
  };

  bookings.push(booking);

  res.status(201).json(booking);
});

// PATCH: Update booking status
app.patch("/api/bookings/:id", (req, res) => {

  const booking = bookings.find(
    b => b.id === req.params.id
  );

  if (!booking) {
    return res.status(404).json({
      message: "Booking not found"
    });
  }

  if (req.body.status) {
    booking.status = req.body.status;
  }

  res.status(200).json(booking);
});

// DELETE: Delete booking
app.delete("/api/bookings/:id", (req, res) => {

  const index = bookings.findIndex(
    b => b.id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Booking not found"
    });
  }

  bookings.splice(index, 1);

  res.status(204).end();
});

// Unknown route
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.listen(4100, () => {
  console.log("Server running on port 4100");
});
