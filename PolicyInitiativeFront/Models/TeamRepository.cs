using PolicyInitiativeFront.Controllers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    #region Models
    public partial class Director
    {
        public string urlTitle { get; set; }
    }

    #endregion

    #region Methods
    public class TeamRepository : SharedController
    {
        public dblinqDataContext db = new dblinqDataContext();

        public IQueryable<Director> GetAll()
        {
            return db.Directors.Where(d => !d.isDeleted && d.languageParentId == null).OrderByDescending(d => d.priority);
        }

        public IQueryable<Director> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }

        public Director GetById(int id)
        {
            return db.Directors.FirstOrDefault(d => !d.isDeleted && d.id == id);
        }
        public List<Director> GetAllTeam(string imgsize = "",string category ="")
        {
            var news = GetAllIsPublished().Where(d=>d.TeamCategory.title.ToLower() == category.ToLower()).ToList();
            var model = new List<Director>();
       
        
            foreach (var item in news)
            {
                model.Add(new Director
                {
                    id = item.id,
                    fullName =  item.fullName ,
                    urlTitle = GetUrlTitle(item.fullName),
                    jobTitle=item.jobTitle,
                    biography = item.biography,
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/directors/" : "images/" + imgsize + "/") + item.imgSrc,

                });
            }
            return model;
        }

    }
    #endregion
}