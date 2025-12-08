using Microsoft.AspNetCore.Mvc;
using unikovahra.Server.Data;

namespace unikovahra.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoryController : ControllerBase
    {
        private readonly AppDbContext _db;

        public StoryController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet("{id}")]
        public IActionResult GetNode(int id)
        {
            var node = _db.StoryNodes.Find(id);
            if (node == null)
                return NotFound();
            return Ok(node);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_db.StoryNodes.ToList());
        }
    }
}
