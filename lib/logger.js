const chalk = require('chalk');
const {formatTags, formatFields} = require('./splunkify');

class Logger {
    constructor(logger) {
        this.logger = logger || console;
    }

    _formatTags(tagsArray, type) {
        const existing = Array.isArray(tagsArray) ? tagsArray : [tagsArray];
        return [type, ...existing];
    }

    log(tagsArray, fields) {
        const tags = this._formatTags(tagsArray, 'log');
        this.logger.log(chalk.black.bgBlueBright(formatTags(tags)), chalk.blueBright(formatFields(fields)));
    }

    error(tagsArray, fields) {
        const tags = this._formatTags(tagsArray, 'error');
        this.logger.log(chalk.black.bgRed(formatTags(tags)), chalk.red(formatFields(fields)));
    }

    info(tagsArray, fields) {
        const tags = this._formatTags(tagsArray, 'info');
        this.logger.log(chalk.black.bgGreen(formatTags(tags)), chalk.green(formatFields(fields)));
    }

    warning(tagsArray, fields) {
        const tags = this._formatTags(tagsArray, 'warning');
        this.logger.log(chalk.black.bgYellow(formatTags(tags)), chalk.yellow(formatFields(fields)));
    }
}

module.exports = Logger;