import 'mocha';
import {expect} from 'chai';
import { appGetRouter } from '../routes/get';

const url = 'http://localhost:8081/'

// console.log = function() {};

describe('CRUD - UPDATE', () => {
    it("Modificar un producto mediante un query string", () => {
        appGetRouter.patch(url + 'products?name=NARANJA', (req, res) => {
            expect(res.statusCode).to.equal(200)
        });
    });
    it("Actualizar la compra de un usuario", () => {
        appGetRouter.patch(url + 'pedido', (req, res) => {
            expect(res.statusCode).to.equal(400)
        });
    });
    it("Modificar la compra de un usuario", () => {
        appGetRouter.patch(url + 'products', (req, res) => {
            expect(res.statusCode).to.equal(400)
        });
    });
});