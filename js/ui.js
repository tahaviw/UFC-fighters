import {fighters} from './fighter.js';

const fighterSelect = document.getElementById('fighter-select');
function selectFighters() {
    let optionsHTML = '';
    fighters.forEach(fighter => {
        optionsHTML += `<option value="${fighter.name}">${fighter.name}</option>`;
    });
    fighterSelect.innerHTML += optionsHTML;
}

export {selectFighters , fighterSelect};