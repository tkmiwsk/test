# デザインコンセプト & デザインシステム

## 1. デザインコンセプト

### ビジョン

**「暗闇の中で光るデータ、その光を届けるキャラクター」**

SNSの数値データという無機質なものに、キャラクターという「人格」を与えることで、
データ体験を**エモーショナルで、シェアしたくなる体験**に変える。

### デザイン原則

| # | 原則 | 説明 | 具体例 |
|---|------|------|--------|
| 1 | **Character First** | UIの主役はキャラクター。数値はキャラの「言葉」を通して届ける | データだけのダッシュボードにしない。必ずキャラのコメントが付く |
| 2 | **Dark Canvas** | ダーク基調の画面をキャンバスとし、キャラカラーが映える舞台にする | 暗い背景にキャラのテーマカラーが発光するように浮かぶ |
| 3 | **Emotional Data** | 数値を感情に翻訳する。グラフより「キャラの反応」で伝える | +12% → ヨミの口角が上がる / バッサーが「ま、悪くない」 |
| 4 | **Screenshot Worthy** | すべての画面が「スクショ → シェア」される前提で設計する | 余白・フォントサイズ・コントラストをスクショ映えに最適化 |
| 5 | **Gentle Onboarding** | 連携のハードルを下げ、キャラとの出会いを優先する | 診断 → キャラ紹介 → API連携の順。強制しない |

### ムードボード（言語化）

```
キーワード:
  夜空 / ネオン / ホログラム / 温かい光 / 呼吸するUI

雰囲気:
  「深夜のカフェで、信頼できる友人とSNSの相談をしている」
  → 落ち着いたダーク空間 + キャラの存在感 + 親密な距離感

参考イメージ:
  - サイバーパンク的なネオン（ただし攻撃的にならない程度に抑制）
  - あすけんのキャラ表示UI（吹き出し + アイコン）
  - Spotifyのダークモード（黒背景にカラーが映える）
  - LINEのチャットUI（親しみやすさ・吹き出しの自然さ）
```

---

## 2. カラーシステム

### ベースカラー

| トークン名 | カラー | 用途 |
|-----------|--------|------|
| `bg-primary` | `#0D1117` | 画面背景（ほぼ黒のダークネイビー） |
| `bg-secondary` | `#161B22` | カード・セクション背景 |
| `bg-tertiary` | `#21262D` | 入力フィールド・ホバー状態 |
| `border-default` | `#30363D` | ボーダー・区切り線 |
| `border-subtle` | `#21262D` | 控えめなボーダー |

### テキストカラー

| トークン名 | カラー | 用途 |
|-----------|--------|------|
| `text-primary` | `#F0F6FC` | 見出し・重要テキスト |
| `text-secondary` | `#8B949E` | 説明文・補足テキスト |
| `text-tertiary` | `#484F58` | プレースホルダー・非活性 |
| `text-on-accent` | `#FFFFFF` | アクセントカラー上のテキスト |

### キャラクターカラー（テーマカラー）

キャラ選択に応じてアプリ全体のアクセントが切り替わる。

#### ヨミ ― Cyan System

| トークン名 | カラー | 用途 |
|-----------|--------|------|
| `yomi-primary` | `#00D4FF` | メインアクセント。ボタン・ハイライト |
| `yomi-glow` | `#00D4FF40` | 発光エフェクト（40%透明度） |
| `yomi-surface` | `#00D4FF15` | カード背景のうっすらとしたティント |
| `yomi-dark` | `#0A2A3A` | キャラ吹き出し背景 |

#### バッサー ― Crimson System

| トークン名 | カラー | 用途 |
|-----------|--------|------|
| `bassar-primary` | `#FF3B5C` | メインアクセント。ボタン・ハイライト |
| `bassar-glow` | `#FF3B5C40` | 発光エフェクト |
| `bassar-surface` | `#FF3B5C15` | カード背景ティント |
| `bassar-dark` | `#3A0A15` | キャラ吹き出し背景 |

#### ヌクル ― Mint System

| トークン名 | カラー | 用途 |
|-----------|--------|------|
| `nukuru-primary` | `#5CFFB1` | メインアクセント。ボタン・ハイライト |
| `nukuru-glow` | `#5CFFB140` | 発光エフェクト |
| `nukuru-surface` | `#5CFFB115` | カード背景ティント |
| `nukuru-dark` | `#0A3A25` | キャラ吹き出し背景 |

### セマンティックカラー

