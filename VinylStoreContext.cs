using Microsoft.EntityFrameworkCore;
using vinyl_store;

public class VinylStoreContext : DbContext
{
    public VinylStoreContext(DbContextOptions<VinylStoreContext> options) : base(options)
    {
        
    }

    public DbSet<Album> Albums { get; set; }
}
