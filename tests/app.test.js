const request = require("supertest");
const express = require("express");

const app = express();
app.get('/', (req, resp) => {
    resp.send("CI/CD express setup");
});

describe('GET /', ()=>{
    it("should return greeting", async ()=> {
        const res = await request(app).get('/');
        expect(res.text).toBe('CI/CD express setup');
    });
});
