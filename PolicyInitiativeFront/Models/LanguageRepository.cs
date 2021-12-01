using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    #region Methods
    public class LanguageRepository
    {
        public dblinqDataContext db = new dblinqDataContext();
        private LanguageResourceRepository langresourcerpstry = new LanguageResourceRepository();
        public IQueryable<Language> GetAll()
        {
            return db.Languages.Where(d => !d.isDeleted).OrderByDescending(d => d.priority);
        }

        public IQueryable<Language> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }



        public Language GetById(int id)
        {
            return GetAll().FirstOrDefault(d => d.id == id);
        }

        public Language GetByIdIsPublished(int id)
        {
            return GetAllIsPublished().FirstOrDefault(d => d.id == id);
        }

        public Language GetByCode(string code)
        {
            return GetAllIsPublished().FirstOrDefault(d => d.code == code);
        }

        public List<Language> GetAllOptional()
        {
            return GetAllIsPublished().Where(d => !d.isDefault).ToList();
        }
        #region Languages Dictionary

        public Dictionary<string, string> LanguageDictionary(string lang)
        {
            var requestedLanguageId = GetByCode(lang).id;
            var dictionary = new Dictionary<string, string>();
            var entries = langresourcerpstry.GetAll().GroupBy(d => d.title).Select(d => d.FirstOrDefault());
            foreach (var item in entries)
            {
                var temptranslation = requestedLanguageId == -1 ? null : item.LanguageResourceTranslations.FirstOrDefault(d => d.languageId == requestedLanguageId);
                dictionary.Add(item.title, temptranslation == null ? "" : temptranslation.title);
            }
            return dictionary;
        }

        #endregion

    }
    #endregion
}