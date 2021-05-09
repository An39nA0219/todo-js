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
    // 押された完了ボタンの親タグ削除
    deleteFromIncompleteList(completeButton.closest("li"));

    // リストの内容を取得
    const addLi = completeButton.closest("li");
    const addTarget = completeButton.closest("div");
    const text = addLi.firstElementChild.firstElementChild.innerText;

    // ボタン部分を初期化
    addTarget.textContent = null;

    // pタグ生成
    const addP = document.createElement("p");
    addP.className = "list-name";
    addP.innerText = text;

    // ボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // pタグ、ボタンを追加
    addTarget.appendChild(addP);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    const completeList = document.getElementById("complete-list");
    completeList.appendChild(addTarget);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.closest("li"));
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

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
