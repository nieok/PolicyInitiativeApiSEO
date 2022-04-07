using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PolicyInitiativeFront.Controllers
{
    public class teamController : SharedController
    {
        private CorporatePageRepository rpstry = new CorporatePageRepository();
        private CorporatePageSectionRepository sectionrpstry = new CorporatePageSectionRepository();
        private TeamRepository teamRepository = new TeamRepository();
        private TeamCategoryRepository teamcatRepository = new TeamCategoryRepository();
        // GET: about
        public ActionResult Index(int category= 1 ,string lang="en")
        {
            var teams = teamRepository.GetAllTeam("269x180xi", category , lang);
           
            if (lang == "en")
            {
                ViewBag.category = teamcatRepository.GetAllIsPublished().FirstOrDefault(d => d.id == category);
               
            }
            else
            {
                ViewBag.category = teamcatRepository.GetAll().FirstOrDefault(d => d.id == category);
            }
            ViewBag.categories = teamcatRepository.GetAllTeamCategory(lang);
            ViewBag.language = lang;
            #region SEO
            MetasModel metas = new MetasModel();
            CorporatePage currentPage = rpstry.GetById(Convert.ToInt32(ConfigurationManager.AppSettings["TeamPage"]));
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
            return View(teams);
        }
    }
}