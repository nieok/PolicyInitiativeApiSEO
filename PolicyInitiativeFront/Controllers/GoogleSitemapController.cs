using System;
using System.Linq;
using System.Text;
using System.Xml;
using System.Configuration;
using System.Web.Mvc;
using System.Collections.Generic;
using System.Net.Http;
using System.Net;
using PolicyInitiativeFront.Models;

namespace PolicyInitiativeFront.Controllers
{
    public class GoogleSitemapController : Controller
    {
        CorporatePageRepository rpstry = new CorporatePageRepository();
        TypeArticleRepository typeArticleRepository = new TypeArticleRepository();
        NewsCategoryRepository newsCategoryRepository = new NewsCategoryRepository();
      
        NewsCommunicationRepository articleRepository = new NewsCommunicationRepository();

        // GET: SiteMap
        public string CreateSitemapXml()
        {
            try
            {
                var randomName = "googlesitemap";
                var articles = articleRepository.GetAllArticles();
                var catarticles = newsCategoryRepository.GetAllNewsCategory();

                Response.ContentType = "text/xml"; // Set ContentType.
                Response.HeaderEncoding = Encoding.UTF8;
                XmlDocument xmlDoc = new XmlDocument();
                XmlElement rootElement = xmlDoc.CreateElement("urlset");
                XmlDeclaration xmldeclaration = xmlDoc.CreateXmlDeclaration("1.0", "utf-8", "yes");
                rootElement.SetAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
                xmlDoc.InsertBefore(xmldeclaration, xmlDoc.DocumentElement);
                xmlDoc.AppendChild(rootElement);
                XmlElement item, item2, item3, item4, item5, item6, item7;

                #region Home
                item = xmlDoc.CreateElement("url");
                item2 = xmlDoc.CreateElement("loc");
                item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"];
                item3 = xmlDoc.CreateElement("lastmod");
                item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
                item4 = xmlDoc.CreateElement("changefreq");
                item4.InnerText = "monthly";
                item.AppendChild(item2);
                item.AppendChild(item3);
                item.AppendChild(item4);
                rootElement.AppendChild(item);
                #endregion
                #region initiatives
                item = xmlDoc.CreateElement("url");
                item2 = xmlDoc.CreateElement("loc");
                item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "initiatives";
                item3 = xmlDoc.CreateElement("lastmod");
                item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
                item4 = xmlDoc.CreateElement("changefreq");
                item4.InnerText = "monthly";
                item.AppendChild(item2);
                item.AppendChild(item3);
                item.AppendChild(item4);
                rootElement.AppendChild(item);
                #endregion
                #region about
                item = xmlDoc.CreateElement("url");
                item2 = xmlDoc.CreateElement("loc");
                item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "about";
                item3 = xmlDoc.CreateElement("lastmod");
                item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
                item4 = xmlDoc.CreateElement("changefreq");
                item4.InnerText = "monthly";
                item.AppendChild(item2);
                item.AppendChild(item3);
                item.AppendChild(item4);
                rootElement.AppendChild(item);
                #endregion
                #region team
                item = xmlDoc.CreateElement("url");
                item2 = xmlDoc.CreateElement("loc");
                item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "team";
                item3 = xmlDoc.CreateElement("lastmod");
                item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
                item4 = xmlDoc.CreateElement("changefreq");
                item4.InnerText = "monthly";
                item.AppendChild(item2);
                item.AppendChild(item3);
                item.AppendChild(item4);
                rootElement.AppendChild(item);
                #endregion
                #region contact
                item = xmlDoc.CreateElement("url");
                item2 = xmlDoc.CreateElement("loc");
                item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "contact";
                item3 = xmlDoc.CreateElement("lastmod");
                item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
                item4 = xmlDoc.CreateElement("changefreq");
                item4.InnerText = "monthly";
                item.AppendChild(item2);
                item.AppendChild(item3);
                item.AppendChild(item4);
                rootElement.AppendChild(item);
                #endregion
                #region search
                item = xmlDoc.CreateElement("url");
                item2 = xmlDoc.CreateElement("loc");
                item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "search/results";
                item3 = xmlDoc.CreateElement("lastmod");
                item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
                item4 = xmlDoc.CreateElement("changefreq");
                item4.InnerText = "monthly";
                item.AppendChild(item2);
                item.AppendChild(item3);
                item.AppendChild(item4);
                rootElement.AppendChild(item);
                #endregion
                #region themes
                foreach (var newitem in catarticles)
                {
                    item = xmlDoc.CreateElement("url");
                    item2 = xmlDoc.CreateElement("loc");
                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "initiatives/details/"  + newitem.id + "/" + newitem.urlTitle;
                    item3 = xmlDoc.CreateElement("lastmod");
                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
                    item4 = xmlDoc.CreateElement("changefreq");
                    item4.InnerText = "monthly";
                    item.AppendChild(item2);
                    item.AppendChild(item3);
                    item.AppendChild(item4);
                    rootElement.AppendChild(item);


                }
                #endregion

                #region Articles
                foreach (var newitem in articles)
                {
                    item = xmlDoc.CreateElement("url");
                    item2 = xmlDoc.CreateElement("loc");
                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "articles/details/" + newitem.id + "/" + newitem.urlTitle;
                    item3 = xmlDoc.CreateElement("lastmod");
                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
                    item4 = xmlDoc.CreateElement("changefreq");
                    item4.InnerText = "monthly";
                    item.AppendChild(item2);
                    item.AppendChild(item3);
                    item.AppendChild(item4);
                    rootElement.AppendChild(item);

                }
                #endregion

               

                var curFileNAme = Server.MapPath(Url.Content("~/" + randomName + ".xml"));
                xmlDoc.Save(curFileNAme);
                return xmlDoc.OuterXml;
            }
            catch (Exception e)
            {
                return " ";

            }
        }

    }
}