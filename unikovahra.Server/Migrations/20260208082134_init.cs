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
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    SuccessTitle = table.Column<string>(type: "TEXT", nullable: false),
                    SuccessSubtitle = table.Column<string>(type: "TEXT", nullable: false),
                    SuccessText = table.Column<string>(type: "TEXT", nullable: false),
                    FailureTitle = table.Column<string>(type: "TEXT", nullable: false),
                    FailureSubtitle = table.Column<string>(type: "TEXT", nullable: false),
                    FailureText = table.Column<string>(type: "TEXT", nullable: false)
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
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    IntroTaskSubtitle = table.Column<string>(type: "TEXT", nullable: false),
                    IntroTaskText = table.Column<string>(type: "TEXT", nullable: false)
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
                columns: new[] { "Id", "Description", "FailureSubtitle", "FailureText", "FailureTitle", "RoomId", "SuccessSubtitle", "SuccessText", "SuccessTitle", "Title" },
                values: new object[,]
                {
                    { 1, "První minihra", "Čas <span class='marked--failure'> vypršel </span> a systém selhal", "Nepodařilo se ti úkol dokončit včas. Čas vypršel, než ses stihl správně propojit všechny šipky a vytvořit souvislou trasu od startu do cíle. Nouzový okruh zůstal neaktivní, rozvaděč zůstal tichý a trezorové dveře zůstávají zamčené. Systém vyhodnotil neúspěch a všechny pokusy selhaly.\r\nTvá chyba má následky. Můžeš se pokusit minihru zahrát znovu, ale část tvých peněz bude odečtena jako pokuta za neúspěch, nebo se rozhodnout misi ukončit a opustit budovu bez dalšího postupu.", "Proud <span class='marked--failure'> nezprovozněn </span>", 1, "Dveře se odblokovaly – máš volný <span class='marked'> průchod </span>", "Zbývá jen pár vteřin do vypršení času, když přesměruješ poslední směr na panelu. Celým nouzovým okruhem konečně proběhne plný proud. Rozvaděč hlasitě zavrčí a studená tma je náhle rozčíslena ostrým nouzovým světlem. Proud je zpět! Systém reaguje, mechanika se v trezorových dveřích uvolní a ty máš cestu ven volnou.", "Proud <span class='marked'> Obnoven! </span>", "<span class='marked'> Elektrický rozvaděč </span> – Směřování energie" },
                    { 2, "Druhá minihra", "Dveře zůstávají <span class='marked--failure'> zamčené </span> a systém nereaguje", "Nepodařilo se ti dokončit sekvenci včas. Čas vypršel, než ses stihl trefit do všech správných tlačítek, nebo jsi omylem klikl na několik nesprávných tlačítek vedle. Mřížka zůstala neaktivní, elektronická pojistka se nezměnila a dveře do kanceláře ředitele zůstávají pevně zamčené. Systém vyhodnotil neúspěch a úkol nebyl splněn.\r\nNásledky jsou jasné: můžeš se pokusit minihru znovu zahrát, ale část tvých peněz bude odečtena, nebo se rozhodnout misi ukončit a vzdát další postup.", "Kombinace <span class='marked--failure'> selhala </span>", 2, "Dveře <span class='marked'> odblokovány </span> – vstup do kanceláře volný", "Soustředěně dýcháš a dokončuješ poslední, nejdelší sekvenci. Tvé prsty se pohybují s přesností. Jakmile stiskneš poslední tlačítko správně, celá mřížka zazáří jasným, triumfálním zeleným světlem. Slyšíš tiché cvaknutí. Elektronická pojistka se uvolnila! Dveře do kanceláře ředitele se odemkly. Cesta k dalšímu, nezbytnému úkolu pro tvůj únik je volná.", "Kombinace zadána <span class='marked'> úspěšně! </span>", "<span class='marked'> Světelná kombinace </span> – Otevření dveří" },
                    { 3, "Třetí minihra", "Kamery stále <span class='marked--failure'> aktivní </span>", "Nepodařilo se ti dokončit úkol včas. Čas vypršel, než ses stihl přesně opsat všechny blikající kódy, nebo jsi během přepisování udělal chybu. Obraz na kamerách zůstal aktivní a kontrolky signalizují, že sledování stále běží. Alarm se zatím nespustil, ale pokud se pokusíš odejít, kamery tě zachytí a alarm se spustí.\r\nTvá situace má následky: můžeš se pokusit minihru znovu zahrát, ale část tvých peněz bude odečtena, nebo se rozhodnout misi ukončit a vzdát další postup.", "Nepodařilo se <span class='marked--failure'> deaktivovat </span> kamery", 3, "Čistý průchod <span class='marked'> zajištěn </span>", "Zvládl jsi to perfektně. Poslední kód jsi opsal včas a systém ho okamžitě potvrdil. Odpočet zmizel, obraz na kamerách zčernal a kontrolky signalizují úplné vypnutí sledování. Žádný alarm, žádné komplikace. Cesta ven je teď bezpečná a kamery už ti stát v cestě nebudou.", "Kamery <span class='marked'> deaktivovány </span>", "<span class='marked'> Bankovní systém </span> - Hackovací kódy" },
                    { 4, "Čtvrtá minihra", "Ověření <span class='marked--failure'> selhalo </span>", "Dodatečné ověření se nepodařilo dokončit. Systém tvou identitu nepotvrdil a použití hlavního PINu bylo zablokováno. Bez tohoto PINu zůstávají hlavní dveře banky uzamčené a není možné pokračovat dál v tvé misi.\r\nDůsledky jsou jasné: můžeš se pokusit minihru znovu zahrát a opravit svůj neúspěch, nebo se rozhodnout vzdát celou misi a ukončit postup.", "PIN <span class='marked--failure'> nebyl </span> rozluštěn", 4, "Přístup <span class='marked'> potvrzen </span>", "Dodatečné ověření proběhlo úspěšně a systém potvrdil tvou identitu. Použití hlavního PINu k odemčení hlavních dveří banky bylo povoleno. Zapamatuj si tento PIN, budeš ho potřebovat při dalším kroku, protože bez něj se hlavní dveře neotevřou a v postupu nebude možné pokračovat.", "PIN <span class='marked'> získán! </span>", "<span class='marked'> Číselná kombinace </span> - Logická skládačka" },
                    { 5, "Pátá minihra", "<span class='marked--failure'> Nedokázal </span> si správně zastavit čísla", "S napětím sleduješ rotující číslice, ale jedna ze čtyř se zastavuje na nesprávné hodnotě. Stačí jediná chyba a bezpečnostní mechanismus se okamžitě zablokuje. Buď ses v jedné z číslic netrefil, nebo čas vypršel dřív, než jsi stihl kombinaci správně zadat. Hlavní dveře zůstávají pevně zamčené a tvůj pokus o únik selhal.\r\n\r\nNyní stojíš před rozhodnutím, jak dál pokračovat. Můžeš se pokusit minihru zopakovat, i když tě to bude stát část peněz, nebo misi ukončit a vzdát se jí.", "Únik selhal – Dveře zůstávají <span class='marked--failure'> zamčené </span>", 5, "Gratulujeme k <span class='marked'> úspěšnému </span> úniku z banky!", "S napětím sleduješ, jak se poslední číslice zastavuje přesně na správné hodnotě. Jakmile všechny sloupce ukazují cílovou kombinaci, ozve se tiché cvaknutí. Hlavní dveře se pomalu otevírají, odhalující cestu ven do svobody. Únik je dokončen! S úlevou a triumfem opouštíš budovu, vědom si toho, že jsi úspěšně zvládl všechny výzvy a unikl bez povšimnutí.", "Dveře odemčeny – Únik <span class='marked'> úspěšný! </span>", "<span class='marked'> Zamykací panel </span> - Zastavení čísel" }
                });

            migrationBuilder.InsertData(
                table: "Rooms",
                columns: new[] { "Id", "ImageUrl", "IntroSubtitle", "IntroTaskSubtitle", "IntroTaskText", "IntroText", "IntroTitle", "Order" },
                values: new object[,]
                {
                    { 1, "/images/minigame1.webp", "Kritická chyba v <span class='marked'> Systému </span> Napájení.", "Tvůj <span class='marked'> úkol: </span>", "Na panelu vidíš několik šipek, které jsou náhodně otočené. Kliknutím na šipku ji vždy otočíš o 90°.\r\nNež vyprší čas, musíš z těchto šipek vytvořit souvislou trasu od startu až do cíle.", "Trezor je v hluboké tmě a ty si uvědomíš, že proud nefunguje. Ten je nutný pro otevření dveří. Musíš rychle obnovit napájení. Najdeš nouzový rozvaděč s odpočtem (60 sekund) \r\na odpojeným kabelem. Energie sice je, ale neteče.", "Nefunguje proud! <span class='marked'> Zprav to! </span>", 1 },
                    { 2, "/images/minigame2.webp", "Vstup do <span class='marked'> Kanceláře </span>", "Tvůj <span class='marked'> úkol: </span>", "Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Ty si musíš sekvenci zapamatovat a následně ji zopakovat klikáním na správná tlačítka.", "Proud je sice zpět, ale dveře do kanceláře ředitele se neotevřou. Zůstávají zablokované finální, čistě elektronickou pojistkou. Musíš se dostat do kanceláře, protože tam na tebe čeká další úkol, který je nezbytný pro tvůj únik z banky. Na ovládacím panelu vedle dveří se objeví výzva.", "Teď se musíš dostat do <span class='marked'> kanclu </span>", 2 },
                    { 3, "/images/minigame3.webp", "Kamery blokují <span class='marked'> cestu </span>", "Tvůj <span class='marked'> úkol: </span>", "Na monitoru se spustí krátký odpočet a pod ním se objeví blikající kódy, které musíš rychle a přesně opsat, než čas vyprší. Úspěšné dokončení ti zajistí nejen vypnutí kamer, ale \r\ni získání důležitého PINu, který budeš potřebovat pro další postup.", "Jsi uvnitř kanceláře, východ z banky je odemčený, ale na monitoru vyskočí varování. Kamery nad východem jsou stále aktivní, pokud projdeš kolem tak tě okamžitě zachytí. Na obrazovce se objeví úkol, který musíš splnit jinak se spustí alarm.", "Vypni kamery! <span class='marked'> Rychle! </span>", 3 },
                    { 4, "/images/minigame4.webp", "Dodatečné <span class='marked'> ověření </span> pro hlavní PIN", "Tvůj <span class='marked'> úkol: </span>", "Na obrazovce se objeví mřížka s rozházenými číslami. Tvým cílem je pomocí posouvání jednotlivých čtverců na monitoru seřadit čísla do správného číselného pořadí. Funguje to jako klasická 'Patnáctka': můžeš přesouvat vždy jen jeden dílek který sousedí s prázdným místem.", "Po zadání velkého množství kódů systém vyhodnotil, že je nutné provést dodatečné ověření, aby ti umožnil použít hlavní PIN k odemčení hlavních dveří banky. Na monitoru se proto objeví nová výzva, která má potvrdit, že jsi oprávněný pokračovat dál.", "Získej <span class='marked'> PIN </span>", 4 },
                    { 5, "/images/minigame5.webp", "Poslední <span class='marked'> překážka </span>", "Tvůj <span class='marked'> úkol: </span>", "Na displeji se zobrazí čtyři sloupce čísel, která jsou uspořádaná náhodně a čísla v nich jdou různě za sebou. Pomocí tlačítek STOP pod sloupci musíš zadat správný čtyřmístný PIN, který sis předtím zapamatoval.", "Dostal ses k hlavním dveřím banky. Vedle nich svítí zabezpečený displej, který čeká na zadání čtyřmístného PINu. Bez správného kódu zůstanou dveře zavřené a dál se nedostaneš.", "<span class='marked'> Odemkni </span> dveře a zdrhej!", 5 }
                });

            migrationBuilder.InsertData(
                table: "StoryNodes",
                columns: new[] { "Id", "Header", "ImageUrl", "NextA", "NextB", "OptionA", "OptionB", "Text" },
                values: new object[,]
                {
                    { 1, "Únik z trezoru", "/images/gamebook1.webp", 2, 3, "Vzít tašku s nářadím", "Hledat vypínač sirény", "Siréna řve pronikavým, nekonečným tónem. Červené světlo bliká v pravidelných intervalech a vrhá po stěnách trezoru roztřesené stíny. Hlava bolí. Paměť se vrací pomalu.\r\nDostal ses dovnitř, teď jsi uvnitř hlavního trezoru banky. Vloupání mělo být rychlé, čisté a bezhlučné, jako vystřižené z filmu. Něco se však strašlivě pokazilo." },
                    { 2, "Stín a taška", "/images/gamebook2.webp", 4, 5, "Šokovou pistoli", "Radiovou rušičku", "Konečně jsi u tašky, plné tvého specializovaného nářadí. Rychle ji prohrabuješ. V tom zaslechneš tiché, pravidelné kroky přicházející z chodby, přímo k masivním dveřím trezoru. Musíš se rozhodnout a jednat. Už se nejedná jen o tiché proniknutí, ale o přímou konfrontaci nebo únik. Co vytáhneš z tašky, abys získal kritickou výhodu?" },
                    { 3, "Hledání blokace", "/images/gamebook3.webp", 5, 4, "Použít hák a lano", "Vylézt na skříňku", "Prohledáváš studené kovové stěny trezoru a horečně hledáš nouzové ovládání, které by mohlo sirénu umlčet. Nad sebou, vysoko u stropu, konečně spatříš malou, nenápadnou skříňku s nápisem EMERGENCY OVERRIDE. Dostaneš se k ní jen stěží. Je to tvoje poslední šance, než dorazí ochranka." },
                    { 4, "Setkání v temnotě", "/images/gamebook4.webp", 7, 6, "Zaútočit ve tmě", "Aktivovat oslňujicí přístroj", "Ať už jsi vylezl na skříňku, nebo vytáhl pistoli, nastalo rychlé vypnutí světel. Dveře trezoru se s hlasitým zasyčením otevírají jen na škvíru, ale pak se zaseknou. Jsi v hluboké, dezorientující tmě. Cítíš, že někdo je blízko, ale nevidíš nic. Je tu příliš horko. Slyšíš jen pomalé, těžké dýchání před sebou. Máš v kapse přístroj, který by mohl vydat oslňující záblesk." },
                    { 5, "Panika a pečetění", "/images/gamebook5.webp", 6, 7, "Podklouznout pod dveřmi", "Schovat se mezi penězi", "Tvůj poslední manévr (ať už rušička, nebo hák) spustil sekundární bezpečnostní protokol. Celý trezor se začal \r\ns ohlušujícím rachotem otřásat a dveře se začaly zvenčí  automaticky zavírat. Systém tě považuje za hrozbu a snaží se trezor zapečetit. Máš jen milisekundy na to, abys reagoval, než se masivní ocelová deska plně zasune." },
                    { 6, "Chycen!", "/images/gamebook6.webp", 1, null, "Restart", null, "Ať už jsi proklouzl, nebo aktivoval přístroj, bylo pozdě. Světla se prudce rozsvítila a kolem tebe okamžitě stojí tým bankovní ostrahy. Cítíš, jak ti jeden z nich chytil ruku a na zápěstích ti zacvakla studená pouta. Tvoje dobrodružství končí. Systém zvítězil.\r\n\r\nMisi se nepovedlo dokončit." },
                    { 7, "Tma v trezoru", "/images/gamebook7.webp", null, null, "Začít sbírat", null, "Tvůj zoufalý pokus selhal. S ohlušujícím kovovým ŽUCH zapadla poslední západka a dveře se zaseknuly. Siréna umlkla. Proud vypadl a červené nouzové světlo přestalo blikat, což přineslo totální, absolutní tmu.\r\n\r\nNikdo tě nevidí. Nikdo tě neruší. Máš teď nečekaně všechno ticho a soukromí světa, abys splnil to, pro co jsi přišel. Sáhneš pro chladné, čisté bankovky a začínáš je vkládat do tašky." }
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
