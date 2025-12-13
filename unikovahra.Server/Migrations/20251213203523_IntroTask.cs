using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace unikovahra.Server.Migrations
{
    /// <inheritdoc />
    public partial class IntroTask : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IntroTaskSubtitle",
                table: "Rooms",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "IntroTaskText",
                table: "Rooms",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTaskText", "IntroText" },
                values: new object[] { "Kritická chyba v Systému Napájení.", "Tvůj úkol:", "Na panelu vidíš několik šipek, které jsou náhodně otočené. Kliknutím na šipku ji vždy otočíš o 90°.\r\nNež vyprší čas, musíš z těchto šipek vytvořit souvislou trasu od startu až do cíle.", "Trezor je v hluboké tmě a ty si uvědomíš, že proud nefunguje. Ten je nutný pro otevření dveří. Musíš rychle obnovit napájení. Najdeš nouzový rozvaděč s odpočtem (60 sekund) \r\na odpojeným kabelem. Energie sice je, ale neteče." });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTaskText", "IntroText" },
                values: new object[] { "Vstup do Kanceláře", "Tvůj úkol:", "Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Ty si musíš sekvenci zapamtovat a následně ji zopakovat klikáním na správná tlačítka.", "Proud je sice zpět, ale dveře do kanceláře ředitele se neotevřou. Zůstávají zablokované finální, čistě elektronickou pojistkou. Musíš se dostat do kanceláře, protože tam na tebe čeká další úkol, který je nezbytný pro tvůj únik z banky. Na ovládacím panelu vedle dveří se objeví výzva." });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTaskText", "IntroText" },
                values: new object[] { "Kamery blokují cestu", "Tvůj úkol:", "Na monitoru se spustí krátký odpočet a pod ním se objeví blikající kódy, které musíš rychle a přesně opsat, než čas vyprší. Úspěšné dokončení ti zajistí nejen vypnutí kamer, ale \r\ni získání důležitého PINu, který budeš potřebovat pro další postup.", "Jsi uvnitř kanceláře, východ z banky je odemčený, ale na monitoru vyskočí varování. Kamery nad východem jsou stále aktivní, pokud projdeš kolem tak tě okamžitě zachytí. Na obrazovce se objeví úkol, který musíš splnit jinak se spustí alarm." });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTaskText", "IntroText", "IntroTitle" },
                values: new object[] { "Dodatečné ověření pro hlavní PIN", "Tvůj úkol:", "Na obrazovce se objeví mřížka s rozházenými číslami. Tvým cílem je pomocí posouvání jednotlivých čtverců na monitoru seřadit čísla do správného číselného pořadí. Funguje to jako klasická „Patnáctka“: můžeš přesouvat vždy jen jeden dílek, který sousedí s prázdným místem.", "Po zadání velkého množství kódů systém vyhodnotil, že je nutné provést dodatečné ověření, aby ti umožnil použít hlavní PIN k odemčení hlavních dveří banky. Na monitoru se proto objeví nová výzva, která má potvrdit, že jsi oprávněný pokračovat dál.", "Získej PIN" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTaskText", "IntroText" },
                values: new object[] { "Poslední překážka", "Tvůj úkol:", "Na displeji se zobrazí čtyři sloupce čísel, která jsou uspořádaná náhodně a čísla v nich jdou různě za sebou. Pomocí tlačítek STOP pod sloupci musíš zadat správný čtyřmístný PIN, který sis předtím zapamatoval.", "Dostal ses k hlavním dveřím banky. Vedle nich svítí zabezpečený displej, který čeká na zadání čtyřmístného PINu. Bez správného kódu zůstanou dveře zavřené a dál se nedostaneš." });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IntroTaskSubtitle",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "IntroTaskText",
                table: "Rooms");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "IntroSubtitle", "IntroText" },
                values: new object[] { "Tvým úkolem je správně přesměrovat elektrickou energii v rozvaděči.", "Na panelu vidíš několik šipek, které jsou náhodně otočené. Kliknutím na šipku ji vždy otočíš o 90°.\r\nNež vyprší čas, musíš z těchto šipek vytvořit souvislou trasu od startu až do cíle.\r\n" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "IntroSubtitle", "IntroText" },
                values: new object[] { "Tvým úkolem je si zamapatovat světelnou kombinaci pro otevření dvěří", "Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Ty musíš sekvenci zopakovat klikáním na správná tlačítka." });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "IntroSubtitle", "IntroText" },
                values: new object[] { "Tvým úkolem je rychle opsat text výše zobrazený pro vypnutí kamer", "Pokoušíš nabourat do interního systému banky. Na obrazovce se objeví odpočet a několik kódů, které je nutné přesně opsat. Pokud se ti to nepovede tak příjdeš o pár peněz" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "IntroSubtitle", "IntroText", "IntroTitle" },
                values: new object[] { "Tvým úkolem je posouvat bankovky aby byly číselně seřazené", "Cílem je pomocí posouvání dlaždic seřadit bankovky do správného pořadí. Princip funguje stejně jako klasická „Patnáctka“.", "Našel jsi další box s penězi" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "IntroSubtitle", "IntroText" },
                values: new object[] { "Tvým úkolem je zastavit číslo na tom, které bylo zmíněné v dřívějších minihrách", "Na displeji běží několik sloupců s čísly 0–9, která se nepřetržitě posouvají shora dolů. Úkolem je kliknutím zastavit každý sloupec přesně na hodnotě, která je určena v cílové kombinaci." });
        }
    }
}
