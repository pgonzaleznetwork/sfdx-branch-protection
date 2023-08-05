import { LightningElement } from 'lwc';

export default class ApexRecipesContainer extends LightningElement {
    selectedRecipe;//comment

    handleRecipeSelect(event) {
        this.selectedRecipe = event.detail;
    }
}
