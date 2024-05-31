using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vinyl_store.Migrations
{
    /// <inheritdoc />
    public partial class AddOrderAlbumDTO : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_OrderAlbum_OrderID",
                table: "OrderAlbum",
                column: "OrderID");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderAlbum_Order_OrderID",
                table: "OrderAlbum",
                column: "OrderID",
                principalTable: "Order",
                principalColumn: "OrderID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderAlbum_Order_OrderID",
                table: "OrderAlbum");

            migrationBuilder.DropIndex(
                name: "IX_OrderAlbum_OrderID",
                table: "OrderAlbum");
        }
    }
}
