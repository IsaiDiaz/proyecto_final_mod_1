var express = require('express');
var path = require('path');

var usersRouter = require('./routes/user.routes');
var tasksRouter = require('./routes/task.routes');

const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', usersRouter);
app.use('/api', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

