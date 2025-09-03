const express = require("express");


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('We have initialised the project')
})

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`)
});
