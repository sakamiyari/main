var a=document.getElementById("tan")
console.log(a);
function osita(){
    var deme=[];
    var irekae;
    for (var i=1;i<=10;i++){
        var ransuu=Math.floor(Math.random()*800);
        deme[i]=ransuu;
    }
    //ソートする
    for (var i=10;i>=1;i--){
        for(var j=1;j<=9;j++){
            if (deme[j]>deme[j+1]){
                irekae=deme[j+1]
                deme[j+1]=deme[j];
                deme[j]=irekae;
            }
        }
    }
    //ソートして3番目の数字が500以下だとレア度3以下
    var lealist=["プクリン","ジュプトル","ムンナ","デンリュウ","サザンドラ","エーフィ、ブラッキー","ノコッチ、エモンガ","ビリジオン"];
    
    if (a.checked){
        console.log("単発")
        if(deme[3]<500){//レア度調整。数字を小さくするとレアなポケモンが当たりやすくなる。デフォルト500
            var sentaku=Math.ceil(Math.random()*(9));
            document.getElementById("a").innerHTML="レア度4以下でポケモンが:"+deme[sentaku];
            console.log(deme[sentaku])
        }else{
            var rearan=Math.ceil(Math.random()*(lealist.length-1));//レアなポケモンの選択になる
            document.getElementById("a").innerHTML="レア度5以上でポケモンが:"+lealist[rearan];
        }
    }else{
        console.log("10連")
        if(deme[3]<500){
            document.getElementById("a").innerHTML="レア度4以下でポケモンが:</br>"
            for(var i=1;i<=10;i++){
                var e=document.getElementById("a");
                var tuika=document.createElement("p");
                tuika.textContent=deme[i];
                e.appendChild(tuika);
            }
        }else{
            document.getElementById("a").innerHTML="レア度5以上でポケモンが:</br>"
            for(var i=1;i<=10;i++){
                var jyuurearen=Math.ceil(Math.random()*(lealist.length-1));//レアなポケモンの選択になる
                var e=document.getElementById("a");
                var tuika=document.createElement("p");
                tuika.textContent=lealist[jyuurearen]
                e.appendChild(tuika);
                console.log("10連")
            }
    }
}
}