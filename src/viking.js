// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damageTaken) {
        this.health = this.health - damageTaken;
        if (this.health > 0) {
            return `${this.name} has received ${damageTaken} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}



// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const saxonAttackedIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const saxonAttacked = this.saxonArmy[saxonAttackedIndex];

        const vikingAtakingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingAtaking = this.vikingArmy[vikingAtakingIndex];
        const result = saxonAttacked.receiveDamage(vikingAtaking.attack());
        if (result === "A Saxon has died in combat") {
            this.saxonArmy.shift(saxonAttackedIndex, 1);
        }
        return result;
    }

    saxonAttack() {
        const vikingAttackedIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingAttacked = this.vikingArmy[vikingAttackedIndex];

        const saxonAtakingIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const saxonAtaking = this.saxonArmy[saxonAtakingIndex];
        const result = vikingAttacked.receiveDamage(saxonAtaking.attack());
        if (result === `${vikingAttacked.name} has died in act of combat`) {
            this.vikingArmy.shift(vikingAttackedIndex, 1);
        }
        return result;

    }

    // BONUS PART ONE --> Is this ok ??
    attackRefactor(offenseTeam, defenseTeam) {
        const offenseIndex = Math.floor(Math.random() * offenseTeam.length);
        const offensor = offenseTeam[offenseIndex];

        const defensorIndex = Math.floor(Math.random() * defenseTeam.length);
        const defensor = defenseTeam[defensorIndex];

        const result = defensor.receiveDamage(offensor.attack());
        if (defensor.health <= 0) {
            defenseTeam.shift(defensor, 1);
        }
        return result;
    }


    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0 ) {
            return `Saxons have fought for their lives and survived another day...`;
        } else {
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }

}