let a = Number(prompt("Enter a 1st number"));
let b = Number(prompt("Enter a 2nd number"));
let o = prompt("Enter a Operator");

switch (o) {
    case "+":
        document.write(a+b);
        break;
    case "-":
        document.write(a-b);
        break;
    case "*":
        document.write(a*b);
        break;
    case "/":
        document.write(a/b);
        break;
    case "%":
        document.write(a%b);
        break;
    case "**":
        document.write(a**b);
        break;
    default:
        document.write("Enter a number");
    break;
}