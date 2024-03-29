﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace vinyl_store
{
    public class VinylStoreContext : DbContext
    {
        public VinylStoreContext(DbContextOptions<VinylStoreContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("DefaultConnection");
            }
        }

        public DbSet<Album> Albums { get; set; }
    }

    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<VinylStoreContext>
    {
        public VinylStoreContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            var builder = new DbContextOptionsBuilder<VinylStoreContext>();
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            builder.UseSqlServer(connectionString);
            return new VinylStoreContext(builder.Options);
        }
    }
}
