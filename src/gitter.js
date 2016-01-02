import chalk from 'chalk';

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
     */
    initRepo(path = ".") {
        console.log(success('Repository was created successfuly'));
        
        return true;
    }
}