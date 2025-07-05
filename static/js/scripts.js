// クラスごとのカード名リスト
const classes = {
  エルフ: [
    "フェアリー",
    "森の神秘"
  ],
  ロイヤル: [

  ],
  ウィッチ: [

  ],
  ドラゴン: [

  ],
  ナイトメア: [
    "スケルトン",
    "ゴースト",
    "バット"
  ],
  ビショップ: [

  ],
  ネメシス: [
    "操り人形",
    "改良型・操り人形",
    "フューチャー・コア",
    "パスト・コア",
    "アタックアーティファクト",
    "キャッスルアーティファクト",
    "デストロイアーティファクトα",
    "デストロイアーティファクトβ",
    "デストロイアーティファクトγ",
    "イクシードアーティファクトΩ"
  ],
};

// DOM 要素取得
const classSelect = document.getElementById("classSelect");
const cardList    = document.getElementById("cardList");

// カード行をレンダリングする関数
function renderCards(selectedClass) {
  cardList.innerHTML = ""; // クリア
  const names = classes[selectedClass] || [];
  names.forEach(name => {
    const row = document.createElement("div");
    row.className = "card-row";

    const label = document.createElement("div");
    label.className = "card-name";
    label.textContent = name;

    const count = document.createElement("div");
    count.className = "count";
    count.textContent = "0";

    const plus = document.createElement("button");
    plus.className = "btn";
    plus.textContent = "+";
    plus.addEventListener("click", () => {
      count.textContent = parseInt(count.textContent) + 1;
    });

    const minus = document.createElement("button");
    minus.className = "btn";
    minus.textContent = "−";
    minus.addEventListener("click", () => {
      const v = parseInt(count.textContent);
      if (v > 0) count.textContent = v - 1;
    });

    row.append(label, plus, minus, count);
    cardList.appendChild(row);
  });
}

// 初期レンダリング＆セレクト変更時の再描画
renderCards(classSelect.value);
classSelect.addEventListener("change", () => {
  renderCards(classSelect.value);
});
