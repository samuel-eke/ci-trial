const express = require("express")
const app = express()
const port = 3001;

app.get('/', (req, resp) => {
    resp.send("CI/CD live preview with Prof, Doyin and Melvin");
});

app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
})