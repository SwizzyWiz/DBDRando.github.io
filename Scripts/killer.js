//Dropdown Button Functions
function dropdownSelections(){
    $("#selectionsKill").slideToggle("slow");
    $("#selectionsPerks").slideToggle("slow");
    $("#selectionsAddons").slideToggle("slow");
    $("#selectionsOffer").slideToggle("slow");

    $("#dropKillsBtn").slideUp("slow");
    $("#dropKills1").slideUp("slow");
    $("#dropKills2").slideUp("slow");
    $("#dropKills3").slideUp("slow");
    $("#dropKills4").slideUp("slow");
    $("#dropKills5").slideUp("slow");

    $("#dropPerksBtn").slideUp("slow");
    $("#dropPerks1").slideUp("slow");
    $("#dropPerks2").slideUp("slow");
    $("#dropPerks3").slideUp("slow");
    $("#dropPerks4").slideUp("slow");
    $("#dropPerks5").slideUp("slow");

    $("#dropAddonsBtn").slideUp("slow");
    $("#dropCommons").slideUp("slow");
    $("#dropUncommons").slideUp("slow");
    $("#dropRares").slideUp("slow");
    $("#dropVeryRares").slideUp("slow");
    $("#dropUltraRares").slideUp("slow");

    $("#dropOfferingsBtn").slideUp("slow");
    $("#dropBloodpoints").slideUp("slow");
    $("#dropMapMods").slideUp("slow");
    $("#dropRealms").slideUp("slow");
    $("#dropSecretsWards").slideUp("slow");
}
function dropdownKillers(){
    $("#dropKillsBtn").slideToggle("slow");
    $("#dropKills1").slideToggle("slow");
    $("#dropKills2").slideToggle("slow");
    $("#dropKills3").slideToggle("slow");
    $("#dropKills4").slideToggle("slow");
    $("#dropKills5").slideToggle("slow");
}
function dropdownPerks(){
    $("#dropPerksBtn").slideToggle("slow");
    $("#dropPerks1").slideToggle("slow");
    $("#dropPerks2").slideToggle("slow");
    $("#dropPerks3").slideToggle("slow");
    $("#dropPerks4").slideToggle("slow");
    $("#dropPerks5").slideToggle("slow");
}
function dropdownAddons(){
    $("#dropAddonsBtn").slideToggle("slow");
    $("#dropCommons").slideToggle("slow");
    $("#dropUncommons").slideToggle("slow");
    $("#dropRares").slideToggle("slow");
    $("#dropVeryRares").slideToggle("slow");
    $("#dropUltraRares").slideToggle("slow");
}
function dropdownOfferings(){
    $("#dropOfferingsBtn").slideToggle("slow");
    $("#dropBloodpoints").slideToggle("slow");
    $("#dropMapMods").slideToggle("slow");
    $("#dropRealms").slideToggle("slow");
    $("#dropSecretsWards").slideToggle("slow");
}
//Initialized Random Array Pools
const perkPool = [];
const charPool = ["anyChar"];
let char;
const addonPool = ["none","none","any","any"];
const offeringPool = ["none", "anyOffering"];
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

    char = charPool[charPool.length - 1];

    fixedChar(char);
    randomAddons(char);
}
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
        perkPool.push("bitMur");
        perkPool.push("dee");
        perkPool.push("dist");
        perkPool.push("hexNoOneEscDea");
        perkPool.push("hexThrHun");
        perkPool.push("ins");
        perkPool.push("iroGra");
        perkPool.push("scoHooMonShr");
        perkPool.push("shaHop");
        perkPool.push("sloBut");
        perkPool.push("spiFroSha");
        perkPool.push("unr");
        perkPool.push("whi");
    } if (!$('#' + name).is(":checked")){
        perkPool.splice((perkPool.indexOf("bitMur")),1);
        perkPool.splice((perkPool.indexOf("dee")),1);
        perkPool.splice((perkPool.indexOf("dist")),1);
        perkPool.splice((perkPool.indexOf("hexNoOneEscDea")),1);
        perkPool.splice((perkPool.indexOf("hexThrHun")),1);
        perkPool.splice((perkPool.indexOf("ins")),1);
        perkPool.splice((perkPool.indexOf("iroGra")),1);
        perkPool.splice((perkPool.indexOf("scoHooMonShr")),1);
        perkPool.splice((perkPool.indexOf("shaHop")),1);
        perkPool.splice((perkPool.indexOf("sloBut")),1);
        perkPool.splice((perkPool.indexOf("spiFroSha")),1);
        perkPool.splice((perkPool.indexOf("unr")),1);
        perkPool.splice((perkPool.indexOf("whi")),1);
    }
}
function randomPerks(){
    for(let l = perkPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = perkPool[l];
        perkPool[l] = perkPool[j];
        perkPool[j] = k;
    }

    let perk1 = perkPool[perkPool.length - 1];
    let perk2 = perkPool[perkPool.length - 2];
    let perk3 = perkPool[perkPool.length - 3];
    let perk4 = perkPool[perkPool.length - 4];

    fixedPerks(perk1,perk2,perk3,perk4);
}
//Add-ons Functions
function resetAddons(){
    for (let addLen = addonPool.length - 1; addLen > -1; addLen--){
        addonPool.splice(addLen,1);
    }
    addonPool.push("none");
    addonPool.push("none");
    addonPool.push("any");
    addonPool.push("any");
}
function randomAddons(char){
    resetAddons();
    switch (char){
        case "anyChar":
            break;
        case "trapper":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("bearOil");
                addonPool.push("makeWrap");
                addonPool.push("padJaws");
                addonPool.push("trapGloves");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("fourSpringKit");
                addonPool.push("coffeeGrounds");
                addonPool.push("lenJaws");
                addonPool.push("serrJaws");
                addonPool.push("waxBrick");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("fastTools");
                addonPool.push("rustJaws");
                addonPool.push("secCoil");
                addonPool.push("tarBottle");
                addonPool.push("trapBag");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("honStone");
                addonPool.push("oilyCoil");
                addonPool.push("tensSpring");
                addonPool.push("trapSack");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("bloodCoil");
                addonPool.push("iridStone");
            }
            break;
        case "wraith":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("beastSoot");
                addonPool.push("ghostSoot");
                addonPool.push("houndSoot");
                addonPool.push("serpentSoot");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("warMud");
                addonPool.push("blinkMud");
                addonPool.push("swiftMud");
                addonPool.push("windstormMud");
                addonPool.push("boneClapper");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("warWhite");
                addonPool.push("blinkWhite");
                addonPool.push("shadowWhite");
                addonPool.push("swiftWhite");
                addonPool.push("windstormWhite");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("allBlood");
                addonPool.push("shadowBlood");
                addonPool.push("swiftBlood");
                addonPool.push("windstormBlood");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("allSpirit");
                addonPool.push("coxClapper");
            }
            break;
        case "hillbilly":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("counterweight");
                addonPool.push("crackPrimeBulb");
                addonPool.push("discardAirFilter");
                addonPool.push("steelBoots");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("clogIntake");
                addonPool.push("greasedThrottle");
                addonPool.push("highSpeedScrew");
                addonPool.push("offMotorOil");
                addonPool.push("thermalCasing");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("begrimeChains");
                addonPool.push("dadBoots");
                addonPool.push("lowKickChains");
                addonPool.push("ragEngine");
                addonPool.push("thompsonMix");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("apexMuffler");
                addonPool.push("filthySlippers");
                addonPool.push("loproChains");
                addonPool.push("spikedBoots");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridEngrave");
                addonPool.push("tunedCar");
            }
            break;
        case "nurse":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("metalSpoon");
                addonPool.push("plaidFlannel");
                addonPool.push("whiteComb");
                addonPool.push("woodHorse");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("badManKeepsake");
                addonPool.push("catBoyTreasure");
                addonPool.push("darkCincture");
                addonPool.push("dullBracelet");
                addonPool.push("pocketWatch");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("anxiousGasp");
                addonPool.push("ataxRes");
                addonPool.push("fragWheeze");
                addonPool.push("heavyPanting");
                addonPool.push("spasBreath");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("badManBreath");
                addonPool.push("campbellBreath");
                addonPool.push("jennerBreath");
                addonPool.push("kavBreath");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("matchbox");
                addonPool.push("tornBookmark");
            }
            break;
        case "shape":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("blondHair");
                addonPool.push("bfMemo");
                addonPool.push("memoFlower");
                addonPool.push("tackyEar");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("deadRabbit");
                addonPool.push("glassFrag");
                addonPool.push("hairBrush");
                addonPool.push("jewellery");
                addonPool.push("reflectFrag");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("hairBow");
                addonPool.push("jMyersMemo");
                addonPool.push("jewelBox");
                addonPool.push("judithJournal");
                addonPool.push("mirrorShard");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("lockHair");
                addonPool.push("scratchMirror");
                addonPool.push("tombPiece");
                addonPool.push("vanityMirror");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("fragTuftHair");
                addonPool.push("judithTomb");
            }
            break;
        case "hag":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("bogWater");
                addonPool.push("deadFlyMud");
                addonPool.push("powderEggshell");
                addonPool.push("ropeNecklet");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("bloodWater");
                addonPool.push("cypressNecklet");
                addonPool.push("dragonflyWings");
                addonPool.push("halfEggshell");
                addonPool.push("pussyWillowCat");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("bloodiedMud");
                addonPool.push("crackTurtleEgg");
                addonPool.push("driedCicada");
                addonPool.push("swampOrchidNecklet");
                addonPool.push("willowWreath");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("disfigEar");
                addonPool.push("grandmaHeart");
                addonPool.push("rustyShackles");
                addonPool.push("scarHand");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("mintRag");
                addonPool.push("waterlogShoe");
            }
            break;
        case "doctor":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("calmClass1");
                addonPool.push("orderClass1");
                addonPool.push("mapleKnight");
                addonPool.push("mouldyElectrode");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("calmClass2");
                addonPool.push("disClass2");
                addonPool.push("orderClass2");
                addonPool.push("resClass2");
                addonPool.push("polishElectrode");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("disClass3");
                addonPool.push("resClass3");
                addonPool.push("highStimElectrode");
                addonPool.push("interviewTape");
                addonPool.push("scrapTape");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("calmCarter");
                addonPool.push("disCarter");
                addonPool.push("orderCarter");
                addonPool.push("resCarter");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridKing");
                addonPool.push("iridQueen");
            }
            break;
        case "huntress":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("amanToxin");
                addonPool.push("bandageHaft");
                addonPool.push("coarseStone");
                addonPool.push("yellowedCloth");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("leatherLoop");
                addonPool.push("mannaGrassBraid");
                addonPool.push("oakHaft");
                addonPool.push("shinyPin");
                addonPool.push("weightedHead");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("deerskinGloves");
                addonPool.push("flowerBabu");
                addonPool.push("roseRoot");
                addonPool.push("rustyHead");
                addonPool.push("venomConcoct");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("begrimedHead");
                addonPool.push("glowingConcoct");
                addonPool.push("infantryBelt");
                addonPool.push("woodFox");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridHead");
                addonPool.push("soldierPuttee");
            }
            break;
        case "cannibal":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("chainsawFile");
                addonPool.push("sparkPlug");
                addonPool.push("speedLimiter");
                addonPool.push("vegeOil");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("chilli");
                addonPool.push("homemadeMuffler");
                addonPool.push("knifeScratch");
                addonPool.push("longGuideBar");
                addonPool.push("primerBulb");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("begrimedChains");
                addonPool.push("grislyChains");
                addonPool.push("shopLube");
                addonPool.push("beastMarks");
                addonPool.push("theGrease");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("awardChilli");
                addonPool.push("depthGaugeRake");
                addonPool.push("lightChassis");
                addonPool.push("rustChains");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("carTuneGuide");
                addonPool.push("iridFlesh");
            }
            break;
        case "nightmare":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("gardenRake");
                addonPool.push("kidDrawing");
                addonPool.push("sheepBlock");
                addonPool.push("woolShirt");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("catBlock");
                addonPool.push("greenDress");
                addonPool.push("nancySketch");
                addonPool.push("outdoorRope");
                addonPool.push("protoClaws");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("blueDress");
                addonPool.push("jumpRope");
                addonPool.push("nancyMasterpiece");
                addonPool.push("paintThinner");
                addonPool.push("unicornBlock");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("zBlock");
                addonPool.push("classPhoto");
                addonPool.push("pillBottle");
                addonPool.push("swingChains");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("blackBox");
                addonPool.push("redPaintBrush");
            }
            break;
        case "pig":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("combatStraps");
                addonPool.push("interRazor");
                addonPool.push("johnMedFile");
                addonPool.push("shatterSyringe");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("faceMask");
                addonPool.push("lastWill");
                addonPool.push("razorWires");
                addonPool.push("utilBlades");
                addonPool.push("workshopGrease");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("bagGears");
                addonPool.push("jigsawAnnoPlan");
                addonPool.push("rulesSet2");
                addonPool.push("rustyAttach");
                addonPool.push("slowReleaseTox");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("amandaSecret");
                addonPool.push("crateGears");
                addonPool.push("jigsawSketch");
                addonPool.push("tamperTimer");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("amandaLetter");
                addonPool.push("videoTape");
            }
            break;
        case "clown":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("fingerlessParadeGloves");
                addonPool.push("partyBottle");
                addonPool.push("robinFeather");
                addonPool.push("vhsPorn");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("keroseneCan");
                addonPool.push("solventJug");
                addonPool.push("starlingFeather");
                addonPool.push("stickySodaBottle");
                addonPool.push("thickCorkStop");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("botChloro");
                addonPool.push("flaskBleach");
                addonPool.push("smellyInnerSoles");
                addonPool.push("spiritHartshorn");
                addonPool.push("sulphAcidVial");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("cheapGinBot");
                addonPool.push("cigarBox");
                addonPool.push("ether15");
                addonPool.push("garishMakeupKit");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("redheadPinkFinger");
                addonPool.push("tattooMidFinger");
            }
            break;
        case "spirit":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("giftBambooComb");
                addonPool.push("origamiCrane");
                addonPool.push("shiaAmulet");
                addonPool.push("zori");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("juniBonsai");
                addonPool.push("kaiunTali");
                addonPool.push("mudSportDayCap");
                addonPool.push("rinBrokeWatch");
                addonPool.push("whiteHairRib");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("katanaTsuba");
                addonPool.push("motherGlasses");
                addonPool.push("rustyFlute");
                addonPool.push("senkoHanabi");
                addonPool.push("uchiwa");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("driedCherBlos");
                addonPool.push("furin");
                addonPool.push("wakiSaya");
                addonPool.push("yakuAmu");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("kintsugiTea");
                addonPool.push("motDauRing");
            }
            break;
        case "legion":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("friendshipBrace");
                addonPool.push("mischiefList");
                addonPool.push("scratchRuler");
                addonPool.push("smileFacePin");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("defaceSmilePin");
                addonPool.push("etchRuler");
                addonPool.push("julieMixTape");
                addonPool.push("muralSketch");
                addonPool.push("neverSleepPills");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("joeyMixTape");
                addonPool.push("stolenSketchBook");
                addonPool.push("stylishGlasses");
                addonPool.push("susieMixTape");
                addonPool.push("legionPin");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("bffs");
                addonPool.push("filthBlade");
                addonPool.push("frankMixTape");
                addonPool.push("stabWoundStudy");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("fumingMixTape");
                addonPool.push("iridButton");
            }
            break;
        case "plague":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("healingSalve");
                addonPool.push("limestoneSeal");
                addonPool.push("oliIncense");
                addonPool.push("prayTabFrag");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("blessApple");
                addonPool.push("emeticPot");
                addonPool.push("haemSeal");
                addonPool.push("potentTinct");
                addonPool.push("prophyAmu");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("ashApple");
                addonPool.push("exorAmu");
                addonPool.push("incenseOint");
                addonPool.push("infectEme");
                addonPool.push("rubbingOil");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("devotAmu");
                addonPool.push("severToe");
                addonPool.push("vileEme");
                addonPool.push("worshipTab");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("blackIncense");
                addonPool.push("iridSeal");
            }
            break;
        case "ghostface":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("philly");
                addonPool.push("cheapCologne");
                addonPool.push("headlineCutouts");
                addonPool.push("walleyeMatch");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("cinchStraps");
                addonPool.push("markedMap");
                addonPool.push("olsenAddressBook");
                addonPool.push("olsenJournal");
                addonPool.push("teleLens");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("chewedPen");
                addonPool.push("knifeBeltClip");
                addonPool.push("lastingPerf");
                addonPool.push("leatherKnifeSheath");
                addonPool.push("olsenWallet");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("driverLicense");
                addonPool.push("droplegKnifeSheath");
                addonPool.push("nightVisMono");
                addonPool.push("victDetailRout");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("ghostfaceTape");
                addonPool.push("outdoorSecCam");
            }
            break;
        case "demogorgon":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("blackHeart");
                addonPool.push("ratLiver");
                addonPool.push("ratTail");
                addonPool.push("rotPumpkin");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("barbGlasses");
                addonPool.push("mewGuts");
                addonPool.push("rotGreenTripe");
                addonPool.push("stickLining");
                addonPool.push("viscWebbing");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("brassCaseLight");
                addonPool.push("deerLung");
                addonPool.push("elevenSoda");
                addonPool.push("thornyVines");
                addonPool.push("violetWaxcap");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("lifeguardWhis");
                addonPool.push("unknownEgg");
                addonPool.push("upDownResin");
                addonPool.push("vermWebcap");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("lepLichen");
                addonPool.push("redMoss");
            }
            break;
        case "oni":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("blackenToenail");
                addonPool.push("crackSaka");
                addonPool.push("paperLant");
                addonPool.push("rotRope");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("bloodSash");
                addonPool.push("childWoodSword");
                addonPool.push("chipSaihai");
                addonPool.push("inkLion");
                addonPool.push("polishMae");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("kanaiTali");
                addonPool.push("scalpTopknot");
                addonPool.push("shatterWaki");
                addonPool.push("woodOniMask");
                addonPool.push("yamaSashi");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("akitoCrutch");
                addonPool.push("lionFang");
                addonPool.push("splintHull");
                addonPool.push("tearTenu");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridCrest");
                addonPool.push("renjiroBloodGlove");
            }
            break;
        case "deathslinger":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("modAmmoBelt");
                addonPool.push("rickChain");
                addonPool.push("snakeOil");
                addonPool.push("spitPolishRag");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("chewTobacco");
                addonPool.push("jawSmash");
                addonPool.push("marshalBadge");
                addonPool.push("poisonOakLeaves");
                addonPool.push("rustedSpike");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("bayshoreGoldTooth");
                addonPool.push("honeyLocustThorn");
                addonPool.push("tinOilCan");
                addonPool.push("wantedPost");
                addonPool.push("wardenKeys");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("barbedWire");
                addonPool.push("bayshoreCig");
                addonPool.push("goldCreekWhis");
                addonPool.push("prisonChain");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("hellshireIron");
                addonPool.push("iridCoin");
            }
            break;
        case "executioner":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("blackStrap");
                addonPool.push("copperRing");
                addonPool.push("deadButterfly");
                addonPool.push("leadRing");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("cinderMusicBox");
                addonPool.push("forgotVideo");
                addonPool.push("leopardFabric");
                addonPool.push("spearhead");
                addonPool.push("waxDoll");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("burnManPaint");
                addonPool.push("mannequinFoot");
                addonPool.push("mistDayRemainJudge");
                addonPool.push("tabOppress");
                addonPool.push("valSectPhoto");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("crimCereBook");
                addonPool.push("lostMemoBook");
                addonPool.push("rustColorEgg");
                addonPool.push("scarletEgg");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridSealMeta");
                addonPool.push("obsidGoblet");
            }
            break;
        case "blight":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("chipMono");
                addonPool.push("comp7");
                addonPool.push("foxglove");
                addonPool.push("placeboTab");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("blightRat");
                addonPool.push("cankerThorn");
                addonPool.push("plagBile");
                addonPool.push("pustDust");
                addonPool.push("shredNotes");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("adrenVial");
                addonPool.push("blightCrow");
                addonPool.push("comp21");
                addonPool.push("roseTonic");
                addonPool.push("umbraSalt");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("alchemRing");
                addonPool.push("soulChem");
                addonPool.push("summonStone");
                addonPool.push("vigoJourn");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("comp33");
                addonPool.push("iridBlightTag");
            }
            break;
        case "twins":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("catFig");
                addonPool.push("sourMilk");
                addonPool.push("tinyFingernail");
                addonPool.push("toySword");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("babyTeeth");
                addonPool.push("bloodBlackHood");
                addonPool.push("catEye");
                addonPool.push("cereCandela");
                addonPool.push("madeleineGlove");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("madeleineScarf");
                addonPool.push("rustedNeedle");
                addonPool.push("sewerSludge");
                addonPool.push("staleBiscuit");
                addonPool.push("weightRattle");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("dropPerf");
                addonPool.push("forestStew");
                addonPool.push("spinTop");
                addonPool.push("victorSoldier");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridPendant");
                addonPool.push("silencingCloth");
            }
            break;
        case "trickster":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("infernoWire");
                addonPool.push("killPartChords");
                addonPool.push("mementoBlades");
                addonPool.push("trickPouch");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("cageHeartShoe");
                addonPool.push("jiwoonAuto");
                addonPool.push("luckyBlade");
                addonPool.push("onTargSing");
                addonPool.push("teqMoonrock");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("bloodBoa");
                addonPool.push("fizzSoda");
                addonPool.push("melodiMurder");
                addonPool.push("ripperBrace");
                addonPool.push("waitYouWatch");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("cutThruSing");
                addonPool.push("diaCuff");
                addonPool.push("edgeRevAlbum");
                addonPool.push("trickBlade");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("deathThroesComp");
                addonPool.push("iridPhoto");
            }
            break;
        case "nemesis":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("brianIntestine");
                addonPool.push("damageSyringe");
                addonPool.push("starsFieldComMan");
                addonPool.push("visitWrist");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("adminWrist");
                addonPool.push("adrenInject");
                addonPool.push("marvBlood");
                addonPool.push("mikhailEye");
                addonPool.push("zomHeart");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("lickTongue");
                addonPool.push("plant43Vines");
                addonPool.push("seroInject");
                addonPool.push("tVirusSamp");
                addonPool.push("tyrantGore");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("brokeRecCoin");
                addonPool.push("depleteInkRib");
                addonPool.push("jillSand");
                addonPool.push("neaPara");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridUmbBadge");
                addonPool.push("shatterStarsBadge");
            }
            break;
        case "cenobite":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("bentNail");
                addonPool.push("burnCandle");
                addonPool.push("leatherStrip");
                addonPool.push("livelyCrickets");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("flickerTele");
                addonPool.push("liquiGore");
                addonPool.push("skewerRat");
                addonPool.push("spoilMeal");
                addonPool.push("wrigMaggots");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("frankHeart");
                addonPool.push("larryBlood");
                addonPool.push("larryRemains");
                addonPool.push("sliceFrank");
                addonPool.push("torturePillar");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("chattererTooth");
                addonPool.push("greasyBlackLens");
                addonPool.push("impalingWire");
                addonPool.push("origPain");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("engineerFang");
                addonPool.push("iridLamentConfig");
            }
            break;
        case "artist":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("chocloCorn");
                addonPool.push("oilPaints");
                addonPool.push("thickTar");
                addonPool.push("vibObit");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("autoDraw");
                addonPool.push("festerCarrion");
                addonPool.push("stillLifeCrow");
                addonPool.push("untitledAgony");
                addonPool.push("velvetFab");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("charcoalStick");
                addonPool.push("darkInk");
                addonPool.push("oGriefLover");
                addonPool.push("silverBell");
                addonPool.push("thornyNest");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("inkEgg");
                addonPool.push("matiasBabyShoes");
                addonPool.push("severHands");
                addonPool.push("severTongue");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("gardenRot");
                addonPool.push("iridFeather");
            }
            break;
        case "onryo":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("cabinSign");
                addonPool.push("motherMirror");
                addonPool.push("oldNews");
                addonPool.push("videoCopy");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("clumpHair");
                addonPool.push("reikoWatch");
                addonPool.push("seaSoakCloth");
                addonPool.push("wellStone");
                addonPool.push("yoichiFishNet");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("bloodFingernails");
                addonPool.push("motherComb");
                addonPool.push("rickPinwheel");
                addonPool.push("ringDraw");
                addonPool.push("wellWater");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("distortPhoto");
                addonPool.push("tapeEditDeck");
                addonPool.push("telephone");
                addonPool.push("vcr");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridVideo");
                addonPool.push("remoteControl");
            }
            break;
        case "dredge":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("caffeineTab");
                addonPool.push("followCowl");
                addonPool.push("mortarPestle");
                addonPool.push("woodPlank");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("airFreshener");
                addonPool.push("burntLetters");
                addonPool.push("fallShingle");
                addonPool.push("haddieCalendar");
                addonPool.push("malthinkSkull");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("brokeDoll");
                addonPool.push("destroyPillow");
                addonPool.push("ottomaWriting");
                addonPool.push("warHelmet");
                addonPool.push("worryStone");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("boatKey");
                addonPool.push("fieldRecord");
                addonPool.push("lavaMic");
                addonPool.push("tillBlade");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridWoodPlank");
                addonPool.push("sacKnife");
            }
            break;
        case "mastermind":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("jewelBeetle");
                addonPool.push("rpdShoWalkie");
                addonPool.push("unicornMedal");
                addonPool.push("uroTendril");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("bullhorn");
                addonPool.push("chaliceGold");
                addonPool.push("leatherGloves");
                addonPool.push("lionMedal");
                addonPool.push("looseCrank");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("eggGold");
                addonPool.push("maidenMedal");
                addonPool.push("portSafe");
                addonPool.push("redHerb");
                addonPool.push("videoConDev");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("darkSunglasses");
                addonPool.push("greenHerb");
                addonPool.push("heliStick");
                addonPool.push("uroVirus");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridUroVial");
                addonPool.push("labPhoto");
            }
            break;
        case "knight":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("grittyLump");
                addonPool.push("mapRealm");
                addonPool.push("pillageMead");
                addonPool.push("tatterTabard");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("battleAxeHead");
                addonPool.push("callArms");
                addonPool.push("coldSteelMana");
                addonPool.push("driedHorsemeat");
                addonPool.push("treatedBlade");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("brokeHilt");
                addonPool.push("grimIronMask");
                addonPool.push("ironworkTongs");
                addonPool.push("sharpMount");
                addonPool.push("townWatchTorch");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("blacksmithHammer");
                addonPool.push("flintSteel");
                addonPool.push("healingPoul");
                addonPool.push("jailerChime");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridComBan");
                addonPool.push("knightCont");
            }
            break;
        case "skullMerc":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("adiValIssue");
                addonPool.push("highCurrUpgrade");
                addonPool.push("highPowFlood");
                addonPool.push("ultraSpeak");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("adaptLight");
                addonPool.push("lowPowMode");
                addonPool.push("shotgunSpeak");
                addonPool.push("stereoRemMic");
                addonPool.push("supercharge");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("brownNoiseGen");
                addonPool.push("infraUpgrade");
                addonPool.push("looseScrew");
                addonPool.push("powderGlass");
                addonPool.push("vitTarProcess");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("advMovePred");
                addonPool.push("geographRead");
                addonPool.push("protoRotor");
                addonPool.push("randomStrobe");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("expireBatt");
                addonPool.push("iridUnpubManu");
            }
            break;
        case "singularity":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("brokeSecKey");
                addonPool.push("diagToolRepair");
                addonPool.push("heavyWater");
                addonPool.push("nutSlurry");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("androidArm");
                addonPool.push("cremateRemain");
                addonPool.push("cryoGel");
                addonPool.push("kidBallGlove");
                addonPool.push("ultraSensor");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("holoGen");
                addonPool.push("hyperSpray");
                addonPool.push("liveWire");
                addonPool.push("nanoGel");
                addonPool.push("spentOxyTank");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("crewMani");
                addonPool.push("diagToolConstruct");
                addonPool.push("foreignPlantFib");
                addonPool.push("somaFamPhoto");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("deniRequisForm");
                addonPool.push("iridCrystalShard");
            }
            break;
        case "xenomorph":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("cerealRation");
                addonPool.push("drinkBird");
                addonPool.push("ovomorph");
                addonPool.push("ripleyWatch");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("ashInnards");
                addonPool.push("brettCap");
                addonPool.push("crewHeadset");
                addonPool.push("lambertStarMap");
                addonPool.push("lightWand");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("emergHelmet");
                addonPool.push("kaneHelmet");
                addonPool.push("moultSkin");
                addonPool.push("multiHatchet");
                addonPool.push("parkerHeadband");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("catCarrier");
                addonPool.push("harpoonGun");
                addonPool.push("selfDestBolt");
                addonPool.push("semiKeyBoard");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("acidicBlood");
                addonPool.push("improvCattleProd");
            }
            break;
        case "goodGuy":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("dollEyes");
                addonPool.push("goodGuyBox");
                addonPool.push("strobLight");
                addonPool.push("tinyScalpel");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("autoScrewdriver");
                addonPool.push("electricCarvKnife");
                addonPool.push("hairSprayCandle");
                addonPool.push("jumpRope");
                addonPool.push("powerDrill");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("portTv");
                addonPool.push("ratPoison");
                addonPool.push("runningShoes");
                addonPool.push("silkPillow");
                addonPool.push("yardstick");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("mirrorShards");
                addonPool.push("pileNails");
                addonPool.push("plasticBag");
                addonPool.push("straightRazor");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("hardHat");
                addonPool.push("iridAmu");
            }
            break;
        case "unknown":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("blurryPhoto");
                addonPool.push("punctEyeball");
                addonPool.push("rabbitFoot");
                addonPool.push("sketchAttempt");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("devUndisOrigin");
                addonPool.push("lastKnownRecord");
                addonPool.push("noteTheories");
                addonPool.push("slashBackpack");
                addonPool.push("victimMap");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("bMoviePoster");
                addonPool.push("footprintCast");
                addonPool.push("frontPageArticle");
                addonPool.push("hypnoWatch");
                addonPool.push("vanishBox");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("discardMilkCart");
                addonPool.push("homemadeMask");
                addonPool.push("obscureGameCart");
                addonPool.push("serumVial");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("capDark");
                addonPool.push("iridOssRep");
            }
            break;
        case "lich":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("crystalBall");
                addonPool.push("ravenFeather");
                addonPool.push("tatterHeadband");
                addonPool.push("trickGlove");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("glassEye");
                addonPool.push("lantReveal");
                addonPool.push("potSpeed");
                addonPool.push("ringSpellStor");
                addonPool.push("ringTelekin");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("bootSpeed");
                addonPool.push("cloakElven");
                addonPool.push("ornateHorn");
                addonPool.push("pearlPower");
                addonPool.push("staffWither");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("bagHold");
                addonPool.push("cloakInvis");
                addonPool.push("dragonDagger");
                addonPool.push("robeEyes");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridBookVileDark");
                addonPool.push("vorpalSword");
            }
            break;
        case "darkLord":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("cerbTalon");
                addonPool.push("clockTowerGear");
                addonPool.push("rubyCirclet");
                addonPool.push("travHat");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("bloodFillGob");
                addonPool.push("magicTicket");
                addonPool.push("moonstoneNeck");
                addonPool.push("whiteWolfMedal");
                addonPool.push("wingedBoot");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("forceEcho");
                addonPool.push("killDoll");
                addonPool.push("pocketWatch");
                addonPool.push("sunglasses");
                addonPool.push("sylphFeather");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("cubeZoe");
                addonPool.push("lapisLazuli");
                addonPool.push("medusaHair");
                addonPool.push("wargFang");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("alucardShield");
                addonPool.push("iridRingVlad");
            }
            break;
        case "houndmaster":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("creatureBone");
                addonPool.push("stickyPitch");
                addonPool.push("trainerBook");
                addonPool.push("youngCoconut");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("barleyMeal");
                addonPool.push("belayingPins");
                addonPool.push("knottedRope");
                addonPool.push("smokedSnapper");
                addonPool.push("spyglass");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("fattyMeat");
                addonPool.push("spikedCollar");
                addonPool.push("trainingBell");
                addonPool.push("unfinishMap");
                addonPool.push("waterskin");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("gunpowderTin");
                addonPool.push("leatherHarness");
                addonPool.push("marlinspike");
                addonPool.push("shipFigurehead");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridWheelHandle");
                addonPool.push("tornNovel");
            }
            break;
        case "ghoul":
        //Commons
            if($("#commons").is(":checked")){
                addonPool.push("anteikuApron");
                addonPool.push("freshCoffee");
                addonPool.push("kanekiWallet");
                addonPool.push("blackGoatEgg");
            }
        //Uncommons
            if($("#uncommons").is(":checked")){
                addonPool.push("bloodStainedHandkerchief");
                addonPool.push("brokenChain");
                addonPool.push("hideHeadphones");
                addonPool.push("kanekiSatchel");
                addonPool.push("taiyaki");
            }
        //Rares
            if($("#rares").is(":checked")){
                addonPool.push("amonNecktie");
                addonPool.push("aogiriTreeRobe");
                addonPool.push("madoGlove");
                addonPool.push("redSpiderLily");
                addonPool.push("rizeGlasses");
            }
        //Very Rares
            if($("#veryRares").is(":checked")){
                addonPool.push("ccgIDCard");
                addonPool.push("hinamiUmbrella");
                addonPool.push("redHeadedCentipede");
                addonPool.push("tortureApparatus");
            }
        //Ultra Rares
            if($("#ultraRares").is(":checked")){
                addonPool.push("iridEyePatch");
                addonPool.push("yamoriMask");
            }
            break;
        default:

    }
    for(let l = addonPool.length - 1; l > 0; l--){
        let j = Math.floor(Math.random() * (l + 1));
        let k = addonPool[l];
        addonPool[l] = addonPool[j];
        addonPool[j] = k;
    }

    let addon1 = addonPool[addonPool.length - 1];
    let addon2 = addonPool[addonPool.length - 2];

    fixedAddon(addon1,addon2);
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
                offeringPool.push("hollowShell");
                offeringPool.push("survPudding");
                offeringPool.push("bloPartStre");
            }
        //Brutality
            if (!$("#brutality").is(":checked")){
                offeringPool.push("tanager");
                offeringPool.push("devTanager");
                offeringPool.push("ardTanager");
            }
        //Deviousness
            if (!$("#deviousness").is(":checked")){
                offeringPool.push("raven");
                offeringPool.push("devRaven");
                offeringPool.push("ardRaven");
            }
        //Hunter
            if (!$("#hunter").is(":checked")){
                offeringPool.push("spotOwl");
                offeringPool.push("devSpotOwl");
                offeringPool.push("ardSpotOwl");
            }
        //Sacrifice
            if (!$("#sacrifice").is(":checked")){
                offeringPool.push("shrike");
                offeringPool.push("devShrike");
                offeringPool.push("ardShrike");
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
                offeringPool.push("scratchCoin");
                offeringPool.push("cutCoin");
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
                offeringPool.push("mouldyOak");
                offeringPool.push("rotOak");
                offeringPool.push("putrOak");
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
    //Secrets/Wards
        case "secretsWards": 
        //Shroud of Separation
            if (!$("#sepShroud").is(":checked")){
                offeringPool.push("sepShroud");
            }
        //Mori
            if (!$("#mori").is(":checked")){
                offeringPool.push("ivoryMori");
                offeringPool.push("ebonyMori");
            }
        //Wards
            if (!$("#wards").is(":checked")){
                offeringPool.push("sacWard");
                offeringPool.push("blackWard");
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
                offeringPool.splice((offeringPool.indexOf("hollowShell")),1);
                offeringPool.splice((offeringPool.indexOf("survPudding")),1);
                offeringPool.splice((offeringPool.indexOf("bloPartStre")),1);
            }
        //Brutality
            if (!$("#brutality").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("tanager")),1);
                offeringPool.splice((offeringPool.indexOf("devTanager")),1);
                offeringPool.splice((offeringPool.indexOf("ardTanager")),1);
            }
        //Deviousness
            if (!$("#deviousness").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("raven")),1);
                offeringPool.splice((offeringPool.indexOf("devRaven")),1);
                offeringPool.splice((offeringPool.indexOf("ardRaven")),1);
            }
        //Hunter
            if (!$("#hunter").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("spotOwl")),1);
                offeringPool.splice((offeringPool.indexOf("devSpotOwl")),1);
                offeringPool.splice((offeringPool.indexOf("ardSpotOwl")),1);
            }
        //Sacrifice
            if (!$("#sacrifice").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("shrike")),1);
                offeringPool.splice((offeringPool.indexOf("devShrike")),1);
                offeringPool.splice((offeringPool.indexOf("ardShrike")),1);
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
                offeringPool.splice((offeringPool.indexOf("scratchCoin")),1);
                offeringPool.splice((offeringPool.indexOf("cutCoin")),1);
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
                offeringPool.splice((offeringPool.indexOf("mouldyOak")),1);
                offeringPool.splice((offeringPool.indexOf("rotOak")),1);
                offeringPool.splice((offeringPool.indexOf("putrOak")),1);
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
    //Secrets/Wards
        case "secretsWards": 
        //Shroud of Separation
            if (!$("#sepShroud").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("sepShroud")),1);
            }
        //Mori
            if (!$("#mori").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("ivoryMori")),1);
                offeringPool.splice((offeringPool.indexOf("ebonyMori")),1);
            }
        //Wards
            if (!$("#wards").is(":checked")){
                offeringPool.splice((offeringPool.indexOf("sacWard")),1);
                offeringPool.splice((offeringPool.indexOf("blackWard")),1);
            }
            break;
        default: 

    }
}
function namedOfferingPooled(name){
    if ($('#' + name).is(":checked")){
        switch (name){
            case "allCategories": 
                offeringPool.push("hollowShell");
                offeringPool.push("survPudding");
                offeringPool.push("bloPartStre");
                break;
            case "brutality": 
                offeringPool.push("tanager");
                offeringPool.push("devTanager");
                offeringPool.push("ardTanager");
                break;
            case "deviousness": 
                offeringPool.push("raven");
                offeringPool.push("devRaven");
                offeringPool.push("ardRaven");
                break;
            case "hunter": 
                offeringPool.push("spotOwl");
                offeringPool.push("devSpotOwl");
                offeringPool.push("ardSpotOwl");
                break;
            case "sacrifice": 
                offeringPool.push("shrike");
                offeringPool.push("devShrike");
                offeringPool.push("ardShrike");
                break;
            case "basement": 
                offeringPool.push("bloodBlue");
                offeringPool.push("tornBlue");
                break;
            case "chests":
                offeringPool.push("scratchCoin");
                offeringPool.push("cutCoin");
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
                offeringPool.push("mouldyOak");
                offeringPool.push("rotOak");
                offeringPool.push("putrOak");
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
            case "sepShroud": 
                offeringPool.push(name);
                break;
            case "mori": 
                offeringPool.push("ivoryMori");
                offeringPool.push("ebonyMori");
                break;
            case "wards": 
                offeringPool.push("sacWard");
                offeringPool.push("blackWard");
                break;
            default: 

        } 
    }if (!$('#' + name).is(":checked")){
        switch (name){
            case "allCategories": 
                offeringPool.push("hollowShell");
                offeringPool.push("survPudding");
                offeringPool.push("bloPartStre");
                break;
            case "brutality": 
                offeringPool.push("tanager");
                offeringPool.push("devTanager");
                offeringPool.push("ardTanager");
                break;
            case "deviousness": 
                offeringPool.push("raven");
                offeringPool.push("devRaven");
                offeringPool.push("ardRaven");
                break;
            case "hunter": 
                offeringPool.push("spotOwl");
                offeringPool.push("devSpotOwl");
                offeringPool.push("ardSpotOwl");
                break;
            case "sacrifice": 
                offeringPool.push("shrike");
                offeringPool.push("devShrike");
                offeringPool.push("ardShrike");
                break;
            case "basement": 
                offeringPool.push("bloodBlue");
                offeringPool.push("tornBlue");
                break;
            case "chests":
                offeringPool.push("scratchCoin");
                offeringPool.push("cutCoin");
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
                offeringPool.push("mouldyOak");
                offeringPool.push("rotOak");
                offeringPool.push("putrOak");
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
            case "sepShroud": 
                offeringPool.push(name);
                break;
            case "mori": 
                offeringPool.push("ivoryMori");
                offeringPool.push("ebonyMori");
                break;
            case "wards": 
                offeringPool.push("sacWard");
                offeringPool.push("blackWard");
                break;
            default: 

        }
    }if (!$('#' + name).is(":checked")){
        switch (name){
            case "allCategories": 
                offeringPool.splice((offeringPool.indexOf("hollowShell")),1);
                offeringPool.splice((offeringPool.indexOf("survPudding")),1);
                offeringPool.splice((offeringPool.indexOf("bloPartStre")),1);
                break;
            case "brutality": 
                offeringPool.splice((offeringPool.indexOf("tanager")),1);
                offeringPool.splice((offeringPool.indexOf("devTanager")),1);
                offeringPool.splice((offeringPool.indexOf("ardTanager")),1);
                break;
            case "deviousness": 
                offeringPool.splice((offeringPool.indexOf("raven")),1);
                offeringPool.splice((offeringPool.indexOf("devRaven")),1);
                offeringPool.splice((offeringPool.indexOf("ardRaven")),1);
                break;
            case "hunter": 
                offeringPool.splice((offeringPool.indexOf("spotOwl")),1);
                offeringPool.splice((offeringPool.indexOf("devSpotOwl")),1);
                offeringPool.splice((offeringPool.indexOf("ardSpotOwl")),1);
                break;
            case "sacrifice": 
                offeringPool.splice((offeringPool.indexOf("shrike")),1);
                offeringPool.splice((offeringPool.indexOf("devShrike")),1);
                offeringPool.splice((offeringPool.indexOf("ardShrike")),1);
                break;
            case "basement": 
                offeringPool.splice((offeringPool.indexOf("bloodBlue")),1);
                offeringPool.splice((offeringPool.indexOf("tornBlue")),1);
                break;
            case "chests":
                offeringPool.splice((offeringPool.indexOf("scratchCoin")),1);
                offeringPool.splice((offeringPool.indexOf("cutCoin")),1);
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
                offeringPool.splice((offeringPool.indexOf("mouldyOak")),1);
                offeringPool.splice((offeringPool.indexOf("rotOak")),1);
                offeringPool.splice((offeringPool.indexOf("putrOak")),1);
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
            case "sepShroud": 
                offeringPool.splice((offeringPool.indexOf(name)),1);
                break;
            case "mori": 
                offeringPool.splice((offeringPool.indexOf("ivoryMori")),1);
                offeringPool.splice((offeringPool.indexOf("ebonyMori")),1);
                break;
            case "wards": 
                offeringPool.splice((offeringPool.indexOf("sacWard")),1);
                offeringPool.splice((offeringPool.indexOf("blackWard")),1);
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
    randomOffering();
}
//Select/Deselect All Functions
function checking(id,boolean){
    $('#' + id).prop('checked',boolean);
    $('#' + id).trigger("onchange");
}
//Characters
function selectAllKill(){
    if(!$("#trapper").is(":checked")){checking("trapper",true);}
    if(!$("#wraith").is(":checked")){checking("wraith",true);}
    if(!$("#hillbilly").is(":checked")){checking("hillbilly",true);}
    if(!$("#nurse").is(":checked")){checking("nurse",true);}
    if(!$("#shape").is(":checked")){checking("shape",true);}
    if(!$("#hag").is(":checked")){checking("hag",true);}
    if(!$("#doctor").is(":checked")){checking("doctor",true);}
    if(!$("#huntress").is(":checked")){checking("huntress",true);}
    if(!$("#cannibal").is(":checked")){checking("cannibal",true);}
    if(!$("#nightmare").is(":checked")){checking("nightmare",true);}
    if(!$("#pig").is(":checked")){checking("pig",true);}
    if(!$("#clown").is(":checked")){checking("clown",true);}
    if(!$("#spirit").is(":checked")){checking("spirit",true);}   
    if(!$("#legion").is(":checked")){checking("legion",true);}
    if(!$("#plague").is(":checked")){checking("plague",true);}
    if(!$("#ghostface").is(":checked")){checking("ghostface",true);}
    if(!$("#demogorgon").is(":checked")){checking("demogorgon",true);}
    if(!$("#oni").is(":checked")){checking("oni",true);}
    if(!$("#deathslinger").is(":checked")){checking("deathslinger",true);}
    if(!$("#executioner").is(":checked")){checking("executioner",true);}
    if(!$("#blight").is(":checked")){checking("blight",true);}
    if(!$("#twins").is(":checked")){checking("twins",true);}
    if(!$("#trickster").is(":checked")){checking("trickster",true);}
    if(!$("#nemesis").is(":checked")){checking("nemesis",true);}
    if(!$("#cenobite").is(":checked")){checking("cenobite",true);}
    if(!$("#artist").is(":checked")){checking("artist",true);}
    if(!$("#onryo").is(":checked")){checking("onryo",true);}
    if(!$("#dredge").is(":checked")){checking("dredge",true);}
    if(!$("#mastermind").is(":checked")){checking("mastermind",true);}
    if(!$("#knight").is(":checked")){checking("knight",true);}
    if(!$("#skullMerc").is(":checked")){checking("skullMerc",true);}
    if(!$("#singularity").is(":checked")){checking("singularity",true);}
    if(!$("#xenomorph").is(":checked")){checking("xenomorph",true);}
    if(!$("#goodGuy").is(":checked")){checking("goodGuy",true);}
    if(!$("#unknown").is(":checked")){checking("unknown",true);}
    if(!$("#lich").is(":checked")){checking("lich",true);}
    if(!$("#darkLord").is(":checked")){checking("darkLord",true);}
    if(!$("#houndmaster").is(":checked")){checking("houndmaster",true);}
    if(!$("#ghoul").is(":checked")){checking("ghoul",true);}
}
function deselectAllKill(){
    if($("#trapper").is(":checked")){checking("trapper",false);}
    if($("#wraith").is(":checked")){checking("wraith",false);}
    if($("#hillbilly").is(":checked")){checking("hillbilly",false);}
    if($("#nurse").is(":checked")){checking("nurse",false);}
    if($("#shape").is(":checked")){checking("shape",false);}
    if($("#hag").is(":checked")){checking("hag",false);}
    if($("#doctor").is(":checked")){checking("doctor",false);}
    if($("#huntress").is(":checked")){checking("huntress",false);}
    if($("#cannibal").is(":checked")){checking("cannibal",false);}
    if($("#nightmare").is(":checked")){checking("nightmare",false);}
    if($("#pig").is(":checked")){checking("pig",false);}
    if($("#clown").is(":checked")){checking("clown",false);}
    if($("#spirit").is(":checked")){checking("spirit",false);}   
    if($("#legion").is(":checked")){checking("legion",false);}
    if($("#plague").is(":checked")){checking("plague",false);}
    if($("#ghostface").is(":checked")){checking("ghostface",false);}
    if($("#demogorgon").is(":checked")){checking("demogorgon",false);}
    if($("#oni").is(":checked")){checking("oni",false);}
    if($("#deathslinger").is(":checked")){checking("deathslinger",false);}
    if($("#executioner").is(":checked")){checking("executioner",false);}
    if($("#blight").is(":checked")){checking("blight",false);}
    if($("#twins").is(":checked")){checking("twins",false);}
    if($("#trickster").is(":checked")){checking("trickster",false);}
    if($("#nemesis").is(":checked")){checking("nemesis",false);}
    if($("#cenobite").is(":checked")){checking("cenobite",false);}
    if($("#artist").is(":checked")){checking("artist",false);}
    if($("#onryo").is(":checked")){checking("onryo",false);}
    if($("#dredge").is(":checked")){checking("dredge",false);}
    if($("#mastermind").is(":checked")){checking("mastermind",false);}
    if($("#knight").is(":checked")){checking("knight",false);}
    if($("#skullMerc").is(":checked")){checking("skullMerc",false);}
    if($("#singularity").is(":checked")){checking("singularity",false);}
    if($("#xenomorph").is(":checked")){checking("xenomorph",false);}
    if($("#goodGuy").is(":checked")){checking("goodGuy",false);}
    if($("#unknown").is(":checked")){checking("unknown",false);}
    if($("#lich").is(":checked")){checking("lich",false);}
    if($("#darkLord").is(":checked")){checking("darkLord",false);}
    if($("#houndmaster").is(":checked")){checking("houndmaster",false);}
    if($("#ghoul").is(":checked")){checking("ghoul",false);}
}
//Perks
function selectAllPerk(){
    if(!$("#univPerks").is(":checked")){checking("univPerks",true);}
    if(!$("#anyCho").is(":checked")){checking("anyCho",true);}
    if(!$("#noCho").is(":checked")){checking("noCho",true);}
    //Trapper Perks
    if(!$("#agi").is(":checked")){checking("agi",true);}
    if(!$("#bruStr").is(":checked")){checking("bruStr",true);}  
    if(!$("#unnPre").is(":checked")){checking("unnPre",true);} 
    //Wraith Perks
    if(!$("#blo").is(":checked")){checking("blo",true);}  
    if(!$("#pre").is(":checked")){checking("pre",true);}  
    if(!$("#sha").is(":checked")){checking("sha",true);} 
    //Hillbilly Perks
    if(!$("#end").is(":checked")){checking("end",true);}  
    if(!$("#lig").is(":checked")){checking("lig",true);}  
    if(!$("#tin").is(":checked")){checking("tin",true);}  
    //Nurse Perks
    if(!$("#nurCal").is(":checked")){checking("nurCal",true);}  
    if(!$("#str").is(":checked")){checking("str",true);}  
    if(!$("#tha").is(":checked")){checking("tha",true);}  
    //Shape Perks
    if(!$("#dyiLig").is(":checked")){checking("dyiLig",true);}  
    if(!$("#plaWitYouFoo").is(":checked")){checking("plaWitYouFoo",true);}  
    if(!$("#savBesLas").is(":checked")){checking("savBesLas",true);}  
    //Hag Perks
    if(!$("#hexDevHop").is(":checked")){checking("hexDevHop",true);}  
    if(!$("#hexRui").is(":checked")){checking("hexRui",true);}  
    if(!$("#hexThiSea").is(":checked")){checking("hexThiSea",true);}  
    //Doctor Perks
    if(!$("#monAbu").is(":checked")){checking("monAbu",true);}  
    if(!$("#ove").is(":checked")){checking("ove",true);}  
    if(!$("#ovePre").is(":checked")){checking("ovePre",true);}  
    //Huntress Perks
    if(!$("#beaPre").is(":checked")){checking("beaPre",true);}  
    if(!$("#hexHunLul").is(":checked")){checking("hexHunLul",true);}  
    if(!$("#terImp").is(":checked")){checking("terImp",true);}  
    //Cannibal Perks
    if(!$("#bbq").is(":checked")){checking("bbq",true);}  
    if(!$("#fraDem").is(":checked")){checking("fraDem",true);}  
    if(!$("#knoOut").is(":checked")){checking("knoOut",true);}  
    //Nightmare Perks
    if(!$("#bloWaar").is(":checked")){checking("bloWar",true);}  
    if(!$("#firUp").is(":checked")){checking("firUp",true);}  
    if(!$("#remMe").is(":checked")){checking("remMe",true);}  
    //Pig Perks
    if(!$("#makYouCho").is(":checked")){checking("makYouCho",true);}  
    if(!$("#scoHooHanTri").is(":checked")){checking("scoHooHanTri",true);}  
    if(!$("#sur").is(":checked")){checking("sur",true);}  
    //Clown Perks
    if(!$("#bam").is(":checked")){checking("bam",true);}  
    if(!$("#cou").is(":checked")){checking("cou",true);}  
    if(!$("#popGoWea").is(":checked")){checking("popGoWea",true);}  
    //Spirit Perks
    if(!$("#hexHauGro").is(":checked")){checking("hexHauGro",true);}  
    if(!$("#ran").is(":checked")){checking("ran",true);}  
    if(!$("#spiFur").is(":checked")){checking("spiFur",true);}  
    //Legion Perks
    if(!$("#dis").is(":checked")){checking("dis",true);}  
    if(!$("#iroMai").is(":checked")){checking("iroMai",true);}  
    if(!$("#madGri").is(":checked")){checking("madGri",true);}  
    //Plague Perks
    if(!$("#corInt").is(":checked")){checking("corInt",true);}  
    if(!$("#darDev").is(":checked")){checking("darDev",true);}  
    if(!$("#infFri").is(":checked")){checking("infFri",true);}  
    //Ghostface Perks
    if(!$("#furCha").is(":checked")){checking("furCha",true);}  
    if(!$("#imAllEar").is(":checked")){checking("imAllEar",true);}  
    if(!$("#thrTre").is(":checked")){checking("thrTre",true);}  
    //Demogorgon Perks
    if(!$("#cruLim").is(":checked")){checking("cruLim",true);}  
    if(!$("#min").is(":checked")){checking("min",true);}  
    if(!$("#surge").is(":checked")){checking("surge",true);}  
    //Oni Perks
    if(!$("#bloEch").is(":checked")){checking("bloEch",true);}  
    if(!$("#nem").is(":checked")){checking("nem",true);}  
    if(!$("#zanTac").is(":checked")){checking("zanTac",true);}  
    //Deathslinger Perks
    if(!$("#deaManSwi").is(":checked")){checking("deaManSwi",true);}  
    if(!$("#gea").is(":checked")){checking("gea",true);} 
    if(!$("#hexRet").is(":checked")){checking("hexRet",true);}  
    //Executioner Perks
    if(!$("#dea").is(":checked")){checking("dea",true);}  
    if(!$("#forPen").is(":checked")){checking("forPen",true);}  
    if(!$("#traTor").is(":checked")){checking("traTor",true);}  
    //Blight Perks
    if(!$("#draGri").is(":checked")){checking("draGri",true);}  
    if(!$("#hexBloFav").is(":checked")){checking("hexBloFav",true);}  
    if(!$("#hexUnd").is(":checked")){checking("hexUnd",true);}  
    //Twins Perks
    if(!$("#couDeGra").is(":checked")){checking("couDeGra",true);}  
    if(!$("#hoa").is(":checked")){checking("hoa",true);}  
    if(!$("#opp").is(":checked")){checking("opp",true);}  
    //Trickster Perks
    if(!$("#hexCroCon").is(":checked")){checking("hexCroCon",true);}  
    if(!$("#noWayOut").is(":checked")){checking("noWayOut",true);}  
    if(!$("#sta").is(":checked")){checking("sta",true);}  
    //Nemesis Perks
    if(!$("#eru").is(":checked")){checking("eru",true);}  
    if(!$("#hys").is(":checked")){checking("hys",true);}  
    if(!$("#letPur").is(":checked")){checking("letPur",true);}  
    //Cenobite Perks
    if(!$("#dead").is(":checked")){checking("dead",true);}  
    if(!$("#hexPla").is(":checked")){checking("hexPla",true);}  
    if(!$("#scoHooGifPai").is(":checked")){checking("scoHooGifPai",true);}  
    //Artist Perks
    if(!$("#griEmb").is(":checked")){checking("griEmb",true);}  
    if(!$("#hexPen").is(":checked")){checking("hexPen",true);}  
    if(!$("#scoHooPaiRes").is(":checked")){checking("scoHooPaiRes",true);}  
    //Onryo Perks
    if(!$("#calBri").is(":checked")){checking("calBri",true);}  
    if(!$("#merSto").is(":checked")){checking("merSto",true);}  
    if(!$("#scoHooFloRag").is(":checked")){checking("scoHooFloRag",true);}  
    //Dredge Perks
    if(!$("#darRev").is(":checked")){checking("darRev",true);}  
    if(!$("#diss").is(":checked")){checking("diss",true);}  
    if(!$("#sepTou").is(":checked")){checking("sepTou",true);}  
    //Mastermind Perks
    if(!$("#awaAwa").is(":checked")){checking("awaAwa",true);}  
    if(!$("#supAna").is(":checked")){checking("supAna",true);}  
    if(!$("#ter").is(":checked")){checking("ter",true);}  
    //Knight Perks
    if(!$("#hexFacDar").is(":checked")){checking("hexFacDar",true);}  
    if(!$("#hub").is(":checked")){checking("hub",true);}  
    if(!$("#nowHid").is(":checked")){checking("nowHid",true);}  
    //Skull Merchant Perks
    if(!$("#gamAfo").is(":checked")){checking("gamAfo",true);}  
    if(!$("#lev").is(":checked")){checking("lev",true);}  
    if(!$("#thw").is(":checked")){checking("thw",true);}  
    //Singularity Perks
    if(!$("#forHes").is(":checked")){checking("forHes",true);}  
    if(!$("#genLim").is(":checked")){checking("genLim",true);}  
    if(!$("#macLea").is(":checked")){checking("macLea",true);}  
    //Xenomorph Perks
    if(!$("#aliIns").is(":checked")){checking("aliIns",true);}  
    if(!$("#rapBru").is(":checked")){checking("rapBru",true);}  
    if(!$("#ultWea").is(":checked")){checking("ultWea",true);}  
    //Good Guy Perks
    if(!$("#batInc").is(":checked")){checking("batInc",true);}  
    if(!$("#friEnd").is(":checked")){checking("friEnd",true);}  
    if(!$("#hexTwoCanPla").is(":checked")){checking("hexTwoCanPla",true);}  
    //Unknown Perks
    if(!$("#unb").is(":checked")){checking("unb",true);}  
    if(!$("#und").is(":checked")){checking("und",true);}  
    if(!$("#unf").is(":checked")){checking("unf",true);}  
    //Lich Perks
    if(!$("#darArr").is(":checked")){checking("darArr",true);}  
    if(!$("#lanTou").is(":checked")){checking("lanTou",true);}  
    if(!$("#weaAtt").is(":checked")){checking("weaAtt",true);}  
    //Dark Lord Perks
    if(!$("#dom").is(":checked")){checking("dom",true);}  
    if(!$("#hexWreFat").is(":checked")){checking("hexWreFat",true);}  
    if(!$("#humGre").is(":checked")){checking("humGre",true);}  
    //Houndmaster Perks
    if(!$("#allShaThu").is(":checked")){checking("allShaThu",true);}  
    if(!$("#noQua").is(":checked")){checking("noQua",true);}  
    if(!$("#scoHooJagCom").is(":checked")){checking("scoHooJagCom",true);} 
    //Ghoul Perks
    if(!$("#hexNotButMis").is(":checked")){checking("hexNotButMis",true);}  
    if(!$("#forEnt").is(":checked")){checking("forEnt",true);}  
    if(!$("#nonAreFre").is(":checked")){checking("nonAreFre",true);}   
}
function deselectAllPerk(){
    if($("#univPerks").is(":checked")){checking("univPerks",false);}
    if($("#anyCho").is(":checked")){checking("anyCho",false);}
    if($("#noCho").is(":checked")){checking("noCho",false);}
    //Trapper Perks
    if($("#agi").is(":checked")){checking("agi",false);}
    if($("#bruStr").is(":checked")){checking("bruStr",false);}  
    if($("#unnPre").is(":checked")){checking("unnPre",false);} 
    //Wraith Perks
    if($("#blo").is(":checked")){checking("blo",false);}  
    if($("#pre").is(":checked")){checking("pre",false);}  
    if($("#sha").is(":checked")){checking("sha",false);} 
    //Hillbilly Perks
    if($("#end").is(":checked")){checking("end",false);}  
    if($("#lig").is(":checked")){checking("lig",false);}  
    if($("#tin").is(":checked")){checking("tin",false);}  
    //Nurse Perks
    if($("#nurCal").is(":checked")){checking("nurCal",false);}  
    if($("#str").is(":checked")){checking("str",false);}  
    if($("#tha").is(":checked")){checking("tha",false);}  
    //Shape Perks
    if($("#dyiLig").is(":checked")){checking("dyiLig",false);}  
    if($("#plaWitYouFoo").is(":checked")){checking("plaWitYouFoo",false);}  
    if($("#savBesLas").is(":checked")){checking("savBesLas",false);}  
    //Hag Perks
    if($("#hexDevHop").is(":checked")){checking("hexDevHop",false);}  
    if($("#hexRui").is(":checked")){checking("hexRui",false);}  
    if($("#hexThiSea").is(":checked")){checking("hexThiSea",false);}  
    //Doctor Perks
    if($("#monAbu").is(":checked")){checking("monAbu",false);}  
    if($("#ove").is(":checked")){checking("ove",false);}  
    if($("#ovePre").is(":checked")){checking("ovePre",false);}  
    //Huntress Perks
    if($("#beaPre").is(":checked")){checking("beaPre",false);}  
    if($("#hexHunLul").is(":checked")){checking("hexHunLul",false);}  
    if($("#terImp").is(":checked")){checking("terImp",false);}  
    //Cannibal Perks
    if($("#bbq").is(":checked")){checking("bbq",false);}  
    if($("#fraDem").is(":checked")){checking("fraDem",false);}  
    if($("#knoOut").is(":checked")){checking("knoOut",false);}  
    //Nightmare Perks
    if($("#bloWaar").is(":checked")){checking("bloWar",false);}  
    if($("#firUp").is(":checked")){checking("firUp",false);}  
    if($("#remMe").is(":checked")){checking("remMe",false);}  
    //Pig Perks
    if($("#makYouCho").is(":checked")){checking("makYouCho",false);}  
    if($("#scoHooHanTri").is(":checked")){checking("scoHooHanTri",false);}  
    if($("#sur").is(":checked")){checking("sur",false);}  
    //Clown Perks
    if($("#bam").is(":checked")){checking("bam",false);}  
    if($("#cou").is(":checked")){checking("cou",false);}  
    if($("#popGoWea").is(":checked")){checking("popGoWea",false);}  
    //Spirit Perks
    if($("#hexHauGro").is(":checked")){checking("hexHauGro",false);}  
    if($("#ran").is(":checked")){checking("ran",false);}  
    if($("#spiFur").is(":checked")){checking("spiFur",false);}  
    //Legion Perks
    if($("#dis").is(":checked")){checking("dis",false);}  
    if($("#iroMai").is(":checked")){checking("iroMai",false);}  
    if($("#madGri").is(":checked")){checking("madGri",false);}  
    //Plague Perks
    if($("#corInt").is(":checked")){checking("corInt",false);}  
    if($("#darDev").is(":checked")){checking("darDev",false);}  
    if($("#infFri").is(":checked")){checking("infFri",false);}  
    //Ghostface Perks
    if($("#furCha").is(":checked")){checking("furCha",false);}  
    if($("#imAllEar").is(":checked")){checking("imAllEar",false);}  
    if($("#thrTre").is(":checked")){checking("thrTre",false);}  
    //Demogorgon Perks
    if($("#cruLim").is(":checked")){checking("cruLim",false);}  
    if($("#min").is(":checked")){checking("min",false);}  
    if($("#surge").is(":checked")){checking("surge",false);}  
    //Oni Perks
    if($("#bloEch").is(":checked")){checking("bloEch",false);}  
    if($("#nem").is(":checked")){checking("nem",false);}  
    if($("#zanTac").is(":checked")){checking("zanTac",false);}  
    //Deathslinger Perks
    if($("#deaManSwi").is(":checked")){checking("deaManSwi",false);}  
    if($("#gea").is(":checked")){checking("gea",false);} 
    if($("#hexRet").is(":checked")){checking("hexRet",false);}  
    //Executioner Perks
    if($("#dea").is(":checked")){checking("dea",false);}  
    if($("#forPen").is(":checked")){checking("forPen",false);}  
    if($("#traTor").is(":checked")){checking("traTor",false);}  
    //Blight Perks
    if($("#draGri").is(":checked")){checking("draGri",false);}  
    if($("#hexBloFav").is(":checked")){checking("hexBloFav",false);}  
    if($("#hexUnd").is(":checked")){checking("hexUnd",false);}  
    //Twins Perks
    if($("#couDeGra").is(":checked")){checking("couDeGra",false);}  
    if($("#hoa").is(":checked")){checking("hoa",false);}  
    if($("#opp").is(":checked")){checking("opp",false);}  
    //Trickster Perks
    if($("#hexCroCon").is(":checked")){checking("hexCroCon",false);}  
    if($("#noWayOut").is(":checked")){checking("noWayOut",false);}  
    if($("#sta").is(":checked")){checking("sta",false);}  
    //Nemesis Perks
    if($("#eru").is(":checked")){checking("eru",false);}  
    if($("#hys").is(":checked")){checking("hys",false);}  
    if($("#letPur").is(":checked")){checking("letPur",false);}  
    //Cenobite Perks
    if($("#dead").is(":checked")){checking("dead",false);}  
    if($("#hexPla").is(":checked")){checking("hexPla",false);}  
    if($("#scoHooGifPai").is(":checked")){checking("scoHooGifPai",false);}  
    //Artist Perks
    if($("#griEmb").is(":checked")){checking("griEmb",false);}  
    if($("#hexPen").is(":checked")){checking("hexPen",false);}  
    if($("#scoHooPaiRes").is(":checked")){checking("scoHooPaiRes",false);}  
    //Onryo Perks
    if($("#calBri").is(":checked")){checking("calBri",false);}  
    if($("#merSto").is(":checked")){checking("merSto",false);}  
    if($("#scoHooFloRag").is(":checked")){checking("scoHooFloRag",false);}  
    //Dredge Perks
    if($("#darRev").is(":checked")){checking("darRev",false);}  
    if($("#diss").is(":checked")){checking("diss",false);}  
    if($("#sepTou").is(":checked")){checking("sepTou",false);}  
    //Mastermind Perks
    if($("#awaAwa").is(":checked")){checking("awaAwa",false);}  
    if($("#supAna").is(":checked")){checking("supAna",false);}  
    if($("#ter").is(":checked")){checking("ter",false);}  
    //Knight Perks
    if($("#hexFacDar").is(":checked")){checking("hexFacDar",false);}  
    if($("#hub").is(":checked")){checking("hub",false);}  
    if($("#nowHid").is(":checked")){checking("nowHid",false);}  
    //Skull Merchant Perks
    if($("#gamAfo").is(":checked")){checking("gamAfo",false);}  
    if($("#lev").is(":checked")){checking("lev",false);}  
    if($("#thw").is(":checked")){checking("thw",false);}  
    //Singularity Perks
    if($("#forHes").is(":checked")){checking("forHes",false);}  
    if($("#genLim").is(":checked")){checking("genLim",false);}  
    if($("#macLea").is(":checked")){checking("macLea",false);}  
    //Xenomorph Perks
    if($("#aliIns").is(":checked")){checking("aliIns",false);}  
    if($("#rapBru").is(":checked")){checking("rapBru",false);}  
    if($("#ultWea").is(":checked")){checking("ultWea",false);}  
    //Good Guy Perks
    if($("#batInc").is(":checked")){checking("batInc",false);}  
    if($("#friEnd").is(":checked")){checking("friEnd",false);}  
    if($("#hexTwoCanPla").is(":checked")){checking("hexTwoCanPla",false);}  
    //Unknown Perks
    if($("#unb").is(":checked")){checking("unb",false);}  
    if($("#und").is(":checked")){checking("und",false);}  
    if($("#unf").is(":checked")){checking("unf",false);}  
    //Lich Perks
    if($("#darArr").is(":checked")){checking("darArr",false);}  
    if($("#lanTou").is(":checked")){checking("lanTou",false);}  
    if($("#weaAtt").is(":checked")){checking("weaAtt",false);}  
    //Dark Lord Perks
    if($("#dom").is(":checked")){checking("dom",false);}  
    if($("#hexWreFat").is(":checked")){checking("hexWreFat",false);}  
    if($("#humGre").is(":checked")){checking("humGre",false);}  
    //Houndmaster Perks
    if($("#allShaThu").is(":checked")){checking("allShaThu",false);}  
    if($("#noQua").is(":checked")){checking("noQua",false);}  
    if($("#scoHooJagCom").is(":checked")){checking("scoHooJagCom",false);} 
    //Ghoul Perks
    if($("#hexNotButMis").is(":checked")){checking("hexNotButMis",false);}  
    if($("#forEnt").is(":checked")){checking("forEnt",false);}  
    if($("#nonAreFre").is(":checked")){checking("nonAreFre",false);} 
}
//Add-ons
function selectAllAddon(){
    if(!$("#commons").is(":checked")){checking("commons",true);}
    if(!$("#uncommons").is(":checked")){checking("uncommons",true);}
    if(!$("#rares").is(":checked")){checking("rares",true);}
    if(!$("#veryRares").is(":checked")){checking("veryRares",true);}
    if(!$("#ultraRares").is(":checked")){checking("ultraRares",true);}
}
function deselectAllAddon(){
    if($("#commons").is(":checked")){checking("commons",false);}
    if($("#uncommons").is(":checked")){checking("uncommons",false);}
    if($("#rares").is(":checked")){checking("rares",false);}
    if($("#veryRares").is(":checked")){checking("veryRares",false);}
    if($("#ultraRares").is(":checked")){checking("ultraRares",false);}
}
//Offerings
function selectAllOffering(){
    if(!$("#bloodpoints").is(":checked")){checking("bloodpoints",true);}
    if(!$("#mapMods").is(":checked")){checking("mapMods",true);}
    if(!$("#realm").is(":checked")){checking("realm",true);}
    if(!$("#secretsWards").is(":checked")){checking("secretsWards",true);}
}
function deselectAllOffering(){
    if ($("#bloodpoints").is(":checked")){checking("bloodpoints",false);}
    if ($("#mapMods").is(":checked")){checking("mapMods",false);}
    if ($("#realm").is(":checked")){checking("realm",false);}
    if ($("#secretsWards").is(":checked")){checking("secretsWards",false);}
    if ($("#allCategories").is(":checked")){checking("allCategories",false);}
    if ($("#brutality").is(":checked")){checking("brutality",false);}
    if ($("#deviousness").is(":checked")){checking("deviousness",false);}
    if ($("#hunter").is(":checked")){checking("hunter",false);}
    if ($("#sacrifice").is(":checked")){checking("sacrifice",false);}
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
    if ($("#sepShroud").is(":checked")){checking("sepShroud",false);}
    if ($("#mori").is(":checked")){checking("mori",false);}
    if ($("#wards").is(":checked")){checking("wards",false);}
    
}
//After Randomize Display Fixes
//Characters
function fixedChar(char){
    switch(char){
        case "anyChar":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/RandomKiller Placeholder.png";
            document.getElementById("charName").innerHTML = "Any Killer";
            document.getElementById("powerImg").src = "Powers/Powers/RandomKillerPowerPlaceholder.png";
            document.getElementById("powerName").innerHTML = "Selected Killer's Power";
            break;
        case "trapper":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_TR.png";
            document.getElementById("charName").innerHTML = "The Trapper";
            document.getElementById("powerImg").src = "Powers/Powers/iconPowers_trap.png";
            document.getElementById("powerName").innerHTML = "Bear Trap";
            break;
        case "wraith":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_WR.png";
            document.getElementById("charName").innerHTML = "The Wraith";
            document.getElementById("powerImg").src = "Powers/Powers/iconPowers_bell.png";
            document.getElementById("powerName").innerHTML = "Wailing Bell";
            break;
        case "hillbilly":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_HB.png";
            document.getElementById("charName").innerHTML = "The Hillbilly";
            document.getElementById("powerImg").src = "Powers/Powers/iconPowers_chainsaw.png";
            document.getElementById("powerName").innerHTML = "Chainsaw";
            break;
        case "nurse":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_NR.png";
            document.getElementById("charName").innerHTML = "The Nurse";
            document.getElementById("powerImg").src = "Powers/Powers/iconPowers_breath.png";
            document.getElementById("powerName").innerHTML = "Spencer's Last Breath";
            break;
        case "shape":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_SH.png";
            document.getElementById("charName").innerHTML = "The Shape";
            document.getElementById("powerImg").src = "Powers/Powers/DLC2/iconPowers_stalker1.png";
            document.getElementById("powerName").innerHTML = "Evil Within";
            break;
        case "hag":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_HA.png";
            document.getElementById("charName").innerHTML = "The Hag";
            document.getElementById("powerImg").src = "Powers/Powers/DLC3/iconPowers_blackenedCatalyst.png";
            document.getElementById("powerName").innerHTML = "Blackened Catalyst";
            break;
        case "doctor":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_DO.png";
            document.getElementById("charName").innerHTML = "The Doctor";
            document.getElementById("powerImg").src = "Powers/Powers/DLC4/iconPowers_cartersSpark.png";
            document.getElementById("powerName").innerHTML = "Carter's Spark";
            break;
        case "huntress":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_BE.png";
            document.getElementById("charName").innerHTML = "The Huntress";
            document.getElementById("powerImg").src = "Powers/Powers/DLC5/iconPowers_huntingHatchets.png";
            document.getElementById("powerName").innerHTML = "Hunting Hatchets";
            break;
        case "cannibal":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_CA.png";
            document.getElementById("charName").innerHTML = "The Cannibal";
            document.getElementById("powerImg").src = "Powers/Powers/Cannibal/iconPowers_bubbasChainsaw.png";
            document.getElementById("powerName").innerHTML = "Bubba's Chainsaw";
            break;
        case "nightmare":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_SD.png";
            document.getElementById("charName").innerHTML = "The Nightmare";
            document.getElementById("powerImg").src = "Powers/Powers/England/iconPowers_dreamMaster.png";
            document.getElementById("powerName").innerHTML = "Dream Demon";
            break;
        case "pig":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_FK.png";
            document.getElementById("charName").innerHTML = "The Pig";
            document.getElementById("powerImg").src = "Powers/Powers/Finland/iconPowers_reverseBearTrap.png";
            document.getElementById("powerName").innerHTML = "Jigsaw's Baptism";
            break;
        case "clown":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_GK.png";
            document.getElementById("charName").innerHTML = "The Clown";
            document.getElementById("powerImg").src = "Powers/Powers/Guam/iconPowers_gasBomb.png";
            document.getElementById("powerName").innerHTML = "The Afterpiece Tonic";
            break;
        case "spirit":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_RY.png";
            document.getElementById("charName").innerHTML = "The Spirit";
            document.getElementById("powerImg").src = "Powers/Powers/Haiti/iconPowers_yamaokasHaunting.png";
            document.getElementById("powerName").innerHTML = "Yamaoka's Haunting";
            break;
        case "legion":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_KK.png";
            document.getElementById("charName").innerHTML = "The Legion";
            document.getElementById("powerImg").src = "Powers/Powers/Kenya/iconPowers_feralFrenzy.png";
            document.getElementById("powerName").innerHTML = "Feral Frenzy";
            break;
        case "plague":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_MK.png";
            document.getElementById("charName").innerHTML = "The Plague";
            document.getElementById("powerImg").src = "Powers/Powers/Mali/iconPowers_vilePurge.png";
            document.getElementById("powerName").innerHTML = "Vile Purge";
            break;
        case "ghostface":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/storeBackground_OK.png";
            document.getElementById("charName").innerHTML = "The Ghost Face";
            document.getElementById("powerImg").src = "Powers/Powers/Oman/iconPowers_ghostPower_activated.png";
            document.getElementById("powerName").innerHTML = "Night Shroud";
            break;
        case "demogorgon":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Qatar/QK_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Demogorgon";
            document.getElementById("powerImg").src = "Powers/Powers/Qatar/iconPowers_ofTheAbyss.png";
            document.getElementById("powerName").innerHTML = "Of the Abyss";
            break;
        case "oni":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Sweden/SK_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Oni";
            document.getElementById("powerImg").src = "Powers/Powers/Sweden/iconPowers_yamaokasWrath_demon.png";
            document.getElementById("powerName").innerHTML = "Yamaoka's Wrath";
            break;
        case "deathslinger":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Ukraine/UK_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Deathslinger";
            document.getElementById("powerImg").src = "Powers/Powers/Ukraine/iconPowers_UK.png";
            document.getElementById("powerName").innerHTML = "The Redeemer";
            break;
        case "executioner":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Wales/K20_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Executioner";
            document.getElementById("powerImg").src = "Powers/Powers/Wales/iconPowers_Wales_ritesOfJudgement.png";
            document.getElementById("powerName").innerHTML = "Rites of Judgement";
            break;
        case "blight":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Yemen/K21_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Blight";
            document.getElementById("powerImg").src = "Powers/Powers/Yemen/iconPowers_K21.png";
            document.getElementById("powerName").innerHTML = "Blighted Corruption";
            break;
        case "twins":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Aurora/K22_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Twins";
            document.getElementById("powerImg").src = "Powers/Powers/Aurora/iconPowers_bloodBond_01.png";
            document.getElementById("powerName").innerHTML = "Blood Bond";
            break;
        case "trickster":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Comet/K23_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Trickster";
            document.getElementById("powerImg").src = "Powers/Powers/Comet/iconPowers_Showstopper_02.png";
            document.getElementById("powerName").innerHTML = "Showstopper";
            break;
        case "nemesis":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Eclipse/K24_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Nemesis";
            document.getElementById("powerImg").src = "Powers/Powers/Eclipse/iconPowers_T-virus1.png";
            document.getElementById("powerName").innerHTML = "T-Virus";
            break;
        case "cenobite":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Gemini/K25_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Cenobite";
            document.getElementById("powerImg").src = "Powers/Powers/Gemini/iconPowers_summonsOfPain.png";
            document.getElementById("powerName").innerHTML = "Summons of Pain";
            break;
        case "artist":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Ion/K26_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Artist";
            document.getElementById("powerImg").src = "Powers/Powers/Ion/T_iconPowers_birdsOfTorment.png";
            document.getElementById("powerName").innerHTML = "Birds of Torment";
            break;
        case "onryo":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Kepler/K27_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Onryō";
            document.getElementById("powerImg").src = "Powers/Powers/Kepler/iconPowers_delugeOfFear2.png";
            document.getElementById("powerName").innerHTML = "Deluge of Fear";
            break;
        case "dredge":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Meteor/K28_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Dredge";
            document.getElementById("powerImg").src = "Powers/Powers/Meteor/T_iconPowers_ReignofDarkness.png";
            document.getElementById("powerName").innerHTML = "Reign of Darkness";
            break;
        case "mastermind":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Orion/K29_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Mastermind";
            document.getElementById("powerImg").src = "Powers/Powers/Orion/iconPowers_virulentBound.png";
            document.getElementById("powerName").innerHTML = "Virulent Bound";
            break;
        case "knight":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Quantum/K30_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Knight";
            document.getElementById("powerImg").src = "Powers/Powers/Quantum/T_iconPowers_Executioner.png";
            document.getElementById("powerName").innerHTML = "Guardia Compagnia";
            break;
        case "skullMerc":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Saturn/K31_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Skull Merchant";
            document.getElementById("powerImg").src = "Powers/Powers/Saturn/iconPowers_drones.png";
            document.getElementById("powerName").innerHTML = "Eyes in the Sky";
            break;
        case "singularity":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Umbra/K32_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Singularity";
            document.getElementById("powerImg").src = "Powers/Powers/Umbra/iconPowers_quantumInstantiation.png";
            document.getElementById("powerName").innerHTML = "Quantum Instantiation";
            break;
        case "xenomorph":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Wormhole/K33_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Xenomorph";
            document.getElementById("powerImg").src = "Powers/Powers/Wormhole/iconPowers_hiddenPursuit_inactive.png";
            document.getElementById("powerName").innerHTML = "Hidden Pursuit";
            break;
        case "goodGuy":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Yerkes/K34_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Good Guy";
            document.getElementById("powerImg").src = "Powers/Powers/Yerkes/iconPowers_K34.png";
            document.getElementById("powerName").innerHTML = "Playtime's Over";
            break;
        case "unknown":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Applepie/K35_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Unknown";
            document.getElementById("powerImg").src = "Powers/Powers/Applepie/iconPowers_AOE_Projectile.png";
            document.getElementById("powerName").innerHTML = "UVX";
            break;
        case "lich":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Churros/K36_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Lich";
            document.getElementById("powerImg").src = "Powers/Powers/Churros/iconPowers_VileDarkness.png";
            document.getElementById("powerName").innerHTML = "Vile Darkness";
            break;
        case "darkLord":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Eclair/K37_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Dark Lord";
            document.getElementById("powerImg").src = "Powers/Powers/Eclair/iconPowers_K37_Shapeshift.png";
            document.getElementById("powerName").innerHTML = "Vampiric Power";
            break;
        case "houndmaster":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Gelato/T_UI_K38_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Houndmaster";
            document.getElementById("powerImg").src = "Powers/Powers/Gelato/iconPowers_DashCommand_K38.png";
            document.getElementById("powerName").innerHTML = "Scent of Blood";
            break;
        case "ghoul":
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/Icecream/T_UI_K39_storeBackground.png";
            document.getElementById("charName").innerHTML = "The Ghoul";
            document.getElementById("powerImg").src = "Powers/Powers/Icecream/iconPowers_AimKaguneLeap_K39.png";
            document.getElementById("powerName").innerHTML = "One-Eyed Terror";
            break;
        default:
            document.getElementById("charImg").src = "Portraits/StoreBackgrounds/RandomKiller Placeholder.png";
            document.getElementById("charName").innerHTML = "Any Killer (Defaulted)";
            document.getElementById("powerImg").src = "Powers/Powers/RandomKillerPowerPlaceholder.png";
            document.getElementById("powerName").innerHTML = "Selected Killer's Power (Defaulted)";
    }
}
//Perks
function fixedPerks(perk1,perk2,perk3,perk4){
    const perks = [perk1,perk2,perk3,perk4];
    for (let i = 0;i < 4;i++){
        switch(perks[i]){
        //Any Choice Perks Start 
            case "anyCho":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/RandomPerkKillerPlaceholder.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Any Choice";
                break;
        //No Choice Perks Start
            case "noCho":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/NoChoicePerkKillerPlaceholder.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "No Choice";
                break;
        //Universal Perks Start
            case "bitMur":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_BitterMurmur.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Bitter Murmur";
                break;
            case "dee":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Deerstalker.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Deerstalker";
                break;
            case "dist":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Distressing.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Distressing";
                break;
            case "hexNoOneEscDea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_NoOneEscapesDeath.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: No One Escapes Death";
                break;
            case "hexThrHun":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC3/iconPerks_ThrillOfTheHunt.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Thrill of the Hunt";
                break;
            case "ins":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Insidious.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Insidious";
                break;
            case "iroGra":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_IronGrasp.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Iron Grasp";
                break;
            case "scoHooMonShr":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_MonstrousShrine.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Scourge Hook: Monstrous Shrine";
                break;
            case "shaHop":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Meteor/iconPerks_BoonDestroyer.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Shattered Hope";
                break;
            case "sloBut":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_SloppyButcher.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Sloppy Butcher";
                break;
            case "spiFroSha":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_SpiesFromTheShadows.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Spies from the Shadows";
                break;
            case "unr":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Unrelenting.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Unrelenting";
                break;
            case "whi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Whispers.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Whispers";
                break;
    //Unique Killer Perks Start

        //Trapper Perks
            case "agi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Agitation.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Agitation";
                break;
            case "bruStr":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_BrutalStrength.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Brutal Strength";
                break;
            case "unnPre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_UnnervingPresence.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Unnerving Presence";
                break;
        //Wraith Perks
            case "blo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Bloodhound.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Bloodhound";
                break;
            case "pre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Predator.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Predator";
                break;
            case "sha":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Shadowborn.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Shadowborn";
                break;
        //Hillbilly Perks
            case "end":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Enduring.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Enduring";
                break;
            case "lig":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Lightborn.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Lightborn";
                break;
            case "tin":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Tinkerer.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Tinkerer";
                break;
        //Nurse Perks
            case "nurCal":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_ANursesCalling.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "A Nurse's Calling";
                break;
            case "str":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Stridor.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Stridor";
                break;
            case "tha":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/iconPerks_Thatanophobia.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Thanatophobia";
                break;
        //Shape Perks
            case "dyiLig":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC2/iconPerks_DyingLight.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dying Light";
                break;
            case "plaWitYouFoo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC2/iconPerks_PlayWithYourFood.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Play with Your Food";
                break;
            case "savBesLas":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC2/iconPerks_SaveTheBestForLast.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Save the Best for Last";
                break;
        //Hag Perks
            case "hexDevHop":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC3/iconPerks_DevourHope.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Devour Hope";
                break;
            case "hexRui":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC3/iconPerks_Ruin.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Ruin";
                break;
            case "hexThiSea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC3/iconPerks_TheThirdSeal.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: The Third Seal";
                break;
        //Doctor Perks
            case "monAbu":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC4/iconPerks_MonitorAndAbuse.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Monitor & Abuse";
                break;
            case "ove":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC4/iconPerks_GeneratorOvercharge.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Overcharge";
                break;
            case "ovePre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC4/iconPerks_OverwhelmingPresence.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Overwhelming Presence";
                break;
        //Huntress Perks
            case "beaPre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC5/iconPerks_BeastOfPrey.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Beast of Prey";
                break;
            case "hexHunLul":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC5/iconPerks_HuntressLullaby.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Huntress Lullaby";
                break;
            case "terImp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/DLC5/iconPerks_TerritorialImperative.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Territorial Imperative";
                break;
        //Cannibal Perks
            case "bbq":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Cannibal/iconPerks_BBQAndChili.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Barbecue & Chilli";
                break;
            case "fraDem":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Cannibal/iconPerks_FranklinsLoss.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Franklin's Demise";
                break;
            case "knoOut":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Cannibal/iconPerks_KnockOut.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Knock Out";
                break;
        //Nightmare Perks
            case "bloWar":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/England/iconPerks_BloodWarden.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Blood Warden";
                break;
            case "firUp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/England/iconPerks_FireUp.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Fire Up";
                break;
            case "remMe":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/England/iconPerks_RememberMe.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Remember Me";
                break;
        //Pig Perks
            case "makYouCho":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Finland/iconPerks_MakeYourChoice.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Make Your Choice";
                break;
            case "scoHooHanTri":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Finland/iconPerks_HangmansTrick.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Scourge Hook: Hangman's Trick";
                break;
            case "sur":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Finland/iconPerks_Surveillance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Surveillance";
                break;
        //Clown Perks
            case "bam":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Guam/iconPerks_Bamboozle.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Bamboozle";
                break;
            case "cou":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Guam/iconPerks_Coulrophobia.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Coulrophobia";
                break;
            case "popGoWea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Guam/iconPerks_PopGoesTheWeasel.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Pop Goes the Weasel";
                break;
        //Spirit Perks
            case "hexHauGro":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Haiti/iconPerks_HauntedGround.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Haunted Ground";
                break;
            case "ran":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Haiti/iconPerks_Hatred.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Rancor";
                break;
            case "spiFur":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Haiti/iconPerks_SpiritFury.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Spirit Fury";
                break;
        //Legion Perks
            case "dis":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kenya/iconPerks_Discordance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Discordance";
                break;
            case "iroMai":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kenya/iconPerks_IronMaiden.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Iron Maiden";
                break;
            case "madGri":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kenya/iconPerks_MadGrit.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Mad Grit";
                break;
        //Plague Perks
            case "corInt":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Mali/iconPerks_CorruptIntervention.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Corrupt Intervention";
                break;
            case "darDev":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Mali/iconPerks_DarkDevotion.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dark Devotion";
                break;
            case "infFri":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Mali/iconPerks_InfectiousFright.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Infectious Fright";
                break;
        //Ghostface Perks
            case "furCha":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Oman/iconPerks_FurtiveChase.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Furtive Chase";
                break;
            case "imAllEar":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Oman/iconPerks_ImAllEars.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "I'm All Ears";
                break;
            case "thrTre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Oman/iconPerks_ThrillingTremors.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Thrilling Tremors";
                break;
        //Demogorgon Perks
            case "cruLim":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_CruelConfinement.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Cruel Limits";
                break;
            case "min":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_MindBreaker.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Mindbreaker";
                break;
            case "surge":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Qatar/iconPerks_Surge.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Surge";
                break;
        //Oni Perks
            case "bloEch":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Sweden/iconPerks_BloodEcho.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Blood Echo";
                break;
            case "nem":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Sweden/iconPerks_Nemesis.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Nemesis";
                break;
            case "zanTac":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Sweden/iconPerks_ZanshinTactics.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Zanshin Tactics";
                break;
        //Deathslinger Perks
            case "deaManSwi":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ukraine/iconPerks_DeadManSwitch.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dead Man's Switch";
                break;
            case "gea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ukraine/iconPerks_GearHead.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Gearhead";
                break;
            case "hexRet":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ukraine/iconPerks_HexRetribution.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Retribution";
                break;
        //Executioner Perks
            case "dea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wales/iconPerks_Deathbound.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Deathbound";
                break;
            case "forPen":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wales/iconPerks_ForcedPenance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Forced Penance";
                break;
            case "traTor":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wales/iconPerks_TrailOfTorment.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Trail of Torment";
                break;
        //Blight Perks
            case "draGri":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yemen/iconPerks_DragonsGrip.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dragon's Grip";
                break;
            case "hexBloFav":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yemen/iconPerks_HexBloodFavor.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Blood Favour";
                break;
            case "hexUnd":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yemen/iconPerks_HexUndying.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Undying";
                break;
        //Twins Perks
            case "couDeGra":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Aurora/iconPerks_CoupDeGrace.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Coup de Grâce";
                break;
            case "hoa":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Aurora/iconPerks_Hoarder.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hoarder";
                break;
            case "opp":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Aurora/iconPerks_Oppression.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Oppression";
                break;
        //Trickster Perks
            case "hexCroCon":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Comet/iconPerks_HexCrowdControl.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Crowd Control";
                break;
            case "noWayOut":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Comet/iconPerks_NoWayOut.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "No Way Out";
                break;
            case "sta":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Comet/iconPerks_Starstruck.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Starstruck";
                break;
        //Nemesis Perks
            case "eru":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_Eruption.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Eruption";
                break;
            case "hys":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_Hysteria.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hysteria";
                break;
            case "letPur":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclipse/iconPerks_LethalPursuer.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Lethal Pursuer";
                break;
        //Cenobite Perks
            case "dead":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gemini/iconPerks_Deadlock.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Deadlock";
                break;
            case "hexPla":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gemini/iconPerks_HexPlaything.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Plaything";
                break;
            case "scoHooGifPai":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gemini/iconPerks_ScourgeHookGiftOfPain.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Scourge Hook: Gift of Pain";
                break;
        //Artist Perks
            case "griEmb":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ion/T_iconPerks_grimEmbrace.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Grim Embrace";
                break;
            case "hexPen":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ion/T_iconPerks_hexPentimento.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Pentimento";
                break;
            case "scoHooPaiRes":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Ion/T_iconPerks_painResonance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Scourge Hook: Pain Resonance";
                break;
        //Onryo Perks
            case "calBri":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kepler/iconPerks_CallOfBrine.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Call of Brine";
                break;
            case "merSto":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kepler/iconPerks_MercilessStorm.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Merciless Storm";
                break;
            case "scoHooFloRag":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Kepler/iconPerks_FloodOfRage.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Scourge Hook: Floods of Rage";
                break;
        //Dredge Perks
            case "darRev":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Meteor/iconPerks_DarknessRevelated.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Darkness Revealed";
                break;
            case "diss":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Meteor/iconPerks_Dissolution.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dissolution";
                break;
            case "sepTou":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Meteor/iconPerks_SepticTouch.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Septic Touch";
                break;
        //Mastermind Perks
            case "awaAwa":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_AwakenedAwarenesss.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Awakened Awareness";
                break;
            case "supAna":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_SuperiorAnatomy.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Superior Anatomy";
                break;
            case "ter":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Orion/iconPerks_Terminus.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Terminus";
                break;
        //Knight Perks
            case "hexFacDar":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Quantum/iconPerks_HexFaceTheDarkness.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Face the Darkness";
                break;
            case "hub":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Quantum/iconPerks_Hubris.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hubris";
                break;
            case "nowHid":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Quantum/iconPerks_NowhereToHide.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Nowhere to Hide";
                break;
        //Skull Merchant Perks
            case "gamAfo":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_GameAfoot.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Game Afoot";
                break;
            case "lev":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_Leverage.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Leverage";
                break;
            case "thw":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Saturn/iconPerks_Thwack.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "THWACK!";
                break;
        //Singularity Perks
            case "forHes":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Umbra/IconPerks_ForcedHesitation.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Forced Hesitation";
                break;
            case "genLim":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Umbra/IconPerks_GeneticLimits.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Genetic Limits";
                break;
            case "macLea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Umbra/IconPerks_SelfAware.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Machine Learning";
                break;
        //Xenomorph Perks
            case "aliIns":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wormhole/iconPerks_AlienInstinct.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Alien Instinct";
                break;
            case "rapBru":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wormhole/iconPerks_RapidBrutality.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Rapid Brutality";
                break;
            case "ultWea":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Wormhole/iconPerks_UltimateWeapon.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Ultimate Weapon";
                break;
        //Good Guy Perks
            case "batInc":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yerkes/iconPerks_batteriesIncluded.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Batteries Included";
                break;
            case "friEnd":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yerkes/iconPerks_friendsTillTheEnd.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Friends 'til the End";
                break;
            case "hexTwoCanPla":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Yerkes/iconPerks_twoCanPlay.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Two Can Play";
                break;
        //Unknown Perks
            case "unb":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Applepie/iconPerks_Unbound.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Unbound";
                break;
            case "und":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Applepie/iconPerks_Undone.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Undone";
                break;
            case "unf":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Applepie/iconPerks_Unforeseen.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Unforeseen";
                break;
        //Lich Perks
            case "darArr":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Churros/iconPerks_DarkArrogance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dark Arrogance";
                break;
            case "lanTou":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Churros/iconPerks_LanguidTouch.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Languid Touch";
                break;
            case "weaAtt":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Churros/iconPerks_WeaveAttunement.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Weave Attunement";
                break;
        //Dark Lord Perks
            case "dom":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclair/iconPerks_Dominance.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Dominance";
                break;
            case "hexWreFat":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclair/iconPerks_HexWretchedFate.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Wretched Fate";
                break;
            case "humGre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Eclair/iconPerks_HumanGreed.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Human Greed";
                break;
        //Houndmaster Perks
            case "allShaThu":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gelato/T_UI_iconPerks_AllShakingThunder.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "All-Shaking Thunder";
                break;
            case "noQua":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gelato/T_UI_iconPerks_NoQuarter.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "No Quarter";
                break;
            case "scoHooJagCom":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Gelato/T_UI_iconPerks_ScourgeHookJaggedCompass.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Scourge Hook: Jagged Compass";
                break;
        //Ghoul Perks
            case "hexNotButMis":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Icecream/T_UI_iconPerks_NothingButMisery.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Hex: Nothing but Misery";
                break;
            case "forEnt":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Icecream/T_UI_iconPerks_ForeverEntwined.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Forever Entwined";
                break;
            case "nonAreFre":
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/Icecream/T_UI_iconPerks_NoneAreFree.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "None Are Free";
                break;
    //End
            default: 
                document.getElementById("perk" + (i + 1) + "Img").src="Perks/Perks/NoChoicePerkKillerPlaceholder.png";
                document.getElementById("perk" + (i + 1)).innerHTML = "Error: Not Found!";
        }

    }
    
}
//Add-ons
function fixedAddon(addon1,addon2){
    const addons = [addon1,addon2];
    for (let i = 0; i < 2;i++){
        switch(addons[i]){
            //Any Choice Addons
            case "any": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/RandomKillerAddonPlaceholder.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Any Addon Choice";
                break;
            //No Choice Addons
            case "none": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/NoChoiceKillerAddonPlaceholder.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "No Addon Choice";
                break;
        //Killer Addons Start Here
        //Trapper Addons
            //Commons
            case "bearOil": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_bearOil.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bear Oil";
                break;
            case "makeWrap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_makeshiftWrap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Makeshift Wrap";
                break;
            case "padJaws": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_paddedJaws.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Padded Jaws";
                break;
            case "trapGloves": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_trapperGloves.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Trapper Gloves";
                break;
            //Uncommons
            case "fourSpringKit": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_coilsKit4.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "4-Coil Spring Kit";
                break;
            case "coffeeGrounds": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_coffeeGrinds.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Coffee Grounds";
                break;
            case "lenJaws": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_lengthenedJaws.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lengthened Jaws";
                break;
            case "serrJaws": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_serratedJaws.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Serrated Jaws";
                break;
            case "waxBrick": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_waxBrick.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wax Bricks";
                break;
            //Rares
            case "fastTools": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_fasteningTools.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fastening Tools";
                break;
            case "rustJaws": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_rustedJaws.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rusted Jaws";
                break;
            case "secCoil": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_secondaryCoil.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Secondary Coil";
                break;
            case "tarBottle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_tarBottle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tar Bottle";
                break;
            case "trapBag": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_trapperBag.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Trapper Bag";
                break;
            //Very Rares
            case "honStone": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_honingStone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Honing Stone";
                break;
            case "oilyCoil": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_oilyCoil.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Oily Coil";
                break;
            case "tensSpring": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_tensionSpring.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tension Spring";
                break;
            case "trapSack": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_trapperSack.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Trapper Sack";
                break;
            //Ultra Rares
            case "bloodCoil": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_bloodyCoil.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bloody Coil";
                break;
            case "iridStone": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_diamondStone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Stone";
                break;
        //Wraith Addons
            //Commons
            case "beastSoot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_sootTheBeast.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"The Beast" - Soot';
                break;
            case "ghostSoot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_sootTheGhost.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"The Ghost" - Soot';
                break;
            case "houndSoot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_sootTheHound.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"The Hound" - Soot';
                break;
            case "serpentSoot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_sootTheSerpent.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"The Serpent" - Soot';
                break;
            //Uncommons
            case "warMud": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_mudBaikraKaeug.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Blind Warrior" - Mud';
                break;
            case "blinkMud": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_mudBlink.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Blink" - Mud';
                break;
            case "swiftMud": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_mudSwiftHunt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Swift Hunt" - Mud';
                break;
            case "windstormMud": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_mudWindstorm.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Windstorm" - Mud';
                break;
            case "boneClapper": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_boneClapper.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bone Clapper";
                break;
            //Rares
            case "warWhite": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_whiteBlindWarrior.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Blind Warrior" - White';
                break;
            case "blinkWhite": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_whiteBlink.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Blink" - White';
                break;
            case "shadowWhite": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_whiteShadowDance.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Shadow Dance" - White';
                break;
            case "swiftWhite": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_whiteKuntinTakkho.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Swift Hunt" - White';
                break;
            case "windstormWhite": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_whiteWindstorm.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Windstorm" - White';
                break;
            //Very Rares
            case "allBlood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_bloodKraFabai.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"All Seeing" - Blood';
                break;
            case "shadowBlood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_bloodShadowDance.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Shadow Dance" - Blood';
                break;
            case "swiftBlood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_bloodSwiftHunt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Swift Hunt" - Blood';
                break;
            case "windstormBlood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_bloodWindstorm.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Windstorm" - Blood';
                break;
            //Ultra Rares
            case "allSpirit": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_spiritAllSeeing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"All Seeing" - Spirit';
                break;
            case "coxClapper": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_coxcombedClapper.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Coxcombed Clapper";
                break;
        //Hillbilly Addons
            //Commons
            case "counterweight": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_counterweight.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Counterweight";
                break;
            case "crackPrimeBulb": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_crackedPrimerBulb.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cracked Primer Bulb";
                break;
            case "discardAirFilter": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_discardedAirFilter.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Discarded Air Filter";
                break;
            case "steelBoots": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Xipre/iconAddon_steelToeBoots.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Steel Toe Boots";
                break;
            //Uncommons
            case "clogIntake": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_cloggedIntake.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Clogged Intake";
                break;
            case "greasedThrottle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_greasedThrottle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Greased Throttle";
                break;
            case "highSpeedScrew": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_highSpeedIdlerScrew.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "High-Speed Idler Screw";
                break;
            case "offMotorOil": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Xipre/iconAddon_offBrandMotorOil.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Off-Brand Motor Oil";
                break;
            case "thermalCasing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_thermalCasing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Thermal Casing";
                break;
            //Rares
            case "begrimeChains": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_chainsBloody.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Begrimed Chains";
                break;
            case "dadBoots": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Xipre/iconAddon_dadsBoots.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dad's Boots";
                break;
            case "lowKickChains": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Xipre/iconAddon_lowKickbackChains.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Low Kickback Chains";
                break;
            case "ragEngine": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_raggedEngine.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ragged Engine";
                break;
            case "thompsonMix": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_theThompsonsMix.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "The Thompson's Mix";
                break;
            //Very Rares
            case "apexMuffler": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Xipre/iconAddon_apexMuffler.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Apex Muffler";
                break;
            case "filthySlippers": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_filthySlippers.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Filthy Slippers";
                break;
            case "loproChains": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Xipre/iconAddon_lowProChains.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "LoPro Chains";
                break;
            case "spikedBoots": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_spikedBoots.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spiked Boots";
                break;
            //Ultra Rares
            case "iridEngrave": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Zodiac/iconAddon_iridescentEngravings.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Engravings";
                break;
            case "tunedCar": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Xipre/iconAddon_tunedCarburetor.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tuned Carburettor";
                break;
        //Nurse Addons
            //Commons
            case "metalSpoon": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_metalSpoon.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Metal Spoon";
                break;
            case "plaidFlannel": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_plaidFlannel.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Plaid Flannel";
                break;
            case "whiteComb": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_whiteNitComb.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "White Nit Comb";
                break;
            case "woodHorse": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_woodenHorse.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wooden Horse";
                break;
            //Uncommons
            case "badManKeepsake": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_badManKeepsake.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bad Man Keepsake";
                break;
            case "catBoyTreasure": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_catatonicTreasure.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Catatonic Boy's Treasure";
                break;
            case "darkCincture": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_darkCincture.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dark Cincture";
                break;
            case "dullBracelet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_dullBracelet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dull Bracelet";
                break;
            case "pocketWatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_pocketWatch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Pocket Watch";
                break;
            //Rares
            case "anxiousGasp": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_anxiousGasp.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Anxious Gasp";
                break;
            case "ataxRes": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_ataxicRespiration.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ataxic Respiration";
                break;
            case "fragWheeze": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_fragileWheeze.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fragile Wheeze";
                break;
            case "heavyPanting": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_heavyPanting.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Heavy Panting";
                break;
            case "spasBreath": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_spasmodicBreath.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spasmodic Breath";
                break;
            //Very Rares
            case "badManBreath": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_badMansLastBreath.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = `"Bad Man's" Last Breath`;
                break;
            case "campbellBreath": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_campbellsLastBreath.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Campbell's Last Breath";
                break;
            case "jennerBreath": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_jennersLastBreath.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jenner's Last Breath";
                break;
            case "kavBreath": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_kavanaghsLastBreath.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kavanagh's Last Breath";
                break;
            //Ultra Rares
            case "matchbox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_matchBox.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Matchbox";
                break;
            case "tornBookmark": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_tornBookmark.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Torn Bookmark";
                break;
        //Shape Addons
            //Commons
            case "blondHair": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_blondeHair.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blond Hair";
                break;
            case "bfMemo": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_boyfriendsMemo.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Boyfriend's Memo";
                break;
            case "memoFlower": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_memorialFlower.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Memorial Flower";
                break;
            case "tackyEar": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_tackyEarrings.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tacky Earrings";
                break;
            //Uncommons
            case "deadRabbit": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_deadRabbit.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dead Rabbit";
                break;
            case "glassFrag": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_glassFragment.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Glass Fragment";
                break;
            case "hairBrush": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_hairBrush.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hair Brush";
                break;
            case "jewellery": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_jewelry.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jewellery";
                break;
            case "reflectFrag": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_reflectiveFragment.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Reflective Fragment";
                break;
            //Rares
            case "hairBow": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_hairBow.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hair Bow";
                break;
            case "jMyersMemo": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_jMyersMemorial.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "J. Myers Memorial";
                break;
            case "jewelBox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_jewelryBox.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jewellery Box";
                break;
            case "judithJournal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_judithsJournal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Judith's Journal";
                break;
            case "mirrorShard": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_mirrorShard.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mirror Shard";
                break;
            //Very Rares
            case "lockHair": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_lockOfHair.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lock of Hair";
                break;
            case "scratchMirror": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_scratchedMirror.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Scratched Mirror";
                break;
            case "tombPiece": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_tombstonePiece.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tombstone Piece";
                break;
            case "vanityMirror": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_vanityMirror.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vanity Mirror";
                break;
            //Ultra Rares
            case "fragTuftHair": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_tuftOfHair.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fragrant Tuft of Hair";
                break;
            case "judithTomb": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC2/iconAddon_judithsTombstone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Judith's Tombstone";
                break;
        //Hag Addons
            //Commons
            case "bogWater": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_bogWater.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bog Water";
                break;
            case "deadFlyMud": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_deadFlyMud.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dead Fly Mud";
                break;
            case "powderEggshell": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_powderedEggshell.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Powdered Eggshell";
                break;
            case "ropeNecklet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_ropeNecklet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rope Necklet";
                break;
            //Uncommons
            case "bloodWater": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_bloodiedWater.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bloodied Water";
                break;
            case "cypressNecklet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_cypressNecklet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cypress Necklet";
                break;
            case "dragonflyWings": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_dragonflyWings.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dragonfly Wings";
                break;
            case "halfEggshell": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_halfEggshell.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Half Eggshell";
                break;
            case "pussyWillowCat": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_pussyWillowCatkins.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Pussy Willow Catkins";
                break;
            //Rares
            case "bloodiedMud": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_bloodiedMud.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bloodied Mud";
                break;
            case "crackTurtleEgg": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_crackedTurtleEgg.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cracked Turtle Egg";
                break;
            case "driedCicada": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_driedCicada.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dried Cicada";
                break;
            case "swampOrchidNecklet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_swampOrchidNecklet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Swamp Orchid Necklet";
                break;
            case "willowWreath": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_willowWreath.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Willow Wreath";
                break;
            //Very Rares
            case "disfigEar": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_disfiguredEar.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Disfigured Ear";
                break;
            case "grandmaHeart": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_granmasHeart.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Grandma's Heart";
                break;
            case "rustyShackles": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_rustyShackles.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rusty Shackles";
                break;
            case "scarHand": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_scarredHand.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Scarred Hand";
                break;
            //Ultra Rares
            case "mintRag": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_mintRag.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mint Rag";
                break;
            case "waterlogShoe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC3/iconAddon_waterloggedShoe.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Waterlogged Shoe";
                break;
        //Doctor Addons
            //Commons
            case "calmClass1": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_calmClassI.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Calm" - Class I';
                break;
            case "orderClass1": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_orderClassI.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Order" - Class I';
                break;
            case "mapleKnight": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_mapleKnight.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Maple Knight";
                break;
            case "mouldyElectrode": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_moldyElectrode.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mouldy Electrode";
                break;
            //Uncommons
            case "calmClass2": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_calmClassII.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Calm" - Class II';
                break;
            case "disClass2": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_diciplineClassII.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Discipline" - Class II';
                break;
            case "orderClass2": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_orderClassII.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Order" - Class II';
                break;
            case "resClass2": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_restraintClassII.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Restraint" - Class II';
                break;
            case "polishElectrode": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_polishedElectrode.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Polished Electrode";
                break;
            //Rares
            case "disClass3": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_diciplineClassIII.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Discipline" - Class III';
                break;
            case "resClass3": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_restraintClassIII.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Restraint" - Class III';
                break;
            case "highStimElectrode": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_highStimulusElectrode.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "High Stimulus Electrode";
                break;
            case "interviewTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_interviewTape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Interview Tape";
                break;
            case "scrapTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_scrappedTape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Scrapped Tape";
                break;
            //Very Rares
            case "calmCarter": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_calmCartersNotes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = `"Calm" - Carter's Notes`;
                break;
            case "disCarter": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_diciplineCartersNotes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = `"Discipline" - Carter's Notes`;
                break;
            case "orderCarter": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_orderCartersNotes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = `"Order" - Carter's Notes`;
                break;
            case "resCarter": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_restraintCartersNotes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = `"Restraint" - Carter's Notes`;
                break;
            //Ultra Rares
            case "iridKing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_iridescentKing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent King";
                break;
            case "iridQueen": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC4/iconAddon_iridescentQueen.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Queen";
                break;
        //Huntress Addons
            //Commons
            case "amanToxin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_amanitaToxin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Amanita Toxin";
                break;
            case "bandageHaft": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_bandagedHaft.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bandaged Haft";
                break;
            case "coarseStone": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_coarseStone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Coarse Stone";
                break;
            case "yellowedCloth": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_yellowedCloth.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Yellowed Cloth";
                break;
            //Uncommons
            case "leatherLoop": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_leatherLoop.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Leather Loop";
                break;
            case "mannaGrassBraid": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_mannaGrassBraid.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Manna Grass Braid";
                break;
            case "oakHaft": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_oakHaft.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Oak Haft";
                break;
            case "shinyPin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_shinyPin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Shiny Pin";
                break;
            case "weightedHead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_weightedHead.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Weighted Head";
                break;
            //Rares
            case "deerskinGloves": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_deerskinGloves.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Deerskin Gloves";
                break;
            case "flowerBabu": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_flowerBabushka.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Flower Babushka";
                break;
            case "roseRoot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_roseRoot.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rose Root";
                break;
            case "rustyHead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_rustyHead.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rusty Head";
                break;
            case "venomConcoct": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_venomousConcoction.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Venomous Concoction";
                break;
            //Very Rares
            case "begrimedHead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_begrimedHead.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Begrimed Head";
                break;
            case "glowingConcoct": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_glowingConcoction.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Glowing Concoction";
                break;
            case "infantryBelt": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_infantryBelt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Infantry Belt";
                break;
            case "woodFox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_woodenFox.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wooden Fox";
                break;
            //Ultra Rares
            case "iridHead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_iridescentHead.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Head";
                break;
            case "soldierPuttee": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/DLC5/iconAddon_soldiersPuttee.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Soldier's Puttee";
                break;
        //Cannibal Addons
            //Commons
            case "chainsawFile": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_chainsawFile.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Chainsaw File";
                break;
            case "sparkPlug": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_sparkPlug.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spark Plug";
                break;
            case "speedLimiter": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_speedLimiter.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Speed Limiter";
                break;
            case "vegeOil": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_vegetableOil.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vegetable Oil";
                break;
            //Uncommons
            case "chilli": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Cannibal/iconAddon_chili.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Chilli";
                break;
            case "homemadeMuffler": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_homemadeMuffler.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Homemade Muffler";
                break;
            case "knifeScratch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Cannibal/iconAddon_knifeScratches.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Knife Scratches";
                break;
            case "longGuideBar": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_longGuideBar.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Long Guide Bar";
                break;
            case "primerBulb": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_primerBulb.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Primer Bulb";
                break;
            //Rares
            case "begrimedChains": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_chainsBloody.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Begrimed Chains";
                break;
            case "grislyChains": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_chainsGrisly.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Grisly Chains";
                break;
            case "shopLube": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_shopLubricant.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Shop Lubricant";
                break;
            case "beastMarks": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Cannibal/iconAddon_theBeastsMark.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "The Beast's Marks";
                break;
            case "theGrease": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Cannibal/iconAddon_theGrease.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "The Grease";
                break;
            //Very Rares
            case "awardChilli": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Cannibal/iconAddon_awardwinningChili.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Award-winning Chilli";
                break;
            case "depthGaugeRake": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_depthGaugeRake.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Depth Gauge Rake";
                break;
            case "lightChassis": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_lightChassis.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Light Chassis";
                break;
            case "rustChains": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_chainsRusted.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rusted Chains";
                break;
            //Ultra Rares
            case "carTuneGuide": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/iconAddon_carburetorTuningGuide.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Carburettor Tuning Guide";
                break;
            case "iridFlesh": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Cannibal/iconAddon_iridescentFlesh.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Flesh";
                break;
        //Nightmare Addons
            //Commons
            case "gardenRake": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_gardenRake.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Garden Rake";
                break;
            case "kidDrawing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_kidsDrawing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kid's Drawing";
                break;
            case "sheepBlock": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_sheepBlock.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sheep Block";
                break;
            case "woolShirt": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_woolShirt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wool Shirt";
                break;
            //Uncommons
            case "catBlock": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_catBlock.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cat Block";
                break;
            case "greenDress": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_greenDress.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Green Dress";
                break;
            case "nancySketch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_nancysSketch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Nancy's Sketch";
                break;
            case "outdoorRope": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_outdoorRope.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Outdoor Rope";
                break;
            case "protoClaws": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_prototypeClaw.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Prototype Claws";
                break;
            //Rares
            case "blueDress": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_blueDress.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blue Dress";
                break;
            case "jumpRope": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_jumpRope.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jump Rope";
                break;
            case "nancyMasterpiece": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_nancysMasterpiece.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Nancy's Masterpiece";
                break;
            case "paintThinner": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_paintThinner.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Paint Thinner";
                break;
            case "unicornBlock": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_unicornBlock.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Unicorn Block";
                break;
            //Very Rares
            case "zBlock": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_zBlock.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Z" Block';
                break;
            case "classPhoto": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_classPhoto.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Class Photo";
                break;
            case "pillBottle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_pillBottle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Pill Bottle";
                break;
            case "swingChains": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_swingChains.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Swing Chains";
                break;
            //Ultra Rares
            case "blackBox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_blackBox.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Black Box";
                break;
            case "redPaintBrush": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/England/iconAddon_redPaintBrush.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Red Paint Brush";
                break;
        //Pig Addons
            //Commons
            case "combatStraps": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_combatStraps.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Combat Straps";
                break;
            case "interRazor": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_interlockingRazor.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Interlocking Razor";
                break;
            case "johnMedFile": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_johnsMedicalFile.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "John's Medical File";
                break;
            case "shatterSyringe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_shatteredSyringe.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Shattered Syringe";
                break;
            //Uncommons
            case "faceMask": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_faceMask.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Face Mask";
                break;
            case "lastWill": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_lastWill.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Last Will";
                break;
            case "razorWires": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_razerWire.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Razor Wires";
                break;
            case "utilBlades": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_utilityBlades.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Utility Blades";
                break;
            case "workshopGrease": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_workshopGrease.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Workshop Grease";
                break;
            //Rares
            case "bagGears": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_bagOfGears.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bag of Gears";
                break;
            case "jigsawAnnoPlan": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_jigsawsAnnotatedPlan.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jigsaw's Annotated Plan";
                break;
            case "rulesSet2": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_rulesSetN2.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rules Set No.2";
                break;
            case "rustyAttach": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_rustyAttachments.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rusty Attachments";
                break;
            case "slowReleaseTox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_slowReleaseToxin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Slow-Release Toxin";
                break;
            //Very Rares
            case "amandaSecret": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_amandasSecret.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Amanda's Secret";
                break;
            case "crateGears": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_crateOfGears.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Crate of Gears";
                break;
            case "jigsawSketch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_jigsawsSketch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jigsaw's Sketch";
                break;
            case "tamperTimer": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_tamperedTimer.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tampered Timer";
                break;
            //Ultra Rares
            case "amandaLetter": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_amandasLetter.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Amanda's Letter";
                break;
            case "videoTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Finland/iconAddon_videoTape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Video Tape";
                break;
        //Clown Addons
            //Commons
            case "fingerlessParadeGloves": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_fingerlessParadeGloves.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fingerless Parade Gloves";
                break;
            case "partyBottle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_partyBottle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Party Bottle";
                break;
            case "robinFeather": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_robinFeather.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Robin Feather";
                break;
            case "vhsPorn": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_vhsPorn.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "VHS Porn";
                break;
            //Uncommons
            case "keroseneCan": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_keroseneCan.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kerosene Can";
                break;
            case "solventJug": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_solventJug.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Solvent Jug";
                break;
            case "starlingFeather": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_starlingFeather.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Starling Feather";
                break;
            case "stickySodaBottle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_stickySodaBottle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sticky Soda Bottle";
                break;
            case "thickCorkStop": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_thickCorkStopper.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Thick Cork Stopper";
                break;
            //Rares
            case "botChloro": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_bottleOfChloroform.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bottle of Chloroform";
                break;
            case "flaskBleach": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_flaskOfBleach.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Flask of Bleach";
                break;
            case "smellyInnerSoles": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_smellyInnerSoles.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Smelly Inner Soles";
                break;
            case "spiritHartshorn": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_spiritOfHartshorn.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spirit of Hartshorn";
                break;
            case "sulphAcidVial": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_sulfuricAcidVial.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sulphuric Acid Vial";
                break;
            //Very Rares
            case "cheapGinBot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_cheapGinBottle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cheap Gin Bottle";
                break;
            case "cigarBox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_cigarBox.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cigar Box";
                break;
            case "ether15": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_ether15.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ether 15 Vol%";
                break;
            case "garishMakeupKit": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_garishMakeupKit.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Garish Make-Up Kit";
                break;
            //Ultra Rares
            case "redheadPinkFinger": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_redheadsPinkyFinger.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Redhead's Pinkie Finger";
                break;
            case "tattooMidFinger": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Guam/iconAddon_tattoosMiddleFinger.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tattoo's Middle Finger";
                break;
        //Spirit Addons
            //Commons
            case "giftBambooComb": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_giftedBambooComb.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Gifted Bamboo Comb";
                break;
            case "origamiCrane": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_origamiCrane.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Origami Crane";
                break;
            case "shiaAmulet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_ShiawaseAmulet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Shiawase Amulet";
                break;
            case "zori": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_zori.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Zōri";
                break;
            //Uncommons
            case "juniBonsai": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_juniperBonzai.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Juniper Bonsai";
                break;
            case "kaiunTali": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_kaiunTalisman.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kaiun Talisman";
                break;
            case "mudSportDayCap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_muddySportCap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Muddy Sports Day Cap";
                break;
            case "rinBrokeWatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_rinsBrokenWatch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rin's Broken Watch";
                break;
            case "whiteHairRib": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_whiteHairRibbon.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "White Hair Ribbon";
                break;
            //Rares
            case "katanaTsuba": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_katanaTsuba.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Katana Tsuba";
                break;
            case "motherGlasses": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Hubble/iconAddon_mothersGlasses.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mother's Glasses";
                break;
            case "rustyFlute": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_rustyFlute.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rusty Flute";
                break;
            case "senkoHanabi": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Hubble/iconAddon_senkoHanabi.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Senko Hanabi";
                break;
            case "uchiwa": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Hubble/iconAddon_uchiwa.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Uchiwa";
                break;
            //Very Rares
            case "driedCherBlos": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_driedCherryBlossom.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dried Cherry Blossom";
                break;
            case "furin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Hubble/iconAddon_furin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Furin";
                break;
            case "wakiSaya": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_wakizashiSaya.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wakizashi Saya";
                break;
            case "yakuAmu": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_yakuyokeAmulet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Yakuyoke Amulet";
                break;
            //Ultra Rares
            case "kintsugiTea": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Hubble/iconAddon_kintsugiTeacup.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kintsugi Teacup";
                break;
            case "motDauRing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Haiti/iconAddon_motherDaughterRing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mother-Daughter Ring";
                break;
        //Legion Addons
            //Commons
            case "friendshipBrace": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_friendshipBracelet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Friendship Bracelet";
                break;
            case "mischiefList": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_mischiefList.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mischief List";
                break;
            case "scratchRuler": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_scratchedRuler.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Scratched Ruler";
                break;
            case "smileFacePin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_smileyFaceButton.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Smiley Face Pin";
                break;
            //Uncommons
            case "defaceSmilePin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_defacedSmileyButton.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Defaced Smiley Pin";
                break;
            case "etchRuler": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_etchedRuler.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Etched Ruler";
                break;
            case "julieMixTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_juliesMixtape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Julie's Mix Tape";
                break;
            case "muralSketch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_muralSketch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mural Sketch";
                break;
            case "neverSleepPills": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_neverSleepPills.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Never-Sleep Pills";
                break;
            //Rares
            case "joeyMixTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_joeysMixtape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Joey's Mix Tape";
                break;
            case "stolenSketchBook": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_stolenSketchbook.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Stolen Sketch Book";
                break;
            case "stylishGlasses": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_nastyBlade.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Stylish Sunglasses";
                break;
            case "susieMixTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_suziesMixtape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Susie's Mix Tape";
                break;
            case "legionPin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_theLegionButton.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "The Legion Pin";
                break;
            //Very Rares
            case "bffs": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_coldDirt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "BFFs";
                break;
            case "filthBlade": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_filthyBlade.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Filthy Blade";
                break;
            case "frankMixTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_franksMixtape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Frank's Mix Tape";
                break;
            case "stabWoundStudy": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_stabWoundsStudy.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Stab Wounds Study";
                break;
            //Ultra Rares
            case "fumingMixTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_fumingMixtape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fuming Mix Tape";
                break;
            case "iridButton": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kenya/iconAddon_iridescentButton.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Button";
                break;
        //Plague Addons
            //Commons
            case "healingSalve": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_healingSalve.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Healing Salve";
                break;
            case "limestoneSeal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_limestoneSeal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Limestone Seal";
                break;
            case "oliIncense": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_olibanumIncense.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Olibanum Incense";
                break;
            case "prayTabFrag": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_prayerTabletFragment.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Prayer Tablet Fragment";
                break;
            //Uncommons
            case "blessApple": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_prayerApple.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blessed Apple";
                break;
            case "emeticPot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_emeticPotion.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Emetic Potion";
                break;
            case "haemSeal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_hematiteSeal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Haematite Seal";
                break;
            case "potentTinct": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_potentTincture.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Potent Tincture";
                break;
            case "prophyAmu": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_prophylacticAmulet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Prophylactic Amulet";
                break;
            //Rares
            case "ashApple": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_ashenApple.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ashen Apple";
                break;
            case "exorAmu": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_exorcismAmulet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Exorcism Amulet";
                break;
            case "incenseOint": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_incensedOintment.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Incensed Ointment";
                break;
            case "infectEme": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_infectedEmetic.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Infected Emetic";
                break;
            case "rubbingOil": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_rubbingOil.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rubbing Oil";
                break;
            //Very Rares
            case "devotAmu": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_devoteesAmulet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Devotee's Amulet";
                break;
            case "severToe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_severedToe.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Severed Toe";
                break;
            case "vileEme": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_vileEmetic.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vile Emetic";
                break;
            case "worshipTab": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_worshipTablet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Worship Tablet";
                break;
            //Ultra Rares
            case "blackIncense": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_blackIncense.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Black Incense";
                break;
            case "iridSeal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Mali/iconAddon_IridescentSeal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Seal";
                break;
        //Ghostface Addons
            //Commons
            case "philly": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_philly.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Philly"';
                break;
            case "cheapCologne": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_cheapCologne.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cheap Cologne";
                break;
            case "headlineCutouts": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_headlinesCutouts.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Headline Cut-Outs";
                break;
            case "walleyeMatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_walleyesMatchbook.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Walleye's Matchbook";
                break;
            //Uncommons
            case "cinchStraps": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_reusuableCinchStraps.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cinch Straps";
                break;
            case "markedMap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_markedMap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Marked Map";
                break;
            case "olsenAddressBook": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_olsensAddressBook.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Olsen's Address Book";
                break;
            case "olsenJournal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_olsensJournal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Olsen's Journal";
                break;
            case "teleLens": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_telephotoLens.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Telephoto Lens";
                break;
            //Rares
            case "chewedPen": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_chewedPen.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Chewed Pen";
                break;
            case "knifeBeltClip": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_knifeBeltClip.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Knife Belt Clip";
                break;
            case "lastingPerf": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_lastingPerfume.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lasting Perfume";
                break;
            case "leatherKnifeSheath": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_leatherKnifeSheath.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Leather Knife Sheath";
                break;
            case "olsenWallet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_olsensWallet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Olsen's Wallet";
                break;
            //Very Rares
            case "driverLicense": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_driversLicense.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Driver's License";
                break;
            case "droplegKnifeSheath": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_dropLegKnifeSheath.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Drop-Leg Knife Sheath";
                break;
            case "nightVisMono": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_nightvisionMoncular.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Night Vision Monocular";
                break;
            case "victDetailRout": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_victimsDetailedRoutine.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Victim's Detailed Routine";
                break;
            //Ultra Rares
            case "ghostfaceTape": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_caughtOnTape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = '"Ghost Face Caught on Tape"';
                break;
            case "outdoorSecCam": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Oman/iconAddon_outdoorSecurityCamera.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Outdoor Security Camera";
                break;
        //Demogorgon Addons
            //Commons
            case "blackHeart": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_blackHeart.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Black Heart";
                break;
            case "ratLiver": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_ratLiver.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rat Liver";
                break;
            case "ratTail": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_ratTail.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rat Tail";
                break;
            case "rotPumpkin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_rottenPumpkin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rotten Pumpkin";
                break;
            //Uncommons
            case "barbGlasses": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_barbsGlasses.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Barb's Glasses";
                break;
            case "mewGuts": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_mewsGuts.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mew's Guts";
                break;
            case "rotGreenTripe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_rottenGreenTripe.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rotten Green Tripe";
                break;
            case "stickLining": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_stickyLining.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sticky Lining";
                break;
            case "viscWebbing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_viscousWebbing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Viscous Webbing";
                break;
            //Rares
            case "brassCaseLight": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_brassCaseLighter.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Brass Case Lighter";
                break;
            case "deerLung": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_deerLung.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Deer Lung";
                break;
            case "elevenSoda": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_elevensSoda.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Eleven's Soda";
                break;
            case "thornyVines": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_thornyVines.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Thorny Vines";
                break;
            case "violetWaxcap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_violetWaxcap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Violet Waxcap";
                break;
            //Very Rares
            case "lifeguardWhis": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_lifeguardWhistle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lifeguard Whistle";
                break;
            case "unknownEgg": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_unknownEgg.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Unknown Egg";
                break;
            case "upDownResin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_upsidedownResin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Upside Down Resin";
                break;
            case "vermWebcap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_vermillionWebcap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vermilion Webcap";
                break;
            //Ultra Rares
            case "lepLichen": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_leproseLichen.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Leprose Lichen";
                break;
            case "redMoss": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Qatar/iconAddon_redMoss.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Red Moss";
                break;
        //Oni Addons
            //Commons
            case "blackenToenail": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_blackenedToenail.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blackened Toenail";
                break;
            case "crackSaka": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_crackedSakazuki.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cracked Sakazuki";
                break;
            case "paperLant": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_paperLantern.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Paper Lantern";
                break;
            case "rotRope": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_rottingRope.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rotting Rope";
                break;
            //Uncommons
            case "bloodSash": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_bloodySash.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bloody Sash";
                break;
            case "childWoodSword": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_childsWoodenSword.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Child's Wooden Sword";
                break;
            case "chipSaihai": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_chippedSaihai.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Chipped Saihai";
                break;
            case "inkLion": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_inkLion.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ink Lion";
                break;
            case "polishMae": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_polishedMaedate.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Polished Maedate";
                break;
            //Rares
            case "kanaiTali": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_kanaianzenTalisman.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kanai-Anzen";
                break;
            case "scalpTopknot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_scalpedTopknot.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Scalped Topknot";
                break;
            case "shatterWaki": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_shatteredWakizashi.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Shattered Wakizashi";
                break;
            case "woodOniMask": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_woodenOniMask.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wooden Oni Mask";
                break;
            case "yamaSashi": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_yamaokaSashimono.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Yamaoka Sashimono";
                break;
            //Very Rares
            case "akitoCrutch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_akitosCrutch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Akito's Crutch";
                break;
            case "lionFang": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_lionFang.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lion Fang";
                break;
            case "splintHull": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_splinteredHull.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Splintered Hull";
                break;
            case "tearTenu": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_tearSoakedTenugui.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tear-Soaked Tenugui";
                break;
            //Ultra Rares
            case "iridCrest": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_IridescentFamilyCrest.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Family Crest";
                break;
            case "renjiroBloodGlove": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Sweden/iconAddon_renirosBloodyGlove.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Renjro's Bloody Glove";
                break;
        //Deathslinger Addons
            //Commons
            case "modAmmoBelt": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_modifiedAmmoBelt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Modified Ammo Belt";
                break;
            case "rickChain": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_ricketyChain.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rickety Chain";
                break;
            case "snakeOil": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_snakeOil.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Snake Oil";
                break;
            case "spitPolishRag": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_spitPolishRag.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spit Polish Ring";
                break;
            //Uncommons
            case "chewTobacco": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_chewingTobacco.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Chewing Tobacco";
                break;
            case "jawSmash": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_jawSmasher.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jaw Smasher";
                break;
            case "marshalBadge": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_marshalsBadge.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Marshal's Badge";
                break;
            case "poisonOakLeaves": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_poisonOakLeaves.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Poison Oak Leaves";
                break;
            case "rustedSpike": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_rustedSpike.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rusted Spike";
                break;
            //Rares
            case "bayshoreGoldTooth": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_bayshoresGoldTooth.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bayshore's Gold Tooth";
                break;
            case "honeyLocustThorn": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_honeyLocustThorns.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Honey Locust Thorn";
                break;
            case "tinOilCan": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_tinOilCan.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tin Oil Can";
                break;
            case "wantedPost": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_wantedPoster.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wanted Poster";
                break;
            case "wardenKeys": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_wardensKeys.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Warden's Keys";
                break;
            //Very Rares
            case "barbedWire": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_barbedWire.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Barbed Wire";
                break;
            case "bayshoreCig": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_bayshoresCigar.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bayshore's Cigar";
                break;
            case "goldCreekWhis": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_clearCreekWhiskey.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Gold Creek Whiskey";
                break;
            case "prisonChain": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_prisonChain.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Prison Chain";
                break;
            //Ultra Rares
            case "hellshireIron": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_hellshireIron.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hellshire Iron";
                break;
            case "iridCoin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ukraine/iconAddon_iridescentCoin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Coin";
                break;
        //Executioner Addons
            //Commons
            case "blackStrap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_blackStrap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Black Strap";
                break;
            case "copperRing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_copperRing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Copper Ring";
                break;
            case "deadButterfly": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_deadButterfly.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dead Butterfly";
                break;
            case "leadRing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_leadRing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lead Ring";
                break;
            //Uncommons
            case "cinderMusicBox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_cinderellaMusicBox.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cinderella Music box";
                break;
            case "forgotVideo": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_forgottenVideoTape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Forgotten Videotape";
                break;
            case "leopardFabric": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_leopardPrintFabric.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Leopard-Print Fabric";
                break;
            case "spearhead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_spearhead.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spearhead";
                break;
            case "waxDoll": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_waxDoll.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wax Doll";
                break;
            //Rares
            case "burnManPaint": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_burningManPainting.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Burning Man Painting";
                break;
            case "mannequinFoot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_mannequinFoot.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mannequin Foot";
                break;
            case "mistDayRemainJudge": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_mistyDay.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Misty Day, Remains of Judgement";
                break;
            case "tabOppress": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_tabletOfTheOppressor.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tablet of the Oppressor";
                break;
            case "valSectPhoto": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_valtielSectPhotograph.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Valtiel Sect Photograph";
                break;
            //Very Rares
            case "crimCereBook": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_crimsonCeremonyBook.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Crimson Ceremony Book";
                break;
            case "lostMemoBook": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_lostMemoriesBook.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lost Memories Book";
                break;
            case "rustColorEgg": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_rustColoredEgg.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rust-Coloured Egg";
                break;
            case "scarletEgg": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_scarletEgg.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Scarlet Egg";
                break;
            //Ultra Rares
            case "iridSealMeta": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_iridescentSeal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Seal of Metatron";
                break;
            case "obsidGoblet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wales/iconAddon_obsidianGoblet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Obsidian Goblet";
                break;
        //Blight Addons
            //Commons
            case "chipMono": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_chippedMonocle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Chipped Monocle";
                break;
            case "comp7": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_compoundSeven.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Compound Seven";
                break;
            case "foxglove": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_foxglove.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Foxglove";
                break;
            case "placeboTab": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_placeboTablet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Placebo Tablet";
                break;
            //Uncommons
            case "blightRat": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_blightedRat.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blighted Rat";
                break;
            case "cankerThorn": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_cankerThorn.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Canker Thorn";
                break;
            case "plagBile": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_plagueBile.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Plague Bile";
                break;
            case "pustDust": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_pustulaDust.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Pustula Dust";
                break;
            case "shredNotes": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_shreddedNotes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Shredded Notes";
                break;
            //Rares
            case "adrenVial": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_adrenalineVial.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Adrenaline Vial";
                break;
            case "blightCrow": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_blightedCrow.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blighted Crow";
                break;
            case "comp21": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_compoundTwentyOne.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Compound Twenty-One";
                break;
            case "roseTonic": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_roseTonic.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rose Tonic";
                break;
            case "umbraSalt": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_umbraSalts.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Umbra Salts";
                break;
            //Very Rares
            case "alchemRing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_alchemistsRing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Alchemist's Ring";
                break;
            case "soulChem": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_soulChemical.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Soul Chemical";
                break;
            case "summonStone": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_summoningStone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Summoning Stone";
                break;
            case "vigoJourn": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_vigosJournal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vigo's Journal";
                break;
            //Ultra Rares
            case "comp33": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_compoundThirtyThree.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Compound Thirty-Three";
                break;
            case "iridBlightTag": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yemen/iconAddon_iridescentBlightTag.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Blight Tag";
                break;
        //Twins Addons
            //Commons
            case "catFig": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_catFigurine.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cat Figurine";
                break;
            case "sourMilk": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_souredMilk.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Soured Milk";
                break;
            case "tinyFingernail": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_tinyFingernail.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tiny Fingernail";
                break;
            case "toySword": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_toySword.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Toy Sword";
                break;
            //Uncommons
            case "babyTeeth": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_babyTeeth.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Baby Teeth";
                break;
            case "bloodBlackHood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_bloodiedBlackHood.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bloody Black Hood";
                break;
            case "catEye": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_catsEye.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cat's Eye";
                break;
            case "cereCandela": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_ceremonialCandelabrum.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ceremonial Candelabrum";
                break;
            case "madeleineGlove": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_madeleinesGlove.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Madeleine's Glove";
                break;
            //Rares
            case "madeleineScarf": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_madeleinesScarf.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Madeleine's Scarf";
                break;
            case "rustedNeedle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_rustedNeedle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rusted Needle";
                break;
            case "sewerSludge": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_sewerSludge.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sewer Sludge";
                break;
            case "staleBiscuit": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_staleBiscuit.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Stale Biscuit";
                break;
            case "weightRattle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_weightyRattle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Weighty Rattle";
                break;
            //Very Rares
            case "dropPerf": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_dropOfPerfume.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Drop of Perfume";
                break;
            case "forestStew": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_forestStew.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Forest Stew";
                break;
            case "spinTop": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_spinningTop.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spinning Top";
                break;
            case "victorSoldier": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_victorsSoldier.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Victor's Soldier";
                break;
            //Ultra Rares
            case "iridPendant": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_iridescentPendant.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Pendant";
                break;
            case "silencingCloth": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Aurora/iconAddon_silencingCloth.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Silencing Cloth";
                break;
        //Trickster Addons
            //Commons
            case "infernoWire": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_InfernoWires.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Inferno Wires";
                break;
            case "killPartChords": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_KillingPartChords.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Killing Part Chords";
                break;
            case "mementoBlades": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_MementoBlades.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Memento Blades";
                break;
            case "trickPouch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_TrickPouch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Trick Pouch";
                break;
            //Uncommons
            case "cageHeartShoe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_CagedHeartShoes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Caged Heart Shoes";
                break;
            case "jiwoonAuto": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_JiWoonsAutograph.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ji-Woon's Autograph";
                break;
            case "luckyBlade": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_LuckyBlade.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lucky Blade";
                break;
            case "onTargSing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_OnTargetSingle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "On Target Single";
                break;
            case "teqMoonrock": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_TequilaMoonrock.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tequila Moonrock";
                break;
            //Rares
            case "bloodBoa": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_BloodyBoa.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bloody Boa";
                break;
            case "fizzSoda": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_FizzSpinSoda.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fizz-Spin Soda";
                break;
            case "melodiMurder": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_YumisMurder.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Melodious Murder";
                break;
            case "ripperBrace": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_RipperBrace.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ripper Brace";
                break;
            case "waitYouWatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_WaitingForYouWatch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Waiting For You Watch";
                break;
            //Very Rares
            case "cutThruSing": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_CutThruUsingle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cut Thru U Single";
                break;
            case "diaCuff": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_DiamondCufflinks.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Diamond Cufflinks";
                break;
            case "edgeRevAlbum": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_EdgeOfRevivalAlbum.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Edge of Revival Album";
                break;
            case "trickBlade": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_TrickBlades.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Trick Blades";
                break;
            //Ultra Rares
            case "deathThroesComp": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_DeathThroesCompilation.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Death Throes Compilation";
                break;
            case "iridPhoto": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Comet/icons_Addon_IridescentPhotocard.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Photocard";
                break;
        //Nemesis Addons
            //Commons
            case "brianIntestine": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_briansIntestines.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Brian's Intestine";
                break;
            case "damageSyringe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_damagedSyringe.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Damaged Syringe";
                break;
            case "starsFieldComMan": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_starsFieldCombatManual.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "S.T.A.R.S. Field Combat Manual";
                break;
            case "visitWrist": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_visitorWristband.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Visitor Wristband";
                break;
            //Uncommons
            case "adminWrist": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_adminWristband.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Admin Wristband";
                break;
            case "adrenInject": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_adrenalineInjector.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Adrenaline Injector";
                break;
            case "marvBlood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_marvinsBlood.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Marvin's Blood";
                break;
            case "mikhailEye": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_mikhailsEye.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mikhail's Eye";
                break;
            case "zomHeart": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_zombieHeart.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Zombie Heart";
                break;
            //Rares
            case "lickTongue": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_lickerTongue.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Licker Tongue";
                break;
            case "plant43Vines": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_plant43Vines.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Plant 43 Vines";
                break;
            case "seroInject": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_serotoninInjector.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Serotonin Injector";
                break;
            case "tVirusSamp": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_TVirusSample.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "T-Virus Sample";
                break;
            case "tyrantGore": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_tyrantGore.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tyrant Gore";
                break;
            //Very Rares
            case "brokeRecCoin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_brokenRecoveryCoin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Broken Recovery Coin";
                break;
            case "depleteInkRib": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_depletedInkRibbon.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Depleted Ink Ribbon";
                break;
            case "jillSand": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_jillSandwich.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jill's Sandwich";
                break;
            case "neaPara": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_neaParasite.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ne-α Parasite";
                break;
            //Ultra Rares
            case "iridUmbBadge": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_iridescentUmbrellaBadge.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Umbrella Badge";
                break;
            case "shatterStarsBadge": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclipse/iconAddon_shatteredStarsBadge.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Shattered S.T.A.R.S. Badge";
                break;
        //Cenobite Addons
            //Commons
            case "bentNail": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_bentNail.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bent Nail";
                break;
            case "burnCandle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_burningCandle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Burning Candle";
                break;
            case "leatherStrip": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_leatherStrip.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Leather Strip";
                break;
            case "livelyCrickets": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_livelyCrickets.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lively Crickets";
                break;
            //Uncommons
            case "flickerTele": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_flickeringTelevision.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Flickering Television";
                break;
            case "liquiGore": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_liquifiedGore.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Liquified Gore";
                break;
            case "skewerRat": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_skeweredRat.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Skewered Rat";
                break;
            case "spoilMeal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_spoiledMeal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spoiled Meal";
                break;
            case "wrigMaggots": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_wrigglingMaggots.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wriggling Maggots";
                break;
            //Rares
            case "frankHeart": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_franksHeart.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Frank's Heart";
                break;
            case "larryBlood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_larrysBlood.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Larry's Blood";
                break;
            case "larryRemains": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_larrysRemains.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Larry's Remains";
                break;
            case "sliceFrank": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_sliceofFrank.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Slice of Frank";
                break;
            case "torturePillar": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_torturePillar.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Torture Pillar";
                break;
            //Very Rares
            case "chattererTooth": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_chatterersTooth.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Chatterer's Tooth";
                break;
            case "greasyBlackLens": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_greasyBlackLens.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Greasy Black Lens";
                break;
            case "impalingWire": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_impalingWire.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Impaling Wire";
                break;
            case "origPain": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_originalPain.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Original Pain";
                break;
            //Ultra Rares
            case "engineerFang": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_engineersFang.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Engineer's Fang";
                break;
            case "iridLamentConfig": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gemini/iconAddon_iridescentLamentConfiguration.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Lament Configuration";
                break;
        //Artist Addons
            //Commons
            case "chocloCorn": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_ChocloCorn.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Choclo Corn";
                break;
            case "oilPaints": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_OilPaints.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Oil Paints";
                break;
            case "thickTar": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_ThickTar.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Thick Tar";
                break;
            case "vibObit": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_VibrantObituary.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vibrant Obituary";
                break;
            //Uncommons
            case "autoDraw": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_AutomaticDrawing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Automatic Drawing";
                break;
            case "festerCarrion": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_FesteringCarrion.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Festering Carrion";
                break;
            case "stillLifeCrow": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_StillLifeCrow.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Still Life Crow";
                break;
            case "untitledAgony": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_UntitledAgony.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Untitled Agony";
                break;
            case "velvetFab": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_VelvetFabric.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Velvet Fabric";
                break;
            //Rares
            case "charcoalStick": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_CharcoalStick.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Charcoal Stick";
                break;
            case "darkInk": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_DarkestInk.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Darkest Ink";
                break;
            case "oGriefLover": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_OGriefOLover.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "O Grief, O Lover";
                break;
            case "silverBell": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_SilverBell.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Silver Bell";
                break;
            case "thornyNest": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_ThornyNest.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Thorny Nest";
                break;
            //Very Rares
            case "inkEgg": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_InkEgg.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ink Egg";
                break;
            case "matiasBabyShoes": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_JacobsBabyShoes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Matias' Baby Shoes";
                break;
            case "severHands": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_SeveredHands.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Severed Hands";
                break;
            case "severTongue": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_SeveredTongue.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Severed Tongue";
                break;
            //Ultra Rares
            case "gardenRot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_GardenofRot.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Garden of Rot";
                break;
            case "iridFeather": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Ion/iconAddon_IridescentFeather.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Feather";
                break;
        //Onryo Addons
            //Commons
            case "cabinSign": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_CabinSign.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cabin Sign";
                break;
            case "motherMirror": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_MothersMirror.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mother's Mirror";
                break;
            case "oldNews": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_OldNewspaper.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Old Newspaper";
                break;
            case "videoCopy": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_VhsCopy.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Videotape Copy";
                break;
            //Uncommons
            case "clumpHair": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_ClumpOfHair.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Clump of Hair";
                break;
            case "reikoWatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_ReikosWatch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Reiko's Watch";
                break;
            case "seaSoakCloth": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_SeaSoakedCloth.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sea-Soaked Cloth";
                break;
            case "wellStone": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_WellStone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Well Stone";
                break;
            case "yoichiFishNet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_YoichisFishingNet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Yoichi's Fishing Net";
                break;
            //Rares
            case "bloodFingernails": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_BloodyFingernail.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bloody Fingernails";
                break;
            case "motherComb": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_MothersComb.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mother's Comb";
                break;
            case "rickPinwheel": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_RicketyPinwheel.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rickety Pinwheel";
                break;
            case "ringDraw": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_RingDrawing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ring Drawing";
                break;
            case "wellWater": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_WellWater.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Well Water";
                break;
            //Very Rares
            case "distortPhoto": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_DisortedPhoto.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Distorted Photo";
                break;
            case "tapeEditDeck": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_TapeEditingDeck.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tape Editing Deck";
                break;
            case "telephone": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_Telephone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Telephone";
                break;
            case "vcr": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_VCR.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "VCR";
                break;
            //Ultra Rares
            case "iridVideo": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_IridescentVHStape.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Videotape";
                break;
            case "remoteControl": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Kepler/iconAddon_RemoteControl.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Remote Control";
                break;
        //Dredge Addons
            //Commons
            case "caffeineTab": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_CaffeineTablets.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Caffeine Tablets";
                break;
            case "followCowl": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_FollowersCowl.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Follower's Cowl";
                break;
            case "mortarPestle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_MortarAndPestle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mortar and Pestle";
                break;
            case "woodPlank": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_WoodenPlank.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Wooden Plank";
                break;
            //Uncommons
            case "airFreshener": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_AirFreshner.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Air Freshener";
                break;
            case "burntLetters": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_BurntLetters.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Burnt Letters";
                break;
            case "fallShingle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_FallenShingle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fallen Shingle";
                break;
            case "haddieCalendar": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_HaddiesCalendar.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Haddie's Calendar";
                break;
            case "malthinkSkull": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_MalthinkersSkull.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Malthinker's Skull";
                break;
            //Rares
            case "brokeDoll": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_BrokenDoll.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Broken Doll";
                break;
            case "destroyPillow": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_DestroyedPillow.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Destroyed Pillow";
                break;
            case "ottomaWriting": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_OttomarianWriting.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ottomarian Writing";
                break;
            case "warHelmet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_WarHelmet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "War Helmet";
                break;
            case "worryStone": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_WorryStones.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Worry Stone";
                break;
            //Very Rares
            case "boatKey": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_BoatKey.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Boat Key";
                break;
            case "fieldRecord": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_FieldRecorder.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Field Recorder";
                break;
            case "lavaMic": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_LavalierMicrophone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lavalier Microphone";
                break;
            case "tillBlade": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_TilingBlade.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tilling Blade";
                break;
            //Ultra Rares
            case "iridWoodPlank": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_IridescentWoodenPlank.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Wooden Plank";
                break;
            case "sacKnife": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Meteor/iconAddon_SacrificialKnife.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sacrificial Knife";
                break;
        //Mastermind Addons
            //Commons
            case "jewelBeetle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_jewelBeetle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jewel Beetle";
                break;
            case "rpdShoWalkie": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_RPDShoulderWalkie.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "R.P.D. Shoulder Walkie";
                break;
            case "unicornMedal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_unicornMedallion.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Unicorn Medallion";
                break;
            case "uroTendril": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_uroborosTendril.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Uroboros Tendril";
                break;
            //Uncommons
            case "bullhorn": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_bullhorn.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bullhorn";
                break;
            case "chaliceGold": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_goldChalice.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Chalice (Gold)";
                break;
            case "leatherGloves": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_leatherGloves.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Leather Gloves";
                break;
            case "lionMedal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_lionMedallion.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lion Medallion";
                break;
            case "looseCrank": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_looseCrank.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Loose Crank";
                break;
            //Rares
            case "eggGold": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_goldenEgg.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Egg (Gold)";
                break;
            case "maidenMedal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_maidenMedalliom.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Maiden Medallion";
                break;
            case "portSafe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_portableSafe.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Portable Safe";
                break;
            case "redHerb": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_redHerb.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Red Herb";
                break;
            case "videoConDev": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_videoConferenceDevice.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Video Conference Device";
                break;
            //Very Rares
            case "darkSunglasses": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_darkSunglasses.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dark Sunglasses";
                break;
            case "greenHerb": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_greenHerb.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Green Herb";
                break;
            case "heliStick": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_helicopterStick.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Helicopter Stick";
                break;
            case "uroVirus": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_lasPlagasVariant.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Uroboros Virus";
                break;
            //Ultra Rares
            case "iridUroVial": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_iridescentUroborosVial.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Uroboros Vial";
                break;
            case "labPhoto": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Orion/iconAddon_labPhoto.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lab Photo";
                break;
        //Knight Addons
            //Commons
            case "grittyLump": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_GrittyLump.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Gritty Lump";
                break;
            case "mapRealm": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_MapoftheRealms.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Map of the Realm";
                break;
            case "pillageMead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_PillagedMead.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Pillaged Mead";
                break;
            case "tatterTabard": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_TatteredTabard.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tattered Tabard";
                break;
            //Uncommons
            case "battleAxeHead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_BattleaxeHead.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Battle Axe Head";
                break;
            case "callArms": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_CallToArms.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Call to Arms";
                break;
            case "coldSteelMana": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_ColdSteelManacles.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cold Steel Manacles";
                break;
            case "driedHorsemeat": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_DriedHorsemeat.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dried Horsemeat";
                break;
            case "treatedBlade": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_TreatedBlade.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Treated Blade";
                break;
            //Rares
            case "brokeHilt": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_BrokenHilt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Broken Hilt";
                break;
            case "grimIronMask": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_GrimIronMask.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Grim Iron Mask";
                break;
            case "ironworkTongs": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_IronworkerTongs.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ironworker's Tongs";
                break;
            case "sharpMount": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Donut/iconAddon_SharpenedMount.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sharpened Mount";
                break;
            case "townWatchTorch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_TownWatctTorch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Town Watch's Torch";
                break;
            //Very Rares
            case "blacksmithHammer": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_BlacksmithHammer.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blacksmith's Hammer";
                break;
            case "flintSteel": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_FlintandSteel.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Flint and Steel";
                break;
            case "healingPoul": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_HealingPoultice.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Healing Poultice";
                break;
            case "jailerChime": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Donut/iconAddon_JailersChimes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jailer's Chimes";
                break;
            //Ultra Rares
            case "iridComBan": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_IridescentCompanyBanner.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Company Banner";
                break;
            case "knightCont": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Quantum/iconAddon_KnightContract.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Knight's Contract";
                break;
        //Skull Merchant Addons
            //Commons
            case "adiValIssue": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_AdiValente1.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Adi Valente Issue 1";
                break;
            case "highCurrUpgrade": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_HighCurrentUpgrade.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "High-Current Upgrade";
                break;
            case "highPowFlood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_HighPowerFloodlight.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "High-Power Floodlight";
                break;
            case "ultraSpeak": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_UltrasonicTrapSpeaker.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ultrasonic Speaker";
                break;
            //Uncommons
            case "adaptLight": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_AdaptiveLighting.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Adaptive Lighting";
                break;
            case "lowPowMode": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_LowPowerMode.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Low-Power Mode";
                break;
            case "shotgunSpeak": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_ShotgunSpeakers.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Shotgun Speakers";
                break;
            case "stereoRemMic": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_StereoRemoteMic.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Stereo Remote Mic";
                break;
            case "supercharge": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_Overcharge.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Supercharge";
                break;
            //Rares
            case "brownNoiseGen": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_BrownNoiseGenerator.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Brown Noise Generator";
                break;
            case "infraUpgrade": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_InfaredUpgrade.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Infrared Upgrade";
                break;
            case "looseScrew": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_LooseScrew.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Loose Screw";
                break;
            case "powderGlass": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_PowderedGlass.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Powdered Glass";
                break;
            case "vitTarProcess": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_VitalTargetingProcessor.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vital Targeting Processor";
                break;
            //Very Rares
            case "advMovePred": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_AdvancedMovementPrediction.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Advanced Movement Prediction";
                break;
            case "geographRead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_GeographicalReadout.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Geographical Readout";
                break;
            case "protoRotor": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_PrototypeRotor.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Prototype Rotor";
                break;
            case "randomStorbe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_RandomizedStrobes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Randomised Strobes";
                break;
            //Ultra Rares
            case "expireBatt": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_ExpiredBatteries.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Expired Batteries";
                break;
            case "iridUnpubManu": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Saturn/iconAddon_IridescentUnpublishedManuscript.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Unpublished Manuscript";
                break;
        //Singularity Addons
            //Commons
            case "brokeSecKey": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_brokenSecurityKey.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Broken Security Key";
                break;
            case "diagToolRepair": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_diagnosticToolRepair.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Diagnostic Tool (Repair)";
                break;
            case "heavyWater": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_heavyWater.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Heavy Water";
                break;
            case "nutSlurry": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_nutritionalSlurry.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Nutritional Slurry";
                break;
            //Uncommons
            case "androidArm": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_androidArm.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Android Arm";
                break;
            case "cremateRemain": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_crematedRemains.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cremated Remains";
                break;
            case "cryoGel": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_cryoGel.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cryo Gel";
                break;
            case "kidBallGlove": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_kidsBallGlove.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kid's Ball Glove";
                break;
            case "ultraSensor": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_ultrasonicSensor.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ultrasonic Sensor";
                break;
            //Rares
            case "holoGen": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_hologramGenerator.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hologram Generator";
                break;
            case "hyperSpray": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_hyperawarenessSpray.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hyperawareness Spray";
                break;
            case "liveWire": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_liveWires.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Live Wires";
                break;
            case "nanoGel": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_nanomachineGel.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Nanomachine Gel";
                break;
            case "spentOxyTank": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_spentOxygenTank.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spent Oxygen Tank";
                break;
            //Very Rares
            case "crewMani": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_crewManifest.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Crew Manifest";
                break;
            case "diagToolConstruct": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_diagnosticToolConstruction.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Diagnostic Tool (Construction)";
                break;
            case "foreignPlantFib": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_foreignPlantFibers.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Foreign Plant Fibres";
                break;
            case "somaFamPhoto": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_somaFamilyPhoto.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Soma Family Photo";
                break;
            //Ultra Rares
            case "deniRequisForm": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_deniedRequisitionForm.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Denied Requisition Form";
                break;
            case "iridCrystalShard": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Umbra/iconAddon_iridiscentCrystalShard.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Crystal Shard";
                break;
        //Xenomorph Addons
            //Commons
            case "cerealRation": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_CerealRations.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cereal Rations";
                break;
            case "drinkBird": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_drinkingBird.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Drinking Bird";
                break;
            case "ovomorph": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_ovomorph.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ovomorph";
                break;
            case "ripleyWatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_ripleysWatch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ripley's Watch";
                break;
            //Uncommons
            case "ashInnards": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_ashsInnards.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ash's Innards";
                break;
            case "brettCap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_brettsCap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Brett's Cap";
                break;
            case "crewHeadset": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_crewHeadset.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Crew Headset";
                break;
            case "lambertStarMap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_lambertsStarMap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lambert's Star Map";
                break;
            case "lightWand": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_lightWand.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Light Wand";
                break;
            //Rares
            case "emergHelmet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_emergencyHelmet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Emergency Helmet";
                break;
            case "kaneHelmet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_kanesHelmet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kane's Helmet";
                break;
            case "moultSkin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_moltedSkin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Moulted Skin";
                break;
            case "multiHatchet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_multipurposeHatchet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Multipurpose Hatchet";
                break;
            case "parkerHeadband": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_parkersHeadband.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Parker's Headband";
                break;
            //Very Rares
            case "catCarrier": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_catCarrier.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cat Carrier";
                break;
            case "harpoonGun": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_harpoonGun.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Harpoon Gun";
                break;
            case "selfDestBolt": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_selfDestructBolt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Self-Destruct Bolt";
                break;
            case "semiKeyBoard": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_semioticKeyboard.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Semiotic Keyboard";
                break;
            //Ultra Rares
            case "acidicBlood": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_acidicBlood.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Acidic Blood";
                break;
            case "improvCattleProd": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Wormhole/iconAddon_improvisedCattleProd.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Improvised Cattle Prod";
                break;
        //Good Guy Addons
            //Commons
            case "dollEyes": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_dollEyes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Doll Eyes";
                break;
            case "goodGuyBox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_goodGuyBox.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Good Guy Box";
                break;
            case "strobLight": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_strobingLight.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Strobing Light";
                break;
            case "tinyScalpel": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_tinyScalpel.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tiny Scalpel";
                break;
            //Uncommons
            case "autoScrewdriver": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_automaticScrewdriver.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Automatic Screwdriver";
                break;
            case "electricCarvKnife": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_electricCarvingKnife.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Electric Carving Knife";
                break;
            case "hairSprayCandle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_flamingHairSpray.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hair Spray & Candle";
                break;
            case "jumpRope": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_jumpRope.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Jump Rope";
                break;
            case "powerDrill": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_powerDrill.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Power Drill";
                break;
            //Rares
            case "portTv": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_portableTV.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Portable TV";
                break;
            case "ratPoison": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_ratPoison.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rat Poison";
                break;
            case "runningShoes": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_runningShoes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Running Shoes";
                break;
            case "silkPillow": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_silkPillow.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Silk Pillow";
                break;
            case "yardstick": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_yardstick.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Yardstick";
                break;
            //Very Rares
            case "mirrorShards": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_mirrorShards.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mirror Shards";
                break;
            case "pileNails": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_pileOfNails.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Pile of Nails";
                break;
            case "plasticBag": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_plasticBag.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Plastic Bag";
                break;
            case "straightRazor": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_straightRazor.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Straight Razor";
                break;
            //Ultra Rares
            case "hardHat": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_hardHat.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hard Hat";
                break;
            case "iridAmu": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Yerkes/iconAddon_iridescentAmulet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Amulet";
                break;
        //Unknown Addons
            //Commons
            case "blurryPhoto": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_blurryPhoto.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blurry Photo";
                break;
            case "punctEyeball": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_puncturedEyeball.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Punctured Eyeball";
                break;
            case "rabbitFoot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_rabbitsFoot.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rabbit's Foot";
                break;
            case "sketchAttempt": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_sketchAttempt.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sketch Attempt";
                break;
            //Uncommons
            case "devUndisOrigin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_deviceOfUndisclosedOrigin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Device of Undisclosed Origin";
                break;
            case "lastKnownRecord": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_lastKnownRecording.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Last Known Recording";
                break;
            case "noteTheories": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_notebookOfTheories.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Notebook of Theories";
                break;
            case "slashBackpack": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_slashedBackpack.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Slashed Backpack";
                break;
            case "victimMap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_victimsMap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Victim's Map";
                break;
            //Rares
            case "bMoviePoster": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_b-moviePoster.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "B-Movie Poster";
                break;
            case "footprintCast": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_footprintCast.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Footprint Cast";
                break;
            case "frontPageArticle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_frontPageArticle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Front-Page Article";
                break;
            case "hypnoWatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_hypnotistsWatch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hypnotist's Watch";
                break;
            case "vanishBox": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_vanishingBox.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vanishing Box";
                break;
            //Very Rares
            case "discardMilkCart": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_discardedMilkCarton.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Discarded Milk Carton";
                break;
            case "homemadeMask": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_homemadeMask.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Homemade Mask";
                break;
            case "obscureGameCart": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_obscureGameCartridge.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Obscure Game Cartridge";
                break;
            case "serumVial": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_serumVial.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Serum Vial";
                break;
            //Ultra Rares
            case "capDark": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_capturedByTheDark.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Captured by the Dark";
                break;
            case "iridOssRep": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Applepie/iconAddon_iridescentOSSReport.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent OSS Report";
                break;
        //Lich Addons
            //Commons
            case "crystalBall": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_CrystalBall.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Crystal Ball";
                break;
            case "ravenFeather": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_RavensFeather.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Raven's Feather";
                break;
            case "tatterHeadband": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_TatteredHeadband.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Tattered Headband";
                break;
            case "trickGlove": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_TrickstersGlove.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Trickster's Glove";
                break;
            //Uncommons
            case "glassEye": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_GlassEye.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Glass Eye";
                break;
            case "lantReveal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_LanternOfRevealing.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lantern of Revealing";
                break;
            case "potSpeed": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_PotionOfSpeed.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Potion of Speed";
                break;
            case "ringSpellStor": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_RingOfSpellStoring.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ring of Spell Storing";
                break;
            case "ringTelekin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_RingOfTelekinesis.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ring of Telekinesis";
                break;
            //Rares
            case "bootSpeed": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_BootsOfSpeed.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Boots of Speed";
                break;
            case "cloakElven": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_CloakOfElvenkind.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cloak of Elvenkind";
                break;
            case "ornateHorn": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_OrnateHorn.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ornate Horn";
                break;
            case "pearlPower": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_PearlOfPower.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Pearl of Power";
                break;
            case "staffWither": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_StaffOfWithering.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Staff of Withering";
                break;
            //Very Rares
            case "bagHold": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_BagOfHolding.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Bag of Holding";
                break;
            case "cloakInvis": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_CloakOfInvisibility.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cloak of Invisibility";
                break;
            case "dragonDagger": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_DragontoothDagger.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Dragontooth Dagger";
                break;
            case "robeEyes": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_RobeOfEyes.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Robe of Eyes";
                break;
            //Ultra Rares
            case "iridBookVileDark": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_IridescentBookOfVileDarkness.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Book of Vile Darkness";
                break;
            case "vorpalSword": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Churros/iconAddon_SwordOfKass.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Vorpal Sword";
                break;
        //Dark Lord Addons
            //Commons
            case "cerbTalon": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_CerberusTalon.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cerburus Talon";
                break;
            case "clockTowerGear": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_ClockTowerGear.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Clock Tower Gear";
                break;
            case "rubyCirclet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_RubyCirclet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ruby Circlet";
                break;
            case "travHat": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_TravelersHat.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Traveller's Hat";
                break;
            //Uncommons
            case "bloodFillGob": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_BloodFilledGoblet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blood-Filled Goblet";
                break;
            case "magicTicket": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_MagicalTicket.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Magical Ticket";
                break;
            case "moonstoneNeck": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_MoonstoneNecklace.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Moonstone Necklace";
                break;
            case "whiteWolfMedal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_WhiteWolfMedallion.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "White Wolf Medallion";
                break;
            case "wingedBoot": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_WingedBoots.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Winged Boots";
                break;
            //Rares
            case "forceEcho": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_ForceOfEcho.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Force of Echo";
                break;
            case "killDoll": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_KillerDoll.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Killer Doll";
                break;
            case "pocketWatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_PocketWatch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Pocket Watch";
                break;
            case "sunglasses": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_Sunglasses.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sunglasses";
                break;
            case "sylphFeather": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_SylphFeather.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sylph Feather";
                break;
            //Very Rares
            case "cubeZoe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_CubeOfZoe.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Cube of Zoe";
                break;
            case "lapisLazuli": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_LapisLazuli.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Lapis Lazuli";
                break;
            case "medusaHair": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_MedusasHair.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Medusa's Hair";
                break;
            case "wargFang": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_WargsFang.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Warg's Fang";
                break;
            //Ultra Rares
            case "alucardShield": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_AlucardsShield.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Alucard's Shield";
                break;
            case "iridRingVlad": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Eclair/iconAddon_IridescentRingOfVlad.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Ring of Vlad";
                break;
        //Houndmaster Addons
            //Commons
            case "creatureBone": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_CreaturesBone.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Creature's Bone";
                break;
            case "stickyPitch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_StickyPitch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Sticky Pitch";
                break;
            case "trainerBook": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_TrainersBook.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Trainer's Book";
                break;
            case "youngCoconut": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_YoungCoconut.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Young Coconut";
                break;
            //Uncommons
            case "barleyMeal": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_BarleyMeal.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Barley Meal";
                break;
            case "belayingPins": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_BelayingPins.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Belaying Pins";
                break;
            case "knottedRope": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_KnottedRope.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Knotted Rope";
                break;
            case "smokedSnapper": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_SmokedSnapper.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Smoked Snapper";
                break;
            case "spyglass": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_Spyglass.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spyglass";
                break;
            //Rares
            case "fattyMeat": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_FattyMeat.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fatty Meat";
                break;
            case "spikedCollar": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_SpikedCollar.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Spiked Collar";
                break;
            case "trainingBell": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_TrainingBell.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Training Bell";
                break;
            case "unfinishMap": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_UnfinishedMap.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Unfinished Map";
                break;
            case "waterskin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_Waterskin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Waterskin";
                break;
            //Very Rares
            case "gunpowderTin": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_GunpowderTin.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Gunpowder Tin";
                break;
            case "leatherHarness": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_LeatherHarness.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Leather Harness";
                break;
            case "marlinspike": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_Marlinspike.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Marlinspike";
                break;
            case "shipFigurehead": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_ShipFigurehead.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Ship Figurehead";
                break;
            //Ultra Rares
            case "iridWheelHandle": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_IridescentWheelHandle.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Wheel Handle";
                break;
            case "tornNovel": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Gelato/T_UI_iconAddon_TornNovel.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Torn Novel";
                break;
        //Ghoul Addons
            //Commons
            case "anteikuApron": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_AnteikuApron.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Anteiku Apron";
                break;
            case "freshCoffee": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_freshCoffee.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Fresh Coffee";
                break;
            case "kanekiWallet": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_KanekisWallet.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kaneki's Wallet";
                break;
            case "blackGoatEgg": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_TheBlackGoatsEgg.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "The Black Goat's Egg";
                break;
            //Uncommons
            case "bloodStainedHandkerchief": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_bloodStainedHandkerchief.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Blood-Stained Handkerchief";
                break;
            case "brokenChain": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_brokenChain.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Broken Chain";
                break;
            case "hideHeadphones": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_HidesHeadphones.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hide's Headphones";
                break;
            case "kanekiSatchel": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_satchel.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Kaneki's Satchel";
                break;
            case "taiyaki": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_taiyaki.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Taiyaki";
                break;
            //Rares
            case "amonNecktie": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_AmonsNecktie.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Amon's Necktie";
                break;
            case "aogiriTreeRobe": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_AogiriTreeRobe.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Aogiri Tree Robe";
                break;
            case "madoGlove": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_MadosGlove.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Mado's Glove";
                break;
            case "redSpiderLily": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_redSpiderLily.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Red Spider Lily";
                break;
            case "rizeGlasses": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_RizesGlasses.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Rize's Glasses";
                break;
            //Very Rares
            case "ccgIDCard": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_CCGIDCard.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "CCG ID Card";
                break;
            case "hinamiUmbrella": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_HinamisUmbrella.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Hinami's Umbrella";
                break;
            case "redHeadedCentipede": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_redHeadedCentipede.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Red-Headed Centipede";
                break;
            case "tortureApparatus": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_medicalApparatus.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Torture Apparatus";
                break;
            //Ultra Rares
            case "iridEyePatch": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_iridescentEyePatch.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Iridescent Eye Patch";
                break;
            case "yamoriMask": 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/Icecream/T_UI_iconAddon_YamorisMask.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Yamori's Mask";
                break;
            default: 
                document.getElementById("addonImg" + (i + 1)).src = "Add-Ons/ItemAddons/NoChoiceKillerAddonPlaceholder.png";
                document.getElementById("addonName" + (i + 1)).innerHTML = "Error: Not Found!";
        }
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
        case "hollowShell": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_hollowShell.png";
            document.getElementById("offeringName").innerHTML = "Hollow Shell";
            break;
        case "survPudding": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Anniversary/iconFavors_survivorPudding.png";
            document.getElementById("offeringName").innerHTML = "Survivor Pudding";
            break;
        case "bloPartStre": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Anniversary/iconFavors_bloodyPartyStreamers.png";
            document.getElementById("offeringName").innerHTML = "Bloody Party Streamers";
            break;
    //Brutality
        case "tanager": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_tanagerWreath.png";
            document.getElementById("offeringName").innerHTML = "Tanager Wreath";
            break;
        case "devTanager": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_devoutTanagerWreath.png";
            document.getElementById("offeringName").innerHTML = "Devout Tanager Wreath";
            break;
        case "ardTanager": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_ardentTanagerWreath.png";
            document.getElementById("offeringName").innerHTML = "Ardent Tanager Wreath";
            break;
    //Deviousness
        case "raven": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_ravenWreath.png";
            document.getElementById("offeringName").innerHTML = "Raven Wreath";
            break;
        case "devRaven": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_devoutRavenWreath.png";
            document.getElementById("offeringName").innerHTML = "Devout Raven Wreath";
            break;
        case "ardRaven": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_ardentRavenWreath.png";
            document.getElementById("offeringName").innerHTML = "Ardent Raven Wreath";
            break;
    //Hunter
        case "spotOwl": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_spottedOwlWreath.png";
            document.getElementById("offeringName").innerHTML = "Spotted Owl Wreath";
            break;
        case "devSpotOwl": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_devoutSpottedOwlWreath.png";
            document.getElementById("offeringName").innerHTML = "Devout Spotted Owl Wreath";
            break;
        case "ardSpotOwl": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_ardentSpottedOwlWreath.png";
            document.getElementById("offeringName").innerHTML = "Ardent Spotted Owl Wreath";
            break;
    //Sacrifice
        case "shrike": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_shrikeWreath.png";
            document.getElementById("offeringName").innerHTML = "Shrike Wreath";
            break;
        case "devShrike": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_devoutShrikeWreath.png";
            document.getElementById("offeringName").innerHTML = "Devout Shrike Wreath";
            break;
        case "ardShrike": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_ardentShrikeWreath.png";
            document.getElementById("offeringName").innerHTML = "Ardent Shrike Wreath";
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
        case "scratchCoin": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_scratchedCoin.png";
            document.getElementById("offeringName").innerHTML = "Scratched Coin";
            break;
        case "cutCoin": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_cutCoin.png";
            document.getElementById("offeringName").innerHTML = "Cut Coin";
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
        case "mouldyOak": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_moldyOak.png";
            document.getElementById("offeringName").innerHTML = "Mouldy Oak";
            break;
        case "rotOak": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_rottenOak.png";
            document.getElementById("offeringName").innerHTML = "Rotten Oak";
            break;
        case "putrOak": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_putridOak.png";
            document.getElementById("offeringName").innerHTML = "Putrid Oak";
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
//Secrets/Wards
    //Shroud of Separation
        case "sepShroud": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_shroudOfSeparation.png";
            document.getElementById("offeringName").innerHTML = "Shroud of Separation";
            break;
    //Mori
        case "ivoryMori": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_momentoMoriIvory.png";
            document.getElementById("offeringName").innerHTML = "Ivory Memento Mori";
            break;
        case "ebonyMori": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_momentoMoriEbony.png";
            document.getElementById("offeringName").innerHTML = "Ebony Memento Mori";
            break;
    //Wards
        case "sacWard": 
            document.getElementById("offeringImg").src = "Offerings/Favors/Yemen/iconFavors_wardSacrificial.png";
            document.getElementById("offeringName").innerHTML = "Sacrificial Ward";
            break;
        case "blackWard": 
            document.getElementById("offeringImg").src = "Offerings/Favors/iconFavors_wardBlack.png";
            document.getElementById("offeringName").innerHTML = "Black Ward";
            break;
        default:  
            document.getElementById("offeringImg").src = "Offerings/Favors/NoChoiceOfferingPlaceholder.png";
            document.getElementById("offeringName").innerHTML = "Error: No Offering Found!";
            
    }
}