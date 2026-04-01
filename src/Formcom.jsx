import Model from "./Model";
import { useState } from "react";
function Formcom() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    salary: "",
    employed: false,
  });

  const isDisabled =
    formData.name == "" ||
    formData.email == "" ||
    formData.age == "" ||
    formData.phone == "" ||
    formData.salary == "";

  function handleButton(e) {
    e.preventDefault();
    setErrorMessage(null);
    if (formData.age < 18 || formData.age > 100) {
      setErrorMessage("age must be between 18 and 100");
    } else if (formData.phone.length != 10) {
      setErrorMessage("phone number must be at least 10 digits");
    }
    setIsModalOpen(true);
  }
  function handleCloseModel() {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  }

  return (
    <div className="container" onClick={handleCloseModel}>
      <form id="laon-form" className="box">
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <div className="input-group">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label for="age">age</label>
          <input
            id="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setformData({ ...formData, age: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label for="phone">Phone</label>
          <input
            id="phone"
            type="number"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setformData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label for="salary">Salary</label>
          <select
            id="salary"
            value={formData.salary}
            onChange={(e) =>
              setformData({ ...formData, salary: e.target.value })
            }
          >
            <option value="">Select Salary</option>
            <option value="0-50000">0-50,000</option>
            <option value="50000-100000">50,000-100,000</option>
            <option value="100000+">100,000+</option>
          </select>
        </div>
        <div>
          <input
            id="employed"
            type="checkbox"
            checked={formData.employed}
            onChange={(e) =>
              setformData({ ...formData, employed: e.target.checked })
            }
          />
          <label for="employed">Are you employed?</label>
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          onClick={handleButton}
          className={isDisabled ? "disapled" : ""}
        >
          Submit
        </button>
      </form>
      <Model error={errorMessage} isVisible={isModalOpen} />
    </div>
  );
}

export default Formcom;
