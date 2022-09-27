package com.mainproejct.server.place.repository;

import com.mainproejct.server.place.entity.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.awt.print.Pageable;
import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long>, JpaSpecificationExecutor<Place> {

    List<Place> findTop8ByCategoryOrderByScoreAvg(String category);
    //List<Place> findByCategory(String category, PageRequest pageRequest);
}
