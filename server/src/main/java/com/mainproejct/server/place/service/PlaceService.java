package com.mainproejct.server.place.service;

import com.mainproejct.server.place.entity.Place;
import com.mainproejct.server.place.repository.PlaceRepository;
import com.mainproejct.server.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlaceService {

    private final PlaceRepository placeRepository;

    public PlaceService(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    /**
     * Post
    * createPlace 구현
    **/
    public Place createPlace(Place place){
        Place savedPlace = placeRepository.save(place);


        return savedPlace;
    }

    /**
    * Patch
     * updatePlace구현
    **/
    public Place updatePlace(Place place){
        Place findPlace = findVerifiedPlace(place.getPlaceId());
        //Place findPlace = place;

        Optional.ofNullable(place.getName())
                .ifPresent(name -> findPlace.setName(name));
        Optional.ofNullable(place.getCategory())
                .ifPresent(category -> findPlace.setCategory(category));
        Optional.ofNullable(place.getServiceTime())
                .ifPresent(serviceTime -> findPlace.setServiceTime(serviceTime));
        Optional.ofNullable(place.getHomepage())
                .ifPresent(homepage -> findPlace.setHomepage(homepage));
        Optional.ofNullable(place.getNumber())
                .ifPresent(number -> findPlace.setNumber(number));
        Optional.ofNullable(place.getDescription())
                .ifPresent(description -> findPlace.setDescription(description));
        Optional.ofNullable(place.getAddress())
                .ifPresent(address -> findPlace.setAddress(address));
        Optional.ofNullable(place.getPlaceImage())
                .ifPresent(placeImage -> findPlace.setPlaceImage(placeImage));

        return placeRepository.save(findPlace);

    }


    /**
     * get / category
    * findPlaceByCategory 구현
    **/
    public List<Place> findPlaceByCategory(String category){

        return placeRepository.findTop8ByCategoryOrderByScoreAvg(category);
    }


    /**
     * Delete
    * deletePlace 구현
    **/
    public void deletePlace(long placeId) {
        Place findPlace = findVerifiedPlace(placeId);
        placeRepository.delete(findPlace);
    }

    public Page<Place> findPlaces(int page, int size) {
        return placeRepository.findAll(PageRequest.of(page, size,
                Sort.by("scoreAvg").descending()));
    }

    private Place findVerifiedPlace(Long placeId) {

        Optional<Place> optionalPlace = placeRepository.findById(placeId);
        Place findPlace =
                optionalPlace.orElse(null);  // exception 추가 필요.
        return findPlace;

    }

//    private void verifyExistsPlaceId(long placeId) {
//        // todo
//
//    }


}
