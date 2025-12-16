using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace unikovahra.Server.Migrations
{
    /// <inheritdoc />
    public partial class dbtext : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Čas <span className='marked--failure'> vypršel </span> a systém selhal", "Proud <span className='marked--failure'> nezprovozněn </span>", "Dveře se odblokovaly – máš volný <span className='marked'> průchod </span>", "Proud <span className='marked'> Obnoven! </span>", "<span className='marked'> Elektrický rozvaděč </span> – Směřování energie" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Dveře zůstávají <span className='marked--failure'> zamčené </span> a systém nereaguje", "Kombinace <span className='marked--failure'> selhala </span>", "Dveře <span className='marked'> odblokovány </span> – vstup do kanceláře volný", "Kombinace zadána <span className='marked'> úspěšně! </span>", "<span className='marked'> Světelná kombinace </span> – Otevření dveří" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Kamery stále <span className='marked--failure'> aktivní </span>", "Nepodařilo se <span className='marked--failure'> deaktivovat </span> kamery", "Čistý průchod <span className='marked'> zajištěn </span>", "Kamery <span className='marked'> deaktivovány </span>", "<span className='marked'> Bankovní systém </span> - Hackovací kódy" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Ověření <span className='marked--failure'> selhalo </span>", "PIN <span className='marked--failure'> nebyl </span> rozluštěn", "Přístup <span className='marked'> potvrzen </span>", "PIN <span className='marked'> získán! </span>", "<span className='marked'> Číselná kombinace </span> - Logická skládačka" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "FailureSubtitle", "FailureText", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "<span className='marked--failure'> Nedokázal </span> si správně zastavit čísla", "S napětím sleduješ rotující číslice, ale jedna ze čtyř se zastavuje na nesprávné hodnotě. Stačí jediná chyba a bezpečnostní mechanismus se okamžitě zablokuje. Buď ses v jedné z číslic netrefil, nebo čas vypršel dřív, než jsi stihl kombinaci správně zadat. Hlavní dveře zůstávají pevně zamčené a tvůj pokus o únik selhal.\r\n\r\nNyní stojíš před rozhodnutím, jak dál pokračovat. Můžeš se pokusit minihru zopakovat, i když tě to bude stát část peněz, nebo misi ukončit a vzdát se jí.", "Únik selhal – Dveře zůstávají <span className='marked--failure'> zamčené </span>", "Gratulujeme k <span className='marked'> úspěšnému </span> úniku z banky!", "Dveře odemčeny – Únik <span className='marked'> úspěšný! </span>", "<span className='marked'> Zamykací panel </span> - Zastavení čísel" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Kritická chyba v <span className='marked'> Systému </span> Napájení.", "Tvůj <span className='marked'> úkol: </span>", "Nefunguje proud! <span className='marked'> Zprav to! </span>" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Vstup do <span className='marked'> Kanceláře </span>", "Tvůj <span className='marked'> úkol: </span>", "Teď se musíš dostat do <span className='marked'> kanclu </span>" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Kamery blokují <span className='marked'> cestu </span>", "Tvůj <span className='marked'> úkol: </span>", "Vypni kamery! <span className='marked'> Rychle! </span>" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Dodatečné <span className='marked'> ověření </span> pro hlavní PIN", "Tvůj <span className='marked'> úkol: </span>", "Získej <span className='marked'> PIN </span>" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Poslední <span className='marked'> překážka </span>", "Tvůj <span className='marked'> úkol: </span>", "<span className='marked'> Odemkni </span> dveře a zdrhej!" });

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 3,
                column: "OptionB",
                value: "Vylézt na skříňku");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 4,
                column: "Text",
                value: "Ať už jsi vylezl na skříňku, nebo vytáhl pistoli, nastalo rychlé vypnutí světel. Dveře trezoru se s hlasitým zasyčením otevírají jen na škvíru, ale pak se zaseknou. Jsi v hluboké, dezorientující tmě. Cítíš, že někdo je blízko, ale nevidíš nic. Je tu příliš horko. Slyšíš jen pomalé, těžké dýchání před sebou. Máš v kapse přístroj, který by mohl vydat oslňující záblesk.");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 7,
                column: "Text",
                value: "Tvůj zoufalý pokus selhal. S ohlušujícím kovovým ŽUCH zapadla poslední západka a dveře se zaseknuly. Siréna umlkla. Proud vypadl a červené nouzové světlo přestalo blikat, což přineslo totální, absolutní tmu.\r\n\r\nNikdo tě nevidí. Nikdo tě neruší. Máš teď nečekaně všechno ticho a soukromí světa, abys splnil to, pro co jsi přišel. Sáhneš pro chladné, čisté bankovky a začínáš je vkládat do tašky.");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Čas vypršel a systém selhal", "Proud nezprovozněn", "Dveře se odblokovaly – máš volný průchod", "Proud Obnoven!", "Elektrický rozvaděč – Směřování energie" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Dveře zůstávají zamčené a systém nereaguje", "Kombinace selhala", "Dveře odblokovány – vstup do kanceláře volný", "Kombinace zadána úspěšně!", "Světelná kombinace – Otevření dveří" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Kamery stále aktivní", "Nepodařilo se deaktivovat kamery", "Čistý průchod zajištěn", "Kamery deaktivovány", "Bankovní systém - Hackovací kódy" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Ověření selhalo", "PIN nebyl rozluštěn", "Přístup potvrzen", "PIN získán!", "Dolarová kombinace - Logická skládačka" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "FailureSubtitle", "FailureText", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Bohužel jsi nedokázal správně zastavit čísla včas", "S napětím sleduješ, jak se poslední číslice zastavuje, ale bohužel ne na správné hodnotě. Čas vypršel dříve, než ses stihl trefit do všech správných čísel, nebo jsi udělal příliš mnoho chyb při jejich zastavování. Hlavní dveře zůstávají pevně zamčené a tvůj pokus o únik selhal.\r\nNyní stojíš před rozhodnutím, jak dál pokračovat. Můžeš se pokusit minihru zopakovat, i když tě to bude stát část peněz, nebo ukončit misi a vzdát se mise.", "Únik selhal – Dveře zůstávají zamčené", "Gratulujeme k úspěšnému úniku z banky!", "Dveře odemčeny – Únik úspěšný!", "Zamykací panel - Zastavení čísel" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Kritická chyba v Systému Napájení.", "Tvůj úkol:", "Nefunguje proud! Zprav to!" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Vstup do Kanceláře", "Tvůj úkol:", "Teď se musíš dostat do kanclu" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Kamery blokují cestu", "Tvůj úkol:", "Vypni kamery! Rychle!" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Dodatečné ověření pro hlavní PIN", "Tvůj úkol:", "Získej PIN" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Poslední překážka", "Tvůj úkol:", "Odemkni dveře a zdrhej!" });

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 3,
                column: "OptionB",
                value: "Vylézt po schránkách");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 4,
                column: "Text",
                value: "Ať už jsi vylezl na schránky, nebo vytáhl pistoli, nastalo rychlé vypnutí světel. Dveře trezoru se s hlasitým zasyčením otevírají jen na škvíru, ale pak se zaseknou. Jsi v hluboké, dezorientující tmě. Cítíš, že někdo je blízko, ale nevidíš nic. Je tu příliš horko. Slyšíš jen pomalé, těžké dýchání před sebou. Máš v kapse přístroj, který by mohl vydat oslňující záblesk.");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 7,
                column: "Text",
                value: "Tvůj zoufalý pokus selhal. S ohlušujícím kovovým ŽUCH zapadla poslední západka a dveře se zaseknuly. Siréna umlkla. Červené nouzové světlo přestalo blikat, což přineslo totální, absolutní tmu.\r\n\r\nNikdo tě nevidí. Nikdo tě neruší. Máš teď nečekaně všechno ticho a soukromí světa, abys splnil to, pro co jsi přišel. Sáhneš pro chladné, čisté bankovky a začínáš je vkládat do tašky.");
        }
    }
}
