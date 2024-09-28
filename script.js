function toggleMode() {
  // adicionar a classe 'light'
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light');
  // } else {
  //   html.classList.add('light');
  // }

  // alterar imagem e descrição perfil
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos com lentes escuras e casaco preto, sem barba e fundo degradê, de lilás a azul pastel."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos com lentes transparentes e casaco preto, sem barba e fundo degradê, de lilás a azul pastel."
    )
  }
}
