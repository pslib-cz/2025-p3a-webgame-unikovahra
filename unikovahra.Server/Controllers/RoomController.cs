using Microsoft.AspNetCore.Mvc;
using unikovahra.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace unikovahra.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoomController : ControllerBase
    {
        private readonly AppDbContext _db;

        public RoomController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var rooms = await _db.Rooms
                .OrderBy(r => r.Order)
                .ToListAsync();
            return Ok(rooms);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var room = await _db.Rooms.FindAsync(id);
            if (room == null)
            {
                return NotFound();
            }
            return Ok(room);
        }




    }
}
