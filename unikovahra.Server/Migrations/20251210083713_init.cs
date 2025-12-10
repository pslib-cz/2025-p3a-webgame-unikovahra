using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace unikovahra.Server.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MiniGames",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoomId = table.Column<int>(type: "INTEGER", nullable: false),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MiniGames", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Order = table.Column<int>(type: "INTEGER", nullable: false),
                    IntroTitle = table.Column<string>(type: "TEXT", nullable: false),
                    IntroSubtitle = table.Column<string>(type: "TEXT", nullable: false),
                    IntroText = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StoryNodes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Header = table.Column<string>(type: "TEXT", nullable: false),
                    Text = table.Column<string>(type: "TEXT", nullable: false),
                    OptionA = table.Column<string>(type: "TEXT", nullable: true),
                    NextA = table.Column<int>(type: "INTEGER", nullable: true),
                    OptionB = table.Column<string>(type: "TEXT", nullable: true),
                    NextB = table.Column<int>(type: "INTEGER", nullable: true),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StoryNodes", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "MiniGames",
                columns: new[] { "Id", "Description", "RoomId", "Title" },
                values: new object[,]
                {
                    { 1, "První minihra", 1, "Elektrický rozvaděč – Směřování energie" },
                    { 2, "Druhá minihra", 2, "Světelná kombinace – Otevření dveří" },
                    { 3, "Třetí minihra", 3, "Bankovní systém - Hackovací kódy" },
                    { 4, "Čtvrtá minihra", 4, "Dolarová kombinace - Logická skládačka" },
                    { 5, "Pátá minihra", 5, "Zamykací panel - Zastavení čísel" }
                });

            migrationBuilder.InsertData(
                table: "Rooms",
                columns: new[] { "Id", "ImageUrl", "IntroSubtitle", "IntroText", "IntroTitle", "Order" },
                values: new object[,]
                {
                    { 1, "/images/room1.jpg", "Tvým úkolem je správně přesměrovat elektrickou energii v rozvaděči.", "Na panelu vidíš několik šipek, které jsou náhodně otočené. Kliknutím na šipku ji vždy otočíš o 90°.\r\nNež vyprší čas, musíš z těchto šipek vytvořit souvislou trasu od startu až do cíle.\r\n", "Nefunguje proud! Zprav to!", 1 },
                    { 2, "/images/room2.jpg", "Tvým úkolem je si zamapatovat světelnou kombinaci pro otevření dvěří", "Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Ty musíš sekvenci zopakovat klikáním na správná tlačítka.", "Teď se musíš dostat do kanclu", 2 },
                    { 3, "/images/room3.jpg", "Tvým úkolem je rychle opsat text výše zobrazený pro vypnutí kamer", "Pokoušíš nabourat do interního systému banky. Na obrazovce se objeví odpočet a několik kódů, které je nutné přesně opsat. Pokud se ti to nepovede tak příjdeš o pár peněz", "Vypni kamery! Rychle!", 3 },
                    { 4, "/images/room4.jpg", "Tvým úkolem je posouvat bankovky aby byly číselně seřazené", "Cílem je pomocí posouvání dlaždic seřadit bankovky do správného pořadí. Princip funguje stejně jako klasická „Patnáctka“.", "Našel jsi další box s penězi", 4 },
                    { 5, "/images/room5.jpg", "Tvým úkolem je zastavit číslo na tom, které bylo zmíněné v dřívějších minihrách", "Na displeji běží několik sloupců s čísly 0–9, která se nepřetržitě posouvají shora dolů. Úkolem je kliknutím zastavit každý sloupec přesně na hodnotě, která je určena v cílové kombinaci.", "Odemkni dveře a zdrhej!", 5 }
                });

            migrationBuilder.InsertData(
                table: "StoryNodes",
                columns: new[] { "Id", "Header", "ImageUrl", "NextA", "NextB", "OptionA", "OptionB", "Text" },
                values: new object[,]
                {
                    { 1, "Únik z trezoru", "/images/img6.jpg", 2, 3, "Vzít tašku s nářadím", "Hledat vypínač sirény", "Siréna řve pronikavým, nekonečným tónem. Červené světlo bliká v pravidelných intervalech a vrhá po stěnách trezoru roztřesené stíny. Hlava bolí. Paměť se vrací pomalu.\r\nDostal ses dovnitř, teď jsi uvnitř hlavního trezoru banky. Vloupání mělo být rychlé, čisté a bezhlučné, jako vystřižené z filmu. Něco se však strašlivě pokazilo." },
                    { 2, "Stín a taška", "/images/scene1.jpg", 4, 5, "Šokovou pistoli", "Radiovou rušičku", "Konečně jsi u tašky, plné tvého specializovaného nářadí. Rychle ji prohrabuješ. V tom zaslechneš tiché, pravidelné kroky přicházející z chodby, přímo k masivním dveřím trezoru. Musíš se rozhodnout a jednat. Už se nejedná jen o tiché proniknutí, ale o přímou konfrontaci nebo únik. Co vytáhneš z tašky, abys získal kritickou výhodu?" },
                    { 3, "Hledání blokace", "/images/scene1.jpg", 5, 4, "Použít hák a lano", "Vylézt po schránkách", "Prohledáváš studené kovové stěny trezoru a horečně hledáš nouzové ovládání, které by mohlo sirénu umlčet. Nad sebou, vysoko u stropu, konečně spatříš malou, nenápadnou skříňku s nápisem EMERGENCY OVERRIDE. Dostaneš se k ní jen stěží. Je to tvoje poslední šance, než dorazí ochranka." },
                    { 4, "Setkání v temnotě", "/images/scene1.jpg", 7, 6, "Zaútočit ve tmě", "Aktivovat oslňujicí přístroj", "Ať už jsi vylezl na schránky, nebo vytáhl pistoli, nastalo rychlé vypnutí světel. Dveře trezoru se s hlasitým zasyčením otevírají jen na škvíru, ale pak se zaseknou. Jsi v hluboké, dezorientující tmě. Cítíš, že někdo je blízko, ale nevidíš nic. Je tu příliš horko. Slyšíš jen pomalé, těžké dýchání před sebou. Máš v kapse přístroj, který by mohl vydat oslňující záblesk." },
                    { 5, "Panika a pečetění", "/images/scene1.jpg", 6, 7, "Podklouznout pod dveřmi", "Schovat se mezi penězi", "Tvůj poslední manévr (ať už rušička, nebo hák) spustil sekundární bezpečnostní protokol. Celý trezor se začal \r\ns ohlušujícím rachotem otřásat a dveře se začaly zvenčí  automaticky zavírat. Systém tě považuje za hrozbu a snaží se trezor zapečetit. Máš jen milisekundy na to, abys reagoval, než se masivní ocelová deska plně zasune." },
                    { 6, "Chycen!", "/images/scene1.jpg", 1, null, "Restart", null, "Ať už jsi proklouzl, nebo aktivoval přístroj, bylo pozdě. Světla se prudce rozsvítila a kolem tebe okamžitě stojí tým bankovní ostrahy. Cítíš, jak ti jeden z nich chytil ruku a na zápěstích ti zacvakla studená pouta. Tvoje dobrodružství končí. Systém zvítězil.\r\n\r\nMisi se nepovedlo dokončit." },
                    { 7, "Tma v trezoru", "/images/scene1.jpg", null, null, "Začít sbírat", null, "Tvůj zoufalý pokus selhal. S ohlušujícím kovovým ŽUCH zapadla poslední západka a dveře se zaseknuly. Siréna umlkla. Červené nouzové světlo přestalo blikat, což přineslo totální, absolutní tmu.\r\n\r\nNikdo tě nevidí. Nikdo tě neruší. Máš teď nečekaně všechno ticho a soukromí světa, abys splnil to, pro co jsi přišel. Sáhneš pro chladné, čisté bankovky a začínáš je vkládat do tašky." }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MiniGames");

            migrationBuilder.DropTable(
                name: "Rooms");

            migrationBuilder.DropTable(
                name: "StoryNodes");
        }
    }
}
