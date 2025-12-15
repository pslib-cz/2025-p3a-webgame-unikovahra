using Microsoft.AspNetCore.Mvc;
using unikovahra.Server.Data;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> GetNode(int id)
        {
            var node = await _db.StoryNodes.FindAsync(id);
            if (node == null)
                return NotFound();
            return Ok(node);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _db.StoryNodes.FindAsync());
        }
    }
}
