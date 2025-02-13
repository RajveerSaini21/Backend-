const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/RailwayBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const bookingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNo: String,
    gender: String,
    age: String,
    dateOfJourney: String,
    origin: String,
    destination: String,
    train: String,
    travelClass: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'Railway.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).send('Error loading Railway.html');
        }
    });
});

app.post('/bookTicket', async (req, res) => {
    try {
        const bookingData = {
            firstName: req.body.fname,
            lastName: req.body.lname,
            contactNo: req.body.contno,
            gender: req.body.gender,
            age: req.body.age,
            dateOfJourney: req.body.date,
            origin: req.body.origin,
            destination: req.body.destination,
            train: req.body.train, 
            travelClass: req.body.travelClass, 
        };

        const newBooking = new Booking(bookingData);
        await newBooking.save();

        res.send('Ticket booked successfully!');
    } catch (error) {
        res.status(500).send('Error booking ticket: ' + error.message);
    }

});

const port = 3020;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
