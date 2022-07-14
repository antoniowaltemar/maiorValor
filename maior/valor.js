function clique (){
    let n1= prompt("Digite um valor:");
    let n2= prompt("Digite o segundo valor:");
        if(n1 > n2){
            document.getElementById("total").innerHTML="Analisando os valores " +n1 +" e " +n2 +" o maior valor é "+n1;

        } else if(n2 > n1){document.getElementById("total").innerHTML="Analisando os valores " +n1 +" e " +n2 +" o maior valor é "+n2;

        }

}