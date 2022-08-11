const Modal8_11 = (props) => {
  return (
    <>
      <div className="backdrop" />
      <div className="modal__wrapper">
        <div className="modal">
          <header className="modal__header">
            <h1 className="modal__header--h1">Add a Class</h1>
          </header>

          <div className="modal__content">
            <div className="modal__content--room">
              <h2 className="modal__content--room--h2">Room</h2>
              <button>A</button>
              <button>B</button>
              <button>C</button>
              <button>D</button>
              <button>E</button>
            </div>

            <div className="modal__content--subject">
              <h2>Subject</h2>
              <form>
                <input type="text" id="fname" name="fname"></input>
              </form>
            </div>

            <div className="modal__content--teacher">
              <h2>Teacher</h2>
              <select>
                <option>Select teacher</option>
                <option>SUS</option>
              </select>
            </div>

            <div className="modal__content--ta">
              <h2>{`Teacher Assistance (T Ass)`}</h2>
              <select>
                <option>Select TA</option>
                <option>None</option>
              </select>
            </div>

            <div className="modal__content--fc">
              <div className="modal__content--fc--floor">
                <h2>Floor</h2>
                <select>
                  <option>Select floor</option>
                  <option>9</option>
                  <option>11</option>
                </select>
              </div>

              <div className="modal__content--fc--classroom">
                <h2>Classroom</h2>
                <select>
                  <option>Select classroom</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
            </div>
          </div>
          <footer className="footer10">
            <button className="footer10__botbuttons1">Cancel</button>
            <button className="footer10__botbuttons2">Save</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Modal8_11;
