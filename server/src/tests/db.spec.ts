import 'mocha';
import {expect} from 'chai';
import request from 'request';

const url = 'http://localhost:8081/'


describe('CRUD - GET', () => {
    it("Consultar a un usuario", () => {
        request(url + 'users?email=abc@gmail.com', (req, res) => {
            expect(res.body).to.equal('abc@gmail.com')
            // expect(req.query.email).to.equal('abc@gmail.com');
        });
    });
    it("Response estatus to be equal 200", () => {
        request(url + 'users?email=abc@gmail.com', (req, res) => {
            expect(res.statusCode).to.equal(200)
            // expect(req.query.email).to.equal('abc@gmail.com');
        });
    });
    it("Usuario existe, devuelve 200", () => {
        request(url + 'pedido?email=abc@gmail.com', (req, res) => {
            expect(res.statusCode).to.equal(200)
            // expect(req.query.email).to.equal('abc@gmail.com');
        });
    });
    it("Email no existe, falla la consulta 400", () => {
        request(url + 'pedido?email=abcd@gmail.com', (req, res) => {
            expect(res.statusCode).to.equal(400)
            // expect(req.query.email).to.equal('abc@gmail.com');
        });
    });
    it("Consultar un producto devuelve 200", () => {
        request(url + 'product?name=NARANJA', (req, res) => {
            expect(res.statusCode).to.equal(200)
            // expect(req.query.email).to.equal('abc@gmail.com');
        });
    });
    it("Consultar un producto que no exite", () => {
        request(url + 'product?name=MELON', (req, res) => {
            expect(res.statusCode).to.equal(404)
        });
    });
});