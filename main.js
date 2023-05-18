const botao = document.querySelector("[data-botao]");
const lista = document.querySelector(".lista");

botao.addEventListener("click", () => {
  if (lista.style.display != "none") {
    lista.style.display = "none";
  } else {
    lista.style.display = "block";
  }
});