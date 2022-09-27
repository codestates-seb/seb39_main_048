package com.mainproejct.server;

import com.mainproejct.server.place.entity.Place;
import com.mainproejct.server.place.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.util.Arrays;
import java.util.List;


@RequiredArgsConstructor
@SpringBootApplication
@Slf4j
public class ServerApplication{// implements CommandLineRunner {

	private final PlaceRepository placeRepository;
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//
//		final List<Place> placeList = Arrays.asList(
//				new Place(1L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(2L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(3L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(4L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(5L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(6L, "test1", "hospital", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(7L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(8L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(9L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(10L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(11L, "test1", "hospital", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(12L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(13L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(14L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(15L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(16L, "test1", "cafe", "11시", "www.home.com", "0100220000", "안녕하세요 가게입니다.", "이수역입니다.", "이미지1", 5),
//				new Place(17L, "test2", "hospital", "12시", "www.home2.com", "01002200222", "안녕하세요 가게입니다2.", "이수역입니다2.", "이미지2", 3));
//
//		List<Place> savedPlace = placeRepository.saveAll(placeList);
//		savedPlace.forEach(System.out::println);
//	}
}
