using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSchedule2911.Migrations
{
    public partial class v123 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Appointment");

            migrationBuilder.AddColumn<int>(
                name: "RegisterUid",
                table: "Appointment",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Uid",
                table: "Appointment",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Appointment_RegisterUid",
                table: "Appointment",
                column: "RegisterUid");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointment_Register_RegisterUid",
                table: "Appointment",
                column: "RegisterUid",
                principalTable: "Register",
                principalColumn: "Uid",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointment_Register_RegisterUid",
                table: "Appointment");

            migrationBuilder.DropIndex(
                name: "IX_Appointment_RegisterUid",
                table: "Appointment");

            migrationBuilder.DropColumn(
                name: "RegisterUid",
                table: "Appointment");

            migrationBuilder.DropColumn(
                name: "Uid",
                table: "Appointment");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Appointment",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
