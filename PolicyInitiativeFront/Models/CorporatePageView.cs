using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    public class CorporatePageView
    {
        public string title { get; set; }

        public string urlTitle { get; set; }
        public string subTitle { get; set; }
        public string subTitle1 { get; set; }
        public string smallDescription { get; set; }
        public string description { get; set; }
        public string labelLink { get; set; }
        public string link { get; set; }
        public string imgSrc { get; set; }
        public string imgSrcHover { get; set; }
        public bool isPublished { get; set; }
        public List<CorporatePageTemplateView> corporatePageTemplates { get; set; }

    }


    public class CorporatePageTemplateView
    {
        public int id { get; set; }
        public bool isDeleted { get; set; }
        public string frontHtmlId { get; set; }
        public string frontHtmlClass { get; set; }
        public bool isEntry { get; set; }
        public bool isPublished { get; set; }
    }



    public class Medias
    {
        public int id { get; set; }
        public string icon { get; set; }
        public string link { get; set; }
    }
    public class ImageView
    {
        public int id { get; set; }
        public int seasonId { get; set; }
        public string smallImg { get; set; }
        public string largeImg { get; set; }
        public string imgSrc { get; set; }
        public string caption { get; set; }
        public string subCaption { get; set; }
        public string description { get; set; }
        public string link { get; set; }
        public bool isPortrait { get; set; }
    }
}