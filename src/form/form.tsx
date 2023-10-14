// TODO[FORM]: form control
// TODO[FORM: aria-live]

import { FormEvent, useState } from "react";

// TODO[FORM: handle submit form]
/**
 *
 * onSubmit, get the data from the form
 * onChange, validate
 */
// claritydev.net/blog/typescript-typing-form-events-in-react

export default function MyForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "string",
    lastName: "",
    address: "",
  });
  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      firstName: e.currentTarget.firstName?.value,
      lastName: e.currentTarget.lastName?.value,
      address: e.currentTarget.address?.value,
    };
    const totalData = formData;
  }

  function handleInputData(myKey: string, value: string) {
    if (value.length < 5) {
      setErrorMessage("woah error!");
    } else {
      setErrorMessage(null);
    }
    setFormData({ ...formData, [myKey]: value });
  }

  // function handleFormControl(e: any, )
  // TODO[FORM]: set state with object
  // TODO[FORM]: validate form
  // TODO[FORM]: get data on submit
  // TODO[aria-live]
  return (
    <>
      <h1 aria-live="polite" style={{ color: "red" }}>
        {errorMessage && errorMessage}
      </h1>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              id="firstName"
              onChange={(e) => handleInputData("firstName", e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              id="lastName"
              onChange={(e) => handleInputData("lastName", e.target.value)}
            ></input>
          </div>
        </fieldset>
        <div>
          <fieldset>
            <div>
              <label htmlFor="address">Address Street</label>
              <input
                name="address"
                id="address"
                onChange={(e) => handleInputData("address", e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input id="city" name="city"></input>
            </div>
            <div>
              <label htmlFor="zipCode">zip code</label>
              <input id="zipCode" name="zipCode"></input>
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select name="state">
                <option value="georgia">georgia</option>
                <option value="alabama">alabama</option>
              </select>
            </div>
          </fieldset>
          <div>
            <input type="submit" />
          </div>
        </div>
      </form>
    </>
  );
}
