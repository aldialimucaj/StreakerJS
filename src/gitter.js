import chalk from 'chalk';
import nodegit from 'nodegit';
import nodepath from 'path';
import Promise from 'promise';
import moment from 'moment';
import fs from 'fs';

const Repository = nodegit.Repository;
const Commit = nodegit.Commit;
const Signature = nodegit.Signature;
const Reference = nodegit.Reference;

const error = chalk.bold.red;
const success = chalk.bold.green;

const WORKING_FILE = 'striker.txt';

export default class Gitter {
    /**
     * @constructor
     * @param {Repository} repo - git repository
     */
    constructor(repo) {
        if (repo) {
            this._repo = repo;
        } 
    }
    
    /**
     * Initialize git repository
     * 
     * @param {string} path - path to create new git repo
     * @returns {promise}
     */
    initRepo(path = ".") {
        var self = this;
        return new Promise((fulfill, reject) => {
            let absPath = nodepath.resolve(path);
            if (fs.exists(absPath + "/.git")) {
                let err = "Repository already Exists";
                console.log(error(err));
                reject(err);
            } else {
                Repository.init(absPath, 0 /* isBare */).then((repository) => {
                    console.log(success('Repository was created successfully'));
                    fulfill(repository);
                }, (err) => {
                    console.log(error(err));
                    reject(err);
                });
            }

        });
    }
    
    /**
     * Commit changes to repository
     * 
     * @param {Date} date - date to commit
     */
    commit(date = moment()) {
        let repo = this._repo;
        let name = 'Aldi Alimucaj';
        let email = 'aldi.alimucaj@gmail.com';
        let time = date.unix();
        let offset = 0;
        let msg = 'Striker strikes again!';
        let filesToAdd = [WORKING_FILE];
        return new Promise((fulfill, reject) => {
            var signature = Signature.create(name, email, time, offset);
            repo.createCommitOnHead(filesToAdd, signature, signature, msg).then(
                (oid) => {
                    console.log(success('Changes were commited successfully'));
                    fulfill(oid);
                }, (err) => {
                    console.log(error(err));
                    reject(err);
                });
        });
    }
    
    /* ========================================================================== */

    get repo() {
        return this._repo;
    } 
    
    set repo(repository) {
        this._repo = repository;
        console.log("New Repo set to " + repository);
    }
}