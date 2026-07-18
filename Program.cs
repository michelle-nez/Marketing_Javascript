var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles(new StaticFileOptions { ServeUnknownFileTypes = true, DefaultContentType = "text/html" });

app.Run();
