function hello(x) {
    return x * 2;
}
hello(12);
// void return이 없을 경우 사용한다.
//  실수로 뭔가 return 하는 걸 예방할 수 있다.
function hello2(x) {
    1 + 1;
}
//타입지정된 파라미터는 필수다.
hello2(2);
// 파라미터 변수? :타입 파라미터 선택으로 만들기
// 변수? :number === 변수 :number|undefined
function hello3(x) {
    // console.log(x + 3) 안되는 이유 엄격해서
}
// 이렇게 확실하게 작성해줘야함
function hello4(x) {
    if (typeof (x) === 'number') {
        console.log(x + 3);
    }
}
function helloName(name) {
    if (typeof (name) === 'string') {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log("\uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
}
helloName('홍길동');
helloName();
function countNumber(x) {
    if (typeof (x) === 'string') {
        return x.length;
    }
    else if (typeof (x) === 'number') {
        return String(x).length;
    }
}
countNumber(12);
function areuSure(money, house, charm) {
    var count = 0;
    count += money;
    if (house === true)
        count += 500;
    if (charm === '상')
        count += 100;
    if (count >= 600)
        return "결혼가능";
}
areuSure(700, true, '상');
