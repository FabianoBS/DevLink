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
    img.setAttribute("alt", "")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "")
  }
}
