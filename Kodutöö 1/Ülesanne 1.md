1. <noscript> tagide vahele pannakse (vea)teade juhuks, kui lehte külastava kasutaja brauser ei toeta/on ajutiselt peatatud JS.  Muul juhul noscript tagide vahel olevat sisu kasutajale ei kuvata(https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_noscript).
2. VanillaJS on tavaline puhas(raamistikevaba) JS. Nime VanillaJS kasutatakse naljana.
3. DOM - dokumendi objekti mudel(Document Object Model). DOM on eeskiri selle kohta, kuidas objekte (tekst, pildid, pealkirjad, lingid jne.) veebilehel esitada. DOM määrab ära, millised atribuudid kuuluvad millise objekti juurde ning kuidas objekte ja atribuute käsitleda. DOM esitab Html dokumenti, hierarhilise struktuuri-puuna. Sellesse kuuluvad Html elemendid, atribuudid ja tekst. DOM’ile vastavalt on kõik asjad Html dokumendis n.ö. liidesed (node).  https://www.metshein.com/unit/dom-document-object-model/
4. Scope determines the accessibility (visibility) of variables. 
Variables declared within a JavaScript function, become LOCAL to the function - local variables have Function scope: They can only be accessed from within the function. 
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions. Local variables are created when a function starts, and deleted when the function is completed.

A variable declared outside a function, becomes GLOBAL - A global variable has global scope: All scripts and functions on a web page can access it. 
5. https://www.javascripttutorial.net/es6/difference-between-var-and-let/
6. ECMAScript on JS ametlik nimi. ECMAScript on European Computer Manufacturers Association (ECMA) poolt standardiseeritud JS keel. (JavaScript was invented by Brendan Eich in 1995 and became an ECMA standard in 1997. ECMAScript is the official name of the language.)
7. JSON (JavaScript Object Notation) on andmevahetusformaat, mis on alternatiiv XML’le. Kuigi see põhineb Javascriptil, on see sõltumatu programmeerimiskeeltest. Nagu XML, on ka JSON lihtne tekstifail, mis hoiab andmeid organiseeritult. JSON on kergekaaluline, mis tähendab vähem teksti, paremat loetavust ning masina puhul kiiremat töötlemist.
{
    "students": [
        {
            "firstName": "Toomas",
            "lastName": "Teder",
        },
        {
            "firstName": "Toomas",
            "lastName": "Teder",
        },
        {
            "firstName": "Toomas",
            "lastName": "Teder",
        },
        {
            "firstName": "Toomas",
            "lastName": "Teder",
        },
        {
            "firstName": "Toomas",
            "lastName": "Teder",
        },
    ]
}
8. AJAX is a technique for creating fast and dynamic web pages. AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
For security reasons, modern browsers do not allow access across domains. This means that both the web page and the XML file it tries to load, must be located on the same server.
9. Scriptid body lõpus kiirendavad lehe laadimisaega - need laetakse viimasena.
Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.
10. Võimaldab lahtioleval lehel teksti manipuleerida.