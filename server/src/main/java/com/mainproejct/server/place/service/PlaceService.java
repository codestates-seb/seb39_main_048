package com.mainproejct.server.place.service;

import com.mainproejct.server.place.controller.PlaceSpecs;
import com.mainproejct.server.place.dto.PlaceTagDto;
import com.mainproejct.server.place.entity.Place;
import com.mainproejct.server.place.entity.PlaceTag;
import com.mainproejct.server.place.repository.PlaceRepository;
import com.mainproejct.server.tag.entity.Tag;
import com.mainproejct.server.tag.service.TagService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Transactional(readOnly = true)
public class PlaceService {

    private final PlaceRepository placeRepository;
    private final TagService tagService;

    public PlaceService(PlaceRepository placeRepository, TagService tagService) {
        this.placeRepository = placeRepository;
        this.tagService = tagService;
    }

    /**
     * Post
    * createPlace 구현
    **/
    @Transactional
    public Place createPlace(Place place){ //

        //placeTagList 확인
      //  verifyPlaceTagList(place.getPlaceTagList());
//
//        List<PlaceTag> placeTagList = place.getPlaceTagList();
////
////        placeTagList.stream().map(placeTag -> placeTag.getPlace());


        Place savedPlace = placeRepository.save(place);

        return savedPlace;
    }

    private void verifyPlaceTagList(List<PlaceTag> placeTagList) {

        //tagName이 존재하는지 확인, //존재하지 않으면 tagService에서 태그 생성
        List<Tag> findTag = placeTagList.stream()
                .map(placeTag -> {
                    return tagService.findVerifiedTagName(placeTag.getTag());
                }).collect(Collectors.toList());

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
        Optional.ofNullable(place.getScoreAvg())
                .ifPresent(scoreAvg -> findPlace.setScoreAvg(scoreAvg));
        Optional.ofNullable(place.getReplyList())
                .ifPresent(replyList -> findPlace.setReplyList(replyList));

        return placeRepository.save(findPlace);

    }


    /**
     * get / category
    * findPlaceByCategory 구현 완료
    **/
    public List<Place> findPlaceByCategory(String category){
        return placeRepository.findTop8ByCategoryOrderByScoreAvg(category);
    }
    public Place findPlace(Long placeId) {
        return findVerifiedPlace(placeId);
    }
    public Page<Place> findPlaces(int page, int size) {
        return placeRepository.findAll(PageRequest.of(page, size,
                Sort.by("scoreAvg").descending()));
    }


    public List<Place> findPlaceByCategoryWithSpecs( String category){
        Specification<Place> spec = Specification.where(PlaceSpecs.categoryPl(category));
//        if (category != null) {
//
//        }

//        Page<Place> pageSpec = placeRepository.findAll(spec);
//        List<Place> pageSpecList = pageSpec.getContent();
        return   placeRepository.findAll(spec);
    }

    /**
     * Delete
    * deletePlace 구현
    **/
    public void deletePlace(long placeId) {
        Place findPlace = findVerifiedPlace(placeId);
        placeRepository.delete(findPlace);
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
