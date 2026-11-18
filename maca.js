class Maca extends ObjetoJogo {
     imagem = new Image();
     constructor(){
         super(30);
         this.imagem.src='maca.png';
         
         this.anguloCor = Math.floor(Math.random() * 360);
     }
     desenhar(){
         canvasCtx.save(); 
         canvasCtx.filter = `hue-rotate(${this.anguloCor}deg)`; 
         canvasCtx.drawImage(this.imagem,this.x,this.y
             ,this.tamanho,this.tamanho);
         canvasCtx.restore(); 
     }
 }