const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})


var usersRouter = require('./routes/users');
var dairyRouter = require('./routes/dairy');
var credentialsRouter=require("./routes/credentials");


app.use('/dairy', dairyRouter);
app.use('/users', usersRouter);
app.use('/credentials',credentialsRouter);


app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
     res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;