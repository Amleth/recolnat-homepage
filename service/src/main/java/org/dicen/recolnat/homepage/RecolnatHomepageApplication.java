package org.dicen.recolnat.homepage;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.dicen.recolnat.homepage.resources.NewsListResource;
import org.eclipse.jetty.servlets.CrossOriginFilter;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;

public class RecolnatHomepageApplication extends Application<RecolnatHomepageConfiguration> {
    public static void main(String[] args) throws Exception {
        new RecolnatHomepageApplication().run(args);
    }

    @Override
    public String getName() {
        return "recolnat-homepage";
    }

    @Override
    public void initialize(Bootstrap<RecolnatHomepageConfiguration> bootstrap) {
        // nothing to do yet
    }

    @Override
    public void run(RecolnatHomepageConfiguration configuration, Environment environment) {
        final NewsListResource newsListResource = new NewsListResource(configuration.getSource());

        configureCors(environment);

        environment.jersey().register(newsListResource);
    }

    private void configureCors(Environment environment) {
        FilterRegistration.Dynamic filter = environment.servlets().addFilter("CORS", CrossOriginFilter.class);
        filter.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_METHODS_PARAM, "GET,PUT,POST,DELETE,OPTIONS");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*");
        filter.setInitParameter(CrossOriginFilter.ACCESS_CONTROL_ALLOW_ORIGIN_HEADER, "*");
        filter.setInitParameter("allowedHeaders", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin");
        filter.setInitParameter("allowCredentials", "true");
    }
}
