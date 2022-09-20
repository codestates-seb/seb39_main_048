package com.mainproejct.server.reply.dto;

import org.springframework.web.bind.annotation.RequestParam;

public class ReplyDto {


    public class post {
        String context;
        String score;
        String replyImage;

    }

    public class patch {

        long replyId;

        String context;
        String score;
        String replyImage;

    }

    public class response {
        long replyId;

        String context;
        String score;
        String replyImage;

    }
}