| トークン名 | カラー | 用途 |
|-----------|--------|------|
| `status-success` | `#3FB950` | 数値上昇・達成 |
| `status-warning` | `#D29922` | 注意・緩やかな下降 |
| `status-danger` | `#F85149` | 数値悪化・警告 |
| `status-info` | `#58A6FF` | 情報・ニュートラル |

### カラー適用ルール

```
1. アクセントカラーは選択中キャラのテーマに連動する
2. セマンティックカラーはキャラに依存しない（常に同じ）
3. キャラの吹き出し背景にはキャラの `*-dark` を使う
4. グロー（発光）エフェクトは控えめに。多用しない
5. テキストは常にWCAG AA以上のコントラスト比を確保する
```

---

## 3. タイポグラフィ

### フォントファミリー

| 用途 | フォント | フォールバック | 理由 |
|------|---------|--------------|------|
| 見出し | **Noto Sans JP Bold** | sans-serif | 視認性が高く、ダークモードで映える |
| 本文 | **Noto Sans JP Regular** | sans-serif | 可読性重視。多言語対応 |
| キャラ台詞 | **Zen Maru Gothic** | sans-serif | 丸ゴシックで温かみ。キャラの人格を感じさせる |
| 数値 | **Inter / Tabular nums** | monospace | 数字の整列。データ表示に最適 |

### タイプスケール

| トークン名 | サイズ | 行間 | ウェイト | 用途 |
|-----------|--------|------|---------|------|
| `display` | 28px | 1.3 | Bold | 診断結果・キャラ名 |
| `heading-l` | 22px | 1.35 | Bold | 画面タイトル |
| `heading-m` | 18px | 1.4 | Bold | セクション見出し |
| `heading-s` | 16px | 1.4 | SemiBold | カード見出し |
| `body-l` | 16px | 1.6 | Regular | キャラ台詞（メイン） |
| `body-m` | 14px | 1.6 | Regular | 一般テキスト |
| `body-s` | 12px | 1.5 | Regular | 補足テキスト・タイムスタンプ |
| `caption` | 11px | 1.4 | Regular | ラベル・バッジ |
| `data-l` | 32px | 1.2 | Bold | 主要数値（フォロワー数等） |
| `data-m` | 20px | 1.2 | SemiBold | サブ数値 |
| `data-s` | 14px | 1.2 | Medium | 変化率（+12%等） |

---

## 4. スペーシング & レイアウト

### スペーシングスケール

| トークン | 値 | 主な用途 |
|---------|-----|---------|
| `space-xs` | 4px | アイコンとラベルの間 |
| `space-s` | 8px | コンパクトな要素間 |
| `space-m` | 12px | カード内パディング |
| `space-l` | 16px | セクション内の要素間 |
| `space-xl` | 24px | セクション間 |
| `space-2xl` | 32px | 画面上部の余白 |
| `space-3xl` | 48px | 大きなセクション間 |

### レイアウトグリッド

```
画面幅: 375px（iPhone SE基準） ～ 428px（iPhone 14 Pro Max）
マージン: 左右 16px
カラム: 自由配置（グリッドレスの柔軟レイアウト）
```

### 角丸（Border Radius）

| トークン | 値 | 用途 |
|---------|-----|------|
| `radius-s` | 8px | 小さなチップ・タグ |
| `radius-m` | 12px | ボタン・入力フィールド |
| `radius-l` | 16px | カード |
| `radius-xl` | 24px | モーダル・ボトムシート |
| `radius-full` | 9999px | アバター・丸ボタン |

---

## 5. コンポーネント

### 5.1 キャラ吹き出し（Character Bubble）

アプリの中核コンポーネント。キャラの発言を表示する。

```
┌──────────────────────────────────┐
│  ┌────┐                         │
│  │アイコン│  キャラ名              │
│  └────┘                         │
│                                  │
│  「セリフのテキストがここに入る。   │
│    ……改行もあり得る」             │
│                                  │
│                      [シェア 📤] │
└──────────────────────────────────┘

背景: {character}-dark
ボーダー: {character}-primary 1px（控えめ）
テキスト: Zen Maru Gothic / body-l
シェアボタン: 右下に控えめ配置
```

**バリエーション:**

| 種類 | 違い |
|------|------|
| `default` | 通常の吹き出し |
| `highlight` | 重要コメント。左ボーダーが太い（4px）+ グロー |
| `compact` | 一行の短いコメント。ホーム画面のひとこと用 |
| `system` | キャラ切替時の掛け合い用。2つの吹き出しが連なる |

