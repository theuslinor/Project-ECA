document.addEventListener("DOMContentLoaded", function () {
    var btnTopo = document.getElementById("btnTopo");
    var homeSection = document.getElementById("home");

    // Mostrar o botão quando rolar para baixo da seção #home
    window.addEventListener("scroll", function () {
        if (window.scrollY > homeSection.offsetHeight) {
            btnTopo.classList.add("show");  // Adiciona a classe que ativa a animação
        } else {
            btnTopo.classList.remove("show");  // Remove a classe para esconder o botão
        }
    });

    // Rolagem suave para o topo
    btnTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
