<script>
        // Date à laquelle le compte a rebour doit s'arrêter 
        var countDownDate = new Date("jan 05, 2022 08:00:00").getTime();

        // Mise à jour du compte à rebour toutes les 1 seconde
        var x = setInterval(function() {

        // récuperer la date et l'heure d'aujourd'hui 
        var now = new Date().getTime();

        // Trouver la distance entre maintenant et la date du compte à rebours
        var distance = countDownDate - now;

        // Calculs de temps pour les jours, heures, minutes et secondes
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Affiche le résultat dans un élément avec id="demo"
        document.getElementById("demo").innerHTML = days + "j " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // Si le compte à rebours est terminé, écrivez du texte
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
        }, 1000);
        </scri

