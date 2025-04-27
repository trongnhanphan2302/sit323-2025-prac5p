const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'missing num 1 or num2 parameter' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'Invalid number format' });
    }
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing num1 or num2 parameter' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'invalid number format' });
    }
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'missing num1 or num2 parameter' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'invalid number format' });
    }
    res.json({ result });
});

app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Missing num1 or num2 parameter' });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'division by zero is not allowed' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    if (isNaN(result)) {
        return res.status(400).json({ error: 'Invalid number format' });
    }
    res.json({ result });
});

app.listen(port, () => {
    console.log(`calculator microservice is running at http://localhost:${port}`);
});
