package org.dicen.recolnat.homepage.core;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class NewsList {
    private List<NewsItem> items = new ArrayList<NewsItem>();

    public NewsList() {
    }

    public NewsList(List<NewsItem> newsItems) {
        this.items.addAll(newsItems);
    }

    public boolean addNewsItem(NewsItem item) {
        return this.items.add(item);
    }

    @JsonProperty
    public List<NewsItem> getItems() {
        return items;
    }
}
