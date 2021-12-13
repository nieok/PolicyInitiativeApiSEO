
using PolicyInitiativeFront.Controllers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    partial class NewsCommunication
    {
        public string Date { get; set; }
        public string frenchtitle { get; set; }
        public string arabictitle { get; set; }
        public string arabicimgcaption { get; set; }
        public int episodenum { get; set; }
        public string detailUrl { get; set; }
        public string pageUrl { get; set; }
        public string urlTitle { get; set; }
        public string nextUrl { get; set; }
        public string prevUrl { get; set; }
        public string arabicDesc { get; set; }
        public int ArticlesCount { get; set; }
        public List<ArticleAuthor> authors { get; set; }
        public string authorsList { get; set; }
        public string authorsarList { get; set; }
        public string artitle { get; set; }
        public List<ArticleAnalysis> analysis { get; set; }
        public List<ArticleKeywords> keywords { get; set; }
        public List<ArticlePublication> publications { get; set; }
        public List<ArcticlesRepeater> arcticlesRepeater { get; set; }
        public List<ArticleRelatedView> relatedarticles { get; set; }
        public List<ArticleRelatedView> relatedperiodicals { get; set; }

        public bool isArabic { set; get; }
        public bool isFrench { set; get; }
    }
    public class ArticleRelatedView
    {
        public int id { get; set; }
        public string title { get; set; }
        public bool hasArabic { get; set; }
        public string imgSrc { get; set; }
        public string Date { get; set; }
        public string detailUrl { get; set; }
        public string smallDescription { get; set; }
        public string urlTitle { get; set; }
        public List<ArticleAuthor> authors { get; set; }
        public List<ArticleAnalysis> analysis { get; set; }
    }
    public class ArticleAuthor
    {
        public string title { get; set; }
        public string authorbio { get; set; }
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
                    //detailUrl = item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    //: (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title))),
                    detailUrl = item.articleTemplateId == null ? item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    : (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title)))
                    : (item.articleTemplateId == 1 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 2 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 3 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 4 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : null),

                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                   
                   
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
                    smallDescription = entryTranslatedItem == null ? item.smallDescription : entryTranslatedItem.smallDescription,
                    Date = item.date.Value.ToString("dd.MM.yy"),
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,

                });
            }
            return model;
        }


        public List<NewsCommunication> GetAllFeatured(string language = "en", string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => d.isFeatured && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date).ToList();
            var model = new List<NewsCommunication>();
            var requestedLanguageId = langrpstry.GetByCode(language).id;
           
            if (news.Count() > 4)
            {
                news = news.Take(4).ToList();
            }
         
            foreach (var item in news)
            {
                var entryTranslatedItem = requestedLanguageId == 1 ? null : item.NewsCommunications.FirstOrDefault(lang => lang.languageId == requestedLanguageId);
                model.Add(new NewsCommunication
                {

                    id = item.id,
                    title = entryTranslatedItem == null ? item.title : entryTranslatedItem.title,
                    urlTitle = GetUrlTitle(item.title),
                    smallDescription = entryTranslatedItem == null ? item.smallDescription : entryTranslatedItem.smallDescription,
                    Date = item.date.Value.ToString("dd.MM.yy"),
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,

                });
            }
            return model;
        }
        public NewsCommunication GetArticleById(int id, string langquery = "en", string imgsize = "", string imgsize1 = "", string imgsize2="")
        {
            var model = db.NewsCommunications.FirstOrDefault(d => !d.isDeleted && d.id == id && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null));
            var authorsart = db.ArticlesAuthors.Where(x => x.ArticlesId == model.id);
            var articleTypes = db.ArticlesTypes.Where(x => x.ArticlesId == model.id);
            var related = new List<NewsCommunication>();
            var relatedfiltered = new List<NewsCommunication>();
            var relatedTypes = new List<NewsCommunication>();
            var relatedfilteredTypes = new List<NewsCommunication>();
            foreach (var item in articleTypes)
            {
                var getrelated = db.ArticlesTypes.Where(x => x.TypeId == item.TypeId && x.ArticlesId != model.id).Select(d => d.NewsCommunication).OrderByDescending(d => d.date).ToList();

                relatedTypes.AddRange(getrelated);
            }

            if (relatedTypes.Count == 0)
            {
                var getrelated = GetAllIsPublished().OrderByDescending(d => d.date).ToList().Take(10);
                relatedfiltered.AddRange(getrelated);
            }
            else
            {
                relatedfilteredTypes.AddRange(relatedTypes.Take(10));
            }

            foreach (var item in authorsart)
            {
                var getrelated = db.ArticlesAuthors.Where(x => x.AuthorsId == item.AuthorsId && x.ArticlesId != model.id).Select(d => d.NewsCommunication).OrderByDescending(d => d.date).ToList();

                related.AddRange(getrelated);
            }

            if (related.Count == 0)
            {
                var getrelated = GetAllIsPublished().OrderByDescending(d => d.date).ToList().Take(10);
                relatedfiltered.AddRange(getrelated);
            }
            else
            {
                relatedfiltered.AddRange(related.Take(10));
            }



            var translatedItem = model.NewsCommunications.FirstOrDefault(lang => lang.languageId == 2);

            var authors = db.ArticlesAuthors.Where(x => x.ArticlesId == model.id).Select(d => d.Author);
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
                            title = string.IsNullOrEmpty(translated.title) ? item.title : translated.title,
                            authorbio = string.IsNullOrEmpty(translated.bio) ? item.bio : translated.bio,
                        });
                    }
                    else
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            title = item.title,
                            authorbio = item.bio,
                        });
                    }

                }
                else
                {
                    authorslist.Add(new ArticleAuthor
                    {
                        title = item.title,
                        authorbio = item.bio,
                    });
                }


            }

            model = (new NewsCommunication
            {

                id = model.id,
                title = langquery == "en" ? model.title : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : model.title),
                subtitle = langquery == "en" ? model.subtitle : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).subtitle : model.subtitle),
                //title = translatedItem != null ?( string.IsNullOrEmpty(translatedItem.title) ? model.title : translatedItem.title): model.title,
                hasArabic = langquery == "ar" ? true : false,
                isArabic = model.hasArabic,
                arabictitle = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.title) ? "" : translatedItem.title) : "",
                urlTitle = GetUrlTitle(model.title),
                videoUrl = string.IsNullOrEmpty(model.videoUrl) ? null : model.videoUrl,
                Date = model.date.HasValue ? model.date.Value.ToString("dd.MM.yy") : "",
                smallDescription = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.smallDescription) ? model.smallDescription : translatedItem.smallDescription) : model.smallDescription,
                description = langquery == "en" ? model.description : (translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description) ? model.description : translatedItem.description) : model.description),
                //description1 = langquery == "en" ? model.description1 : (translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description1) ? model.description1 : translatedItem.description1) : model.description1),
                //description2 = langquery == "en" ? model.description2 : ( translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description2) ? model.description2 : translatedItem.description) : model.description2),
                //description3 =langquery == "en" ? model.description3 : ( translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description3) ? model.description3 : translatedItem.description3) : model.description3), 
                quote = langquery == "en" ?model.quote : ( translatedItem != null ? (string.IsNullOrEmpty(translatedItem.quote) ? model.quote : translatedItem.quote) : model.quote), 
                note = langquery == "en" ?model.note :( translatedItem != null ? (string.IsNullOrEmpty(translatedItem.note) ? model.note : translatedItem.note) : model.note), 
                imgCaption = translatedItem != null ? (string.IsNullOrEmpty(translatedItem.imgCaption) ? model.imgCaption : translatedItem.imgCaption): model.imgCaption,
                audioSrc = model.audioSrc == "" || model.audioSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] +  "content/uploads/audio/"  + model.audioSrc,
                topimgSrc = model.topimgSrc == "" || model.topimgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize2 == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize2 + "/") + model.topimgSrc,
                fileSrc = model.fileSrc == "" || model.fileSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/files/" + "/" + model.fileSrc,
                imgSrc = model.imgSrc == "" || model.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + model.imgSrc,
                DetailsImage = model.DetailsImage == "" || model.DetailsImage == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + model.DetailsImage,
                imgSubCaption = langquery == "ar" ? (translatedItem != null ? (string.IsNullOrEmpty(translatedItem.imgSubCaption) ? model.imgSubCaption : translatedItem.imgSubCaption) : model.imgSubCaption) : model.imgSubCaption,
           
                authors = authorslist,

                arcticlesRepeater = model.articlesRepeaters.Where(d => d.parentId == model.id && !d.isDeleted && d.isPublished).Select(x => new ArcticlesRepeater
                {
                    id = x.id,
                    title = x.title,
                    captionImage = x.captionImage,
                    Description=x.Description,
                    ArabicDescription=x.ArabieDescription,
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
                    imgSrc = x.imgSrc == "" || x.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize1 == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize1 + "/") + x.imgSrc,
                }).ToList(),
                relatedarticles = relatedfiltered.Where(d => d.id != model.id).Select(x => new ArticleRelatedView
                {

                    id = x.id,
                    title = x.title,
                    urlTitle = GetUrlTitle(x.title),
                    hasArabic = x.hasArabic,
                    smallDescription = x.smallDescription,
                    //detailUrl = x.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + x.id + "/" + GetUrlTitle(x.title)
                    //: (x.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + x.id + "/" + GetUrlTitle(x.title) : (x.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + x.id + "/" + GetUrlTitle(x.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title))),
                    detailUrl = x.articleTemplateId == null ? x.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + x.id + "/" + GetUrlTitle(x.title)
                    : (x.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + x.id + "/" + GetUrlTitle(x.title) : (x.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + x.id + "/" + GetUrlTitle(x.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title)))
                    : (x.articleTemplateId == 1 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title) : x.articleTemplateId == 2 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + x.id + "/" + GetUrlTitle(x.title) : x.articleTemplateId == 3 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + x.id + "/" + GetUrlTitle(x.title) : x.articleTemplateId == 4 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + x.id + "/" + GetUrlTitle(x.title) : null),

                    Date = x.date.HasValue ? x.date.Value.ToString("dd.MM.yy") : "",
                    authors = db.ArticlesAuthors.Where(z => z.ArticlesId == x.id).Select(z => new ArticleAuthor
                    {
                        title = z.Author.title
                    }).ToList(),
                }).ToList(),
                relatedperiodicals = relatedfilteredTypes.Where(d => d.id != model.id).Select(x => new ArticleRelatedView
                {

                    id = x.id,
                    title = x.title,
                    urlTitle = GetUrlTitle(x.title),
                    hasArabic = x.hasArabic,
                    smallDescription = x.smallDescription,
                    //detailUrl = x.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + x.id + "/" + GetUrlTitle(x.title)
                    //: (x.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + x.id + "/" + GetUrlTitle(x.title) : (x.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + x.id + "/" + GetUrlTitle(x.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title))),
                    detailUrl = x.articleTemplateId == null ? x.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + x.id + "/" + GetUrlTitle(x.title)
                    : (x.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + x.id + "/" + GetUrlTitle(x.title) : (x.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + x.id + "/" + GetUrlTitle(x.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title)))
                    : (x.articleTemplateId == 1 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + x.id + "/" + GetUrlTitle(x.title) : x.articleTemplateId == 2 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + x.id + "/" + GetUrlTitle(x.title) : x.articleTemplateId == 3 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + x.id + "/" + GetUrlTitle(x.title) : x.articleTemplateId == 4 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + x.id + "/" + GetUrlTitle(x.title) : null),

                    Date = x.date.HasValue ? x.date.Value.ToString("dd.MM.yy") : "",
                    authors = db.ArticlesAuthors.Where(z => z.ArticlesId == x.id).Select(z => new ArticleAuthor
                    {
                        title = z.Author.title
                    }).ToList(),
                }).ToList(),
            });

            return model;

        }
        public NewsCommunication GetArticleVideoById(int id, string langquery = "en", string imgsize = "", string imgsize1 = "", string imgsize2 = "")
        {
            var model = db.NewsCommunications.FirstOrDefault(d => !d.isDeleted && d.id == id && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null));
            var articletypes = db.ArticlesTypes.Where(x => x.ArticlesId == model.id);
            var related = new List<NewsCommunication>();
            var relatedfiltered = new List<NewsCommunication>();

            foreach (var item in articletypes)
            {
                var getrelated = db.ArticlesTypes.Where(x => x.TypeId == item.TypeId && x.ArticlesId != model.id).Select(d => d.NewsCommunication).OrderByDescending(d => d.date).ToList();

                related.AddRange(getrelated);
            }

            if (related.Count == 0)
            {
                var getrelated = GetAllIsPublished().OrderByDescending(d => d.date).ToList().Take(10);
                relatedfiltered.AddRange(getrelated);
            }
            else
            {
                relatedfiltered.AddRange(related.Take(10));
            }


            var translatedItem = model.NewsCommunications.FirstOrDefault(lang => lang.languageId == 2);

            var authors = db.ArticlesAuthors.Where(x => x.ArticlesId == model.id).Select(d => d.Author);
            var authorslist = new List<ArticleAuthor>();
            foreach (var item in authors)
            {
                var translated = item.Authors.FirstOrDefault(lang => lang.languageId == 2);
                if (translated != null)
                {

                    if (langquery == "ar")
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            title = string.IsNullOrEmpty(translated.title) ? item.title : translated.title,
                            authorbio = string.IsNullOrEmpty(translated.bio) ? item.bio : translated.bio,
                        });
                    }
                    else
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            title = item.title,
                            authorbio = item.bio,
                        });
                    }

                }
                else
                {
                    authorslist.Add(new ArticleAuthor
                    {
                        title = item.title,
                        authorbio = item.bio,
                    });
                }


            }

            model = (new NewsCommunication
            {

                id = model.id,
                title = langquery == "en" ? model.title : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : model.title),
                subtitle = langquery == "en" ? model.subtitle : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).subtitle : model.subtitle),
                hasArabic = langquery == "ar" ? true : false,
                isArabic = model.hasArabic,
                urlTitle = GetUrlTitle(model.title),
                videoUrl = string.IsNullOrEmpty(model.videoUrl) ? null : model.videoUrl,
                Date = model.date.HasValue ? model.date.Value.ToString("dd.MM.yy") : "",
                fileSrc = model.fileSrc == "" || model.fileSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/files/" + "/" + model.fileSrc,
                description = langquery == "en" ? model.description : (translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description) ? model.description : translatedItem.description) : model.description),
                authors = authorslist,

                relatedarticles = relatedfiltered.Where(d => d.id != model.id).Select(x => new ArticleRelatedView
                {
                    id = x.id,
                    title = x.title,
                    urlTitle = GetUrlTitle(x.title),
                    hasArabic = x.hasArabic,
                    smallDescription = x.smallDescription,
                    Date = x.date.HasValue ? x.date.Value.ToString("dd.MM.yy") : "",
                    authors = db.ArticlesAuthors.Where(z => z.ArticlesId == x.id).Select(z => new ArticleAuthor
                    {
                        title = z.Author.title
                    }).ToList(),
                }).ToList(),


            });

            return model;

        }

        public NewsCommunication GetArticlePodcastsById(int id, string langquery = "en", string imgsize = "", string imgsize1 = "", string imgsize2 = "")
        {
            var model = db.NewsCommunications.FirstOrDefault(d => !d.isDeleted && d.id == id && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null));
            var articletypes = db.ArticlesTypes.Where(x => x.ArticlesId == model.id);
            var related = new List<NewsCommunication>();
            var relatedfiltered = new List<NewsCommunication>();

            foreach (var item in articletypes)
            {
                var getrelated = db.ArticlesTypes.Where(x => x.TypeId == item.TypeId && x.ArticlesId != model.id).Select(d => d.NewsCommunication).OrderByDescending(d => d.date).ToList();

                related.AddRange(getrelated);
            }

            if (related.Count == 0)
            {
                var getrelated = GetAllIsPublished().OrderByDescending(d => d.date).ToList().Take(10);
                relatedfiltered.AddRange(getrelated);
            }
            else
            {
                relatedfiltered.AddRange(related.Take(10));
            }



            var translatedItem = model.NewsCommunications.FirstOrDefault(lang => lang.languageId == 2);

            var authors = db.ArticlesAuthors.Where(x => x.ArticlesId == model.id).Select(d => d.Author);
            var authorslist = new List<ArticleAuthor>();
            foreach (var item in authors)
            {
                var translated = item.Authors.FirstOrDefault(lang => lang.languageId == 2);
                if (translated != null)
                {

                    if (langquery == "ar")
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            title = string.IsNullOrEmpty(translated.title) ? item.title : translated.title,
                            authorbio = string.IsNullOrEmpty(translated.bio) ? item.bio : translated.bio,
                        });
                    }
                    else
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            title = item.title,
                            authorbio = item.bio,
                        });
                    }

                }
                else
                {
                    authorslist.Add(new ArticleAuthor
                    {
                        title = item.title,
                        authorbio = item.bio,
                    });
                }

            }

            model = (new NewsCommunication
            {

                id = model.id,
                title = langquery == "en" ? model.title : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : model.title),
                subtitle = langquery == "en" ? model.subtitle : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).subtitle : model.subtitle),
                hasArabic = langquery == "ar" ? true : false,
                isArabic = model.hasArabic,
                urlTitle = GetUrlTitle(model.title),
                videoUrl = string.IsNullOrEmpty(model.videoUrl) ? null : model.videoUrl,
                Date = model.date.HasValue ? model.date.Value.ToString("dd.MM.yy") : "",
                description = langquery == "en" ? model.description : (translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description) ? model.description : translatedItem.description) : model.description),
                fileSrc = model.fileSrc == "" || model.fileSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/files/" + "/" + model.fileSrc,
                audioSrc = model.audioSrc == "" || model.audioSrc == null ? null :  model.audioSrc,

                authors = authorslist,

                relatedarticles = relatedfiltered.Where(d => d.id != model.id).Select(x => new ArticleRelatedView
                {
                    id = x.id,
                    title = x.title,
                    urlTitle = GetUrlTitle(x.title),
                    smallDescription = x.smallDescription,
                    imgSrc = model.imgSrc == "" || model.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + model.imgSrc,
                    hasArabic = x.hasArabic,
                    Date = x.date.HasValue ? x.date.Value.ToString("dd.MM.yy") : "",
                    authors = db.ArticlesAuthors.Where(z => z.ArticlesId == x.id).Select(z => new ArticleAuthor
                    {
                        title = z.Author.title
                    }).ToList(),
                }).ToList(),
            });

            return model;

        }
        public NewsCommunication GetArticleDataById(int id, string langquery = "en", string imgsize = "", string imgsize1 = "", string imgsize2 = "")
        {
            var model = db.NewsCommunications.FirstOrDefault(d => !d.isDeleted && d.id == id && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null));
            var articletypes = db.ArticlesTypes.Where(x => x.ArticlesId == model.id);
            var related = new List<NewsCommunication>();
            var relatedfiltered = new List<NewsCommunication>();

            foreach (var item in articletypes)
            {
                var getrelated = db.ArticlesTypes.Where(x => x.TypeId == item.TypeId && x.ArticlesId != model.id).Select(d => d.NewsCommunication).OrderByDescending(d => d.date).ToList();

                related.AddRange(getrelated);
            }

            if (related.Count == 0)
            {
                var getrelated = GetAllIsPublished().OrderByDescending(d => d.date).ToList().Take(10);
                relatedfiltered.AddRange(getrelated);
            }
            else
            {
                relatedfiltered.AddRange(related.Take(10));
            }



            var translatedItem = model.NewsCommunications.FirstOrDefault(lang => lang.languageId == 2);

            var authors = db.ArticlesAuthors.Where(x => x.ArticlesId == model.id).Select(d => d.Author);
            var authorslist = new List<ArticleAuthor>();
            foreach (var item in authors)
            {
                var translated = item.Authors.FirstOrDefault(lang => lang.languageId == 2);
                if (translated != null)
                {

                    if (langquery == "ar")
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            title = string.IsNullOrEmpty(translated.title) ? item.title : translated.title,
                            authorbio = string.IsNullOrEmpty(translated.bio) ? item.bio : translated.bio,
                        });
                    }
                    else
                    {
                        authorslist.Add(new ArticleAuthor
                        {
                            title = item.title,
                            authorbio = item.bio,
                        });
                    }

                }
                else
                {
                    authorslist.Add(new ArticleAuthor
                    {
                        title = item.title,
                        authorbio = item.bio,
                    });
                }

            }

            model = (new NewsCommunication
            {

                id = model.id,
                title = langquery == "en" ? model.title : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : model.title),
                subtitle = langquery == "en" ? model.subtitle : (model.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? model.NewsCommunications.FirstOrDefault(d => d.languageId == 2).subtitle : model.subtitle),
                hasArabic = langquery == "ar" ? true : false,
                isArabic = model.hasArabic,
                urlTitle = GetUrlTitle(model.title),
                videoUrl = string.IsNullOrEmpty(model.videoUrl) ? null : model.videoUrl,
                Date = model.date.HasValue ? model.date.Value.ToString("dd.MM.yy") : "",
                description = langquery == "en" ? model.description : (translatedItem != null ? (string.IsNullOrEmpty(translatedItem.description) ? model.description : translatedItem.description) : model.description),
                fileSrc = model.fileSrc == "" || model.fileSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + "content/uploads/files/" + "/" + model.fileSrc,
                topimgSrc = model.topimgSrc == "" || model.topimgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize2 == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize2 + "/") + model.topimgSrc,
                authors = authorslist,

                relatedarticles = relatedfiltered.Where(d => d.id != model.id).Select(x => new ArticleRelatedView
                {
                    id = x.id,
                    title = x.title,
                    urlTitle = GetUrlTitle(x.title),
                    hasArabic=x.hasArabic,
                    smallDescription = x.smallDescription,
                    Date = x.date.HasValue ? x.date.Value.ToString("dd.MM.yy") : "",
                    imgSrc = model.imgSrc == "" || model.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + model.imgSrc,
                    authors = db.ArticlesAuthors.Where(z => z.ArticlesId == x.id).Select(z => new ArticleAuthor
                    {
                        title = z.Author.title
                    }).ToList(),
                }).ToList(),
            });

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
            || (d.description != null && d.description.ToLower().Contains(title.ToLower())) || (d.description1 != null && d.description1.ToLower().Contains(title.ToLower())) || (d.description2 != null && d.description2.ToLower().Contains(title.ToLower()))
            || (d.description3 != null && d.description3.ToLower().Contains(title.ToLower())) || d.NewsCategory.title.ToLower().Contains(title.ToLower())).OrderByDescending(d => d.date);

            var getType = db.TypeArticles.FirstOrDefault(d => d.title.ToLower().Contains(title.ToLower()));

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
        
            var getkeyword = db.Keywords.FirstOrDefault(d => d.title.ToLower().Contains(title.ToLower()));

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
                    artitle = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? item.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : null,
                    urlTitle = GetUrlTitle(item.title),
                    hasArabic = item.hasArabic,
                    smallDescription = item.smallDescription,
                    arabicDesc = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? item.NewsCommunications.FirstOrDefault(d => d.languageId == 2).smallDescription : null,
                    Date = item.date.Value.ToString("dd.MM.yy"),
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,
                    authorsList = item.ArticlesAuthors.Select(d => string.Join(",", d.Author.title)).FirstOrDefault(),
                    authorsarList = item.ArticlesAuthors.Select(d => d.Author.Authors.FirstOrDefault(x => x.languageId == 2) != null ? string.Join(",", d.Author.Authors.FirstOrDefault(x => x.languageId == 2).title) : null).FirstOrDefault(),
                    detailUrl = item.articleTemplateId == null ? item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    : (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title)))
                    : (item.articleTemplateId == 1 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 2 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 3 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 4 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : null),

                });
            }
            return model;
        }



        public List<NewsCommunication> GetAllByCategoryId(int id,string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d => d.categoryId == id &&  (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null)).OrderByDescending(d => d.date);
            var model = new List<NewsCommunication>();

            foreach (var item in news)
            {
                model.Add(new NewsCommunication
                {

                    id = item.id,
                    title = item.title,
                    artitle = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? item.NewsCommunications.FirstOrDefault(d => d.languageId == 2).title : null,
                    urlTitle = GetUrlTitle(item.title),
                    Date = item.date.Value.ToString("dd.MM.yy"),
                    smallDescription = item.smallDescription,
                    arabicDesc = item.NewsCommunications.FirstOrDefault(d => d.languageId == 2) != null ? item.NewsCommunications.FirstOrDefault(d => d.languageId == 2).smallDescription : null,
                    authorsList = item.ArticlesAuthors.Select(d => string.Join(",", d.Author.title)).FirstOrDefault(),
                    authorsarList = item.ArticlesAuthors.Select(d => d.Author.Authors.FirstOrDefault(x => x.languageId == 2) != null ? string.Join(",", d.Author.Authors.FirstOrDefault(x => x.languageId == 2).title) : null).FirstOrDefault(),
                    detailUrl = item.articleTemplateId == null ? item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    : (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title)))
                    : (item.articleTemplateId == 1 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 2 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 3 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : item.articleTemplateId == 4 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title) : null),
                    
                    //detailUrl = item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    //: (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "article/details/" + item.id + "/" + GetUrlTitle(item.title))),
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,

                });
            }
            return model;
        }

    }
}