# Úniková hra – TIME IS MONEY

Hráč se probouzí uprostřed akce – během vloupání do banky se něco zvrtlo a alarm aktivoval bezpečnostní systém. Na začátku hry dostane hráč krátký interaktivní úvodní gamebook, který uvede děj a přenese ho přímo do trezorové místnosti.

## Herní princip

Hráč začíná v trezoru, kde v naprosté tmě může klikáním sbírat rozházené peníze. Po této úvodní interakci zjistí, že všechny východy jsou zablokované a jediná cesta ven vede přes jednotlivé bezpečnostní systémy banky.

Z každé místnosti lze uniknout pouze splněním jedné minihry. Úspěšně dokončená minihra hráči odemkne cestu dál. Postupně tak prochází bankou až k finálnímu východu. Každá minihra tematicky odpovídá zabezpečení daného patra/místnosti.

---

# Minihry

## 1. Elektrický rozvaděč – Směřování energie
Trezor je v hluboké tmě a proud nefunguje. Ten je nutný pro otevření dveří. Musíš rychle obnovit napájení v nouzovém rozvaděči.
- **Úkol:** Na panelu vidíš několik šipek, které jsou náhodně otočené. Kliknutím na šipku ji vždy otočíš o 90°. Musíš vytvořit souvislou trasu od startu až do cíle než vyprší čas.

## 2. Světelná kombinace – Otevření dveří
Proud je sice zpět, ale dveře do kanceláře ředitele zůstávají zablokované elektronickou pojistkou.
- **Úkol:** Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Musíš si sekvenci zapamatovat a následně ji zopakovat klikáním na správná tlačítka.

## 3. Bankovní systém – Hackovací kódy
Jsi v kanceláři, ale kamery nad východem jsou stále aktivní. Pokud projdeš, zachytí tě.
- **Úkol:** Na monitoru běží odpočet a blikající kódy, které musíš rychle a přesně opsat. Úspěšné dokončení deaktivuje kamery a získáš PIN pro další postup.

## 4. Číselná kombinace – Logická skládačka
Systém vyžaduje dodatečné ověření pro použití hlavního PINu k odemčení dveří.
- **Úkol:** Na obrazovce je mřížka s rozházenými čísly. Pomocí posouvání jednotlivých čtverců musíš seřadit čísla do správného pořadí (klasická „Patnáctka“).

## 5. Zamykací panel – Zastavení čísel
Dostal ses k hlavním dveřím banky, které čekají na zadání čtyřmístného PINu.
- **Úkol:** Na displeji jsou čtyři sloupce čísel, která se neustále posouvají. Pomocí tlačítek STOP musíš zastavit každý sloupec tak, aby výsledná kombinace odpovídala PINu, který jsi získal dříve.

---

# Rozdělení práce

## Tomáš Procházka
- [x] Gamebook
- [x] Zamykací panel (Zastavení čísel)

## Jakub Jezbera
- [x] Světelná kombinace (Bezpečnostní tablet)
- [x] Číselná kombinace (Logická skládačka)
- [x] Design

## Jakub Adam
- [x] Bankovní systém (Hackovací kódy)
- [x] Elektrický rozvaděč (Směřování energie)
- [x] Zvukové efekty

# Odkazy

[Figma](https://www.figma.com/design/p6w8yuVkiAh8u9b4hsM29T/Projekt-WEB---MPA--Jezbera--Adam--Proch%C3%A1zka-T.-?node-id=4-39&t=O9c0IQY7WmTthhBV-1)
[Web]()

# ENV
VITE_API_BASE_URL=http://localhost:5080
