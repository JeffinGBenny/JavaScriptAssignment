let monthNo = prompt("Enter the month(1-12)");

let season;
let seasonColor;

switch (monthNo) {
    case "1":
    case "2":
    case "3":
        season = "Spring";
        seasonColor = "lightgreen"
        break;
    case "4":
    case "5":
    case "6":
        season = "Summer";
        seasonColor = "indianred"
        break;
    case "7":
    case "8":
    case "9":
        season = "autumn";
        seasonColor = "#ffffe0"
        break;


    case "10":
    case "11":
    case "12":
        season = "winter";
        seasonColor = "lightblue"
        break;
    default:
        break;
}

document.write(season);
document.body.style.backgroundColor=seasonColor