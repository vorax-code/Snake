function jogar(){
    tela.desenhar();
    cobra.desenhar();
    placar.desenhar();
    maca.desenhar();
    cobra.mover();
    if (maca.teveColisao(cobra)){
        trilha.tocar('cobraComeu');
        placar.pontuacao+=10;
        maca = new Maca();
    }
    if (cobra.vida > 0)
        requestAnimationFrame(jogar);
    else{
        trilha.tocar('fimJogo');
        placar.nomeJogo="Fim de Jogo"
        placar.desenhar();
    }
}
let maca = new Maca();
let trilha = new TrilhaSonora();
jogar();

document.addEventListener("keydown", (evento)=> {
    if (evento.key == 6 ) cobra.direcao = "direita";
    if (evento.key == 2 ) cobra.direcao = "baixo";
    if (evento.key == 8 ) cobra.direcao = "cima";
    if (evento.key == 4 ) cobra.direcao = "esquerda";
})