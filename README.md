# CCU Chiayi Guide

CCU Chiayi Guide 是一個以「搜尋引擎行銷 SEO/SEM」課程為核心的靜態網站專案，主題聚焦於國立中正大學新生、家長、訪客與嘉義生活圈資訊。

本網站希望整理中正大學校園生活、民雄周邊美食、嘉義景點與在地美食等內容，協助初次來到中正大學或嘉義地區的人快速掌握實用資訊。

官方網址：

```text
https://ccu-chiayi-guide.site
```

---

## 專案目標

本專案希望協助中正大學新生與初次到訪者快速了解校園與嘉義生活資訊，包含宿舍、美食、交通、嘉義景點與在地生活等內容。

主要目標如下：

- 提供中正大學新生實用的校園生活指南
- 整理中正大學與民雄周邊美食資訊
- 說明前往中正大學的常見交通方式
- 介紹嘉義景點與在地美食資訊
- 建立具備 SEO / SEM 思維的靜態網站
- 透過清楚的網站架構與內容分類，提升使用者閱讀體驗
- 建立與大型旅遊網站、論壇內容不同的在地化價值

---

## 目標使用者

本網站主要服務以下對象：

- 中正大學新生
- 準大學生
- 新生家長
- 初次到訪中正大學的訪客
- 想了解民雄美食與嘉義景點的人
- 想查詢嘉義在地美食與旅遊資訊的人
- 搜尋「中正大學宿舍」、「中正大學附近美食」、「中正大學交通」、「嘉義景點」、「嘉義美食」等資訊的使用者

---

## 網站頁面規劃

| 頁面            | 檔案名稱       | 核心主題                 | 主要關鍵字        |
| --------------- | -------------- | ------------------------ | ----------------- |
| 首頁 / 新生生活 | `index.html`   | 新生生活與宿舍總覽       | 中正大學 新生     |
| 美食指南        | `food.html`    | 中正大學、民雄與嘉義美食 | 中正大學 附近美食 |
| 交通指南        | `traffic.html` | 前往中正大學的交通方式   | 中正大學 交通     |
| 嘉義指南        | `chiayi.html`  | 嘉義景點與在地旅遊資訊   | 嘉義 景點         |

---

## 技術棧

本專案採用純靜態網站架構，主要技術如下：

- HTML5
- CSS3
- JavaScript
- Bootstrap 5 CSS
- GitHub Pages
- Google Search Console
- Google PageSpeed Insights

---

## 專案特色

### 1. SEO / SEM 導向

本專案以搜尋引擎行銷課程為核心，因此開發時不只考慮畫面呈現，也重視：

- 關鍵字規劃
- 搜尋意圖分析
- Title 與 Meta Description
- Canonical URL
- 內部連結
- Sitemap
- Robots.txt
- PageSpeed 表現

### 2. 中正大學新生視角

本網站內容會以中正大學新生與初次到訪者的需求為出發點，整理實際可能遇到的問題，例如：

- 新生剛入學要如何了解宿舍生活
- 沒有機車時可以去哪裡吃飯
- 從嘉義火車站或民雄火車站如何前往中正大學
- 家長開車到中正大學時需要注意什麼
- 民雄與中正大學周邊有哪些常見用餐選擇

### 3. 嘉義景點與美食資訊

除了中正大學校園生活，本專案也會整理嘉義地區的景點與美食資訊，讓使用者能從校園延伸到嘉義生活圈。

內容方向包含：

- 嘉義市區景點
- 民雄周邊景點
- 嘉義在地美食
- 適合學生與家長安排的行程
- 中正大學學生常去的嘉義生活地點

### 4. 靜態網站架構

本專案目前維持純靜態網站，不使用後端、資料庫或前端框架。

除非未來有明確需求與開發計畫，否則不新增：

- React
- Vue
- Next.js
- Node.js 後端
- Express API
- 資料庫
- 會員系統
- 登入系統
- 購物車或金流功能

---

## 專案結構

建議專案結構如下：

```text
/
├── README.md
├── index.html
├── food.html
├── traffic.html
├── chiayi.html
├── robots.txt
├── sitemap.xml
├── css/
    ├── base.css
    ├── layout.css
    ├── components.css
    └── pages/
        ├── index.css
        ├── food.css
        ├── traffic.css
        └── chiayi.css
├── js/
    ├── main.js
    └── pages/
        ├── index.js
        ├── food.js
        ├── traffic.js
        └── chiayi.js
├── images/
```

---

## 快速開始

### 1. Clone 專案

```bash
git clone <repository-url>
cd ccu-chiayi-guide
```

### 2. 開啟專案

本專案為靜態網站，可直接使用瀏覽器開啟：

```text
index.html
```

也可以使用 VSCode Live Server 擴充套件進行本機預覽。

### 3. 修改樣式

全站共用樣式請修改：

- `css/base.css`
- `css/layout.css`
- `css/components.css`

單一頁面樣式請修改：

- `css/pages/index.css`
- `css/pages/food.css`
- `css/pages/traffic.css`
- `css/pages/chiayi.css`

### 4. 修改互動功能

全站共用互動功能請修改：

- `js/main.js`

單一頁面互動功能請修改：

- `js/pages/index.js`
- `js/pages/food.js`
- `js/pages/traffic.js`
- `js/pages/chiayi.js`

---

## 開發規範摘要

開發時需遵守以下原則：

- 每個 HTML 頁面只能有一個 `h1`
- `h1` 必須包含該頁核心關鍵字
- 每頁需有唯一的 `title`
- 每頁需有唯一的 `meta description`
- 每頁需設定 canonical URL
- 主要內容需放在 `main` 中
- 導覽列使用 `nav`
- 頁尾使用 `footer`
- 內容區塊使用有意義的 `section`
- 圖片需有描述性 `alt`
- 主要文字內容不得只依賴 JavaScript 產生
- 不得捏造店家資料、評分、評論或營業時間

---

## SEO 檢查重點

每次新增或修改頁面後，需確認：

- 是否只有一個 `h1`
- 是否有唯一的 `title`
- 是否有唯一的 `meta description`
- 是否設定 canonical
- 是否使用語意化 HTML
- 是否加入適當的導覽與內部連結
- 圖片是否有描述性 `alt`
- Sitemap 是否需要更新
- Robots.txt 是否允許搜尋引擎爬取
- 手機版是否正常顯示
- PageSpeed 是否維持良好

---

## 部署方式

本專案預計使用 GitHub Pages 部署。

部署後需確認：

- 網站可正常開啟
- 自訂網域設定正確
- `robots.txt` 可正常讀取
- `sitemap.xml` 可正常讀取
- canonical URL 指向正式網址
- Google Search Console 已提交 Sitemap
- 手機版頁面顯示正常
- 網站載入速度符合預期

---

## 專案原則

本專案的核心不是單純堆疊關鍵字，而是：

```text
用清楚的網站結構，回答中正大學新生與嘉義旅客真的會搜尋的問題。
```

本專案的內容不是為了迎合搜尋引擎，而是：

```text
先對使用者有幫助，再讓搜尋引擎更容易理解網站內容。
```

本專案希望呈現的價值是：

```text
從中正大學出發，整理校園、民雄與嘉義生活圈的實用資訊。
```
# CCU-Chiayi-Guide
