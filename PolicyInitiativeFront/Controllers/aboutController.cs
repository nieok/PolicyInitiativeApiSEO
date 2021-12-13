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
    public class aboutController : SharedController
    {
        private CorporatePageRepository rpstry = new CorporatePageRepository();
        private CorporatePageSectionRepository sectionrpstry = new CorporatePageSectionRepository();
        // GET: about
        public ActionResult Index(string lang="en")
        {
           
            var model = new List<object>();
            var corporatePageTemplates = rpstry.GetPageDataById(Convert.ToInt32(ConfigurationManager.AppSettings["AboutPage"]), lang);


            foreach (var item in corporatePageTemplates.corporatePageTemplates)
            {
                if (item.isEntry == false)
                {
                    var data = new List<CorporatePageSection>();
                    if (item.frontHtmlId == "1")
                    {
                        data = sectionrpstry.GetSectionDataById(item.id, lang, item.frontHtmlId, "1800x645xi");

                    }
                    else if (item.frontHtmlId == "2")
                    {
                        data = sectionrpstry.GetSectionDataById(item.id, lang, item.frontHtmlId, "2000x744xi");

                    }
                    else
                    {
                        data = sectionrpstry.GetSectionDataById(item.id, lang, item.frontHtmlId);
                    }
                    model.AddRange(data);
                }

            }
            ViewBag.language = lang;
            #region SEO
            MetasModel metas = new MetasModel();
            CorporatePage currentPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["AboutPage"]));
            CorporatePage defaultPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["DefaultPage"]));

            metas.metaDescription = string.IsNullOrEmpty(currentPage.metaDescription) ? defaultPage.metaDescription : currentPage.metaDescription;
            metas.metaKeywords = string.IsNullOrEmpty(currentPage.metaKeywords) ? defaultPage.metaKeywords : currentPage.metaKeywords;
            metas.metaImgSrc = (!string.IsNullOrEmpty(currentPage.metaImgSrc) || !string.IsNullOrEmpty(defaultPage.metaImgSrc)) ? ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/corporatepages/" + (string.IsNullOrEmpty(currentPage.metaImgSrc) ? defaultPage.metaImgSrc : currentPage.metaImgSrc) : "";
            metas.customH1Content = string.IsNullOrEmpty(currentPage.customH1Content) ? defaultPage.customH1Content : currentPage.customH1Content;
            metas.customPageTitle = string.IsNullOrEmpty(currentPage.customPageTitle) ? defaultPage.customPageTitle : currentPage.customPageTitle;
            metas.customUrlTitle = string.IsNullOrEmpty(currentPage.customUrlTitle) ? defaultPage.customUrlTitle : currentPage.customUrlTitle;
            metas.metaObjectType = "corporatepage";
            metas.canonicalUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"]+"about";
            ViewBag.metas = metas;
            #endregion
            return View(model);
        }


    }
}