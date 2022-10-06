package com.mainproject.server.place.service;

import com.mainproject.server.place.controller.PlaceSpecs;
import com.mainproject.server.place.dto.PlaceDto;
import com.mainproject.server.place.dto.TagNameDto;
import com.mainproject.server.place.repository.PlaceRepository;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.place.entity.PlaceTag;
import com.mainproject.server.tag.entity.Tag;
import com.mainproject.server.tag.service.TagService;
import com.mainproject.server.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    public Place createPlace(PlaceDto.post requestBody, User user){

        //place 생성 후 requestBody내용 set
        Place place = new Place();
        place.setName(requestBody.getName());
        place.setCategory(requestBody.getCategory());
        place.setServiceTime(requestBody.getServiceTime());
        place.setHomepage(requestBody.getHomepage());
        place.setNumber(requestBody.getNumber());
        place.setDescription(requestBody.getDescription());
        place.setAddress(requestBody.getAddress());
        place.setPlaceImage(requestBody.getPlaceImage());
        place.addUser(user);

        //placeTag.addPlace(place);

        //tagName 을 tag에 삽입
        // tag를 저장(createdTag)
        // placeTaag에 createdTag 저장 ->  tag에 placeTag 저장
        // placeTag에 place 저장 - > place에 placeTag 저장

        for (TagNameDto tagNameDto : requestBody.getTagNameList()){
            Tag tag = new Tag();
            tag.setTagName(tagNameDto.getTagName());

            Tag createdTag = tagService.createdTag(tag);

            PlaceTag placeTag = new PlaceTag();
            placeTag.addTag(createdTag);
            placeTag.addPlace(place);
        }

        return placeRepository.save(place);
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
    @Transactional
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
        Optional.ofNullable(place.getPlaceTagList())
                .ifPresent(placeTagList ->  {
                    findPlace.getPlaceTagList().clear();
                    placeTagList.stream().forEach(placeTag ->{
                       Tag tag = tagService.createdTag(placeTag.getTag());
                        placeTag.setTag(tag);
                        findPlace.addPlaceTag(placeTag);
                    });
        });

        return findPlace;

    }

    @Transactional
    public Place updateScoreAvgPlace(Place place){
        Place findPlace = findVerifiedPlace(place.getPlaceId());
        //Place findPlace = place;


        Optional.ofNullable(place.getScoreAvg())
                .ifPresent(scoreAvg -> findPlace.setScoreAvg(scoreAvg));

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
        if(category.equals("all")) {
            //Specification<Place> spec = Specification.where(PlaceSpecs.categoryFind(null));
            return   placeRepository.findAll();
        }
        else {
            Specification<Place> spec = Specification.where(PlaceSpecs.categoryFind(category));
            return   placeRepository.findAll(spec);
        }


//        Page<Place> pageSpec = placeRepository.findAll(spec);
//        List<Place> pageSpecList = pageSpec.getContent();

    }

    /**
     * Delete
    * deletePlace 구현
    **/
    @Transactional
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

    public List<Place> findPlaceByUser(User user) {
     return   placeRepository.findByUser(user);
    }

//    private void verifyExistsPlaceId(long placeId) {
//        // todo
//
//    }


}
