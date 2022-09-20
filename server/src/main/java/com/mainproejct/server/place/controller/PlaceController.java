package com.mainproejct.server.place.controller;

import com.mainproejct.server.dto.SingleResponseDto;
import com.mainproejct.server.place.dto.PlaceDto;
import com.mainproejct.server.place.entity.Place;
import com.mainproejct.server.place.mapper.PlaceMapper;
import com.mainproejct.server.place.repository.PlaceRepository;
import com.mainproejct.server.place.service.PlaceService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/v1/place")
public class PlaceController {

    private final PlaceService placeService;
    private final PlaceMapper mapper;

    public PlaceController(PlaceService placeService, PlaceMapper mapper) {
        this.placeService = placeService;
        this.mapper = mapper;
    }


    /**
     * Post
    * postPlace 구현
    **/
    // @ApiOperation(value = "장소등록", response = Place.class)
    //post
    @PostMapping
    public ResponseEntity postPlace(@RequestBody PlaceDto.post requestBody){

        Place place = mapper.placePostToPlace(requestBody);
        Place createdPlace = placeService.createPlace(place);


        System.out.print("*** requestBody ** : ");
        System.out.println(requestBody.toString());
        System.out.print("*** dto -> entity = place : ");
        System.out.println(place.toString());
        System.out.print("*** place -> responseDto = createdPlace :");
        System.out.println(createdPlace.toString());

     return new ResponseEntity<>(
             new SingleResponseDto<>(mapper.placeToPlaceResponse(createdPlace)), HttpStatus.CREATED);
    }

/**
 * Patch / {placeId}
* patchPlace 구현
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
 * 카테고리별  get / category / {category}
* getPlaceCategory 구현
**/
    //카테고리별 get
    @GetMapping("/category/{category}")
    public ResponseEntity getPlaceCategory(@PathVariable("category") String category){

        List<Place> placeList = placeService.findPlaceByCategory(category);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.placesToPlaceResponse(placeList)), HttpStatus.OK);
    }

    //전체 장소 get
    @GetMapping
    public String getPlaces(){
        return null;
    }
//
//    @GetMapping
//    public ResponseEntity getMembers(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Place> pagePlaces = placeService.findPlaces(page - 1, size);
//        List<Place> places = pagePlaces.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.membersToMemberResponses(members),
//                        pageMembers),
//                HttpStatus.OK);
//    }

//    //특정 장소 get
//    @GetMapping("/{place_id}")
//    public  String getPlace(@PathVariable("place_id") long placeId){
//        return null; //placeId / placeName / category / placeImage / serviceTime / hompage / number / address / description
//    }

    //특정 장소 delete
    @DeleteMapping("/{place-id}")
    public ResponseEntity deletePlace(@PathVariable("place-id") long placeId) {
        placeService.deletePlace(placeId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
