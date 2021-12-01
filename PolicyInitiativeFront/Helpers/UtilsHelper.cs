using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using System.Web.Routing;
using System.Xml;

namespace PolicyInitiativeFront.Helpers
{
    public class UtilsHelper
    {

        public string safeHTML(string str)
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

        public string GetStrippedHTML(string text, int take)
        {
            if (take != -1)
            {
                text = safeHTML(text ?? "");
                string points = text == null ? "" : (text.Length >= take) ? "..." : "";
                return null == text ? "" : (text.Substring(0, (text.Length < take ? text.Length : take))) + points;
            }
            else
            {
                return safeHTML(text ?? "");
            }
        }

        public double ConvertToUnixTimestamp(DateTime date)
        {
            DateTime origin = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            double unixTime = (date.ToUniversalTime() - origin.ToUniversalTime()).TotalSeconds;
            return unixTime;
        }


        public string RandomString(int length, bool isOnlyNumeric = false)
        {
            string valid = isOnlyNumeric ? "1234567890" : "abcdefghijklmnopqrst1234567890";
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < length--)
            {
                res.Append(valid[rnd.Next(valid.Length)]);
            }
            return res.ToString();
        }


        public string GetRequestRaw(NameValueCollection keys, SortedList<string, string> listEntries, string requestUrl)
        {
            StringBuilder data = new StringBuilder();
            if (keys != null)
            {
                foreach (var kvp in keys.AllKeys)
                {
                    data.Append(kvp + "=" + HttpUtility.UrlEncode(keys[kvp], System.Text.Encoding.GetEncoding("ISO-8859-1")) + "&");
                }
            }

            if (listEntries != null)
            {
                foreach (var kvp in listEntries)
                {
                    data.Append(kvp.Key + "=" + HttpUtility.UrlEncode(kvp.Value, System.Text.Encoding.GetEncoding("ISO-8859-1")) + "&");
                }
            }

            return requestUrl + "?" + data.ToString();
        }

        public string MinifyUrl(string link)
        {
            try
            {
                using (var webClient = new WebClient())
                {
                    link = webClient.DownloadString(string.Format("http://tinyurl.com/api-create.php?url={0}", HttpUtility.UrlEncode(link)));
                    webClient.Dispose();
                }
            }
            catch (Exception e)
            {

            }

            return link;
        }



        public List<KeyValuePair<string, int>> GetEnumList<T>()
        {
            var list = new List<KeyValuePair<string, int>>();
            foreach (var e in Enum.GetValues(typeof(T)))
            {
                list.Add(new KeyValuePair<string, int>(e.ToString(), (int)e));
            }
            return list;
        }

        public struct DateRange
        {
            public DateTime Start { get; set; }
            public DateTime End { get; set; }
        }
        public DateRange ThisMonth(DateTime date)
        {
            DateRange range = new DateRange();

            range.Start = new DateTime(date.Year, date.Month, 1);
            range.End = range.Start.AddMonths(1).AddSeconds(-1);

            return range;
        }
        public DateRange ThisWeek(DateTime date)
        {
            DateRange range = new DateRange();

            range.Start = date.Date.AddDays(-(int)date.DayOfWeek + 1);
            range.End = range.Start.AddDays(7).AddSeconds(-1);

            return range;
        }

        public DateTime Today()
        {
            return DateTime.Now.AddHours(int.Parse(ConfigurationManager.AppSettings["TimZomeDif"]));
        }


        public string SetFormat(string number, int len)
        {
            string result = "";
            if (len - (int)number.Length > 0)
                for (var i = 0; i < len - (int)number.Length; i++)
                    result += "0";
            return result + number;
        }


        public Dictionary<string, object> ObjectToDictionary(object obj)
        {
            Dictionary<string, object> ret = new Dictionary<string, object>();

            foreach (PropertyInfo prop in obj.GetType().GetProperties())
            {
                string propName = prop.Name;
                var val = obj.GetType().GetProperty(propName).GetValue(obj, null);
                if (val != null)
                {
                    ret.Add(propName, val.ToString());
                }
                else
                {
                    ret.Add(propName, null);
                }
            }

            return ret;
        }
    }
}
