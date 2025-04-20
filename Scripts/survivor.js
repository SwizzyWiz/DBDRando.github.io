//Dropdown Button Functions
function dropdownSelections(){
    $("#selectionsSurv").slideToggle("slow");
    $("#selectionsPerks").slideToggle("slow");
    $("#selectionsItems").slideToggle("slow");
    $("#selectionsOffer").slideToggle("slow");

    $("#dropSurvsBtn").slideUp("slow");
    $("#dropSurvs1").slideUp("slow");
    $("#dropSurvs2").slideUp("slow");
    $("#dropSurvs3").slideUp("slow");
    $("#dropSurvs4").slideUp("slow");
    $("#dropSurvs5").slideUp("slow");

    $("#dropPerksBtn").slideUp("slow");
    $("#dropPerks1").slideUp("slow");
    $("#dropPerks2").slideUp("slow");
    $("#dropPerks3").slideUp("slow");
    $("#dropPerks4").slideUp("slow");
    $("#dropPerks5").slideUp("slow");

    $("#dropItemsBtn").slideUp("slow");
    $("#dropFlashlight").slideUp("slow");
    $("#dropKey").slideUp("slow");
    $("#dropMap").slideUp("slow");
    $("#dropMedkit").slideUp("slow");
    $("#dropToolbox").slideUp("slow");

    $("#dropOfferingsBtn").slideUp("slow");
    $("#dropBloodpoints").slideUp("slow");
    $("#dropLuck").slideUp("slow");
    $("#dropMapMods").slideUp("slow");
    $("#dropRealms").slideUp("slow");
    $("#dropShrouds").slideUp("slow");
}
function dropdownSurvs(){
    $("#dropSurvsBtn").slideToggle("slow");
    $("#dropSurvs1").slideToggle("slow");
    $("#dropSurvs2").slideToggle("slow");
    $("#dropSurvs3").slideToggle("slow");
    $("#dropSurvs4").slideToggle("slow");
    $("#dropSurvs5").slideToggle("slow");
}
function dropdownPerks(){
    $("#dropPerksBtn").slideToggle("slow");
    $("#dropPerks1").slideToggle("slow");
    $("#dropPerks2").slideToggle("slow");
    $("#dropPerks3").slideToggle("slow");
    $("#dropPerks4").slideToggle("slow");
    $("#dropPerks5").slideToggle("slow");
}
function dropdownItems(){
    $("#dropItemsBtn").slideToggle("slow");
    $("#dropFlashlight").slideToggle("slow");
    $("#dropKey").slideToggle("slow");
    $("#dropMap").slideToggle("slow");
    $("#dropMedkit").slideToggle("slow");
    $("#dropToolbox").slideToggle("slow");
}
function dropdownOfferings(){
    $("#dropOfferingsBtn").slideToggle("slow");
    $("#dropBloodpoints").slideToggle("slow");
    $("#dropLuck").slideToggle("slow");
    $("#dropMapMods").slideToggle("slow");
    $("#dropRealms").slideToggle("slow");
    $("#dropShrouds").slideToggle("slow");
}
//Initialized Random Array Pools
const perkPool = [];
const charPool = ["anyChar"];
const itemPool = ["none"];
const flashlightAddonPool = ["none", "none"];
const keyAddonPool = ["none", "none"];
const mapAddonPool = ["none", "none"];
const medkitAddonPool = ["none", "none"];
const toolboxAddonPool = ["none", "none"];
const offeringPool = ["none", "anyOffering"];

//document.getElementById("viewPool").innerHTML = perkPool;
//Perk Functions
function namedPerkPooled(name){
    if($('#' + name).is(":checked") && !(perkPool.includes(name))){
        perkPool.push(name);
    } if (!$('#' + name).is(":checked")) {
        perkPool.splice(perkPool.indexOf(name),1);
    } else {
        
    }
}
function revealPerkOptions(className){
    $('.' + className).toggle();
}
function multiPerkPooled(className, name,displayID){
    
    if($('#' + name).is(":checked") && !(perkPool.includes(name))){
        for(let i = 0; i < parseInt(document.getElementById(displayID).innerText);i++){
            perkPool.push(name);
        }
        revealPerkOptions(className);
    } if (!$('#' + name).is(":checked") && perkPool.includes(name)){
        let p = perkPool.indexOf(name);
        while (p > -1){
            perkPool.splice(p ,1);
            p = perkPool.indexOf(name);
        }
        revealPerkOptions(className);
    }
}           
function increase(id,name){
    let count = parseInt(document.getElementById(id).innerText);
    if(count < 4){
        count++;
        document.getElementById(id).innerHTML = count;
        perkPool.push(name);
    }
}
function decrease(id,name){
    let count = parseInt(document.getElementById(id).innerText);
    if(count > 1){
        count--;
        document.getElementById(id).innerHTML = count;
        if (perkPool.indexOf(name) > -1){
            perkPool.splice(perkPool.indexOf(name),1);
        } 
    }
}
function universalPerkPooled(name){
    if($('#' + name).is(":checked")){
        perkPool.push("darSen");
        perkPool.push("dejVu");
        perkPool.push("hope");
        perkPool.push("kindred");
        perkPool.push("lightweight");
        perkPool.push("noOneLefBeh");
        perkPool.push("pluIns");
        perkPool.push("premonition");
        perkPool.push("resilience");
        perkPool.push("sliMea");
        perkPool.push("smaGam");
        perkPool.push("spiChi");
        perkPool.push("thiIsNotHap");
        perkPool.push("weMakIt");
    } if (!$('#' + name).is(":checked")){
        perkPool.splice((perkPool.indexOf("darSen")),1);
        perkPool.splice((perkPool.indexOf("dejVu")),1);
        perkPool.splice((perkPool.indexOf("hope")),1);
        perkPool.splice((perkPool.indexOf("kindred")),1);
        perkPool.splice((perkPool.indexOf("lightweight")),1);
        perkPool.splice((perkPool.indexOf("noOneLefBeh")),1);
        perkPool.splice((perkPool.indexOf("pluIns")),1);
        perkPool.splice((perkPool.indexOf("premonition")),1);
        perkPool.splice((perkPool.indexOf("resilience")),1);
        perkPool.splice((perkPool.indexOf("sliMea")),1);
        perkPool.splice((perkPool.indexOf("smaGam")),1);
        perkPool.splice((perkPool.indexOf("spiChi")),1);
        perkPool.splice((perkPool.indexOf("thiIsNotHap")),1);
        perkPool.splice((perkPool.indexOf("weMakIt")),1);
    }
}
function randomPerks(){
    for(let l = perkPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = perkPool[l];
        perkPool[l] = perkPool[j];
        perkPool[j] = k;
    }

    //document.getElementById("viewPool").innerHTML = perkPool;


    let perk1 = perkPool[perkPool.length - 1];
    let perk2 = perkPool[perkPool.length - 2];
    let perk3 = perkPool[perkPool.length - 3];
    let perk4 = perkPool[perkPool.length - 4];

    fixedPerks(perk1,perk2,perk3,perk4);
}
function showTooltip(id){
    switch (id){
        case "perk1Img":
            $("#perkTooltip1").fadeToggle();
            if(document.getElementById(id).style.opacity==1.0){
                $("#perk1Img").fadeTo("fast",0.15);
                break;
            } else if(document.getElementById(id).style.opacity==0.15){
                $("#perk1Img").fadeTo("fast",1);
                break;
            }
        case "perk2Img":
            $("#perkTooltip2").fadeToggle();
            if(document.getElementById(id).style.opacity==1.0){
                $("#perk2Img").fadeTo("fast",0.15);
                break;
            } else if(document.getElementById(id).style.opacity==0.15){
                $("#perk2Img").fadeTo("fast",1);
                break;
            }
        case "perk3Img":
            $("#perkTooltip3").fadeToggle();
            if(document.getElementById(id).style.opacity==1.0){
                $("#perk3Img").fadeTo("fast",0.15);
                break;
            } else if(document.getElementById(id).style.opacity==0.15){
                $("#perk3Img").fadeTo("fast",1);
                break;
            }
        case "perk4Img":
            $("#perkTooltip4").fadeToggle();
            if(document.getElementById(id).style.opacity==1.0){
                $("#perk4Img").fadeTo("fast",0.15);
                break;
            } else if(document.getElementById(id).style.opacity==0.15){
                $("#perk4Img").fadeTo("fast",1);
                break;
            }
        default:
            break;
    }
}
//Character Functions
function namedCharPooled(name){
    if($('#' + name).is(":checked") && !(charPool.includes(name))){
        charPool.push(name);
    } if (!$('#' + name).is(":checked")) {
        charPool.splice(charPool.indexOf(name),1);
    } else {
        
    }
}
function randomChar(){
    for(let l = charPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = charPool[l];
        charPool[l] = charPool[j];
        charPool[j] = k;
    }

    //document.getElementById("viewPool").innerHTML = charPool;


    let char = charPool[charPool.length - 1];

    fixedChar(char);
}
//Item Functions
function namedItemPooled(name){
    if($('#' + name).is(":checked")){
        itemAdditions(name);
        $('#' + name + "Addons").slideToggle("slow");
    } if (!$('#' + name).is(":checked")) {
        itemRemovals(name);
        $('#' + name + "Addons").slideToggle("slow");
    } else {
        
    }
}
function itemAdditions(name){
    switch (name){
    //Flashlights
        case "flashlight":
            itemPool.push("basicFlash");
            itemPool.push("sportFlash");
            itemPool.push("utilFlash");
            break;
    //Keys
        case "key": 
            itemPool.push("brokeKey");
            itemPool.push("dullKey");
            itemPool.push("skelKey");
            break;
    //Maps
        case "map": 
            itemPool.push("basicMap");
            itemPool.push("rainMap");
            break;
    //Medkits
        case "medkit": 
            itemPool.push("campMedkit");
            itemPool.push("firstMedkit");
            itemPool.push("emergMedkit");
            itemPool.push("rangerMedkit");
            break;
    //Toolboxes
        case "toolbox": 
            itemPool.push("wornToolbox");
            itemPool.push("basicToolbox");
            itemPool.push("commodToolbox");
            itemPool.push("mechToolbox");
            itemPool.push("alexToolbox");
            itemPool.push("engineToolbox");
            break;
        default: 

    }
}
function itemRemovals(name){
    switch (name){
    //Flashlights
        case "flashlight":
            itemPool.splice(itemPool.indexOf("basicFlash"),1);
            itemPool.splice(itemPool.indexOf("sportFlash"),1);
            itemPool.splice(itemPool.indexOf("utilFlash"),1);
            break;
    //Keys
        case "key": 
            itemPool.splice(itemPool.indexOf("brokeKey"),1);
            itemPool.splice(itemPool.indexOf("dullKey"),1);
            itemPool.splice(itemPool.indexOf("skelKey"),1);
            break;
    //Maps
        case "map": 
            itemPool.splice(itemPool.indexOf("basicMap"),1);
            itemPool.splice(itemPool.indexOf("rainMap"),1);
            break;
    //Medkits
        case "medkit": 
            itemPool.splice(itemPool.indexOf("campMedkit"),1);
            itemPool.splice(itemPool.indexOf("firstMedkit"),1);
            itemPool.splice(itemPool.indexOf("emergMedkit"),1);
            itemPool.splice(itemPool.indexOf("rangerMedkit"),1);
            break;
    //Toolboxes
        case "toolbox": 
            itemPool.splice(itemPool.indexOf("wornToolbox"),1);
            itemPool.splice(itemPool.indexOf("basicToolbox"),1);
            itemPool.splice(itemPool.indexOf("commodToolbox"),1);
            itemPool.splice(itemPool.indexOf("mechToolbox"),1);
            itemPool.splice(itemPool.indexOf("alexToolbox"),1);
            itemPool.splice(itemPool.indexOf("engineToolbox"),1);
            break;
        default: 
            
    }
}
function flashlightAddonsPooled(name){
    if($('#' + name).is(":checked")){
        if(name == "anyAddon"){
            flashlightAddonPool.push(name);
            flashlightAddonPool.push(name);
        } else{
            addonAdditions(name);
        }
        
    } if (!$('#' + name).is(":checked")) {
        if(name == "anyAddon"){
            flashlightAddonPool.splice(flashlightAddonPool.indexOf(name),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf(name),1);
        } else{
            addonRemovals(name);
        }
        
    } else {
        
    }
}
function keyAddonsPooled(name){
    if($('#' + name).is(":checked")){
        if(name == "anyAddon"){
            keyAddonPool.push(name);
            keyAddonPool.push(name);
        } else{
            addonAdditions(name);
        }
        
    } if (!$('#' + name).is(":checked")) {
        if(name == "anyAddon"){
            keyAddonPool.splice(keyAddonPool.indexOf(name),1);
            keyAddonPool.splice(keyAddonPool.indexOf(name),1);
        } else{
            addonRemovals(name);
        }
        
    } else {
        
    }
}
function mapAddonsPooled(name){
    if($('#' + name).is(":checked")){
        if(name == "anyAddon"){
            mapAddonPool.push(name);
            mapAddonPool.push(name);
        } else{
            addonAdditions(name);
        }
        
    } if (!$('#' + name).is(":checked")) {
        if(name == "anyAddon"){
            mapAddonPool.splice(mapAddonPool.indexOf(name),1);
            mapAddonPool.splice(mapAddonPool.indexOf(name),1);
        } else{
            addonRemovals(name);
        }
        
    } else {
        
    }
}
function medkitAddonsPooled(name){
    if($('#' + name).is(":checked")){
        if(name == "anyAddon"){
            medkitAddonPool.push(name);
            medkitAddonPool.push(name);
        } else{
            addonAdditions(name);
        }
        
    } if (!$('#' + name).is(":checked")) {
        if(name == "anyAddon"){
            medkitAddonPool.splice(medkitAddonPool.indexOf(name),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf(name),1);
        } else{
            addonRemovals(name);
        }
        
    } else {
        
    }
}
function toolboxAddonsPooled(name){
    if($('#' + name).is(":checked")){
        if(name == "anyAddon"){
            toolboxAddonPool.push(name);
            toolboxAddonPool.push(name);
        } else{
            addonAdditions(name);
        }
        
    } if (!$('#' + name).is(":checked")) {
        if(name == "anyAddon"){
            toolboxAddonPool.splice(toolboxAddonPool.indexOf(name),1);
            toolboxAddonPool.splice(toolboxAddonPool.indexOf(name),1);
        } else{
            addonRemovals(name);
        }
        
    } else {
        
    }
}
function addonAdditions(name){
    switch (name){
    //Flashlights
        case "flashlightCommons":
            flashlightAddonPool.push("battery");
            flashlightAddonPool.push("leatherGrip");
            flashlightAddonPool.push("powerBulb");
            flashlightAddonPool.push("wideLens");
            break;
        case "flashlightUncommons":
            flashlightAddonPool.push("focusLens");
            flashlightAddonPool.push("heavyBattery");
            flashlightAddonPool.push("lowFilament");
            flashlightAddonPool.push("rubberGrip");
            flashlightAddonPool.push("tirOptic");
            break;
        case "flashlightRares": 
            flashlightAddonPool.push("intHalogen");
            flashlightAddonPool.push("longBattery");
            break;
        case "flashlightVeryRares": 
            flashlightAddonPool.push("highLens");
            break;
        case "flashlightUltraRares": 
            flashlightAddonPool.push("oddBulb");
            break;
    //Keys
        case "keyCommons": 
            keyAddonPool.push("prayRope");
            break;
        case "keyUncommons": 
            keyAddonPool.push("erodeToken");
            keyAddonPool.push("prayBeads");
            keyAddonPool.push("scratchPearl");
            break;
        case "keyRares": 
            keyAddonPool.push("goldToken");
            break;
        case "keyVeryRares": 
            keyAddonPool.push("bloodAmber");
            keyAddonPool.push("milkyGlass");
            keyAddonPool.push("uniqueRing");
            keyAddonPool.push("weaveRing");
            break;
    //Maps
        case "mapCommons":
            mapAddonPool.push("mapAddendum");
            break;
        case "mapUncommons": 
            mapAddonPool.push("glassBead");
            mapAddonPool.push("redTwine");
            mapAddonPool.push("retardantJelly");
            mapAddonPool.push("unusualStamp");
            mapAddonPool.push("yellowWire");
            break;
        case "mapRares": 
            mapAddonPool.push("blackCord");
            mapAddonPool.push("oddStamp");
            break;
        case "mapVeryRares": 
            mapAddonPool.push("crystalBead");
            break;
    //Medkits
        case "medkitCommons": 
            medkitAddonPool.push("bandages");
            medkitAddonPool.push("butterflyTape");
            medkitAddonPool.push("rubberGloves");
            break;
        case "medkitUncommons": 
            medkitAddonPool.push("medScissors");
            medkitAddonPool.push("needleThread");
            medkitAddonPool.push("selfWrap");
            medkitAddonPool.push("sponge");
            break;
        case "medkitRares":
            medkitAddonPool.push("gauzeRoll");
            medkitAddonPool.push("surgSuture");
            break;
        case "medkitVeryRares": 
            medkitAddonPool.push("abdomDressing");
            medkitAddonPool.push("stypticAgent");
            break;
        case "medkitUltraRares": 
            medkitAddonPool.push("antiSyringe");
            medkitAddonPool.push("gelDressings");
            break;
    //Toolboxes
        case "toolboxCommons": 
            toolboxAddonPool.push("cleanRag");
            toolboxAddonPool.push("instructions");
            toolboxAddonPool.push("scraps");
            break;
        case "toolboxUncommons":
            toolboxAddonPool.push("cuttingWire");
            toolboxAddonPool.push("protectiveGloves");
            toolboxAddonPool.push("socketSwivels");
            toolboxAddonPool.push("springClamps");
            toolboxAddonPool.push("wireSpool");
            break;
        case "toolboxRares": 
            toolboxAddonPool.push("gripWrench");
            toolboxAddonPool.push("hacksaw");
            break;
        case "toolboxUltraRares": 
            toolboxAddonPool.push("brandNewPart");
            break;
        default:

    }
}
function addonRemovals(name){
    switch (name){
    //Flashlights
        case "flashlightCommons":
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("battery"),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("leatherGrip"),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("powerBulb"),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("wideLens"),1);
            break;
        case "flashlightUncommons":
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("focusLens"),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("heavyBattery"),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("lowFilament"),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("rubberGrip"),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("tirOptic"),1);
            break;
        case "flashlightRares": 
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("intHalogen"),1);
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("longBattery"),1);
            break;
        case "flashlightVeryRares": 
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("highLens"),1);
            break;
        case "flashlightUltraRares": 
            flashlightAddonPool.splice(flashlightAddonPool.indexOf("oddBulb"),1);
            break;
    //Keys
        case "keyCommons": 
            keyAddonPool.splice(keyAddonPool.indexOf("prayRope"),1);
            break;
        case "keyUncommons": 
            keyAddonPool.splice(keyAddonPool.indexOf("erodeToken"),1);
            keyAddonPool.splice(keyAddonPool.indexOf("prayBeads"),1);
            keyAddonPool.splice(keyAddonPool.indexOf("scratchPearl"),1);
            break;
        case "keyRares": 
            keyAddonPool.splice(keyAddonPool.indexOf("goldToken"),1);
            break;
        case "keyVeryRares": 
            keyAddonPool.splice(keyAddonPool.indexOf("bloodAmber"),1);
            keyAddonPool.splice(keyAddonPool.indexOf("milkyGlass"),1);
            keyAddonPool.splice(keyAddonPool.indexOf("uniqueRing"),1);
            keyAddonPool.splice(keyAddonPool.indexOf("weaveRing"),1);
            break;
    //Maps
        case "mapCommons":
            mapAddonPool.splice(mapAddonPool.indexOf("mapAddendum"),1);
            break;
        case "mapUncommons": 
            mapAddonPool.splice(mapAddonPool.indexOf("glassBead"),1);
            mapAddonPool.splice(mapAddonPool.indexOf("redTwine"),1);
            mapAddonPool.splice(mapAddonPool.indexOf("retardantJelly"),1);
            mapAddonPool.splice(mapAddonPool.indexOf("unusualStamp"),1);
            mapAddonPool.splice(mapAddonPool.indexOf("yellowWire"),1);
            break;
        case "mapRares": 
            mapAddonPool.splice(mapAddonPool.indexOf("blackCord"),1);
            mapAddonPool.splice(mapAddonPool.indexOf("oddStamp"),1);
            break;
        case "mapVeryRares": 
            mapAddonPool.splice(mapAddonPool.indexOf("crystalBead"),1);
            break;
    //Medkits
        case "medkitCommons": 
            medkitAddonPool.splice(medkitAddonPool.indexOf("bandages"),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf("butterflyTape"),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf("rubberGloves"),1);
            break;
        case "medkitUncommons": 
            medkitAddonPool.splice(medkitAddonPool.indexOf("medScissors"),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf("needleThread"),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf("selfWrap"),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf("sponge"),1);
            break;
        case "medkitRares":
            medkitAddonPool.splice(medkitAddonPool.indexOf("gauzeRoll"),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf("surgSuture"),1);
            break;
        case "medkitVeryRares": 
            medkitAddonPool.splice(medkitAddonPool.indexOf("abdomDressing"),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf("stypticAgent"),1);
            break;
        case "medkitUltraRares": 
            medkitAddonPool.splice(medkitAddonPool.indexOf("antiSyringe"),1);
            medkitAddonPool.splice(medkitAddonPool.indexOf("gelDressings"),1);
            break;
    //Toolboxes
        case "toolboxCommons": 
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("cleanRag"),1);
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("instructions"),1);
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("scraps"),1);
            break;
        case "toolboxUncommons":
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("cuttingWire"),1);
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("protectiveGloves"),1);
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("socketSwivels"),1);
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("springClamps"),1);
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("wireSpool"),1);
            break;
        case "toolboxRares": 
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("gripWrench"),1);
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("hacksaw"),1);
            break;
        case "toolboxUltraRares": 
            toolboxAddonPool.splice(toolboxAddonPool.indexOf("brandNewPart"),1);
            break;
        default:

    }
}
function randomItem(){
    for(let l = itemPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = itemPool[l];
        itemPool[l] = itemPool[j];
        itemPool[j] = k;
    }
    
    let item = itemPool[itemPool.length - 1];
    //document.getElementById("viewPool").innerHTML = item;
    fixedItem(item);
}
function randomFlashlights(){
    for(let l = flashlightAddonPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = flashlightAddonPool[l];
        flashlightAddonPool[l] = flashlightAddonPool[j];
        flashlightAddonPool[j] = k;
    }

    let addon1 = flashlightAddonPool[flashlightAddonPool.length - 1];
    let addon2 = flashlightAddonPool[flashlightAddonPool.length - 2];

    fixedAddons(addon1,addon2);
}
function randomKeys(){
    for(let l = keyAddonPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = keyAddonPool[l];
        keyAddonPool[l] = keyAddonPool[j];
        keyAddonPool[j] = k;
    }

    let addon1 = keyAddonPool[keyAddonPool.length - 1];
    let addon2 = keyAddonPool[keyAddonPool.length - 2];

    fixedAddons(addon1,addon2);
}
function randomMaps(){
    for(let l = mapAddonPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = mapAddonPool[l];
        mapAddonPool[l] = mapAddonPool[j];
        mapAddonPool[j] = k;
    }

    let addon1 = mapAddonPool[mapAddonPool.length - 1];
    let addon2 = mapAddonPool[mapAddonPool.length - 2];

    fixedAddons(addon1,addon2);
}
function randomMedkits(){
    for(let l = medkitAddonPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = medkitAddonPool[l];
        medkitAddonPool[l] = medkitAddonPool[j];
        medkitAddonPool[j] = k;
    }

    let addon1 = medkitAddonPool[medkitAddonPool.length - 1];
    let addon2 = medkitAddonPool[medkitAddonPool.length - 2];

    fixedAddons(addon1,addon2);
}
function randomToolboxes(){
    for(let l = toolboxAddonPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = toolboxAddonPool[l];
        toolboxAddonPool[l] = toolboxAddonPool[j];
        toolboxAddonPool[j] = k;
    }

    let addon1 = toolboxAddonPool[toolboxAddonPool.length - 1];
    let addon2 = toolboxAddonPool[toolboxAddonPool.length - 2];

    fixedAddons(addon1,addon2);
}
//Offering Functions
function namedOfferingSelected(name){
    if ($('#' + name).is(":checked")){
        selectOfferingOptions(name);
        $('#' + name + "Options").slideToggle("slow");
    } if (!$('#' + name).is(":checked")){
        deselectOfferingOptions(name);
        $('#' + name + "Options").slideToggle("slow");
    }
}
function selectOfferingOptions(name){
    switch (name){
    //Bloodpoints
        case "bloodpoints": 
        //All Categories
            if (!$("#allCategories").is(":checked")){
                offeringPool.push("escCake");
                offeringPool.push("seaEnve");
                offeringPool.push("bloPartStre");
                offeringPool.push("bouEnve");
            }
        //Altruism
            if (!$("#altruism").is(":checked")){
                offeringPool.push("primrose");
                offeringPool.push("freshPrim");
                offeringPool.push("fragPrim");
            }
        //Boldness
            if (!$("#boldness").is(":checked")){
                offeringPool.push("william");
                offeringPool.push("freshWill");
                offeringPool.push("fragWill");
            }
        //Objectives
            if (!$("#objectives").is(":checked")){
                offeringPool.push("bog");
                offeringPool.push("freshBog");
                offeringPool.push("fragBog");
            }
        //Survival
            if (!$("#survival").is(":checked")){
                offeringPool.push("amaranth");
                offeringPool.push("freshAma");
                offeringPool.push("fragAma");
            }
            break;
    //Luck
        case "luck": 
        //Single Luck
            if (!$("#singleLuck").is(":checked")){
                offeringPool.push("chalk");
                offeringPool.push("creamChalk");
                offeringPool.push("ivoryChalk");
            }
        //All Luck
            if (!$("#allLuck").is(":checked")){
                offeringPool.push("salt");
                offeringPool.push("blackSalt");
                offeringPool.push("lipsSalt");
            }
        //Wards
            if (!$("#wards").is(":checked")){
                offeringPool.push("sacWard");
                offeringPool.push("whiteWard");
            }
            break;
    //Map Modifications
        case "mapMods": 
        //Basement
            if (!$("#basement").is(":checked")){
                offeringPool.push("bloodBlue");
                offeringPool.push("tornBlue");
            }
        //Chests
            if (!$("#chests").is(":checked")){
                offeringPool.push("tarnCoin");
                offeringPool.push("shinyCoin");
            }
        //Fog Thickness
            if (!$("#fogThick").is(":checked")){
                offeringPool.push("clearRea");
                offeringPool.push("faintRea");
                offeringPool.push("hazyRea");
                offeringPool.push("murkyRea");
            }
        //Hatch
            if (!$("#hatch").is(":checked")){
                offeringPool.push("annoBlue");
                offeringPool.push("vigoBlue");
            }
        //Hook
            if (!$("#hook").is(":checked")){
                offeringPool.push("petrOak");
            }
            break;
    //Realm Selection
        case "realm": 
        //Azarov's Key (Autohaven)
            if (!$("#azaKey").is(":checked")){
                offeringPool.push("azaKey");
            }
        //Grandma's Cookbook (Swamp)
            if (!$("#grandmaCook").is(":checked")){
                offeringPool.push("grandmaCook");
            }
        //Heart Locket (Coldwind Farm)
            if (!$("#heartLock").is(":checked")){
                offeringPool.push("heartLock");
            }
        //Charred Wedding Photo (Crotus Prenn Asylum)
            if (!$("#charWedPhoto").is(":checked")){
                offeringPool.push("charWedPhoto");
            }
        //Beef Tallow Mixture (Decimated Borgo)
            if (!$("#beefTallow").is(":checked")){
                offeringPool.push("beefTallow");
            }
        //Airlock Doors (Nostromo)
            if (!$("#airlockDoors").is(":checked")){
                offeringPool.push("airlockDoors");
            }
        //Alien Flora (Toba Landing)
            if (!$("#alienFlora").is(":checked")){
                offeringPool.push("alienFlora");
            }
        //Crow's Eye (Forsaken Boneyard)
            if (!$("#crowEye").is(":checked")){
                offeringPool.push("crowEye");
            }
        //Jigsaw Piece (Gideon Meat Plant)
            if (!$("#jigsawPiece").is(":checked")){
                offeringPool.push("jigsawPiece");
            }
        //Shattered Bottle (Glenvale)
            if (!$("#shatteredBottle").is(":checked")){
                offeringPool.push("shatteredBottle");
            }
        //Strode Realty Key (Haddonfield)
            if (!$("#strodeKey").is(":checked")){
                offeringPool.push("strodeKey");
            }
        //Hawkins National Labatory ID
            if (!$("#hawkinsID").is(":checked")){
                offeringPool.push("hawkinsID");
            }
        //Shattered Glasses (Lery's)
            if (!$("#shatteredGlasses").is(":checked")){
                offeringPool.push("shatteredGlasses");
            }
        //MacMillan's Phalanx Bone (Macmillan Estate)
            if (!$("#macmillanBone").is(":checked")){
                offeringPool.push("macmillanBone");
            }
        //Damaged Photo (Ormond)
            if (!$("#damagedPhoto").is(":checked")){
                offeringPool.push("damagedPhoto");
            }
        //RPD Badge (Raccoon City)
            if (!$("#rpdBadge").is(":checked")){
                offeringPool.push("rpdBadge");
            }
        //The Last Mask (Red Forest)
            if (!$("#lastMask").is(":checked")){
                offeringPool.push("lastMask");
            }
        //Mary's Letter (Silent Hill)
            if (!$("#marysLetter").is(":checked")){
                offeringPool.push("marysLetter");
            }
        //The Pied Piper (Springwood)
            if (!$("#piedPiper").is(":checked")){
                offeringPool.push("piedPiper");
            }
        //Ichorous Loam (Withered Isle)
            if (!$("#ichorousLoam").is(":checked")){
                offeringPool.push("ichorousLoam");
            }
        //Yamaoka Family Crest
            if (!$("#yamaokaCrest").is(":checked")){
                offeringPool.push("yamaokaCrest");
            }
            break;
    //Shrouds
        case "shroud": 
        //Shroud of Union
            if (!$("#unionShroud").is(":checked")){
                offeringPool.push("unionShroud");
            }
        //Vigo's Shroud
            if (!$("#vigoShroud").is(":checked")){
                offeringPool.push("vigoShroud");
            }
        //Shroud of Binding
            if (!$("#bindShroud").is(":checked")){
                offeringPool.push("bindShroud");
            }
            break;
        default: 

    }
}
function deselectOfferingOptions(name){
    switch (name){
    //Bloodpoints
        case "bloodpoints": 
        //All Categories
            if (!$("#allCategories").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("escCake")),1);
                offeringPool.splice((offeringPool.indexOf("seaEnve")),1);
                offeringPool.splice((offeringPool.indexOf("bloPartStre")),1);
                offeringPool.splice((offeringPool.indexOf("bouEnve")),1);
            }
        //Altruism
            if (!$("#altruism").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("primrose")),1);
                offeringPool.splice((offeringPool.indexOf("freshPrim")),1);
                offeringPool.splice((offeringPool.indexOf("fragPrim")),1);
            }
        //Boldness
            if (!$("#boldness").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("william")),1);
                offeringPool.splice((offeringPool.indexOf("freshWill")),1);
                offeringPool.splice((offeringPool.indexOf("fragWill")),1);
            }
        //Objectives
            if (!$("#objectives").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("bog")),1);
                offeringPool.splice((offeringPool.indexOf("freshBog")),1);
                offeringPool.splice((offeringPool.indexOf("fragBog")),1);
            }
        //Survival
            if (!$("#survival").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("amaranth")),1);
                offeringPool.splice((offeringPool.indexOf("freshAma")),1);
                offeringPool.splice((offeringPool.indexOf("fragAma")),1);
            }
            break;
    //Luck
        case "luck": 
        //Single Luck
            if (!$("#singleLuck").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("chalk")),1);
                offeringPool.splice((offeringPool.indexOf("creamChalk")),1);
                offeringPool.splice((offeringPool.indexOf("ivoryChalk")),1);
            }
        //All Luck
            if (!$("#allLuck").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("salt")),1);
                offeringPool.splice((offeringPool.indexOf("blackSalt")),1);
                offeringPool.splice((offeringPool.indexOf("lipsSalt")),1);
            }
        //Wards
            if (!$("#wards").is(":checked")){
                offeringPool.splice(offeringPool.indexOf("sacWard"),1);
                offeringPool.splice(offeringPool.indexOf("whiteWard"),1);
            }
            break;
    //Map Modifications
        case "mapMods": 
        //Basement
            if (!$("#basement").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("bloodBlue")),1);
                offeringPool.splice((offeringPool.indexOf("tornBlue")),1);
            }
        //Chests
            if (!$("#chests").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("tarnCoin")),1);
                offeringPool.splice((offeringPool.indexOf("shinyCoin")),1);
            }
        //Fog Thickness
            if (!$("#fogThick").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("clearRea")),1);
                offeringPool.splice((offeringPool.indexOf("faintRea")),1);
                offeringPool.splice((offeringPool.indexOf("hazyRea")),1);
                offeringPool.splice((offeringPool.indexOf("murkyRea")),1);
            }
        //Hatch
            if (!$("#hatch").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("annoBlue")),1);
                offeringPool.splice((offeringPool.indexOf("vigoBlue")),1);
            }
        //Hook
            if (!$("#hook").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("petrOak")),1);
            }
            break;
    //Realm Selection
        case "realm": 
        //Azarov's Key (Autohaven)
            if (!$("#azaKey").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("azaKey")),1);
            }
        //Grandma's Cookbook (Swamp)
            if (!$("#grandmaCook").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("grandmaCook")),1);
            }
        //Heart Locket (Coldwind Farm)
            if (!$("#heartLock").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("heartLock")),1);
            }
        //Charred Wedding Photo (Crotus Prenn Asylum)
            if (!$("#charWedPhoto").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("charWedPhoto")),1);
            }
        //Beef Tallow Mixture (Decimated Borgo)
            if (!$("#beefTallow").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("beefTallow")),1);
            }
        //Airlock Doors (Nostromo)
            if (!$("#airlockDoors").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("airlockDoors")),1);
            }
        //Alien Flora (Toba Landing)
            if (!$("#alienFlora").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("alienFlora")),1);
            }
        //Crow's Eye (Forsaken Boneyard)
            if (!$("#crowEye").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("crowEye")),1);
            }
        //Jigsaw Piece (Gideon Meat Plant)
            if (!$("#jigsawPiece").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("jigsawPiece")),1);
            }
        //Shattered Bottle (Glenvale)
            if (!$("#shatteredBottle").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("shatteredBottle")),1);
            }
        //Strode Realty Key (Haddonfield)
            if (!$("#strodeKey").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("strodeKey")),1);
            }
        //Hawkins National Labatory ID
            if (!$("#hawkinsID").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("hawkinsID")),1);
            }
        //Shattered Glasses (Lery's)
            if (!$("#shatteredGlasses").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("shatteredGlasses")),1);
            }
        //MacMillan's Phalanx Bone (Macmillan Estate)
            if (!$("#macmillanBone").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("macmillanBone")),1);
            }
        //Damaged Photo (Ormond)
            if (!$("#damagedPhoto").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("damagedPhoto")),1);
            }
        //RPD Badge (Raccoon City)
            if (!$("#rpdBadge").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("rpdBadge")),1);
            }
        //The Last Mask (Red Forest)
            if (!$("#lastMask").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("lastMask")),1);
            }
        //Mary's Letter (Silent Hill)
            if (!$("#marysLetter").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("marysLetter")),1);
            }
        //The Pied Piper (Springwood)
            if (!$("#piedPiper").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("piedPiper")),1);
            }
        //Ichorous Loam (Withered Isle)
            if (!$("#ichorousLoam").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("ichorousLoam")),1);
            }
        //Yamaoka Family Crest
            if (!$("#yamaokaCrest").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("yamaokaCrest")),1);
            }
            break;
    //Shrouds
        case "shroud": 
        //Shroud of Union
            if (!$("#unionShroud").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("unionShroud")),1);
            }
        //Vigo's Shroud
            if (!$("#vigoShroud").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("vigoShroud")),1);
            }
        //Shroud of Binding
            if (!$("#bindShroud").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("bindShroud")),1);
            }
            break;
        default: 

    }
}
function namedOfferingPooled(name){
    if ($('#' + name).is(":checked")){
        switch (name){
            case "allCategories": 
                offeringPool.push("escCake");
                offeringPool.push("seaEnve");
                offeringPool.push("bloPartStre");
                offeringPool.push("bouEnve");
                break;
            case "altruism": 
                offeringPool.push("primrose");
                offeringPool.push("freshPrim");
                offeringPool.push("fragPrim");
                break;
            case "boldness": 
                offeringPool.push("william");
                offeringPool.push("freshWill");
                offeringPool.push("fragWill");
                break;
            case "objectives": 
                offeringPool.push("bog");
                offeringPool.push("freshBog");
                offeringPool.push("fragBog");
                break;
            case "survival": 
                offeringPool.push("amaranth");
                offeringPool.push("freshAma");
                offeringPool.push("fragAma");
                break;
            case "singleLuck": 
                offeringPool.push("chalk");
                offeringPool.push("creamChalk");
                offeringPool.push("ivoryChalk");
                break;
            case "allLuck": 
                offeringPool.push("salt");
                offeringPool.push("blackSalt");
                offeringPool.push("lipsSalt");
                break;
            case "wards": 
                offeringPool.push("sacWard");
                offeringPool.push("whiteWard");
                break;
            case "basement": 
                offeringPool.push("bloodBlue");
                offeringPool.push("tornBlue");
                break;
            case "chests":
                offeringPool.push("tarnCoin");
                offeringPool.push("shinyCoin");
                break;
            case "fogThick": 
                offeringPool.push("clearRea");
                offeringPool.push("faintRea");
                offeringPool.push("hazyRea");
                offeringPool.push("murkyRea");
                break;
            case "hatch": 
                offeringPool.push("annoBlue");
                offeringPool.push("vigoBlue");
                break;
            case "hook": 
                offeringPool.push("petrOak");
                break;
            case "azaKey": 
                offeringPool.push(name);
                break;
            case "grandmaCook": 
                offeringPool.push(name);
                break;
            case "heartLock": 
                offeringPool.push(name);
                break;
            case "charWedPhoto": 
                offeringPool.push(name);
                break;
            case "beefTallow": 
                offeringPool.push(name);
                break;
            case "airlockDoors": 
                offeringPool.push(name);
                break;
            case "alienFlora": 
                offeringPool.push(name);
                break;
            case "crowEye": 
                offeringPool.push(name);
                break;
            case "jigsawPiece":
                offeringPool.push(name);
                break;
            case "shatteredBottle": 
                offeringPool.push(name);
                break;
            case "strodeKey": 
                offeringPool.push(name);
                break;
            case "hawkinsID": 
                offeringPool.push(name);
                break;
            case "shatteredGlasses": 
                offeringPool.push(name);
                break;
            case "macmillanBone": 
                offeringPool.push(name);
                break;
            case "damagedPhoto": 
                offeringPool.push(name);
                break;
            case "rpdBadge": 
                offeringPool.push(name);
                break;
            case "lastMask": 
                offeringPool.push(name);
                break;
            case "marysLetter": 
                offeringPool.push(name);
                break;
            case "piedPiper": 
                offeringPool.push(name);
                break;
            case "ichorousLoam": 
                offeringPool.push(name);
                break;
            case "yamaokaCrest": 
                offeringPool.push(name);
                break;
            case "unionShroud": 
                offeringPool.push(name);
                break;
            case "vigoShroud": 
                offeringPool.push(name);
                break;
            case "bindShroud": 
                offeringPool.push(name);
                break;
            default: 

        } 
    }if (!$('#' + name).is(":checked")){
        switch (name){
            case "allCategories": 
                offeringPool.splice((offeringPool.indexOf("escCake")),1);
                offeringPool.splice((offeringPool.indexOf("seaEnve")),1);
                offeringPool.splice((offeringPool.indexOf("bloPartStre")),1);
                offeringPool.splice((offeringPool.indexOf("bouEnve")),1);
                break;
            case "altruism": 
                offeringPool.splice((offeringPool.indexOf("primrose")),1);
                offeringPool.splice((offeringPool.indexOf("freshPrim")),1);
                offeringPool.splice((offeringPool.indexOf("fragPrim")),1);
                break;
            case "boldness": 
                offeringPool.splice((offeringPool.indexOf("william")),1);
                offeringPool.splice((offeringPool.indexOf("freshWill")),1);
                offeringPool.splice((offeringPool.indexOf("fragWill")),1);
                break;
            case "objectives": 
                offeringPool.splice((offeringPool.indexOf("bog")),1);
                offeringPool.splice((offeringPool.indexOf("freshBog")),1);
                offeringPool.splice((offeringPool.indexOf("fragBog")),1);
                break;
            case "survival": 
                offeringPool.splice((offeringPool.indexOf("amaranth")),1);
                offeringPool.splice((offeringPool.indexOf("freshAma")),1);
                offeringPool.splice((offeringPool.indexOf("fragAma")),1);
                break;
            case "singleLuck": 
                offeringPool.splice((offeringPool.indexOf("chalk")),1);
                offeringPool.splice((offeringPool.indexOf("creamChalk")),1);
                offeringPool.splice((offeringPool.indexOf("ivoryChalk")),1);
                break;
            case "allLuck": 
                offeringPool.splice((offeringPool.indexOf("salt")),1);
                offeringPool.splice((offeringPool.indexOf("blackSalt")),1);
                offeringPool.splice((offeringPool.indexOf("lipsSalt")),1);
                break;
            case "wards": 
                offeringPool.splice((offeringPool.indexOf("sacWard")),1);
                offeringPool.splice((offeringPool.indexOf("whiteWard")),1);
                break;
            case "basement": 
                offeringPool.splice((offeringPool.indexOf("bloodBlue")),1);
                offeringPool.splice((offeringPool.indexOf("tornBlue")),1);
                break;
            case "chests":
                offeringPool.splice((offeringPool.indexOf("tarnCoin")),1);
                offeringPool.splice((offeringPool.indexOf("shinyCoin")),1);
                break;
            case "fogThick": 
                offeringPool.splice((offeringPool.indexOf("clearRea")),1);
                offeringPool.splice((offeringPool.indexOf("faintRea")),1);
                offeringPool.splice((offeringPool.indexOf("hazyRea")),1);
                offeringPool.splice((offeringPool.indexOf("murkyRea")),1);
                break;
            case "hatch": 
                offeringPool.splice((offeringPool.indexOf("annoBlue")),1);
                offeringPool.splice((offeringPool.indexOf("vigoBlue")),1);
                break;
            case "hook": 
                offeringPool.splice((offeringPool.indexOf("petrOak")),1);
                break;
            case "azaKey": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "grandmaCook": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "heartLock": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "charWedPhoto": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "beefTallow": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "airlockDoors": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "alienFlora": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "crowEye": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "jigsawPiece":
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "shatteredBottle": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "strodeKey": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "hawkinsID": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "shatteredGlasses": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "macmillanBone": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "damagedPhoto": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "rpdBadge": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "lastMask": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "marysLetter": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "piedPiper": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "ichorousLoam": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "yamaokaCrest": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "unionShroud": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "vigoShroud": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "bindShroud": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            default: 
            
        }
    }
}
function randomOffering(){
    for(let l = offeringPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = offeringPool[l];
        offeringPool[l] = offeringPool[j];
        offeringPool[j] = k;
    }

    //document.getElementById("viewPool").innerHTML = offeringPool;


    let offering = offeringPool[offeringPool.length - 1];

    fixedOffering(offering);
}

