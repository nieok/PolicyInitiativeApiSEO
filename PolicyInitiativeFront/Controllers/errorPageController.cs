using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace PolicyInitiativeFront.Controllers
{
    public class errorPageController : SharedController
    {
        public ActionResult pagenotfound(string message = null, string error = null)
        {
      
            Response.StatusCode = 404;
            Response.TrySkipIisCustomErrors = true;
            ViewBag.metas = null;
            ViewBag.BodyAttributes = "class='errorPage'";
            ViewBag.metas = null;
            //ViewBag.dictionary = langrpstry.LanguageDictionary(language);
            return View("pagenotfound");
        }

        public ActionResult servererror(string message = null, string error = null)
        {
            
            if (message == null)
            {
                message = "Internal Server Error";
            }
            if (error == null)
            {
                error = "500";
            }
            Response.StatusCode = 500;
            Response.TrySkipIisCustomErrors = true;
            ViewBag.BodyAttributes = "class='errorPage'";
            //ViewBag.dictionary = langrpstry.LanguageDictionary(language);
            ViewBag.metas = null;
            return View("servererror");
        }

    }
}