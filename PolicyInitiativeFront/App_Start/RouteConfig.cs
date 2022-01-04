using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace PolicyInitiativeFront
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
            name: "sitemap",
            url: "GoogleSiteMap",
            defaults: new { controller = "GoogleSitemap", action = "CreateSitemapXml", id = UrlParameter.Optional, }
            );
            routes.MapRoute(
            name: "tags",
            url: "search/tags",
            defaults: new { controller = "search", action = "Index" }
            );
            routes.MapRoute(
            name: "search",
            url: "search/results",
            defaults: new { controller = "search", action = "search" }
            );
            routes.MapRoute(
           name: "podcasts",
           url: "podcast/details/{id}/{title}",
           defaults: new { controller = "article", action = "podcast", id = UrlParameter.Optional, title = UrlParameter.Optional }
           );
            routes.MapRoute(
          name: "data",
          url: "data/details/{id}/{title}",
          defaults: new { controller = "article", action = "data", id = UrlParameter.Optional, title = UrlParameter.Optional }
           );
            routes.MapRoute(
            name: "video",
            url: "video/details/{id}/{title}",
            defaults: new { controller = "article", action = "video", id = UrlParameter.Optional, title = UrlParameter.Optional }
             );
            routes.MapRoute(
            name: "articles",
            url: "article/details/{id}/{title}",
            defaults: new { controller = "article", action = "Index", id = UrlParameter.Optional, title = UrlParameter.Optional }
            );

            routes.MapRoute(
               name: "initiativesdetails",
               url: "initiatives/details/{id}/{title}",
               defaults: new { controller = "initiatives", action = "details", id = UrlParameter.Optional, title = UrlParameter.Optional }
           );
            routes.MapRoute(
                name: "Home",
                url: "",
                defaults: new {  controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
            name: "Default",
            url: "{controller}/{action}/{id}",
            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
        );
        }
    }
}
