class TrilhaSonora {
    constructor(){
        this.jogandoJogo = new Audio();
        this.jogandoJogo.src= "trilha.mp3";
        this.cobraComeu = new Audio();
        this.cobraComeu.src= "comida.mp3";
        this.fimJogo = new Audio();
        this.fimJogo.src= "gameover.mp3";
    }
    tocar(trilha){
        if (trilha == "jogandoJogo") this.jogandoJogo.play();
        if (trilha == "cobraComeu")  this.cobraComeu.play();
        if (trilha == "fimJogo")  this.fimJogo.play();
    }
}