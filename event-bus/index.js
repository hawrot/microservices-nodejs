const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);
    //4000 is a posts service
    axios.post('http://posts-clusterip-srv:4000/events', event);
/*

    //4001 is a comments service
    axios.post('http://localhost:4001/events', event);

    //4002 is a query service
    axios.post('http://localhost:4002/events', event);

    //4003 is a moderation service
    axios.post('http://localhost:4003/events', event);
*/



    res.send({status: 'OK'});

});

app.get('/events', (req, res) => {
   //send the events on request
    res.send(events);

});


app.listen(4005, ()=>{
   console.log('Listening on 4005');
});
