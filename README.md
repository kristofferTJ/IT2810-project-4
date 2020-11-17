Prosjekt 4

# Introduksjon

Michelindatabase er en side for å søke i alle restaurantene som fikk michelin stjerne i 2019. 
Det er mulighet for å filtrere på et utvalg regioner, de mest kjente mat-kategoriene, og prisklasse. 
I tillegg kan man sortere på navn (A-W), pris fra billigst til dyrest, og antall stjerner. 
Det er kun 20 restauranter som vises om gangen, resten kan man se ved å bla i sidene. 
For å se mer informasjon om restauranten kan man klikke på restaurant-navnet til restauranten. 
Man kommer da til restaurantens side der man kan se mer informasjon om restauranten, og har mulighet til å legge ved kommentarer til hver restaurant.


# Hvordan kjøre prosjektet


## Klone prosjektet

Åpne et tomt prosjekt i programmet du ønsker å kjøre prosjektet fra (F.eks. Visual Studio Code)

Åpne en terminal i denne mappen og skriv:

    git clone https://gitlab.stud.idi.ntnu.no/it2810-h20/team-41/prosjekt-4.git
    cd prosjekt-4
    cd project-4

## Kjør følgende kommandoer

    npm install
    npm install expo-cli --global (hvis ikke allerede installert)

## Kjøre prosjektet

    npm start

NB: For å kjøre prosjektet må du være koblet til NTNU nettet (evt. via vpn)    


# Teknologier

## Expo cli
Prosjektet er bygget opp av Expo-rammeverket. Expo er et rammeverk og en plattform for universelle React-applikasjoner. Det er et sett med verktøy og tjenester bygget rundt React Native og native plattformer som hjelper en med å utvikle, bygge og distribuere og på iOS-, Android- og webapper fra samme JavaScript / TypeScript-kodebase.

## Stack

Vi valgte å benytte oss av MERN stacken. Vi ønsket å benytte oss av en NoSQL database(se database under). Express er et rammeverk fra Node som gjør
det enkelt å bygge ut APIer uten å skrive mye kode. React er en veldokumentert biblioteket som gjør det enkelt å bygge ut web-komponenter uten mye
komplikasjoner ved håndtering av staten. 



## Redux

Vi valgte å bruke Redux til state management, selv om MobX kanskje hadde passet bedre for et lite prosjekt som dette. Dette er fordi Redux er laget for å 
håndtere state for større prosjekter, og brukes dermed mer av større selskaper. Redux virket derfor som mer relevant å lære for oss og det vi ville få størst 
utbytte av å kunne i ettertid. I tillegg har Redux bedre dokumentasjon, og det gjør det enklere å finne løsninger på problemer underveis. Vi valgte å strukturere 
Redux filene våre ved bruk av "ducks" pattern, som innebærer å samle all logikken til en state i en “duck”. Denne inneholder da alt av types, actions, reducers og 
action creators for denne staten. Oversikt over “ducks” brukt i prosjektet:

**commentDuck:** Styrer logikken for å lagre en ny kommentar i databasen.

**counterDuck:** Gir ut et tall på hvor mange restauranter i databasen som passer med søk og filter, for å hele tiden har riktig antall sider med restauranter å bla mellom.

**cuisineFilterDuck:** Har kontroll på hvilke cuisiner som brukeren har krysset av for at skal vises.

**priceFilterDuck:** Har kontroll på hvilke priskategorier som brukeren har krysset av for at skal vises.

**regionFilterDuck:** Har kontroll på hvilke regioner som brukeren har krysset av for at skal vises.

**restaurantDuck:** Styrer all logikken for henting av restauranter fra databasen basert på de ulike valgene brukeren kan gjøre. (Filter, søk, sortering, bla mellom sider for å få opp flere resultater)

**searchDuck:** Holder kontroll på hva som er skrevet inn i søkefeltet.

**skipDuck:** Holder kontroll på hvor mange restauranter som skal skippes i backend etter hvilken Pagination knapp brukeren trykker på.

**sortingDuck:** Holder kontroll på hvilken parameter brukeren har valgt å sortere resultatene på, default er navn.


# Bruk av tredjeparts-komponenter

##React Native Elements
Applikasjonen er bygget opp av komponenter fra React native og React native elements(RNE), som er tredjeparts-komponenter til React-Native. Vi valgte å benytte oss av RNE som tredjeparts-komponent fordi den gjør utvikling av applikasjoner på tvers av plattformer ekstremt enkelt. RNE er godt dokumentert og fungerer derfor godt som et utgangspunkt for førstegangsbrukerer av React-Native. I tillegg har komponentene et fint design som sparte oss for tid på styling og passet fint til applikasjonen.
. 

##React Navigation 
Til routing mellom sidene har vi brukt React Native Navigation med Stack Navigator biblioteket. Dette benytter seg av en slags “history stack”, der man kan da enkelt navigere mellom sider ved at appen “pusher” og “popper” sider fra navigasjon stacken. 
 

##Andre biblioteker
- @react-navigation/native - lager navigasjonsstruktur i appen 
- @react-navigation/stack - til stack navigasjon
- @expo/vector-icons - ikoner
- react-native-vector-icons - ikoner
- react-native-check-box - checkbox løsning på filtrering



# Backend

Backend koden kjører på VM og det er derfor ikke nødvendig å starte serveren i prosjekt-4/backend. 
Prosjektet skal kjøre på http://it2810-41.idi.ntnu.no:3000. Backenden er klonet fra prosjekt 3 med marginale endringer. 
Hvis man mistenker at serveren er nede kan man sjekke om http://it2810-41.idi.ntnu.no:3000/api/restaurant viser data.

# Testing

I prosjekt 3, som bygger på omtrent den samme funksjonaliteten, gjennomførte vi både omfattende systematisk enhetstesting og automatisert end-to-end testing. Vi valgte derfor, i kombinasjon med hvordan kravene/fokusområdet til prosjekt 4 er gitt,
at det ikke var behov for utvikling av automatiske tester. Vi har likevel utført manuell end-to-end testing for å forsikre oss om at det ikke var noen åpenbare tekniske feil eller mangler i appen. De manuelle testene ble utført i stor grad i likhet med hvordan de automatiske end-to-end testen ble utført i prosjekt 3.
Appen ble testet på IPhone 11 (IOS), IPhone 11 pro (IOS), og huawei p20 (Android)



