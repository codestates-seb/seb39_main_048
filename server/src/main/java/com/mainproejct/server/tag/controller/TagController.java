package com.mainproejct.server.tag.controller;

import org.springframework.web.bind.annotation.*;

public class TagController {

    @PostMapping(" /{place-id}")
    public String postBookmark(@PathVariable("placeId") String placeId) {
        return null;
    }

    @PatchMapping(" /{place-id}")
    public String patchBookmark(@PathVariable("placeId") String placeId) {
        return null;
    }


    @DeleteMapping("/{place-id}")
    public String deleteBookmark(@PathVariable("placeId") String placeId) {
        return null;
    }
}
