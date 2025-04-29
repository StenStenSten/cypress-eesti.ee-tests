✅ Õnnestunud testid (6/11)
Avalehe laadimine
Kontrolliti, et Eesti.ee avaleht laeb edukalt ja pealkiri sisaldab "Eesti.ee".

Otsingukasti olemasolu ja nähtavus
Veenduti, et otsinguväli on nähtav ja kasutatav.

Peamenüüpunktid
Kontrolliti, et peamenüüs on nähtavad lingid "Eraisik" ja "Ettevõtja".

"Tervis ja retseptid" avamine "Eraisiku" alt
Kontrolliti, et kategooria on nähtav ja "Retseptid" on alateenusena olemas.

Terviseportaali link avab uue akna
Testitud, et "Terviseportaal" lingil on target="_blank" atribuut.

"Eesti hümn" otsing töötab
Kontrolliti, et märksõna "Eesti hümn" tagastab asjakohased tulemused.



❌ Ebaõnnestunud testid (5/11)
Tühi otsing ei kuva veateadet

Ootus: Kuva tekst "Palun sisesta otsingusõna".

Põhjus: Veateade ei ilmunud või pole üldse olemas (võib viidata puudulikule kasutajaliidese valideerimisele).

"Retseptid" leht ei laadinud korrektselt

Ootus: Tekst "Retsepti info" pidi olema lehel.

Põhjus: Leht kas ei jõudnud laadida või tekst on erinev / eemaldatud.

"Võtke meiega ühendust" link ei töötanud ootuspäraselt

Ootus: URL pidi sisaldama kontakt.

Põhjus: Pärast nupule vajutamist jäi leht samaks (/vajad-abi).

Kontaktivormi väljad puuduvad või pole tuvastatavad

Ootus: Sisendväljad nagu input[name="name"], email, textarea[name="description"].

Põhjus: Elemendid puuduvad või nende nimeatribuudid on erinevad võrreldes testiga.

Vigase e-posti sisestamisel ei kuvata veateadet

Ootus: Eeldati valideerimisveateadet valel e-postil.

Põhjus: Vorm kas ei valideerinud sisendit või test ei jõudnud õigesse seisundisse.


