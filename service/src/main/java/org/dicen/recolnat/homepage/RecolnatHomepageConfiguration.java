package org.dicen.recolnat.homepage;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;

import javax.validation.constraints.NotNull;
import java.util.List;

public class RecolnatHomepageConfiguration extends Configuration {
  @NotNull
  private String source;

  @JsonProperty
  public String getSource() {return source;}

  @JsonProperty
  public void setSource(String source) {this.source = source;}
}
