package com.mainproject.server.place.mapper;


import com.mainproject.server.place.dto.PlaceDto;
import com.mainproject.server.place.dto.TagNameDto;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.place.entity.PlaceTag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",  unmappedTargetPolicy = ReportingPolicy.IGNORE) //
public interface PlaceMapper {

   // @Mapping(source = "placeTagList", target = "placeTagList.tag") //List<placeTag>의 entity, dto 간의 맵핑
   // Place placePostToPlace(PlaceDto.post requestBody);

    @Mapping(target ="placeTagList", source = "tagNameList")
    Place placePatchToPlace(PlaceDto.patch requestBody);
    @Mapping (source = "tagName",  target = "tag.tagName")
    PlaceTag tagNameDtoToPlaceTag (TagNameDto tagNameDto);
    @Mapping(source = "place.placeTagList", target = "tagNameList")// (1)
    PlaceDto.response placeToPlaceResponse(Place place);
    @Mapping(expression = "java(placeTag.getTag().getTagName())", target ="tagName") //(2)
    TagNameDto placeTagToTagNameDto(PlaceTag placeTag);

//    @Mapping(expression = "java(placeTagList.getTag().getTag", target ="tag")
//   PlaceTagDto placeTagToPlaceTagDto(PlaceTag placeTagList);

//    @Mapping(expression = "java(placeTagDtoList.getTagName())", target ="tag.tagName")
//    PlaceTag placeTagDtoToPlaceTag(PlaceTagDto placeTagDtoList);

    List<PlaceDto.response> placesToPlaceResponse(List<Place> places);
    //Page<PlaceDto.response> placesToPlaceResponses(Page<Place> places);



//    default  Place placePostToPlace(PlaceDto.post requestBody){
//        Place place = new Place();
//        place.setName(requestBody.getName());
//        place.setCategory(requestBody.getCategory());
//        place.setServiceTime(requestBody.getServiceTime());
//        place.setHomepage(requestBody.getHomepage());
//        place.setNumber(requestBody.getNumber());
//        place.setDescription(requestBody.getDescription());
//        place.setAddress(requestBody.getAddress());
//        place.setPlaceImage(requestBody.getPlaceImage());
//
//        for (TagNameDto tagNameDto : requestBody.getTagNameList()){
//            Tag tag = new Tag();
//            tag.setTagName(tagNameDto.getTagName());
//
//        }
//
//        List<PlaceTag> placeTagList = requestBody.getTagNameList().stream()
//                .map(placeTagDto -> {
//                    PlaceTag placeTag = new PlaceTag();
//                    Tag tag = new Tag();
//                    tag.setTagName(placeTagDto.getTagName());
//
//                    placeTag.addTag(tag);
//                    placeTag.addPlace(place);//// place를 placeTag에 넣어줘야 하는지??
//                    return placeTag;
//                }).collect(Collectors.toList());
//        place.setPlaceTagList(placeTagList);
//
//        return place;
//    }
}
