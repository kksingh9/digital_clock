import logo from './logo.svg';
import './App.css';
import Accordion from './accordion';
import CountDownTimer from './countDown/CountDownTimer';
import NestedComments from './Comments/nestedComments';
import Debouncing from './Debouncing/debouncing';
import ThrottledScroll from './Throttle/Throttle';
import Pagination from './pagination/pagination';

function App() {
  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript."
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React."
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js."
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js."
    },
  ];
  return (
    <div className="">
     <Accordion items={items}/>
     <CountDownTimer />
     {/* <NestedComments />
     <Debouncing />
     <ThrottledScroll /> */}
     <Pagination />
    </div>
    
  );
}

export default App;
