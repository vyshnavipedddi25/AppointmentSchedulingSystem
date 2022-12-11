using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSchedule2911.Migrations
{
    public partial class v125 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Uid",
                table: "Appointment");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Appointment",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Appointment");

            migrationBuilder.AddColumn<int>(
                name: "Uid",
                table: "Appointment",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
