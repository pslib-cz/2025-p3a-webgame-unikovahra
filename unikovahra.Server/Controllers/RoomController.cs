using Microsoft.AspNetCore.Mvc;
using unikovahra.Server.Data;

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
        public IActionResult GetAll()
        {
            var rooms = _db.Rooms
                .OrderBy(r => r.Order)
                .ToList();
            return Ok(rooms);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var room = _db.Rooms.Find(id);
            if (room == null)
            {
                return NotFound();
            }
            return Ok(room);
        }




    }
}
