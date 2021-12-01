using PolicyInitiativeFront.Controllers;
using PolicyInitiativeFront.Helpers;
using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    #region Models
    [MetadataType(typeof(CorporatePageSectionValidation))]
    public partial class CorporatePageSection
    {
        public string frontHtmlId { get; set; }
        public string smallImgSrc { get; set; }
        public string largeImgSrc { get; set; }
        public string smallImgSrcSecondary { get; set; }
        public string largeImgSrcSecondary { get; set; }
        public string urlTitle { get; set; }
        public string videoId { get; set; }
        public int templateId { get; set; }
        public List<int> RelatedEKomCategories { get; set; }
        public List<int> RelatedEKomCategories1 { get; set; }
        public List<int> RelatedEKomCollections { get; set; }
        public List<int> RelatedEKomProducts { get; set; }
        public List<CorporatePageSection> subSections { get; set; }

        public IEnumerable<ImageView> images { get; set; }

        public string videos { get; set; }
        public string files { get; set; }

        public List<UploaderCorporatePageSectionMediaModel> MediaFields { get; set; }
    }

    public class UploaderCorporatePageSectionMediaModel
    {
        public string mediaSrc { get; set; }
        public string caption { get; set; }
        public string subCaption { get; set; }
        public string description { get; set; }
        public string link { get; set; }
        public string fieldName { get; set; }
        public string fileUploadId { get; set; }
    }

    public class CorporatePageSectionValidation
    {
        //public string title { get; set; }
    }
    #endregion

    #region Methods
    public class CorporatePageSectionRepository : SharedController
    {
        private dblinqDataContext db = new dblinqDataContext();


        public CorporatePageSection GetById(int id)
        {
            return db.CorporatePageSections.FirstOrDefault(d => d.id == id && !d.isDeleted);
        }

        public CorporatePageSection GetByParentId(int id)
        {
            return db.CorporatePageSections.FirstOrDefault(d => d.CorporatePageSection1.id == id && !d.isDeleted);
        }
        public CorporatePageTemplate GetByTemplateId(int id)
        {
            return db.CorporatePageTemplates.FirstOrDefault(d => d.id == id && !d.isDeleted);
        }


        #region Related Media 
        public void DeleteRelatedMedias(CorporatePageSection entry, int mediaType)
        {
            db.CorporatePageSectionMedias.DeleteAllOnSubmit(db.CorporatePageSectionMedias.Where(d => d.corporatePageSectionId == entry.id && d.mediaType == mediaType));
        }
        #endregion
        public List<CorporatePageSection> GetSectionDataById(int id, string language = "en", string frontHtmlId = "", string imgsize = "", string imgsize1 = "", string imgsize2 = "")
        {
            var requestedLanguageId = langrpstry.GetByCode(language).id;
            var entry = GetById(id);
            var corporatePageSectionsDirectory = "corporatePageSections";
            var model = new List<CorporatePageSection>();
            #region Get SubSections
            var entrySubSectionsResults = new List<CorporatePageSection>();
            var entrySubSections = entry.CorporatePageSections1.Where(d => !d.isDeleted && d.isPublished).OrderByDescending(d => d.priority);
            foreach (var itemSubSections in entrySubSections)
            {
                var videoId = GetYouTubeVideoIdFromUrl(itemSubSections.videoUrl);
                var subSectionsTranslatedItem = requestedLanguageId == 1 ? null : itemSubSections.CorporatePageSections.FirstOrDefault(lang => lang.languageId == requestedLanguageId);
                entrySubSectionsResults.Add(new CorporatePageSection
                {
                    id = itemSubSections.id,
                    title = subSectionsTranslatedItem == null ? itemSubSections.title : subSectionsTranslatedItem.title,
                    subtitle = subSectionsTranslatedItem == null ? itemSubSections.subtitle : subSectionsTranslatedItem.subtitle,
                    subtitle1 = subSectionsTranslatedItem == null ? itemSubSections.subtitle1 : subSectionsTranslatedItem.subtitle1,
                  
                    smallDescription = subSectionsTranslatedItem == null ? itemSubSections.smallDescription : subSectionsTranslatedItem.smallDescription,
                    description = subSectionsTranslatedItem == null ? itemSubSections.description : subSectionsTranslatedItem.description,

                    #region Image (imgSrc)
                    smallImgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: itemSubSections.imgSrc, imgsize: imgsize1, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isProduct: false, isGiftCard: false, isPortrait: false),
                    largeImgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: itemSubSections.imgSrc, imgsize: imgsize2, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                    imgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: itemSubSections.imgSrc, imgsize: imgsize, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                    imgCaption = itemSubSections.imgCaption,
                    imgSubCaption = itemSubSections.imgSubCaption,
                    imgDescription = itemSubSections.imgDescription,
                    imgLink = itemSubSections.imgLink,
                    #endregion,

                    #region Image Gallery 
                    images = itemSubSections.CorporatePageSectionMedias.Where(e => e.mediaType == 1 && e.corporatePageSectionId == itemSubSections.id).Select(e => new ImageView
                    {
                        smallImg = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize1, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                        largeImg = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize2, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                        imgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                        caption = e.caption,
                        subCaption = e.subCaption,
                        description = e.description,
                        link = e.link
                    }).ToList(),
                    #endregion
                    #region 2nd Image (imgSrcSecondary)
                    smallImgSrcSecondary = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: itemSubSections.imgSrcSecondary, imgsize: imgsize1, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isProduct: false, isGiftCard: false, isPortrait: false),
                    largeImgSrcSecondary = GetResizedImagePath(ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: itemSubSections.imgSrcSecondary, imgsize: imgsize2, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                    imgSrcSecondary = GetResizedImagePath(ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: itemSubSections.imgSrcSecondary, imgsize: imgsize1, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                    imgSecondaryCaption = itemSubSections.imgCaption,
                    imgSecondarySubCaption = itemSubSections.imgSubCaption,
                    imgSecondaryDescription = itemSubSections.imgDescription,
                    imgSecondaryLink = itemSubSections.imgLink,
                    #endregion,

                    videoUrl = videoId,
                    videoSrc = string.IsNullOrEmpty(itemSubSections.videoSrc) ? "" : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/" + corporatePageSectionsDirectory + "/" + itemSubSections.videoSrc,
                    fileSrc = string.IsNullOrEmpty(itemSubSections.fileSrc) ? "" : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/" + corporatePageSectionsDirectory + "/" + itemSubSections.fileSrc,
                    link = itemSubSections.link,
                    labelLink = itemSubSections.labelLink,

                    urlTitle = !string.IsNullOrEmpty(itemSubSections.title) ? GetUrlTitle(itemSubSections.title) : "",
                });
            }
            #endregion
            model.Add(new CorporatePageSection
            {
                frontHtmlId = frontHtmlId,
                title = entry.title,
                subtitle = entry.subtitle,
                subtitle1 = entry.subtitle1,
       
                smallDescription = entry.smallDescription,
                description = entry.description,

                #region Image (imgSrc)
                smallImgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: entry.imgSrc, imgsize: imgsize1, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isProduct: false, isGiftCard: false, isPortrait: false),
                largeImgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: entry.imgSrc, imgsize: imgsize2, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                imgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: entry.imgSrc, imgsize: imgsize, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                imgCaption = entry.imgCaption,
                imgSubCaption = entry.imgSubCaption,
                imgDescription = entry.imgDescription,
                imgLink = entry.imgLink,
                #endregion,

                #region 2nd Image (imgSrcSecondary)
                smallImgSrcSecondary = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: entry.imgSrcSecondary, imgsize: imgsize1, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isProduct: false, isGiftCard: false, isPortrait: false),
                largeImgSrcSecondary = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: entry.imgSrcSecondary, imgsize: imgsize2, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                imgSrcSecondary = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: entry.imgSrcSecondary, imgsize: imgsize1, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                imgSecondaryCaption = entry.imgCaption,
                imgSecondarySubCaption = entry.imgSubCaption,
                imgSecondaryDescription = entry.imgDescription,
                imgSecondaryLink = entry.imgLink,
                #endregion,

                videoUrl = entry.videoUrl,
                videoId = GetYouTubeVideoIdFromUrl(entry.videoUrl),
                videoSrc = string.IsNullOrEmpty(entry.videoSrc) ? "" : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/" + corporatePageSectionsDirectory + "/" + entry.videoSrc,
                fileSrc = string.IsNullOrEmpty(entry.fileSrc) ? "" : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/" + corporatePageSectionsDirectory + "/" + entry.fileSrc,
                link = entry.link,
                labelLink = entry.labelLink,

                #region Image Gallery 
                images = entry.CorporatePageSectionMedias.Where(e => e.mediaType == 1).Select(e => new ImageView
                {
                    smallImg = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize1, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                    largeImg = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize2, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                    imgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize, portraitimgsize: "", imgDirectory: corporatePageSectionsDirectory, isPortrait: false),
                    caption = e.caption,
                    subCaption = e.subCaption,
                    description = e.description,
                    link = e.link
                }),
                #endregion
                subSections = entrySubSectionsResults,

            });
            return model;
        }



    }
    #endregion
}