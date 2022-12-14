package com.mainproject.server.place.controller;

import com.mainproject.server.auth.PrincipalDetails;
import com.mainproject.server.dto.MainResponseDto;
import com.mainproject.server.dto.MultiResponseDto;
import com.mainproject.server.dto.SingleResponseDto;
import com.mainproject.server.place.dto.PlaceDto;
import com.mainproject.server.place.dto.TagNameDto;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.place.entity.PlaceTag;
import com.mainproject.server.place.mapper.PlaceMapper;
import com.mainproject.server.place.service.PlaceService;
import com.mainproject.server.tag.entity.Tag;
import com.mainproject.server.tag.service.TagService;
import com.mainproject.server.user.entity.User;
import com.mainproject.server.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/place")
public class PlaceController {

    private final PlaceService placeService;
    private final PlaceMapper mapper;
    private final UserService userService;
    private final TagService tagService;

    public PlaceController(PlaceService placeService, PlaceMapper mapper, UserService userService, TagService tagService) {
        this.placeService = placeService;
        this.mapper = mapper;
        this.userService = userService;
        this.tagService = tagService;
    }

    /**
     * Post
     * postPlace 구현
     **/
    @PostMapping
    public ResponseEntity postPlace(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                    @RequestBody PlaceDto.post requestBody) {
        //user 조회 후 반환
        User user = userService.findUser(principalDetails.getUser());

        Place createdPlace = placeService.createPlace(requestBody, user);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.placeToPlaceResponse(createdPlace)), HttpStatus.CREATED);
    }

    /**
     * Patch / {placeId}
     * patchPlace 구현 완료
     **/
    @PatchMapping("/{place-id}")
    public ResponseEntity patchPlace(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                     @RequestBody PlaceDto.patch requestBody,
                                     @PathVariable("place-id") Long placeId) {
        Place place = mapper.placePatchToPlace(requestBody);
        place.setPlaceId(placeId);

        Place updatedPlace = placeService.updatePlace(place);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.placeToPlaceResponse(updatedPlace)), HttpStatus.OK);
    }

    /**
     * getPlaceMain 구현 완료
     * main 페이지에서 카테고리당 8개씩 장소를 불러온다.(OrderByScoreAvg)
     **/
    @GetMapping("/main")
    public ResponseEntity getPlaceMain() {
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
    public ResponseEntity getPlace(@PathVariable("place-id") Long placeId) {
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
    public ResponseEntity getPlaceCategory(@RequestParam(required = false) Integer page,//파라미터 널 가능
                                           @RequestParam(required = false) Integer size,
                                           @PathVariable(value = "category", required = false) String category) {
         //Page<Place> pagePlaces = placeService.findPlaces(page-1,size);
        // List<Place> placeList = placeService.findPlaceByCategory(category, page-1, size);

        Page<Place> placeList = placeService.findPlaceByCategoryWithSpecs(category, page-1, size);
        List<Place> places = placeList.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.placesToPlaceResponse(places),placeList), HttpStatus.OK);
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
    public ResponseEntity deletePlace(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                      @PathVariable("place-id") long placeId) {
        placeService.deletePlace(placeId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
