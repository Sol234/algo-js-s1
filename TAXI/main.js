class Character{
    constructor(name,mentalHealth) {
        this.name=name
        this.mental=mentalHealth
    }


   traject(playlist){
        let redLightNumbers=0
        let numberTaxiChanges=0

        while(redLightNumbers<30 && this.mental>0){

            redLightNumbers+=1
            let rand = Math.floor(Math.random()* playlist.length)
            let randomMusics = playlist[rand]
            console.log("John arrive au feu numéro " + redLightNumbers)
            console.log(randomMusics + " passe à la radio" )
            

        if(randomMusics=="Anissa-WEJDENE"){
            this.mental-=1
            numberTaxiChanges+=1
            console.log("Anissa est passée à la radio")
            console.log("John a changé de taxi")
            console.log("John a "+ this.mental + " de vie.")
        }

        if(this.mental===0){
            console.log("explosion !")
            break
        }

        if (redLightNumbers===30){
            console.log("John est arrivé à destination, il a " + this.mental + " de vie et il a changé " + numberTaxiChanges + " fois de taxis.")
            break
        }
    }

     }

}



let John = new Character ("John",10)
let playlist=["Anissa-WEJDENE", "LoveMaze-BTS", "Rules-DOJA CAT", "Telepatia-KALI UCHIS", "Jolie Go-SHAY"]
console.log(John)
console.log(playlist)
John.traject(playlist)



