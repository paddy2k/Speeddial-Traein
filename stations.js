opera.isReady(function(){
var stations = window["stations"] = {
  ARKLW: {
    en: "Arklow",
    ga: "An tInbhear Mór"
  },
  ATHRY: {
    en: "Athenry",
    ga: "Baile Átha an Rí"
  },
  ATLNE: {
    en: "Athlone",
    ga: "Baile Átha Luain"
  },
  ATHY: {
    en: "Athy",
    ga: "Baile Átha Í"
  },
  ATMON: {
    en: "Attymon",
    ga: "Ath Tiomáin"
  },
  BBRGN: {
    en: "Balbriggan",
    ga: "Baile Brigin"
  },
  BALNA: {
    en: "Ballina",
    ga: "Béal an Átha"
  },
  BSLOE: {
    en: "Ballinasloe",
    ga: "Béal Átha na Sluaighe"
  },
  BBRHY: {
    en: "Ballybrophy",
    ga: "Baile De Bróithe"
  },
  BCLAN: {
    en: "Ballycullane",
    ga: "Baile Uí Choileáin"
  },
  BYHNS: {
    en: "Ballyhaunis",
    ga: "Béal Átha hAmhnais"
  },
  BMOTE: {
    en: "Ballymote",
    ga: "Baile an Mhóta"
  },
  BTEER: {
    en: "Banteer",
    ga: "Bantír"
  },
  BHILL: {
    en: "Birdhill",
    ga: "Cnocán an Éin Fhinn"
  },
  BOYLE: {
    en: "Boyle",
    ga: "Mainistir na Búille"
  },
  BRAY: {
    en: "Bray",
    ga: "Bré"
  },
  BRGTN: {
    en: "Bridgetown",
    ga: "Baile an Droichid"
  },
  CAHIR: {
    en: "Cahir",
    ga: "An Chathair"
  },
  CPILE: {
    en: "Campile",
    ga: "Ceann Poill"
  },
  CRLOW: {
    en: "Carlow",
    ga: "Ceatharlach"
  },
  CKOSH: {
    en: "Carrick on Shannon",
    ga: "Cora Droma Rúisc"
  },
  CKOSR: {
    en: "Carrick on Suir",
    ga: "Carraig na Siúire"
  },
  CLBAR: {
    en: "Castlebar",
    ga: "Caisléan an Bharraigh"
  },
  CCONL: {
    en: "Castleconnell",
    ga: "Caisléan Uí Chonaill"
  },
  CSREA: {
    en: "Castlerea",
    ga: "An Caisleán Riabhach"
  },
  CVILL: {
    en: "Charleville",
    ga: "Ráth Luirc"
  },
  CLARA: {
    en: "Clara",
    ga: "Clóirtheach"
  },
  CLMRS: {
    en: "Claremorris",
    ga: "Clá Chlainne Mhuiris"
  },
  GRGRD: {
    en: "Clongriffin",
    ga: "Cluain Ghrífín"
  },
  CLMEL: {
    en: "Clonmel",
    ga: "Cluain Meala"
  },
  CJRDN: {
    en: "Cloughjordan",
    ga: "Cloch Shiurdáin"
  },
  COBH: {
    en: "Cobh",
    ga: "An Cobh"
  },
  COLNY: {
    en: "Collooney",
    ga: "Cúil Mhuine"
  },
  CORK: {
    en: "Cork",
    ga: "Corcaigh"
  },
  DGHDA: {
    en: "Drogheda",
    ga: "Droichead Átha"
  },
  DRMOD: {
    en: "Dromod",
    ga: "Dromad"
  },
  CNLLY: {
    en: "Connolly",
    ga: "Stáisiún Uí Chonghaile"
  },
  HSTON: {
    en: "Heuston",
    ga: "Stáisiún Heuston"
  },
  PERSE: {
    en: "Pearse",
    ga: "Stáisiún na bPiarsach"
  },
  DLERY: {
    en: "Dún Laoghaire",
    ga: "Dún Laoghaire"
  },
  DDALK: {
    en: "Dundalk",
    ga: "Dún Dealgan"
  },
  ENFLD: {
    en: "Enfield",
    ga: "An Bóthar Bui"
  },
  ENNIS: {
    en: "Ennis",
    ga: "Inis"
  },
  ECRTY: {
    en: "Enniscorthy",
    ga: "Inis Córthaidh"
  },
  FFORE: {
    en: "Farranfore",
    ga: "An Fearann Fuar"
  },
  FOTA: {
    en: "Fota",
    ga: "Fota"
  },
  FXFRD: {
    en: "Foxford",
    ga: "Béal Easa"
  },
  GALWY: {
    en: "Galway",
    ga: "Gaillimh"
  },
  GOREY: {
    en: "Gorey",
    ga: "Guaire"
  },
  GSTNS: {
    en: "Greystones",
    ga: "Na Clocha Liatha"
  },
  KDARE: {
    en: "Kildare",
    ga: "Cill Dara"
  },
  KKNNY: {
    en: "Kilkenny",
    ga: "Cill Chainnigh"
  },
  KLRNY: {
    en: "Killarney",
    ga: "Cill Airne"
  },
  LMRCK: {
    en: "Limerick",
    ga: "Luimnigh"
  },
  LMRKJ: {
    en: "Limerick Junction",
    ga: "Gabhal Luimnigh"
  },
  LFORD: {
    en: "Longford",
    ga: "An Longfort"
  },
  MLLOW: {
    en: "Mallow",
    ga: "Mala"
  },
  MHIDE: {
    en: "Malahide",
    ga: "Mullach Íde"
  },
  MNLAJ: {
    en: "Manulla Junction",
    ga: "Gabhal Maigh Nulla"
  },
  MYNTH: {
    en: "Maynooth",
    ga: "Maigh Nuad"
  },
  MLSRT: {
    en: "Millstreet",
    ga: "Sráid an Mhuilinn"
  },
  MSNEY: {
    en: "Mosney",
    ga: "Maigh Muin"
  },
  MSTRM: {
    en: "Mostrim",
    ga: "Meathas Troim"
  },
  MNEBG: {
    en: "Bagenalstown",
    ga: "Mhuine Bheag"
  },
  MLGAR: {
    en: "Mullingar",
    ga: "An Muileann gCearr"
  },
  NNAGH: {
    en: "Nenagh",
    ga: "An tAonach"
  },
  NBRGE: {
    en: "Newbridge",
    ga: "Droichead Nua"
  },
  PTRTN: {
    en: "Portarlington",
    ga: "Cuil an tSudaire"
  },
  PTLSE: {
    en: "Portlaoise",
    ga: "Port Laoise"
  },
  RDRUM: {
    en: "Rathdrum",
    ga: "Ráth Droma"
  },
  RMORE: {
    en: "Rathmore",
    ga: "An Ráth Mhór"
  },
  RSCMN: {
    en: "Roscommon",
    ga: "Ros Comáin"
  },
  RCREA: {
    en: "Roscrea",
    ga: "Ros Cré"
  },
  RLEPT: {
    en: "Rosslare Europort",
    ga: "Ros Láir Europort"
  },
  RLSTD: {
    en: "Rosslare Strand",
    ga: "Ros Láir an Trá"
  },
  SLIGO: {
    en: "Sligo",
    ga: "Sligeach"
  },
  TPMOR: {
    en: "Templemore",
    ga: "An Teampall Mór"
  },
  THTWN: {
    en: "Thomastown",
    ga: "Baile Mhic Andáin"
  },
  THRLS: {
    en: "Thurles",
    ga: "Durlas"
  },
  TIPRY: {
    en: "Tipperary",
    ga: "Tiobraid Arann"
  },
  TRLEE: {
    en: "Tralee",
    ga: "Trá Lí"
  },
  TMORE: {
    en: "Tullamore",
    ga: "Tulach Mhor"
  },
  WFORD: {
    en: "Waterford Plunkett",
    ga: "Port Láirge"
  },
  WBDGE: {
    en: "Wellingtonbridge",
    ga: "Droichead Eoin"
  },
  WPORT: {
    en: "Westport",
    ga: "Cathair na Mart"
  },
  WXFRD: {
    en: "Wexford",
    ga: "Loch Garman"
  },
  WLOW: {
    en: "Wicklow",
    ga: "Cill Mhantáin"
  },
  WLAWN: {
    en: "Woodlawn",
    ga: "Móta"
  },
  MDLTN: {
    en: "Midleton",
    ga: "Mainistir na Corann"
  },
  CGTWL: {
    en: "Carrigtwohill",
    ga: "Carraig Thuathail"
  },
  BBRDG: {
    en: "Broombridge",
    ga: "Droichead na Scuab"
  },
  BROCK: {
    en: "Blackrock",
    ga: "An Charraig Dubh"
  },
  GCDK: {
    en: "Grand Canal Dock",
    ga: "Duga na Canálach Móire"
  },
  BTSTN: {
    en: "Booterstown",
    ga: "Baile an Bhóthair"
  },
  BYSDE: {
    en: "Bayside",
    ga: "Cois Bá"
  },
  CGLOE: {
    en: "Carrigaloe",
    ga: "Carraig an Ló"
  },
  CHORC: {
    en: "Cherry Orchard and Park West",
    ga: "Gort na Silíní"
  },
  CLDKN: {
    en: "Clondalkin",
    ga: "Cluain Dolcáin"
  },
  CLSLA: {
    en: "Clonsilla",
    ga: "Cluain Saileach"
  },
  CMINE: {
    en: "Coolmine",
    ga: "Cúil Mhín"
  },
  CNOCK: {
    en: "Castleknock",
    ga: "Caisleán Cnucha"
  },
  CTARF: {
    en: "Clontarf Road",
    ga: "Bóthar Chluain Tarbh"
  },
  DBATE: {
    en: "Donabate",
    ga: "Domhnach Bat"
  },
  DCDRA: {
    en: "Drumcondra",
    ga: "Droim Conrach"
  },
  DLKEY: {
    en: "Dalkey",
    ga: "Deilginis"
  },
  ETOWN: {
    en: "Edgeworthstown",
    ga: "Meathas Troim"
  },
  GHANE: {
    en: "Glounthaune",
    ga: "An Gleanntán"
  },
  GLGRY: {
    en: "Glenageary",
    ga: "Gleann na Caorach"
  },
  HOWTH: {
    en: "Howth",
    ga: "Binn Éadair"
  },
  HTOWN: {
    en: "Harmonstown",
    ga: "Baile Hearman"
  },
  HWTHJ: {
    en: "Howth Junction",
    ga: "Gabhal Bhinn Éadair"
  },
  HZLCH: {
    en: "Hazelhatch",
    ga: "Collchoill - Cill Droichid"
  },
  KBRCK: {
    en: "Kilbarrack",
    ga: "Cill Bharrog"
  },
  KCOCK: {
    en: "Kilcock",
    ga: "Cill Choca"
  },
  KCOOL: {
    en: "Kilcoole",
    ga: "Cill Chomhghaill"
  },
  KILNY: {
    en: "Killiney",
    ga: "Cill Iníon Léinin"
  },
  KLSTR: {
    en: "Killester",
    ga: "Cill Easra"
  },
  LDWNE: {
    en: "Lansdowne Road",
    ga: "Bóthar Lansdún"
  },
  LSLND: {
    en: "Littleisland",
    ga: "An tOileán Beag"
  },
  LTOWN: {
    en: "Laytown",
    ga: "An Inse"
  },
  LURGN: {
    en: "Lurgan",
    ga: "An Lorgain"
  },
  LXCON: {
    en: "Leixlip Confey",
    ga: "Léim an Bhradáin - Confaí"
  },
  LXLSA: {
    en: "Leixlip Louisa Bridge",
    ga: "Léim an Bhradáin"
  },
  PMNCK: {
    en: "Portmarnock",
    ga: "Port Mearnóg"
  },
  RAHNY: {
    en: "Raheny",
    ga: "Ráth Eanaigh"
  },
  RBROK: {
    en: "Rushbrooke",
    ga: "Rushbrooke"
  },
  RLUSK: {
    en: "Rush and Lusk",
    ga: "An Ros agus Lusca"
  },
  SALNS: {
    en: "Sallins",
    ga: "Na Solláin"
  },
  SCOVE: {
    en: "Sandycove",
    ga: "Cuas an Ghainimh"
  },
  SEAPT: {
    en: "Seapoint",
    ga: "Rinn na Mara"
  },
  SHILL: {
    en: "Salthill",
    ga: "Cnoc an Salainn"
  },
  SIDNY: {
    en: "Sydney Parade",
    ga: "Paráid Sydney"
  },
  SKILL: {
    en: "Shankill",
    ga: "Seanchill"
  },
  SKRES: {
    en: "Skerries",
    ga: "Na Sceirí"
  },
  SMONT: {
    en: "Sandymount",
    ga: "Dhumhach Thra"
  },
  SUTTN: {
    en: "Sutton",
    ga: "Cill Fhionntain"
  },
  TARA: {
    en: "Tara Street",
    ga: "Sráid na Teamhrach, Baile Átha Cliath"
  },
  GSTON: {
    en: "Gormanston",
    ga: "Baile Mhic Gormáin"
  },
  ASHTN: {
    en: "Ashtown",
    ga: "Baile an Ásaigh"
  },
  MONVN: {
    en: "Monasterevin",
    ga: "Mainistir Eimhin"
  },
  LBURN: {
    en: "Lisburn",
    ga: "Lios na gCearrbhach"
  },
  NEWRY: {
    en: "Newry",
    ga: "An tIúr"
  },
  PDOWN: {
    en: "Portadown",
    ga: "Port an Dúnáin"
  },
  BFSTC: {
    en: "Belfast Central",
    ga: "Béal Feirste Larnach"
  },
  DCKLS: {
    en: "Docklands",
    ga: "Ceantar Dugaí"
  },
  PHNPK: {
    en: "Phoenix Park",
    ga: "Páirc an Fhionn-Uisce"
  },
  ADMTN: {
    en: "Adamstown",
    ga: "Baile Adaim"
  },
  GORT: {
    en: "Gort",
    ga: "Gort"
  },
  SXMBR: {
    en: "Sixmilebridge",
    ga: "Droichead Abhann Uí gCearnaigh"
  },
  ARHAN: {
    en: "Ardrahan",
    ga: "Ard Raithin"
  },
  CRGHW: {
    en: "Craughwell",
    ga: "Creachmhaoil"
  },
  DBYNE: {
    en: "Dunboyne",
    ga: "Dún Búinne"
  },
  HAFLD: {
    en: "Hansfield",
    ga: "Páirc Hans"
  },
  M3WAY: {
    en: "M3 Parkway",
    ga: "Ollpháirc M3"
  }
};
});
