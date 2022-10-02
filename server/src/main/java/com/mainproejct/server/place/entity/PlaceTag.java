package com.mainproejct.server.place.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mainproejct.server.tag.entity.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Setter
@Getter
@NoArgsConstructor
@Entity
public class PlaceTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long placeTagId;


    @ManyToOne
    @JoinColumn(name = "PLACE_ID")
    private Place place;

//    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;


    public void addPlace(Place place) {
        this.place = place;
        if(!this.place.getPlaceTagList().contains(this))
            this.place.getPlaceTagList().add(this);
    }

    public void addTag(Tag tag){
        this.tag = tag;
        if(!this.tag.getPlaceTagList().contains(this)){
            this.tag.addPlaceTag(this);
        }
    }

    @Override
    public String toString() {
        return "PlaceTag{" +
                "placeTagId=" + placeTagId +
                ", place=" + place +
                ", tag=" + tag +
                '}';
    }
}
