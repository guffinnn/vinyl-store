using System.ComponentModel.DataAnnotations.Schema;

namespace vinyl_store
{
    [Table("OrderAlbum")]
    public class OrderAlbum
    {
        public int OrderAlbumID { get; set; }

        public int OrderID { get; set; }
        public Order Order { get; set; }

        public int AlbumID { get; set; }
        public Album Album { get; set; }
    }
}