import express, { json } from 'express';
const app = express()
const port = 6000;

// Set up the middleware
app.use(json())

// Define the API endpoints
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' })
})
app.listen(port, () => {
    console.log(`server app listening on port ${port}!`);
});