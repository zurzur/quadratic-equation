module.exports = function solveEquation(equation) {
  let members = equation.split(" ");

  let a = +members[0];
  let b = +members[4] * +(members[3]+1);
  let c = +members[8] * +(members[7]+1);

  let D =  Math.pow(b,2) - 4 * a * c;

  let x1 = (-b + Math.sqrt(D)) / (2*a);
  let x2 = (-b - Math.sqrt(D)) / (2*a);

  return [x1.toFixed(0), x2.toFixed(0)].sort((x,y)=>x-y);
}

