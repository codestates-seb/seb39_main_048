package com.mainproejct.server.place.mapper;


import com.mainproejct.server.place.dto.PlaceDto;
import com.mainproejct.server.place.entity.Place;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",  unmappedTargetPolicy = ReportingPolicy.IGNORE) //
public interface PlaceMapper {

    Place placePostToPlace(PlaceDto.post requestBody);
    Place placePatchToPlace(PlaceDto.patch requestBody);
    PlaceDto.response placeToPlaceResponse(Place place);
    List<PlaceDto.response> placesToPlaceResponse(List<Place> places);
    //Page<PlaceDto.response> placesToPlaceResponses(Page<Place> places);
}
