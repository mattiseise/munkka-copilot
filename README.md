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

Sivusto julkaistaan GitHub Pagesissa `gh-pages`-haarasta. Osoite on
**<https://munkka.aiperusteet.fi/>** (custom domain, `CNAME`-tiedosto repon
juuressa; DNS: CNAME `munkka` → `mattiseise.github.io` Zonerissa,
aiperusteet.fi:n nimipalvelussa). HTTPS on GitHubin automaattisesti
provisioima Let's Encrypt -varmenne. Pohjalla oleva GitHub-osoite
<https://mattiseise.github.io/munkka-copilot/> ohjaa 301:llä custom domainiin
heti kun `CNAME`-tiedosto on repossa — sitä ei siis kannata pushata ennen
kuin DNS-tietue jo resolvoituu, tai sivusto on hetken tavoittamattomissa
molemmista osoitteista.

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
