using Microsoft.EntityFrameworkCore;
using unikovahra.Server.Models;

namespace unikovahra.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<StoryNode> StoryNodes { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<MiniGame> MiniGames { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);



            modelBuilder.Entity<StoryNode>().HasData(
                new StoryNode
                {
                    Id = 1,
                    Header = "Únik z trezoru",
                    Text = "Siréna řve pronikavým, nekonečným tónem. Červené světlo bliká v pravidelných intervalech a vrhá po stěnách trezoru roztřesené stíny. Hlava bolí. Paměť se vrací pomalu.\r\nDostal ses dovnitř, teď jsi uvnitř hlavního trezoru banky. Vloupání mělo být rychlé, čisté a bezhlučné, jako vystřižené z filmu. Něco se však strašlivě pokazilo.",
                    OptionA = "Vzít tašku s nářadím",
                    NextA = 2,
                    OptionB = "Hledat vypínač sirény",
                    NextB = 3,
                    ImageUrl = "/images/gamebook1.jpg"
                },
                new StoryNode
                {
                    Id = 2,
                    Header = "Stín a taška",
                    Text = "Konečně jsi u tašky, plné tvého specializovaného nářadí. Rychle ji prohrabuješ. V tom zaslechneš tiché, pravidelné kroky přicházející z chodby, přímo k masivním dveřím trezoru. Musíš se rozhodnout a jednat. Už se nejedná jen o tiché proniknutí, ale o přímou konfrontaci nebo únik. Co vytáhneš z tašky, abys získal kritickou výhodu?",
                    OptionA = "Šokovou pistoli",
                    NextA = 4,
                    OptionB = "Radiovou rušičku",
                    NextB = 5,
                    ImageUrl = "/images/gamebook2.jpg"
                },
                new StoryNode
                {
                    Id = 3,
                    Header = "Hledání blokace",
                    Text = "Prohledáváš studené kovové stěny trezoru a horečně hledáš nouzové ovládání, které by mohlo sirénu umlčet. Nad sebou, vysoko u stropu, konečně spatříš malou, nenápadnou skříňku s nápisem EMERGENCY OVERRIDE. Dostaneš se k ní jen stěží. Je to tvoje poslední šance, než dorazí ochranka.",
                    OptionA = "Použít hák a lano",
                    NextA = 5,
                    OptionB = "Vylézt na skříňku",
                    NextB = 4,
                    ImageUrl = "/images/gamebook3.jpg"
                },
                new StoryNode
                {
                    Id = 4,
                    Header = "Setkání v temnotě",
                    Text = "Ať už jsi vylezl na skříňku, nebo vytáhl pistoli, nastalo rychlé vypnutí světel. Dveře trezoru se s hlasitým zasyčením otevírají jen na škvíru, ale pak se zaseknou. Jsi v hluboké, dezorientující tmě. Cítíš, že někdo je blízko, ale nevidíš nic. Je tu příliš horko. Slyšíš jen pomalé, těžké dýchání před sebou. Máš v kapse přístroj, který by mohl vydat oslňující záblesk.",
                    OptionA = "Zaútočit ve tmě",
                    NextA = 7,
                    OptionB = "Aktivovat oslňujicí přístroj",
                    NextB = 6,
                    ImageUrl = "/images/gamebook4.jpg"
                },
                new StoryNode
                {
                    Id = 5,
                    Header = "Panika a pečetění",
                    Text = "Tvůj poslední manévr (ať už rušička, nebo hák) spustil sekundární bezpečnostní protokol. Celý trezor se začal \r\ns ohlušujícím rachotem otřásat a dveře se začaly zvenčí  automaticky zavírat. Systém tě považuje za hrozbu a snaží se trezor zapečetit. Máš jen milisekundy na to, abys reagoval, než se masivní ocelová deska plně zasune.",
                    OptionA = "Podklouznout pod dveřmi",
                    NextA = 6,
                    OptionB = "Schovat se mezi penězi",
                    NextB = 7,
                    ImageUrl = "/images/gamebook5.jpg"
                },
                new StoryNode
                {
                    Id = 6,
                    Header = "Chycen!",
                    Text = "Ať už jsi proklouzl, nebo aktivoval přístroj, bylo pozdě. Světla se prudce rozsvítila a kolem tebe okamžitě stojí tým bankovní ostrahy. Cítíš, jak ti jeden z nich chytil ruku a na zápěstích ti zacvakla studená pouta. Tvoje dobrodružství končí. Systém zvítězil.\r\n\r\nMisi se nepovedlo dokončit.",
                    OptionA = "Restart",
                    NextA = 1,
                    OptionB = null,
                    NextB = null,
                    ImageUrl = "/images/gamebook6.jpg"
                },
                new StoryNode
                {
                    Id = 7,
                    Header = "Tma v trezoru",
                    Text = "Tvůj zoufalý pokus selhal. S ohlušujícím kovovým ŽUCH zapadla poslední západka a dveře se zaseknuly. Siréna umlkla. Proud vypadl a červené nouzové světlo přestalo blikat, což přineslo totální, absolutní tmu.\r\n\r\nNikdo tě nevidí. Nikdo tě neruší. Máš teď nečekaně všechno ticho a soukromí světa, abys splnil to, pro co jsi přišel. Sáhneš pro chladné, čisté bankovky a začínáš je vkládat do tašky.",
                    OptionA = "Začít sbírat",
                    NextA = null,
                    OptionB = null,
                    NextB = null,
                    ImageUrl = "/images/gamebook7.jpg"
                }
            );

