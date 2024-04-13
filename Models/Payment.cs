using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace vinyl_store
{
    [Table("Payment")]
    public class Payment
    {
        [Key]
        public int CardID { get; set; }
        public string UserID { get; set; }
        public string? Number { get; set; }
        public string? Expiry { get; set; }
        public int CVV { get; set; }
        public string? Initials { get; set; }
    }
}
