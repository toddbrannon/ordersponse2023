var selectRep = document.getElementById("selectRep");
var optionsRep = ["Brandon", "George", "James", "Jim", "Michael", "Rich"];
for (var i = 0; i < optionsRep.length; i++) {
    var optRep = optionsRep[i];
    var el = document.createElement("option");
    el.textContent = optRep;
    el.value = optRep;
    selectRep.appendChild(el);
}


var selectPrin = document.getElementById("selectPrin");
var optionsPrin = ["Accu Grind ", "Advanced Systems ", "Amazon ", "Ametek ", "Bal Tec ", "Balax ", "Ball Corp", "Barcor", "BC Ames", "Birdsall ", "Brdsall ", "Bulbworks ", "Capvidia ", "Carbide ", "CDI ", "Comtorgage ", "CoorsTEk ", "David Ellis ", "Diastest ", "Diates ", "Diatest ", "Dorey ", "Dorsey ", "Dyer ", "Edmunds ", "EKM ", "Electromatic ", "Ever Sharp Tool ", "Fischer ", "Flexbar ", "Fotronics ", "Fowler ", "Fred Fowler ", "Gage ", "Gage Commission ", "Gage	 ", "Gage/COMM ", "Gager ", "Garber ", "Garber scale ", "Glastonbury ", "Global Thread ", "Greensalde ", "Greenslade ", "Heagon ", "Hexagon ", "Hymark ", "IBB	 ", "IE&E ", "Industrial Tool ", "Inspection ", "Interface ", "ITP Styli ", "J.D machine ", "JLW ", "Lab Testing ", "Lavezzi ", "Leitech ", "Mahr ", "Measure Tech ", "Mecmecin ", "Meyer ", "Micro Ridge ", "Micro Tech ", "Micro	 ", "Midwest Flex ", "Mitutoyo ", "MTG ", "MTI ", "MTI Vision ", "MTO ", "Mueller ", "Muller ", "New England Precision ", "Nidec ", "Oepration Tech ", "Omega ", "On-Site Calibration ", "Operation Tech ", "Peak ", "Phase II ", "PMC ", "Polygon ", "Polygon Solution ", "Precision Gage ", "Prolink ", "Q MARK ", "Q/C ", "QDC ", "Q-Mark ", "Queller ", "R&R Sales ", "Renishaw ", "RL Schmitt ", "Serv A Pure ", "Shimpo ", "SJ Metronics ", "Somma Tool ", "SPI ", "SPIRALOCK ", "Standridge ", "Starr	 ", "Starrett ", "Starrett Vision ", "Suburban Tool ", "Sun Tec ", "SWS ", "The Knotts Co ", "Thread Check ", "Tohnichi ", "Tool krib ", "Transducer ", "Tru Stone ", "United States Ball ", "Universal Gage ", "Universal punch ", "Vermont ", "Vision Engineering ", "Visin ", "Visional Tech ", "Visual ", "Visual Precision ", "Volume Graphics ", "Weigh Tronix ", "Western Gagre ", "Willrich ", "Yohanson "];
for (var j = 0; j < optionsPrin.length; j++) {
    var optPrin = optionsPrin[j];
    var elP = document.createElement("option");
    elP.textContent = optPrin;
    elP.value = optPrin;
    selectPrin.appendChild(elP);
}


var selectCust = document.getElementById("selectCust");
var optionsCust = ["Accu Grind ", "Advanced Systems ", "Amazon ", "Ametek ", "Bal Tec ", "Balax ", "Ball Corp", "Barcor", "BC Ames", "Birdsall ", "Brdsall ", "Bulbworks ", "Capvidia ", "Carbide ", "CDI ", "Comtorgage ", "CoorsTEk ", "David Ellis ", "Diastest ", "Diates ", "Diatest ", "Dorey ", "Dorsey ", "Dyer ", "Edmunds ", "EKM ", "Electromatic ", "Ever Sharp Tool ", "Fischer ", "Flexbar ", "Fotronics ", "Fowler ", "Fred Fowler ", "Gage ", "Gage Commission ", "Gage	 ", "Gage/COMM ", "Gager ", "Garber ", "Garber scale ", "Glastonbury ", "Global Thread ", "Greensalde ", "Greenslade ", "Heagon ", "Hexagon ", "Hymark ", "IBB	 ", "IE&E ", "Industrial Tool ", "Inspection ", "Interface ", "ITP Styli ", "J.D machine ", "JLW ", "Lab Testing ", "Lavezzi ", "Leitech ", "Mahr ", "Measure Tech ", "Mecmecin ", "Meyer ", "Micro Ridge ", "Micro Tech ", "Micro	 ", "Midwest Flex ", "Mitutoyo ", "MTG ", "MTI ", "MTI Vision ", "MTO ", "Mueller ", "Muller ", "New England Precision ", "Nidec ", "Oepration Tech ", "Omega ", "On-Site Calibration ", "Operation Tech ", "Peak ", "Phase II ", "PMC ", "Polygon ", "Polygon Solution ", "Precision Gage ", "Prolink ", "Q MARK ", "Q/C ", "QDC ", "Q-Mark ", "Queller ", "R&R Sales ", "Renishaw ", "RL Schmitt ", "Serv A Pure ", "Shimpo ", "SJ Metronics ", "Somma Tool ", "SPI ", "SPIRALOCK ", "Standridge ", "Starr	 ", "Starrett ", "Starrett Vision ", "Suburban Tool ", "Sun Tec ", "SWS ", "The Knotts Co ", "Thread Check ", "Tohnichi ", "Tool krib ", "Transducer ", "Tru Stone ", "United States Ball ", "Universal Gage ", "Universal punch ", "Vermont ", "Vision Engineering ", "Visin ", "Visional Tech ", "Visual ", "Visual Precision ", "Volume Graphics ", "Weigh Tronix ", "Western Gagre ", "Willrich ", "Yohanson "];
for (var j = 0; j < optionsCust.length; j++) {
    var optCust = optionsCust[j];
    var elC = document.createElement("option");
    elC.textContent = optCust;
    elC.value = optCust;
    selectCust.appendChild(elC);
}

var selectTerr = document.getElementById("selectTerr");
var optionsTerr = ["DE", "PA East", "HV", "LI/NYC", "MD", "NJ", "PA", "NJ South", "MD West"];
for (var j = 0; j < optionsTerr.length; j++) {
    var optTerr = optionsTerr[j];
    var elT = document.createElement("option");
    elT.textContent = optTerr;
    elT.value = optTerr;
    selectTerr.appendChild(elT);
}