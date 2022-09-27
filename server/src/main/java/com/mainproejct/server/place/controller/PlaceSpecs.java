package com.mainproejct.server.place.controller;

import com.mainproejct.server.place.entity.Place;

import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.swing.text.AbstractDocument;

public class PlaceSpecs {
    public static Specification<Place> titleLike(final String keyword){
        return new Specification<Place>() {
            @Override
            public Predicate toPredicate(Root<Place> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
                return cb.like(root.get("keyword"),"%"+keyword+"%");
            }
        };
    }

    public static Specification<Place> categoryPl(final String category){
        return new Specification<Place>() {
            @Override
            public Predicate toPredicate(Root<Place> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
                return cb.equal(root.get("category"), category);
            }
        };
    }
}
