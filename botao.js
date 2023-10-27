window.onload=function () {
    //console.log("Teste")

    const botao = document.getElementById("img_button");
    const background_img = document.getElementById("img_background");
    const app = document.getElementById("app");

    botao.onclick = function(){
        background_img.style.display = 'none';
    }
  
    console.log(botao);
    console.log(background_img);
    console.log(app);
  };