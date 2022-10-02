package com.mainproejct.server.tag.service;

import com.mainproejct.server.tag.entity.Tag;
import com.mainproejct.server.tag.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TagService {

    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag findVerifiedTagName(Tag tag){
       Optional<Tag> optionalTag = tagRepository.findByTagName(tag.getTagName());
       if(optionalTag.isEmpty()){
           tagRepository.save(tag);
       }else{
//           tagRepository.save(optionalTag.get());
           tagRepository.delete(tag);
       }
return null;
        //optionalTag.orElseGet(() ->tagRepository.save(tag));

    }

    public Tag createdTag(Tag tag) {
       Optional<Tag> optionalTag = tagRepository.findByTagName(tag.getTagName());
       return optionalTag.orElseGet(()->tagRepository.save(tag));


    }

}
