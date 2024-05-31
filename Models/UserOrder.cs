using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace vinyl_store
{
    [Table("UserOrder")]
    public class UserOrder
    {
        public int UserOrderID { get; set; }
        public int UserID { get; set; }
        public int OrderID { get; set; }
        public int AlbumID { get; set; }
    }
}