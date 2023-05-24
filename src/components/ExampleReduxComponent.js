import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const ExampleReduxComponent = ({ darkMode, toggleDarkMode }) => {

  if(darkMode){
    import ('../styles/ExampleReduxComponent.css');
  } else {
    import ('../styles/dark_theme/ExampleReduxComponent.css');
  }

  const handleToggle = () => {
    toggleDarkMode(!darkMode);
  };

  return (
    <div className={`example-component-container -${darkMode ? 'dark-mode' : ''}`}>
      <div className={`example-component -${darkMode ? 'dark-mode' : ''}`}>
        {darkMode ? <h1>Bright Mode</h1> : <h1>Dark Mode</h1>}
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.theme.darkMode
});

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: (darkMode) =>
    dispatch({ type: 'TOGGLE_DARK_MODE', payload: darkMode })
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleReduxComponent);
