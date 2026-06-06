import {selectFighters , fighterSelect} from './ui.js';
import {fighters} from './fighter.js';

selectFighters();
const fighterName = document.getElementById('fighter-name');
const fighterDesciption = document.getElementById('fighter-description');
fighterSelect.addEventListener('change', (event) => {
    const selectedFighterName = event.target.value;

    fighters.forEach(fighter => {
        if (fighter.name === selectedFighterName) {
            fighterName.textContent = fighter.name;
            fighterDesciption.innerHTML = ` Weight Class: ${fighter.weightClass}<br> Wins: ${fighter.wins}<br> Losses: ${fighter.losses}`;
        }
    })


})
