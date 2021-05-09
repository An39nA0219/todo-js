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

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("complete");
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // 入れ子構造の作成
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了ulに追加
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
