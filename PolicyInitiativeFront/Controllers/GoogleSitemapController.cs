//using PolicyInitiativeFront.Models;
//using System;
//using System.Collections.Generic;
//using System.Configuration;
//using System.Linq;
//using System.Text;
//using System.Web.Mvc;
//using System.Xml;

//namespace PolicyInitiativeFront.Controllers
//{
//    public class GoogleSiteMapController : Controller
//    {
//        public NewsCommunicationRepository newsRpstry = new NewsCommunicationRepository();
//        public PressRepository pressRpstry = new PressRepository();
//        public SeasonRepository seasonRpstry = new SeasonRepository();

//        public string CreateSitemapXml()
//        {
//            try
//            {
//                var randomName = "sitemap";

//                string[] arrayOfLanguages = new string[] { "en", "ar" };
//                Response.ContentType = "text/xml"; // Set ContentType.
//                Response.HeaderEncoding = Encoding.UTF8;
//                XmlDocument xmlDoc = new XmlDocument();
//                XmlElement rootElement = xmlDoc.CreateElement("urlset");
//                XmlDeclaration xmldeclaration = xmlDoc.CreateXmlDeclaration("1.0", "utf-8", "yes");
//                rootElement.SetAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
//                xmlDoc.InsertBefore(xmldeclaration, xmlDoc.DocumentElement);
//                xmlDoc.AppendChild(rootElement);
//                XmlElement item, item2, item3, item4, item5, item6, item7;

//                foreach (var language in arrayOfLanguages)
//                {


//                    #region Home
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion


//                    #region About Us
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/about";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion
//                    #region ourteam
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/about/ourteam";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion

//                    #region series
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/series";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion
//                    #region scripts
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/scripts";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion

//                    #region services
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/services";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion



//                    #region Contact us
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/contactus";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion

//                    #region terms
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/terms";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion

//                    #region PrivacyPolicy
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/privacypolicy";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    #endregion

//                    #region seasons

//                    var seasons = seasonRpstry.GetSiteData(language);
//                    foreach (var newsItem in seasons)
//                    {
//                        string url = "";
//                        url = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/details/" + newsItem.id + "/" + newsItem.customUrlTitle;
//                        item5 = xmlDoc.CreateElement("url");
//                        item6 = xmlDoc.CreateElement("loc");
//                        item6.InnerText = url;
//                        item3 = xmlDoc.CreateElement("lastmod");
//                        item3.InnerText = newsItem.dateModified.ToString("yyyy-MM-dd");
//                        item7 = xmlDoc.CreateElement("changefreq");
//                        item7.InnerText = "weekly";
//                        item5.AppendChild(item6);
//                        item5.AppendChild(item3);
//                        item5.AppendChild(item7);
//                        rootElement.AppendChild(item5);

//                    }
//                    #endregion
//                    #region press
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/press";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    var press = pressRpstry.GetAllPublishedPress(language);
//                    foreach (var newsItem in press)
//                    {
//                        string url = "";
//                        url = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/press/details/" + newsItem.id + "/" + newsItem.urlTitle;
//                        item5 = xmlDoc.CreateElement("url");
//                        item6 = xmlDoc.CreateElement("loc");
//                        item6.InnerText = url;
//                        item3 = xmlDoc.CreateElement("lastmod");
//                        item3.InnerText = newsItem.dateModified.ToString("yyyy-MM-dd");
//                        item7 = xmlDoc.CreateElement("changefreq");
//                        item7.InnerText = "weekly";
//                        item5.AppendChild(item6);
//                        item5.AppendChild(item3);
//                        item5.AppendChild(item7);
//                        rootElement.AppendChild(item5);

//                    }
//                    #endregion
//                    #region News
//                    item = xmlDoc.CreateElement("url");
//                    item2 = xmlDoc.CreateElement("loc");
//                    item2.InnerText = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/news";
//                    item3 = xmlDoc.CreateElement("lastmod");
//                    item3.InnerText = DateTime.Now.ToString("yyyy-MM-dd");
//                    item4 = xmlDoc.CreateElement("changefreq");
//                    item4.InnerText = "monthly";
//                    item.AppendChild(item2);
//                    item.AppendChild(item3);
//                    item.AppendChild(item4);
//                    rootElement.AppendChild(item);
//                    var news = newsRpstry.GetAllPublishedNews(language);
//                    foreach (var newsItem in news)
//                    {
//                        string url = "";
//                        url = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + language + "/news/details/" + newsItem.id + "/" + newsItem.urlTitle;
//                        item5 = xmlDoc.CreateElement("url");
//                        item6 = xmlDoc.CreateElement("loc");
//                        item6.InnerText = url;
//                        item3 = xmlDoc.CreateElement("lastmod");
//                        item3.InnerText = newsItem.dateModified.ToString("yyyy-MM-dd");
//                        item7 = xmlDoc.CreateElement("changefreq");
//                        item7.InnerText = "weekly";
//                        item5.AppendChild(item6);
//                        item5.AppendChild(item3);
//                        item5.AppendChild(item7);
//                        rootElement.AppendChild(item5);

//                    }
//                    #endregion

//                }

//                var curFileNAme = Server.MapPath(Url.Content("~/" + randomName + ".xml"));
//                xmlDoc.Save(curFileNAme);
//                return xmlDoc.OuterXml;
//            }
//            catch (Exception e)
//            {
//                return " ";

//            }
//        }

//    }
//}