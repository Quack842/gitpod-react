import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunction from './components/ConditionalRenderingFunction';

function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunction connected={true} />
    </div>
  );
}

export default App;
