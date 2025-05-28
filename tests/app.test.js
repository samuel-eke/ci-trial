const request = require("supertest");
const express = require("express");

const app = express();
app.get('/', (req, resp) => {
    resp.send("CI/CD live preview with Prof, Doyin and Melvin");
});

describe('GET /', ()=>{
    it("should return greeting", async ()=> {
        const res = await request(app).get('/');
        expect(res.text).toBe('CI/CD live preview with Prof, Doyin and Melvin');
    });
});
