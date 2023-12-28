function hello(x : number) : number {
    return x * 2
}

hello(12)

// void return이 없을 경우 사용한다.
//  실수로 뭔가 return 하는 걸 예방할 수 있다.
function hello2(x? : number) : void{
    1 + 1
}

//타입지정된 파라미터는 필수다.
hello2(2)

// 파라미터 변수? :타입 파라미터 선택으로 만들기

// 변수? :number === 변수 :number|undefined


function hello3(x:number | string) : void{
    // console.log(x + 3) 안되는 이유 엄격해서
}
// 이렇게 확실하게 작성해줘야함
function hello4(x:number | string) : void{
    if(typeof(x) === 'number'){
        console.log(x + 3)
    }
}

function helloName(name? :string) : void{
    if(typeof(name) === 'string'){
        console.log(`안녕하세요 ${name}`)
    }else{
        console.log(`이름이 없습니다.`)
    }
}

helloName('홍길동')
helloName()

function countNumber(x:string|number){
    if(typeof(x) === 'string'){
        return x.length
    }else if(typeof(x) === 'number'){
        return String(x).length
    }
}

countNumber(12)

function areuSure(money:number, house:boolean, charm:string) :string|void{
    let count:number = 0
    count+= money
    if(house === true) count+= 500
    if(charm === '상') count += 100
    if(count >= 600) return "결혼가능"
}

areuSure(700, true, '상')