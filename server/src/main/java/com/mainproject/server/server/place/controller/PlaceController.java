package com.mainproject.server.server.place.controller;

import com.mainproject.server.server.dto.MainResponseDto;
import com.mainproject.server.server.dto.SingleResponseDto;
import com.mainproject.server.server.place.dto.PlaceDto;
import com.mainproject.server.server.place.dto.TagNameDto;
import com.mainproject.server.server.place.entity.Place;
import com.mainproject.server.server.place.entity.PlaceTag;
import com.mainproject.server.server.place.mapper.PlaceMapper;
import com.mainproject.server.server.place.service.PlaceService;
import com.mainproject.server.server.tag.entity.Tag;
import com.mainproject.server.server.tag.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/v1/place")
public class PlaceController {

    private final PlaceService placeService;
    private final PlaceMapper mapper;

    private final TagService tagService;

    public PlaceController(PlaceService placeService, PlaceMapper mapper, TagService tagService) {
        this.placeService = placeService;
        this.mapper = mapper;
        this.tagService = tagService;
    }


    /**
     * Post
    * postPlace 구현
    **/
    // @ApiOperation(value = "장소등록", response = Place.class)
    //post
    @PostMapping
    @Transactional
    public ResponseEntity postPlace(@RequestBody PlaceDto.post requestBody){
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

        Place createdPlace = placeService.createPlace(place);

     return new ResponseEntity<>(
             new SingleResponseDto<>(mapper.placeToPlaceResponse(createdPlace)), HttpStatus.CREATED);
    }

    /**
 * Patch / {placeId}
* patchPlace 구현 완료
**/
    @Transactional
    @PatchMapping("/{place-id}")
    public ResponseEntity patchPlace(@RequestBody PlaceDto.patch requestBody,
                                     @PathVariable("place-id") Long placeId){
        Place place = mapper.placePatchToPlace(requestBody);
        place.setPlaceId(placeId);



        Place updatedPlace = placeService.updatePlace(place);


        //updatedPlace.getPlaceTagList().clear();

//        updatedPlace.getPlaceTagList()
//                .addAll(new ArrayList<>(place.getPlaceTagList()));

       // placeService.createPlace(updatedPlace);


//        PlaceTag placeTag = new PlaceTag();
//        placeTag.addPlace(place);
//        placeTag.addTag(tag);

//        List<PlaceTag> plist = new ArrayList<>();
//        plist = place.getPlaceTagList().stream().map(placeTag -> {
//            placeTag.setPlace(updatedPlace);
//            return null;
//        });



//                tagService.updateTag(place.getPlaceTagList()
//                        .stream()
//                        .map(placeTag -> placeTag.getTag()).collect(Collectors.toList()));


        //updatedPlace.getPlaceTagList().addAll(place.getPlaceTagList());
//        updatedPlace.getPlaceTagList().addAll(plist);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.placeToPlaceResponse(updatedPlace)), HttpStatus.OK);
    }

    /**
     * getPlaceMain 구현 완료
     * main 페이지에서 카테고리당 8개씩 장소를 불러온다.(OrderByScoreAvg)
     **/
    @GetMapping("/main")
    public ResponseEntity getPlaceMain(){
        List<Place> restaurantList = placeService.findPlaceByCategory("restaurant");
        List<Place> cafeList = placeService.findPlaceByCategory("cafe");
        List<Place> stayList = placeService.findPlaceByCategory("stay");
        List<Place> hospitalList = placeService.findPlaceByCategory("hospital");
        List<Place> etcList = placeService.findPlaceByCategory("etc");
        return new ResponseEntity<>(
                new MainResponseDto<>(
                        mapper.placesToPlaceResponse(restaurantList),
                        mapper.placesToPlaceResponse(cafeList),
                        mapper.placesToPlaceResponse(stayList),
                        mapper.placesToPlaceResponse(hospitalList),
                        mapper.placesToPlaceResponse(etcList)), HttpStatus.OK);
    }

    /**
    * getPlace/{placeId} 구현 완료
    **/
    @GetMapping("/{place-id}")
    public ResponseEntity getPlace(@PathVariable("place-id") Long placeId){
        Place findPlace = placeService.findPlace(placeId);
        System.out.println("* FindPlace :" + findPlace.toString());
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.placeToPlaceResponse(findPlace)), HttpStatus.OK);
    }


    /**
     * 카테고리별  get / category / {category}
    * getPlaceCategory 구현
     * 카테고리별 get은 완료. tag 매핑해서 조회는 아직..
     * scoreAvg 업데이트 하는 로직 필요..- reply에서 활용
    **/
    @GetMapping("/category/{category}")
    public ResponseEntity getPlaceCategory( @RequestParam(required = false) Integer page,//파라미터 널 가능
                                            @RequestParam(required = false) Integer size,
                                           @PathVariable(value = "category", required = false) String category){
       // Page<Place> pagePlaces = placeService.findPlaces(page-1,size);
       // List<Place> placeList = placeService.findPlaceByCategory(category, page-1, size);
        List<Place> placeList = placeService.findPlaceByCategoryWithSpecs(category);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.placesToPlaceResponse(placeList)), HttpStatus.OK);
    }



    /**
    * getPlaces 구현
     * bookmark 우선순위 미루기
    **/
//    @GetMapping("/bookmark")
//    public ResponseEntity getPlaceByBookmark(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Place> pagePlaces = placeService.findPlaces(page - 1, size);
//        List<Place> places = pagePlaces.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.placesToPlaceResponse(places), pagePlaces), HttpStatus.OK);
//    }


    /**
    * deletePlace 구현 완료      * 삭제시, reply등도 함께 삭제하는 것 구현 필요.
    **/
    @DeleteMapping("/{place-id}")
    public ResponseEntity deletePlace(@PathVariable("place-id") long placeId) {
        placeService.deletePlace(placeId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
