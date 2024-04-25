using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vinyl_store.Migrations
{
    /// <inheritdoc />
    public partial class ChangeUserForOrders : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Order_UserID",
                table: "Order",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_User_UserID",
                table: "Order",
                column: "UserID",
                principalTable: "User",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_User_UserID",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_UserID",
                table: "Order");
        }
    }
}
