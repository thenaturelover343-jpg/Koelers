# Golderos Benelux — website

Tweetalige (NL/FR) bedrijfswebsite voor **Golderos Benelux**, de Belgische verdeler van
[Golderos](http://www.golderos.com/) professionele biertapkoeling en koeltechniek.

Volledig statische site — geen build-stap, geen dependencies. Direct te hosten op
GitHub Pages, Netlify, Combell of eender welke webhosting.

## Structuur

```
index.html               taalkeuze/redirect (NL standaard, FR bij Franse browser)
nl/                      Nederlandse pagina's (home, producten, diensten, over-ons, contact)
fr/                      Franse pagina's (accueil, produits, services, a-propos, contact)
assets/css/style.css     gedeelde stylesheet (designsysteem)
assets/js/main.js        menu, scroll-animaties, contactformulier
assets/img/              logo + SVG-placeholders voor productfoto's
sitemap.xml, robots.txt  SEO
```

## ⚠️ Productfoto's toevoegen

De echte productfoto's van golderos.com konden vanuit de bouwomgeving niet gedownload
worden (de site blokkeert geautomatiseerde toegang). De site toont daarom voorlopig
stijlvolle SVG-illustraties. **Zodra u een foto met de juiste bestandsnaam in
`assets/img/products/` plaatst, verschijnt die automatisch op de site** (de SVG dient
enkel als fallback).

Download de foto's van golderos.com / golderos.eu (als officiële verdeler hebt u daar
toestemming voor — vraag de fabrikant eventueel om het originele beeldmateriaal) en
bewaar ze met deze namen:

| Bestandsnaam                          | Gebruikt voor                              |
| ------------------------------------- | ------------------------------------------ |
| `assets/img/products/beer-cooler.jpg`    | Bierkoelers                               |
| `assets/img/products/keg-cooler.jpg`     | Vatenkoelers (keg coolers)                |
| `assets/img/products/mobile-cooler.jpg`  | Mobiele tapkoelers                        |
| `assets/img/products/event-cooler.jpg`   | Evenement-/beurskoelers                   |
| `assets/img/products/agitator-motor.jpg` | Roermotoren                               |
| `assets/img/products/cooling-coil.jpg`   | Koelspiralen                              |
| `assets/img/products/beer-tap.jpg`       | Tapkranen                                 |
| `assets/img/products/tap-column.jpg`     | Tapzuilen & toebehoren                    |
| `assets/img/products/workshop.jpg`       | Werkplaats/atelier (home & over ons)      |
| `assets/img/products/installation.jpg`   | Installatie (diensten)                    |
| `assets/img/products/maintenance.jpg`    | Onderhoud & herstelling (diensten)        |
| `assets/img/products/custom.jpg`         | Maatwerk (diensten)                       |
| `assets/img/products/team.jpg`           | Teamfoto (over ons)                       |

Aanbevolen formaat: liggend, minimaal 800×600 px, JPG.

## Nog in te vullen (zoek op `TODO` in de bestanden)

- **Bedrijfsgegevens**: adres, telefoonnummer, BTW-nummer (nu placeholders in header/footer/contact).
- **Domeinnaam**: `https://www.golderosbenelux.be` is een placeholder in de
  `hreflang`-tags, `sitemap.xml` en `robots.txt`.
- **Contactformulier**: werkt nu via `mailto:` (opent het e-mailprogramma van de
  bezoeker). Voor echte formulierverzending: koppel een dienst als
  [Formspree](https://formspree.io) en pas het formulier in `nl/contact.html` en
  `fr/contact.html` aan.

## Lokaal bekijken

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Hosten op GitHub Pages

De site wordt automatisch gepubliceerd door de workflow
`.github/workflows/deploy-pages.yml` bij elke push naar `main`
(Settings → Pages → Source: *GitHub Actions*).

**Live:** https://thenaturelover343-jpg.github.io/Koelers/
