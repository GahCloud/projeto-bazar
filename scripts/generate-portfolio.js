const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(process.cwd(), "public", "portfolio");
const OUT_JSON = path.join(process.cwd(), "src", "data", "portfolio.json");
const REPORT_JSON = path.join(process.cwd(), "src", "data", "portfolio-report.json");

const categories = [
  { folder: "SANTOS_GESSO", id: "santos-de-gesso", label: "Santos de Gesso" },
  { folder: "NATAL", id: "natal", label: "Natal" },
  { folder: "HALLOWEEN", id: "halloween", label: "Halloween" },
  { folder: "PASCOA", id: "pascoa", label: "Páscoa" },
  { folder: "MDF", id: "mdf", label: "Produtos MDF" },
  { folder: "DIVERSOS", id: "diversos", label: "Diversos" },
];

const supportedExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function hashId(input) {
  return crypto.createHash("sha1").update(input).digest("hex").slice(0, 12);
}

function cleanBaseName(base) {
  let cleaned = base.replace(/_/g, " ");
  cleaned = cleaned.replace(/[\s_-]*\d{2,}$/, "");
  cleaned = cleaned.replace(/\s+/g, " ").trim();
  return cleaned;
}

function titleCase(input) {
  return input
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function slugify(input) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function listFilesRecursive(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listFilesRecursive(fullPath));
      continue;
    }
    out.push(fullPath);
  }
  return out;
}

function toPosix(inputPath) {
  return inputPath.split(path.sep).join("/");
}

function buildProduct(relativePath, category) {
  const fileName = path.basename(relativePath);
  const ext = path.extname(fileName).toLowerCase();
  const fileBase = path.basename(fileName, ext);
  const cleanedTitle = cleanBaseName(fileBase);
  const title = titleCase(cleanedTitle || fileBase);
  const id = hashId(`${category.folder}/${relativePath}`);
  const slugBase = slugify(cleanedTitle || fileBase);
  const slug = slugBase || id;
  const imageSrc = `/portfolio/${toPosix(path.join(category.folder, relativePath))}`;
  const alt = `${title} - ${category.label}`;
  const descriptions = {
    "santos-de-gesso": "Imagem religiosa artesanal em gesso, pintada à mão.",
    natal: "Enfeite natalino artesanal para decoração.",
    halloween: "Peça artesanal temática para o Halloween.",
    pascoa: "Peça decorativa artesanal para a Páscoa.",
    mdf: "Item artesanal produzido em MDF.",
    diversos: "Item artesanal exclusivo feito com carinho.",
  };

  return {
    id,
    slug,
    title,
    description: descriptions[category.id] || "Item artesanal exclusivo.",
    imageSrc,
    alt,
    category: category.id,
    categoryLabel: category.label,
    _sourceFolder: category.folder,
  };
}

function main() {
  const dedupe = new Map();
  const slugSet = new Set();

  for (const category of categories) {
    const categoryPath = path.join(ROOT, category.folder);
    const files = listFilesRecursive(categoryPath);

    for (const filePath of files) {
      const ext = path.extname(filePath).toLowerCase();
      if (!supportedExt.has(ext)) continue;

      const relativePath = path.relative(categoryPath, filePath);
      const dedupeKey = path.basename(relativePath, ext).toLowerCase();
      const seed = buildProduct(relativePath, category);

      const existing = dedupe.get(dedupeKey);
      if (existing) {
        const preferNew = existing._sourceFolder === "DIVERSOS" && category.folder !== "DIVERSOS";
        if (preferNew) {
          dedupe.set(dedupeKey, seed);
        }
        console.warn(
          "[portfolio] Imagem duplicada detectada:",
          dedupeKey,
          "?",
          preferNew ? "substituída" : "ignorada"
        );
        continue;
      }

      dedupe.set(dedupeKey, seed);
    }
  }

  const products = Array.from(dedupe.values()).map((product) => {
    let slug = product.slug;
    if (slugSet.has(slug)) {
      slug = `${slug}-${product.id.slice(0, 6)}`;
    }
    slugSet.add(slug);

    const { _sourceFolder, ...rest } = product;
    return { ...rest, slug };
  });

  const perCategory = {};
  for (const category of categories) {
    perCategory[category.id] = products.filter((p) => p.category === category.id).length;
  }

  const sampleSlugs = products.slice(0, 10).map((p) => p.slug);

  console.info("[portfolio] Total de produtos:", products.length);
  console.info("[portfolio] Total por categoria:", perCategory);
  console.info("[portfolio] Exemplos de slugs:", sampleSlugs);

  fs.writeFileSync(OUT_JSON, JSON.stringify(products, null, 2));
  fs.writeFileSync(
    REPORT_JSON,
    JSON.stringify(
      {
        total: products.length,
        perCategory,
        sampleSlugs,
        generatedAt: new Date().toISOString(),
      },
      null,
      2
    )
  );
}

main();
