using PolicyInitiativeFront.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    public partial class CorporatePage
    {
        public string UrlTitle
        {
            get
            {
                return new UtilsHelper().safeHTML(this.title).Replace(":", "-").Replace("'", "").Replace(" ", "-").Replace("&", "").Replace("?", "").Replace("/", "-").Replace(".", "").Replace("--", "-").ToLower();
            }
        }

        public int Level
        {
            get
            {
                try
                {
                    return 1 + (null != parentId ? this.CorporatePage1.Level : 0);
                }
                catch (Exception e)
                {
                    return 1;
                }
            }
        }
    }

    public class CorporatePageRepository
    {
        private dblinqDataContext db = new dblinqDataContext();
        private LanguageRepository langrpstry = new LanguageRepository();
        public IQueryable<CorporatePage> GetAll(int? parentId = null)
        {
            var results = db.CorporatePages.Where(d => !d.isDeleted && d.languageParentId == null);
            if (parentId.HasValue && parentId != 0)
            {
                results = results.Where(d => d.parentId == parentId.Value);
            }
            else
            {
                results = results.Where(d => d.parentId == null);
            }
            return results.OrderByDescending(d => d.priority);
        }

        public IQueryable<CorporatePage> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }

        public CorporatePage GetById(int id)
        {
            return db.CorporatePages.FirstOrDefault(d => !d.isDeleted && d.id == id);
        }

        public CorporatePage GetByTitle(string title)
        {
            return db.CorporatePages.FirstOrDefault(d => !d.isDeleted && d.title.ToLower() == title.ToLower());
        }
        public string GetUrlTitle(string title)
        {
            return title.Replace(",", "-").Replace("<br/>", "-").Replace("<br>", "-").Replace("!", "").Replace(":", "-").Replace("'", "").Replace(" ", "-").Replace("&", "").Replace("?", "").Replace("/", "-").Replace("*", "-").Replace(".", "").Replace("--", "-").ToLower();
        }
        public CorporatePageView GetPageDataById(int id, string language = "en", string imgsize = "")
        {
            var requestedLanguageId = langrpstry.GetByCode(language).id;
            var entry = GetById(id);
            var translatedItem = requestedLanguageId == -1 ? null : entry.CorporatePages1.FirstOrDefault(lang => lang.languageId == requestedLanguageId && !lang.isDeleted);

            entry.id = translatedItem != null ? translatedItem.id : entry.id;
            entry.title = translatedItem != null ? translatedItem.title : entry.title;

            var corporatePageTemplates = db.CorporatePageSections.Where(d => !d.isDeleted && d.isPublished && d.corporatePageId == entry.id).OrderByDescending(d => d.priority).Select(d => new CorporatePageTemplateView
            {
                id = d.id,
                isPublished = d.isPublished,
                frontHtmlId = d.CorporatePageTemplate.frontHtmlId,
                frontHtmlClass = d.CorporatePageTemplate.title,
                isDeleted = d.CorporatePageTemplate.isDeleted,
                isEntry = d.CorporatePageTemplate.hasEntry,
            });
            corporatePageTemplates = corporatePageTemplates.Where(d => d.isEntry == false && !d.isDeleted);
            return (new CorporatePageView
            {
                title = entry.title,
                urlTitle = GetUrlTitle(entry.title),
                subTitle = entry.subTitle,
                subTitle1 = entry.subTitle1,
                smallDescription = translatedItem == null ? entry.smallDescription : translatedItem.smallDescription,
                isPublished = entry.isPublished,
                description = entry.description,
                labelLink = entry.labelLink,
                link = entry.link,
                imgSrc = entry.imgSrc == "" || entry.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/corporatepages/" : "images/" + imgsize + "/") + entry.imgSrc,
                imgSrcHover = entry.imgSrcHover == "" || entry.imgSrcHover == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/corporatepages/" : "images/" + imgsize + "/") + entry.imgSrcHover,
                corporatePageTemplates = corporatePageTemplates.ToList()


            });


        }

        #region Front End
        public List<ContactInfo> GetContactInfoData(string imgsize = "", string imgsize1 = "", string imgsize2 = "")
        {



            var entriesResults = new List<ContactInfo>();
            var entries = db.ContactInfos.Where(d => d.isPublished && !d.isDeleted);

            foreach (var entryItem in entries)
            {
                entriesResults.Add(new ContactInfo
                {
                    id = entryItem.id,
                    title = entryItem.title,
                    address = entryItem.address,
                    fax = entryItem.fax,
                    phone = entryItem.phone,
                    email = entryItem.email,
                    link = entryItem.link,
                    mobile = entryItem.mobile,
                    postCode = entryItem.postCode,
                    directPhone = entryItem.directPhone,
                    googleMapLatitude = entryItem.googleMapLatitude,
                    googleMapLongitude = entryItem.googleMapLongitude,
                    googleMapZoom = entryItem.googleMapZoom,
                    whatsapp = entryItem.whatsapp,
                    isMainAddress = entryItem.isMainAddress,

                });
            }

            return entriesResults;
        }
        #endregion

    }
}