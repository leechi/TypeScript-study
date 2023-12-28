// 이름, 나이, 출생지역
const myName:string = 'leechi';
const age:number = 23;
const region:string = 'Gwangju'

// 가장 좋아하는 곡 가수이름
const likeSong :{song:string, singer:string} = {song:"Dream us", singer:"서목하" }

// 타입지정
type member={
    member:string[],
    days:number,
    started:boolean
}
let project:member = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}