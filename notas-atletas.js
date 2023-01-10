let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
 
   
   
  for (let i = 0; i < atletas.length; i++) {

   nomeDosAtletas = atletas.map(function(nomes){
          return nomes.nome
    })
      
   notasObtidas = atletas.map(function(notas){
          return notas.notas
      
    })

  
   
    // Calcula da media valida do atleta

      function calculaMediaValida() {

        let notasGerais = notasObtidas;

        // Organizando as notas
       let notasOrganizadas = notasGerais.sort(function comparaNumeros(a,b) {
          if(a==b) return 0;
          if(a<b) return -1;
          if(a>b) return 1;
        });

           
        //Eliminando a maior e menor nota
       let notasValidas = notasOrganizadas.slice(1,4);
  
     
        // Somar as notas  
        let somaNotasValidas = 0
        notasValidas.reduce(function(total,atual) {
              return total + atual;
        });
  
        // Calculo da media   
        let mediaValida = (somaNotasValidas / notasValidas.length).toFixed(2);
              return mediaValida;

      }  
      
  }
  
  
  
    console.log(`Atleta: ${nomeDosAtletas[0]}`);
    console.log(`Notas Obtidas: ${notasObtidas[0]}`);
    console.log(`Média Válida: ${mediaValida[0]}\n`);


    console.log(`Atleta: ${nomeDosAtletas[1]}`);
    console.log(`Notas Obtidas: ${notasObtidas[1]}\n`);

    console.log(`Atleta: ${nomeDosAtletas[2]}`);
    console.log(`Notas Obtidas: ${notasObtidas[2]}\n`);

    console.log(`Atleta: ${nomeDosAtletas[3]}`);
    console.log(`Notas Obtidas: ${notasObtidas[3]}\n`);


       


  
  
   
   


























   
   





   
   
   
   
   
   
   

   
