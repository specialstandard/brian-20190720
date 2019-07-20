import React from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import Error from './components/Error/Error';
import Files from './components/Files/Files';
import Loader from './components/Loader/Loader';
import Status from './components/Status/Status';
import useFileUploader from './hooks/useFileUploader';

const App = () => {
  const [error, isLoading, searchQuery, filteredFiles, fileChangeHandler, deleteHandler, searchChangeHandler] = useFileUploader();

  return (
    <div className="App">
      <div className="container">
        <Loader isLoading={isLoading} />
        <Controls searchQuery={searchQuery} searchChangeHandler={searchChangeHandler} fileChangeHandler={fileChangeHandler} />
        <Error error={error}/>
        <Status filteredFiles={filteredFiles} />
        <Files filteredFiles={filteredFiles} deleteHandler={deleteHandler}/>
      </div>
    </div>
  );
}

export default App;
