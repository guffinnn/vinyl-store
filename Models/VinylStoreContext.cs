﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using vinyl_store;

namespace vinyl_store
{
    public class VinylStoreContext : DbContext
    {
        public VinylStoreContext(DbContextOptions<VinylStoreContext> options) : base(options)
        {

        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<UserOrder> UserOrders { get; set; }
        public DbSet<Like> Likes { get; set; }
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