### 5.2 データカード（Data Card）

数値情報を表示するカード。

```
┌──────────────────────────────────┐
│  ラベル（text-secondary / body-s）│
│                                  │
│  12,345  ← 主要数値（data-l）     │
│  +18% ↑  ← 変化（status-success）│
│                                  │
└──────────────────────────────────┘

背景: bg-secondary
角丸: radius-l
パディング: space-l
```

**バリエーション:**

| 種類 | 違い |
|------|------|
| `positive` | 変化値が `status-success` + 上矢印 |
| `negative` | 変化値が `status-danger` + 下矢印 |
| `neutral` | 変化値が `text-secondary` + 横矢印 |

### 5.3 ボタン（Button）

```
[Primary]  背景: {character}-primary / テキスト: text-on-accent
[Secondary] 背景: transparent / ボーダー: {character}-primary / テキスト: {character}-primary
[Ghost]    背景: transparent / テキスト: text-secondary（テキストリンク風）
```

| プロパティ | 値 |
|-----------|-----|
| 高さ | 48px（Primary）/ 40px（Secondary）/ auto（Ghost） |
| 角丸 | `radius-m` |
| フォント | `heading-s` |
| パディング | 左右 `space-xl` |

### 5.4 投稿サムネイル（Post Thumbnail）

```
┌────────┐
│        │
│  画像   │
│        │
│   ⭐   │  ← キャラコメントありバッジ
└────────┘

サイズ: 1:1（正方形）
角丸: radius-m
バッジ: 右下に小さく表示。キャラのテーマカラー
```

### 5.5 タブバー（Tab Bar）

```
┌─────────────────────────────────────┐
│  🏠        📊        👤        ⚙️    │
│ ホーム      分析      キャラ     設定   │
│  ───                               │
│  ↑ アクティブ: {character}-primary    │
└─────────────────────────────────────┘

背景: bg-primary + 上ボーダー（border-default）
高さ: 56px + セーフエリア
```

### 5.6 診断選択肢（Quiz Option）

```
┌──────────────────────────────────┐
│                                  │
│  A. 選択肢のテキスト              │
│                                  │
└──────────────────────────────────┘

デフォルト: bg-secondary / border-default
ホバー:    bg-tertiary / border-subtle
選択済み:  {character}-surface / {character}-primary ボーダー
角丸: radius-l
```

### 5.7 シェアカード（Share Card）

スクショ・SNSシェア用に自動生成される画像カード。

```
┌─────────────────────────┐
│                         │
│  [キャラ アイコン]       │
│                         │
│  「セリフの抜粋……」      │
│                         │
│  ─────────────          │
│  エンゲージメント率 5.1% │
│  #SNSアドバイザー       │
│  app-name.com           │
│                         │
└─────────────────────────┘

背景: bg-primary にキャラカラーのグラデーション
比率: 1:1（Instagram共有用）or 9:16（ストーリーズ用）
```

---

## 6. アニメーション & モーション

### 基本原則

| 原則 | 説明 |
|------|------|
| **呼吸するUI** | 静止画面でもキャラが「生きている」感覚を与える微細なアニメーション |
| **控えめな演出** | 過剰なアニメーションは避け、意味のある動きだけ使う |
| **キャラの感情を動きで** | テキストだけでなく、表情・動きでキャラの反応を伝える |

### イージング

| トークン | 値 | 用途 |
|---------|-----|------|
| `ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | 一般的なトランジション |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | 要素の出現 |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | 要素の退場 |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 褒め演出のバウンス |

### デュレーション

| トークン | 値 | 用途 |
|---------|-----|------|
| `duration-fast` | 150ms | ホバー・フォーカス |
| `duration-normal` | 300ms | 画面遷移・カード出現 |
| `duration-slow` | 500ms | キャラ登場・感情変化 |
| `duration-dramatic` | 800ms | 診断結果・キャラ切替演出 |

### キャラクターアニメーション

| アニメーション | 内容 | タイミング |
|--------------|------|-----------|
| アイドルモーション | 瞬き・わずかな呼吸。キャラが「待機中」の演出 | 常時（3〜5秒間隔） |
| リアクション | 数値を見た時の表情変化（喜び／驚き／落胆） | フィードバック表示時 |
| 登場 | フェードイン + スライドアップ | 画面遷移時 |
| 退場 | フェードアウト + スライドダウン | キャラ切替時 |
| 褒め演出 | キャラ周囲に光のパーティクル + バウンス | 大きな成果達成時 |

---

## 7. キャラ別テーマ適用例

キャラ選択時にアプリ全体の見た目が変わる仕組み。

```
ヨミ選択時:
  アクセント     → #00D4FF（シアン）
  吹き出し背景   → #0A2A3A
  グロー         → #00D4FF40
  全体の雰囲気   → クール・知的・静寂

