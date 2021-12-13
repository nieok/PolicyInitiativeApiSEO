using PolicyInitiativeFront.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace PolicyInitiativeFront.Models
{
    public class NewsletterUserRepository
    {
        dblinqDataContext db = new dblinqDataContext();
        private string komkastListId = (ConfigurationManager.AppSettings["komkastListId"]);

        public void SubmitContactApplication(NewsletterUser entry)
        {
            db.NewsletterUsers.InsertOnSubmit(entry);
        }

        public void Save()
        {
            db.SubmitChanges();
        }


        #region Create
        public void Add(NewsletterUser entry)
        {
            db.NewsletterUsers.InsertOnSubmit(entry);
        }

        public NewsletterUser GetByEmail(string email)
        {
            email = (email + "").Trim().ToLower();
            return db.NewsletterUsers.FirstOrDefault(d => d.email.ToLower() == email);
        }


        #endregion


        public void AddNewsletterUser(NewsletterUser entry)
        {
            db.NewsletterUsers.InsertOnSubmit(entry);
        }

        public int checkEmailExists(string email)
        {
            return db.NewsletterUsers.Where(d => d.email == email).Count();
        }


        #region Read

        public IQueryable<NewsletterUser> GetAll()
        {
            return db.NewsletterUsers.OrderByDescending(d => d.dateCreated);
        }




        public NewsletterUser GetById(int id)
        {
            return db.NewsletterUsers.FirstOrDefault(d => d.id == id);
        }



        #endregion


        #region newsletter KomKast
        public void SubscribeToKomKast(string email, string name)
        {
            try
            {
                string responseCode = "";
                var url = "http://send.komkast.com/subscribe";
                var data = "boolean=true"
                    + "&name=" + name
                    + "&email=" + email
                    + "&list=" + komkastListId
                    + "&method=PUT";
                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(data);

                // Create a request using a URL that can receive a post. 
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                request.ContentType = "application/x-www-form-urlencoded";
                request.Accept = "application/xml";
                WebHeaderCollection headerCollection = request.Headers;
                headerCollection.Add("Accept-Charset", "utf-8");
                request.Method = "POST";
                request.ContentLength = buffer.Length;

                System.IO.Stream putData = request.GetRequestStream();
                putData.Write(buffer, 0, buffer.Length);
                putData.Close();

                #region GET Example
                var response = (HttpWebResponse)request.GetResponse();

                using (var sr = new StreamReader(response.GetResponseStream()))
                {
                    responseCode = sr.ReadToEnd();
                }
                #endregion

            }
            catch (Exception e)
            {
            }
        }

        public void UnsubscribeFromKomKast(string email)
        {
            try
            {
                string responseCode = "";
                var url = "http://send.komkast.com/unsubscribe";
                var data = "boolean=true"
                    + "&email=" + email
                    + "&list=" + komkastListId
                    + "&method=PUT";
                byte[] buffer = System.Text.Encoding.UTF8.GetBytes(data);

                // Create a request using a URL that can receive a post. 
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                request.ContentType = "application/x-www-form-urlencoded";
                request.Accept = "application/xml";
                WebHeaderCollection headerCollection = request.Headers;
                headerCollection.Add("Accept-Charset", "utf-8");
                request.Method = "POST";
                request.ContentLength = buffer.Length;

                Stream putData = request.GetRequestStream();
                putData.Write(buffer, 0, buffer.Length);
                putData.Close();

                #region GET Example
                var response = (HttpWebResponse)request.GetResponse();

                using (var sr = new StreamReader(response.GetResponseStream()))
                {
                    responseCode = sr.ReadToEnd();
                }
                #endregion

            }
            catch (Exception e)
            {
            }
        }
        #endregion


        #region Delete
        public void Delete(NewsletterUser entry)
        {
            db.NewsletterUsers.DeleteOnSubmit(entry);
        }
        #endregion
    }
}