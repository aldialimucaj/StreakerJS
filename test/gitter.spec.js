import Gitter from '../src/gitter';
import chai from 'chai';
import fs from 'fs';
import fse from 'fs-extra';

let gitter = new Gitter();

const TEST_REPO = "./test/test_repo";
const expect = chai.expect;
const assert = chai.assert;
chai.should();

describe('Gitter', () => {
    describe('init', () => {
        it('inits the repo', (done) => {
            
            gitter.initRepo(TEST_REPO).then(
                (repo) => {
                    expect(repo).to.exist;
                    fs.stat(TEST_REPO, function (err, stats) {
                        expect(stats.isDirectory()).to.be.true;
                        expect(err).to.be.null;
                        if(!err && stats) fse.removeSync(TEST_REPO);
                        
                        done();
                    });
                },
                (err) => {
                    assert.notOk('inits the repo', err);
                });
        });
    });
});