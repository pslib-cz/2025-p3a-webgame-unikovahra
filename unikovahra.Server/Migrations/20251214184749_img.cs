using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace unikovahra.Server.Migrations
{
    /// <inheritdoc />
    public partial class img : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageUrl",
                value: "/images/minigame1.jpg");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageUrl",
                value: "/images/minigame2.jpg");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageUrl",
                value: "/images/minigame3.jpg");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageUrl",
                value: "/images/minigame4.jpg");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 5,
                column: "ImageUrl",
                value: "/images/minigame5.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageUrl",
                value: "/images/gamebook1.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageUrl",
                value: "/images/gamebook2.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageUrl",
                value: "/images/gamebook3.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageUrl",
                value: "/images/gamebook4.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 5,
                column: "ImageUrl",
                value: "/images/gamebook5.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 6,
                column: "ImageUrl",
                value: "/images/gamebook6.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageUrl",
                value: "/images/gamebook7.jpg");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageUrl",
                value: "/images/room1.jpg");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageUrl",
                value: "/images/room2.jpg");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageUrl",
                value: "/images/room3.jpg");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageUrl",
                value: "/images/room4.jpg");

            migrationBuilder.UpdateData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 5,
                column: "ImageUrl",
                value: "/images/room5.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageUrl",
                value: "/images/img6.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageUrl",
                value: "/images/scene1.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageUrl",
                value: "/images/scene1.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageUrl",
                value: "/images/scene1.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 5,
                column: "ImageUrl",
                value: "/images/scene1.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 6,
                column: "ImageUrl",
                value: "/images/scene1.jpg");

            migrationBuilder.UpdateData(
                table: "StoryNodes",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageUrl",
                value: "/images/scene1.jpg");
        }
    }
}
