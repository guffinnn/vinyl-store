using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vinyl_store.Migrations
{
    /// <inheritdoc />
    public partial class ChangeOrdersStructure : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Album_Order_OrderID",
                table: "Album");

            migrationBuilder.DropIndex(
                name: "IX_Album_OrderID",
                table: "Album");

            migrationBuilder.DropColumn(
                name: "OrderID",
                table: "Album");

            migrationBuilder.AlterColumn<int>(
                name: "UserID",
                table: "Order",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "OrderAlbum",
                columns: table => new
                {
                    OrderAlbumID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderID = table.Column<int>(type: "int", nullable: false),
                    AlbumID = table.Column<int>(type: "int", nullable: false)
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderAlbum");

            migrationBuilder.AlterColumn<string>(
                name: "UserID",
                table: "Order",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "OrderID",
                table: "Album",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Album_OrderID",
                table: "Album",
                column: "OrderID");

            migrationBuilder.AddForeignKey(
                name: "FK_Album_Order_OrderID",
                table: "Album",
                column: "OrderID",
                principalTable: "Order",
                principalColumn: "OrderID");
        }
    }
}
