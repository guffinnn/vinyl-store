using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vinyl_store.Migrations
{
    /// <inheritdoc />
    public partial class DeleteAlbumList : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderAlbum");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrderAlbum",
                columns: table => new
                {
                    OrderAlbumID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AlbumID = table.Column<int>(type: "int", nullable: false),
                    OrderID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderAlbum", x => x.OrderAlbumID);
                    table.ForeignKey(
                        name: "FK_OrderAlbum_Album_AlbumID",
                        column: x => x.AlbumID,
                        principalTable: "Album",
                        principalColumn: "AlbumID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderAlbum_Order_OrderID",
                        column: x => x.OrderID,
                        principalTable: "Order",
                        principalColumn: "OrderID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderAlbum_AlbumID",
                table: "OrderAlbum",
                column: "AlbumID");

            migrationBuilder.CreateIndex(
                name: "IX_OrderAlbum_OrderID",
                table: "OrderAlbum",
                column: "OrderID");
        }
    }
}
