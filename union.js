// 숫자 or 문자가 가능한 array / object 타입 지정은?
var array = [1, '2', 3];
var object = { a: 123 };
// any를 쓰면 타입스크립트를 쓰는 의미가 없기 때문에 지양해야한다.
var 이름;
이름 = 123;
이름 = true;
// 대신 사용하고 싶다면 unknown type을 써주자.
var user = 'kim';
var age1 = undefined;
var married = false;
var 철수 = [user, age1, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
