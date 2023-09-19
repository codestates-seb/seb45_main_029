package seb45_main_029.server.myResolution.mapper;

import org.mapstruct.Mapper;
import seb45_main_029.server.myResolution.dto.MyResolutionPostDto;
import seb45_main_029.server.myResolution.dto.MyResolutionResponseDto;
import seb45_main_029.server.myResolution.entity.MyResolution;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MyResolutionMapper {

    MyResolution myResolutionDtoToMyResolution(MyResolutionPostDto myResolutionPostDto);

    MyResolutionResponseDto myResolutionToMyResolutionDto(MyResolution myResolution);

    List<MyResolutionResponseDto> myResolutionsToMyResolutionDtos(List<MyResolution> myResolutions);
}
