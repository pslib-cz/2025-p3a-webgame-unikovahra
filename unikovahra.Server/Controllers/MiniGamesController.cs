using Microsoft.AspNetCore.Mvc;
using unikovahra.Server.Data;

namespace unikovahra.Server.Controllers
{


    [ApiController]
    [Route("api/[controller]")]
    public class MiniGamesController : ControllerBase
    {

        private readonly AppDbContext _db;
        public MiniGamesController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet("room/{roomId}")]
        public IActionResult GetByRoom(int roomId)
        {
            var games = _db.MiniGames
                .Where(g => g.RoomId == roomId)
                .ToList();

            return Ok(games);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var game = _db.MiniGames.Find(id);
            if (game == null)
            {
                return NotFound();
            }
            return Ok(game);
        }


    }
}
