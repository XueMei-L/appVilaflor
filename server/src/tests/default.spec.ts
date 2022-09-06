/* eslint-disable @typescript-eslint/no-empty-function */
import 'mocha';
import {expect} from 'chai';
import request from 'request';

const url = 'http://localhost:8081/'

// console.log = function() {};

describe('CRUD - DEFAULT', () => {
    it("Default", () => {
        request(url + '123', (req, res) => {
            expect(res.statusCode).to.equal(501)
            // expect(req.query.email).to.equal('abc@gmail.com');
        });
    });
});