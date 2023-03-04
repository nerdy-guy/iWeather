const Converter = ({ setMetric }) => {
  const convertToMetric = () => {
    setMetric(true);
  };

  const convertToImperial = () => {
    setMetric(false);
  };

  return (
    <div className="converter">
      <button className="converter-button" onClick={convertToMetric}>
        &deg;C
      </button>
      <span>|</span>
      <button className="converter-button" onClick={convertToImperial}>
        &deg;F
      </button>
    </div>
  );
};

export default Converter;
