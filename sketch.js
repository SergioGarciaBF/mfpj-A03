function setup() {
    // Set the canvas size 
    createCanvas(400, 400);
  }
     
  function draw() {
      
    var ax = 0;  
    var ay = 0;
    
    var bx = 300;
    var by = 300;
    
    var cx = 100;
    var cy = 300;
    
    var dx = 300;
    var dy = 100;
    
    //Encontrar os coeficientes das equações das retas:
    //Equação geral da reta = ax + by + c = 0
    aAB = ay - by;
    bAB = bx - ax;
    cAB = ax*by - ay*bx;
    
    aCD = cy - dy;
    bCD = dx - cx;
    cCD = cx*by - cy*dx;
    
    // Cor padrão de fundo:
    background(220);
        
    // Definir peso da aresta (apenas pra melhorar a visualização)
    strokeWeight(2);
        
    // Desenhar linhas:
    line(ax, ay, bx, by);
    line(cx, cy, dx, dy);
  }