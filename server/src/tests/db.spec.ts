import 'mocha';
import {expect} from 'chai';
import request from 'request';
import { appGetRouter } from '../routes/get';

const url = 'http://localhost:8081/'


describe('CRUD - GET', () => {
    it("Consultar a todos los productos", () => {
        appGetRouter.get(url + 'products?type=Pescados', (req, res) => {
            expect(res.statusCode).to.equal(500)
        });
    });
    it("Consultar a todos los productos - falla", () => {
        appGetRouter.get(url + 'products?type=Pescados', (req, res) => {
            expect(res.statusCode).to.equal(200)
        });
    });
    it("Consultar a algun producto a la bbdd - busqueda", () => {
        appGetRouter.get(url + 'productSearch?name=NARANJA', (req, res) => {
            expect(res.statusCode).to.equal(200)
        });
    });
    it("Consultar a algun producto a la bbdd - busqueda - falla", () => {
        appGetRouter.get(url + 'productSearch?name=NARANJAA', (req, res) => {
            expect(res.statusCode).to.equal(500)
        });
    });
    it("Consultar a un prodcuto a la bbdd", () => {
        appGetRouter.get(url + 'product?name=NARANJAA', (req, res) => {
            expect(res.statusCode).to.equal(500)
        });
    });
    it("Consultar a un usuario devuelve estado 200", () => {
        appGetRouter.get(url + 'files?email=NARANJA', (req, res) => {
            expect(res.statusCode).to.equal(200)
        });
    });
    it("Consultar a una imagen", () => {
        appGetRouter.get(url + 'users?email=abc@gmail.com', (req, res) => {
            expect(res.statusCode).to.equal(200)
        });
    });
    it("Consultar a un usuario con email", () => {
        request(url + 'users?email=abc@gmail.com', (req, res) => {
            expect(res.body).to.equal('abc@gmail.com')
        });
    });
    it("Response estatus to be equal 200", () => {
        request(url + 'users?email=abc@gmail.com', (req, res) => {
            expect(res.statusCode).to.equal(200)
        });
    });
    it("Usuario existe, devuelve 200", () => {
        request(url + 'pedido?email=abc@gmail.com', (req, res) => {
            expect(res.statusCode).to.equal(200)
        });
    });
    it("Email no existe, falla la consulta 400", () => {
        request(url + 'pedido?email=abcd@gmail.com', (req, res) => {
            expect(res.statusCode).to.equal(400)
        });
    });
    it("Consultar un producto devuelve 200", () => {
        request(url + 'product?name=NARANJA', (req, res) => {
            expect(res.statusCode).to.equal(200)
        });
    });
    it("Consultar un producto que no exite", () => {
        request(url + 'product?name=MELON', (req, res) => {
            expect(res.statusCode).to.equal(404)
        });
    });
});