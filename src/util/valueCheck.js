function isNull(value) {
    if (value === null || typeof value === "undefined") {
        return true;
    }

    return false;
}

// empty : 0, null, undefined, {}, [], ''
function isEmpty(value) {
    // value = null || undefined
    if (isNull(value)) {
        return true;
    }

    // value = object || array || string
    if ((typeof value === "object" || typeof value === "string") && (value.length === 0 || Object.keys(value).length === 0)) {
        return true;
    }

    return false;
}

function isNumber(value) {
    if (isEmpty(value)) {
        return;
    }

    return typeof value === VALUE.NUMBER;
}

function isString(value) {
    if (isEmpty(value)) {
        return;
    }

    return typeof value === VALUE.STRING;
}

function isObject(value) {
    if (isEmpty(value) || Array.isArray(value)) {
        return;
    }

    return typeof value === VALUE.OBJECT;
}

function isArray(value) {
    if (isEmpty(value) || !Array.isArray(value)) {
        return;
    }

    return typeof value === VALUE.OBJECT;
}

export { isNull, isEmpty, isNumber, isString, isObject, isArray }