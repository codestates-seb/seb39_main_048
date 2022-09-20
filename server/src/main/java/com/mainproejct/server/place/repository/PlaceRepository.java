package com.mainproejct.server.place.repository;

import com.mainproejct.server.place.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long> {

List<Place> findTop8ByCategoryOrderByScoreAvg(String category);

}
