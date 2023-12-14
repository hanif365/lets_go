import { PropagateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <PropagateLoader color="#8CB8FF" size={25} data-textid="Loader" />
    </div>
  );
};

export default Loading;
