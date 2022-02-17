const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    process.exit(1)
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});

const obj = {
    hello: function () {
        console.log('Hello World!');
    }
};

class A {
    foo() {
        console.log('Hello World!');
    }
}
