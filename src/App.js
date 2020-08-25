import React from 'react';
import './App.css';
import Header from './components/Header';
import ListVideo from './components/ListVideo';
import Details from './components/Details';

const data = [
  {
    name: "Hoa Của Quỷ",
    image: "https://static.fptplay.net/static/img/share/video/28_07_2020/hoa-cua-quy-vietsub-fpt-play-poster-128-07-2020_14g22-31.jpg?w=282&amp;mode=scale",
    video: "blob:https://fptplay.vn/04a13793-6b42-40db-b875-bea9eae80b5b",
    content: "Hoa Của Quỷ xoay quanh cuộc hôn nhân tưởng chừng hạnh phúc giữa người đàn ông bí ẩn có " +
      "quá khứ đen tối Baek Hee Sung (Lee Jun Ki) - kẻ luôn tìm cách che giấu thân phận sát nhân của mình và người vợ là thám tử điều tra Cha Ji Won" +
      "(Moon Chae Won). Mọi chuyện bắt đầu trở nên thú vị khi người vợ dần nhận ra chồng mình không phải là người đàn ông ngọt ngào như cô vẫn tưởng." +
      "Sẽ như thế nào nếu người đàn ông mà bạn yêu thương và tin tưởng suốt 14 năm trời hóa ra lại là một kẻ máu lạnh đáng sợ?"
  },
  {
    name: "Cẩm Túc Nam Ca",
    image: "https://static.fptplay.net/static/img/share/video/24_07_2020/cam-tu-nam-ca-vietsub-fpt-play-poster24-07-2020_17g25-32.jpg?w=282&mode=scale",
    video: "blob:https://fptplay.vn/71612a89-235e-4516-8e66-b3179a6df6a5",
    content: "Giám quốc Bành Thành Vương Lưu Nghĩa Khang biết rõ dân chúng ai oán lầm than vì những gian thần gây rối loạn kỷ cương," +
      "muốn thay đổi thế cục nhưng sức mỏng lực yếu, không thể một mình chống lại thế lực hùng mạnh của Lục Viễn và Lục," +
      "nên đã nhịn nhục chờ thời cơ và âm thầm bày mưu. Bành Thành Vương quyết định liên hôn với Thẩm gia, một gia tộc có dòng dõi nhà tướng," +
      "trung thành với đế vương. Thẩm Ly Ca với thân phận đích nữ của Thẩm gia được lựa chọn để trở thành Trắc Vương Phi của Bành Thành Vương."
  },
  {
    name: "Thư Sinh Bóng Đêm",
    image: "https://static.fptplay.net/static/img/share/video/24_06_2020/thusinhbongdem-poster24-06-2020_21g08-40.png?w=282&mode=scale",
    video: "blob:https://fptplay.vn/ca2ca5ac-b2b1-4eac-a5f2-115012042d29",
    content: "The Scholar Who Walks the Night - Thư Sinh Bóng Đêm là bộ phim lấy cốt truyện từ bộ truyện tranh nổi tiếng cùng tên của Hàn Quốc." +
      "Bối cảnh phim là về triều đại Joseon với nhân vật chính là nàng Jo Yang Seon - một tiểu thư con nhà quý tộc nhưng không may rơi vào" +
      "cảnh nghèo khó khi phụ thân bị vu oan cho tội phản nghịch. Để mưu sinh, nàng phải cải trang thành nam nhi, làm công việc bán sách về đêm." +
      "Tình cờ trong một lần nàng gặp được công tử Kim Sung Yeol trong lúc bị những con ma cà rồng tấn công. Qua sự việc đó nàng và Sung Yeol" +
      "trở thành bằng hữu. Nhưng nàng không hề biết rằng Kim Sung Yeol cũng chính là một ma cà rồng…"
  }
]


function App() {

  const [detail, setDetail] = React.useState(undefined);

  return (
    <div className="App">
      <Header></Header>
      {detail ?
        <Details
          name={detail.name}
          image={detail.image}
          content={detail.content}
          click={function (obj) {
            setDetail(undefined);
          }}
        /> :
        <div class="row">
          {data.map(object => {
            return (
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <ListVideo
                  name={object.name}
                  image={object.image}
                  content={object.content}
                  click={function (obj) {
                    setDetail(obj);
                  }}
                />
              </div>
            )
          })}
        </div>
      }
    </div>
  );
}
export default App;
