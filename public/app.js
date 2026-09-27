
const elements = [
["H","Hydrogen",1,"s","nonmetal",1.008],["He","Helium",2,"s","noble",4.003],
["Li","Lithium",3,"s","metal",6.94],["Be","Beryllium",4,"s","metal",9.012],
["B","Boron",5,"p","metalloid",10.81],["C","Carbon",6,"p","nonmetal",12.011],
["N","Nitrogen",7,"p","nonmetal",14.007],["O","Oxygen",8,"p","nonmetal",15.999],
["F","Fluorine",9,"p","nonmetal",18.998],["Ne","Neon",10,"p","noble",20.180],
["Na","Sodium",11,"s","metal",22.990],["Mg","Magnesium",12,"s","metal",24.305],
["Al","Aluminium",13,"p","metal",26.982],["Si","Silicon",14,"p","metalloid",28.085],
["P","Phosphorus",15,"p","nonmetal",30.974],["S","Sulfur",16,"p","nonmetal",32.06],
["Cl","Chlorine",17,"p","nonmetal",35.45],["Ar","Argon",18,"p","noble",39.948],
["K","Potassium",19,"s","metal",39.098],["Ca","Calcium",20,"s","metal",40.078],
["Sc","Scandium",21,"d","metal",44.956],["Ti","Titanium",22,"d","metal",47.867],
["V","Vanadium",23,"d","metal",50.942],["Cr","Chromium",24,"d","metal",51.996],
["Mn","Manganese",25,"d","metal",54.938],["Fe","Iron",26,"d","metal",55.845],
["Co","Cobalt",27,"d","metal",58.933],["Ni","Nickel",28,"d","metal",58.693],
["Cu","Copper",29,"d","metal",63.546],["Zn","Zinc",30,"d","metal",65.38],
["Ga","Gallium",31,"p","metal",69.723],["Ge","Germanium",32,"p","metalloid",72.630],
["As","Arsenic",33,"p","metalloid",74.922],["Se","Selenium",34,"p","nonmetal",78.971],
["Br","Bromine",35,"p","nonmetal",79.904],["Kr","Krypton",36,"p","noble",83.798],
["Rb","Rubidium",37,"s","metal",85.468],["Sr","Strontium",38,"s","metal",87.62],
["Y","Yttrium",39,"d","metal",88.906],["Zr","Zirconium",40,"d","metal",91.224],
["Nb","Niobium",41,"d","metal",92.906],["Mo","Molybdenum",42,"d","metal",95.95],
["Tc","Technetium",43,"d","metal",98],["Ru","Ruthenium",44,"d","metal",101.07],
["Rh","Rhodium",45,"d","metal",102.906],["Pd","Palladium",46,"d","metal",106.42],
["Ag","Silver",47,"d","metal",107.868],["Cd","Cadmium",48,"d","metal",112.414],
["In","Indium",49,"p","metal",114.818],["Sn","Tin",50,"p","metal",118.710],
["Sb","Antimony",51,"p","metalloid",121.760],["Te","Tellurium",52,"p","metalloid",127.60],
["I","Iodine",53,"p","nonmetal",126.904],["Xe","Xenon",54,"p","noble",131.293],
["Cs","Caesium",55,"s","metal",132.905],["Ba","Barium",56,"s","metal",137.327],
["La","Lanthanum",57,"f","metal",138.905],["Ce","Cerium",58,"f","metal",140.116],
["Pr","Praseodymium",59,"f","metal",140.908],["Nd","Neodymium",60,"f","metal",144.242],
["Pm","Promethium",61,"f","metal",145],["Sm","Samarium",62,"f","metal",150.36],
["Eu","Europium",63,"f","metal",151.964],["Gd","Gadolinium",64,"f","metal",157.25],
["Tb","Terbium",65,"f","metal",158.925],["Dy","Dysprosium",66,"f","metal",162.500],
["Ho","Holmium",67,"f","metal",164.930],["Er","Erbium",68,"f","metal",167.259],
["Tm","Thulium",69,"f","metal",168.934],["Yb","Ytterbium",70,"f","metal",173.045],
["Lu","Lutetium",71,"f","metal",174.967],["Hf","Hafnium",72,"d","metal",178.49],
["Ta","Tantalum",73,"d","metal",180.948],["W","Tungsten",74,"d","metal",183.84],
["Re","Rhenium",75,"d","metal",186.207],["Os","Osmium",76,"d","metal",190.23],
["Ir","Iridium",77,"d","metal",192.217],["Pt","Platinum",78,"d","metal",195.084],
["Au","Gold",79,"d","metal",196.967],["Hg","Mercury",80,"d","metal",200.592],
["Tl","Thallium",81,"p","metal",204.38],["Pb","Lead",82,"p","metal",207.2],
["Bi","Bismuth",83,"p","metal",208.980],["Po","Polonium",84,"p","metal",209],
["At","Astatine",85,"p","metalloid",210],["Rn","Radon",86,"p","noble",222],
["Fr","Francium",87,"s","metal",223],["Ra","Radium",88,"s","metal",226],
["Ac","Actinium",89,"f","metal",227],["Th","Thorium",90,"f","metal",232.038],
["Pa","Protactinium",91,"f","metal",231.036],["U","Uranium",92,"f","metal",238.029],
["Np","Neptunium",93,"f","metal",237],["Pu","Plutonium",94,"f","metal",244],
["Am","Americium",95,"f","metal",243],["Cm","Curium",96,"f","metal",247],
["Bk","Berkelium",97,"f","metal",247],["Cf","Californium",98,"f","metal",251],
["Es","Einsteinium",99,"f","metal",252],["Fm","Fermium",100,"f","metal",257],
["Md","Mendelevium",101,"f","metal",258],["No","Nobelium",102,"f","metal",259],
["Lr","Lawrencium",103,"f","metal",266],["Rf","Rutherfordium",104,"d","metal",267],
["Db","Dubnium",105,"d","metal",268],["Sg","Seaborgium",106,"d","metal",269],
["Bh","Bohrium",107,"d","metal",270],["Hs","Hassium",108,"d","metal",277],
["Mt","Meitnerium",109,"d","metal",278],["Ds","Darmstadtium",110,"d","metal",281],
["Rg","Roentgenium",111,"d","metal",282],["Cn","Copernicium",112,"d","metal",285],
["Nh","Nihonium",113,"p","metal",286],["Fl","Flerovium",114,"p","metal",289],
["Mc","Moscovium",115,"p","metal",290],["Lv","Livermorium",116,"p","metal",293],
["Ts","Tennessine",117,"p","nonmetal",294],["Og","Oganesson",118,"p","noble",294]
].map(x=>({symbol:x[0],name:x[1],z:x[2],block:x[3],type:x[4],mass:x[5]}));

