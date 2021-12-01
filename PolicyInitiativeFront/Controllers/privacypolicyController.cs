using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PolicyInitiativeFront.Controllers
{
    public class privacypolicyController : SharedController
    {
        private CorporatePageRepository rpstry = new CorporatePageRepository();
        private CorporatePageSectionRepository sectionrpstry = new CorporatePageSectionRepository();
        public ActionResult Index()
        {
            var language = GetLanguage();
            var model = new List<object>();
            var corporatePageTemplates = rpstry.GetPageDataById(Convert.ToInt32(ConfigurationManager.AppSettings["PolicyPage"]), language);

            foreach (var item in corporatePageTemplates.corporatePageTemplates)
            {
                if (item.isEntry == false)
                {
                    var data = new List<CorporatePageSection>();
                    if (item.frontHtmlId == "1")
                    {
                        data = sectionrpstry.GetSectionDataById(item.id, language, item.frontHtmlId);

                    }

                    model.AddRange(data);
                }

            }
            #region SEO
            MetasModel metas = new MetasModel();
            var ci = GetLanguage();
            var requestedLanguageId = langrpstry.GetByCode(ci);
            CorporatePage currentPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["PolicyPage"]));
            CorporatePage defaultPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["DefaultPage"]));

            var entryTranslatedDefaultItem = requestedLanguageId.id == 1 ? defaultPage : defaultPage.CorporatePages.FirstOrDefault(lang => lang.languageId == requestedLanguageId.id && !lang.isDeleted);
            if (entryTranslatedDefaultItem == null)
            {
                entryTranslatedDefaultItem = defaultPage;
            }
            var entryTranslatedItem = requestedLanguageId.id == 1 ? currentPage : currentPage.CorporatePages.FirstOrDefault(lang => lang.languageId == requestedLanguageId.id && !lang.isDeleted);
            if (entryTranslatedItem == null)
            {
                entryTranslatedItem = currentPage;
            }

            metas.metaDescription = (!string.IsNullOrEmpty(entryTranslatedItem.metaDescription) || !string.IsNullOrEmpty(entryTranslatedDefaultItem.metaDescription)) ? (string.IsNullOrEmpty(entryTranslatedItem.metaDescription) ? entryTranslatedDefaultItem.metaDescription : entryTranslatedItem.metaDescription) : defaultPage.metaDescription;
            metas.metaKeywords = (!string.IsNullOrEmpty(entryTranslatedItem.metaKeywords) || !string.IsNullOrEmpty(entryTranslatedDefaultItem.metaKeywords)) ? (string.IsNullOrEmpty(entryTranslatedItem.metaKeywords) ? entryTranslatedDefaultItem.metaKeywords : entryTranslatedItem.metaKeywords) : defaultPage.metaKeywords;
            metas.metaImgSrc = string.IsNullOrEmpty(currentPage.metaImgSrc) && !string.IsNullOrEmpty(currentPage.imgSrc) ? ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/newsCommunications/" + currentPage.imgSrc : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/corporatepages/" + defaultPage.metaImgSrc;
            metas.customH1Content = (!string.IsNullOrEmpty(entryTranslatedItem.customH1Content) || !string.IsNullOrEmpty(entryTranslatedDefaultItem.customH1Content)) ? (string.IsNullOrEmpty(entryTranslatedItem.customH1Content) ? entryTranslatedDefaultItem.customH1Content : entryTranslatedItem.customH1Content) : defaultPage.customH1Content;
            metas.customUrlTitle = (!string.IsNullOrEmpty(entryTranslatedItem.customUrlTitle) || !string.IsNullOrEmpty(entryTranslatedDefaultItem.customUrlTitle)) ? (string.IsNullOrEmpty(entryTranslatedItem.customUrlTitle) ? entryTranslatedDefaultItem.customUrlTitle : entryTranslatedItem.customUrlTitle) : defaultPage.customUrlTitle;
            metas.customPageTitle = (!string.IsNullOrEmpty(entryTranslatedItem.customPageTitle) || !string.IsNullOrEmpty(entryTranslatedDefaultItem.customPageTitle)) ? (string.IsNullOrEmpty(entryTranslatedItem.customPageTitle) ? entryTranslatedDefaultItem.customPageTitle : entryTranslatedItem.customPageTitle) : defaultPage.customPageTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = HttpContext.Request.Url.AbsoluteUri.ToString();
            ViewBag.metas = metas;
            #endregion
            return View(model);
        }

    }
}