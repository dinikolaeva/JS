function requestValidator(someObj) {

    if (someObj.method != 'GET' && someObj.method != 'POST' &&
        someObj.method != 'DELETE' && someObj.method != 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    }

    if ((!(/^([a-zA-Z0-9\.]+|\*)$/g).test(someObj.uri)) || someObj.uri === undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (someObj.version != 'HTTP/0.9' && someObj.version != 'HTTP/1.0' &&
        someObj.version != 'HTTP/1.1' && someObj.version != 'HTTP/2.0') {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!/^[^<>\\&'"]*$/gm.test(someObj.message) || someObj.message === undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return someObj;
};

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));

console.log(requestValidator({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}));