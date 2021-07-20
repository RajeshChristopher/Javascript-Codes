function rot13(str){
    var g =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var a = str.split("");
    //console.log(a);
    for(var i=0;i<a.length;i++){
        for(var j=0;j<g.length;j++){
            if(a[i]==g[j]){
                //console.log(j)
                if(j<13){
                    j+=13;
                    a[i] = g[j];
                }else if(j>=13){
                    a[i] = g[j-13];
                }
            }
        }
    }
    //console.log(a);
    var b = a.join("");
    console.log(b);
    return b;
}

rot13("SERR CVMMN!");