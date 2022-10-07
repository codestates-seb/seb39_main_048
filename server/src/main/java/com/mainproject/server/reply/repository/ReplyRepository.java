package com.mainproject.server.reply.repository;

import com.mainproject.server.place.entity.Place;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ReplyRepository extends JpaRepository<Reply, Long> {


    List<Reply> findByUser(User user);

    List<Reply> findByPlace(Place place);
}

