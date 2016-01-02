import Gitter from '../lib/gitter';
import chai from 'chai';

let gitter = new Gitter();

const expect = chai.expect;
chai.should();

describe('Gitter', () => {
    describe('init', () => {
       it('inits the repo', () => {
           let result = gitter.initRepo();
           expect(result).to.be.true;
       });
    });
});