const special = {
H:{state:"Gas",mp:"−259.2 °C",bp:"−252.9 °C",ox:"+1, −1",crystal:"Molecular H₂",compounds:"H₂O, HCl, NH₃, hydrocarbons",occ:"Water, hydrocarbons, natural gas and the universe",uses:"Fuel-cell research, ammonia synthesis, hydrogenation",fact:"The lightest element."},
He:{state:"Gas",mp:"−272.2 °C",bp:"−268.9 °C",ox:"0",crystal:"Atomic solid",compounds:"No common stable compounds",occ:"Natural gas reservoirs and the universe",uses:"Cryogenics, leak detection, inert atmospheres",fact:"It has the lowest boiling point of all elements."},
B:{state:"Solid",mp:"2076 °C",bp:"3927 °C",ox:"+3",crystal:"Rhombohedral / covalent network forms",compounds:"B₂O₃, H₃BO₃, borates, boron carbide",occ:"Borate minerals",uses:"Borosilicate glass, neutron absorbers, advanced materials",fact:"Boron forms exceptionally hard compounds."},
C:{state:"Solid",mp:"~3550 °C (subl.)",bp:"~4027 °C (subl.)",ox:"−4, +2, +4",crystal:"Diamond, graphite and other allotropes",compounds:"CO, CO₂, CH₄, carbonates, carbides",occ:"Carbonates, CO₂, fossil carbon and living systems",uses:"Steel, electrodes, carbon fibres, diamond tools",fact:"Diamond and graphite are both carbon but have radically different properties."},
N:{state:"Gas",mp:"−210.0 °C",bp:"−195.8 °C",ox:"−3 to +5",crystal:"Molecular N₂",compounds:"NH₃, HNO₃, nitrates, nitrites",occ:"Atmosphere, nitrates and biological compounds",uses:"Fertilizers, ammonia manufacture, inert atmospheres",fact:"About 78% of dry Earth's atmosphere is nitrogen."},
O:{state:"Gas",mp:"−218.8 °C",bp:"−183.0 °C",ox:"−2, −1",crystal:"Molecular O₂",compounds:"H₂O, CO₂, oxides, peroxides",occ:"Atmosphere, water, oxides and minerals",uses:"Respiration, steelmaking, medical oxygen",fact:"O₃ is an allotrope of oxygen with properties different from O₂."},
F:{state:"Gas",mp:"−219.7 °C",bp:"−188.1 °C",ox:"−1",crystal:"Molecular F₂",compounds:"HF, fluorides, fluoropolymers",occ:"Fluoride minerals such as fluorite",uses:"Fluoropolymers and fluoride chemistry",fact:"Fluorine is the most electronegative element."},
Ne:{state:"Gas",mp:"−248.6 °C",bp:"−246.1 °C",ox:"0",crystal:"Atomic solid",compounds:"No common stable compounds",occ:"Trace amount in air",uses:"Signs, indicators and discharge lighting",fact:"Its discharge produces a characteristic orange-red glow."},
Na:{state:"Solid",mp:"97.8 °C",bp:"883 °C",ox:"+1",crystal:"bcc",compounds:"NaCl, NaOH, Na₂CO₃",occ:"Halite, seawater and evaporites",uses:"Chemical manufacture, sodium lamps, heat-transfer systems",fact:"Sodium gives an intense yellow flame."},
Mg:{state:"Solid",mp:"650 °C",bp:"1091 °C",ox:"+2",crystal:"hcp",compounds:"MgO, Mg(OH)₂, MgSO₄",occ:"Magnesite, dolomite and seawater",uses:"Light alloys, flares, reducing agent",fact:"Burning magnesium gives a brilliant white light."},
Al:{state:"Solid",mp:"660.3 °C",bp:"2519 °C",ox:"+3",crystal:"fcc",compounds:"Al₂O₃, AlCl₃, Al(OH)₃",occ:"Bauxite and aluminosilicate minerals",uses:"Transport, packaging and construction",fact:"A thin Al₂O₃ film protects aluminium from further corrosion."},
Si:{state:"Solid",mp:"1414 °C",bp:"2900 °C",ox:"−4, +2, +4",crystal:"Diamond cubic",compounds:"SiO₂, silicates, SiC, silicones",occ:"Silicates and quartz",uses:"Semiconductors, glass and silicones",fact:"Silicon is foundational to modern semiconductor technology."},
P:{state:"Solid",mp:"44.1 °C (white P)",bp:"280.5 °C",ox:"−3, +3, +5",crystal:"Allotrope-dependent",compounds:"PH₃, PCl₃, PCl₅, phosphates",occ:"Phosphate minerals and biological systems",uses:"Fertilizers, matches and biochemistry",fact:"White, red and black phosphorus differ substantially in structure and properties."},
S:{state:"Solid",mp:"115.2 °C",bp:"444.7 °C",ox:"−2, +4, +6",crystal:"Molecular S₈ in common form",compounds:"H₂S, SO₂, SO₃, H₂SO₄",occ:"Sulfide and sulfate minerals",uses:"Sulfuric acid, fertilizers, vulcanization",fact:"Sulfur has several allotropes."},
Cl:{state:"Gas",mp:"−101.5 °C",bp:"−34.0 °C",ox:"−1, +1, +3, +5, +7",crystal:"Molecular Cl₂",compounds:"NaCl, HCl, HClO, chlorides",occ:"Halite and seawater",uses:"Water disinfection, PVC and chemical synthesis",fact:"Chlorine is a halogen and a strong oxidizing agent."},
Ar:{state:"Gas",mp:"−189.3 °C",bp:"−185.8 °C",ox:"0",crystal:"Atomic solid",compounds:"No common stable compounds",occ:"About 1% of dry air",uses:"Inert shielding gas and lighting",fact:"Argon is widely used as a protective atmosphere."},
K:{state:"Solid",mp:"63.5 °C",bp:"759 °C",ox:"+1",crystal:"bcc",compounds:"KCl, KOH, KNO₃",occ:"Sylvite and potassium minerals",uses:"Fertilizers and specialty glass",fact:"Potassium gives a characteristic lilac flame."},
Ca:{state:"Solid",mp:"842 °C",bp:"1484 °C",ox:"+2",crystal:"fcc",compounds:"CaCO₃, CaO, Ca(OH)₂",occ:"Limestone, gypsum and minerals",uses:"Cement, lime, metallurgy and biology",fact:"Calcium gives a brick-red flame."},
Fe:{state:"Solid",mp:"1538 °C",bp:"2862 °C",ox:"+2, +3",crystal:"bcc at room temperature; phase-dependent",compounds:"FeO, Fe₂O₃, Fe₃O₄, FeCl₃",occ:"Hematite, magnetite and other iron ores",uses:"Steel, construction, machinery and biology",fact:"Iron is central to many biological electron-transfer proteins."},
Cu:{state:"Solid",mp:"1084.6 °C",bp:"2562 °C",ox:"+1, +2",crystal:"fcc",compounds:"CuSO₄, CuO, CuCl₂",occ:"Copper sulfide and oxide ores",uses:"Electrical wiring, heat exchangers and alloys",fact:"Many copper(II) compounds are vividly blue or green."},
Zn:{state:"Solid",mp:"419.5 °C",bp:"907 °C",ox:"+2",crystal:"hcp",compounds:"ZnO, ZnS, ZnSO₄",occ:"Sphalerite and zinc ores",uses:"Galvanizing, brass and batteries",fact:"Zinc protects iron by sacrificial corrosion in galvanizing."},
Br:{state:"Liquid",mp:"−7.2 °C",bp:"58.8 °C",ox:"−1, +1, +3, +5, +7",crystal:"Molecular Br₂",compounds:"HBr and bromides",occ:"Bromide minerals and seawater",uses:"Chemical synthesis and specialty materials",fact:"Elemental bromine is a liquid near room temperature."},
I:{state:"Solid",mp:"113.7 °C",bp:"184.3 °C",ox:"−1, +1, +3, +5, +7",crystal:"Molecular I₂",compounds:"Iodides and iodine oxo-compounds",occ:"Iodide-containing minerals and seawater",uses:"Iodization, analytical chemistry and medicine",fact:"Iodine sublimes to a violet vapour."},
Xe:{state:"Gas",mp:"−111.8 °C",bp:"−108.1 °C",ox:"0, +2, +4, +6",crystal:"Atomic solid",compounds:"XeF₂, XeF₄, XeF₆",occ:"Trace gas in atmosphere",uses:"Lighting and specialized ionization applications",fact:"Xenon forms compounds despite being a noble gas."},
Au:{state:"Solid",mp:"1064.2 °C",bp:"2856 °C",ox:"+1, +3",crystal:"fcc",compounds:"AuCl₃ and coordination complexes",occ:"Native gold and gold ores",uses:"Jewellery, electronics and specialized coatings",fact:"Gold is unusually resistant to corrosion."},
Hg:{state:"Liquid",mp:"−38.8 °C",bp:"356.7 °C",ox:"+1, +2",crystal:"Rhombohedral solid",compounds:"HgS, HgCl₂",occ:"Cinnabar and related minerals",uses:"Specialized instruments and chemical research",fact:"Mercury is a metal that is liquid near room temperature."},
W:{state:"Solid",mp:"3422 °C",bp:"5555 °C",ox:"+2 to +6",crystal:"bcc",compounds:"WO₃ and tungsten carbides",occ:"Wolframite and scheelite",uses:"Hard materials and high-temperature applications",fact:"Tungsten has an exceptionally high melting point."},
U:{state:"Solid",mp:"1135 °C",bp:"4131 °C",ox:"+3 to +6",crystal:"Orthorhombic at room conditions",compounds:"UO₂, U₃O₈ and uranyl compounds",occ:"Uranium ores",uses:"Nuclear science and fuel",fact:"Uranium is a naturally occurring radioactive element."}
};

