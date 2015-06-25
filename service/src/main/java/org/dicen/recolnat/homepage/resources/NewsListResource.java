package org.dicen.recolnat.homepage.resources;

import com.codahale.metrics.annotation.Timed;
import com.sun.syndication.io.FeedException;
import com.google.common.base.Optional;
import org.dicen.recolnat.homepage.core.NewsItem;
import org.dicen.recolnat.homepage.core.NewsList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;

import com.sun.syndication.feed.synd.SyndEntry;
import com.sun.syndication.feed.synd.SyndFeed;
import com.sun.syndication.io.SyndFeedInput;
import com.sun.syndication.io.XmlReader;

@Path("/newslist")
@Produces(MediaType.APPLICATION_JSON)
public class NewsListResource {
    private final Integer defaultNumberOfNewsItemsToRetrieve = 5;
    private final String rssFeedUrl = "http://wp5test.mnhn.fr/blog/?feed=rss2";

    public NewsListResource() {

    }

//    @GET
//    @Timed
//    public NewsList sayHello() {
//        return new NewsList("Une invasion de castors cosmiques est prévue pour bientôt.");
//    }

    @GET
    @Timed
    public NewsList getRecentNews(@QueryParam("number") Optional<Integer> number) {
        final Integer numberOfItemsToRetrieve = number.or(defaultNumberOfNewsItemsToRetrieve);

        URL url = null;
        XmlReader reader = null;
        NewsList ret = new NewsList();
        try {
            url = new URL(this.rssFeedUrl);
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return null;
        }

        try {
            reader = new XmlReader(url);
            SyndFeed feed = new SyndFeedInput().build(reader);
            Iterator<SyndEntry> itEntries = feed.getEntries().iterator();
            int addedNewsCounter = 0;
            while(itEntries.hasNext() && addedNewsCounter < numberOfItemsToRetrieve) {
                SyndEntry entry = itEntries.next();
                NewsItem item = new NewsItem(entry.getTitle(), entry.getAuthor(), entry.getPublishedDate().getTime(), entry.getDescription().getValue(), entry.getLink());
                ret.addNewsItem(item);
                ++addedNewsCounter;
            }
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        } catch (FeedException e) {
            e.printStackTrace();
            return null;
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    return null;
                }
            }
        }

        return ret;
    }
}
