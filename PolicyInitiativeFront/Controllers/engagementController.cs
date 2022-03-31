using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PolicyInitiativeFront.Controllers
{
    public class engagementController : SharedController
    {
        private CorporatePageRepository rpstry = new CorporatePageRepository();
        private CorporatePageSectionRepository sectionrpstry = new CorporatePageSectionRepository();
        public PublicEngagementRepository newsrpstry = new PublicEngagementRepository();
        private settingsRepository settingsRepository = new settingsRepository();
        // GET: enagagement
        public ActionResult Index()
        {
            var settings = settingsRepository.GetFirstOrDefault();
            var featured = newsrpstry.GetAllEngagement(0, 4, "en", "335x319xi");
            ViewBag.featured = featured;
            MetasModel metas = new MetasModel();
            CorporatePage currentPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["EngagePage"]));
            CorporatePage defaultPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["DefaultPage"]));

            metas.metaDescription = string.IsNullOrEmpty(currentPage.metaDescription) ? defaultPage.metaDescription : currentPage.metaDescription;
            metas.metaKeywords = string.IsNullOrEmpty(currentPage.metaKeywords) ? defaultPage.metaKeywords : currentPage.metaKeywords;
            metas.metaImgSrc = (!string.IsNullOrEmpty(currentPage.metaImgSrc) || !string.IsNullOrEmpty(defaultPage.metaImgSrc)) ? ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/corporatepages/" + (string.IsNullOrEmpty(currentPage.metaImgSrc) ? defaultPage.metaImgSrc : currentPage.metaImgSrc) : "";
            metas.customH1Content = string.IsNullOrEmpty(currentPage.customH1Content) ? defaultPage.customH1Content : currentPage.customH1Content;
            metas.customPageTitle = string.IsNullOrEmpty(currentPage.customPageTitle) ? defaultPage.customPageTitle : currentPage.customPageTitle;
            metas.customUrlTitle = string.IsNullOrEmpty(currentPage.customUrlTitle) ? defaultPage.customUrlTitle : currentPage.customUrlTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = HttpContext.Request.Url.AbsoluteUri.ToString();
            ViewBag.metas = metas;
            ViewBag.settings = settings;
            return View();
        }

        public ActionResult details(int id, string lang = "en", string src = "")
        {

            var news = newsrpstry.GetArticleById(id, lang, src, "712x401xi", "417x312xi", "858x383xi");


            #region SEO
            MetasModel metas = new MetasModel();
            PublicEngagement currentPage = newsrpstry.GetById(id);
            CorporatePage defaultPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["DefaultPage"]));

            ViewBag.language = lang;

            metas.metaDescription = string.IsNullOrEmpty(currentPage.metaDescription) ? (string.IsNullOrEmpty(currentPage.smallDescription) ? defaultPage.metaDescription : currentPage.smallDescription) : currentPage.metaDescription;
            metas.metaKeywords = string.IsNullOrEmpty(currentPage.metaKeywords) ? defaultPage.metaKeywords : currentPage.metaKeywords;

            if (string.IsNullOrEmpty(currentPage.metaImgSrc))
            {
                if (!string.IsNullOrEmpty(currentPage.imgSrc))
                {
                    metas.metaImgSrc = ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/newsCommunications/" + currentPage.imgSrc;
                }

            }
            else
            {
                metas.metaImgSrc = (!string.IsNullOrEmpty(currentPage.metaImgSrc) || !string.IsNullOrEmpty(defaultPage.metaImgSrc)) ? ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/corporatepages/" + (string.IsNullOrEmpty(currentPage.metaImgSrc) ? defaultPage.metaImgSrc : currentPage.metaImgSrc) : "";
            }

            metas.customH1Content = string.IsNullOrEmpty(currentPage.customH1Content) ? defaultPage.customH1Content : currentPage.customH1Content;
            metas.customPageTitle = string.IsNullOrEmpty(currentPage.customPageTitle) ? ConfigurationManager.AppSettings["ProjectName"] + " - " + currentPage.title : currentPage.customPageTitle;
            metas.customUrlTitle = string.IsNullOrEmpty(currentPage.customUrlTitle) ? defaultPage.customUrlTitle : currentPage.customUrlTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = HttpContext.Request.Url.AbsoluteUri.ToString();
            ViewBag.metas = metas;
            #endregion

            return View(news);
        }
    }
}