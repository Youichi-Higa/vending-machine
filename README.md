# 概要

- Recursion の Project2 の課題で作成したもので、JavaScript の DOM の学習で Slider を実装した。
- ボタンをクリックすると、NBA チームのロゴ、チーム名、資産価値額がスライドして表示される。
- HTML を直接書かずに JavaScript の DOM 操作で実装する形だったので難しく、ほぼ見本のページのソースコードを見ての写経になってしまった。
- ただ、見本のコードに不要なロジック（index が-1 の時に条件分岐がされていたが、そのような場合はない）を見つけることができたので、そちらは削除した。

```diff
- if (index === -1) {
-   currentElement.innerHTML = `
-   <img class='col-10' src="${teams[0].imgPath}" alt="${teams[0].name}">
-   `;
- } else {
  currentElement.innerHTML = `
  <img class='col-10' src="${teams[index].imgPath}" alt="${teams[index].name}">
  `;
- }
```

- 見本のコードは Class を使用し、Controller や View に分けて責務をしっかり分けることにより可読性やメンテナンスしやすいものとなっており、勉強になった。

### deploy

https://youichi-higa.github.io/vending-machine/

### 見本

https://recursionist.io/private/general/html/project2/vending-machine.html

### 2022 年の NBA チームの資産価値ランキング

https://www.forbes.com/sites/mikeozanian/2022/10/27/nba-team-values-2022-for-the-first-time-in-two-decades-the-top-spot-goes-to-a-franchise-thats-not-the-knicks-or-lakers/?sh=31edb6d21cce
