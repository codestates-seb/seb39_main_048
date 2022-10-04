package com.mainproject.server.server.tag.service;

import com.mainproject.server.server.tag.entity.Tag;
import com.mainproject.server.server.tag.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;
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
           return tagRepository.save(tag);
       }else{
//           tagRepository.save(optionalTag.get());
           tagRepository.delete(tag);
           return null;
       }
        //optionalTag.orElseGet(() ->tagRepository.save(tag));

    }

    public Tag createdTag(Tag tag) {
       Optional<Tag> optionalTag = tagRepository.findByTagName(tag.getTagName());
       return optionalTag.orElseGet(()->tagRepository.save(tag));

       // return tagRepository.findByTagName(tag.getTagName()).orElseGet(()->tagRepository.save(tag));
    }

    public  void deleteTag(Tag tag){
        tagRepository.delete(tag);
    }

    public List<Tag> updateTag(List<Tag> tagList) {
        tagList.stream().forEach(tag -> findVerifiedTagName(tag));
        return tagList;
    }
}
