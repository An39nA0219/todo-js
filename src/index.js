import "./styles.css";

const onClickAdd = () => {
  // /テキストボックスの値を取得＆初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "list-name";
  p.innerText = inputText;

  // 入れ子構造の作成
  div.appendChild(p);
  li.appendChild(div);

  // 未完了ulに追加
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
