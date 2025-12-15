# Úniková hra – TIME IS MONEY

Hráč se probouzí uprostřed akce – během vloupání do banky se něco zvrtlo a alarm aktivoval bezpečnostní systém. Na začátku hry dostane hráč krátký interaktivní úvodní gamebook, který uvede děj a přenese ho přímo do trezorové místnosti.

## Herní princip

Hráč začíná v trezoru na pátém patře, kde může klikáním sbírat rozházené peníze. Po krátké úvodní interakci zjistí, že všechny východy jsou zablokované a jediná cesta ven vede dolů – přes jednotlivá patra banky.

Z každého patra lze uniknout pouze splněním jedné minihry. Úspěšně dokončená minihra hráči odemkne klíč k nižšímu patru. Postupně tak sestupuje až k východu z budovy. Každá minihra tematicky odpovídá zabezpečení daného patra.

---

# Minihry

## 1. Bezpečnostní tablet – Paměťová sekvence
První minihra probíhá přímo v trezoru. Zavřely se dveře od trezoru a potřebujete se dostat z něj ven. Jediná cesta je použít tablet. Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Hráč musí sekvenci zopakovat klikáním na správná tlačítka.

- **Level 1:** mřížka 3×3  
- **Level 2:** mřížka 4×4  
- **Level 3:** mřížka 5×5  

Po úspěšném splnění získá klíč k odemknutí trezoru. Poté jsou tam dveře k nižsímu patru


## 2. Dolarová kombinace – Logická skládačka
Čísla reprezentující bankovky (1 dolar, 2 dolary, 3 dolary…) jsou náhodně rozhozená ve čtvercové mřížce. Cílem je pomocí posouvání dlaždic seřadit bankovky do správného pořadí.  
Princip funguje stejně jako klasická „Patnáctka“.
Toto bude taky displej u dveří. Při splnění - odemknuto.

## 3. Bankovní systém – Hackovací kódy
Hráč se pokouší nabourat do interního systému banky. Na obrazovce se objeví odpočet a několik kódů, které je nutné přesně opsat.

- Pokud hráč zadá kód s chybou nebo ho nestihne napsat v časovém limitu, dostane penalizaci.  
- Po určitém počtu chyb se hackování musí opakovat od začátku.
Toto bude PC v tom dalším patře.

Inspirace: „Welcome to the Game“.


## 4. Elektrický rozvaděč – Směřování energie
Hráč musí správně přesměrovat elektrickou energii v rozvaděči. Na panelu jsou umístěné šipky, které jsou náhodně natočené.

- Kliknutím se šipka otočí o 90°.  
- Po vypršení časového limitu musí vytvořená trasa vést od startu až do cíle.

Špatné zapojení způsobí výpadek – minihru je nutné zopakovat.


## 5. Číslený zámek – Zastav správné číslo
Na displeji běží několik sloupců s čísly 0–9, která se nepřetržitě posouvají shora dolů.  
Úkolem je kliknutím zastavit každý sloupec přesně na hodnotě, která je určena v cílové kombinaci.

- Pokud hráč chybuje, musí začít od začátku.  
- Hra je časově omezená – po vypršení času hráč přijde o část peněz, ale může zkusit minihru znovu.

---

# Rozdělení práce

## Tomáš Procházka
- [ ] Gamebook
- [ ] Číselný zámek

## Jakub Jezbera
- [ ] Bezpečnostní tablet
- [ ] Dolarová kombinace
- [ ] Design

## Jakub Adam
- [ ] Bankovní systém
- [ ] Elektrický rozvaděč
- [ ] Zvukové efekty

# Odkazy

[Figma](https://www.figma.com/design/p6w8yuVkiAh8u9b4hsM29T/Projekt-WEB---MPA--Jezbera--Adam--Proch%C3%A1zka-T.-?node-id=4-39&t=O9c0IQY7WmTthhBV-1)
[Web]()

# ENV
VITE_API_BASE_URL=http://localhost:5080
