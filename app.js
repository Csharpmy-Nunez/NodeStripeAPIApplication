const express = require('express');
const stripe = require('stripe')('sk_test_6lJ9hLreEfzZnT8u0Pb7wiGl');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

//Initialize
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set the static Folder
app.use(express.static(`${__dirname}/public`));


const port  = process.env.port || 5000;

//Index Route
app.get('/', (request, response) => {
 response.render('index');
});

//Charge Route
app.post('/charge', () => {
  const amount = 2500;
  
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});