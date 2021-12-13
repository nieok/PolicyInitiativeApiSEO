using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using PolicyInitiativeFront.Helpers;

namespace PolicyInitiativeFront.Models
{
    public partial class Keyword
    {
        public string arabictitle { get; set; }
    }
    #region Methods
    public class KeywordRepository
    {
        private dblinqDataContext db = new dblinqDataContext();

        //public dblinqDataContext db = new dblinqDataContext();

        public IQueryable<Keyword> GetAll()
        {
            return db.Keywords.Where(d => !d.isDeleted && d.languageParentId == null).OrderByDescending(d => d.priority);
        }

        public IQueryable<Keyword> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }

        public List<Keyword> GetAllKeywords()
        {
            var types = GetAllIsPublished();
            var model = new List<Keyword>();

            foreach (var item in types)
            {
                var translated = db.Keywords.FirstOrDefault(d => d.languageId == 2 && d.languageParentId == item.id);
                model.Add(new Keyword
                {
                    id = item.id,
                    title = item.title,
                    arabictitle = translated != null ? translated.title : item.title,

                });
            }
            return model;
        }
        public Keyword GetById(int id)
        {
            return db.Keywords.FirstOrDefault(d => !d.isDeleted && d.id == id);
        }


    }
    #endregion
}