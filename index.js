const defaultRecipe = [
    {
        ingredient: 'ovos',
        qtd: 50
    },
    {
        ingredient: 'leite',
        qtd: 120
    },
    {
        ingredient: 'oleo',
        qtd: 10
    },
    {
        ingredient: 'farinha',
        qtd: 110
    },
    {
        ingredient: 'acucar',
        qtd: 80
    },
    {
        ingredient: 'sal',
        qtd: 5
    },
    {
        ingredient: 'fermento',
        qtd: 10
    }
]

const defaultPanquecaAmount = 5;
var multiplier = 1;


$(document).ready(function() {

    $('.input-fields').keyup(event, function() {
        
        var inputName = event.path[0].className;
        var inputValue = $('.' + inputName).val();

        // Removes non numbers from the input.
        if (isNaN(inputValue)) {
            inputValue = inputValue.slice(0, -1);
            $('.' + inputName).val(inputValue);
            return;
        }

        inputValue = parseFloat(inputValue);

        // Check what ingredient was modified
        for(var i = 0; i < defaultRecipe.length; i++) {

            // Gets the multiplier for the ingredients calculation
            if(inputName === defaultRecipe[i].ingredient) {
                multiplier = inputValue / defaultRecipe[i].qtd;
            }
        }

        // Calculate the ingredient amount based on the multiplier
        defaultRecipe.forEach(ingredient => {
            if(ingredient.ingredient != inputName){
                let num = ingredient.qtd * multiplier;

                if (isNaN(inputValue)) {
                    $('.' + ingredient.ingredient).val('');
                    $('.result').text('0');
                }else{
                    $('.' + ingredient.ingredient).val(Math.round(num) + ' g');
                    $('.result').text(Math.round(defaultPanquecaAmount * multiplier));
                }
            }
        });

    });

});