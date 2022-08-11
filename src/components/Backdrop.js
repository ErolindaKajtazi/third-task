import "./Backdrop.css";

function Backdrop(props) {
  return <div className="backdrop" onclick={props.onCancel} />;
}

export default Backdrop;
