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
        private settingsRepository settingsRepository = new settingsRepository();
        public ActionResult index(int id, string lang = "en")
        {
            var settings = settingsRepository.GetFirstOrDefault();
            var news = articlerpstry.GetArticleById(id, lang, "712x401xi", "417x312xi", "858x383xi");

            ViewBag.settings = settings;
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
            metas.customPageTitle = string.IsNullOrEmpty(currentPage.customPageTitle) ? defaultPage.customPageTitle + " - " + currentPage.title : currentPage.customPageTitle;
            metas.customUrlTitle = string.IsNullOrEmpty(currentPage.customUrlTitle) ? defaultPage.customUrlTitle : currentPage.customUrlTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + currentPage.id + "/" + news.urlTitle;
            ViewBag.metas = metas;
            #endregion

            return View(news);
        }


        public ActionResult video(int id, string lang = "en")
        {
            var settings = settingsRepository.GetFirstOrDefault();
            var news = articlerpstry.GetArticleVideoById(id, lang, "712x401xi", "417x312xi", "858x383xi");

            ViewBag.settings = settings;
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
            metas.customPageTitle = string.IsNullOrEmpty(currentPage.customPageTitle) ? defaultPage.customPageTitle + " - " + currentPage.title : currentPage.customPageTitle;
            metas.customUrlTitle = string.IsNullOrEmpty(currentPage.customUrlTitle) ? defaultPage.customUrlTitle : currentPage.customUrlTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + currentPage.id + "/" + news.urlTitle;
            ViewBag.metas = metas;
            #endregion

            return View(news);
        }
        public ActionResult podcast(int id, string lang = "en")
        {
            var settings = settingsRepository.GetFirstOrDefault();
            var news = articlerpstry.GetArticlePodcastsById(id, lang, "712x401xi", "417x312xi", "858x383xi");

            ViewBag.settings = settings;
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
            metas.customPageTitle = string.IsNullOrEmpty(currentPage.customPageTitle) ? defaultPage.customPageTitle + " - " + currentPage.title : currentPage.customPageTitle;
            metas.customUrlTitle = string.IsNullOrEmpty(currentPage.customUrlTitle) ? defaultPage.customUrlTitle : currentPage.customUrlTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + currentPage.id + "/" + news.urlTitle;
            ViewBag.metas = metas;
            #endregion

            return View(news);
        }

        public ActionResult data(int id, string lang = "en")
        {
            var settings = settingsRepository.GetFirstOrDefault();
            var news = articlerpstry.GetArticleDataById(id, lang, "712x401xi", "417x312xi", "858x383xi");

            ViewBag.settings = settings;
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
            metas.customPageTitle = string.IsNullOrEmpty(currentPage.customPageTitle) ? defaultPage.customPageTitle + " - " + currentPage.title : currentPage.customPageTitle;
            metas.customUrlTitle = string.IsNullOrEmpty(currentPage.customUrlTitle) ? defaultPage.customUrlTitle : currentPage.customUrlTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + currentPage.id + "/" + news.urlTitle;
            ViewBag.metas = metas;
            #endregion

            return View(news);
        }
    }
}