バッサー選択時:
  アクセント     → #FF3B5C（クリムゾン）
  吹き出し背景   → #3A0A15
  グロー         → #FF3B5C40
  全体の雰囲気   → 熱い・鋭い・エネルギッシュ

ヌクル選択時:
  アクセント     → #5CFFB1（ミント）
  吹き出し背景   → #0A3A25
  グロー         → #5CFFB140
  全体の雰囲気   → 温かい・柔らかい・安心
```

---

## 8. スクショ映え設計ガイドライン

バズ導線の根幹。すべての画面がシェアされる前提で設計する。

| ルール | 詳細 |
|--------|------|
| **キャラ + セリフは常に1画面に収まる** | スクロールしないとセリフが見切れる状態にしない |
| **余白を十分に取る** | スクショ時にごちゃつかない。呼吸のある画面 |
| **フォントサイズは大きめに** | スマホスクショをTwitterで見ても読めるサイズ |
| **ブランド要素を自然に入れる** | アプリ名・ロゴが画面のどこかに小さく入る |
| **ダークモード × ネオンカラー** | タイムラインで目立つ。白背景アプリとの差別化 |
| **シェアボタンは控えめに** | UXの邪魔にならないが、必要な時にすぐ見つかる位置 |

---

## 9. 実装時のCSS変数マッピング（参考）

```css
:root {
  /* Base */
  --bg-primary: #0D1117;
  --bg-secondary: #161B22;
  --bg-tertiary: #21262D;
  --border-default: #30363D;
  --border-subtle: #21262D;

  /* Text */
  --text-primary: #F0F6FC;
  --text-secondary: #8B949E;
  --text-tertiary: #484F58;

  /* Status */
  --status-success: #3FB950;
  --status-warning: #D29922;
  --status-danger: #F85149;
  --status-info: #58A6FF;

  /* Character (default: Yomi) */
  --accent-primary: var(--yomi-primary);
  --accent-glow: var(--yomi-glow);
  --accent-surface: var(--yomi-surface);
  --accent-dark: var(--yomi-dark);

  /* Yomi */
  --yomi-primary: #00D4FF;
  --yomi-glow: #00D4FF40;
  --yomi-surface: #00D4FF15;
  --yomi-dark: #0A2A3A;

  /* Bassar */
  --bassar-primary: #FF3B5C;
  --bassar-glow: #FF3B5C40;
  --bassar-surface: #FF3B5C15;
  --bassar-dark: #3A0A15;

  /* Nukuru */
  --nukuru-primary: #5CFFB1;
  --nukuru-glow: #5CFFB140;
  --nukuru-surface: #5CFFB115;
  --nukuru-dark: #0A3A25;

  /* Spacing */
  --space-xs: 4px;
  --space-s: 8px;
  --space-m: 12px;
  --space-l: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;

  /* Radius */
  --radius-s: 8px;
  --radius-m: 12px;
  --radius-l: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Typography */
  --font-heading: 'Noto Sans JP', sans-serif;
  --font-body: 'Noto Sans JP', sans-serif;
  --font-character: 'Zen Maru Gothic', sans-serif;
  --font-data: 'Inter', monospace;

  /* Animation */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-dramatic: 800ms;
}

/* Character theme switch */
[data-character="yomi"] {
  --accent-primary: var(--yomi-primary);
  --accent-glow: var(--yomi-glow);
  --accent-surface: var(--yomi-surface);
  --accent-dark: var(--yomi-dark);
}
[data-character="bassar"] {
  --accent-primary: var(--bassar-primary);
  --accent-glow: var(--bassar-glow);
  --accent-surface: var(--bassar-surface);
  --accent-dark: var(--bassar-dark);
}
[data-character="nukuru"] {
  --accent-primary: var(--nukuru-primary);
  --accent-glow: var(--nukuru-glow);
  --accent-surface: var(--nukuru-surface);
  --accent-dark: var(--nukuru-dark);
}
```
