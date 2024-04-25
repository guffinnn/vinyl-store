using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vinyl_store.Migrations
{
    /// <inheritdoc />
    public partial class AddOrdersData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrderID",
                table: "Album",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    OrderID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.OrderID);
                });

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Album_Order_OrderID",
                table: "Album");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Album_OrderID",
                table: "Album");

            migrationBuilder.DropColumn(
                name: "OrderID",
                table: "Album");
        }
    }
}
