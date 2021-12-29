var choice;
choice = prompt("Enter numer1: ");

var text;

switch (choice) {
      case "a":
            text = "option 1 selected";
            break;
      case "b":
            text = "option 2 selected";
            break;
      case "c":
            text = "option 3 selected";
            break;
      default:
            text = "no option selected";
            break;
}

document.getElementById("root").innerHTML = text;