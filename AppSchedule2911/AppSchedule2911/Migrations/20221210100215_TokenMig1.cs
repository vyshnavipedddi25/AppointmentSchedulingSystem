using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSchedule2911.Migrations
{
    public partial class TokenMig1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Token",
                table: "AdminRegister",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Token",
                table: "AdminRegister");
        }
    }
}
