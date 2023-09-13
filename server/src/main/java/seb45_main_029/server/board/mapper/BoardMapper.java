package seb45_main_029.server.board.mapper;
import seb45_main_029.server.board.dto.BoardPatchDto;
import seb45_main_029.server.board.dto.BoardPostDto;
import seb45_main_029.server.board.dto.BoardResponseDto;
import org.mapstruct.Mapper;
import seb45_main_029.server.board.entity.Board;
import seb45_main_029.server.comment.dto.CommentResponseDto;
import seb45_main_029.server.comment.entity.Comment;
import seb45_main_029.server.user.entity.User;


import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface BoardMapper {

    Board boardPostDtoToBoard(BoardPostDto boardPostDto);
    default User mapToUser(long loginId) {
        User user = new User();
        user.setUserId(loginId);

        return user;
    }


    Board boardPatchDtoToBoard(BoardPatchDto boardPatchDto);
    default BoardResponseDto boardToBoardResponseDto(Board board){
        return BoardResponseDto
                .builder()
                .board_id(board.getBoardId())
                .user_id(board.getUser().getUserId())
                .username(board.getUser().getUsername())
                .title(board.getTitle())
                .body(board.getBody())
                .board_comment(board.getComments().stream()
                        .map(comment -> CommentResponseDto.builder()
            .comment_id(comment.getComment_id())
                                .username(comment.getUser())
                                .body(comment.getBody())
            .created_at(comment.getCreatedAt())
            .modified_at(comment.getModifiedAt())
            .build())
            .collect(Collectors.toList()))
            .view_count(board.getViewCount())
            .accepted(board.isAccepted())
            .created_at(board.getCreatedAt())
            .modified_at(board.getModifiedAt())
            .build();
};


default List<BoardResponseDto> boardsToBoardResponseDto(List<Board> boards) {

        return boards
        .stream()
        .map(board -> BoardResponseDto
        .builder()
        .board_id(board.getBoardId())
        .user_id(board.getUser().getUserId())
        .username(board.getUser().getUsername())
        .title(board.getTitle())
        .body(board.getBody())
        .view_count(board.getViewCount())
        .accepted(board.isAccepted())
        .created_at(board.getCreatedAt())
        .modified_at(board.getModifiedAt())
        .build())
        .collect(Collectors.toList());

        }


}