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
    public class contactController : SharedController
    {
        private CorporatePageRepository rpstry = new CorporatePageRepository();
        private CorporatePageSectionRepository sectionrpstry = new CorporatePageSectionRepository();

        private NewsCategoryRepository categoryRepository = new NewsCategoryRepository();
        // GET: about
        public ActionResult Index()
        {
            var model = new List<object>();
            var corporatePageTemplates = rpstry.GetPageDataById(Convert.ToInt32(ConfigurationManager.AppSettings["ContactPage"]), "en");


            foreach (var item in corporatePageTemplates.corporatePageTemplates)
            {
                if (item.isEntry == false)
                {
                    var data = new List<CorporatePageSection>();
                   
                   
                     data = sectionrpstry.GetSectionDataById(item.id, "en", item.frontHtmlId);
                    
                    model.AddRange(data);
                }

            }
            ViewBag.contactInfo = rpstry.GetContactInfoData();
            #region SEO
            MetasModel metas = new MetasModel();
            CorporatePage currentPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["ContactPage"]));
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
            #endregion
            return View(model);
        }
    }
}