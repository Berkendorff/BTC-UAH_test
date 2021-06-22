const path = require('path');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const Database = require('./lib/database');
const getBtcRate = require('./lib/rater');

const routes = require('./app/routes/routes');
const secureRoute = require('./app/routes/secure');
const UserRepository = require('./app/repository/user.repository');

const {filePath, fileName} = require('./app/config/database')();
const {port = 8000} = require('./app/config/server')();
const dbPath = path.join(__dirname, filePath, fileName);

const app = express();
const db = new Database(dbPath);
const userRepository = new UserRepository(db);

require('./lib/auth')(userRepository);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/btcRate', passport.authenticate('jwt', { session: false }), secureRoute);

app.use(function(err, req, res, next) {
    console.log({ error: JSON.stringify(err.message)});
    res.status(err.status || 500);
    res.json({ error: JSON.stringify(err.message) });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

