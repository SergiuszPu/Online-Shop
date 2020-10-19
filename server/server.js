const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/products', (req, res) => {
    const data = [
        { id: '1adfasf', title: 'Sergiuszzz tu jest', content: 'Photo 1' },
        { id: '2evxc34', title: 'Tak wiec zaczynamy', content: 'Photo 2' },
    ]
    res.json(data);
});

app.listen(8000, function () {
    console.log('Server is running on port:', 8000);
}); 