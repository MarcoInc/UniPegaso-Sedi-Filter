// ==UserScript==
// @name     UniPegaso Sedi Esami Filter
// @match    https://lms-courses.pegaso.multiversity.click/main/reservation/student/my_exam_journal.php
// @grant    none
// @author   MarcoInc
// @description Filtraggio per luogo, anno accademico e tipologia di esame
// @version 1.1.1
// @run-at   document-end
// @license MIT
// @namespace https://greasyfork.org/users/564300
// ==/UserScript==

// Seleziona il pulsante Seleziona tutti
var buttonAll = document.querySelector('#select_all_code');

// Aggiungi un event listener al pulsante
buttonAll.addEventListener('click', function() {
    setTimeout(()=>{
    // Ottieni tutte le righe della tabella
        var righe = document.querySelectorAll('.container_exam tbody tr');
        // Crea il modulo
        var form = document.createElement('form');
        if (!document.querySelector('.formFilter')) {

            form.classList.add("formFilter");

            form.innerHTML = `
                                <label for="tipoProva">Tipo di prova:</label><br>
                                <input type="text" id="tipoProva" name="tipoProva"><br>
                                <label for="anno">Anno:</label><br>
                                <input type="text" id="anno" name="anno" placeholder="20XX/20XX"><br>
                                <label for="luogo">Luogo:</label><br>
                                <input type="text" id="luogo" name="luogo"><br>
                                <input type="submit" value="Filtra">
                            `;

            // Seleziona l'elemento prima del quale inserire il modulo
            var header = document.querySelector('.contenitore-sezione');

            // Inserisci il modulo prima dell'elemento selezionato
            header.parentNode.insertBefore(form, header);
        }
        // Aggiungi un event listener al modulo
        form.addEventListener('submit', function(event) {
            // Prevent the form from being submitted normally
            event.preventDefault();

            // Get the input values
            var tipoProva = document.getElementById('tipoProva').value.toUpperCase();
            var anno = "Anno Accademico: "+document.getElementById('anno').value.toUpperCase();
            var luogo = document.getElementById('luogo').value.toUpperCase();
            // Filter the rows
            righe.forEach(function(riga) {
                var colonne = riga.querySelectorAll('td');
                var anno = document.getElementById('anno').value.toUpperCase();
                // Verifica se la riga corrisponde ai criteri di ricerca
                var corrispondeTipoProva = tipoProva ? colonne[4].textContent.trim().toUpperCase().includes(tipoProva) : true;
                var corrispondeAnno = anno ? colonne[1].textContent.trim().toUpperCase().includes(anno) : true;
                var corrispondeLuogo = luogo ? colonne[3].textContent.trim().toUpperCase().includes(luogo) : true;

                // Mostra o nasconde la riga in base alla corrispondenza con i criteri di ricerca
                riga.style.display = (corrispondeTipoProva && corrispondeAnno && corrispondeLuogo) ? '' : 'none';
            });
        });
    },500);
});

// Seleziona tutti i pulsanti con la classe "button_course"
var buttonMateria = document.querySelectorAll('.button_course');

// Aggiungi un event listener a ciascun pulsante
buttonMateria.forEach(function(button) {
    button.addEventListener('click', function() {
        setTimeout(()=>{
            // Ottieni tutte le righe della tabella
            var righe = document.querySelectorAll('.container_exam tbody tr');
            // Crea il modulo
            var form = document.createElement('form');
            if (!document.querySelector('.formFilter')) {

            form.classList.add("formFilter");

            form.innerHTML = `
                                <label for="tipoProva">Tipo di prova:</label><br>
                                <input type="text" id="tipoProva" name="tipoProva"><br>
                                <label for="anno">Anno:</label><br>
                                <input type="text" id="anno" name="anno"><br>
                                <label for="luogo">Luogo:</label><br>
                                <input type="text" id="luogo" name="luogo"><br>
                                <input type="submit" value="Filtra">
                            `;

            // Seleziona l'elemento prima del quale inserire il modulo
            var header = document.querySelector('.contenitore-sezione');

            // Inserisci il modulo prima dell'elemento selezionato
            header.parentNode.insertBefore(form, header);
            }

            // Aggiungi un event listener al modulo
            form.addEventListener('submit', function(event) {
                // Prevent the form from being submitted normally
                event.preventDefault();

                // Get the input values
                var tipoProva = document.getElementById('tipoProva').value.toUpperCase();
                var anno = "Anno Accademico: "+document.getElementById('anno').value.toUpperCase();
                var luogo = document.getElementById('luogo').value.toUpperCase();
                // Filter the rows
                righe.forEach(function(riga) {
                    var colonne = riga.querySelectorAll('td');
                    var anno = document.getElementById('anno').value.toUpperCase();
                    // Verifica se la riga corrisponde ai criteri di ricerca
                    var corrispondeTipoProva = tipoProva ? colonne[4].textContent.trim().toUpperCase().includes(tipoProva) : true;
                    var corrispondeAnno = anno ? colonne[1].textContent.trim().toUpperCase().includes(anno) : true;
                    var corrispondeLuogo = luogo ? colonne[3].textContent.trim().toUpperCase().includes(luogo) : true;

                    // Mostra o nasconde la riga in base alla corrispondenza con i criteri di ricerca
                    riga.style.display = (corrispondeTipoProva && corrispondeAnno && corrispondeLuogo) ? '' : 'none';
                });
            });
        },500);
    });
});


var buttonDeselezionaAll = document.querySelector('#deselect_all_code');

// Aggiungi un event listener al pulsante
buttonDeselezionaAll.addEventListener('click', function() {
    location.reload()
});