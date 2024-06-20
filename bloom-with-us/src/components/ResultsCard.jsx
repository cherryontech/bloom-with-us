/* eslint-disable react/prop-types */
export default function ResultsCard({ yesAnswer, noAnswer }) {
  return (
    <div className="container mt-4 mx-auto">
      <h2 className="text-2xl font-bold mb-4">I have these skills:</h2>
      {/* mapping each yesAnswer from array into grid card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {yesAnswer.map((result, index) => (
          <div
            key={index}
            className="card m-2 border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform"
          >
            <div className="m-3">
              <h2 className="text-lg mb-2">{result.skill}</h2>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-8">
        I can improve these skills:
      </h2>
      {/* mapping each noAnswer from array into grid card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {noAnswer.map((result, index) => (
          <div
            key={index}
            className="card m-2 border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform"
          >
            <div className="m-3">
              <h2 className="text-lg mb-2">{result.skill}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
