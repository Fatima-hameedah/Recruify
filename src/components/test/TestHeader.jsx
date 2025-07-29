import Timer from "./Timer";

const TestHeader = ({ title }) => {
  return (
    <div className="flex justify-between py-6">
      <div className="text-2xl md:text-3xl font-bold text-gray-600">
        {title}
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
};

export default TestHeader;
