<?php
session_start();
$length = $_COOKIE["length"];
$found = 1;
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <link href="./CSS/main.css" rel="stylesheet" type="text/css">
    <title>Motus</title>
</head>

<body>

    <div id="motus_game_container">

        <!-- Première ligne -->
        <div id="row_1" class="trial">


            <!-- Show found letter-->
            <?php
            for ($i = 0; $i < $found; $i++) { ?>
                <div class="letter_container row_1_letter"></div>
            <?php } ?>

            <!-- Don't show found letter-->
            <?php

            for ($i = 0; $i < $length - $found; $i++) { ?>
                <div class=" letter_container"><input class="letter_input_container" placeholder="." type="text"
                        id="letter_input<?= $i ?>" maxlength="1"
                        onkeydown=" return /[a-zâîïûôêéèë]/i.test(event.key) && backTab('letter_input<?= $i - 1 ?>','letter_input<?= $i ?>', 'letter_input<?= $i + 1 ?>', '1')"
                        onkeyup=" autoTab('letter_input<?= $i - 1 ?>','letter_input<?= $i ?>', 'letter_input<?= $i + 1 ?>', '1')"
                        onfocus=" autoTab('letter_input<?= $i - 1 ?>','letter_input<?= $i ?>', 'letter_input<?= $i + 1 ?>', '1')">
                </div>
            <?php } ?>

        </div>
        <script>

            /// Auto Tab entre chaque input
            function autoTab(input0, input1, input2, length) {

                const key = event.keyCode || event.charCode;

                if (document.getElementById(input2)) {
                    if (document.getElementById(input1).value.length == length) {
                        document.getElementById(input2).focus();
                    }
                }
            }
            /// Retour en arrière après suppression
            function backTab(input0, input1, input2, length) {

                const key = event.keyCode || event.charCode;

                if (key == 8 && document.getElementById(input0)) {
                    if (document.getElementById(input1).value.length == 0) {
                        document.getElementById(input0).focus();
                    }
                }
            }

        </script>



        <!-- Deuxième ligne -->
        <div id="row_2" class="trial">

            <?php
            for ($i = 0; $i < $length; $i++) { ?>
                <div class="letter_container row_2_letter"></div>
            <?php } ?>

        </div>

        <!-- Troisième ligne -->
        <div id="row_3" class="trial">

            <?php

            for ($i = 0; $i < $length; $i++) { ?>
                <div class="letter_container row_3_letter"></div>
            <?php } ?>

        </div>

        <!-- Quatrième ligne -->
        <div id="row_4" class="trial">

            <?php

            for ($i = 0; $i < $length; $i++) { ?>
                <div class="letter_container row_4_letter"></div>
            <?php } ?>

        </div>

        <!-- Cinquième ligne -->
        <div id="row_5" class="trial">

            <?php

            for ($i = 0; $i < $length; $i++) { ?>
                <div class="letter_container row_5_letter"></div>
            <?php } ?>

        </div>

        <!-- Sixième ligne -->
        <div id="row_6" class="trial">

            <?php

            for ($i = 0; $i < $length; $i++) { ?>
                <div class="letter_container row_6_letter"></div>
            <?php } ?>

        </div>

        <!-- Septième ligne -->
        <div id="row_7" class="trial">

            <?php

            for ($i = 0; $i < $length; $i++) { ?>
                <div class="letter_container row_7_letter"></div>
            <?php } ?>

        </div>

        <div>
            <p id="result"></p>
        </div>

        <div style="margin-top:20px">

            <button type="button" id="game_start_btn">Commencer</button>
            <button type="button" id="game_reset_btn">Réinitialiser</button>
            <button type="button" id="compare">Comparer</button>
        </div>
    </div>

    <script src="./JS/main.js" type="module"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</body>

</html>