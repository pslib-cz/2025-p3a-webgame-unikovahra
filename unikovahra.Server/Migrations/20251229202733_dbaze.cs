using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace unikovahra.Server.Migrations
{
    /// <inheritdoc />
    public partial class dbaze : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Čas <span class='marked--failure'> vypršel </span> a systém selhal", "Proud <span class='marked--failure'> nezprovozněn </span>", "Dveře se odblokovaly – máš volný <span class='marked'> průchod </span>", "Proud <span class='marked'> Obnoven! </span>", "<span class='marked'> Elektrický rozvaděč </span> – Směřování energie" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Dveře zůstávají <span class='marked--failure'> zamčené </span> a systém nereaguje", "Kombinace <span class='marked--failure'> selhala </span>", "Dveře <span class='marked'> odblokovány </span> – vstup do kanceláře volný", "Kombinace zadána <span class='marked'> úspěšně! </span>", "<span class='marked'> Světelná kombinace </span> – Otevření dveří" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Kamery stále <span class='marked--failure'> aktivní </span>", "Nepodařilo se <span class='marked--failure'> deaktivovat </span> kamery", "Čistý průchod <span class='marked'> zajištěn </span>", "Kamery <span class='marked'> deaktivovány </span>", "<span class='marked'> Bankovní systém </span> - Hackovací kódy" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "Ověření <span class='marked--failure'> selhalo </span>", "PIN <span class='marked--failure'> nebyl </span> rozluštěn", "Přístup <span class='marked'> potvrzen </span>", "PIN <span class='marked'> získán! </span>", "<span class='marked'> Číselná kombinace </span> - Logická skládačka" });

            migrationBuilder.UpdateData(
                table: "MiniGames",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "<span class='marked--failure'> Nedokázal </span> si správně zastavit čísla", "Únik selhal – Dveře zůstávají <span class='marked--failure'> zamčené </span>", "Gratulujeme k <span class='marked'> úspěšnému </span> úniku z banky!", "Dveře odemčeny – Únik <span class='marked'> úspěšný! </span>", "<span class='marked'> Zamykací panel </span> - Zastavení čísel" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Kritická chyba v <span class='marked'> Systému </span> Napájení.", "Tvůj <span class='marked'> úkol: </span>", "Nefunguje proud! <span class='marked'> Zprav to! </span>" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTaskText", "IntroTitle" },
                values: new object[] { "Vstup do <span class='marked'> Kanceláře </span>", "Tvůj <span class='marked'> úkol: </span>", "Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Ty si musíš sekvenci zapamatovat a následně ji zopakovat klikáním na správná tlačítka.", "Teď se musíš dostat do <span class='marked'> kanclu </span>" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Kamery blokují <span class='marked'> cestu </span>", "Tvůj <span class='marked'> úkol: </span>", "Vypni kamery! <span class='marked'> Rychle! </span>" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Dodatečné <span class='marked'> ověření </span> pro hlavní PIN", "Tvůj <span class='marked'> úkol: </span>", "Získej <span class='marked'> PIN </span>" });

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTitle" },
                values: new object[] { "Poslední <span class='marked'> překážka </span>", "Tvůj <span class='marked'> úkol: </span>", "<span class='marked'> Odemkni </span> dveře a zdrhej!" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                columns: new[] { "FailureSubtitle", "FailureTitle", "SuccessSubtitle", "SuccessTitle", "Title" },
                values: new object[] { "<span className='marked--failure'> Nedokázal </span> si správně zastavit čísla", "Únik selhal – Dveře zůstávají <span className='marked--failure'> zamčené </span>", "Gratulujeme k <span className='marked'> úspěšnému </span> úniku z banky!", "Dveře odemčeny – Únik <span className='marked'> úspěšný! </span>", "<span className='marked'> Zamykací panel </span> - Zastavení čísel" });

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
                columns: new[] { "IntroSubtitle", "IntroTaskSubtitle", "IntroTaskText", "IntroTitle" },
                values: new object[] { "Vstup do <span className='marked'> Kanceláře </span>", "Tvůj <span className='marked'> úkol: </span>", "Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Ty si musíš sekvenci zapamtovat a následně ji zopakovat klikáním na správná tlačítka.", "Teď se musíš dostat do <span className='marked'> kanclu </span>" });

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
        }
    }
}
