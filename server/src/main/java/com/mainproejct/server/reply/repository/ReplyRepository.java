package com.mainproejct.server.reply.repository;

import com.mainproejct.server.place.entity.Place;
import com.mainproejct.server.reply.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ReplyRepository extends JpaRepository<Reply, Long> {


}

