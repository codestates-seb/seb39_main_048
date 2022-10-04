package com.mainproject.server.server.place.repository;

import com.mainproject.server.server.place.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long>, JpaSpecificationExecutor<Place> {

    List<Place> findTop8ByCategoryOrderByScoreAvg(String category);
    //List<Place> findByCategory(String category, PageRequest pageRequest);

    Place findByName(String name);

    List<Place> findByNameContaining(String name);
}
