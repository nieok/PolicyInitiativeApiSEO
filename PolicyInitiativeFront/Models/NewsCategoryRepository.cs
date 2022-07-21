using PolicyInitiativeFront.Controllers;
using PolicyInitiativeFront.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;

using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    #region Models
    public partial class NewsCategory
    {
        public string urlTitle { get; set; }
        public string color { get; set; }
    }

    #endregion
    #region Methods 
    public class NewsCategoryRepository : SharedController
    {
        public dblinqDataContext db = new dblinqDataContext();

        public IQueryable<NewsCategory> GetAll()
        {
            return db.NewsCategories.Where(d => !d.isDeleted).OrderByDescending(d => d.priority);
        }
        public NewsCategory GetById(int id)
        {
            return db.NewsCategories.FirstOrDefault(d => !d.isDeleted && d.id == id && d.isPublished == true);
        }
        public IQueryable<NewsCategory> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }
        public List<NewsCategory> GetAllNewsCategory()
        {
            var news = GetAllIsPublished().ToList();
            var model = new List<NewsCategory>();

            foreach (var item in news)
            {
                model.Add(new NewsCategory
                {
                    id = item.id,
                    title = item.title,
                    color= item.colorId.HasValue ? item.Color.hexaxolor :"",
                    urlTitle = GetUrlTitle(item.title),
                });
            }
            return model;
        }

        public List<NewsCategory> GetAllInitiatives(string imgsize = "")
        {
            var news = GetAllIsPublished().ToList();
            var model = new List<NewsCategory>();

            foreach (var item in news)
            {
                model.Add(new NewsCategory
                {
                    id = item.id,
                    title = item.title,
                    color = item.colorId.HasValue ? item.Color.hexaxolor : "",
                    urlTitle = GetUrlTitle(item.title),
                    description = item.description,
                    largeDescription = item.largeDescription,
                    smallDescription = item.smallDescription,
                    imgSrc = item.imgSrc1 == "" || item.imgSrc1 == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newscategories/" : "images/" + imgsize + "/") + item.imgSrc1,

                });
            }
            return model;
        }
        public NewsCategory GetCatById(int id,  string imgsize = "")
        {
       
            var model = db.NewsCategories.FirstOrDefault(d => !d.isDeleted && d.id == id);
          
            model = (new NewsCategory
            {

                id = model.id,
                title =  model.title ,
                urlTitle =  GetUrlTitle(model.title) ,
                description =  model.description ,
                imgSrc = model.imgSrc == "" || model.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/newscategories/" : "images/" + imgsize + "/") + model.imgSrc,
               
            });

            return model;

        }
    }
    #endregion
}