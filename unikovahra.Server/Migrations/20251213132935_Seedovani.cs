using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace unikovahra.Server.Migrations
{
    /// <inheritdoc />
    public partial class Seedovani : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MinigameFinishes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoomId = table.Column<int>(type: "INTEGER", nullable: false),
                    SuccessTitle = table.Column<string>(type: "TEXT", nullable: false),
                    SuccessSubtitle = table.Column<string>(type: "TEXT", nullable: false),
                    SuccessText = table.Column<string>(type: "TEXT", nullable: false),
                    FailureTitle = table.Column<string>(type: "TEXT", nullable: false),
                    FailureSubtitle = table.Column<string>(type: "TEXT", nullable: false),
                    FailureText = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MinigameFinishes", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "MinigameFinishes",
                columns: new[] { "Id", "FailureSubtitle", "FailureText", "FailureTitle", "RoomId", "SuccessSubtitle", "SuccessText", "SuccessTitle" },
                values: new object[,]
                {
                    { 1, "Čas vypršel a systém selhal", "Nepodařilo se ti úkol dokončit včas. Čas vypršel, než ses stihl správně propojit všechny šipky a vytvořit souvislou trasu od startu do cíle. Nouzový okruh zůstal neaktivní, rozvaděč zůstal tichý a trezorové dveře zůstávají zamčené. Systém vyhodnotil neúspěch a všechny pokusy selhaly.\r\nTvá chyba má následky. Můžeš se pokusit minihru zahrát znovu, ale část tvých peněz bude odečtena jako pokuta za neúspěch, nebo se rozhodnout misi ukončit a opustit budovu bez dalšího postupu.", "Proud nezprovozněn", 1, "Dveře se odblokovaly – máš volný průchod", "Zbývá jen pár vteřin do vypršení času, když přesměruješ poslední směr na panelu. Celým nouzovým okruhem konečně proběhne plný proud. Rozvaděč hlasitě zavrčí a studená tma je náhle rozčíslena ostrým nouzovým světlem. Proud je zpět! Systém reaguje, mechanika se v trezorových dveřích uvolní a ty máš cestu ven volnou.", "Proud Obnoven!" },
                    { 2, "Dveře zůstávají zamčené a systém nereaguje", "Nepodařilo se ti dokončit sekvenci včas. Čas vypršel, než ses stihl trefit do všech správných tlačítek, nebo jsi omylem klikl na několik nesprávných tlačítek vedle. Mřížka zůstala neaktivní, elektronická pojistka se nezměnila a dveře do kanceláře ředitele zůstávají pevně zamčené. Systém vyhodnotil neúspěch a úkol nebyl splněn.\r\nNásledky jsou jasné: můžeš se pokusit minihru znovu zahrát, ale část tvých peněz bude odečtena, nebo se rozhodnout misi ukončit a vzdát další postup.", "Kombinace selhala", 2, "Dveře odblokovány – vstup do kanceláře volný", "Soustředěně dýcháš a dokončuješ poslední, nejdelší sekvenci. Tvé prsty se pohybují s přesností. Jakmile stiskneš poslední tlačítko správně, celá mřížka zazáří jasným, triumfálním zeleným světlem. Slyšíš tiché cvaknutí. Elektronická pojistka se uvolnila! Dveře do kanceláře ředitele se odemkly. Cesta k dalšímu, nezbytnému úkolu pro tvůj únik je volná.", "Kombinace zadána úspěšně!" },
                    { 3, "Kamery stále aktivní", "Nepodařilo se ti dokončit úkol včas. Čas vypršel, než ses stihl přesně opsat všechny blikající kódy, nebo jsi během přepisování udělal chybu. Obraz na kamerách zůstal aktivní a kontrolky signalizují, že sledování stále běží. Alarm se zatím nespustil, ale pokud se pokusíš odejít, kamery tě zachytí a alarm se spustí.\r\nTvá situace má následky: můžeš se pokusit minihru znovu zahrát, ale část tvých peněz bude odečtena, nebo se rozhodnout misi ukončit a vzdát další postup.", "Nepodařilo se deaktivovat kamery", 3, "Čistý průchod zajištěn", "Zvládl jsi to perfektně. Poslední kód jsi opsal včas a systém ho okamžitě potvrdil. Odpočet zmizel, obraz na kamerách zčernal a kontrolky signalizují úplné vypnutí sledování. Žádný alarm, žádné komplikace. Cesta ven je teď bezpečná a kamery už ti stát v cestě nebudou.", "Kamery deaktivovány" },
                    { 4, "Ověření selhalo", "Dodatečné ověření se nepodařilo dokončit. Systém tvou identitu nepotvrdil a použití hlavního PINu bylo zablokováno. Bez tohoto PINu zůstávají hlavní dveře banky uzamčené a není možné pokračovat dál v tvé misi.\r\nDůsledky jsou jasné: můžeš se pokusit minihru znovu zahrát a opravit svůj neúspěch, nebo se rozhodnout vzdát celou misi a ukončit postup.", "PIN nebyl rozluštěn", 4, "Přístup potvrzen", "Dodatečné ověření proběhlo úspěšně a systém potvrdil tvou identitu. Použití hlavního PINu k odemčení hlavních dveří banky bylo povoleno. Zapamatuj si tento PIN, budeš ho potřebovat při dalším kroku, protože bez něj se hlavní dveře neotevřou a v postupu nebude možné pokračovat.", "PIN získán!" },
                    { 5, "Bohužel jsi nedokázal správně zastavit čísla včas", "S napětím sleduješ, jak se poslední číslice zastavuje, ale bohužel ne na správné hodnotě. Čas vypršel dříve, než ses stihl trefit do všech správných čísel, nebo jsi udělal příliš mnoho chyb při jejich zastavování. Hlavní dveře zůstávají pevně zamčené a tvůj pokus o únik selhal.\r\nNyní stojíš před rozhodnutím, jak dál pokračovat. Můžeš se pokusit minihru zopakovat, i když tě to bude stát část peněz, nebo ukončit misi a vzdát se mise.", "Únik selhal – Dveře zůstávají zamčené", 5, "Gratulujeme k úspěšnému úniku z banky!", "S napětím sleduješ, jak se poslední číslice zastavuje přesně na správné hodnotě. Jakmile všechny sloupce ukazují cílovou kombinaci, ozve se tiché cvaknutí. Hlavní dveře se pomalu otevírají, odhalující cestu ven do svobody. Únik je dokončen! S úlevou a triumfem opouštíš budovu, vědom si toho, že jsi úspěšně zvládl všechny výzvy a unikl bez povšimnutí.", "Dveře odemčeny – Únik úspěšný!" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MinigameFinishes");
        }
    }
}
