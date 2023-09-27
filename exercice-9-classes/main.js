class Pokemons {
   constructor(name, attack, defense, hp){
    this.name=name
    this.attack=attack
    this.defense=defense
    this.hp=hp
   }
   attackPokemon(adversaire) {
    adversaire.hp -= this.attack-adversaire.defense
   }
}

let evoli = new Pokemons("evoli", 50, 10, 100)
console.log(evoli)
let salamèche = new Pokemons ("salamèche", 60, 15, 110)
console.log(salamèche)

while ((evoli.hp)&&(salamèche.hp)> 0) {
    evoli.attackPokemon(salamèche)
    console.log(salamèche.hp)
    if (salamèche.hp<=0) {
    console.log("Evoli a gagné le combat !")
    break
    }
    salamèche.attackPokemon(evoli)
    console.log(evoli.hp)
    if (evoli.hp<=0) {
        console.log("Salamèche a gagné le combat !")
        break
    }
    else {
        continue
    }
}


