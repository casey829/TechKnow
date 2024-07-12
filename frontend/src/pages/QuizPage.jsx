import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../services/userContext";
import { BiChat, BiChevronRight, BiShare } from "react-icons/bi";
import { BsArrowLeft, BsQuestionCircleFill } from "react-icons/bs";

function QuizPage() {
  const navigate = useNavigate();
  const { quiz } = useParams();
  const { user, fetchQuestions, questions } = useContext(UserContext);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [resources, setResources] = useState([]);
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  useEffect(() => {
    if (quiz) {
      fetchQuestions(quiz);
    }
  }, [quiz]);

  const handleNextQuestion = () => {
    if (questions && userAnswers[currentQuestionIndex]) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        calculateScore();
        setShowResults(true);
      }
    }
  };

  const handleAnswerChange = (event) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: event.target.value,
    });
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index]?.toLowerCase() === question.answer.toLowerCase()) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const progressPercentage = questions?.length
    ? Math.round((currentQuestionIndex / questions.length) * 100)
    : 0;

  const handleAddResource = () => {
    if (resourceTitle && resourceUrl) {
      setResources([...resources, { title: resourceTitle, url: resourceUrl }]);
      setResourceTitle("");
      setResourceUrl("");
    }
  };

  return (
    <Layout>
      <section className="relative w-full h-fit grid grid-cols-5 gap-4 py-12">
        <div className="w-full col-span-3">
          <h2 className="font-bold text-6xl text-cyan-700 mb-5">
            {quiz} Assessment
          </h2>
          <span className="h-[3px] w-32 bg-cyan-700 flex rounded-full my-5"></span>
          <p className="max-w-lg font-semibold">
            {quiz} is a very important topic. Here are some questions to test
            your knowledge.
          </p>
          <div className="mt-10 mb-4 flex w-full items-center justify-between">
            <div className="controlls w-fit flex space-x-4">
              <Link
                to={"/quizzes"}
                className="back bg-slate-500 font-semibold text-sm rounded-lg flex items-center justify-center px-4 py-1.5"
              >
                <BsArrowLeft className="mr-3" /> All Quizzes
              </Link>
              <span className="share bg-yellow-500 font-semibold text-sm rounded-lg  flex items-center justify-center px-4 py-1.5">
                <BiShare className="mr-3" /> Share
              </span>
            </div>
            <span className="suggest bg-yellow-500 font-semibold text-sm rounded-lg  flex items-center justify-center px-4 py-1.5">
              <BiChat className="mr-3" /> Suggest Changes
            </span>
          </div>
          <div className="status w-full flex justify-between items-center border border-slate-500 rounded-xl p-1">
            <div className="w-fit">
              <span className="font-semibold text-xs px-3 py-1.5 bg-yellow-100 rounded-lg">
                {progressPercentage}% Done
              </span>
              <span className="font-semibold text-xs px-3 py-1.5 rounded-lg">
                {currentQuestionIndex + 1} Completed
              </span>
              <span className="font-semibold text-xs px-3 py-1.5 rounded-lg">
                {questions ? currentQuestionIndex + 1 : 0} in Progress
              </span>
              <span className="font-semibold text-xs px-3 py-1.5 rounded-lg">
                0 Skipped
              </span>
              <span className="font-semibold text-xs px-3 py-1.5 rounded-lg">
                {questions?.length} Total
              </span>
            </div>
            <div className="track w-fit">
              <span className="font-bold flex items-center justify-center text-xs px-3 py-1.5 rounded-lg">
                <BsQuestionCircleFill className="mr-2" /> Track Progress
              </span>
            </div>
          </div>
          {showResults ? (
            <div className="w-full h-fit flex flex-col items-start space-y-2 border border-slate-500 rounded-xl p-3 mt-8">
              <h3 className="w-full font-bold text-xl">Results</h3>
              <p className="w-full font-semibold">
                You scored {score} out of {questions.length}
              </p>
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="question-box w-full divide-y-2 divide-slate-500 mb-4"
                >
                  <div className="w-full bg-red-300">
                    <h4 className="w-full font-bold text-lg">
                      {question.question_text}
                    </h4>
                  </div>
                  <div className="options w-full pt-5">
                    <p className="w-full p-3 rounded-lg border border-slate-500">
                      Your answer: {userAnswers[index]}
                    </p>
                    <p className="w-full p-3 rounded-lg border border-slate-500">
                      Correct answer: {question.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-fit flex flex-col items-start space-y-2 border border-slate-500 rounded-xl p-3 mt-8">
              {questions && questions.length > 0 && (
                <div className="question-box w-full divide-y-2 divide-slate-500 mb-4">
                  <div className="w-full bg-red-300">
                    <h3 className="w-full font-bold text-xl">
                      {questions[currentQuestionIndex].question_text}
                    </h3>
                  </div>
                  <div className="options w-full pt-5">
                    <textarea
                      rows={"3"}
                      type="text"
                      name="answer"
                      id="answer"
                      placeholder="Type your answer here"
                      className="w-full p-3 rounded-lg border border-slate-500"
                      value={userAnswers[currentQuestionIndex] || ""}
                      onChange={handleAnswerChange}
                    />
                  </div>
                </div>
              )}
              <div className="w-fit">
                <button
                  onClick={handleNextQuestion}
                  className="font-semibold text-sm px-3 py-1.5 bg-cyan-700 rounded-lg flex items-center justify-center"
                >
                  Next <BiChevronRight className=" text-2xl ml-3" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="w-full max-h-[80vh] flex flex-col justify-between space-y-5 col-start-4 col-span-2">
          <div className="h-full px-4 py-5 rounded-xl bg-cyan-100 border border-slate-600">
            <h3 className="text-4xl font-bold">Resources</h3>
            <span className="h-[3px] w-16 bg-cyan-950 flex rounded-full mt-5 mb-8"></span>
            <div className="resource-form mb-4">
              <input
                type="text"
                placeholder="Title"
                value={resourceTitle}
                onChange={(e) => setResourceTitle(e.target.value)}
                className="w-full p-2 mb-2 border border-slate-500 rounded-lg"
              />
              <input
                type="url"
                placeholder="URL"
                value={resourceUrl}
                onChange={(e) => setResourceUrl(e.target.value)}
                className="w-full p-2 mb-2 border border-slate-500 rounded-lg"
              />
              <button
                onClick={handleAddResource}
                className="w-full p-2 bg-cyan-700 text-white font-semibold rounded-lg"
              >
                Add Resource
              </button>
            </div>
            <div className="resource-list">
              {resources.map((resource, index) => (
                <div key={index} className="resource-item mb-2">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 underline"
                  >
                    {resource.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 py-6 rounded-xl bg-cyan-100 border border-slate-600">
            <h3 className="text-3xl font-bold">
              Results: {score > 0 ? (score / questions.length) * 100 : 0}%
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default QuizPage;
