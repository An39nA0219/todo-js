import "./styles.css";

const onClickAdd = () => {
  // /テキストボックスの値を取得＆初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createInconpleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createInconpleteList = (text) => {
  //li生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "list-name";
  p.innerText = text;

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

    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すを押された親タグを削除
      const deleteLi = backButton.closest("li");
      const text = deleteLi.firstElementChild.firstElementChild.innerText;
      document.getElementById("complete-list").removeChild(deleteLi);

      createInconpleteList(text);
    });

    // pタグ、ボタンを追加
    addTarget.appendChild(addP);
    addTarget.appendChild(backButton);
    const li = document.createElement("li");
    li.appendChild(addTarget);

    // 完了リストに追加
    const completeList = document.getElementById("complete-list");
    completeList.appendChild(li);
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

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
