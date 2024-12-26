DB に変更があった場合、以下を実施して prisma client を生成する。

// 1. DB の変更を schema へ反映
npx prisma db pull

// 2. スネークケースからキャメルケールに変換
cd prisma
npx prisma-case-format

// 3. prisma client の生成
npx prisma generate
