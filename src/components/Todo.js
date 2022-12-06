import CustomButton from "./CustomButton";

function Todo(props) {
  return (
    <div className="squareStyle">
      {/* props로 받은 age와 name을 가져다 씀 */}
      <h3>{props.list.title}</h3>
      <p>{props.list.contents}</p>
      <CustomButton
        color="red"
        onClick={() => {
          props.handleDelete(props.list.id);
        }}
      >
        삭제하기
      </CustomButton>
      <CustomButton
        color="blue"
        onClick={() => {
          props.handleComplete(props.list.id);
        }}
      >
        {props.list.Complete ? "취소" : "완료"}
      </CustomButton>
    </div>
  );
}

export default Todo;
