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
                    ImageUrl = "/images/scene1.jpg"
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
                    ImageUrl = "/images/scene1.jpg"
                },
                new StoryNode
                {
                    Id = 3,
                    Header = "Hledání blokace",
                    Text = "Prohledáváš studené kovové stěny trezoru a horečně hledáš nouzové ovládání, které by mohlo sirénu umlčet. Nad sebou, vysoko u stropu, konečně spatříš malou, nenápadnou skříňku s nápisem EMERGENCY OVERRIDE. Dostaneš se k ní jen stěží. Je to tvoje poslední šance, než dorazí ochranka.",
                    OptionA = "Použít hák a lano",
                    NextA = 5,
                    OptionB = "Vylézt po schránkách",
                    NextB = 4,
                    ImageUrl = "/images/scene1.jpg"
                },
                new StoryNode
                {
                    Id = 4,
                    Header = "Setkání v temnotě",
                    Text = "Ať už jsi vylezl na schránky, nebo vytáhl pistoli, nastalo rychlé vypnutí světel. Dveře trezoru se s hlasitým zasyčením otevírají jen na škvíru, ale pak se zaseknou. Jsi v hluboké, dezorientující tmě. Cítíš, že někdo je blízko, ale nevidíš nic. Je tu příliš horko. Slyšíš jen pomalé, těžké dýchání před sebou. Máš v kapse přístroj, který by mohl vydat oslňující záblesk.",
                    OptionA = "Zaútočit ve tmě",
                    NextA = 7,
                    OptionB = "Aktivovat oslňujicí přístroj",
                    NextB = 6,
                    ImageUrl = "/images/scene1.jpg"
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
                    ImageUrl = "/images/scene1.jpg"
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
                    ImageUrl = "/images/scene1.jpg"
                },
                new StoryNode
                {
                    Id = 6,
                    Header = "Tma v trezoru",
                    Text = "Tvůj zoufalý pokus selhal. S ohlušujícím kovovým ŽUCH zapadla poslední západka a dveře se zaseknuly. Siréna umlkla. Červené nouzové světlo přestalo blikat, což přineslo totální, absolutní tmu.\r\n\r\nNikdo tě nevidí. Nikdo tě neruší. Máš teď nečekaně všechno ticho a soukromí světa, abys splnil to, pro co jsi přišel. Sáhneš pro chladné, čisté bankovky a začínáš je vkládat do tašky.",
                    OptionA = "Začít sbírat",
                    NextA = null,
                    OptionB = null,
                    NextB = null,
                    ImageUrl = "/images/scene1.jpg"
                }



            );
        }
    }
}