function randomize(){
    randomPerks();
    randomChar();
    randomItem();
    randomOffering();
}
//Select/Deselect All Functions
function checking(id,boolean){
    $('#' + id).prop('checked',boolean);
    $('#' + id).trigger("onchange");
}
//Characters
function selectAllSurv(){
    if(!$("#dwigFai").is(":checked")){checking("dwigFai",true);}
    if(!$("#megTho").is(":checked")){checking("megTho",true);}
    if(!$("#clauMor").is(":checked")){checking("clauMor",true);}
    if(!$("#jakePar").is(":checked")){checking("jakePar",true);}
    if(!$("#neaKar").is(":checked")){checking("neaKar",true);}
    if(!$("#laurStr").is(":checked")){checking("laurStr",true);}
    if(!$("#aceVis").is(":checked")){checking("aceVis",true);}
    if(!$("#billOve").is(":checked")){checking("billOve",true);}
    if(!$("#fengMin").is(":checked")){checking("fengMin",true);}
    if(!$("#daviKin").is(":checked")){checking("daviKin",true);}
    if(!$("#quenSmi").is(":checked")){checking("quenSmi",true);}
    if(!$("#daviTap").is(":checked")){checking("daviTap",true);}   
    if(!$("#kateDen").is(":checked")){checking("kateDen",true);}
    if(!$("#adamFra").is(":checked")){checking("adamFra",true);}
    if(!$("#jeffJoh").is(":checked")){checking("jeffJoh",true);}
    if(!$("#janeRom").is(":checked")){checking("janeRom",true);}
    if(!$("#ashWil").is(":checked")){checking("ashWil",true);}
    if(!$("#nancWhe").is(":checked")){checking("nancWhe",true);}
    if(!$("#stevHar").is(":checked")){checking("stevHar",true);}
    if(!$("#yuiKim").is(":checked")){checking("yuiKim",true);}
    if(!$("#zariKas").is(":checked")){checking("zariKas",true);}
    if(!$("#cherMas").is(":checked")){checking("cherMas",true);}
    if(!$("#feliRic").is(":checked")){checking("feliRic",true);}
    if(!$("#elodRak").is(":checked")){checking("elodRak",true);}
    if(!$("#yunjLee").is(":checked")){checking("yunjLee",true);}
    if(!$("#jillVal").is(":checked")){checking("jillVal",true);}
    if(!$("#leonKen").is(":checked")){checking("leonKen",true);}
    if(!$("#mikaRei").is(":checked")){checking("mikaRei",true);}
    if(!$("#jonaVas").is(":checked")){checking("jonaVas",true);}
    if(!$("#yoicAsa").is(":checked")){checking("yoicAsa",true);}
    if(!$("#haddKur").is(":checked")){checking("haddKur",true);}
    if(!$("#adaWon").is(":checked")){checking("adaWon",true);}
    if(!$("#rebeCha").is(":checked")){checking("rebeCha",true);}
    if(!$("#vittTos").is(":checked")){checking("vittTos",true);}
    if(!$("#thalLyr").is(":checked")){checking("thalLyr",true);}
    if(!$("#renaLyr").is(":checked")){checking("renaLyr",true);}
    if(!$("#gabrSom").is(":checked")){checking("gabrSom",true);}
    if(!$("#nicoCag").is(":checked")){checking("nicoCag",true);}
    if(!$("#elleRip").is(":checked")){checking("elleRip",true);}
    if(!$("#alanWak").is(":checked")){checking("alanWak",true);}
    if(!$("#sablWar").is(":checked")){checking("sablWar",true);}
    if(!$("#theTro").is(":checked")){checking("theTro",true);}
    if(!$("#laraCro").is(":checked")){checking("laraCro",true);}
    if(!$("#trevBel").is(":checked")){checking("trevBel",true);}
    if(!$("#taurCai").is(":checked")){checking("taurCai",true);}
}
function deselectAllSurv(){
    if($("#dwigFai").is(":checked")){checking("dwigFai",false);}
    if($("#megTho").is(":checked")){checking("megTho",false);}
    if($("#clauMor").is(":checked")){checking("clauMor",false);}
    if($("#jakePar").is(":checked")){checking("jakePar",false);}
    if($("#neaKar").is(":checked")){checking("neaKar",false);}
    if($("#laurStr").is(":checked")){checking("laurStr",false);}
    if($("#aceVis").is(":checked")){checking("aceVis",false);}
    if($("#billOve").is(":checked")){checking("billOve",false);}
    if($("#fengMin").is(":checked")){checking("fengMin",false);}
    if($("#daviKin").is(":checked")){checking("daviKin",false);}
    if($("#quenSmi").is(":checked")){checking("quenSmi",false);}
    if($("#daviTap").is(":checked")){checking("daviTap",false);}   
    if($("#kateDen").is(":checked")){checking("kateDen",false);}
    if($("#adamFra").is(":checked")){checking("adamFra",false);}
    if($("#jeffJoh").is(":checked")){checking("jeffJoh",false);}
    if($("#janeRom").is(":checked")){checking("janeRom",false);}
    if($("#ashWil").is(":checked")){checking("ashWil",false);}
    if($("#nancWhe").is(":checked")){checking("nancWhe",false);}
    if($("#stevHar").is(":checked")){checking("stevHar",false);}
    if($("#yuiKim").is(":checked")){checking("yuiKim",false);}
    if($("#zariKas").is(":checked")){checking("zariKas",false);}
    if($("#cherMas").is(":checked")){checking("cherMas",false);}
    if($("#feliRic").is(":checked")){checking("feliRic",false);}
    if($("#elodRak").is(":checked")){checking("elodRak",false);}
    if($("#yunjLee").is(":checked")){checking("yunjLee",false);}
    if($("#jillVal").is(":checked")){checking("jillVal",false);}
    if($("#leonKen").is(":checked")){checking("leonKen",false);}
    if($("#mikaRei").is(":checked")){checking("mikaRei",false);}
    if($("#jonaVas").is(":checked")){checking("jonaVas",false);}
    if($("#yoicAsa").is(":checked")){checking("yoicAsa",false);}
    if($("#haddKur").is(":checked")){checking("haddKur",false);}
    if($("#adaWon").is(":checked")){checking("adaWon",false);}
    if($("#rebeCha").is(":checked")){checking("rebeCha",false);}
    if($("#vittTos").is(":checked")){checking("vittTos",false);}
    if($("#thalLyr").is(":checked")){checking("thalLyr",false);}
    if($("#renaLyr").is(":checked")){checking("renaLyr",false);}
    if($("#gabrSom").is(":checked")){checking("gabrSom",false);}
    if($("#nicoCag").is(":checked")){checking("nicoCag",false);}
    if($("#elleRip").is(":checked")){checking("elleRip",false);}
    if($("#alanWak").is(":checked")){checking("alanWak",false);}
    if($("#sablWar").is(":checked")){checking("sablWar",false);}
    if($("#theTro").is(":checked")){checking("theTro",false);}
    if($("#laraCro").is(":checked")){checking("laraCro",false);}
    if($("#trevBel").is(":checked")){checking("trevBel",false);}
    if($("#taurCai").is(":checked")){checking("taurCai",false);}
}
//Perks
function selectAllPerk(){
    if(!$("#univPerks").is(":checked")){checking("univPerks",true);}
    if(!$("#anyCho").is(":checked")){checking("anyCho",true);}
    if(!$("#noCho").is(":checked")){checking("noCho",true);}
    //Dwight Fairfield Perks
    if(!$("#bon").is(":checked")){checking("bon",true);}  
    if(!$("#lea").is(":checked")){checking("lea",true);}  
    if(!$("#proThy").is(":checked")){checking("proThy",true);} 
    //Meg Thomas Perks
    if(!$("#adr").is(":checked")){checking("adr",true);}  
    if(!$("#quiQui").is(":checked")){checking("quiQui",true);}  
    if(!$("#sprBur").is(":checked")){checking("sprBur",true);} 
    //Claudette Morel Perks
    if(!$("#botKno").is(":checked")){checking("botKno",true);}  
    if(!$("#emp").is(":checked")){checking("emp",true);}  
    if(!$("#selCar").is(":checked")){checking("selCar",true);}  
    //Jake Park Perks
    if(!$("#calSpi").is(":checked")){checking("calSpi",true);}  
    if(!$("#iroWil").is(":checked")){checking("iroWil",true);}  
    if(!$("#sab").is(":checked")){checking("sab",true);}  
    //Nea Karlsson Perks
    if(!$("#balLan").is(":checked")){checking("balLan",true);}  
    if(!$("#str").is(":checked")){checking("str",true);}  
    if(!$("#urbEva").is(":checked")){checking("urbEva",true);}  
    //Laurie Strode Perks
    if(!$("#decStr").is(":checked")){checking("decStr",true);}  
    if(!$("#objOfObs").is(":checked")){checking("objOfObs",true);}  
    if(!$("#solSur").is(":checked")){checking("solSur",true);}  
    //Ace Visconti Perks
    if(!$("#aceInTheHol").is(":checked")){checking("aceInTheHol",true);}  
    if(!$("#opeHan").is(":checked")){checking("opeHan",true);}  
    if(!$("#upTheAnt").is(":checked")){checking("upTheAnt",true);}  
    //William "Bill" Overbeck Perks
    if(!$("#borTim").is(":checked")){checking("borTim",true);}  
    if(!$("#lefBeh").is(":checked")){checking("lefBeh",true);}  
    if(!$("#unb").is(":checked")){checking("unb",true);}  
    //Feng Min Perks
    if(!$("#ale").is(":checked")){checking("ale",true);}  
    if(!$("#lit").is(":checked")){checking("lit",true);}  
    if(!$("#tec").is(":checked")){checking("tec",true);}  
    //David King Perks
    if(!$("#deaHar").is(":checked")){checking("deaHar",true);}  
    if(!$("#noMit").is(":checked")){checking("noMit",true);}  
    if(!$("#weGonLivFor").is(":checked")){checking("weGonLivFor",true);}  
    //Quentin Smith Perks
    if(!$("#pha").is(":checked")){checking("pha",true);}  
    if(!$("#vig").is(":checked")){checking("vig",true);}  
    if(!$("#wakUp").is(":checked")){checking("wakUp",true);}  
    //David Tapp Perks
    if(!$("#detHun").is(":checked")){checking("detHun",true);}  
    if(!$("#staOut").is(":checked")){checking("staOut",true);}  
    if(!$("#ten").is(":checked")){checking("ten",true);}  
    //Kate Denson Perks
    if(!$("#boiOve").is(":checked")){checking("boiOve",true);}  
    if(!$("#danWitMe").is(":checked")){checking("danWitMe",true);}  
    if(!$("#winOfOpp").is(":checked")){checking("winOfOpp",true);}  
    //Adam Francis Perks
    if(!$("#aut").is(":checked")){checking("aut",true);}  
    if(!$("#del").is(":checked")){checking("del",true);}  
    if(!$("#div").is(":checked")){checking("div",true);}  
    //Jeff Johansen Perks
    if(!$("#aft").is(":checked")){checking("aft",true);}  
    if(!$("#bre").is(":checked")){checking("bre",true);}  
    if(!$("#dis").is(":checked")){checking("dis",true);}  
    //Jane Romero Perks
    if(!$("#heaOn").is(":checked")){checking("heaOn",true);}  
    if(!$("#poi").is(":checked")){checking("poi",true);}  
    if(!$("#sol").is(":checked")){checking("sol",true);}  
    //Ash Willaims Perks
    if(!$("#bucUp").is(":checked")){checking("bucUp",true);}  
    if(!$("#fliFlo").is(":checked")){checking("fliFlo",true);}  
    if(!$("#metOfMan").is(":checked")){checking("metOfMan",true);}  
    //Nancy Wheeler Perks
    if(!$("#betTog").is(":checked")){checking("betTog",true);}  
    if(!$("#fix").is(":checked")){checking("fix",true);}  
    if(!$("#innStr").is(":checked")){checking("innStr",true);}  
    //Steve Harrington Perks
    if(!$("#bab").is(":checked")){checking("bab",true);}  
    if(!$("#cam").is(":checked")){checking("cam",true);}  
    if(!$("#secWin").is(":checked")){checking("secWin",true);}  
    //Yui Kimura Perks
    if(!$("#anyMeaNec").is(":checked")){checking("anyMeaNec",true);}  
    if(!$("#brea").is(":checked")){checking("brea",true);}  
    if(!$("#lucBre").is(":checked")){checking("lucBre",true);}  
    //Zarina Kassir Perks
    if(!$("#forThePeo").is(":checked")){checking("forThePeo",true);}  
    if(!$("#offTheRec").is(":checked")){checking("offTheRec",true);}  
    if(!$("#redHer").is(":checked")){checking("redHer",true);}  
    //Cheryl Mason Perks
    if(!$("#bloPac").is(":checked")){checking("bloPac",true);}  
    if(!$("#repAll").is(":checked")){checking("repAll",true);}  
    if(!$("#souGua").is(":checked")){checking("souGua",true);}  
    //Felix Richter Perks
    if(!$("#buiToLas").is(":checked")){checking("buiToLas",true);}  
    if(!$("#desMea").is(":checked")){checking("desMea",true);}  
    if(!$("#vis").is(":checked")){checking("vis",true);}  
    //Élodie Rakoto Perks
    if(!$("#app").is(":checked")){checking("app",true);}  
    if(!$("#dec").is(":checked")){checking("dec",true);}  
    if(!$("#powStr").is(":checked")){checking("powStr",true);}  
    //Yun-Jin Lee Perks
    if(!$("#fasTra").is(":checked")){checking("fasTra",true);}  
    if(!$("#selPre").is(":checked")){checking("selPre",true);}  
    if(!$("#smaHit").is(":checked")){checking("smaHit",true);}  
    //Jill Valentine Perks
    if(!$("#blaMin").is(":checked")){checking("blaMin",true);}  
    if(!$("#cou").is(":checked")){checking("cou",true);}  
    if(!$("#res").is(":checked")){checking("res",true);}  
    //Leon S. Kennedy Perks
    if(!$("#bitTheBul").is(":checked")){checking("bitTheBul",true);}  
    if(!$("#fla").is(":checked")){checking("fla",true);}  
    if(!$("#rooSpi").is(":checked")){checking("rooSpi",true);}  
    //Mikaela Reid Perks
    if(!$("#booCirOfHea").is(":checked")){checking("booCirOfHea",true);}  
    if(!$("#booShaSte").is(":checked")){checking("booShaSte",true);}  
    if(!$("#cla").is(":checked")){checking("cla",true);}  
    //Jonah Vasquez Perks
    if(!$("#booExp").is(":checked")){checking("booExp",true);}  
    if(!$("#corAct").is(":checked")){checking("corAct",true);}  
    if(!$("#ove").is(":checked")){checking("ove",true);}  
    //Yoichi Asakawa Perks
    if(!$("#booDarThe").is(":checked")){checking("booDarThe",true);}  
    if(!$("#empCon").is(":checked")){checking("empCon",true);}  
    if(!$("#parGui").is(":checked")){checking("parGui",true);}  
    //Haddie Kaur Perks
    if(!$("#innFoc").is(":checked")){checking("innFoc",true);}  
    if(!$("#over").is(":checked")){checking("over",true);}  
    if(!$("#resMan").is(":checked")){checking("resMan",true);}  
    //Ada Wong Perks
    if(!$("#lowPro").is(":checked")){checking("lowPro",true);}  
    if(!$("#reaHea").is(":checked")){checking("reaHea",true);}  
    if(!$("#wir").is(":checked")){checking("wir",true);}  
    //Rebecca Chambers Perks
    if(!$("#betThanNew").is(":checked")){checking("betThanNew",true);}  
    if(!$("#hyp").is(":checked")){checking("hyp",true);}  
    if(!$("#rea").is(":checked")){checking("rea",true);}  
    //Vittorio Toscano Perks
    if(!$("#fog").is(":checked")){checking("fog",true);}  
    if(!$("#potEne").is(":checked")){checking("potEne",true);} 
    if(!$("#quiGam").is(":checked")){checking("quiGam",true);}  
    //Thalita Lyra Perks
    if(!$("#cutLoo").is(":checked")){checking("cutLoo",true);}  
    if(!$("#friCom").is(":checked")){checking("friCom",true);} 
    if(!$("#teaPowOfTwo").is(":checked")){checking("teaPowOfTwo",true);}  
    //Renato Lyra Perks
    if(!$("#bacPla").is(":checked")){checking("bacPla",true);}  
    if(!$("#bloRus").is(":checked")){checking("bloRus",true);}  
    if(!$("#teaColSte").is(":checked")){checking("teaColSte",true);} 
    //Gabriel Soma Perks
    if(!$("#madForThi").is(":checked")){checking("madForThi",true);}  
    if(!$("#sca").is(":checked")){checking("sca",true);}  
    if(!$("#tro").is(":checked")){checking("tro",true);}  
    //Nicolas Cage Perks
    if(!$("#dra").is(":checked")){checking("dra",true);}  
    if(!$("#ploTwi").is(":checked")){checking("ploTwi",true);}  
    if(!$("#scePar").is(":checked")){checking("scePar",true);}  
    //Ellen Ripley Perks
    if(!$("#cheTra").is(":checked")){checking("cheTra",true);}  
    if(!$("#ligFoo").is(":checked")){checking("ligFoo",true);}  
    if(!$("#lucSta").is(":checked")){checking("lucSta",true);}  
    //Alan Wake Perks
    if(!$("#booIll").is(":checked")){checking("booIll",true);}  
    if(!$("#chaOfLig").is(":checked")){checking("chaOfLig",true);}  
    if(!$("#dea").is(":checked")){checking("dea",true);}  
    //Sable Ward Perks
    if(!$("#invWeaSpi").is(":checked")){checking("invWeaSpi",true);}  
    if(!$("#strInSha").is(":checked")){checking("strInSha",true);}  
    if(!$("#wic").is(":checked")){checking("wic",true);}  
    //The Troupe Perks
    if(!$("#barIns").is(":checked")){checking("barIns",true);}  
    if(!$("#mirIll").is(":checked")){checking("mirIll",true);}  
    if(!$("#stiSig").is(":checked")){checking("stiSig",true);}  
    //Lara Croft Perks
    if(!$("#fin").is(":checked")){checking("fin",true);}  
    if(!$("#har").is(":checked")){checking("har",true);}  
    if(!$("#spe").is(":checked")){checking("spe",true);}  
    //Trevor Belmont Perks
    if(!$("#exu").is(":checked")){checking("exu",true);}  
    if(!$("#eyeOfBel").is(":checked")){checking("eyeOfBel",true);}  
    if(!$("#momOfGlo").is(":checked")){checking("momOfGlo",true);}  
    //Taurie Cain Perks
    if(!$("#cleBre").is(":checked")){checking("cleBre",true);}  
    if(!$("#invTreCro").is(":checked")){checking("invTreCro",true);}  
    if(!$("#shoTheBur").is(":checked")){checking("shoTheBur",true);} 
}
function deselectAllPerk(){
    if($("#univPerks").is(":checked")){checking("univPerks",false);}
    if($("#anyCho").is(":checked")){checking("anyCho",false);}
    if($("#noCho").is(":checked")){checking("noCho",false);}
    //Dwight Fairfield Perks
    if($("#bon").is(":checked")){checking("bon",false);}  
    if($("#lea").is(":checked")){checking("lea",false);}  
    if($("#proThy").is(":checked")){checking("proThy",false);} 
    //Meg Thomas Perks
    if($("#adr").is(":checked")){checking("adr",false);}  
    if($("#quiQui").is(":checked")){checking("quiQui",false);}  
    if($("#sprBur").is(":checked")){checking("sprBur",false);} 
    //Claudette Morel Perks
    if($("#botKno").is(":checked")){checking("botKno",false);}  
    if($("#emp").is(":checked")){checking("emp",false);}  
    if($("#selCar").is(":checked")){checking("selCar",false);}  
    //Jake Park Perks
    if($("#calSpi").is(":checked")){checking("calSpi",false);}  
    if($("#iroWil").is(":checked")){checking("iroWil",false);}  
    if($("#sab").is(":checked")){checking("sab",false);}  
    //Nea Karlsson Perks
    if($("#balLan").is(":checked")){checking("balLan",false);}  
    if($("#str").is(":checked")){checking("str",false);}  
    if($("#urbEva").is(":checked")){checking("urbEva",false);}  
    //Laurie Strode Perks
    if($("#decStr").is(":checked")){checking("decStr",false);}  
    if($("#objOfObs").is(":checked")){checking("objOfObs",false);}  
    if($("#solSur").is(":checked")){checking("solSur",false);}  
    //Ace Visconti Perks
    if($("#aceInTheHol").is(":checked")){checking("aceInTheHol",false);}  
    if($("#opeHan").is(":checked")){checking("opeHan",false);}  
    if($("#upTheAnt").is(":checked")){checking("upTheAnt",false);}  
    //William "Bill" Overbeck Perks
    if($("#borTim").is(":checked")){checking("borTim",false);}  
    if($("#lefBeh").is(":checked")){checking("lefBeh",false);}  
    if($("#unb").is(":checked")){checking("unb",false);}  
    //Feng Min Perks
    if($("#ale").is(":checked")){checking("ale",false);}  
    if($("#lit").is(":checked")){checking("lit",false);}  
    if($("#tec").is(":checked")){checking("tec",false);}  
    //David King Perks
    if($("#deaHar").is(":checked")){checking("deaHar",false);}  
    if($("#noMit").is(":checked")){checking("noMit",false);}  
    if($("#weGonLivFor").is(":checked")){checking("weGonLivFor",false);}  
    //Quentin Smith Perks
    if($("#pha").is(":checked")){checking("pha",false);}  
    if($("#vig").is(":checked")){checking("vig",false);}  
    if($("#wakUp").is(":checked")){checking("wakUp",false);}  
    //David Tapp Perks
    if($("#detHun").is(":checked")){checking("detHun",false);}  
    if($("#staOut").is(":checked")){checking("staOut",false);}  
    if($("#ten").is(":checked")){checking("ten",false);}  
    //Kate Denson Perks
    if($("#boiOve").is(":checked")){checking("boiOve",false);}  
    if($("#danWitMe").is(":checked")){checking("danWitMe",false);}  
    if($("#winOfOpp").is(":checked")){checking("winOfOpp",false);}  
    //Adam Francis Perks
    if($("#aut").is(":checked")){checking("aut",false);}  
    if($("#del").is(":checked")){checking("del",false);}  
    if($("#div").is(":checked")){checking("div",false);}  
    //Jeff Johansen Perks
    if($("#aft").is(":checked")){checking("aft",false);}  
    if($("#bre").is(":checked")){checking("bre",false);}  
    if($("#dis").is(":checked")){checking("dis",false);}  
    //Jane Romero Perks
    if($("#heaOn").is(":checked")){checking("heaOn",false);}  
    if($("#poi").is(":checked")){checking("poi",false);}  
    if($("#sol").is(":checked")){checking("sol",false);}  
    //Ash Willaims Perks
    if($("#bucUp").is(":checked")){checking("bucUp",false);}  
    if($("#fliFlo").is(":checked")){checking("fliFlo",false);}  
    if($("#metOfMan").is(":checked")){checking("metOfMan",false);}  
    //Nancy Wheeler Perks
    if($("#betTog").is(":checked")){checking("betTog",false);}  
    if($("#fix").is(":checked")){checking("fix",false);}  
    if($("#innStr").is(":checked")){checking("innStr",false);}  
    //Steve Harrington Perks
    if($("#bab").is(":checked")){checking("bab",false);}  
    if($("#cam").is(":checked")){checking("cam",false);}  
    if($("#secWin").is(":checked")){checking("secWin",false);}  
    //Yui Kimura Perks
    if($("#anyMeaNec").is(":checked")){checking("anyMeaNec",false);}  
    if($("#brea").is(":checked")){checking("brea",false);}  
    if($("#lucBre").is(":checked")){checking("lucBre",false);}  
    //Zarina Kassir Perks
    if($("#forThePeo").is(":checked")){checking("forThePeo",false);}  
    if($("#offTheRec").is(":checked")){checking("offTheRec",false);}  
    if($("#redHer").is(":checked")){checking("redHer",false);}  
    //Cheryl Mason Perks
    if($("#bloPac").is(":checked")){checking("bloPac",false);}  
    if($("#repAll").is(":checked")){checking("repAll",false);}  
    if($("#souGua").is(":checked")){checking("souGua",false);}  
    //Felix Richter Perks
    if($("#buiToLas").is(":checked")){checking("buiToLas",false);}  
    if($("#desMea").is(":checked")){checking("desMea",false);}  
    if($("#vis").is(":checked")){checking("vis",false);}  
    //Élodie Rakoto Perks
    if($("#app").is(":checked")){checking("app",false);}  
    if($("#dec").is(":checked")){checking("dec",false);}  
    if($("#powStr").is(":checked")){checking("powStr",false);}  
    //Yun-Jin Lee Perks
    if($("#fasTra").is(":checked")){checking("fasTra",false);}  
    if($("#selPre").is(":checked")){checking("selPre",false);}  
    if($("#smaHit").is(":checked")){checking("smaHit",false);}  
    //Jill Valentine Perks
    if($("#blaMin").is(":checked")){checking("blaMin",false);}  
    if($("#cou").is(":checked")){checking("cou",false);}  
    if($("#res").is(":checked")){checking("res",false);}  
    //Leon S. Kennedy Perks
    if($("#bitTheBul").is(":checked")){checking("bitTheBul",false);}  
    if($("#fla").is(":checked")){checking("fla",false);}  
    if($("#rooSpi").is(":checked")){checking("rooSpi",false);}  
    //Mikaela Reid Perks
    if($("#booCirOfHea").is(":checked")){checking("booCirOfHea",false);}  
    if($("#booShaSte").is(":checked")){checking("booShaSte",false);}  
    if($("#cla").is(":checked")){checking("cla",false);}  
    //Jonah Vasquez Perks
    if($("#booExp").is(":checked")){checking("booExp",false);}  
    if($("#corAct").is(":checked")){checking("corAct",false);}  
    if($("#ove").is(":checked")){checking("ove",false);}  
    //Yoichi Asakawa Perks
    if($("#booDarThe").is(":checked")){checking("booDarThe",false);}  
    if($("#empCon").is(":checked")){checking("empCon",false);}  
    if($("#parGui").is(":checked")){checking("parGui",false);}  
    //Haddie Kaur Perks
    if($("#innFoc").is(":checked")){checking("innFoc",false);}  
    if($("#over").is(":checked")){checking("over",false);}  
    if($("#resMan").is(":checked")){checking("resMan",false);}  
    //Ada Wong Perks
    if($("#lowPro").is(":checked")){checking("lowPro",false);}  
    if($("#reaHea").is(":checked")){checking("reaHea",false);}  
    if($("#wir").is(":checked")){checking("wir",false);}  
    //Rebecca Chambers Perks
    if($("#betThanNew").is(":checked")){checking("betThanNew",false);}  
    if($("#hyp").is(":checked")){checking("hyp",false);}  
    if($("#rea").is(":checked")){checking("rea",false);}  
    //Vittorio Toscano Perks
    if($("#fog").is(":checked")){checking("fog",false);}  
    if($("#potEne").is(":checked")){checking("potEne",false);} 
    if($("#quiGam").is(":checked")){checking("quiGam",false);}  
    //Thalita Lyra Perks
    if($("#cutLoo").is(":checked")){checking("cutLoo",false);}  
    if($("#friCom").is(":checked")){checking("friCom",false);} 
    if($("#teaPowOfTwo").is(":checked")){checking("teaPowOfTwo",false);}  
    //Renato Lyra Perks
    if($("#bacPla").is(":checked")){checking("bacPla",false);}  
    if($("#bloRus").is(":checked")){checking("bloRus",false);}  
    if($("#teaColSte").is(":checked")){checking("teaColSte",false);} 
    //Gabriel Soma Perks
    if($("#madForThi").is(":checked")){checking("madForThi",false);}  
    if($("#sca").is(":checked")){checking("sca",false);}  
    if($("#tro").is(":checked")){checking("tro",false);}  
    //Nicolas Cage Perks
    if($("#dra").is(":checked")){checking("dra",false);}  
    if($("#ploTwi").is(":checked")){checking("ploTwi",false);}  
    if($("#scePar").is(":checked")){checking("scePar",false);}  
    //Ellen Ripley Perks
    if($("#cheTra").is(":checked")){checking("cheTra",false);}  
    if($("#ligFoo").is(":checked")){checking("ligFoo",false);}  
    if($("#lucSta").is(":checked")){checking("lucSta",false);}  
    //Alan Wake Perks
    if($("#booIll").is(":checked")){checking("booIll",false);}  
    if($("#chaOfLig").is(":checked")){checking("chaOfLig",false);}  
    if($("#dea").is(":checked")){checking("dea",false);}  
    //Sable Ward Perks
    if($("#invWeaSpi").is(":checked")){checking("invWeaSpi",false);}  
    if($("#strInSha").is(":checked")){checking("strInSha",false);}  
    if($("#wic").is(":checked")){checking("wic",false);}  
    //The Troupe Perks
    if($("#barIns").is(":checked")){checking("barIns",false);}  
    if($("#mirIll").is(":checked")){checking("mirIll",false);}  
    if($("#stiSig").is(":checked")){checking("stiSig",false);}  
    //Lara Croft Perks
    if($("#fin").is(":checked")){checking("fin",false);}  
    if($("#har").is(":checked")){checking("har",false);}  
    if($("#spe").is(":checked")){checking("spe",false);}  
    //Trevor Belmont Perks
    if($("#exu").is(":checked")){checking("exu",false);}  
    if($("#eyeOfBel").is(":checked")){checking("eyeOfBel",false);}  
    if($("#momOfGlo").is(":checked")){checking("momOfGlo",false);}  
    //Taurie Cain Perks
    if($("#cleBre").is(":checked")){checking("cleBre",false);}  
    if($("#invTreCro").is(":checked")){checking("invTreCro",false);}  
    if($("#shoTheBur").is(":checked")){checking("shoTheBur",false);} 
}
//Items
function selectAllItem(){
//Flashlights
    if(!$("#flashlight").is(":checked")){checking("flashlight",true);}
    if(!$("#flashlightAnyAddon").is(":checked")){checking("flashlightAnyAddon",true);}
    if(!$("#flashlightCommons").is(":checked")){checking("flashlightCommons",true);}
    if(!$("#flashlightUncommons").is(":checked")){checking("flashlightUncommons",true);}
    if(!$("#flashlightRares").is(":checked")){checking("flashlightRares",true);}
    if(!$("#flashlightVeryRares").is(":checked")){checking("flashlightVeryRares",true);}
    if(!$("#flashlightUltraRares").is(":checked")){checking("flashlightUltraRares",true);}
//Keys
    if(!$("#key").is(":checked")){checking("key",true);}
    if(!$("#keyAnyAddon").is(":checked")){checking("keyAnyAddon",true);}
    if(!$("#keyCommons").is(":checked")){checking("keyCommons",true);}
    if(!$("#keyUncommons").is(":checked")){checking("keyUncommons",true);}
    if(!$("#keyRares").is(":checked")){checking("keyRares",true);}
    if(!$("#keyVeryRares").is(":checked")){checking("keyVeryRares",true);}
//Maps
    if(!$("#map").is(":checked")){checking("map",true);}
    if(!$("#mapAnyAddon").is(":checked")){checking("mapAnyAddon",true);}
    if(!$("#mapCommons").is(":checked")){checking("mapCommons",true);}
    if(!$("#mapUncommons").is(":checked")){checking("mapUncommons",true);}
    if(!$("#mapRares").is(":checked")){checking("mapRares",true);}
    if(!$("#mapVeryRares").is(":checked")){checking("mapVeryRares",true);}
//Medkits
    if(!$("#medkit").is(":checked")){checking("medkit",true);}
    if(!$("#medkitAnyAddon").is(":checked")){checking("medkitAnyAddon",true);}
    if(!$("#medkitCommons").is(":checked")){checking("medkitCommons",true);}
    if(!$("#medkitUncommons").is(":checked")){checking("medkitUncommons",true);}
    if(!$("#medkitRares").is(":checked")){checking("medkitRares",true);}
    if(!$("#medkitVeryRares").is(":checked")){checking("medkitVeryRares",true);}
    if(!$("#medkitUltraRares").is(":checked")){checking("medkitUltraRares",true);}
//Toolboxes
    if(!$("#toolbox").is(":checked")){checking("toolbox",true);}
    if(!$("#toolboxAnyAddon").is(":checked")){checking("toolboxAnyAddon",true);}
    if(!$("#toolboxCommons").is(":checked")){checking("toolboxCommons",true);}
    if(!$("#toolboxUncommons").is(":checked")){checking("toolboxUncommons",true);}
    if(!$("#toolboxRares").is(":checked")){checking("toolboxRares",true);}
    if(!$("#toolboxUltraRares").is(":checked")){checking("toolboxUltraRares",true);}
}
function deselectAllItem(){
//Flashlights
    if($("#flashlight").is(":checked")){checking("flashlight",false);}
    if($("#flashlightAnyAddon").is(":checked")){checking("flashlightAnyAddon",false);}
    if($("#flashlightCommons").is(":checked")){checking("flashlightCommons",false);}
    if($("#flashlightUncommons").is(":checked")){checking("flashlightUncommons",false);}
    if($("#flashlightRares").is(":checked")){checking("flashlightRares",false);}
    if($("#flashlightVeryRares").is(":checked")){checking("flashlightVeryRares",false);}
    if($("#flashlightUltraRares").is(":checked")){checking("flashlightUltraRares",false);}
//Keys
    if($("#key").is(":checked")){checking("key",false);}
    if($("#keyAnyAddon").is(":checked")){checking("keyAnyAddon",false);}
    if($("#keyCommons").is(":checked")){checking("keyCommons",false);}
    if($("#keyUncommons").is(":checked")){checking("keyUncommons",false);}
    if($("#keyRares").is(":checked")){checking("keyRares",false);}
    if($("#keyVeryRares").is(":checked")){checking("keyVeryRares",false);}
//Maps
    if($("#map").is(":checked")){checking("map",false);}
    if($("#mapAnyAddon").is(":checked")){checking("mapAnyAddon",false);}
    if($("#mapCommons").is(":checked")){checking("mapCommons",false);}
    if($("#mapUncommons").is(":checked")){checking("mapUncommons",false);}
    if($("#mapRares").is(":checked")){checking("mapRares",false);}
    if($("#mapVeryRares").is(":checked")){checking("mapVeryRares",false);}
//Medkits
    if($("#medkit").is(":checked")){checking("medkit",false);}
    if($("#medkitAnyAddon").is(":checked")){checking("medkitAnyAddon",false);}
    if($("#medkitCommons").is(":checked")){checking("medkitCommons",false);}
    if($("#medkitUncommons").is(":checked")){checking("medkitUncommons",false);}
    if($("#medkitRares").is(":checked")){checking("medkitRares",false);}
    if($("#medkitVeryRares").is(":checked")){checking("medkitVeryRares",false);}
    if($("#medkitUltraRares").is(":checked")){checking("medkitUltraRares",false);}
//Toolboxes
    if($("#toolbox").is(":checked")){checking("toolbox",false);}
    if($("#toolboxAnyAddon").is(":checked")){checking("toolboxAnyAddon",false);}
    if($("#toolboxCommons").is(":checked")){checking("toolboxCommons",false);}
    if($("#toolboxUncommons").is(":checked")){checking("toolboxUncommons",false);}
    if($("#toolboxRares").is(":checked")){checking("toolboxRares",false);}
    if($("#toolboxUltraRares").is(":checked")){checking("toolboxUltraRares",false);}
}
//Offerings
function selectAllOffering(){
    if(!$("#bloodpoints").is(":checked")){checking("bloodpoints",true);}
    if(!$("#luck").is(":checked")){checking("luck",true);}
    if(!$("#mapMods").is(":checked")){checking("mapMods",true);}
    if(!$("#realm").is(":checked")){checking("realm",true);}
    if(!$("#shroud").is(":checked")){checking("shroud",true);}
}
function deselectAllOffering(){
    if ($("#bloodpoints").is(":checked")){checking("bloodpoints",false);}
    if ($("#luck").is(":checked")){checking("luck",false);}
    if ($("#mapMods").is(":checked")){checking("mapMods",false);}
    if ($("#realm").is(":checked")){checking("realm",false);}
    if ($("#shroud").is(":checked")){checking("shroud",false);}
    if ($("#allCategories").is(":checked")){checking("allCategories",false);}
    if ($("#altruism").is(":checked")){checking("altruism",false);}
    if ($("#boldness").is(":checked")){checking("boldness",false);}
    if ($("#objectives").is(":checked")){checking("objectives",false);}
    if ($("#survival").is(":checked")){checking("survival",false);}
    if ($("#singleLuck").is(":checked")){checking("singleLuck",false);}
    if ($("#allLuck").is(":checked")){checking("allLuck",false);}
    if ($("#wards").is(":checked")){checking("wards",false);}
    if ($("#basement").is(":checked")){checking("basement",false);}
    if ($("#chests").is(":checked")){checking("chests",false);}
    if ($("#fogThick").is(":checked")){checking("fogThick",false);}
    if ($("#hatch").is(":checked")){checking("hatch",false);}
    if ($("#hook").is(":checked")){checking("hook",false);}
    if ($("#azaKey").is(":checked")){checking("azaKey",false);}
    if ($("#grandmaCook").is(":checked")){checking("grandmaCook",false);}
    if ($("#heartLock").is(":checked")){checking("heartLock",false);}
    if ($("#charWedPhoto").is(":checked")){checking("charWedPhoto",false);}
    if ($("#beefTallow").is(":checked")){checking("beefTallow",false);}
    if ($("#airlockDoors").is(":checked")){checking("airlockDoors",false);}
    if ($("#alienFlora").is(":checked")){checking("alienFlora",false);}
    if ($("#crowEye").is(":checked")){checking("crowEye",false);}
    if ($("#jigsawPiece").is(":checked")){checking("jigsawPiece",false);}
    if ($("#shatteredBottle").is(":checked")){checking("shatteredBottle",false);}
    if ($("#strodeKey").is(":checked")){checking("strodeKey",false);}
    if ($("#hawkinsID").is(":checked")){checking("hawkinsID",false);}
    if ($("#shatteredGlasses").is(":checked")){checking("shatteredGlasses",false);}
    if ($("#macmillanBone").is(":checked")){checking("macmillanBone",false);}
    if ($("#damagedPhoto").is(":checked")){checking("damagedPhoto",false);}
    if ($("#rpdBadge").is(":checked")){checking("rpdBadge",false);}
    if ($("#lastMask").is(":checked")){checking("lastMask",false);}
    if ($("#marysLetter").is(":checked")){checking("marysLetter",false);}
    if ($("#piedPiper").is(":checked")){checking("piedPiper",false);}
    if ($("#ichorousLoam").is(":checked")){checking("ichorousLoam",false);}
    if ($("#yamaokaCrest").is(":checked")){checking("yamaokaCrest",false);}
    if ($("#unionShroud").is(":checked")){checking("unionShroud",false);}
    if ($("#vigoShroud").is(":checked")){checking("vigoShroud",false);}
    if ($("#bindShroud").is(":checked")){checking("bindShroud",false);}
    
}
//After Randomize Display Fixes
//Perks
/**For adding a new Perk info
  document.getElementById("perk" + (i + 1) + "Img").src="";
  document.getElementById("perk" + (i + 1)).innerHTML = "";
  document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
  document.getElementById("perkTooltip" + (i + 1)).innerHTML = `
  <b style="color: #e8c252;">Tier1</b>/
  <b style="color: #199b1e;">Tier2</b>/
  <b style="color: #ac3ee3;">Tier3</b>`;
  break;
*/
function fixedPerks(perk1,perk2,perk3,perk4){
    const perks = [perk1,perk2,perk3,perk4];
    for (let i = 0; i < 4; i++){
        switch (perks[i]){
        //Any Choice Perks Start 
            case "anyCho":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/RandomSurvPerkPlaceholder.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Any Choice";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "20pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = "Choose any Perk that you want in this slot";
                break;
        //No Choice Perks Start
            case "noCho":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/NoChoiceSurvPerkPlaceholder.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "No Choice";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "20pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = "Lose any Perk from this slot";
                break;
        //Universal Perks Start
            case "darSen":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_DarkSense.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dark Sense";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever a <b>Generator is completed</b>, <i>Dark Sense</i> activates:
                <ul><li>The <b>Aura of the Killer</b> is revealed to you for 
                <b style="color: #e8c252;">5</b>/
                <b style="color: #199b1e;">7</b>/
                <b style="color: #ac3ee3;">10</b> seconds once they come within <b>24 metres</b> of your location</li></ul>
                <i>Dark Sense</i> deactivates after use`;
                break;
            case "dejVu":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_DejaVu.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Déjà Vu";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The <b>Auras</b> of whichever <b>3 Generators are currently in closest proximity to one another</b> are revealed to you.<br><br>
                Increases your Repair speed on <b>those Generators</b> by 
                <b style="color: #e8c252;">4</b>/
                <b style="color: #199b1e;">5</b>/
                <b style="color: #ac3ee3;">6</b> %<br><br>
                Held <b>Maps</b> automatically track <b>Auras</b> revealed by <i>Déjà Vu</i>`;
                break;
            case "hope":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Hope.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hope";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Once the Exit Gates are <b>powered</b>, <i>Hope</i> activates:
                <ul><li>Grants a <b>permanent</b> 
                <b style="color: #e8c252;">5</b>/
                <b style="color: #199b1e;">6</b>/
                <b style="color: #ac3ee3;">7</b> % <b>Haste</b> Status Effect</li></ul>`;
                break;
            case "kindred":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Kindred.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Kindred";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever any Survivor is hooked, <i>Kindred</i> activates and applies the following effects:
                <ul><li>The <b>Aura of the Killer</b> is revealed to all Survivors whenever the Killer comes within 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">12</b>/
                <b style="color: #ac3ee3;">16</b> metres of the Hook</li>
                <li>If you <b>are the Hooked Survivor</b>, the <b>Auras</b> of all Survivors are revealed to each other</li>
                <li>If you <b>are not the Hooked Survivor</b>, the <b>Auras</b> of all other Survivors are only revealed to you</li></ul>`;
                break;
            case "lightweight":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Lightweight.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Lightweight";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Reduces the Lifetime of your <b>Scratch Marks</b> by 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">5</b> seconds<br><br>
                Reduces the Spawn chance of patches of <b>Scratch Marks</b> by <b>-60%</b>, making their spacing inconsistent`;
                break;
            case "noOneLefBeh":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_NoOneLeftBehind.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "No One Left Behind";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Once the Exit Gates are <b>powered</b>, <i>No One Left Behind</i> activates and applies the following effects:
                <ul><li>Increases the Action speeds for Healing and Unhooking by 
                <b style="color: #e8c252;">50</b>/
                <b style="color: #199b1e;">75</b>/
                <b style="color: #ac3ee3;">100</b> %</li>
                <li>Increases the strength and duration of the <b>Haste</b> Status Effect of Survivors unhooked by you by <b>+10%</b> and <b>+5 seconds</b> respectively</li>
                <li>The <b>Auras</b> of all other Survivors are revealed to you</li></ul>`;
                break;
            case "pluIns":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_PlunderersInstinct.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Plunder's Instinct";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The <b>Auras</b> of the following objects are revealed to you within 
                <b style="color: #e8c252;">32</b>/
                <b style="color: #199b1e;">48</b>/
                <b style="color: #ac3ee3;">64</b> metres:
                <ul><li><b>Closed Chests</b> located in the environment</li>
                <li><b>Items</b> sitting inside <b>opened Chests</b></li>
                <li><b>Items</b> dropped in the environment</li></ul>
                Increases the Odds of finding <b>Items of higher Rarities</b> in Chests by <b>+50%</b>`;
                break;
            case "premonition":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Premonition.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Premonition";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Receive an <b>auditory warning</b> when looking in the direction of the Killer within a <b>45° cone</b> and at a maximum range of <b>36 metres</b><br><br>
                <i>Premonition</i> has a cooldown of 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">45</b>/
                <b style="color: #ac3ee3;">30</b> seconds`;
                break;
            case "resilience":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Resilience.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Resilience";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases the Action speeds for the following interactions by 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">6</b>/
                <b style="color: #ac3ee3;">9</b> %:
                <ul><li>Blessing or Cleansing Totems</li>
                <li>Healing yourself or other Survivors</li>
                <li>Opening Exit Gates</li>
                <li>Repairing Generators</li>
                <li>Sabotaging Hooks</li>
                <li>Searching Chests</li>
                <li>Unhooking other Survivors</li>
                <li>Vaulting Windows</li></ul>`;
                break;
            case "sliMea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_SlipperyMeat.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Slippery Meat";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Grants the ability to <b>attempt +3 additional Self-Unhooks</b> during the first Hook Stage<br><br>
                Increases the chances to successfully perform a <b>Self-Unhook</b> by 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">3</b>/
                <b style="color: #ac3ee3;">4</b> %`;
                break;
            case "smaGam":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_SmallGame.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Small Game";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Receive an <b>auditory warning</b> upon looking in the direction of Totems in a <b>45° cone</b> within 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">10</b>/
                <b style="color: #ac3ee3;">12</b> metres
                <ul><li><i>Small Game</i> has a cooldown of 
                <b style="color: #e8c252;">14</b>/
                <b style="color: #199b1e;">12</b>/
                <b style="color: #ac3ee3;">10</b> seconds each time it activates</li></ul>
                For each <b>Dull or Hex Totem</b> cleansed by any Player, <i>Small Game</i> is automatically granted <b>+1 Token</b>:
                <ul><li>Each <b>Token</b> reduces the Detection cone's angle by <b>5°</b>, down to a minimum of <b>20°</b></li></ul>`;
                break;
            case "spiChi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_SpineChill.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Spine Chill";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever the Killer is within <b>36 metres</b> of your location <b>and looking at you with a clear Line of Sight</b>, <i>Spine Chill</i> activates:
                <dl><li>Warns of the Killer's proximity and their potential awareness of your location by <b>lighting its icon</b></li>
                <li>Increases your Action speeds for Blessing, Cleansing, Gate-Opening, Healing, Repairing, Sabotaging, Unhooking, and Unlocking by 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">6</b> %</li>
                <dd>- This effect lingers for <b>0.5 seconds</b> after the Killer loses Line of Sight or exits the Activation range</dd></dl>`;
                break;
            case "thiIsNotHap":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_ThisIsNotHappening.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "This is Not Happening";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases the Success zone of Great Skill Checks while Repairing and Healing by 
                <b style="color: #e8c252;">10</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">30</b> % when in the Injured State`;
                break;
            case "weMakIt":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_WellMakeIt.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "We'll Make It";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After unhooking another Survivor, <i>We'll Make It</i> activates:
                <ul><li>Increases your Healing speed to <b>other Survivors</b> by <b>+100%</b> for 
                <b style="color: #e8c252;">30</b>/
                <b style="color: #199b1e;">60</b>/
                <b style="color: #ac3ee3;">90</b> seconds</li></ul>`;
                break;
    //Unique Survivor Perks Start

        //Dwight Fairfield Perks
            case "bon":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Bond.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Bond";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "18pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The <b>Auras</b> of all other Survivors are revealed to you within 
                <b style="color: #e8c252;">20</b>/
                <b style="color: #199b1e;">28</b>/
                <b style="color: #ac3ee3;">36</b> metres`;
                break;
            case "lea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Leader.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Leader";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Other Survivors within <b>8 metres</b> of your location benefit from the following effect:
                <dl><li>Increases the Action speeds for Cleansing, Gate-Opening, Healing, Sabotaging, Unhooking, and Unlocking by 
                <b style="color: #e8c252;">15</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">25</b> %</li>
                <dd>- This effect lingers for <b>15 seconds</b> after leaving the Area of Effect</dd></dl>
                Survivors can only be affected by <b>one</b> instance of <i>Leader</i> at a time`;
                break;
            case "proThy":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_ProveThyself.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Prove Thyself";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases the Repair speed by a stackable 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> % <b>per other Survivor</b> within <b>4 metres</b> of your location, up to a maximum of
                <b style="color: #e8c252;">18</b>/
                <b style="color: #199b1e;">24</b>/
                <b style="color: #ac3ee3;">30</b> %<br><br>
                <i>Prove Thyself</i> extends its effect to all Survivors within its range.<br><br>
                Survivors can only be affected by <b>one</b> instance of <i>Prove Thyself</i> at a time`;
                break;
        //Meg Thomas Perks
            case "adr":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Adrenaline.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Adrenaline";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Once the Exit Gates are <b>powered</b>, <i>Adrenaline</i> activates:
                <ul><li>Instantly heal the equivalent of <b>1 Health State</b></li>
                <li>Grants a <b>+50% Haste</b> Status Effect for <b>3 seconds</b></li></ul>
                <i>Adrenaline</i> ignores an existing <b>Exhausted</b> Status Effect , but causes it for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> seconds`;
                break;
            case "quiQui":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_QuickAndQuiet.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Quick & Quiet";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When performing a <b>Rushed action</b> to vault across <b>Pallets or Windows</b>, or to enter or exit <b>Lockers</b>, <i>Quick & Quiet</i> triggers its effect:
                <ul><li>Suppresses all noises related to those interactions and the accompanying <b>Loud Noise Notification</b></li></ul>
                <i>Quick & Quiet</i> has a cooldown of 
                <b style="color: #e8c252;">25</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">15</b> seconds`;
                break;
            case "sprBur":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_SprintBurst.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Sprint Burst";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Starting to run triggers <i>Sprint Burst</i>:
                <ul><li>Grants a <b>+50% Haste</b> Status Effect for <b>3 seconds</b></li></ul>
                <i>Sprint Burst</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> seconds<br><br>
                <i>Sprint Burst</i> cannot be used when <b>Exhausted</b>`;
                break;
        //Claudette Morel Perks
            case "botKno":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_BotanyKnowledge.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Botany Knowledge";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases your Healing speed by 
                <b style="color: #e8c252;">30</b>/
                <b style="color: #199b1e;">40</b>/
                <b style="color: #ac3ee3;">50</b> %<br><br>
                Reduces the Healing efficiency of <b>Med-Kits</b> by <b>-20%</b>`;
                break;
            case "emp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Empathy.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Empathy";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The <b>Auras of injured or dying Survivors</b> are revealed to you within 
                <b style="color: #e8c252;">64</b>/
                <b style="color: #199b1e;">96</b>/
                <b style="color: #ac3ee3;">128</b> metres`;
                break;
            case "selCar":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_SelfCare.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Self-Care";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Unlocks the Self-Care ability:
                <ul><li>Grants the ability to <b>self-heal without needing a Med-Kit</b> at 
                <b style="color: #e8c252;">25</b>/
                <b style="color: #199b1e;">30</b>/
                <b style="color: #ac3ee3;">35</b> % of the regular Healing speed</li></ul>`;
                break;
        //Jake Park Perks
            case "calSpi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_CalmSpirit.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Calm Spirit";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Prevents Crows from being alerted by your proximity and flying off, unless they are being stepped on<br><br>
                Suppresses the <b>urge to scream from any cause</b> at all times<br><br>
                Suppresses all noises related to <b>unlocking Chests</b>, and <b>cleansing or blessing Totems</b><br><br>
                Reduces the Interaction speeds with <b>Chests</b> and <b>Totems</b> by 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">35</b>/
                <b style="color: #ac3ee3;">30</b> %`;
                break;
            case "iroWil":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_IronWill.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Iron Will";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Reduces the <b>volume of Grunts of Pain</b> while in the <b>Injured State</b> by 
                <b style="color: #e8c252;">80</b>/
                <b style="color: #199b1e;">90</b>/
                <b style="color: #ac3ee3;">100</b> %<br><br>
                <i>Iron Will</i> cannot be used when suffering from <b>Exhaustion</b>, but does not cause the <b>Exhausted</b> Status Effect`;
                break;
            case "sab":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Saboteur.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Saboteur";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While the Killer is <b>carrying another Survivor</b>, the <b>Auras</b> of all Hooks within <b>56 metres</b> of their original <b>Pick-up location</b> are revealed to you:
                <ul><li>The <b>Auras</b> of normal Hooks are <b>white</b></li>
                <li>The <b>Auras of Scourge Hooks</b> are <b>yellow</b></li></ul>
                Unlocks the ability to <b>sabotage Hooks without Toolboxes</b>:
                <dl><li>Increases the Sabotage speed without a Toolbox by <b>+30%</b></li>
                <dd>- This effect has a cooldown of 
                <b style="color: #e8c252;">70</b>/
                <b style="color: #199b1e;">65</b>/
                <b style="color: #ac3ee3;">60</b> seconds after use</dd></dl>`;
                break;
        //Nea Karlsson Perks
            case "balLan":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_BalancedLanding.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Balanced Landing";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After <b>falling from a height</b>, you benefit from the following effects:
                <ul><li>Reduces the duration of the Stagger upon landing by <b>-75%</b></li>
                <li>Suppresses all noises related to falling from height</li>
                <li>Grants a <b>+50% Haste</b> Status Effect for <b>3 seconds</b> upon landing</li></ul>
                <i>Balanced Landing</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> seconds<br><br>
                <i>Balanced Landing</i> cannot be used when <b>Exhausted</b>`;
                break;
            case "str":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Streetwise.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Streetwise";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases the Efficiency of <b>your Items</b> by 
                <b style="color: #e8c252;">15</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">25</b> %<br><br>
                <i>Streetwise</i> extends its effect to all other Survivors within <b>8 metres</b> of your location and lingers for <b>15 seconds</b>`;
                break;
            case "urbEva":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_UrbanEvasion.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Urban Evasion";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases your <b>Crouching</b> Movement speed by 
                <b style="color: #e8c252;">90</b>/
                <b style="color: #199b1e;">95</b>/
                <b style="color: #ac3ee3;">100</b> %`;
                break;
        //Laurie Strode Perks
            case "decStr":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC2/iconPerks_DecisiveStrike.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Decisive Strike";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "7.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After being unhooked or unhooking yourself, <i>Decisive Strike</i> activates for the next 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">60</b> seconds:
                <dl><li>When grabbed or picked up by the Killer, succeed a Skill Check to stab the Killer and escape from their grasp</li>
                <dd>- Stuns the Killer for 4 seconds</dd>
                <li>Causes you to become the next <b>Obsession</b></li></dl>
                <i>Decisive Strike</i> is deactivated once the Exit Gates are <b>powered</b><br><br>
                <i>Decisive Strike</i> is disabled for the remainder of the Trial after use<br><br>
                <i>Decisive Strike</i> is deactivated prematurely when performing a <b>Conspicuous Action</b> and remains disabled for the remainder of the Trial<br><br>
                Increases your chance of becoming the <b>initial Obsession</b> by increasing the default value by <b>+100%</b>`;
                break;
            case "objOfObs":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC2/iconPerks_ObjectOfObsession.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Object of Obsession";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever the <b>Killer reads your Aura</b>, <i>Object of Obsession</i> activates for the same duration as their Aura-reading action:
                <ul><li>The <b>Aura of the Killer</b> is revealed to you</li>
                <li>Increases your Action speeds for Cleansing, Healing, and Repairing actions by 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">6</b> %</li></ul>
                If you are the Killer's current <b>Obsession</b>, the following effect triggers automatically every <b>30 seconds</b>:
                <ul><li><b>Your Aura</b> is revealed to the Killer for <b>3 seconds</b></li></ul>
                Increases your chance of becoming the <b>initial Obsession</b> by increasing the default value by <b>+100%</b>`;
                break;
            case "solSur":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC2/iconPerks_SoleSurvivor.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Sole Survivor";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "8.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Each time a Survivor other than yourself is <b>killed or sacrificed</b>, <i>Sole Survivor</i> gains <b>+1 Token</b>, up to a maximum of <b>3 Tokens</b>:
                <ul><li>Grants a stackable radius of 
                <b style="color: #e8c252;">20</b>/
                <b style="color: #199b1e;">22</b>/
                <b style="color: #ac3ee3;">24</b> metres per <b>Token</b> around you, up to a maximum of 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">66</b>/
                <b style="color: #ac3ee3;">72</b> metres, within which you are <b>immune to the Killer's Aura-reading</b> abilities</li></ul>
                When you are the <b>Last Survivor Standing</b>, you benefit from the following effects:
                <ul><li>Increases your Repair speed by <b>+75%</b></li>
                <li>Increases your Gate and Hatch Opening speeds by <b>+50%</b></li></ul>
                Increases your chance of becoming the <b>initial Obsession</b> by increasing the default value by <b>+100%</b>`;
                break;
        //Ace Visconti Perks
            case "aceInTheHol":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC3/iconPerks_AceInTheHole.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Ace in the Hole";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When retrieving an <b>Item from a Chest</b>, there is a chance an <b>Add-on</b> will be attached to it:
                <ul><li><b>100%</b> chance for an <b>Add-on of Ultra Rare Rarity</b> or lower</li>
                <li>
                <b style="color: #e8c252;">50</b>/
                <b style="color: #199b1e;">75</b>/
                <b style="color: #ac3ee3;">100</b> % chance for a second <b>Add-on of Uncommon Rarity</b> or lower</li></ul>
                <i>Ace in the Hole</i> allows you to <b>keep any Add-ons your Item has attached</b> to it upon escaping`;
                break;
            case "opeHan":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC3/iconPerks_OpenHanded.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Open-Handed";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases the radius of <b>all Aura-reading abilities</b> emanating from yourself or other Survivors by 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">12</b>/
                <b style="color: #ac3ee3;">16</b> metres<br><br>
                Survivors can only be affected by one instance of <i>Open-Handed</i> at a time`;
                break;
            case "upTheAnt":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC3/iconPerks_UpTheAnte.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Up the Ante";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `For <b>every other Survivor</b> still in the Trial, <i>Up the Ante</i> is granted <b>+1 Token</b>:
                <ul><li>Increases the Odds of every Survivor succeeding a <b>Self-Unhook attempt</b> by a stackable 
                <b style="color: #e8c252;">1</b>/
                <b style="color: #199b1e;">2</b>/
                <b style="color: #ac3ee3;">3</b> <b>% per Token</b>, up to a maximum of 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">6</b>/
                <b style="color: #ac3ee3;">9</b> %</li></ul>`;
                break;
        //William "Bill" Overbeck Perks
            case "borTim":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/L4D/iconPerks_BorrowedTime.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Borrowed Time";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The Survivors you unhook benefit from the following effects:
                <ul><li>Extends the duration of their <b>Endurance</b> Status Effect by 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> seconds</li>
                <li>Extends the duration of their <b>Haste</b> Status Effect by <b>10 seconds</b></li></ul>`;
                break;
            case "lefBeh":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/L4D/iconPerks_LeftBehind.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Left Behind";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "18pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Once you are the <b>Last Survivor Standing</b>, <i>Left Behind</i> activates:
                <ul><li>The <b>Aura of the Hatch</b> is revealed to you within 
                <b style="color: #e8c252;">24</b>/
                <b style="color: #199b1e;">28</b>/
                <b style="color: #ac3ee3;">32</b> metres</li></ul>`;
                break;
            case "unb":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/L4D/iconPerks_Unbreakable.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Unbreakable";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "17pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Once per Trial, you can <b>completely recover from the Dying State</b>
                <ul><li>Your Recovery speed is increased by 
                <b style="color: #e8c252;">25</b>/
                <b style="color: #199b1e;">30</b>/
                <b style="color: #ac3ee3;">35</b> %</li></ul>`;
                break;
        //Feng Min Perks
            case "ale":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC4/iconPerks_Alert.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Alert";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "18pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever the Killer performs the <b>Break or Damage Action</b>, <i>Alert</i> triggers:
                <ul><li>Their <b>Aura</b> is revealed to you for 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">5</b> seconds</li></ul>`;
                break;
            case "lit":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC4/iconPerks_Lithe.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Lithe";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you perform a <b>Rushed Vault</b> action, <i>Lithe</i> triggers its effect:
                <ul><li>Grants a <b>+50% Haste</b> Status Effect for <b>3 seconds</b></li></ul>
                <i>Lithe</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> seconds<br><br>
                <i>Lithe</i> cannot be used when <b>Exhausted</b>`;
                break;
            case "tec":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC4/iconPerks_Technician.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Technician";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While repairing a Generator, the following effects apply:
                <ul><li>Reduces the audible range of all noises related to the Repair interaction by <b>-8 metres</b></li>
                <li>Increases the Progression penalty incurred when failing a Skill Check by 
                <b style="color: #e8c252;">5</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">3</b> %</li>
                <li>Suppresses the <b>explosion of the Generator and the Loud Noise Notification</b> usually triggered by that</li></ul>`;
                break;
        //David King Perks
            case "deaHar":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC5/iconPerks_DeadHard.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dead Hard";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After being unhooked or unhooking yourself, <i>Dead Hard</i> activates whenever you are <b>injured and running</b>, and allows you to tap into your adrenaline bank to avoid taking further damage:
                <ul><li>Press the <b>Active Ability button</b> to trigger the <b>Endurance</b> Status Effect for <b>0.5 seconds</b></li></ul>
                <i>Dead Hard</i> deactivates after use<br><br>
                <i>Dead Hard</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> seconds<br><br>
                <i>Dead Hard</i> cannot be used when <b>Exhausted</b>`;
                break;
            case "noMit":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC5/iconPerks_NoMither.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "No Mither";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Causes the following <b>permanent</b> effects in the Trial:
                <dl><li>Inflicts the <b>Broken</b> Status Effect</li>
                <li>Suppresses the creation of Pools of Blood</li>
                <li>Reduces the <b>volume of Grunts of Pain</b> by 
                <b style="color: #e8c252;">25</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">75</b> % while in the <b>Injured State</b> or the <b>Dying State</b></li>
                <li>Unlocks the <b>Self-Recovery ability</b>, allowing you to <b>fully recover</b> from the <b>Dying State</b>:</li>
                <dd>- Increases the Recovery speed by 
                <b style="color: #e8c252;">15</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">25</b> %</dd></dl>`;
                break;
            case "weGonLivFor":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC5/iconPerks_WereGonnaLiveForever.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "We're Gonna Live Forever";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `You benefit from the following effect when <b>healing a dying Survivor</b>:
                <ul><li>Increases your Healing speed by <b>+100%</b></li></ul>
                Any dying Survivor you heal back to the <b>Injured State</b> benefits from the following effect:
                <dl><li>Grants the <b>Endurance</b> Status Effect for 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> seconds</li>
                <dd>- This effect can only be triggered once every <b>30 seconds</b></dd></dl>`;
                break;
        //Quentin Smith Perks
            case "pha":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/England/iconPerks_Pharmacy.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Pharmacy";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases the Unlocking speed of <b>Chests</b> by 
                <b style="color: #e8c252;">70</b>/
                <b style="color: #199b1e;">85</b>/
                <b style="color: #ac3ee3;">100</b> %<br><br>
                Reduces the audible range of all noises related to the Unlocking interaction by <b>-20 metres</b><br><br>
                <i>Pharmacy</i> guarantees an <b>Emergency Med-Kit</b> from <b>all Chests</b>`;
                break;
            case "vig":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/England/iconPerks_Vigil.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Vigil";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases the Recovery rate from the following Status Effects by 
                <b style="color: #e8c252;">43</b>/
                <b style="color: #199b1e;">55</b>/
                <b style="color: #ac3ee3;">66</b> %
                <ul><li>The <b>Blindness</b>, <b>Broken</b>, <b>Exhausted</b>, <b>Exposed</b>, <b>Haemorrhage</b>, <b>Hindered</b>, <b>Mangled</b>, and <b>Oblivious</b> Status Effects</li></ul>
                <i>Vigil</i> extends its effect to all Survivors within <b>16 metres</b> of your location and lingers for <b>15 seconds</b>`;
                break;
            case "wakUp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/England/iconPerks_WakeUp.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Wake Up!";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Once all Generators are completed, <i>Wake Up!</i> activates:
                <ul><li>The <b>Auras of the Exit Gate Switches</b> are revealed to you permanently while within <b>128 metres</b></li>
                <li><b>Your Aura</b> is revealed to all other Survivors within <b>128 metres while you are opening an Exit Gate</b></li>
                <li>Increases your Gate-Opening speed by a stackable 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">10</b>/
                <b style="color: #ac3ee3;">12.5</b> <b>% for each Survivor still alive</b> in the Trial, <b>including yourself</b>, up to a maximum of 
                <b style="color: #e8c252;">32</b>/
                <b style="color: #199b1e;">40</b>/
                <b style="color: #ac3ee3;">50</b> %</li></ul>`;
                break;
        //David Tapp Perks
            case "detHun":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Finland/iconPerks_DetectivesHunch.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dectective's Hunch";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Each time a Generator is completed, <i>Detective's Hunch</i> triggers its effect:
                <dl><li>The <b>Auras</b> of the following objects within 
                <b style="color: #e8c252;">32</b>/
                <b style="color: #199b1e;">48</b>/
                <b style="color: #ac3ee3;">64</b> metres of your location are revealed to you for <b>10 seconds</b>:</li>
                <dd>- Chests</dd>
                <dd>- Generators</dd>
                <dd>- Totems</dd></dl>
                When <b>carrying a Map</b>, any objects revealed by <i>Detective's Hunch</i> are automatically added to it`;
                break;
            case "staOut":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Finland/iconPerks_StakeOut.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Stake Out";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Staying in the <b>Terror Radius without being chased</b> grants <b>+1 Token every 15 seconds</b>, up to a maximum of 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">3</b>/
                <b style="color: #ac3ee3;">4</b> Tokens<br><br>
                While performing a skillful interaction that can trigger Skill Checks, you benefit from the following effects:
                <dl><li>Converts any Good Skill Check into a <b>Great Skill Check</b></li>
                <dd>- This consumes <b>-1 Token</b></dd>
                <li>Increases the Progression bonus of those Great Skill Checks by <b>+1 %</b></li></dl>
                <i>Stake Out</i> does not apply to regular Great Skill Checks nor do they consume any Tokens`;
                break;
            case "ten":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Finland/iconPerks_Tenacity.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Tenacity";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Your ferocious tenacity in dire situations allows you to benefit from the following effects while in the <b>Dying State</b>:
                <ul><li>Grants the ability to recover and crawl at the same time</li>
                <li>Increases the Crawling Movement speed by 
                <b style="color: #e8c252;">30</b>/
                <b style="color: #199b1e;">40</b>/
                <b style="color: #ac3ee3;">50</b> %</li>
                <li>Reduces the <b>volume of Grunts of Pain</b> by <b>-75%</b></li></ul>`;
                break;
        //Kate Denson Perks
            case "boiOve":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kate/iconPerks_BoilOver.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Boil Over";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While being <b>carried by the Killer</b>, the following effects apply:
                <ul><li>Increases the strength of the Struggle Effects on the Killer from your Wiggling by 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">70</b>/
                <b style="color: #ac3ee3;">80</b> %</li>
                <li>Suppresses the ability of the Killer to <b>read the Auras of all Hooks</b> within <b>16 metres</b></li>
                <li>Grants <b>+33% of your current</b> Wiggle progression upon landing, if the Killer drops from height</li></ul>`;
                break;
            case "danWitMe":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kate/iconPerks_DanceWithMe.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dance With Me";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When performing a <b>Rushed action</b> to vault a Window or exit a Locker, <i>Dance With Me</i> triggers its effect:
                <ul><li>Suppresses the <b>creation of your Scratch Marks</b> for <b>5 seconds</b></li></ul>
                <i>Dance With Me</i> has a cooldown of 
                <b style="color: #e8c252;">20</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">15</b> seconds`;
                break;
            case "winOfOpp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kate/iconPerks_WindowsOfOpportunity.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Windows of Opportunity";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The <b>Auras of Breakable Walls, Pallets, and Windows</b> are revealed to you within 
                <b style="color: #e8c252;">24</b>/
                <b style="color: #199b1e;">28</b>/
                <b style="color: #ac3ee3;">32</b> metres`;
                break;
        //Adam Francis Perks
            case "aut":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Haiti/iconPerks_Autodidact.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Autodidact";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Succeeding a Skill Check while healing another Survivor grants <b>+1 Token</b>, up to a maximum of 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">5</b> Tokens:
                <dl><li>Suppresses Great Healing Skill Checks</li>
                <li>Causes Good Healing Skill Checks to grant Healing progress based on the number of <b>accumulated Tokens</b>:</li>
                <dd>- <b>0 Tokens: -15%</b></dd>
                <dd>- <b>1 Token: 0%</b></dd>
                <dd>- <b>2 Tokens: +15%</b></dd>
                <dd>- <b>3 Tokens: +30%</b> (limit of <b style="color: #e8c252;">Tier I</b>)</dd>
                <dd>- <b>4 Tokens: +45%</b> (limit of <b style="color: #199b1e;">Tier II</b>)</dd>
                <dd>- <b>5 Tokens: +60%</b> (limit of <b style="color: #ac3ee3;">Tier III</b>)</dd></dl>
                <i>Autodidact</i> is inactive when <b>healing using a Med-Kit</b>`;
                break;
            case "del":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Haiti/iconPerks_Deliverance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Deliverance";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After <b>safely unhooking</b> another Survivor, <i>Deliverance</i> activates:
                <ul><li>Grants the ability to <b>perform a successful Self-Unhook</b> at any point during the <b>first Hook Stage</b></li>
                <li>Causes the <b>Broken</b> Status Effect for 
                <b style="color: #e8c252;">100</b>/
                <b style="color: #199b1e;">80</b>/
                <b style="color: #ac3ee3;">60</b> seconds after unhooking yourself</li></ul>
                <i>Deliverance</i> cannot be used during the <b>second Hook Stage</b> or if you are hooked as the <b>Last Survivor Standing</b><br><br>
                <i>Deliverance</i> is disabled for the remainder of the Trial after use`;
                break;
            case "div":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Haiti/iconPerks_Diversion.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Diversion";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After <b>staying in the Terror Radius without being chased</b> for 
                <b style="color: #e8c252;">30</b>/
                <b style="color: #199b1e;">25</b>/
                <b style="color: #ac3ee3;">20</b> seconds, <i>Diversion</i> activates<br><br>
                When <i>Diversion</i> is active, press the <b>Active Ability button while crouched and motionless</b> to throw a pebble in the direction you are facing:
                <dl><li>Creates a distraction for the Killer at its landing location <b>20 metres</b> away:</li>
                <dd>- Triggers a <b>Loud Noise Notification</b></dd>
                <dd>- Creates <b>fake Scratch Marks</b></dd>
                <i>Diversion</i> deactivates after use`;
                break;
        //Jeff Johansen Perks
            case "aft":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kenya/iconPerks_Aftercare.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Aftercare";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The <b>Auras</b> of the last 
                <b style="color: #e8c252;">1</b>/
                <b style="color: #199b1e;">2</b>/
                <b style="color: #ac3ee3;">3</b> Survivor(s) are <b>permanently</b> revealed to you, once any of the following conditions have been met:
                <ul><li>You have unhooked them</li>
                <li>They have unhooked you</li>
                <li>You have completed a Healing action on them</li>
                <li>They have completed a Healing action on you</li></ul>
                Those Survivors also have <b>your Aura</b> revealed to them.<br><br>
                <i>Aftercare</i> resets its effect once you are hooked`;
                break;
            case "bre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kenya/iconPerks_Breakdown.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Breakdown";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are unhooked by another Survivor or unhook yourself, the following effects apply:
                <ul><li>The <b>Aura of the Killer</b> is revealed to you for 
                <b style="color: #e8c252;">4</b>/
                <b style="color: #199b1e;">5</b>/
                <b style="color: #ac3ee3;">6</b> seconds</li>
                <li>Causes the Hook to break instantly</li></ul>
                Hooks broken by <i>Breakdown</i> take <b>180 seconds</b> to respawn`;
                break;
            case "dis":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kenya/iconPerks_Distortion.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Distortion";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Start the Trial with <b>1 Token</b>.<br><br>
                Whenever the Killer attempts to read <b>your Aura</b>, <i>Distortion</i> activates and consumes <b>-1 Token</b>, applying the following effects for 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">10</b>/
                <b style="color: #ac3ee3;">12</b> seconds:
                <ul><li>Blocks <b>your Aura</b> from being read</li>
                <li>Suppresses the <b>creation of your Scratch Marks</b></li></ul>
                For <b>every 15 seconds spent in a Chase</b>, <i>Distortion</i> recharges <b>+1 Token</b>, up to a maximum of <b>2 Tokens</b>.<br><br>
                <i>Distortion</i> does not activate when you are in the <b>Dying State</b>`;
                break;
        //Jane Romero Perks
            case "heaOn":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Mali/iconPerks_HeadOn.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Head On";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After hiding in a Locker for <b>3 seconds</b>, <i>Head On</i> activates:
                <ul><li>Performing a <b>Rush Exit</b> out of the Locker <b>stuns</b> a nearby Killer for <b>3 seconds</b></li></ul>
                <i>Head On</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> seconds.<br><br>
                <i>Head On</i> cannot be used while <b>Exhausted</b> or when having accrued <b>Idle Crows</b>`;
                break;
            case "poi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Mali/iconPerks_Poised.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Poised";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever a Generator is completed, you benefit from the following effect for 
                <b style="color: #e8c252;">10</b>/
                <b style="color: #199b1e;">12</b>/
                <b style="color: #ac3ee3;">14</b> seconds:
                <ul><li>Suppresses the <b>creation of your Scratch Marks</b></li></ul>
                <b>First starting to repair a given Generator</b> reveals the <b>Aura of the Killer</b> to you for <b>6 seconds</b>`;
                break;
            case "sol":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Mali/iconPerks_Solidarity.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Solidarity";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While <b>injured and healing another Survivor without using a Med-Kit</b>, you benefit from the following effect:
                <ul><li>Passively heal yourself at a rate of 
                <b style="color: #e8c252;">50</b>/
                <b style="color: #199b1e;">60</b>/
                <b style="color: #ac3ee3;">70</b> % of your Healing speed to the other Survivor</li></ul>`;
                break;
        //Ash Williams Perks
            case "bucUp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ash/iconPerks_BuckleUp.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Buckle Up";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When healing a Survivor in the <b>Dying State</b>, <i>Buckle Up</i> activates:
                <ul><li>The <b>Aura of the Killer</b> is revealed to the both of you</li>
                <li>Completing a Healing Action on the <b>dying</b> Survivor suppresses <b>their Scratch Marks</b> and grants them a <b>+50% Haste</b> Status Effect for 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">5</b> seconds</li></ul>
                <i>Buckle Up</i> does not cause the <b>Exhausted</b> Status Effect`;
                break;
            case "fliFlo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ash/iconPerks_FlipFlop.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Flip-Flop";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Recovering in the <b>Dying State</b> also charges the Wiggle Meter at <b>50%</b> of the Recovery rate and up to a maximum of 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">45</b>/
                <b style="color: #ac3ee3;">50</b> % of Wiggle Progression`;
                break;
            case "metOfMan":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ash/iconPerks_MettleOfMan.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Mettle of Man";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After triggering a third Protection Hit by any means, Mettle of Man activates:
                <ul><li>While in the <b>Injured State</b>, <i>Mettle of Man</i> shields you from the next attack that would put you into the <b>Dying State</b></li>
                <li>After healing back to <b>full health</b> by any means, <i>Mettle of Man</i> reveals <b>your Aura</b> to the Killer whenever you are farther than 
                <b style="color: #e8c252;">12</b>/
                <b style="color: #199b1e;">14</b>/
                <b style="color: #ac3ee3;">16</b> metres from their location</li></ul>
                <i>Mettle of Man</i> deactivates after entering the <b>Dying State</b> by any means<br><br>
                Increases your chance of becoming the <b>initial Obsession</b> by increasing the default value by <b>+100%</b>`;
                break;
        //Nancy Wheeler Perks
            case "betTog":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_betterTogether.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Better Together";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While repairing a Generator, its <b>Aura</b> is highlighted in <b>yellow to all other Survivors</b> within <b>32 metres</b>.<br><br>
                Whenever the Killer downs a Survivor while you are repairing a Generator, the <b>Auras of all other Survivors</b> are revealed to you for 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">9</b>/
                <b style="color: #ac3ee3;">10</b> seconds`;
                break;
            case "fix":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_Fixated.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Fixated";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases your Walking speed by 
                <b style="color: #e8c252;">10</b>/
                <b style="color: #199b1e;">15</b>/
                <b style="color: #ac3ee3;">20</b> %<br><br>
                Unlocks the ability to <b>see your own Scratch Marks</b>`;
                break;
            case "innStr":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_innerStrength.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Inner Strength";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Each time you cleanse a Totem, <i>Inner Strength</i> activates:
                <ul><li>You are automatically healed <b>1 Health State</b> while hiding inside a Locker for 
                <b style="color: #e8c252;">10</b>/
                <b style="color: #199b1e;">9</b>/
                <b style="color: #ac3ee3;">8</b> seconds when injured or suffering from the <b>Deep Wound</b> Status Effect</li></ul>
                <i>Inner Strength</i> does not activate if you currently suffer from the <b>Broken</b> Status Effect`;
                break;
        //Steve Harrington Perks
            case "bab":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_babySitter.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Babysitter";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you unhook a Survivor, the <b>Aura of the Killer</b> is revealed to you for <b>8 seconds</b>, while the unhooked Survivor benefits from the following effects for 
                <b style="color: #e8c252;">20</b>/
                <b style="color: #199b1e;">25</b>/
                <b style="color: #ac3ee3;">30</b> seconds instead:
                <ul><li>Suppresses the <b>creation of their Scratch Marks and Pools of Blood</b></li>
                <li>Increases the strength of their <b>Haste</b> Status Effect by <b>+10%</b></li></ul>`;
                break;
            case "cam":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_Camaraderie.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Camaradeire";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `If you are hooked and enter the Struggle Phase, <i>Camaraderie</i> activates:
                <ul><li>Pauses the Struggle Phase timer for 
                <b style="color: #e8c252;">26</b>/
                <b style="color: #199b1e;">30</b>/
                <b style="color: #ac3ee3;">34</b> seconds as soon as any Survivor comes within <b>16 metres</b> of your Hook</li></ul>`;
                break;
            case "secWin":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_secondWind.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Second Wind";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "8.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When you heal another Survivor for the equivalent of <b>1 Health State</b>, <i>Second Wind</i> activates:
                <ul><li>The next time you are unhooked or unhook yourself, you suffer from the <b>Broken</b> Status Effect until <i>Second Wind</i> deactivates</li>
                <li>You are automatically healed <b>1 Health State</b> after 
                <b style="color: #e8c252;">28</b>/
                <b style="color: #199b1e;">24</b>/
                <b style="color: #ac3ee3;">20</b> seconds</li></ul>
                While <i>Second Wind</i> is active, the following conditions will deactivate it:
                <ul><li>Successfully being healed by <i>Second Wind</i></li>
                <li>Being put into the <b>Dying State</b> before the timer elapses</li></ul>
                <i>Second Wind</i> does not activate if you already suffer from the <b>Broken</b> Status Effect`;
                break;
        //Yui Kimura Perks
            case "anyMeaNec":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Sweden/iconPerks_AnyMeansNecessary.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Any Means Necessary";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press and hold the <b>Active Ability button</b> for 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">5</b>/
                <b style="color: #ac3ee3;">4</b> seconds while standing beside a <b>dropped Pallet</b> to reset it to its upright position
                <ul><li>Grants the ability to see the <b>Auras of all dropped but not yet destroyed Pallets</b> in the environment</li></ul>`;
                break;
            case "brea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Sweden/iconPerks_Breakout.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Breakout";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While within <b>5 metres</b> of the Killer <b>carrying another Survivor</b>, the following effects apply:
                <ul><li>Grants you a 
                <b style="color: #e8c252;">5</b>/
                <b style="color: #199b1e;">6</b>/
                <b style="color: #ac3ee3;">7</b> % Haste Status Effect</li>
                <li>Increases the Wiggling speed of the <b>carried Survivor</b> by <b>+25%</b></li></ul>`;
                break;
            case "lucBre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Sweden/iconPerks_LuckyBreak.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Lucky Break";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are in the <b>Injured State</b>, <i>Lucky Break</i> activates:
                <ul><li>Suppresses the <b>creation of Pools of Blood and Scratch Marks</b> for up to 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">60</b> seconds</li></ul>
                Whenever you are healing another Survivor, <i>Lucky Break</i> recharges by the same amount of time spent performing the Healing action, up to its initial maximum<br><br>
                <i>Lucky Break</i> deactivates once its timer runs out or whenever your <b>Health State</b> updates to any other but the <b>Injured State</b>`;
                break;
        //Zarina Kassir Perks
            case "forThePeo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ukraine/iconPerks_ForThePeople.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "For the People";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While <b>healthy and healing another Survivor without using a Med-Kit</b>, press the <b>Active Ability button</b> to trigger the following effects:
                <dl><li>Trade <b>1 Health State</b> with the other Survivor:</li>
                <dd>- Instantly heals them to the <b>Injured State</b>, if they were <b>dying</b> or suffering from the <b>Deep Wound</b> Status Effect</dd>
                <dd>- Instantly heals them to <b>full health</b>, if they were <b>injured</b></dd>
                <li>You yourself become <b>injured</b> and suffer from the <b>Broken</b> Status Effect for the next 
                <b style="color: #e8c252;">80</b>/
                <b style="color: #199b1e;">70</b>/
                <b style="color: #ac3ee3;">60</b> seconds</li>
                <li>You become the Killer's <b>Obsession</b>, if not already</li></ul>
                Reduces your chance of becoming the <b>initial Obsession</b> by reducing the default value by <b>-100%</b>`;
                break;
            case "offTheRec":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ukraine/iconPerks_OffTheRecord.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Off the Record";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After being unhooked or unhooking yourself, <i>Off the Record</i> activates for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">70</b>/
                <b style="color: #ac3ee3;">80</b> seconds:
                <dl><li>Prevents <b>your Aura</b> from being revealed to the Killer, if they attempt to read it</li>
                <li>Suppresses <b>Grunts of Pain when injured</b></li>
                <li>Grants the <b>Endurance</b> Status Effect</li>
                <dd>- <b>Endurance</b> is cancelled prematurely when performing a <b>Conspicuous Action</b></dd></dl>
                <i>Off the Record</i> deactivates once the Exit Gates are <b>powered</b>`;
                break;
            case "redHer":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ukraine/iconPerks_RedHerring.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Red Herring";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "8.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After repairing a Generator for at least <b>1 second</b>, <i>Red Herring</i> triggers its primary effect:
                <dl><li>The <b>Aura of that Generator</b> is highlighted to you in <b>yellow</b></li>
                <li>The highlight persists until either of the following occurs:</li>
                <dd>- The Generator is completed</dd>
                <dd>- You start repairing a different Generator</dd>
                <dd>- You enter a Locker</dd></dl>
                When entering a Locker, <i>Red Herring</i> triggers its secondary effect:
                <ul><li>Triggers a <b>Loud Noise Notification</b> for the Killer on the <b>highlighted Generator</b></li></ul>
                <i>Red Herring</i> has a cooldown of 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> seconds`;
                break;
        //Cheryl Mason Perks
            case "bloPac":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wales/iconPerks_BloodPact.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Blood Pact";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When either you or the <b>Obsession</b> become <b>injured</b> by any means, <i>Blood Pact</i> activates:
                <dl><li>Your <b>Auras</b> are constantly revealed to one another</li>
                <li>Completing a Healing Action on the <b>Obsession</b> or having them complete one on yourself, grants both of you a 
                <b style="color: #e8c252;">5</b>/
                <b style="color: #199b1e;">6</b>/
                <b style="color: #ac3ee3;">7</b> % <b>Haste</b> Status Effect</li>
                <dd>- This effect lasts for as long as you both remain within <b>16 metres</b> of one another</dd></dl>
                <i>Blood Pact</i> is temporarily disabled if you yourself are the <b>Obsession</b><br><br>
                Reduces your chance of becoming the <b>initial Obsession</b> by reducing the default value by <b>-100%</b>`;
                break;
            case "repAll":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wales/iconPerks_RepressedAlliance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Repressed Alliance";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After repairing Generators for a total of 
                <b style="color: #e8c252;">55</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">45</b> seconds, <i>Repressed Alliance</i> activates:
                <ul><li>Press the <b>Active Ability button</b> to call upon The Entity to <b>block the Generator</b> you are currently repairing for <b>30 seconds</b>, after which <i>Repressed Alliance</i> deactivates</li>
                <li>The <b>Aura of the blocked Generator</b> is revealed to all Survivors in <b>white</b></li></ul>
                <i>Repressed Alliance</i> can only be triggered when <b>no other Survivors</b> are repairing your Generator`;
                break;
            case "souGua":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wales/iconPerks_SoulGuard.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Soul Guard";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After being healed from or having recovered from the <b>Dying State</b>, you benefit from the following effect:
                <dl><li>Grants the <b>Endurance</b> Status Effect for 
                <b style="color: #e8c252;">4</b>/
                <b style="color: #199b1e;">6</b>/
                <b style="color: #ac3ee3;">8</b> seconds</li>
                <dd>- <b>Endurance</b> is cancelled prematurely when performing a <b>Conspicuous Action</b></dd></dl>
                While suffering from the <b>Cursed</b> Status Effect, you benefit from the following effects:
                <ul><li>Grants the ability to <b>fully recover</b> yourself from the <b>Dying State</b></li></ul>
                <i>Soul Guard</i> has a cooldown of <b>30 seconds</b>`;
                break;
        //Felix Richter Perks
            case "buiToLas":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yemen/iconPerks_BuiltToLast.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Built to Last";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Hiding inside a Locker for 
                <b style="color: #e8c252;">14</b>/
                <b style="color: #199b1e;">13</b>/
                <b style="color: #ac3ee3;">12</b> seconds while carrying a <b>depleted Item</b> has the following effect:
                <ul><li><b>First use</b>: Recharges the Item to <b>99%</b></li>
                <li><b>Second use</b>: Recharges the Item to <b>66%</b></li>
                <li><b>Third use</b>: Recharges the Item to <b>33%</b></li></ul>
                <i>Built to Last</i> is disabled for the remainder of the Trial after the third use`;
                break;
            case "desMea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yemen/iconPerks_DesperateMeasures.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Desperate Measures";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "17pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Increases your Action speeds for Healing and Unhooking by 
                <b style="color: #e8c252;">10</b>/
                <b style="color: #199b1e;">12</b>/
                <b style="color: #ac3ee3;">14</b> % <b>for each injured, hooked, or dying Survivor</b>, up to a maximum of 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">48</b>/
                <b style="color: #ac3ee3;">56</b> %`;
                break;
            case "vis":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yemen/iconPerks_Visionary.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Visionary";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The <b>Auras of Generators</b> are revealed to you within <b>32 metres</b>.<br><br>
                Each time a Generator is completed, <i>Visionary</i> is deactivated for 
                <b style="color: #e8c252;">20</b>/
                <b style="color: #199b1e;">18</b>/
                <b style="color: #ac3ee3;">16</b> seconds`;
                break;
        //Élodie Rakoto Perks
            case "app":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Aurora/iconPerks_Appraisal.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Appraisal";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `<i>Appraisal</i> has <b>3 Tokens</b> at the start of the Trial:
                <ul><li>Consume <b>-1 Token</b> to perform the <b>Rummage</b> action on an already unlocked Chest in order to retrieve a <b>second Item</b> from it</li>
                <li>Increases Rummaging speed by 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">60</b>/
                <b style="color: #ac3ee3;">80</b> %</li></ul>
                <b>Rummaging</b> is only available <b>once per Chest</b>`;
                break;
            case "dec":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Aurora/iconPerks_Deception.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Deception";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press and hold the <b>Sprint button while interacting with a Locker</b> for the following effects:
                <ul><li>Suppresses the <b>creation of your Scratch Marks and Pools of Blood</b> for <b>5 seconds</b></li>
                <li>Causes you to <b>run past the targeted Locker</b>, instead of entering it</li>
                <li>Causes its <b>doors to swiftly open and close again</b>, feining you having entered it in a rush</li>
                <li>Triggers a <b>Loud Noise Notification for the Killer</b> at its location</li></ul>
                <i>Deception</i> has a cooldown of 
                <b style="color: #e8c252;">25</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">15</b> seconds`;
                break;
            case "powStr":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Aurora/iconPerks_PowerStruggle.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Power Struggle";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.8pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Reveals the <b>Auras of available Pallets</b> whenever you are in the <b>Dying State</b>.<br><br>
                While being <b>carried by The Killer</b>, reaching 
                <b style="color: #e8c252;">25</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">15</b> % Wiggling progression activates <i>Power Struggle</i>:
                <ul><li>You can drop a nearby, <b>standing Pallet</b> to <b>stun</b> the Killer and escape their grasp</li></ul>
                <i>Power Struggle</i> deactivates after triggering successfully`;
                break;
        //Yun-Jin Lee Perks
            case "fasTra":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Comet/iconPerks_FastTrack.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Fast Track";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever a Survivor <b>other than yourself is hooked</b>, <i>Fast Track</i> is granted 
                <b style="color: #e8c252;">1</b>/
                <b style="color: #199b1e;">2</b>/
                <b style="color: #ac3ee3;">3</b> Token(s), up to a maximum of 
                <b style="color: #e8c252;">9</b>/
                <b style="color: #199b1e;">18</b>/
                <b style="color: #ac3ee3;">27</b> Tokens
                <ul><li>Succeeding a <b>Great Repair Skill Check</b> consumes <b>all accumulated Tokens</b></li>
                <li>Increases the bonus Progression awarded for succeeding <b>that Skill Check</b> by a stackable <b>+1 % per Token</b></li></ul>`;
                break;
            case "selPre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Comet/iconPerks_Self-Preservation.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Self-Preservation";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever another Survivor is hit with a <b>Basic Attack or Special Attack</b> within <b>16 metres</b> of you, <i>Self-Preservation</i> activates:
                <ul><li><b>Scratch Marks, Grunts of Pain when injured, and Bleeding</b> are suppressed for the next 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> seconds</li></ul>`;
                break;
            case "smaHit":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Comet/iconPerks_SmashHit.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Smash Hit";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `<b>Stunning the Killer with a Pallet</b> triggers <i>Smash Hit</i>:
                <ul><li>Grants a <b>+50% Haste</b> Status Effect for <b>4 seconds</b></li></ul>
                <i>Smash Hit</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">30</b>/
                <b style="color: #199b1e;">25</b>/
                <b style="color: #ac3ee3;">20</b> seconds.<br><br>
                <i>Smash Hit</i> cannot be used when <b>Exhausted</b>`;
                break;
        //Jill Valentine Perks
            case "blaMin":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_BlastMine.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Blast Mine";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "8.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After repairing Generators for a total of <b>40%</b>, <i>Blast Mine</i> activates:
                <dl><li>Press the <b>Active Ability button</b> while near a <b>partially progressed Generator</b> to install a <b>Trap</b>, which stays active for 
                <b style="color: #e8c252;">100</b>/
                <b style="color: #199b1e;">110</b>/
                <b style="color: #ac3ee3;">120</b> seconds</li>
                <li>When the Killer <b>damages the Trapped Generator</b>, its <b>Trap</b> explodes half-way through:</li>
                <dd>- <b>Stuns</b> the Killer for <b>4 seconds</b></dd>
                <dd>- <b>Blinds all Players</b> within <b>12.5 metres</b> of the <b>Trapped Generator</b></dd></dl>
                <i>Blast Mine</i> deactivates after triggering successfully or once the timer runs out.<br><br>
                The <b>Auras of Trapped Generators</b> are revealed to all Survivors in <b>yellow</b>`;
                break;
            case "cou":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_Counterforce.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Counterforce";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `You cleanse Totems <b>20%</b> faster
                <ul><li>Gain another, stackable <b>20%</b> Cleansing Speed bonus <b>per cleansed Totem</b></li>
                <li>After cleansing a Totem, the <b>Aura of the Totem farthest from you</b> is revealed to you for 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">3</b>/
                <b style="color: #ac3ee3;">4</b> seconds</li></ul>`;
                break;
            case "res":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_Resurgence.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Resurgence";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "18pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Being unhooked or unhooking yourself grants you 
                <b style="color: #e8c252;">50</b>/
                <b style="color: #199b1e;">60</b>/
                <b style="color: #ac3ee3;">70</b> % Healing progress`;
                break;
        //Leon S. Kennedy Perks
            case "bitTheBul":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_BiteTheBullet.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Bite the Bullet";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When healing yourself or another Survivor, you benefit from the following effects:
                <dl><li>Suppresses <b>all noises related to Healing and Grunts of Pain</b></li>
                <li>Failed Healing Skill Checks do not trigger a <b>Loud Noise Notification</b></li>
                <dd>- Reduces the Penalty to 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">2</b>/
                <b style="color: #ac3ee3;">1</b> % of the total Progression</dd></dl>`;
                break;
            case "fla":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_Flashbang.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Flashbang";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After repairing Generators for a total of 
                <b style="color: #e8c252;">50</b>/
                <b style="color: #199b1e;">45</b>/
                <b style="color: #ac3ee3;">40</b> %, <i>Flashbang</i> activates:
                <ul><li>Press the <b>Active Ability button while hiding inside a Locker</b> to craft a <b>Flash Grenade</b></li></ul>
                <i>Flashbang</i> deactivates after use`;
                break;
            case "rooSpi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_RookieSpirit.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Rookie Spirit";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While repairing Generators, succeed 
                <b style="color: #e8c252;">5</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">3</b> Good or Great Skill Checks to activate <i>Rookie Spirit</i> for the remainder of the Trial:
                <ul><li>The <b>Auras of any regressing Generators</b> are revealed to you until they stop regressing by any means</li></ul>`;
                break;
        //Mikaela Reid Perks
            case "booCirOfHea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Hubble/iconPerks_BoonCircleOfHealing.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Boon: Circle of Healing";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "8.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press and hold the <b>Active Ability button</b> on a Dull or Hex Totem to <b>bless it</b> and create a <b>Boon Totem</b>.<br>
                Soft chimes ring out in a radius of <b>24 metres</b>.<br><br>
                All Survivors benefit from the following effects when inside the <b>Boon Totem's radius</b>:
                <ul><li>Increases the Healing speeds to other Survivors by 
                <b style="color: #e8c252;">50</b>/
                <b style="color: #199b1e;">75</b>/
                <b style="color: #ac3ee3;">100</b> % when not using a Med-Kit</li>
                <li>If a Survivor is injured, <b>their Aura</b> is revealed to all other Survivors</li></ul>
                Survivors can only be affected by <b>one instance</b> of <i>Boon: Circle of Healing</i> at a time.<br><br>
                Only <b>one Totem</b> can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the <b>same Boon Totem</b>`;
                break;
            case "booShaSte":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Hubble/iconPerks_BoonShadowStep.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Boon: Shadow Step";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press and hold the <b>Active Ability button</b> on a Dull or Hex Totem to <b>bless it</b> and create a <b>Boon Totem</b>.<br>
                Soft chimes ring out in a radius of <b>24 metres</b>.<br><br>
                All Survivors benefit from the following effects when inside the <b>Boon Totem's radius</b>:
                <dl><li><b>Scratch Marks</b> are suppressed</li>
                <li><b>Auras</b> are hidden from The Killer</li>
                <dd>- Both effects linger for 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">3</b>/
                <b style="color: #ac3ee3;">4</b> seconds after leaving the <b>Boon Totem's range</b></dd></dl>
                Only <b>one Totem</b> can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the <b>same Boon Totem</b>`;
                break;
            case "cla":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Hubble/iconPerks_Clairvoyance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Clairvoyance";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After cleansing or blessing a Totem, <i>Clairvoyance</i> activates:
                <dl><li>While <b>empty-handed</b>, press and hold the <b>Use Item button</b> to unlock your full Aura-reading potential for up to 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">9</b>/
                <b style="color: #ac3ee3;">10</b> seconds, allowing you to see the <b>Auras</b> of the following environmental objects within <b>64 metres</b>:</li>
                <dd>- Chests</dd>
                <dd>- Exit Gate Switches</dd>
                <dd>- Generators</dd>
                <dd>- Hatch</dd>
                <dd>- Hooks</dd></dl>`;
                break;
        //Jonah Vasquez Perks
            case "booExp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ion/T_iconPerks_BoonExponential.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Boon: Exponential";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press and hold the <b>Active Ability button</b> on a Dull or Hex Totem to <b>bless it</b> and create a <b>Boon Totem</b>.<br>
                Soft chimes ring out in a radius of <b>24 metres</b>.<br><br>
                All Survivors benefit from the following effects when inside the <b>Boon Totem's radius</b>:
                <ul><li><b style="color: #e8c252;">90</b>/
                <b style="color: #199b1e;">95</b>/
                <b style="color: #ac3ee3;">100</b> % bonus to the Recovery speed</li>
                <li>Unlocks the <b>Self-Recovery ability</b>, allowing you to <b>fully recover</b> from the <b>Dying State</b></li></ul>
                Only <b>one Totem</b> can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the <b>same Boon Totem</b>`;
                break;
            case "corAct":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ion/T_iconPerks_CorrectiveAction.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Corrective Action";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `You start the Trial with 
                <b style="color: #e8c252;">1</b>/
                <b style="color: #199b1e;">2</b>/
                <b style="color: #ac3ee3;">3</b> Token(s) and succeeding a <b>Great Skill Check</b> grants <b>+1 Token</b>, up to a maximum of <b>5 Tokens</b>.<br><br>
                While any other Survivor performs a skilful interaction that can trigger Skill Checks, they benefit from the following effects:
                <dl><li>Converts any <b>Failed Skill Check</b> into a <b>Good Skill Check</b></li>
                <dd>- This consumes <b>-1 Token</b></dd>
                <li>The <b>Aura of that Survivor</b> is revealed to you for <b>6 seconds</b></li></dl>
                <i>Corrective Action</i> does not apply to <b>special</b> Skill Checks`;
                break;
            case "ove":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ion/T_iconPerks_Overcome.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Overcome";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Becoming injured by any means triggers <i>Overcome</i>:
                <ul><li>Extends the duration of the <b>On-hit Speed Boost</b> by <b>+2 seconds</b></li></ul>
                <i>Overcome</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> Token(s) seconds.<br><br>
                <i>Overcome</i> cannot be used when <b>Exhausted</b>`;
                break;
        //Yoichi Asakawa Perks
            case "booDarThe":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kepler/iconPerks_DarkTheory.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Boon: Dark Theory";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press and hold the <b>Active Ability button</b> on a Dull or Hex Totem to <b>bless it</b> and create a <b>Boon Totem</b>.<br>
                Soft chimes ring out in a radius of <b>24 metres</b>.<br><br>
                All Survivors benefit from the following effects when inside the <b>Boon Totem's radius</b>:
                <dl><li>Grants a <b>+2% Haste</b> Status Effect</li>
                <dd>- This effect lingers for 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">3</b>/
                <b style="color: #ac3ee3;">4</b> seconds after leaving the <b>Boon Totem's range</b></dd></dl>
                Only <b>one Totem</b> can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the <b>same Boon Totem</b>`;
                break;
            case "empCon":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kepler/iconPerks_EmpathicConnection.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Empathic Connection";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While other Survivors are in the <b>Injured State</b>, they benefit from the following effects:
                <ul><li><b>Your Aura</b> is revealed to them within 
                <b style="color: #e8c252;">32</b>/
                <b style="color: #199b1e;">64</b>/
                <b style="color: #ac3ee3;">96</b> metres of your location</li>
                <li>Increases your Healing speed to other Survivors by <b>+30%</b></li></ul>`;
                break;
            case "parGui":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kepler/iconPerks_ParentalGuidance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Parental Guidance";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After <b>stunning the Killer</b> by any means, <i>Parental Guidance</i> triggers its effect:
                <ul><li>Suppresses your <b>Grunts of Pain</b> and the <b>creation of Scratch Marks and Pools of Blood</b> for 
                <b style="color: #e8c252;">5</b>/
                <b style="color: #199b1e;">6</b>/
                <b style="color: #ac3ee3;">7</b> seconds</li></ul>`;
                break;
        //Haddie Kaur Perks
            case "innFoc":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Meteor/iconPerks_InnerFocus.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Inner Focus";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Grants the ability to see the <b>Scratch Marks of other Survivors</b>.<br><br>
                Whenever another Survivor loses a <b>Health State due to the Killer</b>, the <b>Aura of the Killer</b> is revealed to you for 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> seconds`;
                break;
            case "over":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Meteor/iconPerks_Overzealous.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Overzealous";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After cleansing or blessing a Totem, <i>Overzealous</i> activates:
                <ul><li><b>Dull Totem</b>: Increases your Repair speed by 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">9</b>/
                <b style="color: #ac3ee3;">10</b> %</li>
                <li><b>Hex Totem</b>: Increases your Repair speed by 
                <b style="color: #e8c252;">16</b>/
                <b style="color: #199b1e;">18</b>/
                <b style="color: #ac3ee3;">20</b> %</li></ul>
                <i>Overzealous</i> deactivates after <b>losing a Health State</b> by any means`;
                break;
            case "resMan":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Meteor/iconPerks_ResidualManifest.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Residual Manifest";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After a successful <b>Killer Blind</b>, the Killer suffers from the <b>Blindness</b> Status Effect for 
                <b style="color: #e8c252;">20</b>/
                <b style="color: #199b1e;">25</b>/
                <b style="color: #ac3ee3;">30</b> seconds<br><br>
                <i>Residual Manifest</i> grants the ability to <b>rummage</b> through an opened Chest <b>once per Trial</b> and will guarantee a <b>basic Flashlight</b>`;
                break;
        //Ada Wong Perks
            case "lowPro":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_LowProfile.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Low Profile";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are the <b>only Survivor</b> not currently incapacitated by either being <b>downed, carried, or hooked</b>, <i>Low Profile</i> activates:
                <ul><li>Suppresses <b>your Grunts of Pain and the creation of Pools of Blood and Scratch Marks</b> for 
                <b style="color: #e8c252;">70</b>/
                <b style="color: #199b1e;">80</b>/
                <b style="color: #ac3ee3;">90</b> seconds</li></ul>
                <i>Low Profile</i> deactivates after use and only accounts for <b>Survivors still participating</b> in the Trial`;
                break;
            case "reaHea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_ReactiveHealing.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Reactive Healing";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever another Survivor within <b>32 metres</b> of your location <b>loses a Health State</b> by any means while you are in the <b>Injured State</b>, you benefit from the following effect:
                <ul><li>Grants 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">45</b>/
                <b style="color: #ac3ee3;">50</b> % of your <b>missing</b> Healing Progression towards your Health Bar</li></ul>`;
                break;
            case "wir":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_Wiretap.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Wiretap";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After repairing Generators for a total of <b>40%</b>, <i>Wiretap</i> activates:
                <ul><li>Press the <b>Active Ability button</b> while near a <b>partially progressed Generator</b> to install a <b>Trap</b>, which stays active for 
                <b style="color: #e8c252;">100</b>/
                <b style="color: #199b1e;">110</b>/
                <b style="color: #ac3ee3;">120</b> seconds</li>
                <li>Whenever the Killer comes within <b>14 metres</b> of the <b>Trapped Generator</b>, <b>their Aura</b> is revealed to all Survivors</li></ul>
                <i>Wiretap</i> deactivates after the Generator is <b>damaged</b> or once the timer runs out.<br><br>
                The <b>Auras of Trapped Generators</b> are revealed to all Survivors in <b>yellow</b>`;
                break;
        //Rebecca Chambers Perks
            case "betThanNew":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_BetterThanNew.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Better than New";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Completing a Healing action on <b>another Survivor</b> grants them the following benefits until <b>they receive damage</b> again:
                <ul><li>Increases their Action speeds for Blessing, Cleansing, Healing, and Unlocking by 
                <b style="color: #e8c252;">12</b>/
                <b style="color: #199b1e;">14</b>/
                <b style="color: #ac3ee3;">16</b> %</li></ul>`;
                break;
            case "hyp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_Hyperfocus.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hyperfocus";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Succeeding a <b>Great Skill Check</b> while repairing or healing grants <b>+1 Token</b>, up to a maximum of <b>6 Tokens</b>:
                <ul><li>Increases the <b>Skill Check Trigger odds and Pointer Rotation speed</b> by <b>+4% per Token each</b>, up to a maximum of <b>+24 %</b></li>
                <li>Increases the Skill Check Bonus progression by 
                <b style="color: #e8c252;">10</b>/
                <b style="color: #199b1e;">20</b>/
                <b style="color: #ac3ee3;">30</b> % of its base value <b>per Token</b>, up to a maximum of 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">120</b>/
                <b style="color: #ac3ee3;">180</b> %</li></ul>
                <i>Hyperfocus</i> loses <b>all Tokens</b> after succeeding just a Good Skill Check, failing one, or if the action is interrupted by any means`;
                break;
            case "rea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_Reassurance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Reassurance";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press the <b>Active Ability button</b> while within <b>6 metres</b> of a <b>hooked Survivor</b> to pause their Sacrifice Process for the next 
                <b style="color: #e8c252;">20</b>/
                <b style="color: #199b1e;">25</b>/
                <b style="color: #ac3ee3;">30</b> seconds 
                <ul><li>This also pauses any Skill Checks, if the Survivor is in the Struggle Phase</li></ul>
                <i>Reassurance</i> can only be used <b>once per Survivor per Hook Instance</b>`;
                break;
        //Vittorio Toscano Perks
            case "fog":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Quantum/iconPerks_Fogwise.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Fogwise";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "18pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Succeeding a <b>Great Skill Check</b> while repairing a Generator reveals the <b>Aura of the Killer</b> to you for 
                <b style="color: #e8c252;">4</b>/
                <b style="color: #199b1e;">5</b>/
                <b style="color: #ac3ee3;">6</b> seconds`;
                break;
            case "potEne":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Quantum/iconPerks_PotentialEnergy.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Potential Energy";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "8pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After <b>uninterruptedly</b> repairing Generators for a total of 
                <b style="color: #e8c252;">12</b>/
                <b style="color: #199b1e;">10</b>/
                <b style="color: #ac3ee3;">8</b> seconds, press the <b>Active Ability button</b> to activate <i>Potential Energy</i>:
                <ul><li>Continuing to repair the Generator will <b>charge <i>Potential Energy</i> instead of progressing</b> the Generator</li>
                <li>Converts <b>1.5%</b> of Repair progression into <b>1 Token</b>, up to a maximum of <b>20 Tokens</b></li>
                <li>Missing Skill Checks results in <b>losing some Tokens</b></li></ul>
                When <i>Potential Energy</i> has at least <b>1 Token</b>, press the <b>Active Ability button</b> while repairing a Generator to instantly progress it by <b>+1 % per accumulated Token</b>, deactivating <i>Potential Energy</i><br><br>
                <i>Potential Energy</i> loses <b>all Tokens</b> and deactivates upon <b>losing a Health State</b>`;
                break;
            case "quiGam":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Quantum/iconPerks_VittoriosGambit.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Quick Gambit";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While being <b>chased</b> by the Killer, the following effects apply:
                <ul><li>The <b>Auras of other Survivors</b> are revealed to you</li>
                <li>Increases the Repair speed of other Survivors by 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">5</b> %</li></ul>
                <i>Quick Gambit</i> has a cooldown of <b>60 seconds</b> upon <b>losing a Health State</b>`;
                break;
        //Thalita Lyra Perks
            case "cutLoo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_CutLoose.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Cut Loose";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After performing a <b>Rush Vault action in a Chase</b>, <i>Cut Loose</i> activates for the next 
                <b style="color: #e8c252;">4</b>/
                <b style="color: #199b1e;">5</b>/
                <b style="color: #ac3ee3;">6</b> seconds:
                <ul><li>Suppresses both the <b>Loud Noise Notification</b> and the sound effects triggered by rushing to vault</li>
                <li>Successfully performing <b>another Rush Vault action</b> while <i>Cut Loose</i> is active resets the timer</li></ul>
                <i>Cut Loose</i> has a cooldown of <b>45 seconds</b>`;
                break;
            case "friCom":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_FriendlyCompetition.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Friendly Competition";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you complete a Generator <b>with at least one other Survivor</b>, <i>Friendly Competition</i> activates:
                <ul><li>Increases your Repair speed, and that of the other Survivor(s) who completed the repairs with you, by <b>+5%</b> for the next 
                <b style="color: #e8c252;">45</b>/
                <b style="color: #199b1e;">60</b>/
                <b style="color: #ac3ee3;">75</b> seconds</li></ul>`;
                break;
            case "teaPowOfTwo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_TeamworkPowerOfTwo.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Teamwork: Power of Two";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you finish healing another Survivor, <i>Teamwork: Power of Two</i> activates, and both you and the healed Survivor benefit from the following effect:
                <dl><li>Grants a <b>+5% Haste</b> Status Effect for as long as you stay within 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">12</b>/
                <b style="color: #ac3ee3;">16</b> metres of one another</li>
                <dd>- This effect lingers for <b>4 seconds</b> once out of range and resumes upon re-entering it before that timer elapses</dd></dl>
                Survivors can only be affected by <b>one instance</b> of <i>Teamwork: Power of Two</i> at a time`;
                break;
        //Renato Lyra Perks
            case "bacPla":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_BackgroundPlayer.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Background Player";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever another Survivor is <b>picked up</b>, <i>Background Player</i> activates for <b>10 seconds</b>.<br><br>
                Starting to <b>run while it is active</b> causes the following effect:
                <ul><li>Grants a <b>+50% Haste</b> Status Effect for <b>5 seconds</b></li></ul>
                <i>Background Player</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">30</b>/
                <b style="color: #199b1e;">25</b>/
                <b style="color: #ac3ee3;">20</b> seconds.<br><br>
                <i>Background Player</i> cannot be used when <b>Exhausted</b>`;
                break;
            case "bloRus":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_BloodRush.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Blood Rush";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After unhooking yourself or being unhooked, <i>Blood Rush</i> activates for 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">60</b> seconds:
                <ul><li>Press the <b>Active Ability button</b> to <b>instantly recover</b> from the <b>Exhausted</b> Status Effect</li></ul>
                <i>Blood Rush</i> is deactivated after use or performing a <b>Conspicuous Action</b>.<br><br>
                <i>Blood Rush</i> is disabled for the remainder of the Trial once the Exit Gates are <b>powered</b>`;
                break;
            case "teaColSte":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_TeamworkCollectiveStealth.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Teamwork: Collective Stealth";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever another Survivor finishes healing you, Teamwork: Collective Stealth activates, and both you and the Survivor who healed you benefit from the following effect:
                <dl><li>Suppresses your <b>Scratch Marks</b> for as long as you stay within 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">12</b>/
                <b style="color: #ac3ee3;">16</b> metres of one another</li>
                <dd>- This effect lingers for <b>4 seconds</b> once out of range and resumes upon re-entering it before that timer elapses</dd></dl>
                Survivors can only be affected by <b>one instance</b> of <i>Teamwork: Collective Stealth</i> at a time`;
                break;
        //Gabriel Soma Perks
            case "madForThi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Umbra/IconPerks_madeForThis.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Made for This";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10.25pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are in the <b>Injured State</b>, <i>Made for This</i> activates and you benefit from the following effects:
                <dl><li>Grants the <b>Endurance</b> Status Effect for 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> seconds, after completing a Healing action on <b>another Survivor</b></li>
                <dd>- <b>Endurance</b> is cancelled prematurely when performing a <b>Conspicuous Action</b></dd>
                <li>Grants a 
                <b style="color: #e8c252;">1</b>/
                <b style="color: #199b1e;">2</b>/
                <b style="color: #ac3ee3;">3</b> % <b>Haste</b> Status Effect <b>while running</b> and also suffering from the <b>Deep Wound</b> Status Effect</li></dl>`;
                break;
            case "sca":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Umbra/IconPerks_scavenger.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Scavenger";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While holding a <b>depleted Toolbox</b>, <i>Scavenger</i> activates:
                <ul><li>Succeeding at <b>Great Repairing Skill Checks</b> grants <b>+1 Token</b>, up to a maximum of <b>5 Tokens</b></li>
                <li>Reaching the <b>maximum number of Tokens</b> automatically consumes them and <b>fully recharges the Toolbox</b></li>
                <li>Recharging a Toolbox will reduce your Repair speed by <b>-50%</b> for the next 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">35</b>/
                <b style="color: #ac3ee3;">30</b> seconds</li></ul>
                <i>Scavenger</i> grants the ability to <b>rummage</b> through an opened Chest <b>once per Trial</b> and will guarantee a <b>basic Toolbox</b>`;
                break;
            case "tro":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Umbra/IconPerks_troubleshooter.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Troubleshooter";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When you are <b>chased by the Killer</b>, <i>Troubleshooter</i> activates:
                <ul><li>The <b>Aura of the Generator with the most progress</b> is revealed to you</li>
                <li>The <b>Aura of the Killer</b> is revealed to you for  seconds after <b>dropping a Pallet</b></li></ul>
                These effects linger for 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> seconds <b>after ending the Chase</b>, after which <i>Troubleshooter</i> deactivates`;
                break;
        //Nicolas Cage Perks
            case "dra":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Venus/iconPerks_Dramaturgy.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dramaturgy";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "7.9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are <b>Healthy</b>, <i>Dramaturgy</i> activates:
                <dl><li>While <b>running</b>, press the <b>Active Ability button</b> to run with knees high for <b>0.5 seconds</b> to gain a <b>+25% Haste</b> Status Effect for <b>2 seconds</b>, followed by one of the following effects:</li>
                <dd>- Suffer from the <b>Exposed</b> Status Effect for <b>12 seconds</b></dd>
                <dd>- Extend the duration of the <b>Haste</b> Status Effect for <b>another 2 seconds</b></dd>
                <dd>- Scream, but without notifying the Killer</dd>
                <dd>- Receive a <b>random Item of Rare Rarity</b>, with a <b>random selection of Add-ons</b> attached to it, automatically <b>dropping any previously held Item</b></dd>
                <li>The same effect cannot happen <b>twice in a row</b></li></dl>
                <i>Dramaturgy</i> causes the <b>Exhausted</b> Status Effect for 
                <b style="color: #e8c252;">60</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">40</b> seconds.<br><br>
                <i>Dramaturgy</i> cannot be used when <b>Exhausted</b>`;
                break;
            case "ploTwi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Venus/iconPerks_PlotTwist.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Plot Twist";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are in the <b>Injured State</b>, <i>Plot Twist</i> activates:
                <dl><li>While <b>crouching and motionless</b>, press the <b>Active Ability button</b> to <b>silently enter the Dying State</b> with the following benefits:</li>
                <dd>- Suppresses <b>Grunts of Pain</b></dd>
                <dd>- Suppresses <b>Pools of Blood</b></dd>
                <dd>- Grants the ability to <b>fully recover from the Dying State</b></dd>
                <li>After full recovery using <i>Plot Twist</i>, you are healed instantly and gain a <b>+50% Haste</b> Status Effect for 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">3</b>/
                <b style="color: #ac3ee3;">4</b> seconds</li></dl>
                <i>Plot Twist</i> deactivates after recovering yourself by any means and reactivates once more once the Exit Gates are <b>powered</b>`;
                break;
            case "scePar":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Venus/iconPerks_ScenePartner.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Scene Partner";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are inside the <b>Terror Radius</b>, <i>Scene Partner</i> activates:
                <ul><li><b>Looking at the Killer</b> causes you to scream, which reveals their <b>Aura</b> for 
                <b style="color: #e8c252;">4</b>/
                <b style="color: #199b1e;">5</b>/
                <b style="color: #ac3ee3;">6</b> seconds</li>
                <li>There is a chance of <b>50%</b> that you will scream again, extending the Aura-reveal duration by <b>another +2 seconds</b></li></ul>
                <i>Scene Partner</i> has a cooldown of <b>40 seconds</b>`;
                break;
        //Ellen Ripley Perks
            case "cheTra":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wormhole/iconPerks_ChemicalTrap.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Chemical Trap";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After repairing Generators for a total of <b>20%</b>, <i>Chemical Trap</i> activates:
                <dl><li>Press the <b>Active Ability button</b> while near a <b>dropped Pallet</b> to install a <b>Trap</b>, which stays active for 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">60</b> seconds</li>
                <li>When the Killer breaks the <b>Trapped Pallet</b>, its <b>Trap explodes</b>, spraying the Killer with a chemical compound:</li>
                <dd>Causes the Killer to suffer from a <b>-50% Hindered</b> Status Effect for <b>4 seconds</b></dd></dl>
                <i>Chemical Trap</i> deactivates after triggering successfully or once the timer runs out.<br><br>
                The <b>Auras of Trapped Pallets</b> are revealed to all Survivors in <b>yellow</b>`;
                break;
            case "ligFoo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wormhole/iconPerks_LightFooted.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Light-Footed";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "15pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are <b>healthy</b>, <i>Light-Footed</i> activates:
                <ul><li>Suppresses the <b>sound of your footsteps while running</b></li></ul>
                <i>Light-Footed</i> has a cooldown of 
                <b style="color: #e8c252;">28</b>/
                <b style="color: #199b1e;">24</b>/
                <b style="color: #ac3ee3;">20</b> seconds after performing a <b>Rush Vault action</b>`;
                break;
            case "lucSta":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wormhole/iconPerks_LuckyStar.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Lucky Star";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `While hiding inside a Locker, you benefit from the following effect:
                <ul><li>Suppresses your <b>Grunts of Pain</b></li></ul>
                After exiting the Locker you benefit from the following effects for <b>30 seconds</b>:
                <ul><li>Suppresses your <b>Grunts of Pain and the creation of Pools of Blood</b></li>
                <li>The <b>Auras of the other Survivors</b> are revealed to you</li>
                <li>The <b>Aura of the closest Generator</b> is revealed to you in <b>yellow</b></li></ul>
                <i>Lucky Star</i> has a cooldown of 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">35</b>/
                <b style="color: #ac3ee3;">30</b> seconds`;
                break;
        //Alan Wake Perks
            case "booIll":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Zodiac/iconsPerks_Illumination.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Boon: Illumination";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "7.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press and hold the <b>Active Ability button</b> on a Dull or Hex Totem to <b>bless it</b> and create a <b>Boon Totem</b>.<br>
                Soft chimes ring out in a radius of <b>24 metres</b>.<br><br>
                All Survivors benefit from the following effects when inside the <b>Boon Totem's radius</b>:
                <ul><li>The <b>Auras of all Chests and Generators</b> are revealed to you in <b>blue</b></li></ul>
                Increases your Action speeds for Blessing and Cleansing by 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> % while you have a <b>lit Boon Totem</b>.<br><br>
                Survivors can only be affected by <b>one instance</b> of <i>Boon: Illumination</i> at a time.<br><br>
                Only <b>one Totem</b> can be blessed by your <b>Boon Perks</b> at a time and all of their effects are active on the <b>same Boon Totem</b>`;
                break;
            case "chaOfLig":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Zodiac/iconsPerks_ChampionOfLight.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Champion of Light";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "10pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `<b>Shining a Flashlight</b> applies the following effect:
                <ul><li>Grants a <b>+50% Haste</b> Status Effect</li></ul>
                Blinding the Killer by any means applies the following effect:
                <dl><li>Causes them to suffer from a <b>-20% Hindered</b> Status Effect for <b>6 seconds</b></li>
                <dd>- This effect does not stack</dd></dl>
                <i>Champion of Light</i> has a cooldown of 
                <b style="color: #e8c252;">80</b>/
                <b style="color: #199b1e;">70</b>/
                <b style="color: #ac3ee3;">60</b> seconds after <b>blinding the Killer</b>`;
                break;
            case "dea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Zodiac/iconsPerks_Deadline.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Deadline";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are in the <b>Injured State</b>, <i>Deadline</i> activates:
                <dl><li>Increases the <b>Odds of triggering Skill Checks</b> by 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> % while repairing or healing</li>
                <dd>- Causes Skill Checks to appear in <b>random places</b></dd>
                <li>Reduces the penalty for <b>missed Skill Checks</b> by <b>-50%</b></li></dl>`;
                break;
        //Sable Ward Perks
            case "invWeaSpi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Applepie/iconsPerks_InvocationWeavingSpiders.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Invocation: Weaving Spiders";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "7.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When in the <b>Basement near the circle</b>, press the <b>Active Ability button</b> to begin the <b>Invocation</b>, which takes <b>60 seconds</b> to complete.<br><br>
                During an <b>Invocation</b>, <b>your Aura</b> is revealed to all other Survivors and they can join in, accelerating the process by <b>+100%</b> if they too have an <b><i>Invocation Perk</i></b> equipped, or by <b>+50 %</b> if they have not.<br><br>
                Once the <b>Invocation is completed</b>, the following effects apply:
                <ul><li><b>Permanently</b> reduces the <b>Repair Charges requirement of all Generators in the Trial</b> by 
                <b style="color: #e8c252;">8</b>/
                <b style="color: #199b1e;">9</b>/
                <b style="color: #ac3ee3;">10</b> Charges</li>
                <li>You automatically enter the <b>Injured State</b> from <b>any previous Health State</b>, and suffer from the <b>Broken</b> Status Effect <b>for the remainder of the Trial</b></li></ul>
                Completing this <b>Invocation</b> disables all other instances of <i>Invocation: Weaving Spiders</i> for the remainder of the Trial`;
                break;
            case "strInSha":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Applepie/iconsPerks_StrengthInShadows.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Strength in Shadows";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When you are in the <b>Basement</b>, <i>Strength in Shadows</i> activates:
                <ul><li>Unlocks the <i>Strength in Shadows</i> ability, allowing you to <b>self-heal without needing a Med-Kit</b> at <b>70%</b> of the normal Healing speed</li>
                <li>Upon <b>finishing a heal in the Basement</b>, the <b>Aura of the Killer</b> is revealed to you for 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">8</b>/
                <b style="color: #ac3ee3;">10</b> seconds</li></ul>`;
                break;
            case "wic":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Applepie/iconsPerks_Wicked.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Wicked";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "12pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `The <b>Aura of the Killer</b> is revealed to you for 
                <b style="color: #e8c252;">16</b>/
                <b style="color: #199b1e;">18</b>/
                <b style="color: #ac3ee3;">20</b> seconds after unhooking yourself or being unhooked.<br><br>
                Grants the ability to perform a <b>successful Self-Unhook at any point during the first Hook Stage, if you are hooked in the Basement</b>
                <ul><li>This effect cannot be triggered during the <b>second Hook Stage</b> or if you are hooked as the <b>Last Survivor Standing</b></li></ul>`;
                break;
        //The Troupe Perks
            case "barIns":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Churros/iconPerks_BardicInspiration.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Bardic Inspiration";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Press the <b>Active Ability button while standing and motionless</b> to enter the <b>Performance</b> interaction that lasts up to <b>15 seconds</b> and empowers other Survivors within <b>16 metres</b> of your location.<br><br>
                The empowering effect depends on the result of you <b>rolling a d20</b> and lasts for <b>90 seconds</b> after completing the <b>Performance</b>:
                <ul><li><b>1:</b> You scream, but without notifying the Killer</li>
                <li><b>2-10:</b> Skill Checks grant <b>+1%</b> Progression</li>
                <li><b>11-19:</b> Skill Checks grant <b>+2%</b> Progression</li>
                <li><b>20:</b> Skill Checks grant <b>+3%</b> Progression</li></ul>
                <i>Bardic Inspiration</i> has a cooldown of 
                <b style="color: #e8c252;">110</b>/
                <b style="color: #199b1e;">100</b>/
                <b style="color: #ac3ee3;">90</b> seconds after completing the <b>Performance or cancelling it</b>`;
                break;
            case "mirIll":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Churros/iconPerks_MirroredIllusion.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Mirrored Illusion";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After repairing Generators for a total of <b>20%</b>, <i>Mirrored Illusion</i> activates:
                <ul><li>Press the <b>Active Ability button</b> when next to either a <b>Chest, Exit Gate, Generator, or a Totem</b> to spawn a <b>Static Illusion</b> that lasts for 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">50</b>/
                <b style="color: #ac3ee3;">60</b> seconds</li></ul>
                <i>Mirrored Illusion</i> deactivates after triggering successfully`;
                break;
            case "stiSig":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Churros/iconPerks_StillSight.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Still Sight";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After <b>standing still</b> for 
                <b style="color: #e8c252;">6</b>/
                <b style="color: #199b1e;">5</b>/
                <b style="color: #ac3ee3;">4</b> seconds, <i>Still Sight</i> activates:
                <ul><li>The <b>Auras of the Killer</b> as well as <b>any Chests and Generators</b> within <b>24 metres</b> of your location are revealed to you until you <b>start moving again</b></li></ul>`;
                break;
        //Lara Croft Perks
            case "fin":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Donut/iconPerks_Finesse.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Finesse";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you are <b>healthy</b>, <i>Finesse</i> activates:
                <ul><li>Increases your Vaulting speed for a <b>Fast Vault</b> by <b>+20%</b></li></ul>
                <i>Finesse</i> has a cooldown of 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">35</b>/
                <b style="color: #ac3ee3;">30</b> seconds after performing a <b>Fast Vault</b>`;
                break;
            case "har":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Donut/iconPerks_Hardened.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hardened";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "14pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After <b>unlocking a Chest and either blessing or cleansing a Totem</b>, <i>Hardened</i> activates:
                <ul><li>Suppresses the urge to <b>scream from any cause</b> and instead causes the <b>Aura of the Killer</b> to be revealed to you for 
                <b style="color: #e8c252;">3</b>/
                <b style="color: #199b1e;">4</b>/
                <b style="color: #ac3ee3;">5</b> seconds</li></ul>`;
                break;
            case "spe":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Donut/iconPerks_Specialist.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Specialist";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "11.75pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever you <b>unlock or rummage</b> through a Chest, <i>Specialist</i> gains <b>+1 Token</b>, up to a maximum of <b>6 Tokens</b>:
                <ul><li>Succeeding a <b>Great Repair Skill Check</b> while repairing a Generator consumes <b>all Tokens</b></li>
                <li><b>Permanently</b> reduces the <b>Repair Charges requirement of that Generator</b> by 
                <b style="color: #e8c252;">2</b>/
                <b style="color: #199b1e;">3</b>/
                <b style="color: #ac3ee3;">4</b> Charges <b>per Token</b>, up to a maximum of 
                <b style="color: #e8c252;">12</b>/
                <b style="color: #199b1e;">18</b>/
                <b style="color: #ac3ee3;">24</b> Charges</li></ul>`;
                break;
        //Trevor Belmont Perks
            case "exu":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclair/iconPerks_Exultation.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Exultation";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `<b>Stunning</b> the Killer with a <b>Pallet</b> upgrades the <b>Rarity of your held Item to the next tier</b>
                <ul><li>Recharges the <b>Item</b> by <b>+25%</b></li></ul>
                <i>Exultation</i> has a cooldown of 
                <b style="color: #e8c252;">40</b>/
                <b style="color: #199b1e;">35</b>/
                <b style="color: #ac3ee3;">30</b> seconds`;
                break;
            case "eyeOfBel":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclair/iconPerks_EyesOfBelmont.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Eyes of Belmont";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `Whenever a Generator is <b>completed</b>, the <b>Aura of the Killer</b> is revealed to you for 
                <b style="color: #e8c252;">1</b>/
                <b style="color: #199b1e;">2</b>/
                <b style="color: #ac3ee3;">3</b> seconds
                <ul><li>Extends the duration of <b>all instances of the Killer's Aura</b> being revealed to you by <b>+2 seconds</b></li></ul>
                <i>Eyes of Belmont</i> benefits from its own effect`;
                break;
            case "momOfGlo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclair/iconPerks_MomentOfGlory.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Moment of Glory";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "9.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After performing the <b>Unlocking or Rummaging</b> action on Chests a total of <b>2 times</b>, <i>Moment of Glory</i> activates:
                <dl><li>When you become <b>injured</b>, you instantly suffer from the <b>Broken</b> Status Effect</li>
                <li>You are automatically <b>healed 1 Health State</b> after 
                <b style="color: #e8c252;">80</b>/
                <b style="color: #199b1e;">70</b>/
                <b style="color: #ac3ee3;">60</b> seconds</li>
                <dd>- This effect is cancelled prematurely if you enter the <b>Dying State</b></dd></dl>
                <i>Moment of Glory</i> does not activate if you already suffer from the <b>Broken</b> Status Effect.<br><br>
                <i>Moment of Glory</i> deactivates after healing you`;
                break;
        //Taurie Cain Perks
            case "cleBre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gelato/T_UI_iconsPerks_CleanBreak.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Clean Break";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "8pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `After completing a Healing action on <b>another Survivor</b>, <i>Clean Break</i> activates.<br><br>
                Press the <b>Active Ability button</b> while <b>being healed by another Survivor</b> to trigger the following effects:
                <dl><li>Suffer from the <b>Broken</b> Status Effect</li>
                <li>You are automatically <b>healed 1 Health State</b> after 
                <b style="color: #e8c252;">80</b>/
                <b style="color: #199b1e;">70</b>/
                <b style="color: #ac3ee3;">60</b> seconds</li>
                <dd>- This effect is cancelled prematurely if you enter the <b>Dying State</b></dd></dl>
                <i>Clean Break</i> does not activate if you already suffer from the <b>Broken</b> Status Effect.<br><br>
                <i>Clean Break</i> deactivates after healing you`;
                break;
            case "invTreCro":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gelato/T_UI_iconsPerks_InvocationTreacherousCrows.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Invocation: Treacherous Crows";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "8.5pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `When in the <b>Basement near the circle</b>, press the <b>Active Ability button</b> to begin the <b>Invocation</b>, which takes <b>60 seconds</b> to complete.<br><br>
                During an <b>Invocation</b>, <b>your Aura</b> is revealed to all other Survivors and they can join in, accelerating the process by <b>+100%</b> if they too have an <b><i>Invocation Perk</i></b> equipped, or by <b>+50 %</b> if they have not.<br><br>
                Once the <b>Invocation is completed</b>, the following effects apply:
                <ul><li>Whenever the <b>Killer scares a Crow while a Survivor is inside their Terror Radius</b>, <b>their Aura</b> is revealed to all Survivors for 
                <b style="color: #e8c252;">1</b>/
                <b style="color: #199b1e;">1.5</b>/
                <b style="color: #ac3ee3;">2</b> seconds</li>
                <li>You automatically enter the <b>Injured State</b> from <b>any previous Health State</b>, and suffer from the <b>Broken</b> Status Effect <b>for the remainder of the Trial</b></li></ul>`;
                break;
            case "shoTheBur":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gelato/T_UI_iconsPerks_ShoulderTheBurden.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Shoulder the Burden";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "13pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `<b>Once per Trial</b>, and while <b>you are not on Death Hook</b>, press the <b>Active Ability button</b> while <b>standing in front of a Hooked Survivor</b> to unhook them and trigger the following effects:
                <ul><li>Trade <b>1 Hook Stage with the other Survivor</b> to their benefit</li>
                <li>Causes you to <b>scream</b> and suffer from the <b>Exposed</b> Status Effect for 
                <b style="color: #e8c252;">30</b>/
                <b style="color: #199b1e;">25</b>/
                <b style="color: #ac3ee3;">20</b> seconds</li></ul>`;
                break;
    //End
            default: 
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/NoChoiceSurvPerkPlaceholder.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Empty Slot";
                document.getElementById("perkTooltip" + (i + 1)).style.fontSize = "16pt";
                document.getElementById("perkTooltip" + (i + 1)).innerHTML = `This is an empty slot for a Perk.<br><br>Add another Perk?`;
        }
    }
}
//Characters
function fixedChar(char){
    switch(char){
        case "anyChar":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/RandomSurvPlaceholder.png";
            document.getElementById("charName").innerHTML = "Any Survivor";
            break;
        case "dwigFai":
            document.getElementById("charimg").src = "Portraits/StoreBackgrounds/storeBackground_DF.png";
            document.getElementById("charName").innerHTML = "Dwight Fairfield";
            break;
        case "megTho":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_MT.png";
            document.getElementById("charName").innerHTML = "Meg Thomas";
            break;
        case "clauMor":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_CM.png";
            document.getElementById("charName").innerHTML = "Claudette Morel";
            break;
        case "jakePar":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_JP.png";
            document.getElementById("charName").innerHTML = "Jake Park";
            break;
        case "neaKar":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_NK.png";
            document.getElementById("charName").innerHTML = "Nea Karlsson";
            break;
        case "laurStr":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_LS.png";
            document.getElementById("charName").innerHTML = "Laurie Strode";
            break;
        case "aceVis":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_AV.png";
            document.getElementById("charName").innerHTML = "Ace Visconti";
            break;
        case "billOve":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_BO.png";
            document.getElementById("charName").innerHTML = "William 'Bill' Overbeck";
            break;
        case "fengMin":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_FM.png";
            document.getElementById("charName").innerHTML = "Feng Min";
            break;
        case "daviKin":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_DK.png";
            document.getElementById("charName").innerHTML = "David King";
            break;
        case "quenSmi":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_QS.png";
            document.getElementById("charName").innerHTML = "Quentin Smith";
            break;
        case "daviTap":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_FS.png";
            document.getElementById("charName").innerHTML = "David Tapp";
            break;
        case "kateDen":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_GS.png";
            document.getElementById("charName").innerHTML = "Kate Denson";
            break;
        case "adamFra":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_AF.png";
            document.getElementById("charName").innerHTML = "Adam Francis";
            break;
        case "jeffJoh":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_KS.png";
            document.getElementById("charName").innerHTML = "Jeff Johansen";
            break;
        case "janeRom":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_MS.png";
            document.getElementById("charName").innerHTML = "Jane Romero";
            break;
        case "ashWil":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_ML.png";
            document.getElementById("charName").innerHTML = "Ash Williams";
            break;
        case "nancWhe":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Qatar/QF_storeBackground.png";
            document.getElementById("charName").innerHTML = "Nancy Wheeler";
            break;
        case "stevHar":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Qatar/QM_storeBackground.png";
            document.getElementById("charName").innerHTML = "Steve Harrington";
            break;
        case "yuiKim":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Sweden/SS_storeBackground.png";
            document.getElementById("charName").innerHTML = "Yui Kimura";
            break;
        case "zariKas":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Ukraine/US_storeBackground.png";
            document.getElementById("charName").innerHTML = "Zarina Kassir";
            break;
        case "cherMas":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Wales/S22_storeBackground.png";
            document.getElementById("charName").innerHTML = "Cheryl Mason";
            break;
        case "feliRic":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Yemen/S23_storeBackground.png";
            document.getElementById("charName").innerHTML = "Felix Richter";
            break;
        case "elodRak":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Aurora/S24_storeBackground.png";
            document.getElementById("charName").innerHTML = "Élodie Rakoto";
            break;
        case "yunjLee":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Comet/S25_storeBackground.png";
            document.getElementById("charName").innerHTML = "Yun-Jin Lee";
            break;
        case "jillVal":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Eclipse/S26_storeBackground.png";
            document.getElementById("charName").innerHTML = "Jill Valentine";
            break;
        case "leonKen":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Eclipse/S27_storeBackground.png";
            document.getElementById("charName").innerHTML = "Leon S. Kennedy";
            break;
        case "mikaRei":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Hubble/S28_storeBackground.png";
            document.getElementById("charName").innerHTML = "Mikaela Reid";
            break;
        case "jonaVas":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Ion/S29_storeBackground.png";
            document.getElementById("charName").innerHTML = "Jonah Vasquez";
            break;
        case "yoicAsa":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Kepler/S30_storeBackground.png";
            document.getElementById("charName").innerHTML = "Yoichi Asakawa";
            break;
        case "haddKau":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Meteor/S31_storeBackground.png";
            document.getElementById("charName").innerHTML = "Haddie Kaur";
            break;
        case "adaWon":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Orion/S32_storeBackground.png";
            document.getElementById("charName").innerHTML = "Ada Wong";
            break;
        case "rebeCha":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Orion/S33_storeBackground.png";
            document.getElementById("charName").innerHTML = "Rebecca Chambers";
            break;
        case "vittTos":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Quantum/S34_storeBackground.png";
            document.getElementById("charName").innerHTML = "Vittorio Toscano";
            break;
        case "thalLyr":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Saturn/S35_storeBackground.png";
            document.getElementById("charName").innerHTML = "Thalita Lyra";
            break;
        case "renaLyr":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Saturn/S36_storeBackground.png";
            document.getElementById("charName").innerHTML = "Renato Lyra";
            break;
        case "gabrSom":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Umbra/S37_storeBackground.png";
            document.getElementById("charName").innerHTML = "Gabriel Soma";
            break;
        case "nicoCag":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Venus/S38_storeBackground.png";
            document.getElementById("charName").innerHTML = "Nicolas Cage";
            break;
        case "elleRip":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Wormhole/S39_storeBackground.png";
            document.getElementById("charName").innerHTML = "Ellen Ripley";
            break;
        case "alanWak":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Zodiac/S40_storeBackground.png";
            document.getElementById("charName").innerHTML = "Alan Wake";
            break;
        case "sablWar":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Applepie/S41_storeBackground.png";
            document.getElementById("charName").innerHTML = "Sable Ward";
            break;
        case "theTro":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Churros/S42_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Troupe";
            break;
        case "laraCro":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Donut/S43_storeBackground.png";
            document.getElementById("charName").innerHTML = "Lara Croft";
            break;
        case "trevBel":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Eclair/S44_storeBackground.png";
            document.getElementById("charName").innerHTML = "Trevor Belmont";
            break;
        case "taurCai":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Gelato/T_UI_S45_storeBackground.png";
            document.getElementById("charName").innerHTML = "Taurie Cain";
            break;
        default:
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/RandomSurvPlaceholder.png";
            document.getElementById("charName").innerHTML = "Any Survivor (Defaulted)";
    }
}
//Items
function fixedItem(item){
    switch (item){
        case "none": 
            document.getElementById("itemImg").src="Add-Ons/ItemAddons/NoChoiceSurvAddonPlaceholder.png";
            document.getElementById("itemName").innerHTML="No Item";
            fixedAddons("none","none");
            break;
    //Flashlights
        case "basicFlash":
            document.getElementById("itemImg").src="Items/Items/iconItems_flashlight.png";
            document.getElementById("itemName").innerHTML="Flashlight";
            randomFlashlights();
            break;
        case "sportFlash":
            document.getElementById("itemImg").src="Items/Items/iconItems_flashlightSport.png";
            document.getElementById("itemName").innerHTML="Sport Flashlight"; 
            randomFlashlights();
            break;
        case "utilFlash":
            document.getElementById("itemImg").src="Items/Items/iconItems_flashlightUtility.png";
            document.getElementById("itemName").innerHTML="Utility Flashlight";
            randomFlashlights();
            break;
    //Keys
        case "brokeKey": 
            document.getElementById("itemImg").src="Items/Items/iconItems_brokenKey.png";
            document.getElementById("itemName").innerHTML="Broken Key";
            randomKeys();
            break;
        case "dullKey": 
        document.getElementById("itemImg").src="Items/Items/iconItems_dullKey.png";
        document.getElementById("itemName").innerHTML="Dull Key";
            randomKeys();
            break;
        case "skelKey": 
            document.getElementById("itemImg").src="Items/Items/iconItems_key.png";
            document.getElementById("itemName").innerHTML="Skeleton Key";
            randomKeys();
            break;
    //Maps
        case "basicMap": 
            document.getElementById("itemImg").src="Items/Items/iconItems_map.png";
            document.getElementById("itemName").innerHTML="Map";
            randomMaps();
            break;
        case "rainMap": 
            document.getElementById("itemImg").src="Items/Items/iconItems_rainbowMap.png";
            document.getElementById("itemName").innerHTML="Rainbow Map";
            randomMaps();
            break;
    //Medkits
        case "campMedkit": 
            document.getElementById("itemImg").src="Items/Items/iconItems_rundownAidKit.png";
            document.getElementById("itemName").innerHTML="Camping Aid Kit";
            randomMedkits();
            break;
        case "firstMedkit": 
            document.getElementById("itemImg").src="Items/Items/iconItems_firstAidKit.png";
            document.getElementById("itemName").innerHTML="First Aid Kit";
            randomMedkits();
            break;
        case "emergMedkit": 
            document.getElementById("itemImg").src="Items/Items/iconItems_medkit.png";
            document.getElementById("itemName").innerHTML="Emergency Med-Kit";
            randomMedkits();
            break;
        case "rangerMedkit": 
            document.getElementById("itemImg").src="Items/Items/iconItems_rangersAidKit.png";
            document.getElementById("itemName").innerHTML="Ranger Med-Kit";
            randomMedkits();
            break;
    //Toolboxes
        case "wornToolbox": 
            document.getElementById("itemImg").src="Items/Items/iconItems_toolboxWornOut.png";
            document.getElementById("itemName").innerHTML="Worn-Out Tools";
            randomToolboxes();
            break;
        case "basicToolbox": 
            document.getElementById("itemImg").src="Items/Items/iconItems_toolbox.png";
            document.getElementById("itemName").innerHTML="Toolbox";
            randomToolboxes();
            break;
        case "commodToolbox": 
            document.getElementById("itemImg").src="Items/Items/iconItems_toolboxCommodious.png";
            document.getElementById("itemName").innerHTML="Commodious Toolbox";
            randomToolboxes();
            break;
        case "mechToolbox": 
            document.getElementById("itemImg").src="Items/Items/iconItems_toolboxMechanics.png";
            document.getElementById("itemName").innerHTML="Mechanic's Toolbox";
            randomToolboxes();
            break;
        case "alexToolbox": 
            document.getElementById("itemImg").src="Items/Items/iconItems_toolboxAlexs.png";
            document.getElementById("itemName").innerHTML="Alex's Toolbox";
            randomToolboxes();
            break;
        case "engineToolbox": 
            document.getElementById("itemImg").src="Items/Items/iconItems_toolboxEngineers.png";
            document.getElementById("itemName").innerHTML="Engineer's Toolbox";
            randomToolboxes();
            break;
        default: 
            document.getElementById("itemImg").src="Add-Ons/ItemAddons/NoChoiceSurvAddonPlaceholder.png";
            document.getElementById("itemName").innerHTML="No Items Found!";
    }
}
function fixedAddons(addon1,addon2){
    switch (addon1){
    //Any/No Addons
        case "anyAddon":
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/RandomSurvAddonPlaceholder.png";
            document.getElementById("addonName1").innerHTML="Any Addon";
            break;
        case "none":
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/NoChoiceSurvAddonPlaceholder.png";
            document.getElementById("addonName1").innerHTML="No Addon";
            break;
    //Flashlights
        //Common
        case "battery": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_battery.png";
            document.getElementById("addonName1").innerHTML="Battery";
            break;
        case "leatherGrip": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_leatherGrip.png";
            document.getElementById("addonName1").innerHTML="Leather Grip";
            break;
        case "powerBulb": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_powerBulb.png";
            document.getElementById("addonName1").innerHTML="Power Bulb";
            break;
        case "wideLens": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_wideLens.png";
            document.getElementById("addonName1").innerHTML="Wide Lens";
            break;
        //Uncommon
        case "focusLens": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_focusLens.png";
            document.getElementById("addonName1").innerHTML="Focus Lens";
            break;
        case "heavyBattery": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_heavyDutyBattery.png";
            document.getElementById("addonName1").innerHTML="Heavy Duty Battery";
            break;
        case "lowFilament": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_threadedFilament.png";
            document.getElementById("addonName1").innerHTML="Low Amp Filament";
            break;
        case "rubberGrip": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_rubberGrip.png";
            document.getElementById("addonName1").innerHTML="Rubber Grip";
            break;
        case "tirOptic": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_tirOptic.png";
            document.getElementById("addonName1").innerHTML="TIR Optic";
            break;
        //Rare
        case "intHalogen": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_intenseHalogen.png";
            document.getElementById("addonName1").innerHTML="Intense Halogen";
            break;
        case "longBattery": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_longLifeBattery.png";
            document.getElementById("addonName1").innerHTML="Long Life Battery";
            break;
        //Very Rare
        case "highLens": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_highEndSapphireLens.png";
            document.getElementById("addonName1").innerHTML="High-End Sapphire Lens";
            break;
        //Ultra Rare
        case "oddBulb":
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_oddBulb.png";
            document.getElementById("addonName1").innerHTML="Odd Bulb";
            break;
    //Key
        //Common
        case "prayRope": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_prayerRope.png";
            document.getElementById("addonName1").innerHTML="Prayer Rope";
            break;
        //Uncommon
        case "erodeToken": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_tokenErroded.png";
            document.getElementById("addonName1").innerHTML="Eroded Token";
            break;
        case "prayBeads": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_prayerBeads.png";
            document.getElementById("addonName1").innerHTML="Prayer Beads";
            break;
        case "scratchPearl": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_scratchedPearl.png";
            document.getElementById("addonName1").innerHTML="Scratched Pearl";
            break;
        //Rare
        case "goldToken": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_tokenGold.png";
            document.getElementById("addonName1").innerHTML="Gold Token";
            break;
        //Very Rare
        case "bloodAmber": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_bloodAmber.png";
            document.getElementById("addonName1").innerHTML="Blood Amber";
            break;
        case "milkyGlass": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_milkyGlass.png";
            document.getElementById("addonName1").innerHTML="Milky Glass";
            break;
        case "uniqueRing": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_uniqueRing.png";
            document.getElementById("addonName1").innerHTML="Unique Wedding Ring";
            break;
        case "weaveRing": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_weavedRing.png";
            document.getElementById("addonName1").innerHTML="Weaved Ring";
            break;
    //Maps
        //Common
        case "mapAddendum": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_mapAddendum.png";
            document.getElementById("addonName1").innerHTML="Map Addendum";
            break;
        //Uncommon
        case "glassBead": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_beadGlass.png";
            document.getElementById("addonName1").innerHTML="Glass Bead";
            break;
        case "redTwine": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_ropeRed.png";
            document.getElementById("addonName1").innerHTML="Red Twine";
            break;
        case "retardantJelly": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_retardantJelly.png";
            document.getElementById("addonName1").innerHTML="Retardant Jelly";
            break;
        case "unusualStamp": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_stampUnusual.png";
            document.getElementById("addonName1").innerHTML="Unusual Stamp";
            break;
        case "yellowWire": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_ropeYellow.png";
            document.getElementById("addonName1").innerHTML="Yellow Wire";
            break;
        //Rare
        case "blackCord": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_ropeBlack.png";
            document.getElementById("addonName1").innerHTML="Black Silk Cord";
            break;
        case "oddStamp": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_stampOdd.png";
            document.getElementById("addonName1").innerHTML="Odd Stamp";
            break;
        //Very Rare
        case "crystalBead": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_beadCrystal.png";
            document.getElementById("addonName1").innerHTML="Crystal Bead";
            break;
    //Medkits
        //Common
        case "bandages": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_bandages.png";
            document.getElementById("addonName1").innerHTML="Bandages";
            break;
        case "butterflyTape": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_butterflyTape.png";
            document.getElementById("addonName1").innerHTML="Butterfly Tape";
            break;
        case "rubberGloves": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_gloves.png";
            $document.getElementById("addonName1").innerHTML="Rubber Gloves";
            break;
        //Uncommon
        case "medScissors": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_scissors.png";
            document.getElementById("addonName1").innerHTML="Medical Scissors";
            break;
        case "needleThread": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_needAndThread.png";
            document.getElementById("addonName1").innerHTML="Needle & Thread";
            break;
        case "selfWrap": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_selfAdherentWrap.png";
            document.getElementById("addonName1").innerHTML="Self Adherent Wrap";
            break;
        case "sponge": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_sponge.png";
            document.getElementById("addonName1").innerHTML="Sponge";
            break;
        //Rare
        case "gauzeRoll": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_gauseRoll.png";
            document.getElementById("addonName1").innerHTML="Gauze Roll";
            break;
        case "surgSuture": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_surgicalSuture.png";
            document.getElementById("addonName1").innerHTML="Surgical Suture";
            break;
        //Very Rare
        case "abdomDressing": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_abdominalDressing.png";
            document.getElementById("addonName1").innerHTML="Abdominal Dressing";
            break;
        case "stypticAgent": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_stypticAgent.png";
            document.getElementById("addonName1").innerHTML="Styptic Agent";
            break;
        //Ultra Rare
        case "antiSyringe":
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_syringe.png";
            document.getElementById("addonName1").innerHTML="Anti-Haemorrhagic Syringe";
            break;
        case "gelDressings": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_gelDressings.png";
            document.getElementById("addonName1").innerHTML="Gel Dressings";
            break;
    //Toolboxes
        //Common
        case "cleanRag": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_cleanRag.png";
            document.getElementById("addonName1").innerHTML="Clean Rag";
            break;
        case "instructions": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_instructions.png";
            document.getElementById("addonName1").innerHTML="Instructions";
            break;
        case "scraps": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_scraps.png";
            document.getElementById("addonName1").innerHTML="Scraps";
            break;
        //Uncommon
        case "cuttingWire": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_cuttingWire.png";
            document.getElementById("addonName1").innerHTML="Cutting Wire";
            break;
        case "protectiveGloves": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_protectiveGloves.png";
            document.getElementById("addonName1").innerHTML="Protective Gloves";
            break;
        case "socketSwivels": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_socketSwivels.png";
            document.getElementById("addonName1").innerHTML="Socket Swivels";
            break;
        case "springClamps": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_springClamp.png";
            document.getElementById("addonName1").innerHTML="Spring Clamp";
            break;
        case "wireSpool": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_spoolOfWire.png";
            document.getElementById("addonName1").innerHTML="Wire Spool";
            break;
        //Rare
        case "gripWrench": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_gripWrench.png";
            document.getElementById("addonName1").innerHTML="Grip Wrench";
            break;
        case "hacksaw": 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_metalSaw.png";
            document.getElementById("addonName1").innerHTML="Hacksaw";
            break;
        //Ultra Rare
        case "brandNewPart":
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/iconAddon_brandNewPart.png";
            document.getElementById("addonName1").innerHTML="Brand New Part";
            break;
        default: 
            document.getElementById("addonImg1").src="Add-Ons/ItemAddons/NoChoiceSurvAddonPlaceholder.png";
            document.getElementById("addonName1").innerHTML="No Addon Found!";
    }
    switch (addon2){
    //Any/No Addons
        case "anyAddon":
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/RandomSurvAddonPlaceholder.png";
            document.getElementById("addonName2").innerHTML="Any Addon";
            break;
        case "none":
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/NoChoiceSurvAddonPlaceholder.png";
            document.getElementById("addonName2").innerHTML="No Addon";
            break;
    //Flashlights
        //Common
        case "battery": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_battery.png";
            document.getElementById("addonName2").innerHTML="Battery";
            break;
        case "leatherGrip": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_leatherGrip.png";
            document.getElementById("addonName2").innerHTML="Leather Grip";
            break;
        case "powerBulb": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_powerBulb.png";
            document.getElementById("addonName2").innerHTML="Power Bulb";
            break;
        case "wideLens": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_wideLens.png";
            document.getElementById("addonName2").innerHTML="Wide Lens";
            break;
        //Uncommon
        case "focusLens": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_focusLens.png";
            document.getElementById("addonName2").innerHTML="Focus Lens";
            break;
        case "heavyBattery": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_heavyDutyBattery.png";
            document.getElementById("addonName2").innerHTML="Heavy Duty Battery";
            break;
        case "lowFilament": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_threadedFilament.png";
            document.getElementById("addonName2").innerHTML="Low Amp Filament";
            break;
        case "rubberGrip": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_rubberGrip.png";
            document.getElementById("addonName2").innerHTML="Rubber Grip";
            break;
        case "tirOptic": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_tirOptic.png";
            document.getElementById("addonName2").innerHTML="TIR Optic";
            break;
        //Rare
        case "intHalogen": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_intenseHalogen.png";
            document.getElementById("addonName2").innerHTML="Intense Halogen";
            break;
        case "longBattery": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_longLifeBattery.png";
            document.getElementById("addonName2").innerHTML="Long Life Battery";
            break;
        //Very Rare
        case "highLens": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_highEndSapphireLens.png";
            document.getElementById("addonName2").innerHTML="High-End Sapphire Lens";
            break;
        //Ultra Rare
        case "oddBulb":
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_oddBulb.png";
            document.getElementById("addonName2").innerHTML="Odd Bulb";
            break;
    //Key
        //Common
        case "prayRope": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_prayerRope.png";
            document.getElementById("addonName2").innerHTML="Prayer Rope";
            break;
        //Uncommon
        case "erodeToken": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_tokenErroded.png";
            document.getElementById("addonName2").innerHTML="Eroded Token";
            break;
        case "prayBeads": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_prayerBeads.png";
            document.getElementById("addonName2").innerHTML="Prayer Beads";
            break;
        case "scratchPearl": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_scratchedPearl.png";
            document.getElementById("addonName2").innerHTML="Scratched Pearl";
            break;
        //Rare
        case "goldToken": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_tokenGold.png";
            document.getElementById("addonName2").innerHTML="Gold Token";
            break;
        //Very Rare
        case "bloodAmber": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_bloodAmber.png";
            document.getElementById("addonName2").innerHTML="Blood Amber";
            break;
        case "milkyGlass": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_milkyGlass.png";
            document.getElementById("addonName2").innerHTML="Milky Glass";
            break;
        case "uniqueRing": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_uniqueRing.png";
            document.getElementById("addonName2").innerHTML="Unique Wedding Ring";
            break;
        case "weaveRing": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_weavedRing.png";
            document.getElementById("addonName2").innerHTML="Weaved Ring";
            break;
    //Maps
        //Common
        case "mapAddendum": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_mapAddendum.png";
            document.getElementById("addonName2").innerHTML="Map Addendum";
            break;
        //Uncommon
        case "glassBead": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_beadGlass.png";
            document.getElementById("addonName2").innerHTML="Glass Bead";
            break;
        case "redTwine": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_ropeRed.png";
            document.getElementById("addonName2").innerHTML="Red Twine";
            break;
        case "retardantJelly": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_retardantJelly.png";
            document.getElementById("addonName2").innerHTML="Retardant Jelly";
            break;
        case "unusualStamp": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_stampUnusual.png";
            document.getElementById("addonName2").innerHTML="Unusual Stamp";
            break;
        case "yellowWire": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_ropeYellow.png";
            document.getElementById("addonName2").innerHTML="Yellow Wire";
            break;
        //Rare
        case "blackCord": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_ropeBlack.png";
            document.getElementById("addonName2").innerHTML="Black Silk Cord";
            break;
        case "oddStamp": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_stampOdd.png";
            document.getElementById("addonName2").innerHTML="Odd Stamp";
            break;
        //Very Rare
        case "crystalBead": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_beadCrystal.png";
            document.getElementById("addonName2").innerHTML="Crystal Bead";
            break;
    //Medkits
        //Common
        case "bandages": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_bandages.png";
            document.getElementById("addonName2").innerHTML="Bandages";
            break;
        case "butterflyTape": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_butterflyTape.png";
            document.getElementById("addonName2").innerHTML="Butterfly Tape";
            break;
        case "rubberGloves": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_gloves.png";
            document.getElementById("addonName2").innerHTML="Rubber Gloves";
            break;
        //Uncommon
        case "medScissors": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_scissors.png";
            document.getElementById("addonName2").innerHTML="Medical Scissors";
            break;
        case "needleThread": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_needAndThread.png";
            document.getElementById("addonName2").innerHTML="Needle & Thread";
            break;
        case "selfWrap": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_selfAdherentWrap.png";
            document.getElementById("addonName2").innerHTML="Self Adherent Wrap";
            break;
        case "sponge": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_sponge.png";
            document.getElementById("addonName2").innerHTML="Sponge";
            break;
        //Rare
        case "gauzeRoll": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_gauseRoll.png";
            document.getElementById("addonName2").innerHTML="Gauze Roll";
            break;
        case "surgSuture": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_surgicalSuture.png";
            document.getElementById("addonName2").innerHTML="Surgical Suture";
            break;
        //Very Rare
        case "abdomDressing": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_abdominalDressing.png";
            document.getElementById("addonName2").innerHTML="Abdominal Dressing";
            break;
        case "stypticAgent": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_stypticAgent.png";
            document.getElementById("addonName2").innerHTML="Styptic Agent";
            break;
        //Ultra Rare
        case "antiSyringe":
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_syringe.png";
            document.getElementById("addonName2").innerHTML="Anti-Haemorrhagic Syringe";
            break;
        case "gelDressings": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_gelDressings.png";
            document.getElementById("addonName2").innerHTML="Gel Dressings";
            break;
    //Toolboxes
        //Common
        case "cleanRag": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_cleanRag.png";
            document.getElementById("addonName2").innerHTML="Clean Rag";
            break;
        case "instructions": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_instructions.png";
            document.getElementById("addonName2").innerHTML="Instructions";
            break;
        case "scraps": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_scraps.png";
            document.getElementById("addonName2").innerHTML="Scraps";
            break;
        //Uncommon
        case "cuttingWire": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_cuttingWire.png";
            document.getElementById("addonName2").innerHTML="Cutting Wire";
            break;
        case "protectiveGloves": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_protectiveGloves.png";
            document.getElementById("addonName2").innerHTML="Protective Gloves";
            break;
        case "socketSwivels": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_socketSwivels.png";
            document.getElementById("addonName2").innerHTML="Socket Swivels";
            break;
        case "springClamps": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_springClamp.png";
            document.getElementById("addonName2").innerHTML="Spring Clamp";
            break;
        case "wireSpool": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_spoolOfWire.png";
            document.getElementById("addonName2").innerHTML="Wire Spool";
            break;
        //Rare
        case "gripWrench": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_gripWrench.png";
            document.getElementById("addonName2").innerHTML="Grip Wrench";
            break;
        case "hacksaw": 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_metalSaw.png";
            document.getElementById("addonName2").innerHTML="Hacksaw";
            break;
        //Ultra Rare
        case "brandNewPart":
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/iconAddon_brandNewPart.png";
            document.getElementById("addonName2").innerHTML="Brand New Part";
            break;
        default: 
            document.getElementById("addonImg2").src="Add-Ons/ItemAddons/NoChoiceSurvAddonPlaceholder.png";
            document.getElementById("addonName2").innerHTML="No Addon Found!";
    }
}
//Offerings
function fixedOffering(offering){
    switch(offering){
        case "none": 
            document.getElementById("offeringImg").src = "Offerings/Favors/NoChoiceOfferingPlaceholder.png";
            document.getElementById("offeringName").innerHTML = "No Offering Choice";
            break;
        case "anyOffering": 
            document.getElementById("offeringImg").src = "Offerings/Favors/RandomOfferingPlaceholder.png";
            document.getElementById("offeringName").innerHTML = "Any Offering Choice";
            break;
//Bloodpoints
    //All Categories
        case "escCake": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Anniversary/iconFavors_escapeCake.png";
            document.getElementById("offeringName").innerHTML = "Escape! Cake";
            break;
        case "seaEnve": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_sealedEnvelope.png";
            document.getElementById("offeringName").innerHTML = "Sealed Envelope";
            break;
        case "bloPartStre": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Anniversary/iconFavors_bloodyPartyStreamers.png";
            document.getElementById("offeringName").innerHTML = "Bloody Party Streamers";
            break;
        case "bouEnve": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_boundEnvelope.png";
            document.getElementById("offeringName").innerHTML = "Bound Envelope";
            break;
    //Altruism
        case "primrose": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_primroseBlossomSachet.png";
            document.getElementById("offeringName").innerHTML = "Primrose Blossom Sachet";
            break;
        case "freshPrim": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_freshPrimroseBlossom.png";
            document.getElementById("offeringName").innerHTML = "Fresh Primrose Blossom";
            break;
        case "fragPrim": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_fragrantPrimroseBlossom.png";
            document.getElementById("offeringName").innerHTML = "Fragrant Primrose Blossom";
            break;
    //Boldness
        case "william": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_sweetWilliamSachet.png";
            document.getElementById("offeringName").innerHTML = "Sweet Willaim Sachet";
            break;
        case "freshWill": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_freshSweetWilliam.png";
            document.getElementById("offeringName").innerHTML = "Fresh Sweet William";
            break;
        case "fragWill": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_fragrantSweetWilliam.png";
            document.getElementById("offeringName").innerHTML = "Fragrant Sweet William";
            break;
    //Objectives
        case "bog": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_bogLaurelSachet.png";
            document.getElementById("offeringName").innerHTML = "Bog Laurel Sachet";
            break;
        case "freshBog": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_freshBogLaurel.png";
            document.getElementById("offeringName").innerHTML = "Fresh Bog Laurel";
            break;
        case "fragBog": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_fragrantBogLaurel.png";
            document.getElementById("offeringName").innerHTML = "Fragrant Bog Laurel";
            break;
    //Survival
        case "amaranth": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_crispleafAmaranthSachet.png";
            document.getElementById("offeringName").innerHTML = "Crispleaf Amaranth Sachet";
            break;
        case "freshAma": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_freshCrispleafAmaranth.png";
            document.getElementById("offeringName").innerHTML = "Fresh Crispleaf Amaranth";
            break;
        case "fragAma": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_fragrantCrispleafAmaranth.png";
            document.getElementById("offeringName").innerHTML = "Fragrant Crispleaf Amaranth";
            break;
//Luck
    //Single Luck
        case "chalk": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_chalkPouch.png";
            document.getElementById("offeringName").innerHTML = "Chalk Pouch";
            break;
        case "creamChalk": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_creamChalkPouch.png";
            document.getElementById("offeringName").innerHTML = "Cream Chalk Pouch";
            break;
        case "ivoryChalk": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_ivoryChalkPouch.png";
            document.getElementById("offeringName").innerHTML = "Ivory Chalk Pouch";
            break;
    //All Luck
        case "salt": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_saltPouch.png";
            document.getElementById("offeringName").innerHTML = "Salt Pouch";
            break;
        case "blackSalt": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_blackSaltStatuette.png";
            document.getElementById("offeringName").innerHTML = "Black Salt Statuette";
            break;
        case "lipsSalt": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_jarOfSaltyLips.png";
            document.getElementById("offeringName").innerHTML = "Vigo's Jar of Saly Lips";
            break;
    //Wards
        case "sacWard": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Yemen/iconFavors_wardSacrificial.png";
            document.getElementById("offeringName").innerHTML = "Sacrificial Ward";
            break;
        case "whiteWard": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_wardWhite.png";
            document.getElementById("offeringName").innerHTML = "White Ward";
            break;
//Map Modifications
    //Basement
        case "bloodBlue": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Yemen/iconFavors_bloodiedBlueprint.png";
            document.getElementById("offeringName").innerHTML = "Bloodied Blueprint";
            break;
        case "tornBlue": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Yemen/iconFavors_tornBlueprint.png";
            document.getElementById("offeringName").innerHTML = "Torn Blueprint";
            break;
    //Chests
        case "tarnCoin": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_tarnishedCoin.png";
            document.getElementById("offeringName").innerHTML = "Tarnished Coin";
            break;
        case "shinyCoin": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_shinyCoin.png";
            document.getElementById("offeringName").innerHTML = "Shiny Coin";
            break;
    //Fog Thickness
        case "clearRea": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_clearReagent.png";
            document.getElementById("offeringName").innerHTML = "Clear Reagent";
            break;
        case "faintRea": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_faintReagent.png";
            document.getElementById("offeringName").innerHTML = "Faint Reagent";
            break;
        case "hazyRea": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_hazyReagent.png";
            document.getElementById("offeringName").innerHTML = "Hazy Reagent";
            break;
        case "murkyRea": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_murkyReagent.png";
            document.getElementById("offeringName").innerHTML = "Murky Reagent";
            break;
    //Hatch
        case "annoBlue": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Yemen/iconFavors_annotatedBlueprint.png";
            document.getElementById("offeringName").innerHTML = "Annotated Blueprint";
            break;
        case "vigoBlue": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Yemen/iconFavors_vigosBlueprint.png";
            document.getElementById("offeringName").innerHTML = "Vigo's Blueprint";
            break;
    //Hook
        case "petrOak": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_petrifiedOak.png";
            document.getElementById("offeringName").innerHTML = "Petrified Oak";
            break;
//Realm
    //Azarov's Key (Autohaven)
        case "azaKey": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_azarovsKey.png";
            document.getElementById("offeringName").innerHTML = "Azarov's Key";
            break;
    //Grandma's Cookbook (Swamp)
        case "grandmaCook": 
            document.getElementById("offeringImg").src = "Offerings/Favors/DLC3/iconFavors_granmasCookbook.png";
            document.getElementById("offeringName").innerHTML = "Grandma's Cookbook";
            break;
    //Heart Locket (Coldwind Farm)   
        case "heartLock": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_heartLocket.png";
            document.getElementById("offeringName").innerHTML = "Heart Locket";
            break;
    //Charred Wedding Photo (Crotus Prenn Asylum)    
        case "charWedPhoto": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_charredWeddingPhotograph.png";
            document.getElementById("offeringName").innerHTML = "Charred Wedding Photograph";
            break;
    //Beef Tallow Mixture (Decimated Borgo)    
        case "beefTallow": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Quantum/iconFavors_BeefTallowMixture.png";
            document.getElementById("offeringName").innerHTML = "Beef Tallow Mixture";
            break;
    //Airlock Doors (Nostromo)    
        case "airlockDoors": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Wormhole/iconFavors_airlockDoors.png";
            document.getElementById("offeringName").innerHTML = "Airlock Doors";
            break;
    //Alien Flora (Toba Landing)    
        case "alienFlora": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Umbra/iconFavors_alienFlora.png";
            document.getElementById("offeringName").innerHTML = "Alien Flora";
            break;
    //Crow's Eye (Forsaken Boneyard)    
        case "crowEye": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Ion/iconFavors_crowsEye.png";
            document.getElementById("offeringName").innerHTML = "Crow's Eye";
            break;
    //Jigsaw Piece (Gideon Meat Plant)
        case "jigsawPiece": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Finland/iconFavors_jigsawPiece.png";
            document.getElementById("offeringName").innerHTML = "Jigsaw Piece";
            break;
    //Shattered Bottle (Glenvale)
        case "shatteredBottle": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Ukraine/iconFavors_ShatteredBottle.png";
            document.getElementById("offeringName").innerHTML = "Shattered Bottle";
            break;
    //Strode Realty Key (Haddonfield)
        case "strodeKey": 
            document.getElementById("offeringImg").src = "Offerings/Favors/DLC2/iconFavors_strodeRealtyKey.png";
            document.getElementById("offeringName").innerHTML = "Strode Realty Key";
            break;
    //Hawkins National Labatory ID
        case "hawkinsID": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Qatar/iconFavors_hawkinsNationalLaboratoryID.png";
            document.getElementById("offeringName").innerHTML = "Hawkins National Labatory ID";
            break;
    //Shattered Glasses (Lery's)
        case "shatteredGlasses": 
            document.getElementById("offeringImg").src = "Offerings/Favors/DLC4/iconFavors_shatteredGlasses.png";
            document.getElementById("offeringName").innerHTML = "Shattered Glasses";
            break;
    //MacMillan's Phalanx Bone (MacMillan Estate)
        case "macmillanBone": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_macmilliansPhalanxBone.png";
            document.getElementById("offeringName").innerHTML = "MacMillan's Phalanx Bone";
            break;
    //Damaged Photo (Ormond)
        case "damagedPhoto": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Kenya/iconFavors_damagedPhoto.png";
            document.getElementById("offeringName").innerHTML = "Damaged Photo";
            break;
    //RPD Badge (Raccoon City)
        case "rpdBadge": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Eclipse/iconsFavors_RPDBadge.png";
            document.getElementById("offeringName").innerHTML = "RPD Badge";
            break;
    //The Last Mask (Red Forest)
        case "lastMask": 
            document.getElementById("offeringImg").src = "Offerings/Favors/DLC5/iconFavors_theLastMask.png";
            document.getElementById("offeringName").innerHTML = "The Last Mask";
            break;
    //Mary's Letter (Silent Hill)
        case "marysLetter": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Wales/iconFavors_marysLetter.png";
            document.getElementById("offeringName").innerHTML = "Mary's Letter";
            break;
    //The Pied Piper (Springwood)
        case "piedPiper": 
            document.getElementById("offeringImg").src = "Offerings/Favors/England/iconFavors_thePiedPiper.png";
            document.getElementById("offeringName").innerHTML = "The Pied Piper";
            break;
    //Ichorous Loam (Withered Isle)
        case "ichorousLoam": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Meteor/iconFavors_IchorousLoam.png";
            document.getElementById("offeringName").innerHTML = "Ichorous Loam";
            break;
    //Yamaoka Family Crest
        case "yamaokaCrest": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Haiti/iconFavors_yamaokasCrest.png";
            document.getElementById("offeringName").innerHTML = "Yamaoka Family Crest";
            break;
//Shrouds
    //Shroud of Union
        case "unionShroud": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_shroudOfUnion.png";
            document.getElementById("offeringName").innerHTML = "Shroud of Union";
            break;
    //Vigo's Shroud
        case "vigoShroud": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_vigosShroud.png";
            document.getElementById("offeringName").innerHTML = "Vigo's Shroud";
            break;
    //Shroud of Binding
        case "bindShroud": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_shroudOfBinding.png";
            document.getElementById("offeringName").innerHTML = "Shroud of Binding";
            break;
        default:  
            document.getElementById("offeringImg").src = "Offerings/Favors/NoChoiceOfferingPlaceholder.png";
            document.getElementById("offeringName").innerHTML = "Error: No Offering Found!";
            
    }
}