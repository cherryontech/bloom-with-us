/* eslint-disable react/prop-types */
export default function TaskCard({ title, description }) {
  return (
    <div className="flex flex-col text-start border-solid rounded-md border-2 border-bloom-pink mb-2 p-1">
      <p className="font-bold"> {title} </p>
      <p> {description} </p>
    </div>
  );
}