const noble = new Set(["He","Ne","Ar","Kr","Xe","Rn","Og"]);
const gas = new Set(["H","N","O","F","Cl","He","Ne","Ar","Kr","Xe","Rn","Og"]);
const liquid = new Set(["Br","Hg"]);
const halogens = new Set(["F","Cl","Br","I","At","Ts"]);

const configs = {
H:"1s¹",He:"1s²",Li:"[He] 2s¹",Be:"[He] 2s²",B:"[He] 2s² 2p¹",C:"[He] 2s² 2p²",
N:"[He] 2s² 2p³",O:"[He] 2s² 2p⁴",F:"[He] 2s² 2p⁵",Ne:"[He] 2s² 2p⁶",
Na:"[Ne] 3s¹",Mg:"[Ne] 3s²",Al:"[Ne] 3s² 3p¹",Si:"[Ne] 3s² 3p²",
P:"[Ne] 3s² 3p³",S:"[Ne] 3s² 3p⁴",Cl:"[Ne] 3s² 3p⁵",Ar:"[Ne] 3s² 3p⁶",
K:"[Ar] 4s¹",Ca:"[Ar] 4s²",Sc:"[Ar] 3d¹ 4s²",Ti:"[Ar] 3d² 4s²",V:"[Ar] 3d³ 4s²",
Cr:"[Ar] 3d⁵ 4s¹",Mn:"[Ar] 3d⁵ 4s²",Fe:"[Ar] 3d⁶ 4s²",Co:"[Ar] 3d⁷ 4s²",
Ni:"[Ar] 3d⁸ 4s²",Cu:"[Ar] 3d¹⁰ 4s¹",Zn:"[Ar] 3d¹⁰ 4s²",
Ga:"[Ar] 3d¹⁰ 4s² 4p¹",Ge:"[Ar] 3d¹⁰ 4s² 4p²",As:"[Ar] 3d¹⁰ 4s² 4p³",
Se:"[Ar] 3d¹⁰ 4s² 4p⁴",Br:"[Ar] 3d¹⁰ 4s² 4p⁵",Kr:"[Ar] 3d¹⁰ 4s² 4p⁶",
Rb:"[Kr] 5s¹",Sr:"[Kr] 5s²",Y:"[Kr] 4d¹ 5s²",Zr:"[Kr] 4d² 5s²",
Nb:"[Kr] 4d⁴ 5s¹",Mo:"[Kr] 4d⁵ 5s¹",Tc:"[Kr] 4d⁵ 5s²",Ru:"[Kr] 4d⁷ 5s¹",
Rh:"[Kr] 4d⁸ 5s¹",Pd:"[Kr] 4d¹⁰",Ag:"[Kr] 4d¹⁰ 5s¹",Cd:"[Kr] 4d¹⁰ 5s²",
In:"[Kr] 4d¹⁰ 5s² 5p¹",Sn:"[Kr] 4d¹⁰ 5s² 5p²",Sb:"[Kr] 4d¹⁰ 5s² 5p³",
Te:"[Kr] 4d¹⁰ 5s² 5p⁴",I:"[Kr] 4d¹⁰ 5s² 5p⁵",Xe:"[Kr] 4d¹⁰ 5s² 5p⁶",
Cs:"[Xe] 6s¹",Ba:"[Xe] 6s²",La:"[Xe] 5d¹ 6s²",Ce:"[Xe] 4f¹ 5d¹ 6s²",
Pr:"[Xe] 4f³ 6s²",Nd:"[Xe] 4f⁴ 6s²",Pm:"[Xe] 4f⁵ 6s²",Sm:"[Xe] 4f⁶ 6s²",
Eu:"[Xe] 4f⁷ 6s²",Gd:"[Xe] 4f⁷ 5d¹ 6s²",Tb:"[Xe] 4f⁹ 6s²",Dy:"[Xe] 4f¹⁰ 6s²",
Ho:"[Xe] 4f¹¹ 6s²",Er:"[Xe] 4f¹² 6s²",Tm:"[Xe] 4f¹³ 6s²",Yb:"[Xe] 4f¹⁴ 6s²",
Lu:"[Xe] 4f¹⁴ 5d¹ 6s²",Hf:"[Xe] 4f¹⁴ 5d² 6s²",Ta:"[Xe] 4f¹⁴ 5d³ 6s²",
W:"[Xe] 4f¹⁴ 5d⁴ 6s²",Re:"[Xe] 4f¹⁴ 5d⁵ 6s²",Os:"[Xe] 4f¹⁴ 5d⁶ 6s²",
Ir:"[Xe] 4f¹⁴ 5d⁷ 6s²",Pt:"[Xe] 4f¹⁴ 5d⁹ 6s¹",Au:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
Hg:"[Xe] 4f¹⁴ 5d¹⁰ 6s²",Tl:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",Pb:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
Bi:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",Po:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",At:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
Rn:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",Fr:"[Rn] 7s¹",Ra:"[Rn] 7s²",
Ac:"[Rn] 6d¹ 7s²",Th:"[Rn] 6d² 7s²",Pa:"[Rn] 5f² 6d¹ 7s²",U:"[Rn] 5f³ 6d¹ 7s²",
Np:"[Rn] 5f⁴ 6d¹ 7s²",Pu:"[Rn] 5f⁶ 7s²",Am:"[Rn] 5f⁷ 7s²",Cm:"[Rn] 5f⁷ 6d¹ 7s²",
Bk:"[Rn] 5f⁹ 7s²",Cf:"[Rn] 5f¹⁰ 7s²",Es:"[Rn] 5f¹¹ 7s²",Fm:"[Rn] 5f¹² 7s²",
Md:"[Rn] 5f¹³ 7s²",No:"[Rn] 5f¹⁴ 7s²",Lr:"[Rn] 5f¹⁴ 7s² 7p¹",
Rf:"[Rn] 5f¹⁴ 6d² 7s²",Db:"[Rn] 5f¹⁴ 6d³ 7s²",Sg:"[Rn] 5f¹⁴ 6d⁴ 7s²",
Bh:"[Rn] 5f¹⁴ 6d⁵ 7s²",Hs:"[Rn] 5f¹⁴ 6d⁶ 7s²",Mt:"[Rn] 5f¹⁴ 6d⁷ 7s²",
Ds:"[Rn] 5f¹⁴ 6d⁸ 7s²",Rg:"[Rn] 5f¹⁴ 6d⁹ 7s²",Cn:"[Rn] 5f¹⁴ 6d¹⁰ 7s²",
Nh:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",Fl:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
Mc:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",Lv:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
Ts:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",Og:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶"
};

