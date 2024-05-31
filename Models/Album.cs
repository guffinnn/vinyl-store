using System.ComponentModel.DataAnnotations.Schema;

namespace vinyl_store
{
    [Table("Album")]
    public class Album
    {
        public int AlbumID { get; set; }
        public string? Name { get; set; }
        public string? Artist { get; set; }
        public int Year { get; set; }
        public string? Genre { get; set; }
        public string? SpotifyID { get; set; }
        public double Price { get; set; }
        public string? Image { get; set; }
    }
}