package seb45_main_029.server.user.uri;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;



public class UriCreator {
    public static URI createUri(String defaultUri, long resourceId){
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUri + "/{resourceId}")
                .buildAndExpand(resourceId)
                .toUri();
    }
}
