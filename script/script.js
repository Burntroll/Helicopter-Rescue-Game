function start() {

	$("#inicio").hide(); // O hide é um comando Jquery
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");
    // A div está sendo chamada com $ por conta do Jquery

    // Variáveis do jogo

    var jogo = {};
    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    };
        
    jogo.pressionou = [];

    //Verifica se o usuário pressionou alguma tecla	

    $(document).keydown(function(e) {
    jogo.pressionou[e.which] = true;
    });
    
    $(document).keyup(function(e) {
    jogo.pressionou[e.which] = false;
    });
    
    // Game Loop

    jogo.timer = setInterval(loop,30);

    function loop() {

    movefundo();
    movejogador();
    moveinimigo1();

    }

    // Função que movimenta o jogo

    function movefundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
        
    }

    // Função que movimenta o jogador

    function movejogador() {

    if (jogo.pressionou[TECLA.W]) {
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo-10);

        if (topo<=10) {
            $("#jogador").css("top",topo+10);
        }
    
    }
    
    if (jogo.pressionou[TECLA.S]) {
        
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo+10);
        
        if (topo>=434) {
            $("#jogador").css("top",topo-10);
        }
    }
    
    if (jogo.pressionou[TECLA.D]) {
        
        //Chama função Disparo	
    }
    }

    // Função que movimenta o inimigo

    function moveinimigo1() {

        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);
            
            if (posicaoX<=0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
                
            }
    
    }
    
    


}
