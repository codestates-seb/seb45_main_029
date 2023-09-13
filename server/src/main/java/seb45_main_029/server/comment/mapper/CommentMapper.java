package seb45_main_029.server.comment.mapper;

import org.mapstruct.Mapper;
import seb45_main_029.server.comment.dto.CommentPatchDto;
import seb45_main_029.server.comment.dto.CommentPostDto;
import seb45_main_029.server.comment.dto.CommentResponseDto;
import seb45_main_029.server.comment.entity.Comment;

import java.util.List;
@Mapper(componentModel = "spring")
public interface CommentMapper {
    List<CommentResponseDto> commentToCommentResponseDto(List<Comment> comments);

        //Mapping(source = "id", target = "member")
        Comment commentPostDtoToComment(CommentPostDto commentPostDto);
        Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);
        CommentResponseDto commentToCommentResponseDto(Comment comment);





    }

