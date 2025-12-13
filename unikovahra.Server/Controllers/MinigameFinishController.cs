using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
        public IActionResult GetByRoom(int roomId)
        {
            var finishes = _db.MinigameFinishes
                .Where(f => f.RoomId == roomId)
                .ToList();

            return Ok(finishes);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var finish = _db.MinigameFinishes.Find(id);
            if (finish == null)
            {
                return NotFound();
            }
            return Ok(finish);
        }
    }
}