/*Dados dos números, devolver cuantos números IMPARES hay entre ellos*/

let contador = 0;
function impares(inicio,final)
{
    for(i=inicio; i<=final; i++)
    {
        if(i%2 != 0)
        {
            contador += 1
        }
    }
    console.log("Entre el número "+inicio+" y el número "+final+" hay "+contador+" números impares");
}

impares(1,100);