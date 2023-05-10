import React, { useState, useEffect } from 'react';

const AdminBoardList = () => {
  const [adminBoardList, setAdminBoardList] = useState([]);

  useEffect(() => {
      axios({
        method: 'post',
        url: '/Festlib/fest/sjf/board.do', // sjf 수정해야함
        contentType: "application/json; charset=UTF-8",
        params: {
                fno: 'sjf'
              }
      })
        .then(Response => {
          setAdminBoardList(Response.data);
        });
    });

}

export default AdminBoardList