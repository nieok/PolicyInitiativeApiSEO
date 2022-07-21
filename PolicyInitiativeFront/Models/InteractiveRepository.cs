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
 
    #region Methods 
    public class InteractiveRepository : SharedController
    {
        public dblinqDataContext db = new dblinqDataContext();

        public IQueryable<Interactive> GetAll()
        {
            return db.Interactives.Where(d => !d.isDeleted).OrderByDescending(d => d.priority);
        }
        public Interactive GetById(int id)
        {
            return db.Interactives.FirstOrDefault(d => !d.isDeleted && d.id == id && d.isPublished == true);
        }
        public IQueryable<Interactive> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }
        public List<Interactive> GetAllInteractives(string imgsize="")
        {
            var news = GetAllIsPublished().ToList();
            var model = new List<Interactive>();

            foreach (var item in news)
            {
                model.Add(new Interactive
                {
                    id = item.id,
                    title = item.title,
                    link= item.link,
                    smallDescription=item.smallDescription,
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/interactives/" : "images/" + imgsize + "/") + item.imgSrc,

                });
            }
            return model;
        }
        public List<Interactive> GetAllHomeInteractives(string imgsize = "")
        {
            var news = GetAllIsPublished().Where(d=>d.isFeatured).ToList();
            var model = new List<Interactive>();

            foreach (var item in news)
            {
                model.Add(new Interactive
                {
                    id = item.id,
                    title = item.title,
                    link = item.link,
                    smallDescription = item.smallDescription,
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/interactives/" : "images/" + imgsize + "/") + item.imgSrc,

                });
            }
            return model;
        }

    }
    #endregion
}