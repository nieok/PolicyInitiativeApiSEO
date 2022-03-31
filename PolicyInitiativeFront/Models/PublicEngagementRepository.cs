
using PolicyInitiativeFront.Controllers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    partial class PublicEngagement
    {
        public string Date { get; set; }
        public string arabictitle { get; set; }
        public string arabicimgcaption { get; set; }
        public string arsmallDescription { get; set; }
        public string detailUrl { get; set; }
        public string pageUrl { get; set; }
        public string urlTitle { get; set; }
        public string nextUrl { get; set; }
        public string prevUrl { get; set; }
        public string arabicDesc { get; set; }
        public int ArticlesCount { get; set; }
        public string artitle { get; set; }
        public string articleTemplate { get; set; }
        public string ARarticleTemplate { get; set; }
        public string newsCategory { get; set; }
        public string publicnewsCategory { get; set; }
        public string arnewsCategory { get; set; }
        public string templatetitle { get; set; }
        public bool isArabic { set; get; }
        public bool hasOnlyEnglish { set; get; }
      
    }
 

    public class PublicEngagementRepository : SharedController
    {
        public dblinqDataContext db = new dblinqDataContext();
        public LanguageRepository langrpstry = new LanguageRepository();
        public IQueryable<PublicEngagement> GetAll()
        {
            return db.PublicEngagements.Where(d => !d.isDeleted && d.languageParentId == null).OrderByDescending(d => d.priority);
        }

        public IQueryable<PublicEngagement> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }
     
        public PublicEngagement GetArticleById(int id, string langquery = "en", string src = "", string imgsize = "", string imgsize1 = "", string imgsize2 = "")
        {
            var model = db.PublicEngagements.FirstOrDefault(d => !d.isDeleted && d.id == id && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null));
        
            var translatedItem = model.PublicEngagements.FirstOrDefault(lang => lang.languageId == 2);

            var translatedEngage = db.EngagementCategories.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == model.engagementCategoryId);
         
            model = (new PublicEngagement
            {

                id = model.id,
                title = langquery == "en" ? model.title : (model.PublicEngagements.FirstOrDefault(d => d.languageId == 2) != null ? model.PublicEngagements.FirstOrDefault(d => d.languageId == 2).title : model.title),
                artitle = (model.PublicEngagements.FirstOrDefault(d => d.languageId == 2) != null ? model.PublicEngagements.FirstOrDefault(d => d.languageId == 2).title : model.title),
                subtitle = langquery == "en" ? model.subtitle : (model.PublicEngagements.FirstOrDefault(d => d.languageId == 2) != null ? model.PublicEngagements.FirstOrDefault(d => d.languageId == 2).subtitle : model.subtitle),
                hasArabic = langquery == "ar" ? true : false,
                hasOnlyEnglish = model.PublicEngagements.FirstOrDefault(d => d.languageId == 2) == null ? true : false,
                isArabic = model.hasArabic,
                newsCategory = model.categoryId != null ? db.NewsCategories.FirstOrDefault(d => d.id == model.categoryId).title : "",
                articleTemplateId = model.articleTemplateId,
                templatetitle = model.ArticleTemplate.title,
                arabictitle = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.title) ? "" : translatedItem.title) : "",
                urlTitle = GetUrlTitle(model.title),
                videoUrl = string.IsNullOrEmpty(model.videoUrl) ? null : model.videoUrl,
                Date = model.date.HasValue ? model.date.Value.ToString("dd.MM.yy") : "",
                smallDescription = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.smallDescription) ? model.smallDescription : translatedItem.smallDescription) : model.smallDescription,
                description = langquery == "en" ? model.description : (translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description) ? model.description : translatedItem.description) : model.description),
                imgCaption = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.imgCaption) ? model.imgCaption : translatedItem.imgCaption) : model.imgCaption,
                audioSrc = model.audioSrc == "" || model.audioSrc == null ? null : model.audioSrc,
                topimgSrc = model.topimgSrc == "" || model.topimgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize2 == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize2 + "/") + model.topimgSrc,
                fileSrc = model.fileSrc == "" || model.fileSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/files/" + "/" + model.fileSrc,
                imgSrc = model.imgSrc == "" || model.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + model.imgSrc,
                publicnewsCategory = model.engagementCategoryId.HasValue ? model.EngagementCategory.title : "",
                arnewsCategory = model.engagementCategoryId.HasValue ? (translatedEngage != null ? db.EngagementCategories.FirstOrDefault(d => d.languageParentId == model.engagementCategoryId).title : "") : "",
          
           
            });

            return model;

        }

        public List<PublicEngagement> GetAllArticles()//sitemap
        {
            var news = GetAllIsPublished().OrderByDescending(d => d.date);
            var model = new List<PublicEngagement>();

            foreach (var item in news)
            {
                model.Add(new PublicEngagement
                {

                    id = item.id,
                    title = item.title,
                    urlTitle = GetUrlTitle(item.title),

                });
            }
            return model;
        }
        public PublicEngagement GetById(int id)
        {
            return db.PublicEngagements.FirstOrDefault(d => !d.isDeleted && d.id == id && d.isPublished == true);
        }


        public List<PublicEngagement> GetAllEngagement(int batch = 0, int pageNumber = 4, string language = "en", string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d =>  (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date).ToList();
            var model = new List<PublicEngagement>();
            var requestedLanguageId = langrpstry.GetByCode(language).id;


            news = news.Skip(pageNumber * batch).Take(pageNumber).ToList();

            foreach (var item in news)
            {

                var entryTranslatedItem = item.PublicEngagements.FirstOrDefault(lang => lang.languageId == 2);
                var arabictemplate = db.ArticleTemplates.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == item.ArticleTemplate.id).label;
                var arnewsCategory = db.EngagementCategories.FirstOrDefault(d => d.languageParentId == item.engagementCategoryId);
                model.Add(new PublicEngagement
                {

                    id = item.id,
                    title = item.title,
                    urlTitle = GetUrlTitle(item.title),
                    smallDescription = item.smallDescription,
                    description = language == "en" ? item.description : (entryTranslatedItem != null ? (string.IsNullOrEmpty(entryTranslatedItem.description) ? item.description : entryTranslatedItem.description) : item.description),
                    arsmallDescription = entryTranslatedItem != null ? entryTranslatedItem.smallDescription : null,
                    artitle = entryTranslatedItem != null ? entryTranslatedItem.title : null,
                    Date = item.date.HasValue ? item.date.Value.ToString("dd.MM.yy") : "",
                    hasArabic = item.hasArabic,
                    hasOnlyEnglish = entryTranslatedItem == null ? true : false,
                    newsCategory = item.engagementCategoryId.HasValue ? item.EngagementCategory.title : "",
                    arnewsCategory = item.engagementCategoryId.HasValue && arnewsCategory != null ? arnewsCategory.title : "",
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "engagement/details/" + item.id + "/" + GetUrlTitle(item.title),
                    articleTemplate = item.ArticleTemplate.label,
                    ARarticleTemplate = arabictemplate,
                    ExternalLink = item.ExternalLink,
                });
            }
            return model;
        }

        public List<PublicEngagement> GetAllFeaturedEngagement(int batch = 0, int pageNumber = 4, string language = "en", string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d =>  d.isFeatured && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date).ToList();
            var model = new List<PublicEngagement>();
            var requestedLanguageId = langrpstry.GetByCode(language).id;

            news = news.Skip(pageNumber * batch).Take(pageNumber).ToList();

            foreach (var item in news)
            {
                var entryTranslatedItem = item.PublicEngagements.FirstOrDefault(lang => lang.languageId == 2);
                var arabictemplate = db.ArticleTemplates.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == item.ArticleTemplate.id).label;
                var arnewsCategory = db.EngagementCategories.FirstOrDefault(d => d.languageParentId == item.engagementCategoryId);
                model.Add(new PublicEngagement
                {
                    id = item.id,
                    title = item.title,
                    urlTitle = GetUrlTitle(item.title),
                    smallDescription = item.smallDescription,
                    description = language == "en" ? item.description : (entryTranslatedItem != null ? (string.IsNullOrEmpty(entryTranslatedItem.description) ? item.description : entryTranslatedItem.description) : item.description),
                    arsmallDescription = entryTranslatedItem != null ? entryTranslatedItem.smallDescription : null,
                    artitle = entryTranslatedItem != null ? entryTranslatedItem.title : null,
                    Date = item.date.HasValue ? item.date.Value.ToString("dd.MM.yy") : "",
                    hasArabic = item.hasArabic,
                    hasOnlyEnglish = entryTranslatedItem == null ? true : false,
                    newsCategory = item.engagementCategoryId.HasValue ? item.EngagementCategory.title : "",
                    arnewsCategory = item.engagementCategoryId.HasValue && arnewsCategory != null ? arnewsCategory.title : "",
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "engagement/details/" + item.id + "/" + GetUrlTitle(item.title),
                    articleTemplate = item.ArticleTemplate.label,
                    ARarticleTemplate = arabictemplate,
                    ExternalLink = item.ExternalLink,
                });
            }
            return model;
        }
    }
}