using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Portfolio2016.Startup))]
namespace Portfolio2016
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
