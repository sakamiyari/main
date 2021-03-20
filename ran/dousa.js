var yomikomi=document.getElementById("hyouji");
var kensaku=document.getElementById("sarth");
var botanname=document.getElementById("name");
var ransuu=Math.floor(Math.random()*898);
function osita(){
    botanname.value="再挑戦"
    var ransuu=Math.floor(Math.random()*898);
    yomikomi.innerHTML=ransuu;
    kensaku.href="https://zukan.pokemon.co.jp/detail/"+ransuu
    kensaku.innerHTML="その番号のポケモンを検索する!!"
    
}
