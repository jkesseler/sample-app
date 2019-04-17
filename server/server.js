/* eslint-disable no-console */
/**
  Simple API proxy to hide secret key
 */
import express from 'express';
import settings from '~utils/settings';
import serverFetcher from '~utils/server-fetcher';


// This just a stub middleware for protected routes
const ensureAuthenticated = (req, res, next) => {
  if (/* req.isAuthenticated() */ true) { // eslint-disable-line no-constant-condition
    next();
  } else {
    // Autorisation error
    res.status(401);
    res.end();
  }
};

const app = express();
app.use(express.json());

// Preflight response
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-reqed-With, Content-Type, Accept');
  next();
});


// Error handling
// Always the last middleware
app.use((err, req, res, next) => {
  // log the error, for now just console.log
  console.log('Error: ', err.message);
  res.status(500);
  res.render('error', { error: err });
  next();
});


// Routes
app.get('/todos', ensureAuthenticated, (req, res) => {
  serverFetcher({ url: settings.todoApiUrl })
    .then(apiResponse => apiResponse.data)
    .then(data => res.json(data))
    .catch((error) => {
      // Error logger here
      console.log('Error: ', error);
    });
});

app.put('/todos', ensureAuthenticated, (req, res) => {
  serverFetcher({ url: settings.todoApiUrl, method: 'put', data: req.body })
    .then(apiResponse => apiResponse.data)
    .then(data => res.json(data))
    .catch((error) => {
    // Error logger here
      console.log('Error: ', error);
    });
});

const port = process.env.SERVER_APP_PORT || 3008;
app.listen(port, (err) => {
  if (err) {
    console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
