/*Naklonujte si repozitář se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou
 televizi, pravidelné dovážky jídla nebo třeba webový hosting.

Přidejte to stránky soubor s JavaScriptem, tentokrát bez atributu type=module, abyste mohli své funkce volat 
z konzole.
Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu.
 Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected. 
 Vyzkoušejte vaši funkci v konzoli s různými čísly.
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. 
My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak,
 že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku
  odebrat třídu plan--selected.
*/
let volbaJedna = document.querySelector("#plan1")
let volbaDva = document.querySelector("#plan2")
let volbaTri = document.querySelector("#plan3")

const selectPlan = (planNumber)=>{
    if(planNumber===1){        
        volbaJedna.classList.add("plan--selected")
        volbaDva.classList.add("plan")
        volbaTri.classList.add("plan")

    }else if(planNumber===2){        
        volbaDva.classList.add("plan--selected")
        volbaTri.classList.add("plan")
        volbaJedna.classList.add("plan")

    }else if(planNumber===3){        
        volbaTri.classList.add("plan--selected")
        volbaDva.classList.add("plan")
        volbaJedna.classList.add("plan")
    }
}
