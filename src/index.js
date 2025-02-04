const cards = document.querySelector(".cards");

function generateCards(){
    for (let p = 0; 0 < data.length; p++){
        const card = document.createElement("li");
        card.classList.add("card");
        card.id = p;
    
        const title = document.createElement("h2");
        title.innerText = capitalizeFirstLetter(data[p].name);
    
        const sprite = document.createElement("img");
        sprite.classList.add("card--img");
        sprite.width = "256";
        sprite.src = data[p].sprites.other["official-artwork"].front_default;
        sprite.id = p;
        sprite.shiny = false;
        sprite.addEventListener("click", toggleShiny)
    
        const stats = document.createElement("ul");
        stats.classList.add("card--text");
        stats.id = p;
        stats.info = false;
        stats.addEventListener("click", toggleData)
        populateStats(stats, stats.id);
    
    
        card.append(title);
        card.append(sprite);
        card.append(stats);
        cards.append(card);

    }
}

function toggleShiny(){
    this.shiny ? this.src = data[this.id].sprites.other["official-artwork"].front_default : this.src = data[this.id].sprites.front_shiny ;
    this.shiny = !this.shiny;
}

function toggleData(){
    this.innerHTML = "";

    if (!this.info){
        for (let i = 0; i < data[this.id].game_indices.length; i++){
            const stat = document.createElement("li");
            stat.classList.add("card--text");
            stat.innerText = capitalizeFirstLetter(data[this.id].game_indices[i].version.name);
    
            this.append(stat);
        }
    }
    else {
        populateStats(this, this.id);
    }
    this.info = !this.info;
}

function populateStats(stats, p){
    for (let i = 0; i < data[p].stats.length; i++){
        const stat = document.createElement("li");
        stat.classList.add("card--text");
        stat.innerText = data[p].stats[i].stat.name.toUpperCase() + ":  " + data[p].stats[i].base_stat;

        stats.append(stat);
    }
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


generateCards();
