const path = require('path');
const supertest = require('supertest');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const td = require('testdouble');
const tdChai = require('testdouble-chai');

chai.use(sinonChai);
chai.use(tdChai(td));

global.expect = chai.expect;
global.assert = chai.assert;
global.sinon = sinon;
global.path = path;
global.resolve = path.resolve;
global.load = file => require(path.resolve(file));
global.chai = chai;
global.supertest = supertest;
global.td = td;
