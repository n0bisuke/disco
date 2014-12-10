var milkcocoa = new MilkCocoa("https://io-uhzjw2rm2.mlkcca.com");
/* your-app-id にアプリ作成時に発行される"io-"から始まるapp-idを記入します */
var chatDataStore = milkcocoa.dataStore("chat");

chatDataStore.on("push",function(data){
    // $.ajax({
    //   url: 'https://lr.capio.jp/webapis/iminos/synana/1_1/index.php?sent=%22'+data.value.message+'%22',
    // }).done(function(data){
    //   console.log(data);
    //   // (data) => resultHandler(data);
    //   addJthree(data.value.message);
    //   // var user_data = JSON.parse(localStorage.user); //ユーザーデータ取得
    //   // //インセンティブを保存
    //   // user_data.user.incentive = unique_push(user_data.user.incentive, data.response);
    //   // user_data.user.incentive_all = unique_push(user_data.user.incentive_all, data.response);

    //   // localStorage.user = JSON.stringify(user_data); //ユーザーデータ保存
    //   // console.log(user_data);
    //   // fn(data.response);
    // }).fail(function(data){
    //   // alert('error!!!');
    // });
     addJthree(data.value.message);

});

function addJthree(mes){
  console.log('じぇいすりー',mes);
  text.push(mes);
}

//https://lr.capio.jp/webapis/iminos/h/pdfs/xg_syn_webapi1_1.pdf

//setInterval("cocoaSend()",10000);
// function rand(num){
//   return parseInt(Math.random()*num);
// }

// function cocoaSend(){
//   var colors = ['red', 'pink', 'green', 'yellow'];
//   var color = colors[rand(3)];
//  chatDataStore.send({message : color},function(data){
//     console.log("送信完了!", color);
//  });
// }

//チョコレイトディスコ
setTimeout("change('bg-intro')",100);
setTimeout("change('bg-choco')",8000);
setTimeout("change('bg-disco')",23000);
setTimeout("change('bg-girl')",38000); //計算♪
setTimeout("change('bg-valentine')",54000); //バレンタイン♪
setTimeout("change('bg-please')",68000); //
setTimeout("change('bg-choco')",83000); //
setTimeout("change('bg-disco')",98000); //
setTimeout("change('bg-girl')",113000); //計算♪
setTimeout("change('bg-please')",129000); //
setTimeout("change('bg-choco')",143000); //
setTimeout("change('bg-cmero')",158000); //cメロ
setTimeout("change('bg-choco')",175000); //
setTimeout("change('bg-disco')",190000); //
setTimeout("change('bg-disco-c')",206000); //
setTimeout("change('bg-finish')",227000); //

/*色分け*/
function change(color){
 chatDataStore.send({message : color},function(data){
    console.log("送信完了!", color);
    if(color == 'bg-choco'){
        jThree('light:eq(1)').css('light-color', '#ffffff');
    }else{
        jThree('light:eq(1)').css('light-color', '#afafaf');
    }
 });
}