            modelBuilder.Entity<Room>().HasData(
                new Room
                {
                    Id = 1,
                    Order = 1,
                    IntroTitle = "Nefunguje proud! <span className='marked'> Zprav to! </span>",
                    IntroSubtitle = "Kritická chyba v <span className='marked'> Systému </span> Napájení.",
                    IntroText = "Trezor je v hluboké tmě a ty si uvědomíš, že proud nefunguje. Ten je nutný pro otevření dveří. Musíš rychle obnovit napájení. Najdeš nouzový rozvaděč s odpočtem (60 sekund) \r\na odpojeným kabelem. Energie sice je, ale neteče.",
                    ImageUrl = "/images/minigame1.jpg",
                    IntroTaskSubtitle = "Tvůj <span className='marked'> úkol: </span>",
                    IntroTaskText = "Na panelu vidíš několik šipek, které jsou náhodně otočené. Kliknutím na šipku ji vždy otočíš o 90°.\r\nNež vyprší čas, musíš z těchto šipek vytvořit souvislou trasu od startu až do cíle."
                },
                new Room
                {
                    Id = 2,
                    Order = 2,
                    IntroTitle = "Teď se musíš dostat do <span className='marked'> kanclu </span>",
                    IntroSubtitle = "Vstup do <span className='marked'> Kanceláře </span>",
                    IntroText = "Proud je sice zpět, ale dveře do kanceláře ředitele se neotevřou. Zůstávají zablokované finální, čistě elektronickou pojistkou. Musíš se dostat do kanceláře, protože tam na tebe čeká další úkol, který je nezbytný pro tvůj únik z banky. Na ovládacím panelu vedle dveří se objeví výzva.",
                    ImageUrl = "/images/minigame2.jpg",
                    IntroTaskSubtitle = "Tvůj <span className='marked'> úkol: </span>",
                    IntroTaskText = "Na displeji se objeví mřížka tlačítek, která se v náhodném pořadí rozsvěcí. Ty si musíš sekvenci zapamtovat a následně ji zopakovat klikáním na správná tlačítka."
                },
                new Room
                {
                    Id = 3,
                    Order = 3,
                    IntroTitle = "Vypni kamery! <span className='marked'> Rychle! </span>",
                    IntroSubtitle = "Kamery blokují <span className='marked'> cestu </span>",
                    IntroText = "Jsi uvnitř kanceláře, východ z banky je odemčený, ale na monitoru vyskočí varování. Kamery nad východem jsou stále aktivní, pokud projdeš kolem tak tě okamžitě zachytí. Na obrazovce se objeví úkol, který musíš splnit jinak se spustí alarm.",
                    ImageUrl = "/images/minigame3.jpg",
                    IntroTaskSubtitle = "Tvůj <span className='marked'> úkol: </span>",
                    IntroTaskText = "Na monitoru se spustí krátký odpočet a pod ním se objeví blikající kódy, které musíš rychle a přesně opsat, než čas vyprší. Úspěšné dokončení ti zajistí nejen vypnutí kamer, ale \r\ni získání důležitého PINu, který budeš potřebovat pro další postup."
                },
                new Room
                {
                    Id = 4,
                    Order = 4,
                    IntroTitle = "Získej <span className='marked'> PIN </span>",
                    IntroSubtitle = "Dodatečné <span className='marked'> ověření </span> pro hlavní PIN",
                    IntroText = "Po zadání velkého množství kódů systém vyhodnotil, že je nutné provést dodatečné ověření, aby ti umožnil použít hlavní PIN k odemčení hlavních dveří banky. Na monitoru se proto objeví nová výzva, která má potvrdit, že jsi oprávněný pokračovat dál.",
                    ImageUrl = "/images/minigame4.jpg",
                    IntroTaskSubtitle = "Tvůj <span className='marked'> úkol: </span>",
                    IntroTaskText = "Na obrazovce se objeví mřížka s rozházenými číslami. Tvým cílem je pomocí posouvání jednotlivých čtverců na monitoru seřadit čísla do správného číselného pořadí. Funguje to jako klasická „Patnáctka“: můžeš přesouvat vždy jen jeden dílek, který sousedí s prázdným místem."
                },
                new Room
                {
                    Id = 5,
                    Order = 5,
                    IntroTitle = "<span className='marked'> Odemkni </span> dveře a zdrhej!",
                    IntroSubtitle = "Poslední <span className='marked'> překážka </span>",
                    IntroText = "Dostal ses k hlavním dveřím banky. Vedle nich svítí zabezpečený displej, který čeká na zadání čtyřmístného PINu. Bez správného kódu zůstanou dveře zavřené a dál se nedostaneš.",
                    ImageUrl = "/images/minigame5.jpg",
                    IntroTaskSubtitle = "Tvůj <span className='marked'> úkol: </span>",
                    IntroTaskText = "Na displeji se zobrazí čtyři sloupce čísel, která jsou uspořádaná náhodně a čísla v nich jdou různě za sebou. Pomocí tlačítek STOP pod sloupci musíš zadat správný čtyřmístný PIN, který sis předtím zapamatoval."
                }
            );
            modelBuilder.Entity<MiniGame>().HasData(
                new MiniGame
                {
                    Id = 1,
                    RoomId = 1,
                    Title = "<span className='marked'> Elektrický rozvaděč </span> – Směřování energie",
                    Description = "První minihra",
                    SuccessTitle = "Proud <span className='marked'> Obnoven! </span>",
                    SuccessSubtitle = "Dveře se odblokovaly – máš volný <span className='marked'> průchod </span>",
                    SuccessText = "Zbývá jen pár vteřin do vypršení času, když přesměruješ poslední směr na panelu. Celým nouzovým okruhem konečně proběhne plný proud. Rozvaděč hlasitě zavrčí a studená tma je náhle rozčíslena ostrým nouzovým světlem. Proud je zpět! Systém reaguje, mechanika se v trezorových dveřích uvolní a ty máš cestu ven volnou.",
                    FailureTitle = "Proud <span className='marked--failure'> nezprovozněn </span>",
                    FailureSubtitle = "Čas <span className='marked--failure'> vypršel </span> a systém selhal",
                    FailureText = "Nepodařilo se ti úkol dokončit včas. Čas vypršel, než ses stihl správně propojit všechny šipky a vytvořit souvislou trasu od startu do cíle. Nouzový okruh zůstal neaktivní, rozvaděč zůstal tichý a trezorové dveře zůstávají zamčené. Systém vyhodnotil neúspěch a všechny pokusy selhaly.\r\nTvá chyba má následky. Můžeš se pokusit minihru zahrát znovu, ale část tvých peněz bude odečtena jako pokuta za neúspěch, nebo se rozhodnout misi ukončit a opustit budovu bez dalšího postupu."
                },
                new MiniGame
                {
                    Id = 2,
                    RoomId = 2,
                    Title = "<span className='marked'> Světelná kombinace </span> – Otevření dveří",
                    Description = "Druhá minihra",
                    SuccessTitle = "Kombinace zadána <span className='marked'> úspěšně! </span>",
                    SuccessSubtitle = "Dveře <span className='marked'> odblokovány </span> – vstup do kanceláře volný",
                    SuccessText = "Soustředěně dýcháš a dokončuješ poslední, nejdelší sekvenci. Tvé prsty se pohybují s přesností. Jakmile stiskneš poslední tlačítko správně, celá mřížka zazáří jasným, triumfálním zeleným světlem. Slyšíš tiché cvaknutí. Elektronická pojistka se uvolnila! Dveře do kanceláře ředitele se odemkly. Cesta k dalšímu, nezbytnému úkolu pro tvůj únik je volná.",
                    FailureTitle = "Kombinace <span className='marked--failure'> selhala </span>",
                    FailureSubtitle = "Dveře zůstávají <span className='marked--failure'> zamčené </span> a systém nereaguje",
                    FailureText = "Nepodařilo se ti dokončit sekvenci včas. Čas vypršel, než ses stihl trefit do všech správných tlačítek, nebo jsi omylem klikl na několik nesprávných tlačítek vedle. Mřížka zůstala neaktivní, elektronická pojistka se nezměnila a dveře do kanceláře ředitele zůstávají pevně zamčené. Systém vyhodnotil neúspěch a úkol nebyl splněn.\r\nNásledky jsou jasné: můžeš se pokusit minihru znovu zahrát, ale část tvých peněz bude odečtena, nebo se rozhodnout misi ukončit a vzdát další postup."
                },
                new MiniGame
                {
                    Id = 3,
                    RoomId = 3,
                    Title = "<span className='marked'> Bankovní systém </span> - Hackovací kódy",
                    Description = "Třetí minihra",
                    SuccessTitle = "Kamery <span className='marked'> deaktivovány </span>",
                    SuccessSubtitle = "Čistý průchod <span className='marked'> zajištěn </span>",
                    SuccessText = "Zvládl jsi to perfektně. Poslední kód jsi opsal včas a systém ho okamžitě potvrdil. Odpočet zmizel, obraz na kamerách zčernal a kontrolky signalizují úplné vypnutí sledování. Žádný alarm, žádné komplikace. Cesta ven je teď bezpečná a kamery už ti stát v cestě nebudou.",
                    FailureTitle = "Nepodařilo se <span className='marked--failure'> deaktivovat </span> kamery",
                    FailureSubtitle = "Kamery stále <span className='marked--failure'> aktivní </span>",
                    FailureText = "Nepodařilo se ti dokončit úkol včas. Čas vypršel, než ses stihl přesně opsat všechny blikající kódy, nebo jsi během přepisování udělal chybu. Obraz na kamerách zůstal aktivní a kontrolky signalizují, že sledování stále běží. Alarm se zatím nespustil, ale pokud se pokusíš odejít, kamery tě zachytí a alarm se spustí.\r\nTvá situace má následky: můžeš se pokusit minihru znovu zahrát, ale část tvých peněz bude odečtena, nebo se rozhodnout misi ukončit a vzdát další postup."
                },
                new MiniGame
                {
                    Id = 4,
                    RoomId = 4,
                    Title = "<span className='marked'> Číselná kombinace </span> - Logická skládačka",
                    Description = "Čtvrtá minihra",
                    SuccessTitle = "PIN <span className='marked'> získán! </span>",
                    SuccessSubtitle = "Přístup <span className='marked'> potvrzen </span>",
                    SuccessText = "Dodatečné ověření proběhlo úspěšně a systém potvrdil tvou identitu. Použití hlavního PINu k odemčení hlavních dveří banky bylo povoleno. Zapamatuj si tento PIN, budeš ho potřebovat při dalším kroku, protože bez něj se hlavní dveře neotevřou a v postupu nebude možné pokračovat.",
                    FailureTitle = "PIN <span className='marked--failure'> nebyl </span> rozluštěn",
                    FailureSubtitle = "Ověření <span className='marked--failure'> selhalo </span>",
                    FailureText = "Dodatečné ověření se nepodařilo dokončit. Systém tvou identitu nepotvrdil a použití hlavního PINu bylo zablokováno. Bez tohoto PINu zůstávají hlavní dveře banky uzamčené a není možné pokračovat dál v tvé misi.\r\nDůsledky jsou jasné: můžeš se pokusit minihru znovu zahrát a opravit svůj neúspěch, nebo se rozhodnout vzdát celou misi a ukončit postup."
                },
                new MiniGame
                {
                    Id = 5,
                    RoomId = 5,
                    Title = "<span className='marked'> Zamykací panel </span> - Zastavení čísel",
                    Description = "Pátá minihra",
                    SuccessTitle = "Dveře odemčeny – Únik <span className='marked'> úspěšný! </span>",
                    SuccessSubtitle = "Gratulujeme k <span className='marked'> úspěšnému </span> úniku z banky!",
                    SuccessText = "S napětím sleduješ, jak se poslední číslice zastavuje přesně na správné hodnotě. Jakmile všechny sloupce ukazují cílovou kombinaci, ozve se tiché cvaknutí. Hlavní dveře se pomalu otevírají, odhalující cestu ven do svobody. Únik je dokončen! S úlevou a triumfem opouštíš budovu, vědom si toho, že jsi úspěšně zvládl všechny výzvy a unikl bez povšimnutí.",
                    FailureTitle = "Únik selhal – Dveře zůstávají <span className='marked--failure'> zamčené </span>",
                    FailureSubtitle = "<span className='marked--failure'> Nedokázal </span> si správně zastavit čísla",
                    FailureText = "S napětím sleduješ rotující číslice, ale jedna ze čtyř se zastavuje na nesprávné hodnotě. Stačí jediná chyba a bezpečnostní mechanismus se okamžitě zablokuje. Buď ses v jedné z číslic netrefil, nebo čas vypršel dřív, než jsi stihl kombinaci správně zadat. Hlavní dveře zůstávají pevně zamčené a tvůj pokus o únik selhal.\r\n\r\nNyní stojíš před rozhodnutím, jak dál pokračovat. Můžeš se pokusit minihru zopakovat, i když tě to bude stát část peněz, nebo misi ukončit a vzdát se jí."
                }
            );
        }
    }
}
