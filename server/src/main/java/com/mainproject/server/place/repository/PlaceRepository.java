package com.mainproject.server.place.repository;

import com.mainproject.server.place.entity.Place;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long>, JpaSpecificationExecutor<Place> {

    List<Place> findTop8ByCategoryOrderByScoreAvg(String category);
    //List<Place> findByCategory(String category, PageRequest pageRequest);

    List<Place> findAllByOrderByPlaceIdDesc();
    Place findByName(String name);

    List<Place> findByNameContaining(String name);

    List<Place> findByUserOrderByPlaceIdDesc(User user);


}
