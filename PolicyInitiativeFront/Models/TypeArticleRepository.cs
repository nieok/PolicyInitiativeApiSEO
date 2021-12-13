using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using PolicyInitiativeFront.Helpers;

namespace PolicyInitiativeFront.Models
{
    public partial class TypeArticle
    {
        public string arabictitle { get; set; }
    }
    #region Methods
    public class TypeArticleRepository 
    {
        private dblinqDataContext db = new dblinqDataContext();

        //public dblinqDataContext db = new dblinqDataContext();

        public IQueryable<TypeArticle> GetAll()
        {
            return db.TypeArticles.Where(d => !d.isDeleted && d.languageParentId == null).OrderByDescending(d => d.priority);
        }

        public IQueryable<TypeArticle> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }

        public List<TypeArticle> GetAllTypes()
        {
            var types = GetAllIsPublished();
            var model = new List<TypeArticle>();

            foreach (var item in types)
            {
                var translated = db.TypeArticles.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == item.id);
                model.Add(new TypeArticle
                {
                    id = item.id,
                    title = item.title,
                    arabictitle= translated != null ? translated.title : item.title,

                });
            }
            return model;
        }
        public TypeArticle GetById(int id)
        {
            return db.TypeArticles.FirstOrDefault(d => !d.isDeleted && d.id == id);
        }


    }
    #endregion
}