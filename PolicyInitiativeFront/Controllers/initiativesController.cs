using PolicyInitiativeFront.Controllers;
using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PolicyInitiativeFront.Controllers
{
    public class initiativesController : SharedController
    {
        private CorporatePageRepository rpstry = new CorporatePageRepository();
        private CorporatePageSectionRepository sectionrpstry = new CorporatePageSectionRepository();

        private NewsCategoryRepository categoryRepository = new NewsCategoryRepository();
        private NewsCommunicationRepository newsRepository = new NewsCommunicationRepository();
        // GET: about
        public ActionResult Index()
        {
           
            var model = new List<object>();
            var corporatePageTemplates = rpstry.GetPageDataById(Convert.ToInt32(ConfigurationManager.AppSettings["InitiativePage"]), "en");

            foreach (var item in corporatePageTemplates.corporatePageTemplates)
            {
                if (item.isEntry == false)
                {
                    var data = new List<CorporatePageSection>();
                    if (item.frontHtmlId == "1")
                    {
                        data = sectionrpstry.GetSectionDataById(item.id, "en", item.frontHtmlId, "");

                    }
                    else
                    {
                        data = sectionrpstry.GetSectionDataById(item.id, "en", item.frontHtmlId);
                    }
                    model.AddRange(data);
                }

            }
            var categories = categoryRepository.GetAllNewsCategory().ToList();
            ViewBag.categories = categories;
            #region SEO
            MetasModel metas = new MetasModel();
            CorporatePage currentPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["InitiativePage"]));
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
            return View(model);
        }

        public ActionResult details(int id)
        {


            #region SEO
            MetasModel metas = new MetasModel();
            var category = categoryRepository.GetCatById(id, "1086x400xi");
            var news = newsRepository.GetAllByCategoryId(id, "");

            ViewBag.news= news;
            NewsCategory currentPage = categoryRepository.GetById(id);
            CorporatePage defaultPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["DefaultPage"]));
            var entryTranslatedDefaultItem = defaultPage;
            if (entryTranslatedDefaultItem == null)
            {
                entryTranslatedDefaultItem = defaultPage;
            }
            var entryTranslatedItem = currentPage;
            if (entryTranslatedItem == null)
            {
                entryTranslatedItem = currentPage;
            }

            metas.metaDescription = string.IsNullOrEmpty(currentPage.metaDescription) ? (string.IsNullOrEmpty(currentPage.description) ? defaultPage.metaDescription : currentPage.description) : currentPage.metaDescription;
            metas.metaKeywords = string.IsNullOrEmpty(currentPage.metaKeywords) ? defaultPage.metaKeywords : currentPage.metaKeywords;
            if (string.IsNullOrEmpty(currentPage.metaImgSrc))
            {
                if (!string.IsNullOrEmpty(currentPage.imgSrc))
                {
                    metas.metaImgSrc = ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/newscategories/" + currentPage.imgSrc;
                }

            }
            else
            {
                metas.metaImgSrc = (!string.IsNullOrEmpty(currentPage.metaImgSrc) || !string.IsNullOrEmpty(defaultPage.metaImgSrc)) ? ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/corporatepages/" + (string.IsNullOrEmpty(currentPage.metaImgSrc) ? defaultPage.metaImgSrc : currentPage.metaImgSrc) : "";
            }
            metas.customH1Content = (!string.IsNullOrEmpty(entryTranslatedItem.customH1Content) || !string.IsNullOrEmpty(entryTranslatedDefaultItem.customH1Content)) ? (string.IsNullOrEmpty(entryTranslatedItem.customH1Content) ? entryTranslatedDefaultItem.customH1Content : entryTranslatedItem.customH1Content) : defaultPage.customH1Content;
            metas.customUrlTitle = (!string.IsNullOrEmpty(entryTranslatedItem.customUrlTitle) || !string.IsNullOrEmpty(entryTranslatedDefaultItem.customUrlTitle)) ? (string.IsNullOrEmpty(entryTranslatedItem.customUrlTitle) ? entryTranslatedDefaultItem.customUrlTitle : entryTranslatedItem.customUrlTitle) : defaultPage.customUrlTitle;
            if (string.IsNullOrEmpty(entryTranslatedItem.customPageTitle))
            {
                metas.customPageTitle = ConfigurationManager.AppSettings["ProjectName"] + " - " + entryTranslatedItem.title;
            }
            else
            {
                metas.customPageTitle =  entryTranslatedItem.customPageTitle;
            }

            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "initiatives/details/" + id + "/" + category.urlTitle;

            ViewBag.metas = metas;
            #endregion

            return View(category);


        }
    }
}