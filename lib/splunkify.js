function formatTags(tagsArray) {
    if (!Array.isArray(tagsArray)) {
        tagsArray = [tagsArray];
    }

    return tagsArray.reduce((tags, curTag) => {
        return tags += `[${curTag}] `;
    }, '').trim();
}

function formatFields(fieldsObject) {
    return Object.entries(fieldsObject).reduce((string, [key, value]) => {
        return string += `${key}=${value} `;
    }, '').trim();
}

function splunkify(tagsArray, fieldsObject) {
    if (!Array.isArray(tagsArray)) {
        tagsArray = [tagsArray];
    }

    const tagsString = formatTags(tagsArray);

    const fieldsString = formatFields(fieldsObject);

    return `${tagsString} ${fieldsString}`;
}

exports.formatTags = formatTags;
exports.formatFields = formatFields;
exports.splunkify = splunkify;