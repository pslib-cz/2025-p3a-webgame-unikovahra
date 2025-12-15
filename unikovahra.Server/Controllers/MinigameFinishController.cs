using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using unikovahra.Server.Data;

namespace unikovahra.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MinigameFinishController : ControllerBase
    {
        private readonly AppDbContext _db;

        public MinigameFinishController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet("room/{roomId}")]
        public async Task<IActionResult> GetByRoom(int roomId)
        {
            var finishes = await _db.MinigameFinishes
                .Where(f => f.RoomId == roomId)
                .ToListAsync();

            return Ok(finishes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var finish = await _db.MinigameFinishes.FindAsync(id);
            if (finish == null)
            {
                return NotFound();
            }
            return Ok(finish);
        }
    }
}