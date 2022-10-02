package com.mainproejct.server.place.controller;

import com.mainproejct.server.dto.MainResponseDto;
import com.mainproejct.server.dto.SingleResponseDto;
import com.mainproejct.server.place.dto.PlaceDto;
import com.mainproejct.server.place.dto.PlaceTagDto;
import com.mainproejct.server.place.entity.Place;
import com.mainproejct.server.place.entity.PlaceTag;
import com.mainproejct.server.place.mapper.PlaceMapper;
import com.mainproejct.server.place.service.PlaceService;
import com.mainproejct.server.tag.entity.Tag;
import com.mainproejct.server.tag.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


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

        Place place = new Place();
        place.setName(requestBody.getName());
        place.setCategory(requestBody.getCategory());
        place.setServiceTime(requestBody.getServiceTime());
        place.setHomepage(requestBody.getHomepage());
        place.setNumber(requestBody.getNumber());
        place.setDescription(requestBody.getDescription());
        place.setAddress(requestBody.getAddress());
        place.setPlaceImage(requestBody.getPlaceImage());

        PlaceTag placeTag = new PlaceTag();
        //placeTag.addPlace(place);


        for (PlaceTagDto placeTagDto : requestBody.getPlaceTagList()){
            Tag tag = new Tag();
            tag.setTagName(placeTagDto.getTagName());
           
            Tag createdTag = tagService.createdTag(tag);
            placeTag.addTag(createdTag);
            place.addPlaceTag(placeTag);
            System.out.println("placeTag.toString() = " + placeTag.toString());

        }


        Place createdPlace = placeService.createPlace(place);


//           /////////////////
//
//        Place place = mapper.placePostToPlace(requestBody); //  place : placeTag[ tagName , tag, place ] 리스트에 포함
//
//        Tag findTag = place.getPlaceTagList().get(0).getTag();
//        tagService.createdTag(findTag);
//        Place createdPlace = placeService.createPlace(place);
//
//        System.out.print("*** requestBody ** : ");
//        System.out.println(requestBody.toString());
//        System.out.print("*** dto -> entity = place : ");
//        System.out.println(place.toString());
//        System.out.print("*** place -> responseDto = createdPlace :");
//        System.out.println(createdPlace.toString());


     return new ResponseEntity<>(
             new SingleResponseDto<>(mapper.placeToPlaceResponse(createdPlace)), HttpStatus.CREATED);
    }

    /**
 * Patch / {placeId}
* patchPlace 구현 완료
**/
    @PatchMapping("/{place-id}")
    public ResponseEntity patchPlace(@RequestBody PlaceDto.patch requestBody,
                                     @PathVariable("place-id") Long placeId){
        System.out.print("////////");
        System.out.println(requestBody.toString());
        Place place = mapper.placePatchToPlace(requestBody);
        place.setPlaceId(placeId);
        System.out.print("////////");
        System.out.println(place.toString());

        Place updatedPlace = placeService.updatePlace(place);

        System.out.print("////////");
        System.out.println(place.toString());
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
