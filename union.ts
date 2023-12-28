// 숫자 or 문자가 가능한 array / object 타입 지정은?
let array :(number | string)[] = [1,'2', 3]
let object : {a :string | number} = {a : 123}

// any를 쓰면 타입스크립트를 쓰는 의미가 없기 때문에 지양해야한다.
let 이름 :any;
이름 = 123;
이름 = true

// 대신 사용하고 싶다면 unknown type을 써주자.

let user : string = 'kim';
let age1 : undefined | number = undefined;
let married : boolean = false; 
let 철수 : (string|number|undefined|boolean)[]= [user, age1, married]; 

let 학교:{score:(number | boolean)[], teacher:string, friend:string|string[]} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]