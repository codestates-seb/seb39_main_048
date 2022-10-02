package com.mainproejct.server.place.mapper;


import com.mainproejct.server.place.dto.PlaceDto;
import com.mainproejct.server.place.dto.PlaceTagDto;
import com.mainproejct.server.place.entity.Place;
import com.mainproejct.server.place.entity.PlaceTag;
import com.mainproejct.server.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring",  unmappedTargetPolicy = ReportingPolicy.IGNORE) //
public interface PlaceMapper {

   // @Mapping(source = "placeTagList", target = "placeTagList.tag") //List<placeTag>의 entity, dto 간의 맵핑
   // Place placePostToPlace(PlaceDto.post requestBody);
    Place placePatchToPlace(PlaceDto.patch requestBody);
    @Mapping(source = "place.placeTagList", target = "placeTagList")
    PlaceDto.response placeToPlaceResponse(Place place);
    @Mapping(expression = "java(placeTagList.getTag().getTagName())", target ="tagName")
    PlaceTagDto placeTagToPlaceTagDto(PlaceTag placeTagList);

//    @Mapping(expression = "java(placeTagList.getTag().getTagName())", target ="tag")
//    PlaceTagDto placeTagToPlaceTagDto(PlaceTag placeTagList);

//    @Mapping(expression = "java(placeTagDtoList.getTagName())", target ="tag.tagName")
//    PlaceTag placeTagDtoToPlaceTag(PlaceTagDto placeTagDtoList);

    List<PlaceDto.response> placesToPlaceResponse(List<Place> places);
    //Page<PlaceDto.response> placesToPlaceResponses(Page<Place> places);



    default  Place placePostToPlace(PlaceDto.post requestBody){
        Place place = new Place();
        place.setName(requestBody.getName());
        place.setCategory(requestBody.getCategory());
        place.setServiceTime(requestBody.getServiceTime());
        place.setHomepage(requestBody.getHomepage());
        place.setNumber(requestBody.getNumber());
        place.setDescription(requestBody.getDescription());
        place.setAddress(requestBody.getAddress());
        place.setPlaceImage(requestBody.getPlaceImage());

        for (PlaceTagDto placeTagDto : requestBody.getPlaceTagList()){
            Tag tag = new Tag();
            tag.setTagName(placeTagDto.getTagName());

        }

        List<PlaceTag> placeTagList = requestBody.getPlaceTagList().stream()
                .map(placeTagDto -> {
                    PlaceTag placeTag = new PlaceTag();
                    Tag tag = new Tag();
                    tag.setTagName(placeTagDto.getTagName());
                    placeTag.addTag(tag);
                    placeTag.addPlace(place);//// place를 placeTag에 넣어줘야 하는지??
                    return placeTag;
                }).collect(Collectors.toList());
        place.setPlaceTagList(placeTagList);

        return place;
    }
}
