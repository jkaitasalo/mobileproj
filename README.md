## Ominaisuuspisteiden ja kotimaailman suunnittelutyökalu<br>(Characteristics planner with Homeworld selection)

Työkalu Dark Heresy 2E pöytäroolipelin hahmonluonnin tueksi. Sovelluksen avulla voi suunnitella hahmonluonnin yhtä askelta: ominaisuuspisteiden (Characteristics) allokointia, johon vaikuttaa hahmolle valittava koti-/synnyinmaailma (Homeworld).

### Käytettyjä teknologioita
- React:
  - React, useEffect, useState
  - ydinominaisuuksia, jotta eri tilojen talletus on mahdollista sovelluksen käytön aikana
- React Native:
  - View, StyleSheet, ScrollView
  - näkymän oikein toimiminen, sekä Homeworld valintasivun scrollaamisen mahdollistaminen, koska kaikki vaihtoehdot eivät mahdu samalle ruudulle
- React Native Paper:
  - Button, TextInput, Text, IconButton, Snackbar, Divider, Card
  - valmiskomponenttikirjastosta valittuja osia, jotka sopivat käyttöön esim:
    - Snackbar, joka antaa mahdollisuuden näyttää käyttäjälle virheilmoitus
    - Card, Homeworld valintasivun tyylivalinta, joka mielestäni sopi kivasti tähän
    - Divider, helpotti hieman elementtien asettelua
- React Navigation:
  - useNavigation, useRoute
  - navigaatio
- Paikalliset resurssit:
  - defaultCharacteristics, characteristicNames, homeworlds, tyylitiedosto styles
  - oletusarvoja, joita voin käyttää ja joihin voin viitata muualla sovelluksessa
