import Gitter from '../src/gitter';
import chai from 'chai';
import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';

let gitter = new Gitter();

const TEST_REPO = "./test/test_repo";
const WORKING_FILE = 'striker.txt';
const expect = chai.expect;
const assert = chai.assert;
chai.should();

describe('Gitter', () => {
    
    /* ========================================================================== */
    describe('initRepo()', () => {
        it('inits the repo', (done) => {
            //clean_up before test
            if (fs.exists(TEST_REPO)) fse.removeSync(TEST_REPO);
            
            gitter.initRepo(TEST_REPO).then(
                (repo) => {
                    expect(repo).to.exist;
                    fs.stat(TEST_REPO, function (err, stats) {
                        console.log('pre done');
                        
                        expect(stats.isDirectory()).to.be.true;
                        expect(err).to.be.null;
                        // delete the repo if successful
                        if (!err && stats) fse.removeSync(TEST_REPO);

                        done();
                    });
                },
                (err) => {
                    console.log('1' +err);
                    expect(false).to.be.true;
                    done();
                });
        });
        
        /* ========================================================================== */
        it('does not init the repo with wrong path', () => {

            gitter.initRepo('A:/cant_write').then(
                (repo) => {
                    expect(repo).to.exist;
                    fs.stat(TEST_REPO, function (err, stats) {
                        expect(stats).to.be.null;
                        expect(err).to.exist;
                    });
                },
                (err) => {
                    assert.notOk('inits the repo', err);
                });
        });

    });
    
    /* ========================================================================== */
    describe('commit', () => {
        it('does commit changes', () => {
            gitter.initRepo(TEST_REPO).then(() => {
                fse.writeFile(path.join(TEST_REPO, WORKING_FILE), "fileContent");

                gitter.commit().then(
                    (success) => {
                        expect(success).to.be.an('object');
                    },
                    (fail) => {
                        expect(fail).to.be.null;
                    });
            });
        })
    });
});