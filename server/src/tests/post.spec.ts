import 'mocha';
import {expect} from 'chai';
import { appGetRouter } from '../routes/get';

const url = 'http://localhost:8081/'

// console.log = function() {};

describe('CRUD - POST', () => {
    it("No hay informacion de usuario, devuelve error", () => {
        appGetRouter.post(url + 'register', (req, res) => {
            expect(res.statusCode).to.equal(400)
        });
    });
    it("Inicio de sesion", () => {
        appGetRouter.post(url + 'login', (req, res) => {
            expect(res.statusCode).to.equal(403)
        });
    });
    it("Añadir un producto", () => {
        appGetRouter.post(url + 'products', (req, res) => {
            expect(res.statusCode).to.equal(400)
        });
    });
});