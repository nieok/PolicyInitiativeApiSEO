using PolicyInitiativeFront.Controllers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Security.Authentication;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace PolicyInitiativeFront
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        //protected void Application_Error(object sender, EventArgs e)
        //{
        //    System.Diagnostics.Trace.WriteLine("Enter - Application_Error");

        //    var httpContext = ((MvcApplication)sender).Context;

        //    var currentRouteData = RouteTable.Routes.GetRouteData(new HttpContextWrapper(httpContext));
        //    var currentController = " ";
        //    var currentAction = " ";

        //    if (currentRouteData != null)
        //    {
        //        if (currentRouteData.Values["controller"] != null &&
        //            !String.IsNullOrEmpty(currentRouteData.Values["controller"].ToString()))
        //        {
        //            currentController = currentRouteData.Values["controller"].ToString();
        //        }

        //        if (currentRouteData.Values["action"] != null &&
        //            !String.IsNullOrEmpty(currentRouteData.Values["action"].ToString()))
        //        {
        //            currentAction = currentRouteData.Values["action"].ToString();
        //        }
        //    }

        //    var ex = Server.GetLastError();

        //    if (ex != null)
        //    {
        //        System.Diagnostics.Trace.WriteLine(ex.Message);

        //        if (ex.InnerException != null)
        //        {
        //            System.Diagnostics.Trace.WriteLine(ex.InnerException);
        //            System.Diagnostics.Trace.WriteLine(ex.InnerException.Message);
        //        }
        //    }


        //    var controller = new errorPageController();
        //    var routeData = new RouteData();
        //    var action = "servererror";
        //    var statusCode = 500;

        //    if (ex is HttpException)
        //    {
        //        var httpEx = ex as HttpException;
        //        statusCode = 500;

        //        switch (httpEx.GetHttpCode())
        //        {

        //            case 400:
        //                action = "servererror";
        //                break;

        //            case 401:
        //                action = "servererror";
        //                break;

        //            case 403:
        //                action = "servererror";
        //                break;

        //            case 404:
        //                action = "pagenotfound";
        //                break;

        //            case 500:
        //                action = "servererror";
        //                break;

        //            default:
        //                action = "servererror";
        //                break;
        //        }
        //    }
        //    else if (ex is AuthenticationException)
        //    {
        //        action = "servererror";
        //        statusCode = 404;
        //    }

        //    httpContext.ClearError();
        //    httpContext.Response.Clear();
        //    httpContext.Response.StatusCode = statusCode;
        //    httpContext.Response.TrySkipIisCustomErrors = true;
        //    routeData.Values["controller"] = "Error";
        //    routeData.Values["action"] = action;
        //    //var language = HttpContext.Current.Request.RequestContext.RouteData.Values["localisation"].ToString() ?? _DefaultLanguage;
        //    //string selectedLanguage = ConfigurationManager.AppSettings[language + "UICulture"];
        //    //if (selectedLanguage == null)
        //    //{
        //    //    language = _DefaultLanguage;
        //    //    selectedLanguage = ConfigurationManager.AppSettings[language + "UICulture"];
        //    //}
        //    //routeData.Values["localisation"] = language;

        //    controller.ViewData.Model = new HandleErrorInfo(ex, currentController, currentAction);
        //    ((IController)controller).Execute(new RequestContext(new HttpContextWrapper(httpContext), routeData));
        //}
    }
}
