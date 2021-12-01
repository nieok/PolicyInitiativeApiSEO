using PolicyInitiativeFront.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    #region Methods
    public class LanguageResourceRepository
    {
        private dblinqDataContext db = new dblinqDataContext();

        public IQueryable<LanguageResource> GetAll()
        {
            return db.LanguageResources.Where(d => !d.isDeleted).OrderByDescending(d => d.dateCreated);
        }

        public IQueryable<LanguageResource> GetAllIsPublished()
        {
            return GetAll().Where(d => !d.isDeleted).OrderByDescending(d => d.dateCreated);
        }


        public LanguageResource GetNextEntry(LanguageResource entry)
        {
            var nextEntry = GetAll().Where(d => d.dateCreated < entry.dateCreated).FirstOrDefault();

            if (nextEntry == null)
            {
                nextEntry = GetAll().Where(d => d.dateCreated != entry.dateCreated).FirstOrDefault();
            }
            if (nextEntry == null)
            {
                nextEntry = entry;
            }
            return nextEntry;
        }

        public LanguageResource GetById(int id)
        {
            return db.LanguageResources.FirstOrDefault(d => d.id == id && !d.isDeleted);
        }

        public LanguageResource GetByTitle(string title)
        {
            return db.LanguageResources.FirstOrDefault(d => !d.isDeleted && d.title.ToLower() == title.ToLower());
        }

    }
    #endregion
}