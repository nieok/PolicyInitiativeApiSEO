using PolicyInitiativeFront.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    #region Models
    [MetadataType(typeof(SocialMediaValidation))]
    public partial class SocialMedia
    {
    }

    public class SocialMediaValidation
    {
        [Required]
        public string title { get; set; }

        public string link { get; set; }

    }
    #endregion

    #region Methods
    public class SocialMediaRepository
    {
        private dblinqDataContext db = new dblinqDataContext();

        public IQueryable<SocialMedia> GetAll()
        {
            return db.SocialMedias.Where(d => !d.isDeleted && d.languageParentId == null).OrderByDescending(d => d.priority);
        }

        public IQueryable<SocialMedia> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished && !d.isDeleted).OrderByDescending(d => d.priority);
        }


        public SocialMedia GetById(int id)
        {
            return db.SocialMedias.FirstOrDefault(d => d.id == id && !d.isDeleted);
        }

        public SocialMedia GetByTitle(string title)
        {
            return db.SocialMedias.FirstOrDefault(d => !d.isDeleted && d.title.ToLower() == title.ToLower());
        }


    }
    #endregion
}