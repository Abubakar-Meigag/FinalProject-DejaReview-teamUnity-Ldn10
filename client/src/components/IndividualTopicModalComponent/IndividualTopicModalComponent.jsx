import React from "react";

const IndividualTopicModalComponent = ({
  isOpen,
  onClose,
  topic,
  onReview,
}) => {
  if (!isOpen) return null;

  const handleReview = () => {
    onReview(topic);
    onClose();
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">
          {topic.topic_name}
        </h3>
        <span className="bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
        <p className="text-gray-500 mb-10 text-base leading-relaxed">
          {topic.description}
        </p>
        <p className="text-blue-500 mb-10 text-base leading-relaxed">
          <a href={topic.reference_link}>More info</a>
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <button
              className="bg-blue-500 whitespace-nowrap border-blue-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
              onClick={() => handleReview(topic)}
            >
              Reviewed
            </button>
          </div>
          <div className="flex-1">
            <button
              className="text-gray-900 block w-full rounded-lg border border-gray-200 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualTopicModalComponent;
