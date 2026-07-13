namespace WebApplication2.Data;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options)
        : base(options)
    {
    }
    public DbSet<Item> items { get; set; }
}
