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
    public class OrderAlbumsController : ControllerBase
    {
        private readonly VinylStoreContext _context;

        public OrderAlbumsController(VinylStoreContext context)
        {
            _context = context;
        }

        // POST: api/OrderAlbums
        [HttpPost]
        public async Task<ActionResult<OrderAlbum>> PostOrderAlbum(OrderAlbum orderAlbum)
        {
            _context.OrderAlbum.Add(orderAlbum);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrderAlbum", new { id = orderAlbum.OrderAlbumID }, orderAlbum);
        }

        // Other methods for GET, PUT, DELETE, etc.
    }
}

