import { useState } from "react";

const Questionnaire = () => {
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: number) => {
    setScore(score + answer);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">
        Pet Owner Questionnaire
      </h2>
      <p className="mb-4">
        Answer the following questions to help us determine if you're a good pet
        owner!
      </p>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Do you have previous experience with pets?</span>
          <button
            className="p-2 bg-green-500 text-white rounded-md"
            onClick={() => handleAnswer(3)}
          >
            Yes
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded-md"
            onClick={() => handleAnswer(0)}
          >
            No
          </button>
        </div>

        <div className="flex justify-between">
          <span>Do you have access to a vet for your pets?</span>
          <button
            className="p-2 bg-green-500 text-white rounded-md"
            onClick={() => handleAnswer(2)}
          >
            Yes
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded-md"
            onClick={() => handleAnswer(0)}
          >
            No
          </button>
        </div>

        <div className="text-center mt-6">
          <button
            className="p-2 bg-blue-500 text-white rounded-md"
            onClick={() =>
              alert(
                score >= 5
                  ? "You are a good pet owner! 🐶"
                  : "Sorry, you need more experience. 😿"
              )
            }
          >
            Submit Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
