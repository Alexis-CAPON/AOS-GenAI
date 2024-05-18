export const ReleaseNote = ({ version, description, features }) => (
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="text-xl font-bold">{`AOS - Prototype ${version} - ${description}`}</h2>
    <ul className="list-disc list-inside">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);
