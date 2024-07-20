export let trial = 1;


/// Permets de réordonner les divs entre chaque essaies
export function nextTrial() {
  switch (trial) {
    case 1:
      $("#row_2").insertAfter("#row_3");
      trial += 1;
      break;

    case 2:
      $("#row_2").insertAfter("#row_4");
      trial += 1;
      break;
    case 3:
      $("#row_2").insertAfter("#row_5");
      trial += 1;
      break;

    case 4:
      $("#row_2").insertAfter("#row_6");
      trial += 1;
      break;

    default:
  }
}
