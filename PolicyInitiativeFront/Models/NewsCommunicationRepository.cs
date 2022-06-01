
using PolicyInitiativeFront.Controllers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    partial class NewsCommunication
    {
        public string Date { get; set; }
        public string frenchtitle { get; set; }
        public string arabictitle { get; set; }
        public string arabicimgcaption { get; set; }
        public string arsmallDescription { get; set; }
        public int episodenum { get; set; }
        public string detailUrl { get; set; }
        public string pageUrl { get; set; }
        public string urlTitle { get; set; }
        public string nextUrl { get; set; }
        public string prevUrl { get; set; }
        public string arabicDesc { get; set; }
        public int ArticlesCount { get; set; }
        public List<ArticleAuthor> authors { get; set; }
        public List<ArticleAuthor> arauthors { get; set; }
        public string authorsList { get; set; }
        public string authorsarList { get; set; }
        public string artitle { get; set; }
        public List<ArticleRelatedView> relatedinitiatives { get; set; }
        public List<ArticleKeywords> keywords { get; set; }
        public List<ArcticlesRepeater> arcticlesRepeater { get; set; }
        public List<ArticleRelatedView> relatedarticles { get; set; }
        public List<ArticleRelatedView> relatedperiodicals { get; set; }
        public string articleTemplate { get; set; }
        public string ARarticleTemplate { get; set; }
        public string types { get; set; } 
        public string auth { get; set; } 
        public string newsCategory { get; set; } 
        public string publicnewsCategory { get; set; } 
        public string arnewsCategory { get; set; } 
        public string templatetitle { get; set; } 


        public bool isArabic { set; get; }
        public bool hasOnlyEnglish { set; get; }
        public bool isFrench { set; get; }
    }
    public class ArticleRelatedView
    {
        public int id { get; set; }
        public string title { get; set; }
        public string artitle { get; set; }
        public bool hasArabic { get; set; }
        public bool hasOnlyEnglish { get; set; }
        public string imgSrc { get; set; }
        public string Date { get; set; }
        public string detailUrl { get; set; }
        public string articleTemplate { get; set; }
        public string ARarticleTemplate { get; set; }
        public string smallDescription { get; set; }
        public string arsmallDescription { get; set; }
        public string urlTitle { get; set; }
        public List<ArticleAuthor> authors { get; set; }
        public List<ArticleAnalysis> analysis { get; set; }
    }
    public class ArticleAuthor
    {
        public int id { get; set; }
        public string title { get; set; }
        public string artitle { get; set; }
        public string bio { get; set; }
    }
    public class ArcticlesRepeater
    {
        public int id { get; set; }
        public string title { get; set; }
        public string Description { get; set; }
        public string ArabicDescription { get; set; }
        public string frenchDescription { get; set; }
        public string captionImage { get; set; }
        public string frenchCaptionImage { get; set; }
        public string arabicCaptionImage { get; set; }
        public string imgSrc { get; set; }
        public string arimgSrc { get; set; }
        public IEnumerable<ImageView> images { get; set; }
    }

    public class ArticlePublication
    {
        public string title { get; set; }
    }
    public class ArticleAnalysis
    {
        public string title { get; set; }
    }

    public class ArticleKeywords
    {
        public string title { get; set; }
    }

    public class NewsCommunicationRepository : SharedController
    {
        public dblinqDataContext db = new dblinqDataContext();
        public LanguageRepository langrpstry = new LanguageRepository();
        public IQueryable<NewsCommunication> GetAll()
        {
            return db.NewsCommunications.Where(d => !d.isDeleted && d.languageParentId == null).OrderByDescending(d => d.priority);
        }

        public IQueryable<NewsCommunication> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }
        public List<NewsCommunication> GetAllHomeFeaturedBanner(string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => d.isFeatured1 && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date);
            var model = new List<NewsCommunication>();

            foreach (var item in news)
            {
                model.Add(new NewsCommunication
                {
                    id = item.id,
                    title = item.title,
                    urlTitle = GetUrlTitle(item.title),
                    smallDescription = item.smallDescription,
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title) ,
                    imgSrc = item.topimgSrc == "" || item.topimgSrc == null ? (item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc) 
                    : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.topimgSrc,
                   
                });
            }
            return model;
        }
        public List<NewsCommunication> GetAllPublishedNews(string language = "en", string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date);
            var model = new List<NewsCommunication>();
            var requestedLanguageId = langrpstry.GetByCode(language).id;
       
            foreach (var item in news)
            {
                var entryTranslatedItem = requestedLanguageId == 1 ? null : item.NewsCommunications.FirstOrDefault(lang => lang.languageId == requestedLanguageId);
                model.Add(new NewsCommunication
                {

                    id = item.id,
                    title = entryTranslatedItem == null ? item.title : entryTranslatedItem.title,
                    urlTitle = GetUrlTitle(item.title),
                    hasArabic=item.hasArabic,
                    hasOnlyEnglish= entryTranslatedItem == null? true:false,
                    smallDescription = entryTranslatedItem == null ? item.smallDescription : entryTranslatedItem.smallDescription,
                    Date = item.date.Value.ToString("MM.dd.yy"),
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,

                });
            }
            return model;
        }


        public List<NewsCommunication> GetAllFeatured(int batch = 0, int pageNumber = 4, string language = "en", string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => d.isFeatured  && !d.isPublicEngagement && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date).ToList();
            var model = new List<NewsCommunication>();
            var requestedLanguageId = langrpstry.GetByCode(language).id;
           
       
            news=news.Skip(pageNumber * batch).Take(pageNumber).ToList();
       
            foreach (var item in news)
            {
                var authors = db.ArticlesAuthors.Where(x => x.ArticlesId == item.id).Select(d => d.Author);
                var authorslist = new List<ArticleAuthor>();
                var authorsarlist = new List<ArticleAuthor>();
                foreach (var entryItem in authors)
                {
                    var translated = entryItem.Authors.FirstOrDefault(lang => lang.languageId == 2);

                    authorsarlist.Add(new ArticleAuthor
                    {
                        id = entryItem.id,
                        title = translated == null ? entryItem.title : translated.title,
                        bio = translated == null ? StripTagsRegex(entryItem.bio) : StripTagsRegex(translated.bio),
                    });

                    authorslist.Add(new ArticleAuthor
                    {   id=entryItem.id,
                        title = entryItem.title,
                        bio = StripTagsRegex(entryItem.bio),
                    });

                }
                var entryTranslatedItem =  item.NewsCommunications.FirstOrDefault(lang => lang.languageId == 2);
                var arabictemplate = db.ArticleTemplates.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == item.ArticleTemplate.id).label;
                model.Add(new NewsCommunication
                {

                    id = item.id,
                    title = item.title ,
                    urlTitle = GetUrlTitle(item.title),
                    smallDescription =  item.smallDescription ,
                    arsmallDescription = entryTranslatedItem != null ? entryTranslatedItem.smallDescription : null,
                    artitle = entryTranslatedItem != null ? entryTranslatedItem.title:  null,
                    Date = item.date.HasValue ? item.date.Value.ToString("MM.dd.yy") : "",
                    hasArabic = item.hasArabic,
                    hasOnlyEnglish = entryTranslatedItem == null ? true : false,
                    authors = authorslist,
                    arauthors = authorsarlist,
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title),
                    articleTemplate = item.ArticleTemplate.label,
                    ARarticleTemplate = arabictemplate,
                });
            }
            return model;
        }
        public NewsCommunication GetArticleById(int id, string langquery = "en", string src ="" ,string imgsize = "", string imgsize1 = "", string imgsize2="")
        {
            var model = db.NewsCommunications.FirstOrDefault(d => !d.isDeleted && d.id == id && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null));
            var authorsart = model.ArticlesAuthors.Where(x => x.ArticlesId == model.id);
            //var articleTypes = db.ArticlesTypes.Where(x => x.ArticlesId == model.id);
            var relatedinitiatives = src == "init" ? (model.categoryId !=null ? db.NewsCommunications.Where(x => x.categoryId == model.categoryId && x.id != model.id && !x.isDeleted && x.isPublished).ToList() : null): null;
            var related = new List<NewsCommunication>();
            var relatedTypes = new List<NewsCommunication>();


            var getrelatedTemplate = db.NewsCommunications.Where(x => x.articleTemplateId == model.articleTemplateId && x.id != model.id && !x.isDeleted && x.isPublished).OrderByDescending(d => d.date);

            relatedTypes.AddRange(getrelatedTemplate);


            foreach (var item in authorsart)
            {
                var getrelated = db.ArticlesAuthors.Where(x => x.AuthorsId == item.AuthorsId && x.ArticlesId != model.id).Select(d => d.NewsCommunication).Where(d=>!d.isDeleted && d.isPublished).Distinct().OrderByDescending(d => d.date);

                related.AddRange(getrelated);
            }

  
         

            var translatedItem = model.NewsCommunications.FirstOrDefault(lang => lang.languageId == 2);

            var authors = authorsart.Where(x => x.ArticlesId == model.id).Select(d => d.Author);
            var authorslist = new List<ArticleAuthor>();
            foreach (var item in authors)
            {
                var translated = item.Authors.FirstOrDefault(lang => lang.languageId == 2);
                if (translated != null)
                {

                    if ( langquery == "ar")
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            id = item.id,
                            title = string.IsNullOrEmpty(translated.title) ? item.title : translated.title,
                            bio = string.IsNullOrEmpty(translated.bio) ? StripTagsRegex(item.bio) : StripTagsRegex(translated.bio),
                        });
                    }
                    else
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            id = item.id,
                            title = item.title,
                            bio = StripTagsRegex(item.bio),
                        });
                    }

                }
                else
                {
                    authorslist.Add(new ArticleAuthor
                    {
                        id = item.id,
                        title = item.title,
                        bio = StripTagsRegex(item.bio),
                    });
                }


            }
            var translatedEngage = db.EngagementCategories.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == model.engagementCategoryId);
            related = related.Distinct().ToList();
            model = (new NewsCommunication
            {

                id = model.id,
                title = langquery == "en" ? model.title : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : model.title),
                artitle =  (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : model.title),
                subtitle = langquery == "en" ? model.subtitle : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).subtitle : model.subtitle),
                hasArabic = langquery == "ar" ? true : false,
                hasOnlyEnglish = model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) == null ? true : false,
                isArabic = model.hasArabic,
                newsCategory = model.categoryId != null ? db.NewsCategories.FirstOrDefault(d=>d.id == model.categoryId).title : "",
                articleTemplateId=model.articleTemplateId,
                templatetitle = model.ArticleTemplate.title,
                arabictitle = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.title) ? "" : translatedItem.title) : "",
                urlTitle = GetUrlTitle(model.title),
                videoUrl = string.IsNullOrEmpty(model.videoUrl) ? null : model.videoUrl,
                Date = model.date.HasValue ? model.date.Value.ToString("MM.dd.yy") : "",
                smallDescription = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.smallDescription) ? model.smallDescription : translatedItem.smallDescription) : model.smallDescription,
                description = langquery == "en" ? model.description : (translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description) ? model.description : translatedItem.description) : model.description),
                quote = langquery == "en" ?model.quote : ( translatedItem != null ? (string.IsNullOrEmpty(translatedItem.quote) ? model.quote : translatedItem.quote) : model.quote), 
                note = langquery == "en" ?model.note :( translatedItem != null ? (string.IsNullOrEmpty(translatedItem.note) ? "": translatedItem.note) : model.note), 
                imgCaption = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.imgCaption) ? model.imgCaption : translatedItem.imgCaption): model.imgCaption,
                audioSrc = model.audioSrc == "" || model.audioSrc == null ? null :  model.audioSrc,
                topimgSrc = model.topimgSrc == "" || model.topimgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize2 == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize2 + "/") + model.topimgSrc,
                fileSrc = model.fileSrc == "" || model.fileSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/files/" + "/" + model.fileSrc,
                imgSrc = model.imgSrc == "" || model.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + model.imgSrc,
                isPublicEngagement=model.isPublicEngagement,
                publicnewsCategory = model.engagementCategoryId.HasValue ? model.EngagementCategory.title : "",
                arnewsCategory = model.engagementCategoryId.HasValue ? (translatedEngage != null ? db.EngagementCategories.FirstOrDefault(d => d.languageParentId == model.engagementCategoryId).title : "") : "",
                auth = string.Join("," , authors.Select(d=>d.title)),
                authors = authorslist,
                relatedinitiatives = relatedinitiatives != null ? relatedinitiatives.Select(x=>new ArticleRelatedView
                {

                    id = x.id,
                    title = x.title,
                    artitle = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? x.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : null,
                    urlTitle = GetUrlTitle(x.title),
                    hasArabic = x.hasArabic,
                    hasOnlyEnglish = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) == null ? true : false,
                    smallDescription = x.smallDescription,
                    arsmallDescription = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? x.NewsCommunications.FirstOrDefault(d => d.languageId == 2).smallDescription : null,
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title) ,
                    Date = x.date.HasValue ? x.date.Value.ToString("MM.dd.yy") : "",
                    articleTemplate=x.ArticleTemplate.label,
                    ARarticleTemplate=db.ArticleTemplates.FirstOrDefault(d=>d.languageId == 2 && d.languageParentId == x.articleTemplateId).label,
                    authors = db.ArticlesAuthors.Where(z => z.ArticlesId == x.id).Select(z => new ArticleAuthor
                    {
                        id = z.id,
                        title = z.Author.title,
                        artitle = z.Author.Authors.FirstOrDefault(d => d.languageId == 2).title,
                    }).ToList(),

                }).ToList() : null,
                arcticlesRepeater = model.articlesRepeaters.Where(d => d.parentId == model.id && !d.isDeleted && d.isPublished).OrderByDescending(d => d.priority).Select(x => new ArcticlesRepeater
                {
                    id = x.id,
                    title = x.title,
                    captionImage = x.captionImage,
                    Description=x.Description,
                    ArabicDescription =x.ArabieDescription,
                    arabicCaptionImage = x.arabicCaptionImage,
                    #region Image Gallery 
                    images = x.articlesRepeaterMedias.Where(e => e.mediaType == 1 && e.articleRepeaterId == x.id).Select(e => new ImageView
                    {
                        smallImg = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize1, portraitimgsize: "", imgDirectory: "newsCommunications", isPortrait: false),
                        largeImg = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize2, portraitimgsize: "", imgDirectory: "newsCommunications", isPortrait: false),
                        imgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize1, portraitimgsize: "", imgDirectory: "newsCommunications", isPortrait: false),
                        caption = e.caption,
                        subCaption = e.subCaption,
                        description = e.description,
                        link = e.link
                    }).ToList(),
                    #endregion
                    imgSrc = x.imgSrc == "" || x.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + x.imgSrc,
                    arimgSrc = x.arimgSrc == "" || x.arimgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + x.arimgSrc,
                }).ToList(),
                relatedarticles = related.Where(d => d.id != model.id).Select(x => new ArticleRelatedView
                {

                    id = x.id,
                    title = x.title,
                    artitle = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? x.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : null,
                    urlTitle = GetUrlTitle(x.title),
                    hasArabic = x.hasArabic,
                    hasOnlyEnglish = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) == null ? true : false,
                    smallDescription = x.smallDescription,
                    arsmallDescription = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? x.NewsCommunications.FirstOrDefault(d => d.languageId == 2).smallDescription : null,
                    articleTemplate = x.ArticleTemplate.label,
                    ARarticleTemplate = db.ArticleTemplates.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == x.articleTemplateId).label,
                    detailUrl =  ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title) ,
                    Date = x.date.HasValue ? x.date.Value.ToString("MM.dd.yy") : "",
                    authors = db.ArticlesAuthors.Where(z => z.ArticlesId == x.id).Select(z => new ArticleAuthor
                    {
                        id = z.id,
                        title = z.Author.title,
                        artitle= z.Author.Authors.FirstOrDefault(d=>d.languageId == 2).title,
                    }).ToList(),
                }).ToList(),
                relatedperiodicals =  relatedTypes.Where(d => d.id != model.id).Select(x => new ArticleRelatedView
                {

                    id = x.id,
                    title = x.title,
                    artitle = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? x.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : null,
                    urlTitle = GetUrlTitle(x.title),
                    hasArabic = x.hasArabic,
                    hasOnlyEnglish = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) == null ? true : false,
                    smallDescription = x.smallDescription,
                    arsmallDescription = x.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? x.NewsCommunications.FirstOrDefault(d => d.languageId == 2).smallDescription : null,
                    articleTemplate = x.ArticleTemplate.label,
                    ARarticleTemplate = db.ArticleTemplates.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == x.articleTemplateId).label,
                    detailUrl =ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title),
                    Date = x.date.HasValue ? x.date.Value.ToString("MM.dd.yy") : "",
                    authors = db.ArticlesAuthors.Where(z => z.ArticlesId == x.id).Select(z => new ArticleAuthor
                    {
                        id = z.id,
                        title = z.Author.title,
                        artitle = z.Author.Authors.FirstOrDefault(d => d.languageId == 2).title,
                    }).ToList(),
                }).ToList(),
            });

            return model;

        }

        public List<NewsCommunication> GetAllArticles()//sitemap
        {
            var news = GetAllIsPublished().OrderByDescending(d => d.date);
            var model = new List<NewsCommunication>();

            foreach (var item in news)
            {
                model.Add(new NewsCommunication
                {

                    id = item.id,
                    title = item.title,
                    urlTitle = GetUrlTitle(item.title),

                });
            }
            return model;
        }
        public NewsCommunication GetById(int id)
        {
            return db.NewsCommunications.FirstOrDefault(d => !d.isDeleted && d.id == id && d.isPublished == true);
        }


        public List<NewsCommunication> GetSearchData(string title="",string language = "en", string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date);
            var model = new List<NewsCommunication>();

            news=news.Where(d=>d.title.ToLower().Contains(title.ToLower()) || (d.smallDescription != null && d.smallDescription.ToLower().Contains(title.ToLower())) 
            //|| d.articlesRepeaters.Any(d=>(d.Description.ToLower().Contains(title.ToLower()) && d.Description != null ) || (d.ArabieDescription != null && d.ArabieDescription.ToLower().Contains(title.ToLower())))
            || (d.description != null && d.description.ToLower().Contains(title.ToLower()))  
            || d.NewsCategory.title.ToLower().Contains(title.ToLower()) || d.EngagementCategory.title.ToLower().Contains(title.ToLower())).OrderByDescending(d => d.date);
           
            var getType = db.TypeArticles.FirstOrDefault(d => d.title.ToLower() ==  title.ToLower());

            if(getType != null)
            {
                if (getType.languageParentId == null)
                {
                    news = news.Where(d => d.ArticlesTypes.Any(x => x.TypeId == getType.id)).OrderByDescending(d => d.date);
                }
                else
                {
                    news = news.Where(d => d.ArticlesTypes.Any(x => x.TypeId == getType.languageParentId)).OrderByDescending(d => d.date);
                }
            }
        
            var getkeyword = db.Keywords.FirstOrDefault(d => d.title.ToLower()==title.ToLower());

            if(getkeyword != null)
            {
                if (getkeyword.languageParentId == null)
                {
                    news = news.Where(d => d.ArticlesKeywords.Any(x => x.KeywordId == getkeyword.id)).OrderByDescending(d => d.date);

                }
                else
                {
                    news = news.Where(d => d.ArticlesKeywords.Any(x => x.KeywordId == getkeyword.languageParentId)).OrderByDescending(d => d.date);
                }
            }

       
            foreach (var item in news)
            {
               
                model.Add(new NewsCommunication
                {
                    id = item.id,
                    title =  item.title,
                    ExternalLink =  item.ExternalLink,
                    artitle = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? item.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : null,
                    urlTitle = GetUrlTitle(item.title),
                    hasArabic = item.hasArabic,
                    hasOnlyEnglish = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) == null ? true : false,
                    smallDescription = item.smallDescription,
                    arabicDesc = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? item.NewsCommunications.FirstOrDefault(d => d.languageId == 2).smallDescription : null,
                    Date = item.date.Value.ToString("MM.dd.yy"),
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                    authorsList = item.ArticlesAuthors.Select(d => string.Join(",", d.Author.title)).FirstOrDefault(),
                    authorsarList = item.ArticlesAuthors.Select(d => d.Author.Authors.FirstOrDefault(x => x.languageId == 2) != null ? string.Join(",", d.Author.Authors.FirstOrDefault(x => x.languageId == 2).title) : null).FirstOrDefault(),
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title),
                    //detailUrl = item.articleTemplateId == null ? item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    //: (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title)))
                    //: (item.articleTemplateId == 1 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 2 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 3 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 4 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : null),

                });
            }

            return model;

        }
        public static string StripTagsRegex(string source)
        {
            if(!String.IsNullOrEmpty(source))
            {
                return Regex.Replace(source, "<.*?>", string.Empty);
            }
            else
            {
                return null;
            }
     
        }
        public List<NewsCommunication> GetAllByCategoryId(int id,string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => d.categoryId == id &&  (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date);
            var model = new List<NewsCommunication>();

            foreach (var item in news)
            {
                var authors = item.ArticlesAuthors.Select(d => d.Author);
                var authorslist = new List<ArticleAuthor>();
                var authorsarlist = new List<ArticleAuthor>();
                foreach (var entryItem in authors)
                {
                    var translated = entryItem.Authors.FirstOrDefault(lang => lang.languageId == 2);

                    authorsarlist.Add(new ArticleAuthor
                    {
                        id = entryItem.id,
                        title = translated == null ? entryItem.title : translated.title,
                        bio = translated == null ? StripTagsRegex(entryItem.bio) : StripTagsRegex(translated.bio),
                    });

                    authorslist.Add(new ArticleAuthor
                    {
                        id = entryItem.id,
                        title = entryItem.title,
                        bio = StripTagsRegex(entryItem.bio),
                    });

                }
                var arabictemplate = db.ArticleTemplates.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == item.ArticleTemplate.id);
                model.Add(new NewsCommunication
                {

                    id = item.id,
                    title = item.title,
                    artitle = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? item.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : null,
                    urlTitle = GetUrlTitle(item.title),
                    Date = item.date.Value.ToString("MM.dd.yy"),
                    smallDescription = item.smallDescription,
                    arabicDesc = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? item.NewsCommunications.FirstOrDefault(d => d.languageId == 2).smallDescription : null,
                    authors = authorslist,
                    hasOnlyEnglish= item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) == null ? true : false,
                    arauthors = authorsarlist,
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title),
                    //detailUrl = item.articleTemplateId == null ? item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    //: (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title)))
                    //: (item.articleTemplateId == 1 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 2 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 3 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 4 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : null),

                    //detailUrl = item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    //: (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title))),
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                    articleTemplate = item.ArticleTemplate.label,
                    ARarticleTemplate = arabictemplate != null ? arabictemplate.label : null,
                });
            }
            return model;
        }



        public List<NewsCommunication> GetAllEngagement(int batch = 0, int pageNumber = 4, string language = "en", string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => d.isPublicEngagement && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date).ToList();
            var model = new List<NewsCommunication>();
            var requestedLanguageId = langrpstry.GetByCode(language).id;


            news = news.Skip(pageNumber * batch).Take(pageNumber).ToList();

            foreach (var item in news)
            {
           
                var entryTranslatedItem = item.NewsCommunications.FirstOrDefault(lang => lang.languageId == 2);
                var arabictemplate = db.ArticleTemplates.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == item.ArticleTemplate.id).label;
                var arnewsCategory = db.EngagementCategories.FirstOrDefault(d => d.languageParentId == item.engagementCategoryId);
                model.Add(new NewsCommunication
                {

                    id = item.id,
                    title = item.title,
                    urlTitle = GetUrlTitle(item.title),
                    smallDescription = item.smallDescription,
                    description = language == "en" ? item.description : (entryTranslatedItem != null ? (string.IsNullOrEmpty(entryTranslatedItem.description) ? item.description : entryTranslatedItem.description) : item.description),
                    arsmallDescription = entryTranslatedItem != null ? entryTranslatedItem.smallDescription : null,
                    artitle = entryTranslatedItem != null ? entryTranslatedItem.title : null,
                    Date = item.date.HasValue ? item.date.Value.ToString("MM.dd.yy") : "",
                    hasArabic = item.hasArabic,
                    hasOnlyEnglish= entryTranslatedItem == null ? true : false,
                    newsCategory = item.engagementCategoryId.HasValue ? item.EngagementCategory.title :"",
                    arnewsCategory= item.engagementCategoryId.HasValue && arnewsCategory != null ? arnewsCategory.title : "",
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title),
                    articleTemplate = item.ArticleTemplate.label,
                    ARarticleTemplate = arabictemplate,
                    ExternalLink = item.ExternalLink,
                });
            }
            return model;
        }

        public List<NewsCommunication> GetAllFeaturedEngagement(int batch = 0, int pageNumber = 4, string language = "en", string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => d.isPublicEngagement && d.isPEFeatured && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date).ToList();
            var model = new List<NewsCommunication>();
            var requestedLanguageId = langrpstry.GetByCode(language).id;


            //news = news.Skip(pageNumber * batch).Take(pageNumber).ToList();

            foreach (var item in news)
            {

                var entryTranslatedItem = item.NewsCommunications.FirstOrDefault(lang => lang.languageId == 2);
                var arabictemplate = db.ArticleTemplates.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == item.ArticleTemplate.id).label;
                var arnewsCategory = db.EngagementCategories.FirstOrDefault(d => d.languageParentId == item.engagementCategoryId);
                model.Add(new NewsCommunication
                {

                    id = item.id,
                    title = item.title,
                    urlTitle = GetUrlTitle(item.title),
                    smallDescription = item.smallDescription,
                    description = language == "en" ? item.description : (entryTranslatedItem != null ? (string.IsNullOrEmpty(entryTranslatedItem.description) ? item.description : entryTranslatedItem.description) : item.description),
                    arsmallDescription = entryTranslatedItem != null ? entryTranslatedItem.smallDescription : null,
                    artitle = entryTranslatedItem != null ? entryTranslatedItem.title : null,
                    Date = item.date.HasValue ? item.date.Value.ToString("MM.dd.yy") : "",
                    hasArabic = item.hasArabic,
                    hasOnlyEnglish = entryTranslatedItem == null ? true : false,
                    newsCategory = item.engagementCategoryId.HasValue ? item.EngagementCategory.title : "",
                    arnewsCategory = item.engagementCategoryId.HasValue && arnewsCategory != null ? arnewsCategory.title : "",
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                    detailUrl = ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title),
                    articleTemplate = item.ArticleTemplate.label,
                    ARarticleTemplate = arabictemplate,
                    ExternalLink = item.ExternalLink,
                });
            }
            return model;
        }
    }
}