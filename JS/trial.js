export let trial = 1;


/// Permets de réordonner les divs entre chaque essaies
export function nextTrial() {
  switch (trial) {
    case 1:
      $("#row_1").insertAfter("#row_2");
      trial += 1;
      break;

    case 2:
      $("#row_1").insertAfter("#row_3");
      trial += 1;
      break;
    case 3:
      $("#row_1").insertAfter("#row_4");
      trial += 1;
      break;

    case 4:
      $("#row_1").insertAfter("#row_5");
      trial += 1;
      break;

      case 5:
        $("#row_1").insertAfter("#row_6");
        trial += 1;
        break;

    default:
  }

  document.getElementById("letter_input0").focus();
}
