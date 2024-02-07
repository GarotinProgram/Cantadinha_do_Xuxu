alert('Bora ver se consegue acertar o número a ser descoberto')
let NumeroSecreto = 16;
console.log(NumeroSecreto)
let palpite = prompt(`Está entre 0 e Milão`);
//se palpite = Número Secreto
if(palpite == NumeroSecreto){
    alert(`Rapaiz, tu é bom mesmo!! Acertou ${NumeroSecreto}`);
} else {
    if (NumeroSecreto > palpite) {
        alert(`BIXO RUIM DA PORRA!!! TENTA DE NOVO! É maior... MAIIOORR (que ${palpite})`)
    } else { 
    alert (`BIXO RUIM DA PORRA!!! TENTA DE NOVO! É menor... MENOOOR (que ${palpite})`) 
    }
}
