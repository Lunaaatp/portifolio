
// MENU PARA CELULAR
const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        menuMobile.textContent = "✕";
        menuMobile.setAttribute("aria-label", "Fechar menu");
    } else {
        menuMobile.textContent = "☰";
        menuMobile.setAttribute("aria-label", "Abrir menu");
    }
});

// FECHAR MENU AO CLICAR EM UM LINK
const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        menuMobile.textContent = "☰";
        menuMobile.setAttribute("aria-label", "Abrir menu");
    });
});

// ALTERNAR TEMA CLARO E ESCURO
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botaoTema.textContent = "☀";
        botaoTema.setAttribute("aria-label", "Ativar tema claro");
    } else {
        botaoTema.textContent = "☾";
        botaoTema.setAttribute("aria-label", "Ativar tema escuro");
    }
});

// ATUALIZAR ANO AUTOMATICAMENTE
const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();
