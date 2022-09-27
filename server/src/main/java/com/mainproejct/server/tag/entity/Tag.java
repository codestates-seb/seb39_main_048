package com.mainproejct.server.tag.entity;

import com.mainproejct.server.place.entity.PlaceTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {

    @Id
    @GeneratedValue
    private Long tagId;

    String TagName;

    @OneToMany(mappedBy = "tag")
    private List<PlaceTag> placeTagList = new ArrayList<>();


    public void addPlaceTag(PlaceTag placeTag){
        this.placeTagList.add(placeTag);
        if(placeTag.getTag() != this){
            placeTag.addTag(this);
        }
    }

}
