function solution() {
    let resultStr = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(appString) {
        resultStr += appString;
    }

    function removeStart(n) {
        resultStr = resultStr.slice(n);
    }

    function removeEnd(n) {
        resultStr = resultStr.slice(0, -n);
    }

    function print() {
        console.log(resultStr);
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();