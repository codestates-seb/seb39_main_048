package com.mainproject.server.server.tag.repository;

import com.mainproject.server.server.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Optional<Tag> findByTagName(String tagName);




  //  Tag findByTagName(String name);

    List<Tag> findByTagNameContaining(String tagName);

}
