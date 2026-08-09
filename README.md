# Munkkiniemen yhteiskoulun Copilot-harjoitukset

Kahden tunnin opettajankoulutuksen harjoitussivusto: kolme kuvallista Microsoft 365
Copilot -harjoitusta (ohjeiden eriyttäminen, arviointimatriisi, Tutki ja opi).

Staattinen sivusto ilman build-vaihetta — julkaistavissa sellaisenaan GitHub
Pagesissa tai millä tahansa staattisella palvelimella, ja avattavissa myös
paikallisesti suoraan selaimeen.

## Rakenne

| Tiedosto | Sisältö |
| --- | --- |
| `index.html` | Etusivu: agenda ja harjoituskortit — tämä linkki jaetaan osallistujille |
| `eriyta-ohjeet.html` | Harjoitus 1: Eriytä tehtävän ohjeita (15 min) |
| `arviointimatriisi.html` | Harjoitus 2: Arviointimatriisin luonnostelu (14 min) |
| `tutki-ja-opi.html` | Harjoitus 3: Tutki ja opi (7–9 min) |
| `ohjaaja.html` | Kouluttajan aikataulut, purkukysymykset ja varasuunnitelmat — ei linkitetty etusivulta |
| `diat.html` | Koulutuksen esitysdiat (itsenäinen paketti, viety Claude-artifactista) |
| `kuvat/` | Numeroidut vaihekuvat (korostetut kuvakaappaukset) |
| `assets/` | Tyylit sekä kopiointi-, zoomaus- ja tulostustoiminnot |

Jokainen harjoitussivu toimii myös osallistujan A4-ohjeena: **Tulosta osallistujan
ohje** -painike (tai Ctrl+P) tuottaa tulostetun version ilman painikkeita ja
navigaatiota.

## Julkaisu

Sivusto julkaistaan GitHub Pagesissa `gh-pages`-haarasta. Varsinainen osoite on
**<https://munkka.aiperusteet.fi/>** (custom domain, `CNAME`-tiedosto repon
juuressa). Pohjalla oleva GitHub-osoite
<https://mattiseise.github.io/munkka-copilot/> toimii aina, myös jos
custom domain ei jostain syystä resolvoidu.

Custom domainin toimiminen vaatii DNS-tietueen Zonerissa (aiperusteet.fi:n
nimipalvelu), joka on tehtävä kerran Zonerin hallintapaneelissa — GitHubin
puoli (CNAME-tiedosto, HTTPS-varmenne) hoituu automaattisesti tietueen
lisäämisen jälkeen:

```
Tyyppi:  CNAME
Nimi:    munkka
Arvo:    mattiseise.github.io
```

Muutokset julkaistaan päivittämällä `gh-pages`-haara mainista:

```
git push origin main:gh-pages
```

## Päivittäminen

Kuvakaappaukset ovat Microsoft 365 Copilotin näkymästä 9.8.2026. Kun Copilotin
käyttöliittymä muuttuu: vaihda kuvat `kuvat/`-kansioon samoilla tiedostonimillä ja
päivitä versiopäiväys jokaisen sivun ylä- ja alatunnisteeseen.

Raakakuvat ilman korostuksia sekä korostusten generointiskripti ovat
lähdeaineistopaketissa (MunkkaHarjoitukset.zip), eivät tässä repossa.

## Tietosuoja

Kaikki esimerkit ovat kuvitteellisia. Harjoituksiin ei syötetä henkilötietoja,
oppilastöitä tai arviointitietoja, eikä kuvakaappauksissa näy käyttäjätietoja.
