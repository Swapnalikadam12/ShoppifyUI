using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Shoppify
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
      // Web API configuration and services
      GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling =
          Newtonsoft.Json.ReferenceLoopHandling.Serialize;

      // config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
      config.Formatters.Remove(config.Formatters.XmlFormatter);

      //Enable Cors
      config.EnableCors(new EnableCorsAttribute("*", headers: "*", methods: "*"));
      // Web API routes
      config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
