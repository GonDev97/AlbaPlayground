export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa:         string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  string;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
  }
  
  export interface CapitalInfo {
    latlng: number[];
  }
  
  export interface Car {
    signs: string[];
    side:  string;
  }
  
  export interface CoatOfArms {
    png?: string;
    svg?: string;
  }
  
  export interface Currencies {
    USD?: Clp;
    CRC?: Clp;
    DOP?: Clp;
    EUR?: Clp;
    CLP?: Clp;
    YER?: Clp;
  }
  
  export interface Clp {
    name:   string;
    symbol: string;
  }
  
  export interface Demonyms {
    eng: Eng;
    fra: Eng;
  }
  
  export interface Eng {
    f: string;
    m: string;
  }
  
  export interface Idd {
    root:     string;
    suffixes: string[];
  }
  
  export interface Languages {
    spa?: string;
    ita?: string;
    eng?: string;
    ara?: string;
  }
  
  export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
  }
  
  export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
  }
  
  export interface NativeName {
    spa?: Translation;
    ita?: Translation;
    eng?: Translation;
    ara?: Translation;
  }
  
  export interface Translation {
    official: string;
    common:   string;
  }
  
  export interface PostalCode {
    format: string;
    regex:  string;
  }