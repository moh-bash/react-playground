function Model({ error, isVisible }) {
  if (isVisible) {
    return (
      <div className="back-model">
        <div className="model">
          <div className="close-button">
            X
          </div>
          <p className={error ? "error" : "success"}>
            {error
              ? error
              : "the form has been submitted successfully!"}
          </p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Model;
