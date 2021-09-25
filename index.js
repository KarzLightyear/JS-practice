//変数…書き換えができる
//varよりもlet,constが主流
let fire = 'Hello World!';
// fire = 'Hello World2!!';

//定数…書き換えができない
const water = 'He..llo World!';

//配列…カウントは[0]から始まる
let wind = ['ワン','ツー','スリー','フォーーー']

//ループ文…繰り返し処理,配列と組み合わせて使うこともできる
// let index = 0;
// while(index < wind.length){
//   // 繰り返したい命令
//   console.log(wind[index]);
//   index++;
// }

//if / else文
// if(wind.length > 5){
//   console.log('ファイア！！')
// } else {
//   console.log('ファイ')
// }

//関数…アロー関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(wind.length > arg){
  console.log('ファイアーーー！！')
  } else {
    console.log('ファイ...')
  }
};

//オブジェクト
const thunder = {
  color: 'yellow',
  size: 'large',
  purfume: 'mint',
  rain: () => {
    console.log('Hello World')
  }
};

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  window.alert('Hello World!!');
});
// JSにもともと入っているオブジェクトとして
// window…画面の幅,高さを調べたりできる
// document…表示しているページ全体のオブジェクト,ボタンの配列を引っ張ってきたり出来る
// event…ユーザーがアクションしたタイミングで何かをしたい時に使う