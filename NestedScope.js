const firstScope = function (factor) {
  const secondScope = function (amount, unit, name) {
    let ingredientAmount = amount + factor;
    console.log("this is outter binding", factor);
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  secondScope(0.25, "cup", "chickpeas");
  secondScope(2, "spoon", "chicks");
  secondScope(25, "cup", "shell");
  secondScope(1.5, "cloove", "peas");
  secondScope(1.25, "tablespoon", "chickpeas");
};
console.log(firstScope(0.1));

/** function as value:   const fcname = function(){}
 * function declaration  : function theFunctionName(){}
 * arrow function: let fcname = ()=>{}
 */
