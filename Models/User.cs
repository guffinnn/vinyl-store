using System.ComponentModel.DataAnnotations.Schema;

namespace vinyl_store
{
    [Table("User")]
    public class User
    {
        public int UserID { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
