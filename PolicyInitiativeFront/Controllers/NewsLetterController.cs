//using System;
//using System.Collections.Generic;
//using System.Configuration;
//using System.Linq;
//using System.Web;
//using System.Web.Mvc;
//using PolicyInitiativeFront.Models;
//using Newtonsoft.Json;
//using System.Net;
//using System.IO;
//using Newtonsoft.Json.Linq;

//namespace PolicyInitiativeFront.Controllers
//{
//    public class NewsLetterController : Controller
//    {
//        private CorporatePageRepository rpstry = new CorporatePageRepository();
//        private NewsletterUserRepository newsletterUserRpstry = new NewsletterUserRepository();


//        [HttpPost]
//        public string JoinNewsletter(NewsletterUser entry, bool updateIt = false)
//        {
//            try
//            {
//                if (!string.IsNullOrEmpty(entry.email))
//                {
//                    var userEntry = newsletterUserRpstry.GetByEmail(entry.email);
//                    if (userEntry != null)
//                    {
//                        if (updateIt)
//                        {

//                            if (userEntry.email.ToLower() != entry.email.ToLower())
//                            {
//                                newsletterUserRpstry.UnsubscribeFromKomKast(userEntry.email);
//                            }

//                            userEntry.dateModified = DateTime.Now;
//                            //userEntry.name = entry.name;
//                            userEntry.email = entry.email;
//                            //userEntry.country = entry.country;
//                            //userEntry.phone = entry.phone;
//                            newsletterUserRpstry.Save();

//                            newsletterUserRpstry.SubscribeToKomKast(userEntry.email, userEntry.name);



//                            var fromEmail = ConfigurationManager.AppSettings["SendingFromEmailNewsletter"];
//                            var subjectEmail = ConfigurationManager.AppSettings["SendingSubjectEmailNewsletter"];
//                            var projectName = ConfigurationManager.AppSettings["ProjectNameNewsletter"];


//                            #region Email Body
//                            string myBody1 = "Dear <strong>Sir/Miss</strong>,<br/><br/>";
//                            myBody1 += "You are now subscribed to The Policy Initiative newsletter.<br>Thank you.";
//                            myBody1 += "<br>";
//                            myBody1 += "Regards, <strong>" + projectName + " Automated Message</strong><br>";
//                            #endregion;

//                            return JsonConvert.SerializeObject(new
//                            {
//                                status = 200
//                            });
//                        }
//                        else
//                        {
//                            return JsonConvert.SerializeObject(new
//                            {
//                                status = 400,
//                                message = "Your email already exist in our database."
//                            });
//                        }
//                    }
//                    else
//                    {

//                        #region mailchimp
//                        try
//                        {
//                            MailChimpManager mc = new MailChimpManager("5746e0b7b84b75e79cf829b2f73ef9dd-us20");

//                            EmailParameter email = new EmailParameter()
//                            {
//                                Email = entry.email
//                            };
//                            EmailParameter result = mc.Subscribe("45e04990d8", email);
//                        }catch(Exception e)
//                        {
//                            return JsonConvert.SerializeObject(new
//                            {
//                                status = 400,
//                                message = "Your email already exist in our database."
//                            });
//                        }
                     

//                        #endregion
//                        entry.dateCreated = DateTime.Now;
//                        entry.dateModified = DateTime.Now;
//                        newsletterUserRpstry.Add(entry);
//                        newsletterUserRpstry.Save();
//                        newsletterUserRpstry.SubscribeToKomKast(entry.email, entry.name);

//                        #region sendEmail to user

//                        var fromEmail = ConfigurationManager.AppSettings["SendingFromEmailNewsletter"];
//                        var subjectEmail = ConfigurationManager.AppSettings["SendingSubjectEmailNewsletter"];
//                        var projectName = ConfigurationManager.AppSettings["ProjectNameNewsletter"];

//                        #region Email Body
//                        string myBody1 = "Dear <strong>Sir/Miss</strong>,<br/><br/>";
//                        myBody1 += "You are now subscribed to The Policy Initiative newsletter.<br>Thank you.";
//                        myBody1 += "<br>";
//                        myBody1 += "Regards, <strong>" + projectName + " Automated Message</strong><br>";
//                        #endregion;

//                        UtilsController.sendEmail(projectName + " < " + fromEmail + " >", entry.email, "", "", subjectEmail, myBody1, "");


//                        #endregion

//                        return JsonConvert.SerializeObject(new
//                        {
//                            status = 200
//                        });
//                    }
//                }
//                else
//                {
//                    return JsonConvert.SerializeObject(new
//                    {
//                        status = 400,
//                        message = "Email is required."
//                    });
//                }
//            }
//            catch (Exception e)
//            {
//                return JsonConvert.SerializeObject(new
//                {
//                    status = 500,
//                    message = "Something went wrong please retry!"
//                });
//            }
//        }


//        [HttpGet]
//        public List<string> GetLists()
//        {
//            List<string> email = new List<string>();
//            var uri = string.Format("https://{0}.api.mailchimp.com/3.0/lists/{1}/members", "us20", "45e04990d8");
//            try
//            {
//                using (var webClient = new WebClient())
//                {
//                    webClient.Headers.Add("Accept", "application/json");
//                    webClient.Headers.Add("Authorization", "apikey " + "5746e0b7b84b75e79cf829b2f73ef9dd-us20");

//                    var results= webClient.DownloadString(uri);
//                    var val = JObject.Parse(results)["members"].ToList();
//                    var count = val.Count();

//                    foreach (var item in val)
//                    {
//                       var b= item["email_address"].ToString();
//                       var checksubscription= item["status"].ToString();

//                        if(checksubscription == "subscribed")
//                        {
//                            email.Add(b);
//                        }
//                    }

//                    return email;

//                }
              
//            }
//            catch (Exception e)
//            {
//                return email;
//            }
//        }

//    }
//}