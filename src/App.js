import "./App.css";

function TopNav({ id }) {
  return (
    <div id={id} className="TopNavigation">
      Top Navigation
    </div>
  );
}

function ThirdColumn() {
  return (
    <div id="ThirdColumn">
      <TopNav id="TopNavigation1" />
      <div id="ThirdColumnSplitContainer">
        <div id="UserChatContainerThirdColumn">
          <ThirdColumnSplit id="ThirdColumnSplit1" />
          <UserChatInput />
        </div>
        <ThirdColumnSplit id="ThirdColumnSplit2" />
      </div>
    </div>
  );
}

function SecondColumn() {
  return (
    <div id="SecondColumn">
      <TopNav id="TopNavigation2" />
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

function Navigation() {
  return <div id="navigation">Navigation</div>;
}

function UserChatInput() {
  return (
    <div id="ChatInputContainer">
      <AddImages />
      <input type="input" id="ChatInput"></input>
      <div id="EmoticonContainer">
        <button>1</button>
      </div>
    </div>
  );
}

function AddImages() {
  return (
    <div id="ImageAdd">
      <button>+</button>
    </div>
  );
}

function ThirdColumnSplit({ id }) {
  return (
    <div id={id} className="ThirdColumnSplit">
      THird Column Splits
    </div>
  );
}
function App() {
  return (
    <div id="master">
      <Navigation />
      <SecondColumn />
      <ThirdColumn />
    </div>
  );
}

export default App;
