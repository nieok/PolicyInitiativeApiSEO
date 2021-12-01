
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

        public string urlTitle { get; set; }
        public string detailUrl { get; set; }
        public IEnumerable<ImageView> images { get; set; }

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
                    detailUrl = item.ArticlesTypes.Where(d => d.TypeId == 1).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "podcast/details/" + item.id + "/" + GetUrlTitle(item.title)
                    : (item.ArticlesTypes.Where(d => d.TypeId == 3).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "video/details/" + item.id + "/" + GetUrlTitle(item.title) : (item.ArticlesTypes.Where(d => d.TypeId == 2).Count() != 0 ? ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "data/details/" + item.id + "/" + GetUrlTitle(item.title) : ConfigurationManager.AppSettings["ProjectOnlineUrl"] + "articles/details/" + item.id + "/" + GetUrlTitle(item.title))),
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
            string _culture = "en-US";

            if (language == "en")
            {
                _culture = "en-US";

            }
            else if (language == "ar")
            {
                _culture = "ar-AE";
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
                    Date = item.date.Value.ToString("dd MMMM yyyy", new CultureInfo(_culture)),
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
            string _culture = "en-US";
            if (news.Count() > 4)
            {
                news = news.Take(4).ToList();
            }
            if (language == "en")
            {
                _culture = "en-US";

            }
            else if (language == "ar")
            {
                _culture = "ar-AE";
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
                    Date = item.date.Value.ToString("dd MMMM yyyy", new CultureInfo(_culture)),
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + item.imgSrc,

                });
            }
            return model;
        }


        public NewsCommunication GetNewsById(int id, string language = "en", string imgsize = "", string imgsize1 = "", string imgsize2 = "")
        {
            var newsCommunicationsDirectory = "newsCommunications";
            var model = db.NewsCommunications.FirstOrDefault(d => !d.isDeleted && d.id == id && (d.datePublished <= DateTime.Now || d.datePublished == null) && (d.dateUnPublished >= DateTime.Now || d.dateUnPublished == null));
            var requestedLanguageId = langrpstry.GetByCode(language).id;
            var related = new List<NewsCommunication>();
            var relatedfiltered = new List<NewsCommunication>();

            string _culture = "en-US";

            if (language == "en")
            {
                _culture = "en-US";

            }
            else if (language == "ar")
            {
                _culture = "ar-AE";
            }


            var entryTranslatedItem = requestedLanguageId == 1 ? null : model.NewsCommunications.FirstOrDefault(lang => lang.languageId == requestedLanguageId);

            model = (new NewsCommunication
            {

                id = model.id,
                title = entryTranslatedItem == null ? model.title : entryTranslatedItem.title,
                urlTitle = entryTranslatedItem == null ? GetUrlTitle(model.title) : GetUrlTitle(entryTranslatedItem.title),
                Date = model.date.Value.ToString("dd MMMM yyyy", new CultureInfo(_culture)),
                smallDescription = entryTranslatedItem == null ? model.smallDescription : entryTranslatedItem.smallDescription,
                description = entryTranslatedItem == null ? model.description : entryTranslatedItem.description,
                imgSrc = model.imgSrc == "" || model.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newsCommunications/" : "images/" + imgsize + "/") + model.imgSrc,
                #region Image Gallery 
                images = model.NewsCommunicationMedias.Where(e => e.mediaType == 1).Select(e => new ImageView
                {
                    largeImg = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize2, portraitimgsize: "", imgDirectory: newsCommunicationsDirectory),
                    imgSrc = GetResizedImagePath(apiUrl: ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"], imgSrc: e.mediaSrc, imgsize: imgsize1, portraitimgsize: "", imgDirectory: newsCommunicationsDirectory),
                    caption = e.caption,
                    subCaption = e.subCaption,
                    description = e.description,
                    link = string.IsNullOrEmpty(e.link) ? null : GetYouTubeVideoIdFromUrl(e.link)
                }).ToList(),
                #endregion
            });

            return model;

        }

        public NewsCommunication GetById(int id)
        {
            return db.NewsCommunications.FirstOrDefault(d => !d.isDeleted && d.id == id && d.isPublished == true);
        }




    }
}