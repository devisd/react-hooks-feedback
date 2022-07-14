import Feedback from './Feedback';

const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 120,
      }}
    >
      <Feedback good={0} neutral={0} bad={0} />
    </div>
  );
};

export default App;
