using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PolicyInitiativeFront.Controllers
{
    public class HomeController : SharedController
    {
        private CorporatePageRepository rpstry = new CorporatePageRepository();
        private CorporatePageSectionRepository sectionrpstry = new CorporatePageSectionRepository();
        public NewsCommunicationRepository newsrpstry = new NewsCommunicationRepository();
        private settingsRepository settingsRepository = new settingsRepository();
        private SliderRepository sliderRepository = new SliderRepository();
        private NewsCategoryRepository categoryRepository = new NewsCategoryRepository();
        private InteractiveRepository InteractiveRepository = new InteractiveRepository();
        public ActionResult Index()
        {
            var settings = settingsRepository.GetFirstOrDefault();
            var featuredBanner = sliderRepository.GetAllSlider("1800x400xi");
            //var featuredBanner = newsrpstry.GetAllHomeFeaturedBanner("1800x400xi");
            var featured = newsrpstry.GetAllFeatured(0,12,"en","335x319xi");
            var engagefeatured = newsrpstry.GetAllFeaturedEngagement(0,4,"en","335x319xi");
            var categories = categoryRepository.GetAllNewsCategory().ToList();
            var interactives = InteractiveRepository.GetAllHomeInteractives("523x284xi").ToList();
            ViewBag.categories = categories;
            ViewBag.featuredBanner = featuredBanner;
            ViewBag.featured = featured;
            ViewBag.engagefeatured = engagefeatured;
            ViewBag.interactives = interactives;
            #region SEO
            MetasModel metas = new MetasModel();
            CorporatePage currentPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["HomePage"]));
            CorporatePage defaultPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["DefaultPage"]));

            metas.metaDescription = string.IsNullOrEmpty(currentPage.metaDescription) ? defaultPage.metaDescription : currentPage.metaDescription;
            metas.metaKeywords = string.IsNullOrEmpty(currentPage.metaKeywords) ? defaultPage.metaKeywords : currentPage.metaKeywords;
            metas.metaImgSrc = (!string.IsNullOrEmpty(currentPage.metaImgSrc) || !string.IsNullOrEmpty(defaultPage.metaImgSrc)) ? ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/corporatepages/" + (string.IsNullOrEmpty(currentPage.metaImgSrc) ? defaultPage.metaImgSrc : currentPage.metaImgSrc) : "";
            metas.customH1Content = string.IsNullOrEmpty(currentPage.customH1Content) ? defaultPage.customH1Content : currentPage.customH1Content;
            metas.customPageTitle = string.IsNullOrEmpty(currentPage.customPageTitle) ? defaultPage.customPageTitle : currentPage.customPageTitle;
            metas.customUrlTitle = string.IsNullOrEmpty(currentPage.customUrlTitle) ? defaultPage.customUrlTitle : currentPage.customUrlTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"];
            ViewBag.metas = metas;
            #endregion
            ViewBag.settings = settings;
            return View();
        }

    }
}