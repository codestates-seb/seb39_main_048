package com.mainproejct.server.dto;

import lombok.Getter;
import org.mapstruct.ap.internal.util.EclipseTypeUtilsDecorator;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MainResponseDto<T> {


    private List<T> restaurant;
    private List<T> cafe;
    private List<T> stay;
    private List<T> hospital;
    private List<T> etc;


    public MainResponseDto(List<T> restaurant, List<T> cafe, List<T> stay,List<T> hospital, List<T> etc ) {
        this.restaurant = restaurant;
        this.cafe = cafe;
        this.stay = stay;
        this.hospital = hospital;
        this.etc = etc;
    }

}