function group(z){
 // Standard IUPAC group placement (1–18). f-block elements are represented
 // by the La/Ac placeholders in the main table and rendered below.
 if(z===1)return 1;
 if(z===2)return 18;
 if(z>=3&&z<=4)return z-2;              // Li, Be -> 1, 2
 if(z>=5&&z<=10)return z+8;             // B-Ne -> 13-18
 if(z>=11&&z<=12)return z-10;           // Na, Mg -> 1, 2
 if(z>=13&&z<=18)return z;               // Al-Ar -> 13-18
 if(z>=19&&z<=30)return z-18;            // K-Zn -> 1-12
 if(z>=31&&z<=36)return z-18;            // Ga-Kr -> 13-18
 if(z>=37&&z<=38)return z-36;            // Rb, Sr -> 1, 2
 if(z>=39&&z<=48)return z-36;            // Y-Cd -> 3-12
 if(z>=49&&z<=54)return z-36;            // In-Xe -> 13-18
 if(z>=55&&z<=56)return z-54;            // Cs, Ba -> 1, 2
 if(z>=57&&z<=71)return null;
 if(z>=72&&z<=80)return z-68;             // Hf-Hg -> 4-12
 if(z>=81&&z<=86)return z-68;             // Tl-Rn -> 13-18
 if(z>=87&&z<=88)return z-86;             // Fr, Ra -> 1, 2
 if(z>=89&&z<=103)return null;
 if(z>=104&&z<=112)return z-100;           // Rf-Cn -> 4-12
 if(z>=113&&z<=118)return z-100;           // Nh-Og -> 13-18
 return null;
}
function period(z){return z<=2?1:z<=10?2:z<=18?3:z<=36?4:z<=54?5:z<=86?6:7}
function blockClass(e){
 if(e.z===2)return "s"; // helium is an s-block element by electron configuration
 if(e.block==="s")return "s"; if(e.block==="d")return "d"; if(e.block==="f")return "f";
 const g=group(e.z); return "p"+g;
}
function pos(e){
 const g=group(e.z),p=period(e.z);
 if(e.z>=57&&e.z<=71)return null;if(e.z>=89&&e.z<=103)return null;
 return [p,g];
}
function shellFallback(z){
 const order=[[1,"s",2],[2,"s",2],[2,"p",6],[3,"s",2],[3,"p",6],[4,"s",2],[3,"d",10],[4,"p",6],[5,"s",2],[4,"d",10],[5,"p",6],[6,"s",2],[4,"f",14],[5,"d",10],[6,"p",6],[7,"s",2],[5,"f",14],[6,"d",10],[7,"p",6]];
 let left=z,out=[];for(const [n,l,c] of order){if(!left)break;const q=Math.min(left,c);out.push(`${n}${l}${q}`);left-=q}return out.join(" ");
}
function getExtra(e){
 if(special[e.symbol])return special[e.symbol];
 const s=gas.has(e.symbol)?"Gas":liquid.has(e.symbol)?"Liquid":"Solid";
 const ox=e.type==="noble"?"0 (mainly)":e.block==="s"?(e.z%2?"+1":"+2"):e.block==="f"?"commonly +3":e.block==="d"?"Variable oxidation states":"Group-dependent / variable";
 return {state:s,mp:"Element-specific",bp:"Element-specific",ox,crystal:e.type==="metal"?"Element-specific metallic lattice":"Molecular / covalent / atomic structure",compounds:"Representative compounds depend on oxidation state and bonding.",occ:"Found in minerals, atmosphere, water, biological systems or radioactive decay products depending on the element.",uses:"Applications are element-specific: materials, catalysis, electronics, energy, medicine or research.",fact:`${e.name} is element ${e.z}; its periodic position helps predict broad chemical behaviour.`};
}
function density(e){
 const d={Li:"0.534 g/cm³",Na:"0.968 g/cm³",K:"0.862 g/cm³",Mg:"1.738 g/cm³",Al:"2.70 g/cm³",Si:"2.33 g/cm³",Ca:"1.55 g/cm³",Ti:"4.51 g/cm³",Cr:"7.19 g/cm³",Mn:"7.21 g/cm³",Fe:"7.87 g/cm³",Co:"8.90 g/cm³",Ni:"8.90 g/cm³",Cu:"8.96 g/cm³",Zn:"7.14 g/cm³",Ag:"10.49 g/cm³",Au:"19.32 g/cm³",Hg:"13.53 g/cm³",Pb:"11.34 g/cm³",W:"19.25 g/cm³"};return d[e.symbol]||"Reference value";
}
function flame(e){return ({Li:"Crimson red",Na:"Bright yellow",K:"Lilac",Ca:"Brick red",Sr:"Scarlet red",Ba:"Apple green",Cu:"Blue-green"})[e.symbol]||"No characteristic flame colour commonly used";}
function oxide(e){if(e.type==="noble")return"No common stable oxide";if(e.type==="nonmetal")return"Usually acidic or molecular oxides";if(e.type==="metalloid")return"Often acidic or amphoteric";if(e.block==="d")return"May be basic, amphoteric or acidic depending on oxidation state";return e.z<=20?"Generally basic":"Basic to amphoteric; higher oxidation states can be acidic";}
function hydroxide(e){if(e.type==="noble")return"No common hydroxide";if(e.type==="nonmetal")return"Usually covalent oxoacid chemistry rather than simple metal hydroxides";if(e.type==="metalloid")return"Often amphoteric/covalent";return"Generally basic; some are amphoteric";}
function elButton(e,series=false){
 const b=document.createElement("button");b.className=`element ${blockClass(e)}`;b.type="button";
 if(!series){const p=pos(e);if(p){b.style.gridRow=p[0];b.style.gridColumn=p[1]}}
 b.innerHTML=`<div class="atomic">${e.z}</div><div class="symbol">${e.symbol}</div><div class="ename">${e.name}</div><div class="mass">${e.mass}</div>`;
 b.title=`${e.name} (${e.symbol})`;b.addEventListener("click",()=>showDetails(e));return b;
}
function placeholderButton(label,range,periodNo){
 const b=document.createElement("button");b.className="series-placeholder";b.type="button";
 b.style.gridRow=periodNo;b.style.gridColumn=3;
 b.innerHTML=`<div class="placeholder-range">${range}</div><div class="placeholder-label">${label}</div>`;
 b.title=`${label} ${range}`;
 b.addEventListener("click",()=>document.getElementById(label.toLowerCase()).scrollIntoView({behavior:"smooth",block:"center"}));
 return b;
}
function makeGridCell(content=null, extraClass=''){
 const cell=document.createElement('div');
 cell.className=`grid-cell ${extraClass}`;
 if(content) cell.appendChild(content);
 return cell;
}

