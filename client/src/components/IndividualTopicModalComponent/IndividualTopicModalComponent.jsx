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
      <div className="w-full max-w-[570px] rounded-[20px] bg-[#096b23] py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-secondary pb-2 text-xl font-bold sm:text-2xl">
          {topic.topic_name}
        </h3>
        <span className="bg-base-100 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
        <p className="text-secondary mb-10 text-base leading-relaxed">
          {topic.description}
        </p>
        <p className="text-base-100 hover:text-lightBlue hover:underline mb-10 text-base leading-relaxed">
          <a
            href={topic.reference_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <button
              className="bg-greenIcons whitespace-nowrap block w-full rounded-lg border p-3 text-center text-base font-semibold text-secondary transition hover:bg-green"
              onClick={() => handleReview(topic)}
            >
              Reviewed
            </button>
          </div>
          <div className="flex-1">
            <button
              className="text-gray-900 block w-full rounded-lg border border-gray-200 p-3 text-center text-base font-medium transition  hover:bg-main hover:text-secondary"
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
