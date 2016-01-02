import chalk from 'chalk';
import nodegit from 'nodegit'; 
import nodepath from 'path';
import Promise from 'promise';

const Repository = nodegit.Repository;
const error = chalk.bold.red;
const success = chalk.bold.green;

export default class Gitter {
    
    /**
     * @constructor
     * @param {string} repo - git repository
     */
    constructor(repo) {
        
    }
    
    /**
     * Initialize git repository
     * 
     * @param {string} path - path to create new git repo
     * @returns {promise}
     */
    initRepo(path = ".") {
        
        return new Promise((fulfill, reject) => {
            
            Repository.init(nodepath.resolve(path), 0 /* isBare */).then(function(repository) {
                // Use repository  
                console.log(success('Repository was created successfully'));
                fulfill();
            }, function(err) {
                console.log(error(err));
                reject(err);
            });
        
        });
        
        
    }
}