function render(){
 const q=document.getElementById("search").value.trim().toLowerCase();
 const bf=document.getElementById("blockFilter").value,tf=document.getElementById("typeFilter").value;
 const matches=e=>(!q||e.name.toLowerCase().includes(q)||e.symbol.toLowerCase()===q||String(e.z)===q)&&
   (bf==="all"||e.block===bf|| (bf==="s"&&e.z===2))&&(tf==="all"||e.type===tf);
 const grid=document.getElementById("periodicGrid"),lan=document.getElementById("lanthanides"),act=document.getElementById("actinides");
 grid.innerHTML="";lan.innerHTML="";act.innerHTML="";

 // Build the main table as 7 rows × 18 fixed cells. This prevents CSS auto-placement
 // from ever shifting an element into the wrong group.
 const byPosition=new Map();
 elements.forEach(e=>{
   if(e.z>=57&&e.z<=71)return;
   if(e.z>=89&&e.z<=103)return;
   if(!matches(e))return;
   const g=group(e.z), p=period(e.z);
   if(g) byPosition.set(`${p}-${g}`,e);
 });
 for(let p=1;p<=7;p++){
   for(let g=1;g<=18;g++){
     let content=null;
     const e=byPosition.get(`${p}-${g}`);
     if(e) content=elButton(e);
     else if((p===6||p===7)&&g===3){
       const isLan=p===6;
       const show=isLan
         ? elements.some(e=>e.z>=57&&e.z<=71&&matches(e))
         : elements.some(e=>e.z>=89&&e.z<=103&&matches(e));
       if(show) content=placeholderButton(isLan?"Lanthanides":"Actinides",isLan?"57–71":"89–103",p);
     }
     grid.appendChild(makeGridCell(content));
   }
 }

 elements.filter(e=>e.z>=57&&e.z<=71&&matches(e)).forEach(e=>lan.appendChild(elButton(e,true)));
 elements.filter(e=>e.z>=89&&e.z<=103&&matches(e)).forEach(e=>act.appendChild(elButton(e,true)));
 document.getElementById("resultCount").textContent=`${elements.filter(matches).length} / 118`;
}
function showDetails(e){
 const x=getExtra(e),groupText=group(e)||"f-block series",typeLabel=e.type==="noble"?"Noble gas":e.type==="nonmetal"?"Non-metal":e.type==="metalloid"?"Metalloid":"Metal";
 const details=document.getElementById("details");
 details.innerHTML=`
 <div class="profile-head"><div class="profile-badge ${blockClass(e)}"><div class="atomic">${e.z}</div><div class="symbol">${e.symbol}</div></div>
 <div class="profile-title"><h2>${e.name}</h2><p><b>${e.block.toUpperCase()}-BLOCK</b> • ${typeLabel} • Period ${period(e.z)} • Group ${groupText}</p></div></div>
 <div class="facts">
  <div class="fact"><label>Atomic number</label><strong>${e.z}</strong></div>
  <div class="fact"><label>Atomic mass</label><strong>${e.mass}</strong></div>
  <div class="fact"><label>Electronic configuration</label><strong>${configs[e.symbol]||shellFallback(e.z)}</strong></div>
  <div class="fact"><label>Physical state</label><strong>${x.state}</strong></div>
  <div class="fact"><label>Density</label><strong>${density(e)}</strong></div>
  <div class="fact"><label>Melting point</label><strong>${x.mp}</strong></div>
  <div class="fact"><label>Boiling point</label><strong>${x.bp}</strong></div>
  <div class="fact"><label>Oxidation states</label><strong>${x.ox}</strong></div>
  <div class="fact"><label>Flame colour</label><strong>${flame(e)}</strong></div>
 </div>
 <div class="detail-tabs">
  <button class="detail-tab active" data-tab="chem">⚗ Chemistry</button><button class="detail-tab" data-tab="structure">🧱 Structure</button>
  <button class="detail-tab" data-tab="occ">🌍 Occurrence</button><button class="detail-tab" data-tab="uses">💡 Uses</button><button class="detail-tab" data-tab="fact">⭐ Interesting</button>
 </div><div id="detailContent"></div>
 <div class="micro-note">For radioactive/synthetic elements, standard atomic masses may be represented by a characteristic mass number rather than a conventional natural-abundance atomic weight. Physical constants can depend on phase, temperature and reference source.</div>`;
 const content=document.getElementById("detailContent");
 function setTab(tab){
   document.querySelectorAll(".detail-tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
   if(tab==="chem")content.innerHTML=`<div class="detail-grid">
    <div class="info-box"><h3>Oxides — acidic/basic nature</h3><p>${oxide(e)}</p></div>
    <div class="info-box"><h3>Hydroxides</h3><p>${hydroxide(e)}</p></div>
    <div class="info-box"><h3>Representative compounds</h3><p>${x.compounds}</p></div>
    <div class="info-box"><h3>Specific chemical behaviour</h3><p>${x.fact}</p></div></div>`;
   if(tab==="structure")content.innerHTML=`<div class="detail-grid">
    <div class="info-box"><h3>Crystal structure</h3><p>${x.crystal}</p></div>
    <div class="info-box"><h3>Unit-cell concept</h3><p>${e.type==="metal"?"The unit cell is the smallest repeating geometrical unit describing the crystal lattice. Common metallic lattices include bcc, fcc and hcp.":"The solid-state structure depends on molecular packing, atomic bonding or allotropy."}</p></div>
    <div class="info-box"><h3>Block & position</h3><p>${e.block}-block • Period ${period(e.z)} • Group ${groupText}</p></div>
    <div class="info-box"><h3>Valence-shell idea</h3><p>The block identifies the subshell associated with the differentiating electron, which helps explain periodic behaviour.</p></div></div>`;
   if(tab==="occ")content.innerHTML=`<div class="detail-grid"><div class="info-box"><h3>Natural occurrence</h3><p>${x.occ}</p></div><div class="info-box"><h3>Sources</h3><p>Source minerals and occurrence vary with geochemical conditions; radioactive elements can also arise through decay chains.</p></div></div>`;
   if(tab==="uses")content.innerHTML=`<div class="detail-grid"><div class="info-box"><h3>Applications</h3><p>${x.uses}</p></div><div class="info-box"><h3>Why it matters</h3><p>Its chemistry connects periodic position with materials, industrial processes, environmental chemistry, energy, medicine or biological systems.</p></div></div>`;
   if(tab==="fact")content.innerHTML=`<div class="detail-grid"><div class="info-box"><h3>⭐ Did you know?</h3><p>${x.fact}</p></div><div class="info-box"><h3>🎓 Exam connection</h3><p><b>Position → electronic configuration → oxidation state → bonding → properties → applications.</b></p></div></div>`;
 }
 document.querySelectorAll(".detail-tab").forEach(b=>b.addEventListener("click",()=>setTab(b.dataset.tab)));
 setTab("chem");details.scrollIntoView({behavior:"smooth",block:"start"});
}
document.getElementById("search").addEventListener("input",render);
document.getElementById("blockFilter").addEventListener("change",render);
document.getElementById("typeFilter").addEventListener("change",render);
document.getElementById("clearBtn").addEventListener("click",()=>{document.getElementById("search").value="";document.getElementById("blockFilter").value="all";document.getElementById("typeFilter").value="all";render()});
document.getElementById("trendBtn").addEventListener("click",()=>document.getElementById("trends").scrollIntoView({behavior:"smooth"}));
const modal=document.getElementById("guideModal");document.getElementById("aboutBtn").addEventListener("click",()=>{modal.classList.add("show");modal.setAttribute("aria-hidden","false")});
modal.querySelector("[data-close]").addEventListener("click",()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true")});
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("show")});


