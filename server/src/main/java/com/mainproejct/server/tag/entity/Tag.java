package com.mainproejct.server.tag.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mainproejct.server.place.entity.PlaceTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column
    private String tagName;


    @JsonIgnore
    @OneToMany(mappedBy = "tag") // cascade_remove
    private List<PlaceTag> placeTagList = new ArrayList<>();


    public void addPlaceTag(PlaceTag placeTag){
        this.placeTagList.add(placeTag);
        if(placeTag.getTag() != this){
            placeTag.addTag(this);
        }
    }

}
