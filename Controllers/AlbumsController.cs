using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace vinyl_store.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly VinylStoreContext _context;

        public AlbumsController(VinylStoreContext context)
        {
            _context = context;
        }

        // GET: api/<AlbumsController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Album>>> Get()
        {
            return await _context.Albums.ToListAsync();
        }

        // GET api/<AlbumsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> Get(int id)
        {
            var album = await _context.Albums.FindAsync(id);

            if (album == null)
            {
                return NotFound();
            }

            return album;
        }

        // POST api/<AlbumsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AlbumsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AlbumsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