/* ===== Motion controller ===== */
(function setupMotion(){
  const progress=document.createElement("div");
  progress.className="scroll-progress";
  progress.innerHTML="<span></span>";
  document.body.prepend(progress);
  const bar=progress.firstElementChild;
  const updateProgress=()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.width=(max>0?Math.min(100,window.scrollY/max*100):0)+"%";
  };
  window.addEventListener("scroll",updateProgress,{passive:true});
  window.addEventListener("resize",updateProgress,{passive:true});
  updateProgress();

  const revealTargets=document.querySelectorAll(".controls,.legend,.table-card,.details,.trends,footer,.hero-stat");
  revealTargets.forEach((el,i)=>{el.classList.add("reveal-ready");el.style.transitionDelay=Math.min(i*55,220)+"ms";});
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("revealed");revealObserver.unobserve(entry.target);}});
  },{threshold:.08});
  revealTargets.forEach(el=>revealObserver.observe(el));

  // Add a lightweight ripple to clickable controls.
  document.addEventListener("click",e=>{
    const target=e.target.closest("button,.detail-tab");
    if(!target || target.disabled)return;
    const rect=target.getBoundingClientRect();
    target.style.position=target.style.position||"relative";
    target.style.overflow="hidden";
    const r=document.createElement("span");
    r.className="ripple";
    const size=Math.max(rect.width,rect.height)*.35;
    r.style.width=r.style.height=size+"px";
    r.style.left=(e.clientX-rect.left-size/2)+"px";
    r.style.top=(e.clientY-rect.top-size/2)+"px";
    target.appendChild(r);
    setTimeout(()=>r.remove(),600);
  });

  // Give the details card a smooth content-swap animation.
  const details=document.getElementById("details");
  if(details){
    const observer=new MutationObserver(()=>{
      details.classList.remove("detail-changing");
      void details.offsetWidth;
      details.classList.add("detail-changing");
    });
    observer.observe(details,{childList:true});
  }
})();

render();showDetails(elements[5]);
