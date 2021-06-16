const defaultRecipe = [
    {
        ingredient: 'ovos',
        qtd: 1,
        unit: 'un'
    },
    {
        ingredient: 'leite',
        qtd: 120,
        unit: 'ml'
    },
    {
        ingredient: 'oleo',
        qtd: 10,
        unit: 'ml'
    },
    {
        ingredient: 'farinha',
        qtd: 110,
        unit: 'g'
    },
    {
        ingredient: 'acucar',
        qtd: 80,
        unit: 'g'
    },
    {
        ingredient: 'sal',
        qtd: 5,
        unit: 'g'
    },
    {
        ingredient: 'fermento',
        qtd: 10,
        unit: 'g'
    },
    {
        ingredient: 'result',
        qtd: 5,
        unit: ''
    }
]

const defaultPanquecaAmount = 5;
var multiplier = 1;


$(document).ready(function() {

    // Defines a constant for the input value fields.
    const inputField = $('.input-fields');

    // Clears the selected field on click.
    inputField.click(function(e) {
        $('.' + e.target.className).val('');
    });

    
    inputField.keyup(function(e) {
        var inputClass = $('.' + e.target.className);

        // Removes any non digits from the input field.
        inputClass.val(inputClass.val().replace(/[^0-9]/g, ''));

        defaultRecipe.forEach(ing => {
            if (e.target.className == ing.ingredient) return;
            
            // Finds the base qtd of the field selected
            let l = defaultRecipe.length;
            for (let i = 0; i < l; i++) {
                if (defaultRecipe[i].ingredient == e.target.className) {
                    var baseIng = defaultRecipe[i].qtd;
                    break;
                }
            }

            // Updates the amount of ingredient of the field.
            let ingAmount = Math.round((inputClass.val() * ing.qtd) / baseIng);

            if (ing.ingredient == "result") {
                $('.result').text(ingAmount);
            }

            $('.' + ing.ingredient).val(ingAmount + ing.unit);
        });
    });
});