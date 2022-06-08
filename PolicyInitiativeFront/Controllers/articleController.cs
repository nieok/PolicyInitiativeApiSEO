using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PolicyInitiativeFront.Controllers
{
    public class articleController : SharedController
    {
        private CorporatePageRepository rpstry = new CorporatePageRepository();
        private NewsCommunicationRepository articlerpstry = new NewsCommunicationRepository();
      
        public ActionResult index(int id, string lang = "en", string src ="")
        {
           
            var news = articlerpstry.GetArticleById(id, lang , src, "858x2000xi", "1000x1000xi", "858x2000xi");

         
            #region SEO
            MetasModel metas = new MetasModel();
            NewsCommunication currentPage = articlerpstry.GetById(id);
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
            if (Request.Url.Query != "")
            {
                metas.canonicalUrl = HttpContext.Request.Url.AbsoluteUri.ToString().Replace(Request.Url.Query, String.Empty);
            }
            else
            {
                metas.canonicalUrl = HttpContext.Request.Url.AbsoluteUri.ToString();
            }
            ViewBag.metas = metas;
            #endregion

            return View(news);
        }

       
    }
}