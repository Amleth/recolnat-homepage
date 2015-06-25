package org.dicen.recolnat.homepage.core;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

/**
 * Created by Dmitri Voitsekhovitch (dvoitsekh@gmail.com) on 27/03/15.
 */
public class NewsItem {

  private String title;
  private String author;
  private long date;
  private String content;
  private String linkToSource;

  public NewsItem(String title, String author, long date, String content, String linkToSource) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.content = content;
    this.linkToSource = linkToSource;
  }

  @JsonProperty
  public String getTitle() {
    return title;
  }

  @JsonProperty
  public String getAuthor() {
    return author;
  }

  @JsonProperty
  public long getDate() {
    return date;
  }

  @JsonProperty
  public String getContent() {
    return content;
  }

  @JsonProperty
  public String getLinkToSource() {
    return linkToSource;
  }
}
