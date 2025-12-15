using Microsoft.AspNetCore.Mvc;
using unikovahra.Server.Data;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> GetByRoom(int roomId)
        {
            var games = await _db.MiniGames
                .Where(g => g.RoomId == roomId)
                .ToListAsync();

            return Ok(games);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var game = await _db.MiniGames.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }
            return Ok(game);
        }


    }
}
