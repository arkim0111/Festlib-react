
const BoardDetail = () => {

    const [boardDetail, setBoardDetail] = useState([]);

    useEffect(() => {
     axios({
            method: 'post',
            url: '/GareBnB/board/boardDetail.do',
            params: {
              'BOARD_NO': param.BOARD_NO,
              'BOARD_MODIFY_NO': param.BOARD_MODIFY_NO
            }
          }).then(Response => {
            setBoardDetail(Response.data);
          });
    }
}

export default BoardDetail