using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using unikovahra.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
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

// Ensure database and seed data exist
using (var scope = app.Services.CreateScope())
{
    try
    {
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        
        // Use EnsureCreated for simpler database initialization
        // This creates the database and seeds data if it doesn't exist
        db.Database.EnsureCreated();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Database initialization warning: {ex.Message}");
    }
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


//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html").Add(static builder =>
{
    ((RouteEndpointBuilder)builder).Order = int.MaxValue;
});

app.Run();
