using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using unikovahra.Server.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

var allowedOrigins =
    builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>()
    ?? new[]
    {
        "http://localhost:5173",
        "https://localhost:5173",
        "http://localhost:5174",
        "https://localhost:5174"
    };


builder.Services.AddCors(options =>
{
    options.AddPolicy("DevCors", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Ensure database directory exists
var dbPath = builder.Configuration.GetConnectionString("DefaultConnection");
if (dbPath != null && dbPath.Contains("Data Source="))
{
    var dataSource = dbPath.Replace("Data Source=", "").Split(';')[0];
    var directory = Path.GetDirectoryName(dataSource);
    if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
    {
        Directory.CreateDirectory(directory);
    }
}

// Apply migrations on startup
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}


app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseStaticFiles();
app.UseRouting();
app.UseCors("DevCors");
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html").Add(static builder =>
{
    ((RouteEndpointBuilder)builder).Order = int.MaxValue;
});

app.Run();
