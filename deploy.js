const express = require('express');
const path = require('path');
const port = process.env.PORT || 8124;
const app = express();

// serve static assets normally
app.use('/landing', express.static(path.resolve(__dirname, '../public/landing', 'index.html')));
app.use(express.static(path.resolve(__dirname, '../public')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(port);
console.log(`Server is listening on port ${port}`);
