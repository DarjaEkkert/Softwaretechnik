function zeigeBuch() {

    const buecher = [
        "Harry Potter",
        "Der Hobbit",
        "Die Tribute von Panem",
        "Outlander",
        "Pachinko",
        "The Book of Doors",
        "Fourth Wing",
        "Circe",
        "Das unsichtbare Leben der Addie LaRue",
        "Die Mitternachtsbibliothek"
    ];

    const zufall = Math.floor(Math.random() * buecher.length);

    document.getElementById("ausgabe").innerText =
        buecher[zufall];
}