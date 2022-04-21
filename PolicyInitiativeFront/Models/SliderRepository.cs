
using PolicyInitiativeFront.Controllers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
   
    public class SliderRepository : SharedController
    {
        public dblinqDataContext db = new dblinqDataContext();
        public LanguageRepository langrpstry = new LanguageRepository();
        public IQueryable<Slider> GetAll()
        {
            return db.Sliders.Where(d => !d.isDeleted ).OrderByDescending(d => d.priority);
        }

        public IQueryable<Slider> GetAllIsPublished()
        {
            return GetAll().Where(d => d.isPublished);
        }
     
        public Slider GetById(int id)
        {
            return db.Sliders.FirstOrDefault(d => !d.isDeleted && d.id == id && d.isPublished == true);
        }
  

        public List<Slider> GetAllSlider( string imgsize = "")
        {
            var sliders = GetAllIsPublished();
            var model = new List<Slider>();
            foreach (var item in sliders)
            {
                model.Add(new Slider
                {

                    id = item.id,
                    title = item.title,
                    link = item.link,
                    labelLink = item.labelLink,
                    isTarget = item.isTarget,
                    smallDescription = item.smallDescription,
                    imgSrc = item.imgSrc == "" || item.imgSrc == null ? null : ConfigurationManager.AppSettings["ProjectOnlineAPIUrl"] + (imgsize == "" ? "content/uploads/sliders/" : "images/" + imgsize + "/") + item.imgSrc,
                });
            }
            return model;
        }
    }
}