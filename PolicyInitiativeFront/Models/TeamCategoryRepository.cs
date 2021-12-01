using PolicyInitiativeFront.Controllers;
using PolicyInitiativeFront.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    #region Models
    public partial class TeamCategory
    {
        public string urlTitle { get; set; }
    }

    #endregion
    #region Methods
    public class TeamCategoryRepository : SharedController
    {
        public dblinqDataContext db = new dblinqDataContext();

        public IQueryable<TeamCategory> GetAll()
        {
            return db.TeamCategories.Where(d => !d.isDeleted).OrderByDescending(d => d.priority);
        }

        public IQueryable<TeamCategory> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }

        public TeamCategory GetById(int id)
        {
            return db.TeamCategories.FirstOrDefault(d => !d.isDeleted && d.id == id);
        }
        public List<TeamCategory> GetAllTeamCategory()
        {
            var news = GetAllIsPublished().ToList();
            var model = new List<TeamCategory>();


            foreach (var item in news)
            {
                model.Add(new TeamCategory
                {
                    id = item.id,
                    title = item.title,
                    urlTitle = GetUrlTitle(item.title),
                   
                });
            }
            return model;
        }

    }
    #endregion
}