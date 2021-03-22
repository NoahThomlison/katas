const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!

    //loop through the given recipes
    for(let i = 0; i < recipes.length; i++){

        //determine if the first ingredient is in bakeryA or bakeryB
        let firstIngredientA = (bakeryA.indexOf(recipes[0].ingredients[0]) > -1);
        let firstIngredientB = (bakeryB.indexOf(recipes[0].ingredients[0]) > -1);

        console.log(firstIngredientA)
        console.log(firstIngredientB)

        //determine if the second ingredient is in bakeryA or bakeryB
        let secondIngredientA = (bakeryA.indexOf(recipes[0].ingredients[1]) > -1);
        let secondIngredientB = (bakeryB.indexOf(recipes[0].ingredients[1]) > -1);

        console.log(secondIngredientA)
        console.log(secondIngredientB)

            //if the first ingredient is in bakeryA OR bakeryB AND the second ingredient is in bakeryA OR bakeryB
            if ((firstIngredientA || firstIngredientB) && (secondIngredientA || secondIngredientB)){
                return(recipes[i].name);
            }
    }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
