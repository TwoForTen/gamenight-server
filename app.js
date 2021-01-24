const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running at port ${port}`));