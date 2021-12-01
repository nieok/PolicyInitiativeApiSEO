using PolicyInitiativeFront.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    #region Methods
    public class settingsRepository
    {
        private dblinqDataContext db = new dblinqDataContext();
        public Setting GetFirstOrDefault()
        {
            return db.Settings.FirstOrDefault();
        }

    }
    #endregion
}