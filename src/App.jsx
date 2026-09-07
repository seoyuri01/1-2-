function App() {
  return (
    <div>
      <h1>듀오링고 </h1>
      <div className="card">
       <h2>Unit 1</h2>
       <p>기초 단어</p>
      </div>
    </div>
  );
}

export default App;
const levels = [
  { id: 1, text: "일본어를 처음 배워요", bars: 1 },
  { id: 2, text: "자주 사용되는 단어 몇 개를 알고 있어요", bars: 2 },
  { id: 3, text: "기본적인 대화를 할 수 있어요", bars: 3 },
  { id: 4, text: "다양한 주제에 대해 이야기할 수 있어요", bars: 4 },
  { id: 5, text: "대부분의 주제에 대해 상세하게 토론할 수 있어요", bars: 5 },
];

<div className="app">
  <div className="header">
    <div className="bubble">일본어를 얼마나 알고 계시나요?</div>
  </div>

  {levels.map((level) => (
    <button className="option" key={level.id}>
      <div className="bars">
        <span className={level.bars >= 1 ? "bar on" : "bar"}></span>
        <span className={level.bars >= 2 ? "bar on" : "bar"}></span>
        <span className={level.bars >= 3 ? "bar on" : "bar"}></span>
        <span className={level.bars >= 4 ? "bar on" : "bar"}></span>
      </div>
      <span className="option-text">{level.text}</span>
    </button>
  ))}
</div>