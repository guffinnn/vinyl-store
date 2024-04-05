using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vinyl_store;

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

        // GET: api/Albums
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Album>>> GetAlbums()
        {
            return await _context.Albums.ToListAsync();
        }

        // GET: api/Albums/Test
        [HttpGet("Test")]
        public async Task<ActionResult<IEnumerable<Album>>> TestGetAlbums()
        {
            var albums = await _context.Albums.ToListAsync();

            if (albums == null || !albums.Any())
            {
                return NotFound("No albums found in the database.");
            }

            foreach (var album in albums)
            {
                Console.WriteLine($"AlbumID: {album.AlbumID}, Name: {album.Name}, Artist: {album.Artist}, Year: {album.Year}, Genre: {album.Genre}, SpotifyID: {album.SpotifyID}, Price: {album.Price}, Image: {album.Image}");
            }

            return Ok(albums);
        }


        // GET: api/Albums/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> GetAlbum(int id)
        {
          if (_context.Albums == null)
          {
              return NotFound();
          }
            var album = await _context.Albums.FindAsync(id);

            if (album == null)
            {
                return NotFound();
            }

            return album;
        }

        // PUT: api/Albums/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlbum(int id, Album album)
        {
            if (id != album.AlbumID)
            {
                return BadRequest();
            }

            _context.Entry(album).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlbumExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Albums
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Album>> PostAlbum(Album album)
        {
          if (_context.Albums == null)
          {
              return Problem("Entity set 'VinylStoreContext.Albums'  is null.");
          }
            _context.Albums.Add(album);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAlbum", new { id = album.AlbumID }, album);
        }

        // DELETE: api/Albums/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlbum(int id)
        {
            if (_context.Albums == null)
            {
                return NotFound();
            }
            var album = await _context.Albums.FindAsync(id);
            if (album == null)
            {
                return NotFound();
            }

            _context.Albums.Remove(album);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AlbumExists(int id)
        {
            return (_context.Albums?.Any(e => e.AlbumID == id)).GetValueOrDefault();
        }
    }
}
