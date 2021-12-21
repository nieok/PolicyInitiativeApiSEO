using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.Security;

namespace PolicyInitiativeFront.Controllers
{
    public class MyObject
    {
        public string success { get; set; }
    }


    public class SharedController : Controller
    {
        private LanguageResourceRepository langresourcerpstry = new LanguageResourceRepository();
        public LanguageRepository langrpstry = new LanguageRepository();
        public SocialMediaRepository socialrpstry = new SocialMediaRepository();
        public CorporatePageRepository rpstry = new CorporatePageRepository();
        public TypeArticleRepository typesrpstry = new TypeArticleRepository();
        public KeywordRepository keywordRepository = new KeywordRepository();
        private dblinqDataContext db = new dblinqDataContext();
        private settingsRepository settingsRepository = new settingsRepository();

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            ViewBag.medias = socialrpstry.GetAllIsPublished();
            ViewBag.types = typesrpstry.GetAllTypes();
            var settings = settingsRepository.GetFirstOrDefault();
            ViewBag.settings = settings;
            ViewBag.keywords = keywordRepository.GetAllKeywords();
            ViewBag.contactInfo = rpstry.GetContactInfoData();
            base.OnActionExecuting(filterContext); // re-added in edit
        }

        public string GetLanguage()
        {
            return RouteData.Values["localisation"].ToString();
        }
     
        public string GetYouTubeVideoIdFromUrl(string url)
        {
            Uri uri = null;
            if (!Uri.TryCreate(url, UriKind.Absolute, out uri))
            {
                try
                {
                    uri = new UriBuilder("http", url).Uri;
                }
                catch
                {
                    // invalid url
                    return "";
                }
            }

            string host = uri.Host;
            string[] youTubeHosts = { "www.youtube.com", "youtube.com", "youtu.be", "www.youtu.be" };
            if (!youTubeHosts.Contains(host))
                return "";

            var query = HttpUtility.ParseQueryString(uri.Query);

            if (query.AllKeys.Contains("v"))
            {
                return Regex.Match(query["v"], @"^[a-zA-Z0-9_-]{11}$").Value;
            }
            else if (query.AllKeys.Contains("u"))
            {
                // some urls have something like "u=/watch?v=AAAAAAAAA16"
                return Regex.Match(query["u"], @"/watch\?v=([a-zA-Z0-9_-]{11})").Groups[1].Value;
            }
            else
            {
                // remove a trailing forward space
                var last = uri.Segments.Last().Replace("/", "");
                if (Regex.IsMatch(last, @"^v=[a-zA-Z0-9_-]{11}$"))
                    return last.Replace("v=", "");

                string[] segments = uri.Segments;
                if (segments.Length > 2 && segments[segments.Length - 2] != "v/" && segments[segments.Length - 2] != "watch/")
                    return "";

                return Regex.Match(last, @"^[a-zA-Z0-9_-]{11}$").Value;
            }
        }
        internal string GetResizedImagePath(string apiUrl, string imgSrc, string imgsize, string portraitimgsize, string imgDirectory = "", bool isPortrait = false, bool isProduct = false, bool isGiftCard = false)
        {
            if (!isPortrait)
            {
                if (imgsize == "" || imgsize == null)
                {
                    return imgSrc == "" || imgSrc == null ? null : apiUrl + "content/uploads/" + imgDirectory + "/" + imgSrc;
                }
                else
                {
                    return imgSrc == "" || imgSrc == null ? null : apiUrl + "images/" + imgsize + "/" + imgSrc;
                }
            }
            else
            {
                if (portraitimgsize == "" || portraitimgsize == null)
                {
                    return imgSrc == "" || imgSrc == null ? null : apiUrl + "content/uploads/" + imgDirectory + "/" + imgSrc;
                }
                else
                {
                    return imgSrc == "" || imgSrc == null ? null : apiUrl + "images/" + portraitimgsize + "/" + imgSrc;
                }
            }


        }

        public string GetUrlTitle(string title)
        {
            return title.Replace(",", "-").Replace("<br/>", "-").Replace("<br>", "-").Replace("!", "").Replace(":", "-").Replace("'", "").Replace(" ", "-").Replace("&", "").Replace("?", "").Replace("/", "-").Replace("*", "-").Replace(".", "").Replace("--", "-").ToLower();
        }

    }
}
