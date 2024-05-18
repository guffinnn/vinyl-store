using System.ComponentModel.DataAnnotations.Schema;

namespace vinyl_store
{
    [Table("Like")]
    public class Like
    {
        public int LikeID { get; set; }
        public int UserID { get; set; }
        public int AlbumID { get; set; }
        public DateTime AddedAt { get; set; }
    }

}