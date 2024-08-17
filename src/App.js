import "./App.css";

function master() {
  return (
    <div id="master">
      {navigation()}
      {SecondColumn()}
      {ThirdColumn()}
    </div>
  );
}

function ThirdColumn() {
  return <div id="ThirdColumn">Server Chat and DM Chat</div>;
}

function SecondColumn() {
  return (
    <div id="SecondColumn">
      {SecondColumnInterface()}
      {profile()}
    </div>
  );
}
function SecondColumnInterface() {
  return <div id="SecondColumnInterface">Channel Interface</div>;
}

function profile() {
  return <div id="profile">User Profile</div>;
}

function navigation() {
  return <div id="navigation">Navigation</div>;
}

function App() {
  return (
    <div>
      <button class="font-mono">Hello</button>
      <p class="TailwindTest">
        React and Tailwind css is cool as fuck
      </p>
      {master()}
    </div>
  );
}

export default App;
