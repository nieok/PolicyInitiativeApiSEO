using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using System.Xml;
using System.Text;
using System.IO;
using System.Configuration;
using PolicyInitiativeFront.Models;
using System.Drawing.Imaging;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Net.Mail;
using System.Net;
using System.Globalization;
using System.Web.Script.Serialization;
using System.Text.RegularExpressions;

namespace PolicyInitiativeFront.Controllers
{
    public class UtilsController : Controller
    {
        private static String smtpUsername = ConfigurationManager.AppSettings["smtpUsername"];
        private static String smtpPassword = ConfigurationManager.AppSettings["smtpPassword"];
        private static String smtpHostname = ConfigurationManager.AppSettings["smtpHostname"];
        private static int smtpPort = int.Parse(ConfigurationManager.AppSettings["smtpPort"]);
        private static Boolean isSSLRequired = Boolean.Parse(ConfigurationManager.AppSettings["smtpSSL"]);
        public static string safeHTML(string str)
        {
            //variable to hold the returned value
            string strippedString;
            try
            {
                //variable to hold our RegularExpression pattern
                string pattern = "<.*?>";
                //replace all HTML tags
                strippedString = Regex.Replace(str, pattern, string.Empty);
            }
            catch
            {
                strippedString = string.Empty;
            }
            return strippedString;
        }



        public static string StripHtml(string text)
        {
            if (!string.IsNullOrEmpty(text))
                return Regex.Replace(text, "<.*?>", string.Empty);
            else return text;
        }
        public static string sendEmail(String from, String to, string cc, string bcc, String subject, String body, string attachment)
        {
            try
            {
                MailMessage message = new MailMessage();
                if (attachment != "")
                    message.Attachments.Add(new Attachment(attachment));
                message.From = new MailAddress(from);
                if (to.IndexOf(';') != -1)
                {
                    string[] Tos = to.Split(';');
                    foreach (string toRecipient in Tos)
                    {
                        message.To.Add(toRecipient);
                    }
                }
                else
                {
                    message.To.Add(to);
                }
                if (cc != "")
                    message.CC.Add(cc);
                if (bcc != "")
                    message.Bcc.Add(bcc);
                message.Headers.Add("Content-Type", "content=text/html; charset=\"UTF-8\"");
                message.Subject = subject;
                message.SubjectEncoding = System.Text.Encoding.UTF8;
                message.Body = body;
                message.IsBodyHtml = true;
                message.BodyEncoding = Encoding.UTF8;
                SmtpClient smtp = new SmtpClient(smtpHostname, smtpPort);
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
                smtp.EnableSsl = isSSLRequired;
                smtp.Send(message);

                return "SUCCESS";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}