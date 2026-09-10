// Knop uit de HTML ophalen
const btnStatement = document.querySelector(".btn");

console.log(btnStatement);
// Tekst veranderen wanneer op de knop wordt geklikt
btnStatement.addEventListener("click", function () {

    // Controleert welke tekst momenteel op de knop staat
    if (btnStatement.innerHTML === "Open Statement") {

        // Verandert de HTML-tekst
        btnStatement.innerHTML = "Statement Opened";

        // Verandert de CSS-kleur
        btnStatement.style.color = "#ffcccc";
        btnStatement.style.background = "#731f1f";

    } else {

        // Verandert de HTML-tekst opnieuw
        btnStatement.innerHTML = "Open Statement";

        // Verandert de CSS-kleur opnieuw
        btnStatement.style.color = "#731f1f";
        btnStatement.style.backgroundColor = "#ffcccc";
    }
});

// Tekstkleur veranderen wanneer je over de knop hovert
btnStatement.addEventListener("mouseenter", function () {
    btnStatement.style.color = "#731f1f";
});

// Kleur terugzetten wanner je de knop verlaat
btnStatement.addEventListener("mouseleave", function () {
    btnStatement.style.color = "#731f1f";

    if (btnStatement.innerHTML === "Statement Opened") {
        btnStatement.style.color = "#ffcccc";
    } else {
        btnStatement.style.color = "#731f1f";
    }
});