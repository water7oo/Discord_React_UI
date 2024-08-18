import "./App.css";

function TopNav({ id }) {
  return (
    <div id={id} className="TopNavigation"> 
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
  return <div id="SecondColumnInterface"></div>;
}

function profile() {
  return <div id="profile"></div>;
}

function Navigation() {
  return <div id="navigation"></div>;
}

function UserChatInput() {
  return (
    <div id="MasterChatInputContainer">
      <div id="ChatInputContainer">
        <AddImages />
        <input type="input" id="ChatInput"></input>
        <div id="EmoticonContainer">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </div>
  );
}

function AddImages() {
  return (
    <div id="ImageAdd">
      <button id="AddImagesBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="plus-icon"
        >
          <path
            fill="currentColor"
            d="M12 5c-.552 0-1 .448-1 1v5H6c-.552 0-1 .448-1 1s.448 1 1 1h5v5c0 .552.448 1 1 1s1-.448 1-1v-5h5c.552 0 1-.448 1-1s-.448-1-1-1h-5V6c0-.552-.448-1-1-1z"
          />
        </svg>
      </button>
    </div>
  );
}

function ThirdColumnSplit({ id }) {
  return (
    <div id={id} className="ThirdColumnSplit">
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
